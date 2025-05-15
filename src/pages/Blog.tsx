import BlogHeader from '@/modules/blog/components/BlogHeader';
import BlogInteractions from '@/modules/blog/components/BlogInteractions';
import RelatedPosts from '@/modules/blog/components/RelatedPosts';
import { useBlog } from '@/modules/blog/hooks/useBlog'; // You'll need to create this hook
import { BlogPost } from '@/modules/blog/types/blog.types';
import React from 'react';
import '@/styles/editor.css';   
import { useParams } from 'react-router-dom';

const Blog: React.FC<{ previewedBlogPost?: BlogPost }> = ({ previewedBlogPost }) => {
    const { id } = useParams<{ id: string }>();

    // This hook would fetch the blog post and related functionality
    const {
        blogPost,
        isLoading,
        relatedPosts,
        comments,
        addComment,
        addReply,
        likePost,
        sharePost
    } = useBlog(id, previewedBlogPost);

    if (isLoading) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>;
    }

    if (!blogPost) {
        return <div className="flex justify-center items-center h-screen">Blog post not found</div>;
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <BlogHeader
                blogPost={blogPost}
                commentsCount={comments.length || 0}
            />

            {/* Content Section */}
            <section className="mb-12 blog-container">
                <div className="bg-white rounded-lg shadow-sm p-8 ql-snow">
                    <div
                        className="prose prose-lg max-w-none ql-editor"
                        dangerouslySetInnerHTML={{ __html: blogPost.content }}
                    />
                </div>
            </section>

            <BlogInteractions
                postId={blogPost.id || ''}
                likes={blogPost.likes || 0}
                comments={comments}
                onLike={likePost}
                onShare={sharePost}
                onAddComment={addComment}
                onAddReply={addReply}
            />

            <RelatedPosts posts={relatedPosts} />
        </div>
    );
};

export default Blog;