import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  Spacer,
} from "@chakra-ui/react";
import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import Logo from "../Logo/Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();

  const handleDrawerToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="Navbar">
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <Box>
            {" "}
            <Logo />
          </Box>
          <Flex alignItems="center">
            <Spacer />
            <Flex alignItems="center">
              <Stack direction="row" spacing={4}>
                <Link to="/about-me">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/mycodingjourney">My Coding Journey</Link>
                <Link to="/contact">Contact Me</Link>
              </Stack>
            </Flex>
          </Flex>
          <Flex alignItems="center">
            <Stack direction="row" spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
              <IconButton
                aria-label="Toggle menu"
                icon={<HamburgerIcon />}
                onClick={handleDrawerToggle}
                display={{ base: "flex", md: "none" }}
              />
            </Stack>
          </Flex>
        </Flex>
      </Box>
      <Drawer isOpen={isOpen} placement="right" onClose={handleDrawerToggle}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <Stack spacing={4}>
                <Link to="/">Home</Link>
                <Link to="/about">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/mycodingjourney">My Coding Journey</Link>
                <Link to="/contact">Contact Me</Link>
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </div>
  );
}

// import { Link } from "react-router-dom";
// import "./Navbar.css";
// import {
//   Box,
//   Flex,
//   Button,
//   useColorModeValue,
//   Stack,
//   useColorMode,
// } from "@chakra-ui/react";
// import { MoonIcon, SunIcon } from "@chakra-ui/icons";

// export default function Navbar() {
//   const { colorMode, toggleColorMode } = useColorMode();

//   return (
//     <div className="Navbar">
//       <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
//         <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
//           <Box>Logo</Box>
//           <Link to="/">Home</Link>
//           <Link to="/about">About Me</Link>
//           <Link to="/projects">Projects</Link>
//           <Link to="/mycodingjourney">My Coding Journey</Link>
//           <Link to="/contact">Contact Me</Link>
//           <Flex alignItems={"right"}>
//             <Stack direction={"row"} spacing={7}>
//               <Button onClick={toggleColorMode}>
//                 {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
//               </Button>
//             </Stack>
//           </Flex>
//         </Flex>
//       </Box>
//     </div>
//   );
// }

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
