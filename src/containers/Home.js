import React, { useState, useEffect } from "react";
import styled from "styled-components";
import inview from "in-view";
import Sections from "../common/Sections";

const Home = props => {
  const [isActive, setState] = useState(false);

  useEffect(() => {
    inview("#section-home").on("enter", () => setState(true));
    inview("#section-home").on("exit", () => setState(false));
  });

  console.log(isActive);

  console.log("home");

  return (
    <Sections>
      <SectionContent id="section-home" active={isActive}>
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
  transform: translate(0px, 20%);
  text-align: center;
  width: 45vw;
  margin-left: auto;
  margin-right: auto;
  font-size: 20px;
  opacity: 0;
  animation: ${({ active }) => (active ? "fadein" : "")} .6s forwards;
  /* transform: translate(0, 100px); */

  p {
    padding: 0px;
    margin: 0px;
  }

  & .greetings {
    font-size: 28px;
  }

  & .title {
    font-size: 100px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  & .desc {
    line-height: 1.5;
  }

  @keyframes fadein {
    0% {
      opacity: 0;
      transform: translate(0px, 30%);
    }
    100% {
      opacity: 1;
      transform: translate(0px, 0px);
    }
  }

  @keyframes fadeout {
    0% {
      opacity: 0;
    }
  }
`;

export default Home;
