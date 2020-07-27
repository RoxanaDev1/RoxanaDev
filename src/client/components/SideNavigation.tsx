import * as React from "react";
import styled from "styled-components";
import { Section, SectionTypes } from "../types/types";

interface SideNavigationProps {
  sections: Section[];
  onSelectSection: (section: SectionTypes) => void;
}

export default class SideNavigation extends React.Component<
  SideNavigationProps,
  {}
> {
  constructor(props: SideNavigationProps) {
    super(props);
  }

  private renderSections(): JSX.Element[] {
    return this.props.sections.map((section: Section) => {
      return (
        <SectionButton>
          <SectionButtonTitle>{section.name}</SectionButtonTitle>
          <SectionButtonDescription>
            {section.description}
          </SectionButtonDescription>
        </SectionButton>
      );
    });
  }

  render() {
    return (
      <SideNavigationContainer>{this.renderSections()}</SideNavigationContainer>
    );
  }
}

const SideNavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: monospace;
  color: white;
  text-align: center;
  background: #85929e;
  min-width: 150px;
  padding: 20px;
`;

const SectionButton = styled.button`
  display: inline-flex;
  flex-direction: column;
  border: none;
  background: none;
  color: white;
  padding: 0;
  margin-bottom: 25px;
  align-self: baseline;
  cursor: pointer;
`;

const SectionButtonTitle = styled.label`
  font-size: xx-large;
  letter-spacing: 5px;
  text-transform: uppercase;
  font-weight: bold;
  cursor: inherit;
`;

const SectionButtonDescription = styled.label`
  font-size: small;
  letter-spacing: 1px;
  cursor: inherit;
`;
