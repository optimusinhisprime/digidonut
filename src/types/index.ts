// types.ts
export interface Slug {
  current: string;
}

export interface Image {
  _type: string;
  asset: {
    _ref: string;
    _type: string;
  };
}

export interface Block {
  _key: string;
  _type: string;
  children: Array<{
    _key: string;
    _type: string;
    marks: string[];
    text: string;
  }>;
  markDefs: any[];
  style?: string;
}

export interface Post {
  _id: string;
  title: string;
  slug: Slug;
  author: string;
  publishedAt: string;
  image: Image;
  excerpt: string;
  category: "Tech" | "Business" | "Lifestyle" | "Design" | "Other";
  tags: string[];
  readTime: number;
  isFeatured: boolean;
  metaDescription: string;
  body: Block[]; // Note: For more complex block content, you might refine this further.
}
