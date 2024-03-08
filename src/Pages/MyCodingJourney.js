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
          week full-time bootcamp and started in March 2023. I learnt all about
          full-stack web development and loved it! Although I must admit, I
          definitely feel more confident with the Frontend side! During the
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
        <p className="coding-journey-description">A few months on…… Feb 2024</p>
        <p className="coding-journey-description">
          It has been a while since I last wrote about my coding/tech journey. I
          enrolled in School of Code towards the end of my maternity leave and a
          few days after I completed the bootcamp I was back into my life at
          Goldsmiths, University of London! I must admit, following School of
          Code, I got swept up in getting back into my role in higher education
          as I had been out for 15 months on maternity leave/doing the bootcamp
          as well as being distracted by life, children, travelling to Canada,
          Spain, The Netherlands and Mexico for work and generally just getting
          my head around everything that had happened!
        </p>
        <p className="coding-journey-description">
          As expected, I was not able to keep up with as much coding as I would
          have liked with a full time job and family commitments. I started off
          well and did some work on my portfolio website and started making a
          Barbie and Ken noughts and crosses game with the help of a
          FreeCodeCamp tutorial. I also met with my lovely friend Rosie to
          continue turning our kids colour mixing website into a React app.
          However, since September last year by GitHub is looking very quiet 😟
          I have recently just finsihed a CodeFirstGirls course and have been
          developing my knowledge around SQL and data which has been very
          interesting!
        </p>
        <p className="coding-journey-description">
          I have been very lucky to have been offered a new role at the
          Department for Education in the Teacher Services Team. I am very
          excited about it as I will really be able to direct my own learning
          and rotate around different teams to support digital services related
          to the recruitment and retention of teachers (with Ada starting school
          this year and with some of my friends being teachers, it is definitely
          something that I am passionate about). I will be rotating around
          different teams in the Directorate and will have the opportunity to
          learn about areas such as content design, user research, interaction
          design, service design, development and product management. It has
          been a big decision to leave my current role as I love Goldsmiths, but
          I think I am ready for a new adventure and I am hoping my new role can
          combine my interest in digital and love of learning with my passion
          for the education sector 🥰 Keep you posted!
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default MyCodingJourney;
