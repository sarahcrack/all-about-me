import Hero from "../Components/Hero/Hero";

function ComingSoon() {
  const heroHeading = <>Learner Jounral</>;
  return (
    <div className="coding-journal-container">
      <Hero
        bg="#B8D7F1"
        colour="#FCDDEC"
        heroHeading={heroHeading}
        heroDescription="An Insight Into My School Of Code Experience 🚀"
      />

      <div className="coming-soon-text">
        <p>Coming Soon...I promise!</p>
        <p>Please bear with me while I work out a few bugs 🪲</p>
      </div>
    </div>
  );
}

export default ComingSoon;
