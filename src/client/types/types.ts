export enum SectionTypes {
  BLOG,
  ARTICLES,
}

export type Section = {
  type: SectionTypes;
  name: string;
  description: string;
};
