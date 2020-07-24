import * as React from "react";
import Header from "./components/Header";
import SimpleComponent from "./components/SimpleComponent";
import styled from "styled-components";

export default class App extends React.Component {
  render() {
    return (
      <AppContainer>
        <Header />
        <SimpleComponent text={"This is another simple component"} />
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
