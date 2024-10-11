import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { CiCircleChevDown } from "react-icons/ci";
import { GoArrowUpRight } from "react-icons/go";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import Timeline from "./Layouts/Timeline";
import ContactUs from "./Layouts/Contact";
import Project from "./Layouts/Project";
import Laravel from "./assets/Image/laravel.svg";
import VigneshSaravanan from "./assets/Image/VigneshSaravanan.png";
import Pdf from "./assets/resume/resume.pdf";
import Skills from "./Layouts/Skills";

const Home = () => {
  const scrollDown = () => {
    window.scrollTo(0, 700);
  };
  return (
    <>
      <section className="d-flex flex-column justify-content-center p-lg-3 align-items-center home_section" id="home_section">
        <h1 className="developer_name pb-2 fs-65 text-center">
          Vignesh Saravanan
        </h1>
        <p className="developer_role text-red text-center fs-32">
          <img
            src={Laravel}
            width="50"
            height="50"
            alt="Vignesh Saravanan Laravel Developer"
          />{" "}
          Laravel Developer
        </p>
        <p className="text-grey fs-24 pb-4 text-center">
          <BsInfoCircleFill /> Proficient in{" "}
          <span className="text-white">React.js & Full-Stack Development</span>{" "}
          🌟
        </p>
        <div className="d-flex justify-content-center gap-3">
          <Button className="home_button" href="#contact_form" variant="light">
            Contact Me
          </Button>
          <Button
            href={Pdf}
            className="home_button"
            target="_blank"
            rel="noopener"
            variant="outline-light"
          >
            Download Resume <GoArrowUpRight />
          </Button>
        </div>
        <div className="py-5 md-3" onClick={() => scrollDown()}>
          <CiCircleChevDown className="hand_button d-flex justify-content-center" />
        </div>
      </section>
     
      <section className="about_section mt-5 py-4" id="about">
        <Container>
          <Row>
            <Col lg={12}>
              <h2 className="text-white section_title pb-3 text-center">
                A little bit about me
              </h2>
            </Col>
            <Col lg={6} className="my-auto">
              <p align="justify" className="text-grey pe-lg-5 about_me">
                I'm a Proficiency in <span className="text-white">MySQL, jQuery,</span> and <span className="text-white">Ajax</span>. Proven track
                record in crafting impactful websites with efficient project
                management. Strong client relations ensure successful and
                collaborative development outcomes.
              </p>
            </Col>
            <Col lg={6} className="ps-5 d-none d-lg-block">
              <Image src={VigneshSaravanan} width="400" height="400" fluid alt="Vignesh Saravanan Laravel Developer" className="br-20"/>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="project_section mt-4 py-5 px-3" id="projects">
        <Container>
          <Col>
          <span className="text-white d-flex justify-content-center">WHAT I HAVE DONE</span>
            <h2 className="text-white section_title pb-5 text-center">
              Projects
            </h2>
          </Col>
          <Project />
          {/* <div className="text-center mt-3">
            <Button variant="light">View more</Button>
          </div> */}
        </Container>
      </section>

      <section className="skill_section mt-4 py-5" id="skills">
        <Skills />
      </section>

      <section id="timeline_section mt-4 py-4">
        <Timeline />
      </section>

      <section className="contact_section mt-4 py-5" id="contact">
        <ContactUs />
      </section>
    </>
  );
};

export default Home;
