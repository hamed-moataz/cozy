import { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import "./Navbar.css";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header>
      <nav>
        <div className="logo">
          <h2>
            Cozy <span>R</span>
          </h2>
        </div>
        <div className="links">
          <ul className={menuOpen ? "open" : ""}>
            <a>SHOP</a>
            <li>COLLECTIVE</li>
            <li>DESIGNERS</li>
            <li>ABOUT US</li>
            <li>CONTACT</li>
          </ul>
        </div>
        <div className="icons">
          <ul>
            <li>
              <a href="cart">

              <FiShoppingCart />
              </a>
            </li>
            <li>
              <IoSearch />
            </li>
            <li
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
            >
              <FaBars />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
