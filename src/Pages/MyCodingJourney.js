import Hero from "../Components/Hero/Hero";

function MyCodingJourney() {
  const heroHeading = (
    <>
      My
      <br />
      Coding Journey
    </>
  );

  return (
    <div>
      <Hero
        bg="#FE5F55"
        colour="#7A9E9F"
        heroHeading={heroHeading}
        heroDescription="An insight into my tech journey so far  🚀"
      />
    </div>
  );
}

export default MyCodingJourney;
