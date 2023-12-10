import React, { useState } from "react";
import { FaReact, FaBars, FaMix } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../navbar/Navbar.scss";

const navlinkdata = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "About",
    to: "/about",
  },
  {
    label: "Skills",
    to: "/skills",
  },
  {
    label: "Work History",
    to: "/workhistory",
  },
  {
    label: "Services",
    to: "/services",
  },
  {
    label: "Projects",
    to: "/projects",
  },
  {
    label: "Contact",
    to: "/contact",
  },
];

function Navbar() {
  const [navtoggleIcon, setnavtoggleIcon] = useState(false);

  const handleNavIcons = () => setnavtoggleIcon(!navtoggleIcon);

  return (
    <div>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to={"/"} className="navbar__container__logo">
            <FaReact size={30} />
          </Link>
        </div>
        <ul
          className={`navbar__container__menu ${navtoggleIcon ? "active" : ""}`}
        >
          {navlinkdata.map((menuItem, key) => (
            <li className="navbar__container__menu__items">
              <Link
                key={key}
                to={menuItem.to}
                className="navbar__container__menu__items__links"
              >
                {menuItem.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-icons" onClick={handleNavIcons}>
          {navtoggleIcon ? <FaMix size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
