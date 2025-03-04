import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import pylamp from "../../Assets/Projects/pylamp.png";
import streamX from "../../Assets/Projects/streamX.png";
import kicks from "../../Assets/Projects/kicks.png";

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
              imgPath={kicks}
              isBlog={false}
              title="Kicks (E-commerce)"
              description="The project is built using a modular approach, ensuring scalability and independent
              deployments. Includes product listings, authentication (Google & username), cart management, and
              checkout."
              ghLink="https://github.com/Tharunkumar1411/kicks"
              demoLink="https://kick-app.vercel.app/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={streamX}
              isBlog={false}
              title="StreamX"
              description="I developed a UI layout with an integrated video player, boosting completion rates by 50%. I also built a proprietary video streaming platform and introduced a personalized playlist feature, enhancing user experience and engagement."
              ghLink="https://github.com/Tharunkumar1411/StreamX"
              demoLink="https://stream-x-beryl.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pylamp}
              isBlog={false}
              title="Site Pylamp"
              description="I build this site for engaging our Pylamp club members and ways to manage our club data.
              We can make attendance on this site. Admin can create their own forms, members can track their performance in the club. 
              Admin can export their event details."
              ghLink="https://github.com/Tharunkumar001/pylampOfficial"
              demoLink="https://pylamp-official.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
