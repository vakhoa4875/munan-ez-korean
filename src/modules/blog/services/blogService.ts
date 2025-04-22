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
                publishDate: new Date()
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
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, 1000);
    });
};