import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <Flex>
        <Box
          bg="#F5D5ED"
          flex="1"
          height="10vh"
          display="flex"
          alignItems="flex-end"
        >
          <Flex justifyContent="space-between" alignItems="center" width="100%">
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
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </div>
  );
}

export default Footer;
