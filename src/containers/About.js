import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import styled from "styled-components";
import Slider from "react-slick";

import Sections from "../common/Sections";
import img from "../images/profile-girl.jpg";

class About extends Component {
  state = {
    facts: [
      {
        icon: "",
        label: "degrees",
        badge: 32
      },
      {
        icon: "",
        label: "working years",
        badge: 32
      },
      {
        icon: "",
        label: "team members",
        badge: 32
      },
      {
        icon: "",
        label: "certificates",
        badge: 32
      },
      {
        icon: "",
        label: "awards won",
        badge: 32
      }
    ]
  };

  render() {
    const { facts } = this.state;

    const slider_settings = {
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
      customPaging: i => (
        <div
          style={{
            width: "10px",
            height: "10px",
            background: "white"
          }}
        />
      )
    };

    return (
      <Sections>
        <Container fluid>
          <Row className="justify-content-center">
            <Col md={10}>
              <Row className="align-items-end">
                <AboutCol className="about-content" md={6}>
                  <span className="title">about me</span>
                  <h2 className="title">who am i?</h2>
                  <p className="desc">
                    Credits go to Unsplash and Pexels for photos and video used
                    in this template. Vivamus tincidunt, augue rutrum convallis
                    volutpat, massa lacus tempus leo.
                  </p>
                  <AboutSlider {...slider_settings}>
                    {facts.map(f => (
                      <Card label={f.label} badge={f.badge} />
                    ))}
                  </AboutSlider>

                </AboutCol>
                <Col><img src={img} /></Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Sections>
    );
  }
}

const AboutSlider = styled(props => <Slider {...props} />)`
  width: 100%;

  & .item {
    width: 156px;
    height: 100%;
  }

  &&& .slick-dots {
    position: relative ;
  }
`;

const Card = styled(({ icon, badge, label, className }) => {
  return (
    <div className={className}>
      <i className="icon">Icon</i>
      <span className="badge">{badge}</span>
      <span className="label">{label}</span>
    </div>
  );
})`
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 5%;
  padding: 20px;
  margin-right: 30px;
  text-align: center;
  font-size: 14px;
  height: 100%;
  justify-content: stretch;
  align-items: stretch;
  text-transform: capitalize;

  & .icon {
    font-size: 30px;
  }
  & .badge {
    font-size: 26px;
  }
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
