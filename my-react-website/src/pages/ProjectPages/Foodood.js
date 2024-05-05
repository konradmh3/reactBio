import "../../style/Foodood.css";
import BurgerCanvas from "../../scenes/BurgerScene";

import { useEffect } from "react";
import { createBrowserHistory } from "history";
import { Container, Row, Col, Visible, Hidden } from "react-grid-system";
import doodLogo from "../../assets/fooDoodTitle.png";

const Foodood = () => {
  // Lest hide the scroll bar but still allow scrolling so we cant use overflow:hidden
  // 
  
  return (
    <div className = "foodoodContainerNoScroll">
    <div className="foodoodContainer">
      <Container>
        {/* Just going to completely hide the content between these commentss for simplicity for xxs to s */}
        <Hidden xxs xs sm>
          <Row className="fatherRow">
            <Col className="fatherCol1" md={4}>
              <Row className="titleRow">
                <Col className="titleCol" lg={12}>
                  <img className="doodLogo" src={doodLogo} alt="foodood" />
                </Col>
              </Row>

              <Row className="imgRow">
                <Col className="imgCol" lg={12}>
                  <div className="imgsContainer"></div>
                </Col>
              </Row>
            </Col>

            <Col className="fatherCol2" md={8}>
              <Row className="descriptionRow">
                <Col className="descriptionCol" lg={12}>
                  <div className="descriptionContainer"></div>
                </Col>
              </Row>

              <Row className="frameworks">
                <Col className="frameworksCol" md={2}>
                  <BurgerCanvas />
                </Col>
                <Col className="frameworksCol" md={2}>
                  <BurgerCanvas />
                </Col>
                <Col className="frameworksCol" md={2}>
                  <BurgerCanvas />
                </Col>
                <Col className="frameworksCol" md={2}>
                  <BurgerCanvas />
                </Col>
                <Col className="frameworksCol" md={2}>
                  <BurgerCanvas />
                </Col>
                <Col className="frameworksCol" md={2}>
                  <BurgerCanvas />
                </Col>
              </Row>

              <Row className="hamburgers">
                <Col className="burgerCol" md={2}>
                  <BurgerCanvas />
                </Col>
                <Col className="burgerCol" md={2}>
                  <BurgerCanvas />
                </Col>
                <Col className="burgerCol" md={2}>
                  <BurgerCanvas />
                </Col>
                <Col className="burgerCol" md={2}>
                  <BurgerCanvas />
                </Col>
                <Col className="burgerCol" md={2}>
                  <BurgerCanvas />
                </Col>
                <Col className="burgerCol" md={2}>
                  <BurgerCanvas />
                </Col>
              </Row>

              <Row className="projLinks">
                <Col className="projLinkCol" md={6}>
                  <div className="projLinkContainer"></div>
                </Col>
                <Col className="projLinkCol" md={6}>
                  <div className="projLinkContainer"></div>
                </Col>
              </Row>

              <Row className="roleRow">
                <Col className="roleCol" lg={12}>
                  <div className="roleContainer"></div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Hidden>
        {/* Just going to completely hide the content between these commentss for simplicity for xxs to s */}
        {/* BELOW IS MOBILE/SMALL SCREEN VIEW */}
        <Hidden md lg xxl>
          <Row className="mobileTitleRow">
            <Col className="centerColBurger" xs={2}>
              <BurgerCanvas />
            </Col>
            <Col className="centerCol" xs={8}>
              <img className="doodLogoMobile" src={doodLogo} alt="foodood" />
            </Col>
            <Col className="centerColBurger" xs={2}>
              <BurgerCanvas />
            </Col>
          </Row>
          <Row className="descRow">
            <Col className="centerCol" xs={6}>
              <div className="descriptionMobile"></div>
            </Col>
            <Col className="centerCol" xs={6}>
              <div className="roleMobile"></div>
            </Col>
          </Row>
          <Row className="picRow">
            <Col className="centerCol" xs={12}>
              <div className="picsMobile"></div>
            </Col>
          </Row>
          <Row className="frameworksTitleRow">
            <Col className="centerColFW" xs={12}>
              <div className="frameworksMobileTitle">Frameworks</div>
            </Col>
          </Row>
          <Row className="frameworksMobileRow">
            <Col className="centerColBurger" xs={3}>
              <BurgerCanvas />
            </Col>
            <Col className="centerColBurger" xs={3}>
              <BurgerCanvas />
            </Col>
            <Col className="centerColBurger" xs={3}>
              <BurgerCanvas />
            </Col>
            <Col className="centerColBurger" xs={3}>
              <BurgerCanvas />
            </Col>
          </Row>
          <Row className="buttonRow">
            <Col className="centerCol" xs={6}>
              <div className="githubLink"></div>
            </Col>
            <Col className="centerCol" xs={6}>
              <div className="websiteLink"></div>
            </Col>
          </Row>
        </Hidden>
        {/* ABOVE IS MOBILE/SMALL SCREEN VIEW */}
      </Container>
    </div>
    </div>
  );
};

export default Foodood;