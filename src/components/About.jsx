import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ME from "../assets/me.jpg";

const About = () => {
  return (
    <>
      <section id="about" style={{ paddingTop: "80px" }}>
        <div data-aos="zoom-in-down">
          <Typography className="title aboutResp" variant="h1">
            About Me
          </Typography>

          <Grid
            container
            sx={{ mt: 10, mb: 20 }}
            justifyContent="center"
            alignItems="center"
          >
            <Grid xs={12} sm={6}>
              <div className="container about__container">
                <div className="about__me">
                  <Box className="about__me-image">
                    <img src={ME} alt="Matias" />
                  </Box>
                </div>
              </div>
            </Grid>
            <Grid xs={12} sm={6}>
              <Typography
                variant="h6"
                className="subtitle subtitleAbout "
                sx={{ pr: 9 }}
                textAlign="center"
              >
                Comencé estudiando Ingeniería en computación donde tuve el
                primer encuentro con un lenguaje de programación (C++), para
                reforzar y en paralelo estuve cursando "La universidad de Java"
                un curso de udemy intensivo de Java EE, luego un un Coding
                Bootcamp de Plataforma 5 el cual me pareció perfecto, un
                intensivo de mas de 800 hs de capacitación donde puedo
                convertirme en programador Full Stack y ademas resaltar el
                desarrollo de proyectos en grupo con Scrum, mi compromiso está
                en la disposición a aprender, y a mantener una buena
                comunicación y relación con mis compañeros
              </Typography>
            </Grid>
          </Grid>
        </div>
      </section>
    </>
  );
};

export default About;
