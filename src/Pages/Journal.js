import Footer from "../Components/Footer/Footer";
import Hero from "../Components/Hero/Hero";
import LearnerJournal from "../Components/LearnerJournal/LearnerJournal";

function Journal() {
  const heroHeading = "Learner Journal";
  return (
    <div>
      <Hero
        bg="#FCDDEC"
        colour="#B8D7F1"
        heroHeading={heroHeading}
        heroDescription="An insight into my School of Code experience  🚀"
      />
      <LearnerJournal />
      <Footer />
    </div>
  );
}

export default Journal;
