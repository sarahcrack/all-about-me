import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import "./Hero.css";
import AppButton from "../Buttons/AppButton";

function Hero({ heroHeading, heroDescription }) {
  return (
    <Flex>
      <Box bg="#B8D7F1" flex="1" height="50vh">
        <h1 className="heroHeading">{heroHeading}</h1>
        <h2 className="heroDescription">{heroDescription}</h2>
        <AppButton bg="#7A9E9F" btnText="Learn More" scrollDown={true} />
      </Box>
    </Flex>
  );
}

export default Hero;
