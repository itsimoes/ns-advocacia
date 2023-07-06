import React from "react";
import "./style.scss";
import { Container, TextField } from "@mui/material";

import { useState } from "react";
import { ValidationError, useForm } from "@formspree/react";
import { inputLabelClasses } from "@mui/material/InputLabel";

//social media icons
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";

const Contato = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [state, handleSubmit] = useForm("ss");

  if (state.submitting && state.succeeded) {
    console.log("enviado!");
    console.log("submitting " + state.submitting);
    console.log("suceeded " + state.succeeded);
    document.getElementById("form-content").style.display = "none";
    document.getElementById("thanks").style.display = "flex";
  }

  return (
    <div className="contato-wrapper">
      <Container>
        <h1>Contato</h1>
        <hr className="contato-divider" />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla vero
          eum facilis iure ducimus natus, incidunt quo nobis delectus nemo
          placeat quisquam ullam eaque repellendus earum provident quia
          laboriosam sit.
        </p>
        <hr className="contato-divider" />
        <Container className="form-container">
          <form
            id="contact-form"
            className="form"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div id="form-content">
              <p className="contact-p">
                Entre em contato preenchendo o formulário a seguir ou através
                das nossas redes sociais. .
              </p>

              <TextField
                required //mudar o método de requerimento por uma função
                name="nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="textField"
                label="Digite seu nome"
                variant="outlined"
                sx={{ bgcolor: "#222", borderRadius: "5px" }}
                InputProps={{
                  sx: {
                    color: "aliceblue",
                    "&:hover fieldset": {
                      border: "2px solid aliceblue !important",
                      borderRadius: "5px",
                    },
                    "&:focus-within fieldset, &:focus-visible fieldset": {
                      border: "2px solid aliceblue !important",
                    },
                  },
                }}
                InputLabelProps={{
                  sx: {
                    // set the color of the label when not shrinked
                    color: "gray",
                    [`&.${inputLabelClasses.shrink}`]: {
                      // set the color of the label when shrinked (usually when the TextField is focused)
                      color: "aliceblue",
                    },
                  },
                }}
              />
              <TextField
                required //mudar o método de requerimento por uma função
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="textField"
                label="Digite seu email"
                variant="outlined"
                sx={{ bgcolor: "#222", borderRadius: "5px" }}
                InputProps={{
                  sx: {
                    color: "aliceblue",
                    "&:hover fieldset": {
                      border: "2px solid aliceblue !important",
                      borderRadius: "5px",
                    },
                    "&:focus-within fieldset, &:focus-visible fieldset": {
                      border: "2px solid aliceblue !important",
                    },
                  },
                }}
                InputLabelProps={{
                  sx: {
                    // set the color of the label when not shrinked
                    color: "gray",
                    [`&.${inputLabelClasses.shrink}`]: {
                      // set the color of the label when shrinked (usually when the TextField is focused)
                      color: "aliceblue",
                    },
                  },
                }}
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <TextField
                required //mudar o método de requerimento por uma função
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                multiline
                className="textField"
                label="Digite sua mensagem"
                variant="outlined"
                sx={{ bgcolor: "#222", borderRadius: "5px" }}
                InputProps={{
                  sx: {
                    color: "aliceblue",
                    "&:hover fieldset": {
                      border: "2px solid aliceblue !important",
                      borderRadius: "5px",
                    },
                    "&:focus-within fieldset, &:focus-visible fieldset": {
                      border: "2px solid aliceblue !important",
                    },
                  },
                }}
                InputLabelProps={{
                  sx: {
                    // set the color of the label when not shrinked
                    color: "gray",
                    [`&.${inputLabelClasses.shrink}`]: {
                      // set the color of the label when shrinked (usually when the TextField is focused)
                      color: "aliceblue",
                    },
                  },
                }}
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <button
                id="contact-button"
                className="contact-button"
                type="submit"
                form="contact-form"
                value="Enviar"
                disabled={state.submitting}
              >
                Entre em contato
              </button>
            </div>
            <div id="thanks">
              <p>Muito Obrigado!</p>
              <p>Entrarei em contato em breve!</p>
              {/* <button className="contact-button" onClick={backToForm}>Voltar</button> */}
            </div>
            <h2>Nossas redes sociais</h2>
            <div className="socialmedia-wrapper">
              <a
                href="https://linkedin.com/in/itsimoes"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon className="socialmedia-icon" />
              </a>
              <a
                href="https://github.com/itsimoes"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon className="socialmedia-icon" />
              </a>
              <a
                href="https://twitter.com/d_rtypaw"
                target="_blank"
                rel="noreferrer"
              >
                <TwitterIcon className="socialmedia-icon" />
              </a>
            </div>
          </form>
        </Container>
      </Container>
    </div>
  );
};

export default Contato;
