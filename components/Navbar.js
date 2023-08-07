import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navContainer">
      <span>Logo</span>
      <div>
        <Link href="/" className="navLink">
          Home
        </Link>
        <Link href="/service" className="navLink">
          Service
        </Link>
        <Link href="/contact" className="navLink">
          Contact
        </Link>
        <Link href="/contact" className="navLink">
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
