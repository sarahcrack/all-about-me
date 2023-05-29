import ColouredBoxes from "../Components/ColouredBoxes/ColouredBoxes";
import Hero from "../Components/Hero/Hero";
import rightImage from "../Images/avatar_supersasspot_256.png";

function Homepage() {
  return (
    <div>
      <h1>Homepage</h1>
      <Hero bg="#B8D7F1" />
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
    </div>
  );
}

export default Homepage;
