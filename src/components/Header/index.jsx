import React from "react";
import { HeaderWrap } from "./Header.styles";
import Logo from "../../assets/header/logo.png";
import MainLogo from "../../assets/header/mainLogo.png";
import SearchBar from "../TextField/SearchBar";
import { Link } from "react-router-dom";
import navLinks from "./routes";
const index = () => {
  return (
    <HeaderWrap>
      <div className="container">
        <div className="logos">
          <Link to="/">
            <img src={Logo} alt="logo" className="logo" />
          </Link>
          <Link to="/">
            <img src={MainLogo} alt="MainLogo" className="mainLogo" />
          </Link>
        </div>
        <div className="searchbar">
          <SearchBar />
        </div>
        <ul>
          {navLinks.map((value, index) => (
            <li key={index}>
              <Link to={value.link}>
                <div className="item">
                  <img src={value.icon} alt={value.icon} /> {value.title}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </HeaderWrap>
  );
};

export default index;
