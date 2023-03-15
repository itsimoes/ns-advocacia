import { Container, Link } from "@mui/material";
import React from "react";
import "./style.scss";
import VideoIcon from "../../assets/video-icon.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Sobre = () => {
  return (
    <div className="sobre-wrapper">
      <Container className="sobre-content-wrapper">
        <div className="video-wrapper">
          <img src={VideoIcon} alt="" />
        </div>
        <div className="text-wrapper">
          <h2>Sobre Nós</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            harum! Consequatur doloremque aut praesentium delectus illum libero
            nisi cum iusto explicabo in voluptatibus, repudiandae obcaecati
            pariatur maiores voluptates quis quam.
          </p>
          <Link><p>Saiba mais</p><ArrowForwardIosIcon /></Link>
        </div>
      </Container>
    </div>
  );
};

export default Sobre;
