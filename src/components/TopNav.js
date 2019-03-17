import React, { Component } from "react";
import styled from "styled-components";

class TopNav extends Component {
  render() {
    return (
      <Wrapper>
        <Banner>ELEGANCE</Banner>
        <Nav>
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About Me</a>
            </li>
            <li>
              <a>Services</a>
            </li>
            <li>
              <a>My Skills</a>
            </li>
            <li>
              <a>My Work</a>
            </li>
            <li>
              <a>Testimonials</a>
            </li>
            <li>
              <a>Contact Me</a>
            </li>
          </ul>
        </Nav>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  color: white;
  z-index: 100000;
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const Banner = styled.div`
  padding: 15px;
  font-size: 26px;
  font-weight: bolder;
`;

const Nav = styled.div`
  & ul {
    margin: 0;
    padding: 0;
    display: flex;
    list-style: none;
    li {
      padding: 15px;
    }
    li > a {
      position: relative;
      display: inline-block;
      cursor: pointer;
      transition: 1s all;
      border-bottom: 2px solid transparent;
    }

    li > a:after {
      position: absolute;
      bottom: -8px;
      left: 0;
      right: 0;
      content: ".";
      color: transparent;
      background: white;
      height: 2px;
      transition: 0.3s all;
      transform: scaleX(0);
    }

    li > a:hover:after {
      /* border-bottom: 2px solid white; */
      transform: scaleX(1);
    }
  }
`;

export default TopNav;
