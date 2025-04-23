import React from 'react';
import { Avatar } from 'primereact/avatar';
import { BlogPost } from '../types/blog.types';
import { formatDate } from '@/utils/dateUtils';

interface BlogHeaderProps {
    blogPost: BlogPost;
    commentsCount: number;
}

const BlogHeader: React.FC<BlogHeaderProps> = ({ blogPost, commentsCount }) => {
    return (
        <header className="mb-8">
            <div className="grid grid-cols-12 gap-6">
                {/* Featured Image - 7/12 columns */}
                <div className="col-span-12 md:col-span-7">
                    {blogPost.featuredImage ? (
                        <img 
                            src={blogPost.featuredImage} 
                            alt={blogPost.title} 
                            className="w-full h-[400px] object-cover rounded-lg shadow-md"
                        />
                    ) : (
                        <div className="w-full h-[400px] bg-gray-200 rounded-lg flex items-center justify-center">
                            <span className="text-gray-400">No featured image</span>
                        </div>
                    )}
                </div>
                
                {/* Blog Info - 5/12 columns */}
                <div className="col-span-12 md:col-span-5 flex flex-col justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h1 className="text-3xl font-bold text-gray-800 mb-4">{blogPost.title}</h1>
                        
                        <div className="flex items-center mb-4">
                            <Avatar 
                                image={blogPost.authorAvatar || "https://via.placeholder.com/40"} 
                                shape="circle" 
                                className="mr-3"
                            />
                            <div>
                                <p className="font-medium text-gray-700">{blogPost.author}</p>
                                <p className="text-sm text-gray-500">
                                    {formatDate(blogPost.publishedAt || new Date())}
                                </p>
                            </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                            {blogPost.tags.map(tag => (
                                <span 
                                    key={tag} 
                                    className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        
                        <p className="text-gray-600 mb-4">{blogPost.excerpt || blogPost.content.substring(0, 150)}...</p>
                        
                        <div className="text-sm text-gray-500">
                            <span className="mr-4">
                                <i className="pi pi-eye mr-1"></i> {blogPost.views || 0} views
                            </span>
                            <span className="mr-4">
                                <i className="pi pi-heart mr-1"></i> {blogPost.likes || 0} likes
                            </span>
                            <span>
                                <i className="pi pi-comments mr-1"></i> {commentsCount} comments
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default BlogHeader;