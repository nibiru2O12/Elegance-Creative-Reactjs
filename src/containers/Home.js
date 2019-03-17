import React from "react";
import styled from "styled-components";

import homeImg from '../images/item-1.jpg';

const Home = () => {
  return (
      <Container className="section">
        <p>HELLO, WELCOME TO</p>
        <p className="title">ELEGANCE</p>
        <p className="desc">
          This is a clean and modern HTML5 template with a video background. You
          can use this layout for your profile page. Please spread a word about
          templatemo to your friends. Thank you.
        </p>
      </Container>
  );
};

const Container = styled.div`
`;

export default Home;
