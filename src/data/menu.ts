import { MenuItem } from "primereact/menuitem";

// Menu items cho trang chủ
export const createMenuItems = (navigate: any): MenuItem[] => [
    {
        label: 'Trang chủ',
        icon: 'pi pi-home',
        command: () => navigate('/')
    },
    {
        label: 'Giới thiệu',
        icon: 'pi pi-sparkles',
        command: () => navigate('/gioi-thieu')
    },
    {
        label: 'Khóa học',
        icon: 'pi pi-shop',
        items: [
            {
                label: 'Xem tất cả khóa học',
                icon: 'pi pi-list',
                command: () => navigate('/khoa-hoc')
            },
            {
                label: 'Tiếng Hàn sơ cấp',
                icon: 'pi pi-language',
                command: () => navigate('/khoa-hoc/tieng-han-so-cap')
            },
            {
                label: 'Tiếng Hàn trung cấp',
                icon: 'pi pi-language',
                command: () => navigate('/khoa-hoc/tieng-han-trung-cap')
            },
            {
                label: 'Tiếng Hàn cao cấp',
                icon: 'pi pi-language',
                command: () => navigate('/khoa-hoc/tieng-han-cao-cap')
            },
            {
                label: 'Tiếng Hàn thi TOPIK',
                icon: 'pi pi-verified',
                command: () => navigate('/khoa-hoc/tieng-han-thi-topik')
            },
            {
                label: 'Tiếng Hàn XKLĐ EPS',
                icon: 'pi pi-briefcase',
                command: () => navigate('/khoa-hoc/tieng-han-xkld-eps')
            },
            {
                label: 'Tiếng Hàn cấp tốc',
                icon: 'pi pi-bolt',
                command: () => navigate('/khoa-hoc/tieng-han-cap-toc')
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
                command: () => navigate('/tu-vung-tieng-han')
            },
            {
                label: 'Ngữ pháp tiếng Hàn',
                icon: 'pi pi-language',
                items: [
                    {
                        label: 'Ngữ pháp cơ bản',
                        icon: 'pi pi-language',
                        command: () => navigate('/ngu-phap-co-ban')
                    },
                    {
                        label: 'Mục lục ngữ pháp',
                        icon: 'pi pi-list',
                        command: () => navigate('/muc-luc-ngu-phap')
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
                command: () => navigate('/han-quoc-hoc/lich-su-han-quoc')
            },
            {
                label: 'Văn hóa Hàn Quốc',
                icon: 'pi pi-building-columns',
                command: () => navigate('/han-quoc-hoc/van-hoa-han-quoc')
            },
            {
                label: 'Xã hội Hàn Quốc',
                icon: 'pi pi-users',
                command: () => navigate('/han-quoc-hoc/xh-han-quoc')
            }
        ]
    },
    {
        label: 'Liên hệ',
        icon: 'pi pi-envelope',
        command: () => navigate('/lien-he')
    }
];

// Menu dropdown cho avatar
export const createAvatarDropdownItems = (navigate: any, logout: any): MenuItem[] => [
    {
        label: 'Khóa học của tôi',
        icon: 'pi pi-book',
        command: () => navigate('/khoa-hoc-cua-toi')
    },
    {
        label: 'Thông tin cá nhân',
        icon: 'pi pi-user',
        command: () => navigate('/thong-tin-ca-nhan')
    },
    {
        label: 'Đăng xuất',
        icon: 'pi pi-sign-out',
        command: () => logout()
    }
];

// Menu dropdown cho avatar của admin
export const createAdminAvatarDropdownItems = (navigate: any, logout: any): MenuItem[] => [
    {
        label: 'Bảng điều khiển',
        icon: 'pi pi-th-large',
        command: () => navigate('/admin/dashboard')
    },
    {
        label: 'Thông tin cá nhân',
        icon: 'pi pi-user',
        command: () => navigate('/admin/thong-tin-ca-nhan')
    },
    {
        label: 'Cài đặt hệ thống',
        icon: 'pi pi-cog',
        command: () => navigate('/admin/cai-dat')
    },
    {
        label: 'Đăng xuất',
        icon: 'pi pi-sign-out',
        command: () => logout()
    }
];

// Menu items cho admin dashboard
export const createAdminMenuItems = (navigate: any): MenuItem[] => [
    {
        label: 'Bảng điều khiển',
        icon: 'pi pi-th-large',
        command: () => navigate('/admin/dashboard')
    },
    {
        label: 'Khóa học',
        icon: 'pi pi-book',
        items: [
            {
                label: 'Quản lý khóa học',
                icon: 'pi pi-list',
                command: () => navigate('/admin/khoa-hoc/quan-ly')
            },
            {
                label: 'Tạo khóa học',
                icon: 'pi pi-plus',
                command: () => navigate('/admin/khoa-hoc/tao-moi')
            },
            {
                label: 'Danh mục khóa học',
                icon: 'pi pi-tags',
                command: () => navigate('/admin/khoa-hoc/danh-muc')
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
                command: () => navigate('/admin/nguoi-dung/quan-ly')
            },
            {
                label: 'Phân quyền',
                icon: 'pi pi-lock',
                command: () => navigate('/admin/nguoi-dung/phan-quyen')
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
                command: () => navigate('/admin/bai-viet/quan-ly')
            },
            {
                label: 'Tạo bài viết',
                icon: 'pi pi-plus',
                command: () => navigate('/admin/bai-viet/tao-moi')
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
                command: () => navigate('/admin/thong-ke/doanh-thu')
            },
            {
                label: 'Người dùng',
                icon: 'pi pi-users',
                command: () => navigate('/admin/thong-ke/nguoi-dung')
            }
        ]
    },
    {
        label: 'Cài đặt',
        icon: 'pi pi-cog',
        command: () => navigate('/admin/cai-dat')
    }
];