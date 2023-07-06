
export interface IWordPressPageRoot {
    status: string;
    page: IWordPressPage;
}

export interface IWordPressPage {
    id: number;
    type: string;
    slug: string;
    url: string;
    status: string;
    title: string;
    title_plain: string;
    content: string;
    excerpt: string;
    date: Date;
    modified: Date;
    categories: Category[];
    tags: Category[];
    author: Author;
    comments: any[];
    attachments: Attachment[];
    comment_count: number;
    comment_status: string;
    custom_fields: CustomFields;
}

export interface Attachment {
    id: number;
    url: string;
    slug: string;
    title: string;
    description: string;
    caption: string;
    parent: number;
    mime_type: string;
    images: { [key: string]: Image; };
}

export interface Image {
    url: string;
    width: number;
    height: number;
}

export interface Author {
    id: number;
    slug: string;
    name: string;
    first_name: string;
    last_name: string;
    nickname: string;
    url: string;
    description: string;
}

export interface Category {
    id: number;
    slug: string;
    title: string;
    description: string;
    parent?: number;
    post_count: number;
}

export interface CustomFields {
    cwp_meta_box_check: string[];
    tie_blog_layout: string[];
}
