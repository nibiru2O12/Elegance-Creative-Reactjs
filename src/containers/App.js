import React, { Component } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import styled from "styled-components";

import Home from "./Home";
import VideoBg from "../components/VideoBg";
import TopNav from '../components/TopNav';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <VideoBg />
        <TopNav />
          <ReactFullpage
            render={({ state, fullpageApi }) => {
              return (
                <div>
                  <ReactFullpage.Wrapper>
                    <Home />
                    <Home />
                  </ReactFullpage.Wrapper>
                </div>
              );
            }}
          />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  * {
    box-sizing: border-box;
  }
  height: 100vh;
`;

export default App;
