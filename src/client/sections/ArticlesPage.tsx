import * as React from "react";
import ArticleCard from "../components/ArticleCard";
import Articles from "../constants/Articles";
import styled from "styled-components";
import { Article } from "../types/types";

export default class ArticlesPage extends React.Component<{}, {}> {
  private renderArticles(): JSX.Element[] {
    return Articles.getArticles().map((article: Article) => {
      return <ArticleCard article={article} />;
    });
  }

  render() {
    return (
      <ArticlesPageContainer>{this.renderArticles()}</ArticlesPageContainer>
    );
  }
}

const ArticlesPageContainer = styled.div`
  display: flex;
  background: #5d6d7e;
  flex: 1;
  color: white;
`;
