import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { BlogPost } from '../types/blog.types'; 
import Blog from '@/pages/Blog';

interface PreviewButtonProps {
    blogPost: BlogPost;
}

const PreviewButton: React.FC<PreviewButtonProps> = ({ blogPost }) => {
    const [showPreview, setShowPreview] = useState(false);
    
    const handlePreview = () => {
        setShowPreview(true);
    };
    
    const hidePreview = () => {
        setShowPreview(false);
    };
    
    return (
        <>
            <Button 
                label="Xem trước" 
                icon="pi pi-eye" 
                className='btn-primary'
                onClick={handlePreview}
            />
            
            <Dialog 
                header={`${blogPost.title} - Xem trước`}
                visible={showPreview} 
                style={{ width: '95%', maxWidth: '1200px', height: '90vh' }} 
                onHide={hidePreview}
                maximizable
                modal
                className="p-fluid blog-preview-dialog"
            >
                <div className="blog-preview-container overflow-y-auto">
                    <Blog previewedBlogPost={blogPost} />
                </div>
            </Dialog>
        </>
    );
};

export default PreviewButton;