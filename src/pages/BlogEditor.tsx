import { ConfirmDialog } from 'primereact/confirmdialog';
import React from 'react';
import { useParams } from 'react-router-dom';
import BlogForm from '@/modules/blog/components/BlogForm';
import BlogHeader from '@/modules/blog/components/BlogHeader';
import LoadingOverlay from '@/modules/blog/components/LoadingOverlay';
import { useBlogEditor } from '@/modules/blog/hooks/useBlogEditor';

const BlogEditor: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const {
        blogPost,
        setBlogPost,
        isLoading,
        tag,
        setTag,
        handleAddTag,
        handleRemoveTag,
        saveDraft,
        publishPost,
        confirmDelete,
        confirmCancel
    } = useBlogEditor(id);

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <ConfirmDialog />

            <BlogHeader
                isEditing={!!id}
                isLoading={isLoading}
                onSaveDraft={saveDraft}
                onPublish={publishPost}
                onDelete={id ? confirmDelete : undefined}
            />

            <BlogForm
                blogPost={blogPost}
                setBlogPost={setBlogPost}
                tag={tag}
                setTag={setTag}
                onAddTag={handleAddTag}
                onRemoveTag={handleRemoveTag}
                onCancel={confirmCancel}
            />

            <LoadingOverlay isLoading={isLoading} />
        </div>
    );
};

export default BlogEditor;