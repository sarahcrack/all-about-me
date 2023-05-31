// import React from "react";
// import "./ColouredBoxes.css";
// import { Flex, Box } from "@chakra-ui/react";

// function ColouredBoxes({
//   bgLeft,
//   bgRight,
//   headingLeft,
//   headingRight,
//   leftImage,
//   rightImage,
// }) {
//   return (
//     <Flex>
//       <Box bg={bgLeft} flex="1" height="50vh">
//         {leftImage && <img src={leftImage} alt="Left Box" />}
//         <div className="headingLeft">{headingLeft}</div>
//       </Box>
//       <Box bg={bgRight} flex="1" height="50vh">
//         {rightImage && <img src={rightImage} alt="Right Box" />}
//         <div className="headingRight">{headingRight}</div>
//       </Box>
//     </Flex>
//   );
// }

// export default ColouredBoxes;

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
        {leftImage && <img src={leftImage} alt="Left Box" />}
        <div className="headingLeft">{headingLeft}</div>
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
        {rightImage && <img src={rightImage} alt="Right Box" />}
        <div className="headingRight">{headingRight}</div>
      </Box>
    </Flex>
  );
}

export default ColouredBoxes;
