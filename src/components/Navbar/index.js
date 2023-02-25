import React, { useState } from "react";
import "./navbar.scss";

function Navbar() {
  const [showDropdown, setShowDropDown] = useState(false);

  const navbarItems = {
    about: () => console.log("about"),
    services: () => console.log("services"),
    careers: () => console.log("careers"),
    contact: () => console.log("contact"),
  };

  function handleBurgerClick() {
    setShowDropDown((prevState) => !prevState);
  }

  function Hamburger() {
    return (
      <div className="navbar__burger" onClick={handleBurgerClick}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }

  function Dropdown() {
    return (
      <section
        className={`navbar__dropdown ${
          showDropdown ? "navbar__dropdown_show" : "navbar__dropdown_hide"
        }`}
      >
        {Object.keys(navbarItems).map((navItems) => (
          <div
            key={navItems}
            className="navbar__dropdown__options"
            onClick={navbarItems[navItems]}
          >
            <h3>{navItems}</h3>
          </div>
        ))}
      </section>
    );
  }

  function NavigationItems() {
    return (
      <ul className="navbar__items">
        {Object.keys(navbarItems).map((navItems) => (
          <li
            key={navItems}
            className="navbar__dropdown__options"
            onClick={navbarItems[navItems]}
          >
            <p>{navItems}</p>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <nav className="navbar">
      <div>ajgav</div>
      {Hamburger()}
      {Dropdown()}
      {NavigationItems()}
    </nav>
  );
}

export default Navbar;
