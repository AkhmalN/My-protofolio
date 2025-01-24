import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";

import Particle from "../components/Particle";

const resumeLink = `https://drive.google.com/file/d/1FM61ZsqAlXv9L4IkCU5kMJU5hBcbEb_y/view?usp=drive_link`;

const Resume = () => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        <Row className="resume">
          <iframe
            title="Resume"
            src="https://drive.google.com/file/d/1FM61ZsqAlXv9L4IkCU5kMJU5hBcbEb_y/preview"
            width={width > 786 ? "640" : "320"}
            height="480"
            allow="autoplay"
          ></iframe>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={resumeLink}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>
      </Container>
    </div>
  );
};

export default Resume;
