import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import profileImg from "./../../../images/profile-banner.png";
import bannerImg from "./../../../images/bannerimg.png";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CardSection from "../../CardSection";
import "./HomeData.js";
import { data1, data2, data3, title1 } from "./HomeData.js";
import AnimatedTitle from "../../AnimatedTitle";

function Home() {
  return (
    <>
      <div
        className="banner__home"
        style={{ overflow: "hidden", position: "relative" }}
      >
        <div>
          <img src={bannerImg} className="banner__img" alt="" />
        </div>
        <Container fluid>
          <Row>
            <Col xl={{ span: 3 }} lg={4} sm={6} xs={12}>
              <div className="banner__home__content ">
                <div className="banner__home__img">
                  <img src={profileImg} alt="" />
                </div>
              </div>
            </Col>
            <Col xl={{ span: 4 }} lg={8} sm={6} xs={12} className="p-0 my-auto">
              <AnimatedTitle {...title1} />
            </Col>
          </Row>
        </Container>
      </div>
      <CardSection {...data1} />
      <CardSection {...data2} />
      <CardSection {...data3} />
    </>
  );
}

export default Home;
