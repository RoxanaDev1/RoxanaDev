import * as React from "react";
import Header from "./components/Header";
import SimpleComponent from "./components/SimpleComponent";
import styled from "styled-components";
import SideNavigation from "./components/SideNavigation";
import Sections from "./constants/Sections";
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

  render() {
    return (
      <AppContainer>
        <Header />
        <ContentContainer>
          <SideNavigation
            sections={Sections.getSections()}
            onSelectSection={this.onSelectCurrentSection}
          />
          <SimpleComponent text={"This is another simple component"} />
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
  max-width: fit-content;
`;
