import { Card } from 'primereact/card';
import { Carousel } from 'primereact/carousel';
import { ScrollPanel } from 'primereact/scrollpanel';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export type BlogThumbnail = {
    id: string;
    title: string;
    summary: string;
    thumbnail: string;
    date: string;
    views: number;
}

export default function BlogShowcase() {
    const [blogThumbnails, setBlogThumbnails] = useState<BlogThumbnail[]>(blogThumbnailData);
    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 4,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const blogThumbnailTemplate = (blog: BlogThumbnail) => {
        return (
            <div className="m-2 text-center">
                <Link to={'/'}>
                    <Card title={blog.title} className="p-card-title" style={{ width: '100%' }}>
                        <div className="p-card-subtitle flex justify-evenly">
                            <span>📅 {blog.date}</span>
                            <span className="text-gray-500">👁 {blog.views} lượt xem</span>
                        </div>
                        <img src={blog.thumbnail} alt={blog.title} className="w-full h-40 object-cover mb-1" />
                        <ScrollPanel style={{ width: '100%', height: '120px' }}>
                            <p className="text-sm text-gray-500">{blog.summary}</p>
                        </ScrollPanel>
                    </Card>
                </Link>
            </div>
        );
    };

    return (
        <div className="card mx-auto">
            <Carousel value={blogThumbnails} numScroll={1} numVisible={4} circular
                responsiveOptions={responsiveOptions} itemTemplate={blogThumbnailTemplate} />
        </div>
    );
}

export const HomepageBlogShowcase = () => {
    return (
        <div className="mt-3 max-w-full">
            <div className="text-3xl font-bold text-center text-[var(--text-color)] mb-1">Bài viết mới</div>
            <BlogShowcase />
        </div>
    );
}

export const blogThumbnailData: BlogThumbnail[] = [
    {
        id: '1',
        title: 'Học tiếng Hàn cùng Hàn Ngữ Munan',
        summary: `At No-IP.com, domain names are registered for fixed periods and will be automatically renewed for one year 30 days before the expiration date of the service. Renewals will continue at this interval until You cancel the service.
ChatGPT said:

Tại No-IP.com, tên miền được đăng ký trong một khoảng thời gian cố định và sẽ tự động gia hạn thêm một năm trước 30 ngày so với ngày hết hạn của dịch vụ. Việc gia hạn sẽ tiếp tục theo khoảng thời gian này cho đến khi Bạn hủy dịch vụ.`,
        thumbnail: '/blog1.webp',
        date: '1 ngày trước',
        views: 100
    },
    {
        id: '2',
        title: 'Học tiếng Hàn cùng Hàn Ngữ Munan',
        summary: 'Học tiếng Hàn cùng Hàn Ngữ Munan',
        thumbnail: '/blog2.webp',
        date: '2 ngày trước',
        views: 200
    },
    {
        id: '3',
        title: 'Học tiếng Hàn cùng Hàn Ngữ Munan',
        summary: 'Học tiếng Hàn cùng Hàn Ngữ Munan',
        thumbnail: '/blog3.webp',
        date: '3 ngày trước',
        views: 300
    },
    {
        id: '4',
        title: 'Học tiếng Hàn cùng Hàn Ngữ Munan',
        summary: 'Học tiếng Hàn cùng Hàn Ngữ Munan',
        thumbnail: '/blog4.webp',
        date: '4 ngày trước',
        views: 400
    },
    {
        id: '5',
        title: 'Học tiếng Hàn cùng Hàn Ngữ Munan',
        summary: 'Học tiếng Hàn cùng Hàn Ngữ Munan',
        thumbnail: '/blog5.webp',
        date: '5 ngày trước',
        views: 500
    }
];
