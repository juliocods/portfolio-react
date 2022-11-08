import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import { useState } from "react";
import { Button, Grid, Link, Typography } from "@mui/material";

const SocialNav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <>
      <nav>
        <Grid container sx={{ pl: 7 }}>
          <Grid xs={2}>
            <Link
              href="https://walink.co/4144e1"
              color="inherit"
              target={"_blank"}
            >
              <Button variant="text" sx={{ color: "#00ffff" }}>
                <WhatsAppIcon fontSize="large" />{" "}
              </Button>
            </Link>
          </Grid>
          <Grid xs={2}>
            <Link
              href="https://www.instagram.com/juliocods/"
              color="inherit"
              target={"_blank"}
            >
              <Button variant="text" sx={{ color: "#00ffff" }}>
                <InstagramIcon fontSize="large" />{" "}
              </Button>
            </Link>
          </Grid>
          <Grid xs={2}>
            <Link
              href="https://www.linkedin.com/in/juliocodes/"
              color="inherit"
              target={"_blank"}
            >
              <Button variant="text" sx={{ color: "#00ffff" }}>
                <LinkedInIcon
                  fontSize="large"
                  style={{
                    color: "#00ffff",
                  }}
                />
              </Button>
            </Link>
          </Grid>
          <Grid xs={2}>
            <Link
              href="https://github.com/juliocods"
              color="inherit"
              target={"_blank"}
            >
              <Button variant="text" sx={{ color: "#00ffff" }}>
                <GitHubIcon
                  fontSize="large"
                  style={{
                    color: "#00ffff",
                  }}
                />
              </Button>
            </Link>
          </Grid>
          <Grid xs={2}>
            <Link
              href="https://drive.google.com/file/d/1YqXJmlNBDRiUyG1neo5eAq8PkrduBtdq/view"
              color="inherit"
              target={"_blank"}
              style={{ textDecoration: "none" }}
            >
              <Button variant="text" sx={{ color: "#00ffff" }}>
                <Typography variant="h4">cv</Typography>
              </Button>
            </Link>
          </Grid>
        </Grid>
      </nav>
    </>
  );
};

export default SocialNav;
