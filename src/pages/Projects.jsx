import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import bewakoof from "../assets/projects/bewakoof.png";
import doctors from "../assets/projects/doctors.png";
import speech from "../assets/projects/speech.png";
import ipl from "../assets/projects/ipl.png";
import invoice from "../assets/projects/Invoice.png";
import residencia from "../assets/projects/Residencia.png";
import tic from "../assets/projects/tic.png"

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bewakoof}
              isBlog={false}
              title="Bewakoof"
              description="Developed a clone of the Bewakoof website using HTML, CSS, JavaScript, and ReactJS would involve a significant amount of work, as it would require designing the user interface, implementing the frontend logic, and potentially integrating with a backend for features like user accounts, shopping carts, and payments. Bewakoof  is an online fashion and lifestyle brand that specializes in casual wear and accessories. It is known for its quirky and trendy designs, and it primarily targets the youth and millennials."
              ghLink="https://github.com/Nainsi27/bewakoof"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ipl}
              isBlog={false}
              title="Ipl Project"
              description="Ipl Project Clone is built entirely on the MERN Stack framework.From this website, individuals can log in and signup with authentication. Moreover, they have the option to pose questions, comment on inquiries, vote positively or negatively, share content, and delete questions and answers.Extra features such as Chatbot and One-Time Password Authentication have been included in the Ask Question section."
              ghLink="https://github.com/Nainsi27/Ipl-project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={residencia}
              isBlog={false}
              title="Residencia (Hotel Room Booking Using Blockchain)"
              description="Residencia Application is a decentralized program that applies Blockchain technology to provide guaranteed secure, private hotel reservations.Residencia Software facilitates a direct channel between businesses and travelers, making it possible to transact in real time without having to pay fees to any middleman.The purpose of Residencia (Hotel Room Booking Using Blockchain) is to do away with the additional expenses charged by a third party and promote direct dialogue between hotel vendors and buyers."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={doctors}
              isBlog={false}
              title="Doctors Appointment"
              description="Buit a dental doctor's website using HTML, CSS, JavaScript, and React.js involves designing a professional and informative online platform to showcase the dental services, promote the doctor's practice, and facilitate patient interaction. It typically consist of multiple pages, including a homepage, about the doctor, services, appointment booking, patient testimonials, contact information, and possibly a blog section."
              ghLink="https://github.com/Nainsi27/Doctors-appointment"
              demoLink="https://64fc79bcea09c46c2e237a87--jocular-cat-9e6a6a.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tic}
              isBlog={false}
              title="TicTacToe"
              description="Create a Tic-Tac-Toe game website using React.js, HTML, CSS, and JavaScript. The website features a 3x3 game board with interactive squares for X and O, a status display indicating the current player's turn or the game result, and a reset button to start a new game. Implement game logic to check for wins and draws."
              ghLink="https://github.com/Nainsi27/tictactoe"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={invoice}
              isBlog={false}
              title="Invoice Tax"
              description="Creating an invoice website using HTML, CSS, JavaScript, and React.js allows to build a platform for generating and managing invoices."
              ghLink="https://github.com/Nainsi27/Invoice-tax"
              demoLink="https://651ad7b5679e0e2cb75fe14c--quiet-selkie-8f6f5b.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects