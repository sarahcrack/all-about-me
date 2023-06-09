import Hero from "../Components/Hero/Hero";
import dictionaryCorner from "../Images/dictionary-corner.png";
import "./Projects.css";
import {
  Card,
  Stack,
  Image,
  CardBody,
  CardFooter,
  Button,
  Heading,
  Text,
  ButtonGroup,
  Divider,
} from "@chakra-ui/react";

function Projects() {
  const heroHeading = (
    <>
      My
      <br />
      Projects
    </>
  );

  return (
    <div className="projects">
      <Hero
        bg="#7A9E9F"
        colour="#FCDDEC"
        heroHeading={heroHeading}
        heroDescription="A few projects I  loved working on 🤩"
      />

      <Card maxW="lg" mt={20}>
        <CardBody>
          <Image
            src={dictionaryCorner}
            alt="Screenshot of Dictionary Corner App"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">Dictionary Corner</Heading>
            <Text className="card-text">
              My little Dictionary App 📖 I was inspired by my husband who has
              recently appeared on the TV show Countdown, and decided to start
              creating a Dictionary App! I wanted to practise creating a React
              app from scratch as well as practise my CSS skills.
            </Text>
            <Text color="#7A9E9F" fontSize="2l">
              React | CSS | APIs | Netlify | GitHub | Figma | JavaScript | React
              Router | Axios
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter style={{ display: "flex", justifyContent: "center" }}>
          <ButtonGroup spacing="2">
            <Button variant="solid" bg="#FCDDEC" className="launch-button">
              <a
                href="https://boisterous-bavarois-dbf7e2.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Launch App
              </a>
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Projects;
