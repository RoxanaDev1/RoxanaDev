import { Article } from "../types/types";

export default class Articles {
  private static ARTICLE_1: Article = {
    title: "Code design, why?",
    publishDate: "September 29, 2015",
    link: "/pulse/design-why-roxana-balan?trk=portfolio_article-card_title",
    imgLink:
      "https://media-exp1.licdn.com/dms/image/C4D12AQHMn0_KXbA8Zg/article-cover_image-shrink_600_2000/0?e=1601510400&v=beta&t=2y7tu0lgDgxxU3osRWvbY3_UbtmEtNC2I7ABfAjPu6w",
    description:
      "Why should we think about code design? Sometimes one would be surprised how much an initial code design session can contribute to building good code.",
  };

  private static ARTICLE_2: Article = {
    title: "Code that scales with Typescript",
    publishDate: "November 19, 2018",
    link:
      "https://www.linkedin.com/pulse/code-scales-typescript-roxana-balan-johansen?trk=related_artice_Code%20that%20scales%20with%20Typescript_article-card_title",
    imgLink:
      "https://media-exp1.licdn.com/dms/image/C4E12AQFuNMd4RB_zcg/article-cover_image-shrink_600_2000/0?e=1601510400&v=beta&t=9Khsms7q9mFgmbB1ZhzMhmiECAzpHCIxr79MOEBlw7g",
    description:
      "After working with Typescript for 4 years, I would like to share some of my learning and why I would encourage any team to take the TS path",
  };

  private static ARTICLE_3: Article = {
    title: "Thinking architecture in React",
    publishDate: "June 22, 2020",
    link:
      "/pulse/thinking-architecture-react-roxana-balan-johansen?trk=portfolio_article-card_title",
    imgLink:
      "https://media-exp1.licdn.com/dms/image/C4D12AQHdl9sXVUjGog/article-cover_image-shrink_600_2000/0?e=1601510400&v=beta&t=jYTdJg1ABPVMgJTsH5NEp3BADDDLUcgcDVd5O0wnx5Y",
    description:
      "Frontend architecture is not something which is often being done, here I share some of the knowledge I gained designing small and big scale React applications.",
  };

  public static getArticles(): Article[] {
    return [Articles.ARTICLE_1, Articles.ARTICLE_2, Articles.ARTICLE_3];
  }
}
