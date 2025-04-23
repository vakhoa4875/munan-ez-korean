import React, { useState } from 'react';
import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';
import { Comment } from '../types/blog.types';
import { formatDate } from '@/utils/dateUtils';

interface BlogInteractionsProps {
    postId: string;
    likes: number;
    comments: Comment[];
    onLike: (postId: string) => void;
    onShare: (postId: string) => void;
    onAddComment: (content: string) => void;
    onAddReply: (commentId: string, content: string) => void;
}

const BlogInteractions: React.FC<BlogInteractionsProps> = ({
    postId,
    likes,
    comments,
    onLike,
    onShare,
    onAddComment,
    onAddReply
}) => {
    const [comment, setComment] = useState('');
    const [replyTo, setReplyTo] = useState<string | null>(null);

    const handleSubmitComment = () => {
        if (comment.trim()) {
            if (replyTo) {
                onAddReply(replyTo, comment);
                setReplyTo(null);
            } else {
                onAddComment(comment);
            }
            setComment('');
        }
    };

    const handleReply = (commentId: string) => {
        setReplyTo(commentId);
    };

    return (
        <section className="mb-12">
            <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-bold mb-6">Interactions</h2>
                
                {/* Like and Share Buttons */}
                <div className="flex gap-4 mb-8">
                    <Button 
                        icon="pi pi-heart" 
                        label={`Like (${likes || 0})`}
                        className="p-button-outlined"
                        onClick={() => onLike(postId)}
                    />
                    <Button 
                        icon="pi pi-share-alt" 
                        label="Share"
                        className="p-button-outlined"
                        onClick={() => onShare(postId)}
                    />
                </div>
                
                {/* Comments Section */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Comments ({comments.length || 0})</h3>
                    
                    {/* Add Comment */}
                    <div className="mb-6">
                        <div className="flex items-start gap-3 mb-2">
                            <Avatar shape="circle" />
                            <div className="flex-1">
                                <InputTextarea
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                    rows={3}
                                    placeholder={replyTo ? "Write a reply..." : "Add a comment..."}
                                    className="w-full"
                                />
                            </div>
                        </div>
                        <div className="flex justify-end">
                            {replyTo && (
                                <Button 
                                    label="Cancel" 
                                    className="p-button-text mr-2"
                                    onClick={() => setReplyTo(null)}
                                />
                            )}
                            <Button 
                                label={replyTo ? "Reply" : "Comment"}
                                onClick={handleSubmitComment}
                            />
                        </div>
                    </div>
                    
                    {/* Comments List */}
                    <div className="space-y-6">
                        {comments.map((comment) => (
                            <div key={comment.id} className="border-b border-gray-200 pb-4">
                                <div className="flex items-start gap-3">
                                    <Avatar image={comment.authorAvatar} shape="circle" />
                                    <div className="flex-1">
                                        <div className="flex justify-between">
                                            <h4 className="font-medium">{comment.author}</h4>
                                            <span className="text-sm text-gray-500">{formatDate(comment.createdAt)}</span>
                                        </div>
                                        <p className="my-2">{comment.content}</p>
                                        <Button 
                                            label="Reply" 
                                            className="p-button-text p-button-sm"
                                            onClick={() => handleReply(comment.id)}
                                        />
                                        
                                        {/* Nested Replies */}
                                        {comment.replies && comment.replies.length > 0 && (
                                            <div className="ml-8 mt-4 space-y-4">
                                                {comment.replies.map((reply) => (
                                                    <div key={reply.id} className="flex items-start gap-3">
                                                        <Avatar image={reply.authorAvatar} shape="circle" size="normal" />
                                                        <div>
                                                            <div className="flex justify-between">
                                                                <h5 className="font-medium">{reply.author}</h5>
                                                                <span className="text-xs text-gray-500">{formatDate(reply.createdAt)}</span>
                                                            </div>
                                                            <p className="my-1">{reply.content}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogInteractions;