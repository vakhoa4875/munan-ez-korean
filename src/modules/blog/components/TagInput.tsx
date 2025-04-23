import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Chip } from 'primereact/chip';

interface TagInputProps {
    tags: string[];
    currentTag: string;
    onTagChange: (value: string) => void;
    onAddTag: () => void;
    onRemoveTag: (tag: string) => boolean;
}

const TagInput: React.FC<TagInputProps> = ({ 
    tags, 
    currentTag, 
    onTagChange, 
    onAddTag, 
    onRemoveTag 
}) => {
    return (
        <div className="mb-4">
            <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-1">Thẻ</label>
            <div className="flex">
                <InputText 
                    id="tags" 
                    value={currentTag} 
                    onChange={(e) => onTagChange(e.target.value)} 
                    placeholder="Nhập thẻ"
                    className="flex-1 rounded-l-md"
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            e.preventDefault();
                            onAddTag();
                        }
                    }}
                />
                <Button 
                    icon="pi pi-plus" 
                    onClick={onAddTag}
                    disabled={!currentTag}
                    className="btn-primary"
                />
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
                {tags.map((tag, index) => (
                    <Chip 
                        key={index} 
                        label={tag} 
                        removable 
                        onRemove={() => onRemoveTag(tag)}
                        className="bg-primary-color bg-opacity-80 text-white"
                    />
                ))}
            </div>
        </div>
    );
};

export default TagInput;