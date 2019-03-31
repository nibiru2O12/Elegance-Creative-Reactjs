import React from "react";
import styled from "styled-components";

import homeImg from "../images/item-1.jpg";
import Sections from "../common/Sections";

const Home = () => {
  return (
    <Sections>
      <SectionContent>
        <p className="greetings">HELLO, WELCOME TO</p>
        <p className="title">ELEGANCE</p>
        <p className="desc">
          This is a clean and modern HTML5 template with a video background. You
          can use this layout for your profile page. Please spread a word about
          templatemo to your friends. Thank you.
        </p>
      </SectionContent>
    </Sections>
  );
};

const SectionContent = styled.div`
  color: white;
  text-align: center;
  width: 45vw;
  margin-left: auto;
  margin-right: auto;

  p {
    padding: 0px;
    margin: 0px;
  }

  & .greetings {
    font-size: 28px;
  }

  & .title {
    font-size: 94px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  & .desc {
    font-size: 20px;
    line-height: 1.5;
  }
`;

export default Home;
