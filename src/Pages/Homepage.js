import ColouredBoxes from "../Components/ColouredBoxes/ColouredBoxes";
import Footer from "../Components/Footer/Footer";
import GetInTouch from "../Components/GetInTouch/GetInTouch";
import Hero from "../Components/Hero/Hero";
import rightImage from "../Images/avatar_supersasspot_256.png";

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
        heroHeading={heroHeading}
        heroDescription="Aspiring Junior Developer from London 👩‍💻"
      />
      <ColouredBoxes
        bgLeft="#F5D5ED"
        bgRight="white"
        headingRight="All About Me"
        rightImage={rightImage}
      />
      <ColouredBoxes bgLeft="white" bgRight="#7A9E9F" headingLeft="Projects" />
      <ColouredBoxes
        bgLeft="#FE5F55"
        bgRight="white"
        headingRight="My Coding Journey"
      />
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default Homepage;
