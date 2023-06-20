import Hero from "../Components/Hero/Hero";
import dictionaryCorner from "../Images/dictionary-corner.png";
import wickedWeatherApp from "../Images/wicked-weather-app.png";
import reactWeatherApp from "../Images/react-weather-app.png";
import tributePage from "../Images/tribute-page.png";
import photographyProject from "../Images/photography-project.png";
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
      <div className="cards-container">
        <Card maxW="xs" m={10}>
          <CardBody>
            <Image
              src={dictionaryCorner}
              alt="Screenshot of Dictionary Corner App"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="sm">Dictionary Corner 📖 </Heading>
              <Text className="card-text">
                I was inspired by my husband who has recently appeared on the TV
                show Countdown, and decided to start creating a Dictionary App!
                I wanted to practise creating a React app from scratch as well
                as practise my CSS skills.
              </Text>
              <Text className="tech-stack" color="#7A9E9F" fontSize="2l">
                React | CSS | APIs | Netlify | GitHub | Figma | JavaScript |
                React Router | Axios
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
        <Card maxW="sm" m={10}>
          <CardBody>
            <Image
              src={wickedWeatherApp}
              alt="Screenshot of Wicked Weather App"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="xs">My Wicked Weather App 🌤️ 🌧️</Heading>
              <Text className="card-text">
                A weather app designed by myself and coded in vanilla JavaScript
              </Text>
              <Text className="tech-stack" color="#7A9E9F" fontSize="2l">
                HTML | CSS | APIs | Netlify | GitHub | InVision | JavaScript |
                Axios
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter style={{ display: "flex", justifyContent: "center" }}>
            <ButtonGroup spacing="2">
              <Button variant="solid" bg="#FCDDEC" className="launch-button">
                <a
                  href="https://quiet-gaufre-25ec24.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Launch App
                </a>
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
        <Card maxW="sm" m={10}>
          <CardBody>
            <Image
              src={reactWeatherApp}
              alt="Screenshot of React Weather App"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="xs">React Weather App 🌈 ☔️</Heading>
              <Text className="card-text">
                This was my first ever React project! I wanted to practise
                creating a React app from scratch by converting and adapting my
                vanilla JavaScript weather app into a more dynamic React app.
              </Text>
              <Text className="tech-stack" color="#7A9E9F" fontSize="2l">
                React | CSS | APIs | Netlify | GitHub | FontAwesome | JavaScript
                | Axios
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter style={{ display: "flex", justifyContent: "center" }}>
            <ButtonGroup spacing="2">
              <Button variant="solid" bg="#FCDDEC" className="launch-button">
                <a
                  href="https://dashing-sundae-1ad6ac.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Launch App
                </a>
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
        <Card maxW="sm" m={10}>
          <CardBody>
            <Image
              src={tributePage}
              alt="Screenshot of React Weather App"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="xs">Tribute Page 🦶🏻</Heading>
              <Text className="card-text">
                This is a page dedicated to Dr Ponseti. I created this project
                for my School of Code application and dedicated it to my little
                girl Ada, who is undergoing treatment for talipes. I wanted to
                practise creating a simple webpage using HTML and CSS and found
                it very useful to brush up on my skills, having not coded for a
                little while before this.
              </Text>
              <Text className="tech-stack" color="#7A9E9F" fontSize="2l">
                HTML | CSS | Netlify | GitHub
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter style={{ display: "flex", justifyContent: "center" }}>
            <ButtonGroup spacing="2">
              <Button variant="solid" bg="#FCDDEC" className="launch-button">
                <a
                  href="https://cosmic-moxie-dd99b9.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Launch App
                </a>
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>

        <Card maxW="sm" m={10}>
          <CardBody>
            <Image
              src={photographyProject}
              alt="Screenshot of React Weather App"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="xs">Photography Project 📸</Heading>
              <Text className="card-text">
                A project to showcase some of my favourite photos taken with my
                Lumix camera 📸 The website is fully responsive and I
                incorporated Bootstrap in the design.
              </Text>
              <Text className="tech-stack" color="#7A9E9F" fontSize="2l">
                HTML | CSS | JavaScript | Netlify | GitHub | Bootstrap
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter style={{ display: "flex", justifyContent: "center" }}>
            <ButtonGroup spacing="2">
              <Button variant="solid" bg="#FCDDEC" className="launch-button">
                <a
                  href="https://delightful-lebkuchen-b85e82.netlify.app"
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
    </div>
  );
}

export default Projects;
