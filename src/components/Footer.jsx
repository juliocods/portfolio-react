import { Box, Button, Grid, Link, Typography } from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  return (
    <footer id="footer">
      <a href="#" className="footer__logo">
        <Typography variant="h2">Julio Ramírez</Typography>
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
      </ul>
      <ul className="permalinks">
        <li>
          <a href="mailto:ramirezjulio.0789@gmail.com?" target="_blank">
            ramirezjulio.0789@gmail.com
          </a>
        </li>
        <li>
          <a href="https://walink.co/4144e1"  target="_blank">+5491162803497</a>
        </li>
      </ul>

      <div className="footer__copyright">
        <small>&copy; Julio Ramírez. All Rights Reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
