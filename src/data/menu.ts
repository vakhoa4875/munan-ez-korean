import { MenuItem } from "primereact/menuitem";

export const menuItems: MenuItem[] = [
    {
        label: 'Trang chủ',
        icon: 'pi pi-home',
        url: '/'
    },
    {
        label: 'Giới thiệu',
        icon: 'pi pi-sparkles',
        url: '/gioi-thieu'
    },
    {
        label: 'Khóa học',
        icon: 'pi pi-shop',
        items: [
            {
                label: 'Tiếng Hàn sơ cấp',
                icon: 'pi pi-language',
                url: '/khoa-hoc/tieng-han-so-cap'
            },
            {
                label: 'Tiếng Hàn trung cấp',
                icon: 'pi pi-language',
                url: '/khoa-hoc/tieng-han-trung-cap'
            },
            {
                label: 'Tiếng Hàn cao cấp',
                icon: 'pi pi-language',
                url: '/khoa-hoc/tieng-han-cao-cap'
            },
            {
                label: 'Tiếng Hàn thi TOPIK',
                icon: 'pi pi-verified',
                url: '/khoa-hoc/tieng-han-thi-topik'
            },
            {
                label: 'Tiếng Hàn XKLĐ EPS',
                icon: 'pi pi-briefcase',
                url: '/khoa-hoc/tieng-han-xkld-eps'
            },
            {
                label: 'Tiếng Hàn cấp tốc',
                icon: 'pi pi-bolt',
                url: '/khoa-hoc/tieng-han-cap-toc'
            }
        ]
    },
    {
        label: 'Tự học tiếng Hàn',
        icon: 'pi pi-book',
        items: [
            {
                label: 'Từ vựng tiếng Hàn',
                icon: 'pi pi-language',
                url: '/tu-vung-tieng-han'
            },
            {
                label: 'Ngữ pháp tiếng Hàn',
                icon: 'pi pi-language',
                items: [
                    {
                        label: 'Ngữ pháp cơ bản',
                        icon: 'pi pi-language',
                        url: '/ngu-phap-co-ban'
                    },
                    {
                        label: 'Mục lục ngữ pháp',
                        icon: 'pi pi-list',
                        url: '/muc-luc-ngu-phap'
                    }
                ]
            }
        ]
    },
    {
        label: 'Hàn Quốc học',
        icon: 'pi pi-comments',
        items: [
            {
                label: 'Lịch sử Hàn Quốc',
                icon: 'pi pi-history',
                url: '/han-quoc-hoc/lich-su-han-quoc'
            },
            {
                label: 'Văn hóa Hàn Quốc',
                icon: 'pi pi-building-columns',
                url: '/han-quoc-hoc/van-hoa-han-quoc'
            },
            {
                label: 'Xã hội Hàn Quốc',
                icon: 'pi pi-users',
                url: '/han-quoc-hoc/xh-han-quoc'
            }
        ]
    },
    {
        label: 'Liên hệ',
        icon: 'pi pi-envelope',
        url: '/lien-he'
    }
];

export const avatarDropdownItems: MenuItem[] = [
    {
        label: 'Khóa học của tôi',
        icon: 'pi pi-book',
        url: '/khoa-hoc-cua-toi'
    },
    {
        label: 'Thông tin cá nhân',
        icon: 'pi pi-user',
        url: '/thong-tin-ca-nhan'
    },
    {
        label: 'Đăng xuất',
        icon: 'pi pi-sign-out',
        url: '/dang-xuat'
    }
];

// Menu dropdown cho avatar của admin
export const adminAvatarDropdownItems: MenuItem[] = [
    {
        label: 'Bảng điều khiển',
        icon: 'pi pi-th-large',
        url: '/admin/dashboard'
    },
    {
        label: 'Thông tin cá nhân',
        icon: 'pi pi-user',
        url: '/admin/thong-tin-ca-nhan'
    },
    {
        label: 'Cài đặt hệ thống',
        icon: 'pi pi-cog',
        url: '/admin/cai-dat'
    },
    {
        label: 'Đăng xuất',
        icon: 'pi pi-sign-out',
        url: '/dang-xuat'
    }
];

// Menu items cho admin dashboard
export const adminMenuItems: MenuItem[] = [
    {
        label: 'Bảng điều khiển',
        icon: 'pi pi-th-large',
        url: '/admin/dashboard'
    },
    {
        label: 'Khóa học',
        icon: 'pi pi-book',
        items: [
            {
                label: 'Quản lý khóa học',
                icon: 'pi pi-list',
                url: '/admin/khoa-hoc/quan-ly'
            },
            {
                label: 'Tạo khóa học',
                icon: 'pi pi-plus',
                url: '/admin/khoa-hoc/tao-moi'
            },
            {
                label: 'Danh mục khóa học',
                icon: 'pi pi-tags',
                url: '/admin/khoa-hoc/danh-muc'
            }
        ]
    },
    {
        label: 'Người dùng',
        icon: 'pi pi-users',
        items: [
            {
                label: 'Quản lý người dùng',
                icon: 'pi pi-user-edit',
                url: '/admin/nguoi-dung/quan-ly'
            },
            {
                label: 'Phân quyền',
                icon: 'pi pi-lock',
                url: '/admin/nguoi-dung/phan-quyen'
            }
        ]
    },
    {
        label: 'Bài viết',
        icon: 'pi pi-file',
        items: [
            {
                label: 'Quản lý bài viết',
                icon: 'pi pi-list',
                url: '/admin/bai-viet/quan-ly'
            },
            {
                label: 'Tạo bài viết',
                icon: 'pi pi-plus',
                url: '/admin/bai-viet/tao-moi'
            }
        ]
    },
    {
        label: 'Thống kê',
        icon: 'pi pi-chart-bar',
        items: [
            {
                label: 'Doanh thu',
                icon: 'pi pi-dollar',
                url: '/admin/thong-ke/doanh-thu'
            },
            {
                label: 'Người dùng',
                icon: 'pi pi-users',
                url: '/admin/thong-ke/nguoi-dung'
            }
        ]
    },
    {
        label: 'Cài đặt',
        icon: 'pi pi-cog',
        url: '/admin/cai-dat'
    }
];
