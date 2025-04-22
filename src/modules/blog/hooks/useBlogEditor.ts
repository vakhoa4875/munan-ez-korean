import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Toast } from 'primereact/toast';
import { confirmDialog } from 'primereact/confirmdialog';
import { BlogPost } from '../types/blog.types';
import { fetchBlogPost, saveBlogPost, deleteBlogPost, generateSlug } from '../services/blogService';

export const useBlogEditor = (id?: string) => {
    const navigate = useNavigate();
    const toast = useRef<Toast>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [tag, setTag] = useState<string>('');
    const [blogPost, setBlogPost] = useState<BlogPost>({
        title: '',
        slug: '',
        content: '',
        excerpt: '',
        featuredImage: '',
        category: '',
        tags: [],
        status: 'draft',
        author: 'Admin'
    });

    useEffect(() => {
        if (id) {
            setIsLoading(true);
            fetchBlogPost(id)
                .then(data => {
                    setBlogPost(data);
                })
                .catch(error => {
                    console.error('Error fetching blog post:', error);
                    showToast('error', 'Lỗi', 'Không thể tải bài viết');
                })
                .finally(() => {
                    setIsLoading(false);
                });
        }
    }, [id]);

    const showToast = (severity: 'success' | 'info' | 'warn' | 'error', summary: string, detail: string) => {
        toast.current?.show({ severity, summary, detail, life: 3000 });
    };

    const handleTitleChange = (title: string) => {
        setBlogPost(prev => ({
            ...prev,
            title,
            slug: generateSlug(title)
        }));
    };

    const handleAddTag = () => {
        if (tag && !blogPost.tags.includes(tag)) {
            setBlogPost(prev => ({
                ...prev,
                tags: [...prev.tags, tag]
            }));
            setTag('');
        }
    };

    const handleRemoveTag = (tagToRemove: string) => {
        setBlogPost(prev => ({
            ...prev,
            tags: prev.tags.filter(t => t !== tagToRemove)
        }));
    };

    const saveDraft = () => {
        setBlogPost(prev => ({
            ...prev,
            status: 'draft'
        }));
        savePost();
    };

    const publishPost = () => {
        setBlogPost(prev => ({
            ...prev,
            status: 'published',
            publishDate: new Date()
        }));
        savePost();
    };

    const savePost = async () => {
        setIsLoading(true);
        try {
            await saveBlogPost(blogPost);
            showToast('success', 'Thành công', id ? 'Đã cập nhật bài viết' : 'Đã tạo bài viết mới');
            if (!id) {
                navigate('/admin/bai-viet/quan-ly');
            }
        } catch (error) {
            console.error('Error saving blog post:', error);
            showToast('error', 'Lỗi', 'Không thể lưu bài viết');
        } finally {
            setIsLoading(false);
        }
    };

    const confirmDelete = () => {
        confirmDialog({
            message: 'Bạn có chắc chắn muốn xóa bài viết này?',
            header: 'Xác nhận xóa',
            icon: 'pi pi-exclamation-triangle',
            acceptClassName: 'p-button-danger',
            accept: async () => {
                if (!id) return;
                
                setIsLoading(true);
                try {
                    await deleteBlogPost(id);
                    showToast('success', 'Thành công', 'Đã xóa bài viết');
                    navigate('/admin/bai-viet/quan-ly');
                } catch (error) {
                    console.error('Error deleting blog post:', error);
                    showToast('error', 'Lỗi', 'Không thể xóa bài viết');
                } finally {
                    setIsLoading(false);
                }
            }
        });
    };

    const confirmCancel = () => {
        confirmDialog({
            message: 'Bạn có chắc chắn muốn hủy? Mọi thay đổi chưa lưu sẽ bị mất.',
            header: 'Xác nhận hủy',
            icon: 'pi pi-exclamation-triangle',
            acceptClassName: 'p-button-danger',
            accept: () => navigate('/admin/bai-viet/quan-ly')
        });
    };

    return {
        blogPost,
        setBlogPost,
        isLoading,
        tag,
        setTag,
        toast,
        handleTitleChange,
        handleAddTag,
        handleRemoveTag,
        saveDraft,
        publishPost,
        confirmDelete,
        confirmCancel
    };
};