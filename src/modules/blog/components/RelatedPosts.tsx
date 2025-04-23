import React from 'react';
import { Button } from 'primereact/button';
import { BlogPost } from '../types/blog.types';
import { formatDate } from '@/utils/dateUtils';

interface RelatedPostsProps {
    posts: BlogPost[];
}

const RelatedPosts: React.FC<RelatedPostsProps> = ({ posts }) => {
    if (!posts || posts.length === 0) {
        return null;
    }

    return (
        <section>
            <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post: BlogPost) => (
                    <div key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                        <div className="h-48 overflow-hidden">
                            <img 
                                src={post.featuredImage || "https://via.placeholder.com/300x200"} 
                                alt={post.title}
                                className="w-full h-full object-cover transition-transform hover:scale-105"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-semibold mb-2 line-clamp-2">{post.title}</h3>
                            <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                                {post.excerpt || post.content.substring(0, 100)}...
                            </p>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-500">{formatDate(post.publishedAt || new Date())}</span>
                                <Button 
                                    label="Read More" 
                                    className="p-button-text p-button-sm"
                                    onClick={() => window.location.href = `/blog/${post.id}`}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default RelatedPosts;