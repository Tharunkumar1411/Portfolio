import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import pylamp from "../../Assets/Projects/pylamp.png";
import grievence from "../../Assets/Projects/grievence.png";
import todo from "../../Assets/Projects/todo.png";

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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="Todo App"
              description="Effective online todo managing site and integrate with telegram bot. You will notify by telegram bot on a regular basis."
              ghLink="https://github.com/Tharunkumar001/TodoApp"
              demoLink="https://todo-app-tharunkumar.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={grievence}
              isBlog={false}
              title="Grievence System"
              description="Build this site for engaging our Pylamp club members and ways to manage our club data.
              We can make attendance on this site. Admin can create their own forms, members can track their performance in the club. Admin can export their event details."
              ghLink="https://github.com/Tharunkumar001/Greivence-Complaint"
              demoLink="https://grievence-complaints.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
