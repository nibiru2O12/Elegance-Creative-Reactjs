import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import styled from "styled-components";

import Sections from "../common/Sections";
import img from "../images/profile-girl.jpg";

class About extends Component {
  state = {
    infos: [
      {
        icon: "",
        title: "degrees"
      },
      {
        icon: "",
        title: "working years"
      },
      {
        icon: "",
        title: "team members"
      },
      {
        icon: "",
        title: "certificates"
      },
      {
        icon: "",
        title: "awards won"
      }
    ]
  };

  render() {
    return (
      <Sections>
        <Container fluid>
          <Row className="justify-content-center">
            <Col md={10}>
              <Row className="align-items-end">
                <AboutCol className="about-content">
                  <span className="title">about me</span>
                  <h2 className="title">who am i?</h2>
                  <p className="desc">
                    Credits go to Unsplash and Pexels for photos and video used
                    in this template. Vivamus tincidunt, augue rutrum convallis
                    volutpat, massa lacus tempus leo.
                  </p>
                  <div>
                      <Card />
                  </div>
                </AboutCol>
                <Col>
                  <img src={img} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Sections>
    );
  }
}

const Card = styled(({ icon, badge, label, className }) => {
  return (
    <div className={className}>
      <span>Icon</span>
      <span>Badge</span>
      <span>Label</span>
    </div>
  );
})`
    display: flex;
    flex-direction: column;
    background: rgba(0,0,0,0.2);
    border-radius: 5%;
    padding: 20px;
    width: 180px;
`;

const AboutCol = styled(props => <Col {...props} />)`
  color: white;
  font-size: 16px;

  & .title {
    text-transform: uppercase;
  }

  & .title:nth-child(1) {
    font-size: 24px;
  }

  & .title:nth-child(2) {
    font-size: 32px;
    font-weight: bold;
  }

  & .desc {
    line-height: 1.8;
    margin-bottom: 20px;
  }
`;

// const Container = styled.div`
//   background: red;
//   color: white;
//   font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
//     "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
//     "Segoe UI Symbol", "Noto Color Emoji";
//   display: flex;
//   width: 100%;
//   justify-content: center;

//   & .content {
//     background: blue;
//     display: flex;
//     justify-content: center;
//     width: 100%;
//   }

//   & .title1 {
//     font-size: 24px;
//     text-transform: uppercase;
//   }

//   & .title2 {
//     font-size: 32px;
//     text-transform: uppercase;
//     font-weight: bold;
//   }
// `;

export default About;
