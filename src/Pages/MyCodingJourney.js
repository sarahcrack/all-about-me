import Hero from "../Components/Hero/Hero";
import Footer from "../Components/Footer/Footer";
import AppButton from "../Components/Buttons/AppButton";
import "./MyCodingJourney.css";
import { NavLink } from "react-router-dom";

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
      <div className="coding-journey-container">
        <p className="coding-journey-description">
          One day, back in 2021, I decided to take the plunge and learn to code
          👩‍💻 I was on maternity leave with my little girl, Ada, and was looking
          for a new challenge. I had always been interested in tech and had
          heard that they taught coding in primary schools these days! I did not
          want to be left behind and have Ada teaching me how to code! (I know
          she was only a few months old at the time but this gave me a good head
          start!). So I decided to learn to code myself, more as a hobby than
          anything else. I started with some online courses with SheCodes and
          most recently with CodeFirstGirls, where I learnt the basics of HTML,
          CSS, JavaScript and React; I created some fun projects along the way
          which you can find on the Projects page.
        </p>
        <p className="coding-journey-description">
          Following maternity leave number two, with my son Otto, I finally made
          the leap and applied to School of Code. I was accepted onto the 16
          week full-time bootcamp and started in March 2023. I have been
          learning full-stack web development and am loving it! During the
          intensive 16-week coding course, I bolstered my teamwork,
          communication, and problem-solving skills while completing group
          projects, workshops, and hackathons. I proactively learned new
          technologies through documentation, tutorials, and working with peers,
          and honed my ability to break down complex problems. I collaborated
          within diverse teams, continuously adapted to new tech stacks, and
          practiced pair-programming to solve problems and share knowledge
          effectively.
        </p>
        <p className="coding-journey-description">
          I decided to keep a learner journal to consolidate what we covered
          each day, some code snippets/syntax and my thoughts during this
          intense, 16 week process. I am excited to continue learning and see
          where this journey takes me! 🚀
        </p>
        <div className="learner-journal-button">
          <NavLink to="/coming-soon">
            <AppButton
              bg="#FE5F55"
              btnText="Learner Journal →"
              scrollDown={false}
              className="app-button"
            />
          </NavLink>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default MyCodingJourney;
