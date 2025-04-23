import { BlogPost } from '../types/blog.types';

export const categories = [
    { name: 'Tin tức', value: 'tin-tuc' },
    { name: 'Ngữ pháp tiếng Hàn', value: 'ngu-phap-tieng-han' },
    { name: 'Từ vựng tiếng Hàn', value: 'tu-vung-tieng-han' },
    { name: 'Văn hóa Hàn Quốc', value: 'van-hoa-han-quoc' },
    { name: 'Lịch sử Hàn Quốc', value: 'lich-su-han-quoc' },
    { name: 'Xã hội Hàn Quốc', value: 'xa-hoi-han-quoc' },
    { name: 'Học tiếng Hàn', value: 'hoc-tieng-han' }
];

export const statuses = [
    { name: 'Nháp', value: 'draft' },
    { name: 'Đã xuất bản', value: 'published' },
    { name: 'Đang chờ duyệt', value: 'pending' }
];

export const generateSlug = (title: string): string => {
    return title
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[đĐ]/g, 'd')
        .replace(/[^a-z0-9\s]/g, '')
        .replace(/\s+/g, '-');
};

export const fetchBlogPost = async (id: string): Promise<BlogPost> => {
    // Giả lập API call
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id,
                title: 'Bài viết mẫu',
                slug: 'bai-viet-mau',
                content: '<p>Nội dung bài viết mẫu</p>',
                excerpt: 'Tóm tắt bài viết mẫu',
                featuredImage: 'https://via.placeholder.com/800x400',
                category: 'ngu-phap-tieng-han',
                tags: ['tiếng hàn', 'ngữ pháp'],
                status: 'published',
                author: 'Admin',
                publishedAt: new Date()
            });
        }, 1000);
    });
};

export const saveBlogPost = async (blogPost: BlogPost): Promise<BlogPost> => {
    // Giả lập API call
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                ...blogPost,
                id: blogPost.id || Math.random().toString(36).substring(2, 9)
            });
        }, 1500);
    });
};

export const deleteBlogPost = async (id: string): Promise<boolean> => {
    // Giả lập API call
    console.log(`Deleting blog post with id: ${id}`);    
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, 1000);
    });
};

// Sample blog posts for testing
const sampleBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with React',
    slug: 'getting-started-with-react',
    status: 'published',
    content: '<p>This is a comprehensive guide to getting started with React...</p>',
    excerpt: 'Learn the basics of React and start building your first application.',
    author: 'John Doe',
    authorAvatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    category: 'technology',
    tags: ['react', 'javascript', 'frontend'],
    featuredImage: 'https://via.placeholder.com/800x400?text=React+Tutorial',
    publishedAt: new Date('2023-05-15'),
    views: 1250,
    likes: 42,
  },
  {
    id: '2',
    title: 'Exploring Vietnam: Hidden Gems',
    slug: 'exploring-vietnam-hidden-gems',
    status: 'published',
    content: '<p>Vietnam offers many hidden treasures for travelers...</p>',
    excerpt: 'Discover the less-known but amazing places to visit in Vietnam.',
    author: 'Jane Smith',
    authorAvatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    category: 'travel',
    tags: ['vietnam', 'travel', 'asia'],
    featuredImage: 'https://via.placeholder.com/800x400?text=Vietnam+Travel',
    publishedAt: new Date('2023-06-22'),
    views: 980,
    likes: 36,
  },
  // Add more sample posts as needed
];

/**
 * Get a blog post by its ID
 * @param id - The ID of the blog post to retrieve
 * @returns Promise resolving to the blog post
 */
export const getBlogPostById = async (id: string): Promise<BlogPost> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Find the post with the matching ID
  const post = sampleBlogPosts.find(post => post.id === id);
  
  if (!post) {
    throw new Error(`Blog post with ID ${id} not found`);
  }
  
  return post;
};

/**
 * Get related posts based on the current post's category and tags
 * @param currentPostId - ID of the current post (to exclude from results)
 * @param category - Category to match
 * @param tags - Tags to match
 * @param limit - Maximum number of related posts to return
 * @returns Promise resolving to an array of related blog posts
 */
export const getRelatedPosts = async (
  currentPostId: string, 
  category: string, 
  tags: string[], 
  limit: number = 3
): Promise<BlogPost[]> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  // Filter posts that are not the current post
  const otherPosts = sampleBlogPosts.filter(post => post.id !== currentPostId);
  
  // Score posts based on matching category and tags
  const scoredPosts = otherPosts.map(post => {
    let score = 0;
    
    // Higher score for matching category
    if (post.category === category) {
      score += 3;
    }
    
    // Add score for each matching tag
    post.tags.forEach(tag => {
      if (tags.includes(tag)) {
        score += 1;
      }
    });
    
    return { post, score };
  });
  
  // Sort by score (descending) and take the top 'limit' posts
  const relatedPosts = scoredPosts
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.post);
  
  return relatedPosts;
};