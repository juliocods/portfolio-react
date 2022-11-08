import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import HubSharpIcon from "@mui/icons-material/HubSharp";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from "react";

function Navbar(props) {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <>
      <Box>
        <AppBar
        className="navBar"
          style={{
            background: "black",
            color: "#00ffff",
            textAlign: "center",
  
          }}
        >
          <Toolbar>
            <Grid container justifyContent="center" alignItems="center">
              <Grid xs={3}>
                <a
                  style={{ color: "#00ffff" }}
                  href="#home"
                  className={activeNav === "#" ? "active" : ""}
                  onClick={() => setActiveNav("#")}
                >
                  <HomeIcon />
                  <Typography variant="subtitle2">
                    Home
                  </Typography>
                </a>
              </Grid>
              <Grid xs={3}>
                <a
                  style={{ color: "#00ffff" }}
                  href="#about"
                  className={activeNav === "#" ? "active" : ""}
                  onClick={() => setActiveNav("#")}
                >
                  <AccountCircleIcon />
                  <Typography variant="subtitle2" >
                    ME
                  </Typography>
                </a>
              </Grid>
              <Grid xs={3}>
                <a
                  style={{ color: "#00ffff" }}
                  href="#skills"
                  className={activeNav === "#" ? "active" : ""}
                  onClick={() => setActiveNav("#")}
                >
                  <AccountTreeIcon />
                  <Typography variant="subtitle2">
                    SKILLS
                  </Typography>
                </a>
              </Grid>
              <Grid xs={3}>
                <a
                  style={{ color: "#00ffff" }}
                  href="#projects"
                  className={activeNav === "#" ? "active" : ""}
                  onClick={() => setActiveNav("#")}
                >
                  <HubSharpIcon />
                  <Typography variant="subtitle2" >
                    PROJECTS
                  </Typography>
                </a>
              </Grid>
    
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Navbar;
