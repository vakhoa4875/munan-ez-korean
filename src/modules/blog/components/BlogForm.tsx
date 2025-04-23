import React from 'react';
import { generateSlug } from '../services/blogService';
import { BlogPost } from '../types/blog.types';
import BlogContent from './BlogContent';
import BlogSidebar from './BlogSidebar';

interface BlogFormProps {
    blogPost: BlogPost;
    setBlogPost: React.Dispatch<React.SetStateAction<BlogPost>>;
    tag: string;
    setTag: React.Dispatch<React.SetStateAction<string>>;
    onAddTag: () => void;
    onRemoveTag: (tag: string) => boolean;
    onCancel: () => void;
}

const BlogForm: React.FC<BlogFormProps> = ({
    blogPost,
    setBlogPost,
    tag,
    setTag,
    onAddTag,
    onRemoveTag,
    onCancel
}) => {
    const handleTitleChange = (title: string) => {
        setBlogPost(prev => ({
            ...prev,
            title,
            slug: generateSlug(title)
        }));
    };

    const handleSlugChange = (slug: string) => {
        setBlogPost(prev => ({ ...prev, slug }));
    };

    const handleExcerptChange = (excerpt: string) => {
        setBlogPost(prev => ({ ...prev, excerpt }));
    };

    const handleContentChange = (content: string) => {
        setBlogPost(prev => ({ ...prev, content }));
    };

    const handleStatusChange = (status: string) => {
        setBlogPost(prev => ({ ...prev, status }));
    };

    const handleCategoryChange = (category: string) => {
        setBlogPost(prev => ({ ...prev, category }));
    };

    const handleAuthorChange = (author: string) => {
        setBlogPost(prev => ({ ...prev, author }));
    };

    const handleImageUpload = (imageUrl: string) => {
        setBlogPost(prev => ({ ...prev, featuredImage: imageUrl }));
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8">
                <BlogContent
                    blogPost={blogPost}
                    onTitleChange={handleTitleChange}
                    onSlugChange={handleSlugChange}
                    onExcerptChange={handleExcerptChange}
                    onContentChange={handleContentChange}
                />
            </div>

            <div className="md:col-span-4">
                <BlogSidebar
                    blogPost={blogPost}
                    tag={tag}
                    onTagChange={setTag}
                    onAddTag={onAddTag}
                    onRemoveTag={onRemoveTag}
                    onStatusChange={handleStatusChange}
                    onCategoryChange={handleCategoryChange}
                    onAuthorChange={handleAuthorChange}
                    onImageUpload={handleImageUpload}
                    onCancel={onCancel}
                />
            </div>
        </div>
    );
};

export default BlogForm;