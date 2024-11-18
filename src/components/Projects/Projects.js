import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import Timbu from "../../Assets/Projects/Timbu.jpg";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Timbu}
              isBlog={false}
              title="TimbuCloudShop"
              description="Developed a dynamic e-commerce front-end using React.js, featuring product listing, dynamic routing, and responsive design. Integrated with mock data to simulate interactions like product browsing and cart updates."
              ghLink="https://github.com/ronnyohawa/TimbuCloudShop"
              demoLink="https://timbu-cloud-shop-mocha.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Timetable Gen"
              description="I developed a Timetable Generator using Java and Genetic Algorithms to optimize scheduling by minimizing conflicts and balancing constraints like teacher availability and resource allocation. It showcases my skills in problem-solving and advanced algorithms."
              ghLink="https://github.com/ronnyohawa/TimeTable-With-Java"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="FRAMS"
              description="Developed an attendance management system that uses face recognition by utilizing python, MongoDB and node js.The system used dilb library and dlib models to recognize the student faces then the attendance was stored in MongoDB.Nodejs was used for the attendance management module. To retrieve the attendance data from the database and to present it to the user that has requested the data"
              ghLink="https://github.com/ronnyohawa/Class-attendance-management-system"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Location"
              description="A basic web server that checks the uses IP address, Location and the temperature developed using Flask which is a python web framework"
              ghLink="https://github.com/ronnyohawa/Basic_web_server"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Slack Profile"
              description="A static website that shows my slack name, slack profile image."
              ghLink="https://github.com/ronnyohawa/MyGoalsSite"
              demoLink="https://ronnyohawa.github.io/MyGoalsSite/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
