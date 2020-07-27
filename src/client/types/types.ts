export enum SectionTypes {
  BLOG,
  ARTICLES,
}

export type Section = {
  type: SectionTypes;
  name: string;
  description: string;
};

export type Article = {
  title: string;
  publishDate: string;
  link: string;
  imgLink: string;
  description: string;
};
