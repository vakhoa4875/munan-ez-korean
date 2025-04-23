import { useState, useEffect } from 'react';
import { getBlogPostById, getRelatedPosts } from '../services/blogService';
import { getCommentsByPostId, addComment as apiAddComment, addReply as apiAddReply } from '../services/commentService';
import { likePost as apiLikePost, sharePost as apiSharePost } from '../services/interactionService';
import { BlogPost, Comment } from '../types/blog.types';

export const useBlog = (id: string | undefined, previewedBlogPost?: BlogPost) => {
    const [blogPost, setBlogPost] = useState<BlogPost | null>(previewedBlogPost || null);
    const [isLoading, setIsLoading] = useState(!previewedBlogPost);
    const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
    const [comments, setComments] = useState<Comment[]>([]);

    useEffect(() => {
        if (previewedBlogPost) {
            setBlogPost(previewedBlogPost);
            setIsLoading(false);
            setRelatedPosts([]);
            setComments([]);
            return;
        }
        const fetchData = async () => {
            if (!id) return;
            
            setIsLoading(true);
            try {
                const post = await getBlogPostById(id);
                setBlogPost(post);
                
                const related = await getRelatedPosts(id, post.category, post.tags);
                setRelatedPosts(related);
                
                const postComments = await getCommentsByPostId(id);
                setComments(postComments);
            } catch (error) {
                console.error('Error fetching blog data:', error);
            } finally {
                setIsLoading(false);
            }
        };
        
        fetchData();
    }, [id]);

    const addComment = async (content: string) => {
        if (!id) return;
        
        try {
            const newComment = await apiAddComment(id, content);
            setComments(prev => [...prev, newComment]);
        } catch (error) {
            console.error('Error adding comment:', error);
        }
    };

    const addReply = async (commentId: string, content: string) => {
        if (!id) return;
        
        try {
            const newReply = await apiAddReply(id, commentId, content);
            setComments(prev => prev.map(comment => 
                comment.id === commentId 
                    ? { ...comment, replies: [...(comment.replies || []), newReply] }
                    : comment
            ));
        } catch (error) {
            console.error('Error adding reply:', error);
        }
    };

    const likePost = async (postId: string) => {
        try {
            const updatedPost = await apiLikePost(postId);
            setBlogPost(updatedPost);
        } catch (error) {
            console.error('Error liking post:', error);
        }
    };

    const sharePost = async (postId: string) => {
        try {
            await apiSharePost(postId);
            // Maybe update some UI state or show a success message
        } catch (error) {
            console.error('Error sharing post:', error);
        }
    };

    return {
        blogPost,
        isLoading,
        relatedPosts,
        comments,
        addComment,
        addReply,
        likePost,
        sharePost
    };
};