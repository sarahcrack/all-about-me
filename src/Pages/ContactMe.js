import Hero from "../Components/Hero/Hero";
import Footer from "../Components/Footer/Footer";

function ContactMe() {
  const heroHeading = (
    <>
      Contact
      <br />
      Me
    </>
  );

  return (
    <div>
      <Hero
        bg="#B8D7F1"
        colour="#FCDDEC"
        heroHeading={heroHeading}
        heroDescription="I would love to hear from you! 📧"
      />
      <Footer />
    </div>
  );
}

export default ContactMe;
