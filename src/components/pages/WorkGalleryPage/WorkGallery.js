import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
function WorkGallery() {
  return (
    <>
      <div
        className="work__cont"
        style={{ overflow: "hidden", position: "relative" }}
      >
        <Container>
          <Row>
            <Col xs={12}>
              <h1 style={{ fontWeight: 900 }}> Work Gallery</h1>
            </Col>
             <Col md={4}  xs={12} className="py-5">
              <Card
                className="custome__card"
                border="dark"
                bg="dark"
                text="light"
              >
                <div className="card__img_cont">
                  
                  <Card.Img
                    className="custome__img"
                    variant="top"
                    src="/images/unifiG.png"
                  />
                </div>
                <Card.Body>
                  <Card.Text className="p-2">
                    <strong>Unifi Business Page</strong> <br/> 
               
                    <a href="https://unifi.com.my/business" target="_blank" rel="noopener noreferrer" className="p-0 text-primary">Visit page..</a>  
               
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
               <Col md={4}  xs={12} className="py-5">
              <Card
                className="custome__card"
                border="dark"
                bg="dark"
                text="light"
              >
                <div className="card__img_cont">
                  
                  <Card.Img
                    className="custome__img"
                    variant="top"
                    src="/images/ocbc1.png"
                  />
                </div>
                <Card.Body>
                  <Card.Text className="p-2">
                  <strong>OCBC Go Digital</strong> <br/> 
    
                  <a href=" https://www.ocbc.com.my/business-banking/accounts-and-services/go-digital/index.html" target="_blank" rel="noopener noreferrer" className="p-0 text-primary">Visit page..</a>
                 
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
               <Col md={4} xs={12} className="py-5">
              <Card
                className="custome__card"
                border="dark"
                bg="dark"
                text="light"
              >
                <div className="card__img_cont">
                  
                  <Card.Img
                    className="custome__img"
                    variant="top"
                    src="/images/ocbc2.png"
                  />
                </div>
                <Card.Body>
                  <Card.Text className="p-2">
                  <strong>OCBC Premier MGM</strong> <br/> 
                  <a href="https://www.ocbc.com.my/personal-banking/Premier/privileges/premierMGM/index.html" target="_blank" rel="noopener noreferrer" className="p-0 text-primary">Visit page..</a>  
               
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
               <Col md={4} xs={12} className="py-5">
              <Card
                className="custome__card"
                border="dark"
                bg="dark"
                text="light"
              >
                <div className="card__img_cont">
                  
                  <Card.Img
                    className="custome__img"
                    variant="top"
                    src="/images/ocbc3.png"
                  />
                </div>
                <Card.Body>
                  <Card.Text className="p-2">
                  <strong>OCBC Online Account Opening Form</strong> <br/> 

                  <a href="https://www.ocbc.com.my/personal-banking/Accounts/ocbc-online-acc-opening/index.html" target="_blank" rel="noopener noreferrer" className="p-0 text-primary">Visit page..</a>  
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
               <Col md={4} xs={12} className="py-5">
              <Card
                className="custome__card"
                border="dark"
                bg="dark"
                text="light"
              >
                <div className="card__img_cont">
                  
                  <Card.Img
                    className="custome__img"
                    variant="top"
                    src="/images/brandripe1.png"
                  />
                </div>
                <Card.Body>
                  <Card.Text className="p-2">
                  <strong>Brandripe.com websites</strong> <br/> 
                  <a href="https://brandripe.com/" target="_blank" rel="noopener noreferrer" className="p-0 text-primary">Visit page..</a>  
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
               <Col md={4}  xs={12} className="py-5">
              <Card
                className="custome__card"
                border="dark"
                bg="dark"
                text="light"
              >
                <div className="card__img_cont">
                  
                  <Card.Img
                    className="custome__img"
                    variant="top"
                    src="/images/alliance1.png"
                  />
                </div>
                <Card.Body>
                  <Card.Text className="p-2">
                  <strong>Alliance Bizmart</strong> <br/> 
                  <a href="https://bizsmartsolution.alliancebank.com.my/Sign-Up-as-Our-partner.aspx" target="_blank" rel="noopener noreferrer" className="p-0 text-primary">Visit page..</a>  
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

export default WorkGallery;
