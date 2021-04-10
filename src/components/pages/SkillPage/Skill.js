import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import AnimatedTitle from "../../AnimatedTitle";
import CardSection from "../../CardSection";
import ProgressBar from "../../ProgressBar";
import { data1, data2, data3,data4, title1 } from "./SkillData";
import "./Skills.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Skill() {
  AOS.init({
    // initialise with other settings
    duration: 1000,
  });
  return (
    <>
      <div className="banner__skill_container">
        <Container>
          <Row style={{ flexDirection: "row-reverse" }}>
            <Col md={6} xs={12} className="my-auto pb-5">
              <AnimatedTitle {...title1} />
            </Col>
            <Col md={6} xs={12} className="my-auto pb-5">
              <ProgressBar />
            </Col>
          </Row>
        </Container>
      </div>
      
      <CardSection {...data1} />
      <CardSection {...data2} />
      <CardSection {...data4} />
      <CardSection {...data3} />
      <div className="banner__skill_container trans">
        <Container>
          <Row>
            <Col xs={12} className="text-center mb-5">
              <div className="card__main_title light">Tools and environment</div>
            </Col>
            <Col sm={4} className="pb-5">
              <Card className="custome__card" border="dark" bg="dark" text="light">
                  <div className="card__img_cont">
                  <Card.Img className="custome__img" variant="top" src="/images/vscode.png" />
                  </div>
                <Card.Body>
                  <Card.Text className="p-2">
                    Visual Studio code from Microsoft is commonly used by many company i have worked with. This free tool supports many extensions which easier for me to debug and also syntax checking. Most importantly it is a fast code editor i have used.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4} className="pb-5">
              <Card className="custome__card" border="dark"  bg="dark" text="light">
              <div className="card__img_cont"> <Card.Img className="custome__img" variant="top" src="/images/adobexd.png" /></div>
                <Card.Body>
                  <Card.Text className="p-2">
                  As a front end developer we depend on mocks for most part including the styling and structure of the web and also the copy for the webpage.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4} className="pb-5">
              <Card className="custome__card" border="dark" bg="dark" text="light">
              <div className="card__img_cont">  <Card.Img className="custome__img" variant="top" src="/images/xampp.jpg" /></div>
                <Card.Body>
                  <Card.Text className="p-2">
                   Xampp allow me front end developer to build website offline through localhost that consist Apache HTTP server.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4} className="pb-5">
              <Card className="custome__card" border="dark" bg="dark" text="light">
              <div className="card__img_cont"> <Card.Img className="custome__img" variant="top" src="/images/nodejs.jpg" /></div>
                <Card.Body>
                  <Card.Text className="p-2">
                    In term of my knowledge on Node.JS is basically used by me to run/debug React program or Ionic. This also allows front end developer to install package needed to create UI with <i>npm install</i> command.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4} className="pb-5">
              <Card className="custome__card" border="dark" bg="dark" text="light">
              <div className="card__img_cont">  <Card.Img className="custome__img" variant="top" src="/images/filezilla.png" /></div>
                <Card.Body>
                  <Card.Text className="p-2">
                    Transfering data from my local to server suing FileZilla as easy as drag and drop. Create the site with site manager with all credentials required to login to particular server.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4} className="pb-5">
              <Card className="custome__card" border="dark" bg="dark" text="light">
              <div className="card__img_cont">  <Card.Img className="custome__img" variant="top" src="/images/psai.jpg" /></div>
                <Card.Body>
                  <Card.Text className="p-2">
                   Both Photoshop and Illustrator from Adobe widely used bvy designer, however i too are long interested with these tool hence most of the time creating my own assets.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Skill;
