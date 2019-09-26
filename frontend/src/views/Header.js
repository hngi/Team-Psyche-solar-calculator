import React from "react";
import Logo from "../assets/images/Logo.svg";

const Header = () => {
  return (
    <header>
      <nav className="navbar header mb-4 expand">
        <img className="img-responsive sm-responsive" src={Logo} alt="L" />
      </nav>
    </header>
  );
};

export default Header;
