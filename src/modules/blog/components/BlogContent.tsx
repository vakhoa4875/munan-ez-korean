import React from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Editor, EditorTextChangeEvent } from 'primereact/editor';
import { BlogPost } from '../types/blog.types';

interface BlogContentProps {
    blogPost: BlogPost;
    onTitleChange: (title: string) => void;
    onSlugChange: (slug: string) => void;
    onExcerptChange: (excerpt: string) => void;
    onContentChange: (content: string) => void;
}

const BlogContent: React.FC<BlogContentProps> = ({
    blogPost,
    onTitleChange,
    onSlugChange,
    onExcerptChange,
    onContentChange
}) => {

    return (
        <div>
            <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Tiêu đề</label>
                <InputText 
                    id="title" 
                    value={blogPost.title} 
                    onChange={(e) => onTitleChange(e.target.value)} 
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
                    onChange={(e) => onSlugChange(e.target.value)} 
                    placeholder="slug-bai-viet"
                    className="w-full p-2 border border-gray-300 rounded-md"
                />
            </div>
            
            <div className="mb-4">
                <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-1">Tóm tắt</label>
                <InputTextarea 
                    id="excerpt" 
                    value={blogPost.excerpt} 
                    onChange={(e) => onExcerptChange(e.target.value)} 
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
                        onTextChange={(e: EditorTextChangeEvent) => onContentChange(e.htmlValue || '')} 
                        style={{ height: '500px' }}
                    />
                </div>
            </div>
        </div>
    );
};

export default BlogContent;