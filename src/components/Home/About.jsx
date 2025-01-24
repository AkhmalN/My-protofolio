import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const About = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="yellow"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi, I'm <span className="yellow">Akhmal Novanda Aziz</span>, and
              I'm from <span className="yellow">Depok, Indonesia</span>.
              <br />
              <br />
              I graduated with a Bachelor's degree in Computer Science and
              Engineering in 2024.
              <br />
              <br />
              I have a strong interest in software development, especially when
              it comes to solving real-world problems through code. I enjoy
              learning new technologies and constantly improving my skills.
              <br />
              <br />
              I'm particularly comfortable working with technologies like
              <b className="yellow"> Node.js, MongoDB, MySQL</b>, and modern
              JavaScript frameworks like
              <i>
                <b className="yellow">
                  {" "}
                  React.js, React Native, Vue, and Next.js
                </b>
              </i>
              .
              <br />
              <br />
              I'm also excited about exploring new web technologies and
              products, and I enjoy collaborating on projects that push the
              boundaries of what's possible on the web.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={LaptopImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Please don't hesitate to reach out to me and{" "}
              <span className="yellow">connect.</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/AkhmalN"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/akhmal-novanda-451467238/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default About;
