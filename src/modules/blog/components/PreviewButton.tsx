import React from 'react';
import { Button } from 'primereact/button';
import { BlogPost } from '../types/blog.types'; 
import { categories } from '../services/blogService'; 
interface PreviewButtonProps {
    blogPost: BlogPost;
}

const PreviewButton: React.FC<PreviewButtonProps> = ({ blogPost }) => {
    const handlePreview = () => {
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
    };

    return (
        <Button 
            label="Xem trước" 
            icon="pi pi-eye" 
            className='btn-primary'
            onClick={handlePreview}
        />
    );
};

export default PreviewButton;