import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import "./GetInTouch.css";
import AppButton from "../Buttons/AppButton";
import { Link } from "react-router-dom";

function GetInTouch() {
  return (
    <Flex>
      <Box bg="#B8D7F1" flex="1" height="30vh">
        <h1 className="hear-from-you hear-from-you-responsive">I would love to hear from you!</h1>
        <Link to="/contact">
          <AppButton bg="#7A9E9F" btnText="Get In Touch" />
        </Link>
      </Box>
    </Flex>
  );
}

export default GetInTouch;
