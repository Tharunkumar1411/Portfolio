import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am Tharunkumar Govindharaj
            from <span className="purple"> Erode, India.</span>
            <br />I'm currently a working professional with <span className="purple">2 years</span> of experience in product development using <span className="purple">React and React Native.</span> Presently, I'm employed at ShopSe, a product-based company.
            <br /><br />
            I'm also passionate about exploring Web3 technologies and have started learning <span className="purple">1Ethereum and Solidity.</span>            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
