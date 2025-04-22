import React, { useState, useRef, useEffect } from "react";
import { Editor, EditorTextChangeEvent } from "primereact/editor";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Toast } from "primereact/toast";
import { FileUpload } from "primereact/fileupload";
import { Chip } from "primereact/chip";
import { InputTextarea } from "primereact/inputtextarea";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { useNavigate, useParams } from "react-router-dom";

interface BlogPost {
    id?: string;
    title: string;
    slug: string;
    content: string;
    excerpt: string;
    featuredImage: string;
    category: string;
    tags: string[];
    status: string;
    author: string;
    publishDate?: Date;
}

const categories = [
    { name: 'Tin tức', value: 'tin-tuc' },
    { name: 'Ngữ pháp tiếng Hàn', value: 'ngu-phap-tieng-han' },
    { name: 'Từ vựng tiếng Hàn', value: 'tu-vung-tieng-han' },
    { name: 'Văn hóa Hàn Quốc', value: 'van-hoa-han-quoc' },
    { name: 'Lịch sử Hàn Quốc', value: 'lich-su-han-quoc' },
    { name: 'Xã hội Hàn Quốc', value: 'xa-hoi-han-quoc' },
    { name: 'Học tiếng Hàn', value: 'hoc-tieng-han' }
];

const statuses = [
    { name: 'Nháp', value: 'draft' },
    { name: 'Đã xuất bản', value: 'published' },
    { name: 'Đang chờ duyệt', value: 'pending' }
];

