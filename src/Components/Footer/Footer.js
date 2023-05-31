import React from "react";
import { Box } from "@chakra-ui/react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="Footer">
      <Box
        bg="#F5D5ED"
        height="10vh"
        display="flex"
        alignItems="flex-end"
        justifyContent="space-between"
        width="100%"
      >
        <Box className="myName" marginLeft={30} mb={5}>
          © 2023 Sarah Crack
        </Box>
        <Box className="myLinks" marginRight={70} mb={5}>
          This project was coded in React by{" "}
          <a
            href="https://www.linkedin.com/in/sarahcrack/"
            target="_blank"
            rel="noreferrer"
          >
            Sarah Crack{" "}
          </a>
          and is{" "}
          <a
            href="https://github.com/sarahcrack"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced
          </a>
        </Box>
        <Box>
          <a
            href="https://www.linkedin.com/in/sarahcrack/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} style={{ color: "#172a3a" }} />
          </a>
        </Box>
      </Box>
    </div>
  );
}

export default Footer;
