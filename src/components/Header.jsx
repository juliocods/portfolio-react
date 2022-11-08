import React from "react";

import { motion } from "framer-motion";
import { Box, Grid } from "@mui/material";
const Header = () => {
  return (
    <>
      <motion.div
        style={{ width: "100%", height: "100%" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <Box id="home">
          <div class="overlay">
            <h1>
              <small className="logo">I´m Julio</small>
              <small className="subLogo">Web Developer</small>
            </h1>
            <Grid container justifyContent="center" alignItems="center">
              <div class="Iam" name="#skils">
                <b>
                  <div class="innerIam">
                    Front-end
                    <br />
                    Back-end
                    <br />
                    FullStack
                    <br />
                  </div>
                </b>
              </div>
            </Grid>
          </div>
        </Box>
      </motion.div>
    </>
  );
};

export default Header;
