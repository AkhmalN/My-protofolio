import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiNodejs, DiGit } from "react-icons/di";
import {
  SiMaterialui,
  SiRedux,
  SiMongodb,
  SiHtml5,
  SiFigma,
} from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { FaCss3 } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { TiVendorMicrosoft } from "react-icons/ti";

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandReactNative />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMaterialui />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaFigma />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TiVendorMicrosoft />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
    </Row>
  );
};

export default Techstack;
