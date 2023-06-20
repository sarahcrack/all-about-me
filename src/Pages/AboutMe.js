import Footer from "../Components/Footer/Footer";
import Hero from "../Components/Hero/Hero";
import profilePicture from "../Images/sarah.png";
import "./AboutMe.css";
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
      <div className="aboutMe-content">
        <img
          src={profilePicture}
          className="profilePicture"
          alt="Sarah Crack"
        />
        <p className="aboutMe-description">
          Hello, I'm Sarah, a London based junior full-stack software developer,
          thrilled to be looking for my first role in tech. After establishing a
          career in higher education, I decided to take the leap into tech after
          completing a number of part-time coding courses with SheCodes and
          CodeFirstGirls. I then committed to learning and developing my skills
          full-time with the School of Code. I am hoping to build a flexible
          career in an an exciting, ever-changing industry where I can continue
          my learning journey. Additionally, I look forward to promoting women
          in tech (my daughter is named after Ada Lovelace after all!). <br />{" "}
          <br />I very much enjoy learning new things and developing my skills.
          When I am not coding, I love creating memories with my polaroid camera
          📸, playing the piano (quite badly!) 🎹 and travelling when I can 🌎{" "}
          <br /> <br />I live with with my husband and two little ones in
          beautiful South East London.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default AboutMe;
