import React from "react";
import "./style.scss";
import { Container } from "@mui/system";
import Avatar from "../../assets/avatar.png";
import Logo from "../../assets/logo2.png";
import {
  AddLocationRounded,
  BusinessCenter,
  TrendingUpRounded,
} from "@mui/icons-material";

const Sobre = () => {
  return (
    <div className="sobre-wrapper">
      <Container>
        <div className="sobre-wrapper-content">
          <h1>Sobre nós</h1>
          <hr className="divider" />
          <div className="presentation-text">
            <img src={Logo} className="profile-logo" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam tenetur cupiditate officia quasi laudantium asperiores
              eaque nulla hic ex ullam placeat, reprehenderit molestias, veniam
              optio minus qui, nesciunt error? Iusto. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quisquam, in. Delectus assumenda
              blanditiis cupiditate in ullam debitis perspiciatis unde sunt
              pariatur, aut nisi culpa sapiente nostrum, ipsum facilis aperiam
              odio!
            </p>
          </div>
          <p className="divider-2">✤✤✤</p>
          <h2>Nossos Colaboradores</h2>
          <div className="profile-box">
            <img className="avatar-img-profile" src={Avatar} alt="" />
            <div id="profile-card">
              <h2>Jane Doe</h2>
              <hr className="divider" />
              <h3>Advogada</h3>
              <p>Áreas de atuação: Lorem ipsum</p>
              <p>Formação: Lorem ipsum dolor sit amet</p>
              <p>Outras especializações: Lorem ipsum dolor sit amet</p>
              <p>
                Sobre mim: Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Laboriosam tenetur cupiditate officia quasi laudantium
                asperiores eaque nulla hic ex ullam placeat, reprehenderit
                molestias
              </p>
            </div>
          </div>

          <div className="sobre-historia-box">
            <p className="divider-2">✤✤✤</p>
            <h2>Nossa História</h2>
            <hr className="divider" />
            <div className="sobre-historia-content">
              <BusinessCenter className="sobre-historia-icon" />
              <h3>Abertura</h3>
              <span>2016</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam tenetur cupiditate officia quasi laudantium
                asperiores eaque nulla hic ex ullam placeat, reprehenderit
                molestias, veniam optio minus qui, nesciunt error? Iusto. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Quisquam, in.
                Delectus assumenda blanditiis cupiditate in ullam debitis
                perspiciatis unde sunt pariatur, aut nisi culpa sapiente
                nostrum, ipsum facilis aperiam odio!
              </p>
            </div>
            <hr className="mini-divider" />
            <div className="sobre-historia-content">
              <TrendingUpRounded className="sobre-historia-icon" />
              <h3>Crescimento</h3>
              <span>2017</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam tenetur cupiditate officia quasi laudantium
                asperiores eaque nulla hic ex ullam placeat, reprehenderit
                molestias, veniam optio minus qui, nesciunt error? Iusto. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Quisquam, in.
                Delectus assumenda blanditiis cupiditate in ullam debitis
                perspiciatis unde sunt pariatur, aut nisi culpa sapiente
                nostrum, ipsum facilis aperiam odio!
              </p>
            </div>
            <hr className="mini-divider" />
            <div className="sobre-historia-content">
              <AddLocationRounded className="sobre-historia-icon" />
              <h3>Atuação em todo o estado</h3>
              <span>2018</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam tenetur cupiditate officia quasi laudantium
                asperiores eaque nulla hic ex ullam placeat, reprehenderit
                molestias, veniam optio minus qui, nesciunt error? Iusto. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Quisquam, in.
                Delectus assumenda blanditiis cupiditate in ullam debitis
                perspiciatis unde sunt pariatur, aut nisi culpa sapiente
                nostrum, ipsum facilis aperiam odio!
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Sobre;
