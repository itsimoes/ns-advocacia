import React from "react";
import { Container } from "@mui/material";
import Avatar from "../../assets/avatar.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { AllInclusive } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./style.scss";

const Home = () => {
  return (
    <>
      <div className="wrapper">
        <Container className="home-upper-wrapper">
          <div className="left-content-wrapper">
            <div className="upper-home-text-wrapper">
              <h1 className="slogan">
                Soluções simples para problemas complexos.
              </h1>
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
      <div className="home-middle-wrapper">
        <Container className="sobre-content-wrapper">
          <div className="video-wrapper">            
            <iframe width="560" height="315" src="https://www.youtube.com/embed/7X8II6J-6mU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div className="text-wrapper">
            <h2>Sobre Nós</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, harum! Consequatur doloremque aut praesentium delectus
              illum libero nisi cum iusto explicabo in voluptatibus, repudiandae
              obcaecati pariatur maiores voluptates quis quam.
            </p>
            <Link to="/sobre">
              <p>Saiba mais</p>
              <ArrowForwardIosIcon />
            </Link>
          </div>
        </Container>
      </div>
      <div className="home-bottom-wrapper">
        <Container className="home-bottom-content-wrapper">
          <div>
            <div className="number-box2">
              <div className="number-box">
                <h1>Nós somos quem você precisa</h1>
                <div className="number-box2">
                  <div className="number-card">
                    <h2>
                      01<span>.</span>
                    </h2>
                    <p>lorem ipsum</p>
                    <h3>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </h3>
                  </div>
                  <div className="number-card">
                    <h2>
                      02<span>.</span>
                    </h2>
                    <p>lorem ipsum</p>
                    <h3>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </h3>
                  </div>
                </div>
              </div>
              <div className="text-box">
                <p>Lorem ipsum dolor sit</p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Maxime iste ipsum porro a velit pariatur necessitatibus
                  ratione, odio possimus quam qui deserunt repellat ducimus
                  asperiores quo unde vitae repudiandae corporis. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Quibusdam, ut.
                  Inventore voluptates quae mollitia delectus reprehenderit
                  excepturi voluptatibus atque recusandae nisi doloremque illo
                  suscipit quos, deleniti dolore, et ut nesciunt.
                </p>
              </div>
            </div>
            <div className="number-box3">
              <div className="number-card">
                <h2>
                  03<span>.</span>
                </h2>
                <p>lorem ipsum</p>
                <h3>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </h3>
              </div>
              <div className="number-card">
                <h2>
                  04<span>.</span>
                </h2>
                <p>lorem ipsum</p>
                <h3>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </h3>
              </div>
              <div className="number-card">
                <h2>
                  05<span>.</span>
                </h2>
                <p>lorem ipsum</p>
                <h3>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </h3>
              </div>
              <div className="number-card">
                <h2>
                  06<span>.</span>
                </h2>
                <p>lorem ipsum</p>
                <h3>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </h3>
              </div>
            </div>
          </div>
        </Container>
        <a id="itsimoes" href="https://itsimoes.github.io/portfolio-site/" rel="noreferrer" target="_blank">
          <AllInclusive />
        </a>
      </div>
    </>
  );
};

export default Home;
