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
    const headerTemplate = (
        <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="m-0">Soạn thảo nội dung</h3>
            <div className="flex gap-2">
                <button 
                    className="bg-gray-200 text-gray-700 border border-gray-300 hover:bg-gray-300 px-3 py-2 rounded-md flex items-center gap-1"
                    onClick={() => {
                        // Chèn ảnh vào editor
                        const imageUrl = prompt('Nhập URL ảnh:');
                        if (imageUrl) {
                            const imgTag = `<img src="${imageUrl}" alt="Ảnh" style="max-width: 100%; height: auto;" />`;
                            onContentChange(blogPost.content + imgTag);
                        }
                    }}
                >
                    <i className="pi pi-image"></i>
                    <span>Chèn ảnh</span>
                </button>
                <button 
                    className="bg-gray-200 text-gray-700 border border-gray-300 hover:bg-gray-300 px-3 py-2 rounded-md flex items-center gap-1"
                    onClick={() => {
                        // Chèn video YouTube vào editor
                        const videoId = prompt('Nhập ID video YouTube:');
                        if (videoId) {
                            const videoEmbed = `<div class="video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe></div>`;
                            onContentChange(blogPost.content + videoEmbed);
                        }
                    }}
                >
                    <i className="pi pi-video"></i>
                    <span>Chèn video</span>
                </button>
            </div>
        </div>
    );

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
                        // showHeader={true}
                        // headerTemplate={headerTemplate}
                    />
                </div>
            </div>
        </div>
    );
};

export default BlogContent;