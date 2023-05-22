import { Link } from "react-router-dom";
 
function Navbar() {
  return (
    <div className="Navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact Me</Link>
      <Link to="/mycodingjourney">My Coding Journey</Link>
      <Link to="/projects">Projects</Link>
    </div>
  );
}

export default Navbar;
