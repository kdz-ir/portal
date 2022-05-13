export interface NewsDto {
    status: string;
    count: number;
    count_total: number;
    pages: number;
    posts: Post[];
}

interface Post {
    id: number;
    type: string;
    slug: string;
    url: string;
    status: string;
    title: string;
    title_plain: string;
    content: string;
    excerpt: string;
    date: string;
    modified: string;
    categories: Category[];
    tags: Tag[];
    author: Author;
    comments: any[];
    attachments: Attachment[];
    comment_count: number;
    comment_status: string;
    thumbnail: string;
    custom_fields: Customfields;
    thumbnail_size: string;
    thumbnail_images: Images;
}

interface Customfields {
    tie_post_head: string[];
    tie_views: string[];
    tie_primary_category?: string[];
    tie_image_lightbox?: string[];
    cwp_meta_box_check?: string[];
    um_content_restriction?: string[];
}

interface Attachment {
    id: number;
    url: string;
    slug: string;
    title: string;
    description: string;
    caption: string;
    parent: number;
    mime_type: string;
    images?: Images;
}

interface Images {
    full: Full;
    thumbnail: Full;
    medium: Full;
    medium_large: Full;
    large: Full;
    '1536x1536': Full;
    '2048x2048': Full;
    'jannah-image-small': Full;
    'jannah-image-large': Full;
    'jannah-image-post': Full;
}

interface Full {
    url: string;
    width: number;
    height: number;
}

interface Author {
    id: number;
    slug: string;
    name: string;
    first_name: string;
    last_name: string;
    nickname: string;
    url: string;
    description: string;
}

interface Tag {
    id: number;
    slug: string;
    title: string;
    description: string;
    post_count: number;
}

interface Category {
    id: number;
    slug: string;
    title: string;
    description: string;
    parent: number;
    post_count: number;
}