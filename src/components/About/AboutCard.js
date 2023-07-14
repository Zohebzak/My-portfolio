import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Zoheb khan </span>
            from <span className="purple"> Parbhani, India.</span>
            <br />I am a React js Developer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Riding Bike
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "You will never know unless you try!"{" "}
          </p>
          <footer className="blockquote-footer">Zoheb</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
