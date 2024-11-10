import "./Navbar.css";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-scroll";
export default function Navbar() {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);
  return (
    <div>
      <nav className={`container ${sticky ? "dark-nav" : ""}`}>
        <img src={logo} alt="" className="logo" />
        <ul>
          <li>
            <Link to="hero" smooth={true} offset={0} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="programs" smooth={true} offset={-260} duration={500}>
              Program
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} offset={-150} duration={500}>
              About
            </Link>
          </li>

          <li>
            <Link to="campus" smooth={true} offset={-260} duration={500}>
              Campus
            </Link>
          </li>
          <li>
            <Link to="testimonial" smooth={true} offset={-260} duration={500}>
              Testimonials
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} offset={-260} duration={500}>
              <buttton className="btn">Contact us</buttton>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}