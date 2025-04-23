import React from 'react';
import { Button } from 'primereact/button';

interface BlogHeaderProps {
    isEditing: boolean;
    isLoading: boolean;
    onSaveDraft: () => void;
    onPublish: () => void;
    onDelete?: () => void;
}

const BlogHeader: React.FC<BlogHeaderProps> = ({ 
    isEditing, 
    isLoading, 
    onSaveDraft, 
    onPublish, 
    onDelete 
}) => {
    return (
        <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-primary-color m-0">
                {isEditing ? 'Chỉnh sửa bài viết' : 'Tạo bài viết mới'}
            </h1>
            <div className="flex gap-2">
                {isEditing && onDelete && (
                    <Button 
                        label="Xóa" 
                        icon="pi pi-trash" 
                        className="bg-red-600 hover:bg-red-700 text-white" 
                        onClick={onDelete}
                        disabled={isLoading}
                    />
                )}
                <Button 
                    label="Lưu nháp" 
                    icon="pi pi-save" 
                    severity='secondary'
                    onClick={onSaveDraft}
                    disabled={isLoading}
                />
                <Button 
                    label="Xuất bản" 
                    icon="pi pi-check"
                    className='btn-primary'
                    onClick={onPublish}
                    disabled={isLoading}
                />
            </div>
        </div>
    );
};

export default BlogHeader;