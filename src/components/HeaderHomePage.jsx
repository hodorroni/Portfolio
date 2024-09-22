import { Link } from "react-scroll";
import React, { useState, useRef, useEffect } from "react";
export default function HeaderHomePage() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const navRef = useRef(null);
  function handleDropDown(event) {
    //otherwise it will fire also the handleClickOutside of the parent and this function will set it to true in the beginning, but it will bubble up to the parent
    //which sets this to false, hence the menu won't open. it prevents from the event to go further up in the hirerchy
    event.stopPropagation(); // Prevent the click event from bubbling up
    setIsNavVisible((prevValue) => !prevValue);
  }

  function handleClickOutside(event) {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsNavVisible(false);
    }
  }

  useEffect(() => {
    // Add event listener when the menu is visible
    if (isNavVisible) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      // Clean up the event listener on unmount
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isNavVisible]);
  return (
    <>
      <header className="main_header">
        <p>R.Borsukovsky</p>
        <div className="right_logo_container">
          <ul>
            <li>
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={500}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="mobile_header_menu">
          <button className="toggle-button" onClick={handleDropDown}>
            <span className="toggle-button__bar"></span>
            <span className="toggle-button__bar"></span>
            <span className="toggle-button__bar"></span>
          </button>
        </div>
        {isNavVisible && (
          <nav
            ref={navRef}
            className={`mobile-nav ${
              isNavVisible ? "mobile-nav--visible" : ""
            }`}
          >
            <ul className="mobile-nav__items">
              <li className="mobile-nav__item">
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  onClick={() => {
                    setIsNavVisible(false);
                  }}
                >
                  Home
                </Link>
              </li>
              <li className="mobile-nav__item" onClick={handleDropDown}>
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  onClick={() => {
                    setIsNavVisible(false);
                  }}
                >
                  Projects
                </Link>
              </li>
              <li className="mobile-nav__item" onClick={handleDropDown}>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  onClick={() => {
                    setIsNavVisible(false);
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </header>
    </>
  );
}
