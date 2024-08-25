import React from "react";
import "./newsletter.css";

import { Container, Row, Col } from "reactstrap";
import maleTourist from "../assets/images/male-tourist.png";

const NewSletter = () => {
  return (
    <section className="newsletter">
      <Container>
        <Row>
          <Col lg="6">
            <div className="newsletter__content">
              <h2>Subsctibe now to get usefull travelling information</h2>

              <div className="newsletter__input">
                <input type="email" placeholder="Enter Your email" />
                <button className="btn newsletter__btn">Subscribe</button>
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Molestias ab aliquam obcaecati fugiat nobis veritatis fuga
                inventore voluptatibus ullam molestiae.
              </p>
            </div>
          </Col>
          <Col lg="6">
            <div className="newsletter__img">
              <img src={maleTourist} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NewSletter;
