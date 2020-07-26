import * as React from "react";
import styled from "styled-components";

export default class Header extends React.Component<{}, {}> {
  render() {
    return (
      <HeaderContainer>
        <HeaderTitle>Roxana Dev - Blog and Articles</HeaderTitle>
        <HeaderDescription>Software Engineer</HeaderDescription>
      </HeaderContainer>
    );
  }
}

const HeaderContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100px;
  font-family: monospace;
  background: #3d4f5d;
  color: white;
  text-align: center;
`;

const HeaderTitle = styled.div`
  font-size: xx-large;
  letter-spacing: 5px;
`;

const HeaderDescription = styled.div`
  font-size: x-large;
`;
