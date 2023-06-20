import Hero from "../Components/Hero/Hero";
import Footer from "../Components/Footer/Footer";

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
      <Footer />
    </div>
  );
}

export default MyCodingJourney;
