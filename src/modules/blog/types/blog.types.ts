export interface BlogPost {
    id?: string;
    title: string;
    slug: string;
    content: string;
    excerpt: string;
    featuredImage: string;
    category: string;
    tags: string[];
    status: string;
    author: string;
    authorAvatar?: string;
    publishedAt?: Date;
    views?: number;
    likes?: number;
}


export interface Comment {
    id: string;
    postId: string;
    author: string;
    authorAvatar?: string;
    content: string;
    createdAt: Date;
    replies?: Reply[];
}

export interface Reply {
    id: string;
    commentId: string;
    author: string;
    authorAvatar?: string;
    content: string;
    createdAt: Date;
}

export interface Category {
    name: string;
    value: string;
}

export interface Status {
    name: string;
    value: string;
}

export type BlogFormProps = {
    blogPost: BlogPost;
    setBlogPost: React.Dispatch<React.SetStateAction<BlogPost>>;
    isLoading: boolean;
    onSaveDraft: () => void;
    onPublish: () => void;
    onDelete?: () => void;
    onCancel: () => void;
};