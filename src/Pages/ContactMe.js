import Hero from "../Components/Hero/Hero";

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
    </div>
  );
}

export default ContactMe;
