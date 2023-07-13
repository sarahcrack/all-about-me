import Hero from "../Components/Hero/Hero";
import Footer from "../Components/Footer/Footer";
import dictionaryCorner from "../Images/dictionary-corner.png";
import wickedWeatherApp from "../Images/wicked-weather-app.png";
import reactWeatherApp from "../Images/react-weather-app.png";
import tributePage from "../Images/tribute-page.png";
import photographyProject from "../Images/photography-project.png";
import saladCream from "../Images/salad-cream.png";
import aroundTheWorld from "../Images/around-the-world.png";
import bridgeTheGap from "../Images/bridge-the-gap.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
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
        <Card maxW="sm" m={10}>
          <CardBody>
            <Stack mt="6" spacing="3">
              <Heading size="sm">Mighty Mini Minds 💭</Heading>
              <Text className="card-text">
                In a 5 week School of Code team project we were tasked with
                identifying a problem and creating a full stack application to
                addreess it.
                <br />
                <strong>The Mooovers & Milkshakers 🐄 </strong>are proud to
                present MIGHTY MINI MINDS 💭
                <br />
                <strong>Problem Statement:</strong> Young people can often
                struggle to identify, articulate, and communicate their
                emotions.
                <br />
                <strong>Our Solution:</strong> To help facilitate the
                identification of emotions for young children and to help bridge
                the gap of communicating emotions to a trusted person. We aimed
                to achieve this through the process of journalling and
                supporting children to develop this skill.
              </Text>
              <Text className="tech-stack" color="#7A9E9F" fontSize="2l">
                Vite | React Router | Tailwind | Vitest | React Testing Library
                | Netlify | GitHub | JavaScript | TanStack Query | Node.js |
                PostgreSQL | Sequelize | JWT | Bcrypt
              </Text>
              <Text className="tech-stack" color="#7A9E9F" fontSize="2l">
                Team:{" "}
                <a
                  href="https://www.linkedin.com/in/la-sian-lloyd/"
                  target="_blank"
                  rel="noreferrer"
                  className="team-links"
                >
                  La-Sian Lloyd
                </a>
                ,
                <a
                  href="https://www.linkedin.com/in/guymulligan/"
                  target="_blank"
                  rel="noreferrer"
                  className="team-links"
                >
                  {" "}
                  Guy Mulligan
                </a>
                ,
                <a
                  href="https://www.linkedin.com/in/jonathan-gregory-b725a3203/"
                  target="_blank"
                  rel="noreferrer"
                  className="team-links"
                >
                  {" "}
                  Jonathan Gregory
                </a>
                ,
                <a
                  href="https://www.linkedin.com/in/samwilliamson2918/"
                  target="_blank"
                  rel="noreferrer"
                  className="team-links"
                >
                  {" "}
                  Sam Williamson
                </a>{" "}
                <a
                  href="https://www.linkedin.com/in/dave-rodriguez-b27691216/"
                  target="_blank"
                  rel="noreferrer"
                  className="team-links"
                >
                  {" "}
                  David Lopez
                </a>
              </Text>
              <Text className="card-text">
                Please explore Mighty Mini Minds by launching the app below. You
                can sign up yourself, or alternatively use the following
                credentials to login:
                <br />
                <div className="login-info">
                  Username: ada_babada
                  <br />
                  Password: iloveicecream
                </div>
              </Text>
            </Stack>
          </CardBody>
          <div className="github-icon-links">
            <a
              href="https://github.com/dlrodev92/migthy_mini_minds"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithubSquare}
                style={{ color: "#7A9E9F" }}
                className="githubIcon"
              />
            </a>

            <a
              href="https://github.com/dlrodev92/mighty_mini_minds_backEnd"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithubSquare}
                style={{ color: "#7A9E9F" }}
                className="githubIcon"
              />
            </a>
          </div>
          <Divider />
          <CardFooter style={{ display: "flex", justifyContent: "center" }}>
            <ButtonGroup spacing="2">
              <Button variant="solid" bg="#FCDDEC" className="launch-button">
                <a
                  href="https://wonderful-paletas-0c1299.netlify.app/"
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
              src={bridgeTheGap}
              alt="Screenshot of Around The World App"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="sm">Bridge The Gap 🚇</Heading>
              <Text className="card-text">
                In a one-week School of Code team project, we developed "Bridge
                The Gap," a front-end application for bootcampers to contribute
                useful links to the SoC 14 community and find resources to
                assist in their learning journey.
              </Text>
              <Text className="tech-stack" color="#7A9E9F" fontSize="2l">
                React | CSS | APIs | Netlify | GitHub | JavaScript | React
                Router
              </Text>
              <Text className="tech-stack" color="#7A9E9F" fontSize="2l">
                Team:{" "}
                <a
                  href="https://www.linkedin.com/in/paul-greenfield/"
                  target="_blank"
                  rel="noreferrer"
                  className="team-links"
                >
                  Paul Greenfield
                </a>{" "}
                ,
                <a
                  href="https://www.linkedin.com/in/umamahbegg/"
                  target="_blank"
                  rel="noreferrer"
                  className="team-links"
                >
                  {" "}
                  Umamah Begg
                </a>{" "}
                and
                <a
                  href="https://www.linkedin.com/in/bim-ehighebolo-3aba02249/"
                  target="_blank"
                  rel="noreferrer"
                  className="team-links"
                >
                  {" "}
                  Bim Ehighebolo
                </a>{" "}
              </Text>
            </Stack>
          </CardBody>
          <a
            href="https://github.com/sarahcrack/bridge-the-gap"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithubSquare}
              style={{ color: "#7A9E9F" }}
              className="githubIcon"
            />
          </a>
          <Divider />
          <CardFooter style={{ display: "flex", justifyContent: "center" }}>
            <ButtonGroup spacing="2">
              <Button variant="solid" bg="#FCDDEC" className="launch-button">
                <a
                  href="https://glowing-dodol-946ea6.netlify.app/"
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
              src={aroundTheWorld}
              alt="Screenshot of Around The World App"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="sm" mt="30">
                Around the World 🌎
              </Heading>
              <Text className="card-text">
                A School of Code Friday Hackathon team project. We were given
                the day to create an app that allows users to learn about
                different countries around the world. We used the REST Countries
                API to get the data and React to build the app.
              </Text>
              <Text className="tech-stack" color="#7A9E9F" fontSize="2l">
                React | CSS | APIs | Netlify | GitHub | JavaScript
              </Text>
              <Text className="tech-stack" color="#7A9E9F" fontSize="2l">
                Team:{" "}
                <a
                  href="https://www.linkedin.com/in/alice-firminger-785b37267/"
                  target="_blank"
                  rel="noreferrer"
                  className="team-links"
                >
                  Alice Firminger
                </a>{" "}
                and
                <a
                  href="https://www.linkedin.com/in/mohamed-moallin-131161147/"
                  target="_blank"
                  rel="noreferrer"
                  className="team-links"
                >
                  {" "}
                  Mohamed Moallin
                </a>
              </Text>
              <Text className="working-on">
                💡 Currently working on adding a filter for Eurovision winners
                (mainly because I love Eurovision!)
              </Text>
            </Stack>
          </CardBody>
          <a
            href="https://github.com/sarahcrack/around-the-world"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithubSquare}
              style={{ color: "#7A9E9F" }}
              className="githubIcon"
            />
          </a>
          <Divider />
          <CardFooter style={{ display: "flex", justifyContent: "center" }}>
            <ButtonGroup spacing="2">
              <Button variant="solid" bg="#FCDDEC" className="launch-button">
                <a
                  href="https://remarkable-entremet-ef05e9.netlify.app/"
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
                as develop my CSS skills.
              </Text>
              <Text className="tech-stack" color="#7A9E9F" fontSize="2l">
                React | CSS | APIs | Netlify | GitHub | Figma | JavaScript |
                Axios
              </Text>
            </Stack>
          </CardBody>
          <a
            href="https://github.com/sarahcrack/dictionary-corner"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithubSquare}
              style={{ color: "#7A9E9F" }}
              className="githubIcon"
            />
          </a>
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
              <Heading size="xs">My Wicked Weather App 🌤️ 🌧️ </Heading>
              <Text className="card-text">
                A weather app designed by myself and coded in vanilla
                JavaScript. It was a great opportunity to build a more
                complicated app from design through to deployment.
              </Text>
              <Text className="tech-stack" color="#7A9E9F" fontSize="2l">
                HTML | CSS | APIs | Netlify | GitHub | InVision | JavaScript |
                Axios
              </Text>
            </Stack>
          </CardBody>
          <a
            href="https://github.com/sarahcrack/my-wicked-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithubSquare}
              style={{ color: "#7A9E9F" }}
              className="githubIcon"
            />
          </a>
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
          <a
            href="https://github.com/sarahcrack/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithubSquare}
              style={{ color: "#7A9E9F" }}
              className="githubIcon"
            />
          </a>
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
          <a
            href="https://github.com/sarahcrack/tribute-page"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithubSquare}
              style={{ color: "#7A9E9F" }}
              className="githubIcon"
            />
          </a>
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
              <Heading size="xs" mt={20}>
                Photography Project 📸
              </Heading>
              <Text className="card-text">
                A project to showcase some of my favourite photos taken with my
                Lumix camera 📸 The website is fully responsive and I
                incorporated Bootstrap in the design.
              </Text>
              <Text className="tech-stack" color="#7A9E9F" fontSize="2l">
                HTML | CSS | JavaScript | Netlify | GitHub | Bootstrap |
                FontAwesome
              </Text>
            </Stack>
          </CardBody>
          <a
            href="https://github.com/sarahcrack/photography-project"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithubSquare}
              style={{ color: "#7A9E9F" }}
              className="githubIcon"
            />
          </a>
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
        <Card maxW="sm" m={10}>
          <CardBody>
            <Image
              src={saladCream}
              alt="Screenshot of React Weather App"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="xs">Salad Cream 😋</Heading>
              <Text className="card-text">
                This was my first ever coding project, dedicated to my love of
                Salad Cream ❤️ There is a consistent debate in our house about
                whether Salad Cream is better than Mayonnaise, so I decided to
                create a website to settle the debate once and for all! I used
                HTML, CSS and JavaScript to create this website and it was a
                great introduction into the world of coding.
              </Text>
              <Text className="tech-stack" color="#7A9E9F" fontSize="2l">
                HTML | CSS | JavaScript | Netlify | GitHub
              </Text>
            </Stack>
          </CardBody>
          <a
            href="https://github.com/sarahcrack/salad-cream"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithubSquare}
              style={{ color: "#7A9E9F" }}
              className="githubIcon"
            />
          </a>
          <Divider />
          <CardFooter style={{ display: "flex", justifyContent: "center" }}>
            <ButtonGroup spacing="2">
              <Button variant="solid" bg="#FCDDEC" className="launch-button">
                <a
                  href="https://lambent-taiyaki-3e949d.netlify.app/"
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
      <Footer />
    </div>
  );
}

export default Projects;
