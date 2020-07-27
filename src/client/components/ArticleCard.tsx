import * as React from "react";
import styled from "styled-components";
import { Article } from "../types/types";

interface ArticleCardProps {
  article: Article;
}

export default class ArticleCard extends React.Component<ArticleCardProps, {}> {
  constructor(props: ArticleCardProps) {
    super(props);
  }

  render() {
    return (
      <ArticleCardContainer>
        <ArticleImage
          alt={this.props.article.title}
          src={this.props.article.imgLink}
        ></ArticleImage>
        <ArticleDescription>
          <ArticleTitle href={this.props.article.link}>
            {this.props.article.title}
          </ArticleTitle>
          <ArticlePublishDate>
            {this.props.article.publishDate}
          </ArticlePublishDate>
          <ArticleSummary>{this.props.article.description}</ArticleSummary>
        </ArticleDescription>
      </ArticleCardContainer>
    );
  }
}

const ArticleCardContainer = styled.div`
  display: flex;
  height: 350px;
  width: 300px;
  flex-direction: column;
  margin: 50px;
  background-color: white;
  color: black;
  border-radius: 0% 0% 0% 0% / 0% 0% 0% 0%;
  box-shadow: 10px 10px rgba(0, 0, 0, 0.15);
  transition: all 0.4s ease;
  :hover {
    box-shadow: 5px 15px rgba(0, 0, 0, 0.25);
  }
`;

const ArticleImage = styled.img`
  max-width: 100%;
  height: 150px;
  max-height: 100%;
`;

const ArticleDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-family: Helvetica, sans-serif;
`;

const ArticleTitle = styled.a`
  margin: 10px;
  align-self: center;
  text-decoration: none;
`;

const ArticlePublishDate = styled.label`
  margin: 10px;
  align-self: center;
  font-size: smaller;
`;

const ArticleSummary = styled.p`
  margin: 10px;
  align-self: center;
  text-align: justify;
  font-size: small;
`;
