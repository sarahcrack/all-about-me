import React from "react";
import "./ColouredBoxes.css";
import { Flex, Box } from "@chakra-ui/react";

function ColouredBoxes({
  bgLeft,
  bgRight,
  headingLeft,
  headingRight,
  leftImage,
  rightImage,
}) {
  return (
    <Flex>
      <Box
        bg={bgLeft}
        flex="1"
        height="50vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        {leftImage && (
          <img src={leftImage} alt="Left Box" className="leftImage" />
        )}
        <div className="headingLeft heading-responsive">{headingLeft}</div>
      </Box>
      <Box
        bg={bgRight}
        flex="1"
        height="50vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        {rightImage && (
          <img src={rightImage} alt="Right Box" className="rightImage" />
        )}
        <div className="headingRight heading-responsive">{headingRight}</div>
      </Box>
    </Flex>
  );
}

export default ColouredBoxes;
