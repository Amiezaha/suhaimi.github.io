import React from "react";
import "./CardSection.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

function CardSection({
  darkBg,
  lightBg,
  lightText,
  lightTextCardTitle,
  lightTextCardDesc,
  titleText,
  cardTitle,
  cardDesc,
  cardLink,
  sectionImg,
  imgAlt,
  imgStart,
  haveLink,
  linkText,
  animateLeft
}) {
  AOS.init({
    // initialise with other settings
    duration: 1000,
  });
  return (
    <>
      <div
        className={
          darkBg
            ? "card__section_cont"
            : lightBg === "light"
            ? "card__section_cont light"
            : "card__section_cont trans"
        }
      >
        <div
          data-aos={animateLeft ? 'fade-left':'fade-right'}
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <Container className="card__container">
            <Row>
              <Col className="text-center">
                <div
                  className={
                    lightText ? "card__main_title" : "card__main_title dark"
                  }
                >
                  {titleText}
                </div>
              </Col>
            </Row>
            <Row
              className="py-sm-5"
              style={{
                flexDirection: imgStart === "Start" ? "row-reverse" : "row",
              }}
            >
              <Col sm={6} xs={12} className="my-auto">
                <Card
                  style={{
                    background: "transparent",
                    border: "none",
                    paddingTop: "1rem",
                  }}
                >
                  <Card.Body>
                    <Card.Title
                      className={
                        lightTextCardTitle
                          ? "card__sub_title"
                          : "card__sub_title dark"
                      }
                    >
                      {cardTitle}
                    </Card.Title>
                    <Card.Text
                      className={
                        lightTextCardDesc
                          ? "card__desc mb-4"
                          : "card__desc dark mb-4"
                      }
                    >
                      {cardDesc}
                    </Card.Text>
                    <Card.Link
                      className="card__link"
                      href={cardLink}
                      style={{ display: haveLink ? "" : "none" }}
                    >
                      {linkText}
                    </Card.Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={6} xs={12} className="text-center">
                <img src={sectionImg} alt={imgAlt} className="card__img" />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default CardSection;
