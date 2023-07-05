import React from "react";
import { Container } from "@mui/material";
import "./style.scss";
import { BusinessCenter } from "@mui/icons-material";
import Servicos01 from "../../assets/servico-img01.png";
import Servicos02 from "../../assets/servico-img02.png";

const Servicos = () => {
  return (
    <div className="servicos-wrapper">
      <Container>
        <h1>Serviços Oferecidos</h1>
        <hr className="servicos-divider" />

        <div className="servicos-wrapper-content">
          <BusinessCenter className="servicos-icon" />
          <h2>Serviço 01</h2>
          <div>
            <img className="servicos-thumb" src={Servicos01} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              consequatur optio illo repellat sint autem animi nisi a accusamus
              exercitationem, reiciendis qui pariatur saepe dolores ut
              praesentium eius quae provident.
            </p>
          </div>
        </div>
        <hr className="servicos-divider" />

        <div className="servicos-wrapper-content">
          <BusinessCenter className="servicos-icon" />
          <h2>Serviço 02</h2>
          <div>
            <img className="servicos-thumb" src={Servicos02} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              consequatur optio illo repellat sint autem animi nisi a accusamus
              exercitationem, reiciendis qui pariatur saepe dolores ut
              praesentium eius quae provident.
            </p>
          </div>
        </div>

        <hr className="servicos-divider" />
      </Container>
    </div>
  );
};

export default Servicos;
