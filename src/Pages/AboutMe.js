import Hero from "../Components/Hero/Hero";
function AboutMe() {
  const heroHeading = (
    <>
      All About
      <br /> Me
    </>
  );

  return (
    <div className="aboutMe">
      <Hero
        bg="#FCDDEC"
        colour="#B8D7F1"
        heroHeading={heroHeading}
        heroDescription="Hello 👋🏻"
      />
    </div>
  );
}

export default AboutMe;
