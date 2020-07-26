import { Section, SectionTypes } from "../types/types";

export default class Sections {
  private static BLOG_SECTION: Section = {
    type: SectionTypes.BLOG,
    name: "Blog",
    description: "Insights into the world of tech",
  };

  private static ARTICLES_SECTION: Section = {
    type: SectionTypes.ARTICLES,
    name: "Articles",
    description: "Areas of interest",
  };

  public static getSections(): Section[] {
    return [Sections.BLOG_SECTION, Sections.ARTICLES_SECTION];
  }
}
