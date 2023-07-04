import Hero from "../Components/Hero/Hero";
import Footer from "../Components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import "./ContactMe.css";
import LinkedInQRCode from "../Images/ada-lovelace-qr-code-linkedin.png";

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
      <div className="contact-me-text">
        <p>
          Email:{" "}
          <a href="mailto:sarah.l.crack@googlemail.com">
            <strong>sarah.l.crack@googlemail.com</strong>
          </a>
        </p>
      </div>
      <div className="contact-me-links">
        <a
          href="https://www.linkedin.com/in/sarahcrack/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            style={{ color: "#B8D7F1" }}
            className="linkedInIcon"
          />
        </a>
        <a
          href="https://github.com/sarahcrack"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faGithubSquare}
            style={{ color: "#B8D7F1" }}
            className="githubIcon"
          />
        </a>
      </div>
      <div className="linkedin-qr-code">
        <img src={LinkedInQRCode} alt="QR Code for LinkedIn" />
        <p>
          I have never been a huge fan of QR codes; however, I enjoyed creating
          this particular one for my LinkedIn profile using an AI QR code
          generator with the prompt: "Ada Lovelace, drinking a milkshake" 😊
        </p>
      </div>
      {/* <div className="contact-me-form">
        <p>Alternatively, please fill out the form:</p>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdWft_QSnasz17pozo0sBH2TSegiiDZ6h3EOFOCIbcmnYUG_Q/viewform?embedded=true"
          width="640"
          height="877"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          title="Contact Me"
        >
          Loading…
        </iframe>
      </div> */}
      <Footer />
    </div>
  );
}

export default ContactMe;
