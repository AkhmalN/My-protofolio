import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import imgAbsensiSeaqil from "../assets/projects/absensi_seaqil.png";
import imgSmartpatrol from "../assets/projects/smartpatrol_admin.png";
import imgSastrasvara from "../assets/projects/sastrasvara.png";
import imgSmartpatrol2 from "../assets/projects/mobile_smartpatrol.png";
import imgHrs from "../assets/projects/mobile_hrs.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imgAbsensiSeaqil}
              isBlog={false}
              title="Absensi Seaqil"
              description="Aplikasi website absensi mahasiswa magang di SEAMEO QITEP in Language adalah solusi digital yang dirancang untuk memudahkan pengelolaan kehadiran mahasiswa magang di lembaga ini. Aplikasi ini menawarkan berbagai fitur yang memungkinkan mahasiswa magang untuk mencatat kehadiran mereka secara mandiri, sementara pihak pengelola dapat memantau dan mengelola data kehadiran dengan lebih efisien."
              ghLink="https://github.com/19sajib/lift-buddy"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imgSmartpatrol}
              isBlog={false}
              title="Admin dashboard smart patrol"
              description="Aplikasi manajemen patroli di Universitas Nasional adalah solusi digital yang dirancang untuk meningkatkan efisiensi dan efektivitas pengelolaan kegiatan patroli keamanan di lingkungan kampus. Aplikasi ini memungkinkan petugas keamanan untuk melaksanakan tugas patroli dengan lebih terstruktur dan memungkinkan pihak pengelola untuk memantau kegiatan patroli secara real-time."
              ghLink="https://github.com/19sajib/social-media"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imgSmartpatrol2}
              isBlog={false}
              title="Mobile App smartpatrol"
              description="Aplikasi manajemen patroli di Universitas Nasional adalah solusi digital berbasis web dan mobile yang dirancang untuk meningkatkan efisiensi dan efektivitas pengelolaan kegiatan patroli keamanan di lingkungan kampus. Dengan aplikasi ini, petugas keamanan dapat menjalankan tugas patroli mereka dengan lebih terstruktur, sementara pihak pengelola dapat memantau kegiatan patroli secara real-time dari perangkat apa saja."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imgSastrasvara}
              isBlog={false}
              title="Sastrasavara"
              description="Sastrasvara adalah sebuah platform digital yang didedikasikan untuk memperkenalkan dan mempromosikan budaya Indonesia, khususnya budaya yang berasal dari kota Malang. Melalui kombinasi cerita dan backsound yang khas, Sastrasvara membawa pengunjung dalam perjalanan yang mendalam ke dalam kekayaan warisan budaya Indonesia."
              ghLink="https://github.com/19sajib/mern-blog-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imgHrs}
              isBlog={false}
              title="Mobile App HRS"
              description="HRS Mobile adalah aplikasi inovatif yang dirancang untuk membantu perusahaan dalam mengelola dan memanajemen berbagai aspek operasional, khususnya dalam pengaturan produk yang disaleskan serta kebutuhan administrasi seperti absensi, cuti, dan kasbon. Dengan antarmuka yang user-friendly dan fitur-fitur lengkap, HRS Mobile memberikan solusi efisien untuk meningkatkan produktivitas dan keteraturan dalam operasional sehari-hari."
              demoLink="https://project-krypto.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
