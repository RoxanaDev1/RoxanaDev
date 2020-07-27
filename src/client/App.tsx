import * as React from "react";
import ArticlesPage from "./sections/ArticlesPage";
import Header from "./components/Header";
import Sections from "./constants/Sections";
import SideNavigation from "./components/SideNavigation";
import SimpleComponent from "./components/SimpleComponent";
import styled from "styled-components";
import { SectionTypes } from "./types/types";

interface AppState {
  currentSection: SectionTypes;
}

export default class App extends React.Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      currentSection: SectionTypes.ARTICLES,
    };
  }

  private onSelectCurrentSection(section: SectionTypes): void {
    this.setState({
      currentSection: section,
    });
  }

  private renderArticlesPage() {
    if (this.state.currentSection !== SectionTypes.ARTICLES) {
      return;
    }
    return <ArticlesPage />;
  }

  private renderBlogPage() {
    if (this.state.currentSection !== SectionTypes.BLOG) {
      return;
    }
    return <SimpleComponent text={"Nothing here yet :)"} />;
  }

  render() {
    return (
      <AppContainer>
        <Header />
        <ContentContainer>
          <SideNavigation
            sections={Sections.getSections()}
            onSelectSection={this.onSelectCurrentSection}
          />
          {this.renderArticlesPage()}
          {this.renderBlogPage()}
        </ContentContainer>
      </AppContainer>
    );
  }
}

const AppContainer = styled.div`
  width: 100vh;
  height: 100vh;
  min-width: 100%;
  min-height: 100%;
`;

const ContentContainer = styled.div`
  display: flex;
  height: inherit;
  max-width: 100%;
`;
