import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AnimatedTitle from "../../AnimatedTitle";
import { data1, data2 } from "./WorkData";
import "./WorkingExperience.css";
import AOS from "aos";
import "aos/dist/aos.css";

function WorkingExperience() {
  return (
    <>
      <div
        className="work__cont"
        style={{ overflow: "hidden", position: "relative" }}
      >
        <Container>
          <Row>
            <Col lg={10} sm={10} xs={12} className="p-0 my-auto">
              <AnimatedTitle {...data1} />
            </Col>
            <Col lg={6} sm={6} xs={12} className="p-2 my-auto">
              <div
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                <img src="/images/brandripe.png" alt="" className="card__img" />
              </div>
            </Col>
            <Col lg={6} sm={6} xs={12} className="p-2 my-auto">
            <div
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
              <img src="/images/ocbc-form.png" alt="" className="card__img" />
              </div>
            </Col>
            <Col lg={6} sm={6} xs={12} className="p-2 my-auto">
            <div
                data-aos="fade-up"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
              <img src="/images/unifi.png" alt="" className="card__img" />
              </div>
            </Col>
            <Col lg={6} sm={6} xs={12} className="p-2 my-auto">
            <div
                data-aos="fade-up"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
              <img src="/images/ocbcpage.png" alt="" className="card__img" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div
        className="work__cont"
        style={{ overflow: "hidden", position: "relative" }}
      >
        <Container>
          <Row>
            <Col lg={10} sm={10} xs={12} className="p-0 my-auto">
              <AnimatedTitle {...data2} />
            </Col>
            <Col lg={3} sm={3} xs={12} className="p-2 my-auto">
            <div
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
              <img src="/images/nationwide.png" alt="" className="card__img" /></div>
            </Col>
            <Col lg={6} sm={6} xs={12} className="p-2 my-auto">
            <div
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
              <img
                src="/images/bespokewebmock.png"
                alt=""
                className="card__img"
              /></div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default WorkingExperience;
