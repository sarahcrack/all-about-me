import ColouredBoxes from "../Components/ColouredBoxes/ColouredBoxes";
import Footer from "../Components/Footer/Footer";
import GetInTouch from "../Components/GetInTouch/GetInTouch";
import Hero from "../Components/Hero/Hero";
import rightImage from "../Images/avatar_supersasspot_256.png";
import { Link } from "react-router-dom";

function Homepage() {
  const heroHeading = (
    <>
      Hello There,
      <br />
      I'm Sarah Crack
    </>
  );

  return (
    <div className="Homepage">
      <Hero
        bg="#B8D7F1"
        colour="#7A9E9F"
        heroHeading={heroHeading}
        heroDescription={
          <>
            Currently exploring digital careers at the Department for Education
            👩‍💻
            <br />
            📍London
          </>
        }
      />
      <ColouredBoxes
        bgLeft="#F5D5ED"
        bgRight="white"
        headingRight={<Link to="/about-me">All About Me</Link>}
        rightImage={rightImage}
      />
      <ColouredBoxes
        bgLeft="white"
        bgRight="#7A9E9F"
        headingLeft={<Link to="/projects">Projects</Link>}
      />
      <ColouredBoxes
        bgLeft="#FE5F55"
        bgRight="white"
        headingRight=<Link to="/mycodingjourney">My Coding Journey</Link>
      />
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default Homepage;
