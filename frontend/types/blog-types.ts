export interface Blog {
  documentId: string;
  category: string;
  title: string;
  date: string;
  preview: string;
  entry: string;
  author: Author;
}

export interface Author {
  documentId: string;
  name: string;
  position: string;
  socialLink?: string;
  avatar: {
    url: string;
  };
}
