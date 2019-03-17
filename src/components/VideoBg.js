import React from "react";
import styled from "styled-components";

import bg from "../images/video-bg.mp4";

const Video = styled.video`
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: -10000;
`;

const Container = styled.div``;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.75;
  width: 100vw;
  height: 100vh;
  z-index: -1000;
  
  background: #4096ee; /* Old browsers */
  background: -moz-linear-gradient(top, #4096ee 0%, #39ced6 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top, #4096ee 0%,#39ced6 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom, #4096ee 0%,#39ced6 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#4096ee', endColorstr='#39ced6',GradientType=0 ); /* IE6-9 */
  
`;

const VideoBg = () => {
  return (
    <Container>
      <Video muted autoPlay loop id="myVideo">
        <source src={bg} type="video/mp4" />
      </Video>
      <Overlay />
    </Container>
  );
};

export default VideoBg;