export default function BlogEditor() {
    const { id } = useParams();
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

    // Giả lập tải bài viết nếu có id
    useEffect(() => {
        if (id) {
            setIsLoading(true);
            // Giả lập API call để lấy dữ liệu bài viết
            setTimeout(() => {
                // Đây là dữ liệu mẫu, trong thực tế sẽ được lấy từ API
                setBlogPost({
                    id,
                    title: 'Bài viết mẫu',
                    slug: 'bai-viet-mau',
                    content: '<p>Nội dung bài viết mẫu</p>',
                    excerpt: 'Tóm tắt bài viết mẫu',
                    featuredImage: 'https://via.placeholder.com/800x400',
                    category: 'ngu-phap-tieng-han',
                    tags: ['tiếng hàn', 'ngữ pháp'],
                    status: 'published',
                    author: 'Admin',
                    publishDate: new Date()
                });
                setIsLoading(false);
            }, 1000);
        }
    }, [id]);

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const title = e.target.value;
        setBlogPost({
            ...blogPost,
            title,
            slug: generateSlug(title)
        });
    };

    const generateSlug = (title: string): string => {
        return title
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[đĐ]/g, 'd')
            .replace(/[^a-z0-9\s]/g, '')
            .replace(/\s+/g, '-');
    };

    const handleContentChange = (e: EditorTextChangeEvent) => {
        setBlogPost({
            ...blogPost,
            content: e.htmlValue || ''
        });
    };

    const handleAddTag = () => {
        if (tag && !blogPost.tags.includes(tag)) {
            setBlogPost({
                ...blogPost,
                tags: [...blogPost.tags, tag]
            });
            setTag('');
        }
    };

    const handleRemoveTag = (tagToRemove: string) => {
        setBlogPost({
            ...blogPost,
            tags: blogPost.tags.filter(t => t !== tagToRemove)
        });
    };

    const handleImageUpload = (event: any) => {
        // Trong thực tế, bạn sẽ tải lên server và nhận URL trả về
        const file = event.files[0];
        const reader = new FileReader();
        
        reader.onloadend = function() {
            setBlogPost({
                ...blogPost,
                featuredImage: reader.result as string
            });
            toast.current?.show({
                severity: 'success',
                summary: 'Thành công',
                detail: 'Đã tải lên ảnh đại diện',
                life: 3000
            });
        };
        
        if (file) {
            reader.readAsDataURL(file);
        }
        
        // Xóa file sau khi xử lý
        event.options.clear();
    };

    const saveDraft = () => {
        setBlogPost({
            ...blogPost,
            status: 'draft'
        });
        savePost();
    };

    const publishPost = () => {
        setBlogPost({
            ...blogPost,
            status: 'published',
            publishDate: new Date()
        });
        savePost();
    };

    const savePost = () => {
        setIsLoading(true);
        
        // Giả lập API call để lưu bài viết
        setTimeout(() => {
            setIsLoading(false);
            toast.current?.show({
                severity: 'success',
                summary: 'Thành công',
                detail: id ? 'Đã cập nhật bài viết' : 'Đã tạo bài viết mới',
                life: 3000
            });
            
            // Chuyển hướng sau khi lưu thành công
            if (!id) {
                navigate('/admin/bai-viet/quan-ly');
            }
        }, 1500);
    };

    const confirmDelete = () => {
        confirmDialog({
            message: 'Bạn có chắc chắn muốn xóa bài viết này?',
            header: 'Xác nhận xóa',
            icon: 'pi pi-exclamation-triangle',
            acceptClassName: 'p-button-danger',
            accept: () => {
                setIsLoading(true);
                
                // Giả lập API call để xóa bài viết
                setTimeout(() => {
                    setIsLoading(false);
                    toast.current?.show({
                        severity: 'success',
                        summary: 'Thành công',
                        detail: 'Đã xóa bài viết',
                        life: 3000
                    });
                    navigate('/admin/bai-viet/quan-ly');
                }, 1000);
            }
        });
    };

    const headerTemplate = (
        <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="m-0">Soạn thảo nội dung</h3>
            <div className="flex gap-2">
                <Button 
                    label="Chèn ảnh" 
                    icon="pi pi-image" 
                    className="bg-gray-200 text-gray-700 border border-gray-300 hover:bg-gray-300"
                    onClick={() => {
                        // Chèn ảnh vào editor
                        const imageUrl = prompt('Nhập URL ảnh:');
                        if (imageUrl) {
                            const imgTag = `<img src="${imageUrl}" alt="Ảnh" style="max-width: 100%; height: auto;" />`;
                            setBlogPost({
                                ...blogPost,
                                content: blogPost.content + imgTag
                            });
                        }
                    }}
                />
                <Button 
                    label="Chèn video" 
                    icon="pi pi-video" 
                    className="bg-gray-200 text-gray-700 border border-gray-300 hover:bg-gray-300"
                    onClick={() => {
                        // Chèn video YouTube vào editor
                        const videoId = prompt('Nhập ID video YouTube:');
                        if (videoId) {
                            const videoEmbed = `<div class="video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe></div>`;
                            setBlogPost({
                                ...blogPost,
                                content: blogPost.content + videoEmbed
                            });
                        }
                    }}
                />
            </div>
        </div>
    );

    const editorHeader = headerTemplate;

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <Toast ref={toast} />
            <ConfirmDialog />
            
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-primary-color m-0">{id ? 'Chỉnh sửa bài viết' : 'Tạo bài viết mới'}</h1>
                <div className="flex gap-2">
                    {id && (
                        <Button 
                            label="Xóa" 
                            icon="pi pi-trash" 
                            className="bg-red-600 hover:bg-red-700 text-white" 
                            onClick={confirmDelete}
                            disabled={isLoading}
                        />
                    )}
                    <Button 
                        label="Lưu nháp" 
                        icon="pi pi-save" 
                        className="bg-gray-600 hover:bg-gray-700 text-white" 
                        onClick={saveDraft}
                        disabled={isLoading}
                    />
                    <Button 
                        label="Xuất bản" 
                        icon="pi pi-check" 
                        className="bg-green-600 hover:bg-green-700 text-white" 
                        onClick={publishPost}
                        disabled={isLoading}
                    />
                </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-8">
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Tiêu đề</label>
                        <InputText 
                            id="title" 
                            value={blogPost.title} 
                            onChange={handleTitleChange} 
                            placeholder="Nhập tiêu đề bài viết"
                            className="w-full p-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    
                    <div className="mb-4">
                        <label htmlFor="slug" className="block text-sm font-medium text-gray-700 mb-1">Slug</label>
                        <InputText 
                            id="slug" 
                            value={blogPost.slug} 
                            onChange={(e) => setBlogPost({...blogPost, slug: e.target.value})} 
                            placeholder="slug-bai-viet"
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    
                    <div className="mb-4">
                        <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-1">Tóm tắt</label>
                        <InputTextarea 
                            id="excerpt" 
                            value={blogPost.excerpt} 
                            onChange={(e) => setBlogPost({...blogPost, excerpt: e.target.value})} 
                            rows={3} 
                            placeholder="Nhập tóm tắt ngắn gọn về bài viết"
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    
                    <div className="mb-4">
                        <label htmlFor="editor" className="block text-sm font-medium text-gray-700 mb-1">Nội dung</label>
                        <div className="border border-gray-300 rounded-md overflow-hidden">
                            <Editor 
                                id="editor"
                                value={blogPost.content} 
                                onTextChange={handleContentChange} 
                                style={{ height: '500px' }}
                                // headerTemplate={editorHeader}
                            />
                        </div>
                    </div>
                </div>
                
                <div className="md:col-span-4">
                    <div className="bg-gray-50 p-4 rounded-md shadow-sm mb-4">
                        <div className="mb-4">
                            <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">Trạng thái</label>
                            <Dropdown 
                                id="status"
                                value={blogPost.status} 
                                options={statuses} 
                                onChange={(e) => setBlogPost({...blogPost, status: e.value})} 
                                optionLabel="name" 
                                optionValue="value"
                                placeholder="Chọn trạng thái"
                                className="w-full"
                            />
                        </div>
                        
                        <div className="mb-4">
                            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Danh mục</label>
                            <Dropdown 
                                id="category"
                                value={blogPost.category} 
                                options={categories} 
                                onChange={(e) => setBlogPost({...blogPost, category: e.value})} 
                                optionLabel="name" 
                                optionValue="value"
                                placeholder="Chọn danh mục"
                                className="w-full"
                            />
                        </div>
                        
                        <div className="mb-4">
                            <label htmlFor="featuredImage" className="block text-sm font-medium text-gray-700 mb-1">Ảnh đại diện</label>
                            <div className="flex flex-col gap-2">
                                {blogPost.featuredImage && (
                                    <img 
                                        src={blogPost.featuredImage} 
                                        alt="Ảnh đại diện" 
                                        className="w-full rounded-md object-cover"
                                        style={{ maxHeight: '200px' }}
                                    />
                                )}
                                <FileUpload 
                                    mode="basic" 
                                    name="featuredImage" 
                                    url="/api/upload" // Thay đổi URL API thực tế
                                    accept="image/*" 
                                    maxFileSize={1000000}
                                    chooseLabel="Chọn ảnh"
                                    uploadLabel="Tải lên"
                                    cancelLabel="Hủy"
                                    customUpload={true}
                                    uploadHandler={handleImageUpload}
                                    auto
                                    className="w-full"
                                    chooseOptions={{
                                        icon: 'pi pi-image',
                                        className: 'bg-primary-color text-white hover:bg-opacity-90'
                                    }}
                                />
                            </div>
                        </div>
                        
                        <div className="mb-4">
                            <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-1">Thẻ</label>
                            <div className="flex">
                                <InputText 
                                    id="tags" 
                                    value={tag} 
                                    onChange={(e) => setTag(e.target.value)} 
                                    placeholder="Nhập thẻ"
                                    className="flex-1 rounded-l-md"
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            e.preventDefault();
                                            handleAddTag();
                                        }
                                    }}
                                />
                                <Button 
                                    icon="pi pi-plus" 
                                    onClick={handleAddTag}
                                    disabled={!tag}
                                    className="bg-primary-color text-white rounded-r-md rounded-l-none hover:bg-opacity-90"
                                />
                            </div>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {blogPost.tags.map((tag, index) => (
                                    <Chip 
                                        key={index} 
                                        label={tag} 
                                        removable 
                                        onRemove={() => handleRemoveTag(tag)}
                                        className="bg-primary-color bg-opacity-80 text-white"
                                    />
                                ))}
                            </div>
                        </div>
                        
                        <div className="mb-4">
                            <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-1">Tác giả</label>
                            <InputText 
                                id="author" 
                                value={blogPost.author} 
                                onChange={(e) => setBlogPost({...blogPost, author: e.target.value})} 
                                placeholder="Tên tác giả"
                                className="w-full"
                            />
                        </div>
                        
                        {blogPost.publishDate && (
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Ngày xuất bản</label>
                                <div className="text-gray-500 text-sm">
                                    {new Date(blogPost.publishDate).toLocaleDateString('vi-VN', {
                                        day: '2-digit',
                                        month: '2-digit',
                                        year: 'numeric',
                                        hour: '2-digit',
                                        minute: '2-digit'
                                    })}
                                </div>
                            </div>
                        )}
                    </div>
                    
                    <div className="flex flex-col gap-2 mt-4">
                        <Button 
                            label="Xem trước" 
                            icon="pi pi-eye" 
                            className="bg-blue-500 hover:bg-blue-600 text-white" 
                            onClick={() => {
                                // Mở tab mới để xem trước bài viết
                                const previewWindow = window.open('', '_blank');
                                if (previewWindow) {
                                    previewWindow.document.write(`
                                        <!DOCTYPE html>
                                        <html>
                                        <head>
                                            <title>${blogPost.title} - Xem trước</title>
                                            <meta charset="utf-8">
                                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                            <link href="https://fonts.googleapis.com/css2?family=Gowun+Dodum&display=swap" rel="stylesheet">
                                            <style>
                                                body {
                                                    font-family: 'Gowun Dodum', sans-serif;
                                                    line-height: 1.6;
                                                    color: #2a1e19;
                                                    max-width: 800px;
                                                    margin: 0 auto;
                                                    padding: 20px;
                                                }
                                                img {
                                                    max-width: 100%;
                                                    height: auto;
                                                }
                                                h1 {
                                                    color: #a17410;
                                                }
                                                .featured-image {
                                                    width: 100%;
                                                    max-height: 400px;
                                                    object-fit: cover;
                                                    margin-bottom: 20px;
                                                    border-radius: 8px;
                                                }
                                                .meta {
                                                    color: #666;
                                                    font-size: 0.9rem;
                                                    margin-bottom: 20px;
                                                }
                                                .video-container {
                                                    position: relative;
                                                    padding-bottom: 56.25%;
                                                    height: 0;
                                                    overflow: hidden;
                                                    margin-bottom: 20px;
                                                }
                                                .video-container iframe {
                                                    position: absolute;
                                                    top: 0;
                                                    left: 0;
                                                    width: 100%;
                                                    height: 100%;
                                                }
                                            </style>
                                        </head>
                                        <body>
                                            <h1>${blogPost.title}</h1>
                                            <div class="meta">
                                                Tác giả: ${blogPost.author} | 
                                                Danh mục: ${categories.find(c => c.value === blogPost.category)?.name || ''}
                                            </div>
                                            ${blogPost.featuredImage ? `<img src="${blogPost.featuredImage}" alt="${blogPost.title}" class="featured-image">` : ''}
                                            <div>${blogPost.content}</div>
                                        </body>
                                        </html>
                                    `);
                                    previewWindow.document.close();
                                }
                            }}
                        />
                        
                        <Button 
                            label="Hủy" 
                            icon="pi pi-times" 
                            className="bg-red-500 hover:bg-red-600 text-white" 
                            onClick={() => {
                                confirmDialog({
                                    message: 'Bạn có chắc chắn muốn hủy? Mọi thay đổi chưa lưu sẽ bị mất.',
                                    header: 'Xác nhận hủy',
                                    icon: 'pi pi-exclamation-triangle',
                                    acceptClassName: 'p-button-danger',
                                    accept: () => navigate('/admin/bai-viet/quan-ly')
                                });
                            }}
                        />
                    </div>
                </div>
            </div>
            
            {isLoading && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
                    <i className="pi pi-spin pi-spinner text-3xl text-white"></i>
                </div>
            )}
        </div>
    );
}