import React from 'react';
import { FileUpload } from 'primereact/fileupload';
import { uploadImage } from '../services/uploadService';

interface ImageUploaderProps {
    featuredImage: string;
    onImageUpload: (imageUrl: string) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ featuredImage, onImageUpload }) => {
    const handleUpload = async (event: any) => {
        try {
            const file = event.files[0];
            const imageUrl = await uploadImage(file);
            onImageUpload(imageUrl);
            
            // Xóa file sau khi xử lý
            event.options.clear();
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    return (
        <div className="mb-4">
            <label htmlFor="featuredImage" className="block text-sm font-medium text-gray-700 mb-1">Ảnh đại diện</label>
            <div className="flex flex-col gap-2">
                {featuredImage && (
                    <img 
                        src={featuredImage} 
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
                    uploadHandler={handleUpload}
                    auto
                    className="w-full"
                    chooseOptions={{
                        icon: 'pi pi-image',
                        className: 'bg-primary-color text-white hover:bg-opacity-90'
                    }}
                />
            </div>
        </div>
    );
};

export default ImageUploader;