import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import React from 'react';
import PreviewButton from './PreviewButton';
import { categories, statuses } from '../services/blogService';
import { BlogPost } from '../types/blog.types';
import ImageUploader from './ImageUploader';
import TagInput from './TagInput';

interface BlogSidebarProps {
    blogPost: BlogPost;
    tag: string;
    onTagChange: (value: string) => void;
    onAddTag: () => void;
    onRemoveTag: (tag: string) => boolean;
    onStatusChange: (status: string) => void;
    onCategoryChange: (category: string) => void;
    onAuthorChange: (author: string) => void;
    onImageUpload: (imageUrl: string) => void;
    onCancel: () => void;
}

const BlogSidebar: React.FC<BlogSidebarProps> = ({
    blogPost,
    tag,
    onTagChange,
    onAddTag,
    onRemoveTag,
    onStatusChange,
    onCategoryChange,
    onAuthorChange,
    onImageUpload,
    onCancel
}) => {
    return (
        <div>
            <div className="bg-gray-50 p-4 rounded-md shadow-sm mb-4">
                <div className="mb-4">
                    <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">Trạng thái</label>
                    <Dropdown
                        id="status"
                        value={blogPost.status}
                        options={statuses}
                        onChange={(e) => onStatusChange(e.value)}
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
                        onChange={(e) => onCategoryChange(e.value)}
                        optionLabel="name"
                        optionValue="value"
                        placeholder="Chọn danh mục"
                        className="w-full"
                    />
                </div>

                <ImageUploader
                    featuredImage={blogPost.featuredImage}
                    onImageUpload={onImageUpload}
                />

                <TagInput
                    tags={blogPost.tags}
                    currentTag={tag}
                    onTagChange={onTagChange}
                    onAddTag={onAddTag}
                    onRemoveTag={onRemoveTag}
                />

                <div className="mb-4">
                    <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-1">Tác giả</label>
                    <InputText
                        id="author"
                        value={blogPost.author}
                        onChange={(e) => onAuthorChange(e.target.value)}
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
                <PreviewButton blogPost={blogPost} />

                <Button
                    label="Hủy"
                    icon="pi pi-times"
                    severity='danger'
                    onClick={onCancel}
                />
            </div>
        </div>
    );
};

export default BlogSidebar;