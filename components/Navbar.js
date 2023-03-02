import Link from "next/link";
import React, { useState } from "react";
import NavItem from "../components/NavItem";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "How it works", href: "/how" },
  { text: "About Us", href: "/about" },
  { text: "Contact", href: "/contact" },
  { text: "Book now", href: "/book" },
];

const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={`nav`}>
        <Link legacyBehavior href={"/"}>
          <a>
            <h1 className="logo">trexco</h1>
          </a>
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
          
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;