import { Button, Icon } from "@chakra-ui/react";
import { FaArrowDown } from "react-icons/fa";
import "./AppButton.css";

function AppButton({ bg, btnText, scrollDown }) {
  const handleButtonClick = () => {
    if (scrollDown) {
      // Scroll down slightly when the button is clicked
      window.scrollBy({
        top: window.innerHeight * 0.5,
        behavior: "smooth",
      });
    }
    // Handle other button functionality if needed
  };

  return (
    <Button
      bg={bg}
      onClick={handleButtonClick} // Call the handleButtonClick function on button click
      rightIcon={scrollDown ? <Icon as={FaArrowDown} /> : null} // Add the down arrow icon conditionally
    >
      <div className="btn">{btnText}</div>
    </Button>
  );
}

export default AppButton;
