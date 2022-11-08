import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import AOS from "aos";
const Skills = () => {
  return (
    <>
      <section id="skills">
        <div data-aos="zoom-in-down">
          <Grid container justifyContent="center" alignItems="center">
            <Grid xs={8} sx={{ pr: 9 }}>
              <div class="aboutme">
                <h1 class="title">Skills</h1>
                <h4 class="academy">Plataforma 5</h4>
                <p class="subtitle">
                  Bootcamp Javascript 800 hs de entrenamiento, node js,
                  postgresql, react, mongo db INTENSIVO JUL 2022/ SEP 2022
                </p>
                <br />
                <br />
                <h4 class="academy">Udemy</h4>
                <p class="subtitle">
                  Universidad de Java Java intermedio, JPA, JSF, EJBS ENE 2021/
                  SEPT 2021
                </p>
                <br />
                <br />
                <h4 class="academy">Universidad Fermín Toro</h4>
                <p class="subtitle">
                  Ingeniería en computación 2007 / 2011 7o Semestre aprobado
                </p>
              </div>
            </Grid>
            <Grid xs={4} sx={{ pr: 6, pt: 30 }}>
              <Box>
                <p>Node</p>
                <div className="container">
                  <div className="skills css"></div>
                </div>

                <p>React</p>
                <div className="container">
                  <div className="skills js"></div>
                </div>

                <p>MongoDb</p>
                <div className="container">
                  <div className="skills css"></div>
                </div>

                <p>Postgress</p>
                <div className="container">
                  <div className="skills html"></div>
                </div>
                <p>Express</p>
                <div className="container">
                  <div className="skills php"></div>
                </div>
                <p>Java EE</p>
                <div className="container">
                  <div className="skills css"></div>
                </div>
                <p>MySql</p>
                <div className="container">
                  <div className="skills js"></div>
                </div>
              </Box>
            </Grid>
          </Grid>
        </div>
      </section>
    </>
  );
};

export default Skills;
