import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import "./Hero.css";
import AppButton from "../Buttons/AppButton";

function Hero({ bg, colour, heroHeading, heroDescription }) {
  return (
    <Flex>
      <Box bg={bg} flex="1" height="50vh">
        <h1 className="heroHeading">{heroHeading}</h1>
        <h2 className="heroDescription">{heroDescription}</h2>
        <AppButton bg={colour} btnText="Learn More" scrollDown={true} />
      </Box>
    </Flex>
  );
}

export default Hero;
