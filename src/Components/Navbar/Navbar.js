import { Link } from "react-router-dom";
import "./Navbar.css";
import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div className="Navbar">
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>Logo</Box>
          <Link to="/">Home</Link>
          <Link to="/about">About Me</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/mycodingjourney">My Coding Journey</Link>
          <Link to="/contact">Contact Me</Link>
          <Flex alignItems={"right"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </div>
  );
}

// import { Link } from "react-router-dom";

// function Navbar() {
//   return (

//     <div className="Navbar">
//       <Link to="/">Home</Link>
//       <Link to="/about">About Me</Link>
//       <Link to="/projects">Projects</Link>
//       <Link to="/mycodingjourney">My Coding Journey</Link>
//       <Link to="/contact">Contact Me</Link>
//     </div>
//   );
// }

// export default Navbar;
