export interface NewsList {
    status: string;
    count: number;
    count_total: number;
    pages: number;
    posts: Post[];
    query: Query;
  }
  
  export interface Query {
    ignore_sticky_posts: boolean;
  }
  
  export interface Post {
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
    thumbnail_images: Thumbnailimages;
  }
  
  export interface Thumbnailimages {
    full: Full;
    thumbnail: Full;
    medium: Full;
    medium_large: Full;
    large: Full;
    '1536x1536': Full;
    '2048x2048': Full;
    'mobile-320'?: Full;
    'mobile-640'?: Full;
    'mobile-360'?: Full;
    'mobile-720'?: Full;
    'mobile-1080'?: Full;
    'tablet-768'?: Full;
    'tablet-800'?: Full;
    'tablet-1024'?: Full;
    'tablet-1280': Full;
    'jannah-image-small': Full;
    'jannah-image-large': Full;
    'jannah-image-post'?: Full;
  }
  
  export interface Customfields {
    tie_post_head: string[];
    tie_views: string[];
    tie_primary_category?: string[];
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
    images?: Images;
  }
  
  export interface Images {
    full: Full;
    thumbnail: Full;
    medium: Full;
    medium_large: Full;
    large: Full;
    '1536x1536': Full;
    '2048x2048': Full;
    'mobile-320'?: Full;
    'mobile-640'?: Full;
    'mobile-360'?: Full;
    'mobile-720'?: Full;
    'mobile-1080'?: Full;
    'tablet-768'?: Full;
    'tablet-800'?: Full;
    'tablet-1024'?: Full;
    'tablet-1280': Full;
    'jannah-image-small': Full;
    'jannah-image-large': Full;
    'jannah-image-post': Full;
  }
  
  export interface Full {
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
  
  export interface Tag {
    id: number;
    slug: string;
    title: string;
    description: string;
    post_count: number;
  }
  
  export interface Category {
    id: number;
    slug: string;
    title: string;
    description: string;
    parent: number;
    post_count: number;
  }

  