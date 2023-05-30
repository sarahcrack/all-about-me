import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import "./Hero.css";

function Homepage({ heroHeading, heroDescription }) {
  return (
    <Flex>
      <Box bg="#B8D7F1" flex="1" height="50vh">
        <h1 className="heroHeading">{heroHeading}</h1>
        <h2 className="heroDescription">{heroDescription}</h2>
      </Box>
    </Flex>
  );
}

export default Homepage;
