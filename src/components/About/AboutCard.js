import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ronny Ohawa </span>
            from <span className="purple"> Nairobi, Kenya.</span>
            <br />
            I am a Software Developer with a passion for creating innovative digital solutions.
            <br />
            With experience in application development, and system design, I specialize in building user-friendly, scalable systems.
            <br />
            I have completed BSc in Information Technology (BIT) at Taita Taveta University
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
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Transforming ideas into impactful solutions, one line of code at a time."{" "}
          </p>
          <footer className="blockquote-footer">Ronny Ohawa</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}
export default AboutCard;
