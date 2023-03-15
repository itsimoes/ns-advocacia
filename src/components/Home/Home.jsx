import { Button, Container, Link } from "@mui/material";
import React from "react";
import "./style.scss";
import Avatar from "../../assets/avatar.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Home = () => {
  return (
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
            <Button id="home-link-mobile"
              variant="contained"
              sx={{
                bgcolor: "goldenrod", 
                color: "black",             
                ":hover": { bgcolor: "lightgrey"},
                paddingTop: "10px",
                paddingBottom: "10px",
                fontWeight: "600"
              }}
            >
              Entre em contato conosco
            </Button>
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
  );
};

export default Home;
