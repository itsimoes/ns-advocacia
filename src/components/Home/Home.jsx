import { Container, Link } from "@mui/material";
import React from "react";
import "./style.scss";
import Avatar from "../../assets/avatar.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import VideoIcon from "../../assets/video-icon.png";

const Home = () => {
  return (
    <>
    <div className="wrapper">
      <Container className="home-wrapper">
        <div className="left-content-wrapper">
          <div className="upper-home-text-wrapper">
            <h1 className="slogan">Soluções simples para problemas complexos.</h1>
            <div id="home-link-desktop" className="home-link">
              <Link to="/">
                <p>Entre em contato conosco</p>
                <ArrowForwardIosIcon />
              </Link>{" "}
            </div>            
          </div>
          <div className="home-card-wrapper">
            <div>
              <h2>87%</h2>
              <p>lorem ipsum</p>
            </div>
            <div>
              <h2>21%</h2>
              <p>lorem ipsum</p>
            </div>
            <div>
              <h2>45%</h2>
              <p>lorem ipsum</p>
            </div>
            <div>
              <h2>74%</h2>
              <p>lorem ipsum</p>
            </div>
          </div>
        </div>
        <img className="avatar-img" src={Avatar} alt="" />
      </Container>    
    </div>
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
    </>
    
  );
};

export default Home;
