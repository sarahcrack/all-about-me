//
import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { ArrowUpIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";

function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
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
        <Flex alignItems="center">
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
            <a
              href="https://www.linkedin.com/in/sarahcrack/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{ color: "#FE5F55" }}
                className="linkedInIcon"
              />
            </a>
            <a
              href="https://github.com/sarahcrack"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithubSquare}
                style={{ color: "#FE5F55" }}
                className="githubIcon"
              />
            </a>
          </Box>
          <Button
            className="arrowUpButton"
            sx={{
              bottom: "20px",
              right: "20px",
              mt: "20px",
              width: "50px",
              height: "45px",
              backgroundColor: "#FE5F55",
              border: "none",
              outline: "none",
              cursor: "pointer",
              transition: "all 0.3s ease-in-out",
            }}
            onClick={handleScrollToTop}
          >
            <ArrowUpIcon />
          </Button>
        </Flex>
      </Box>
    </div>
  );
}

export default Footer;
