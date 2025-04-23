import { confirmDialog } from 'primereact/confirmdialog';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { deleteBlogPost, fetchBlogPost, generateSlug, saveBlogPost } from '../services/blogService';
import { BlogPost } from '../types/blog.types';

export const useBlogEditor = (id?: string) => {
    const navigate = useNavigate();
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
                    toast.error('Không thể tải bài viết');
                })
                .finally(() => {
                    setIsLoading(false);
                });
        }
    }, [id]);

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

    const handleRemoveTag = (tagToRemove: string): boolean => {
        // Check if the tag exists before attempting to remove
        const tagExists = blogPost.tags.includes(tagToRemove);

        if (tagExists) {
            setBlogPost(prev => ({
                ...prev,
                tags: prev.tags.filter(t => t !== tagToRemove)
            }));
            return true; // Tag was found and removed
        }

        return false; // Tag wasn't found, nothing was removed
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
            toast.success(id ? 'Đã cập nhật bài viết' : 'Đã tạo bài viết mới');
            if (!id) {
                navigate('/admin/bai-viet/quan-ly');
            }
        } catch (error) {
            console.error('Error saving blog post:', error);
            toast.error('Không thể lưu bài viết');
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
                    toast.success('Đã xóa bài viết');
                    navigate('/admin/bai-viet/quan-ly');
                } catch (error) {
                    console.error('Error deleting blog post:', error);
                    toast.error('Không thể xóa bài viết');
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
        handleTitleChange,
        handleAddTag,
        handleRemoveTag,
        saveDraft,
        publishPost,
        confirmDelete,
        confirmCancel
    };
};