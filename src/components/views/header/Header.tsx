import React from "react";
import { Link } from "react-router-dom";
import { MdSearch } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";
import { MdOutlineNotifications } from "react-icons/md";
import logoSic from "../../../assets/image/logo.png";
interface navProps {
  user: any;
}

const Header: React.FC<navProps> = ({ user }) => {
  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  };

  return (
    <header className="navbar">
      <Link to="/">
        <img className="logo" src={logoSic} alt="logoSic" />
      </Link>
      <form className="search">
        <input type="text" className="search__input" placeholder="Search" />
        <button className="search__button">
          <MdSearch className="search__icon" />
        </button>
      </form>

      {user ? (
        <nav className="user-nav">
          <div className="user-nav__icon-box">
            <AiOutlineMessage className="user-nav__icon" />

            <span className="user-nav__notification">7</span>
          </div>
          <div className="user-nav__icon-box">
            <MdOutlineNotifications className="user-nav__icon" />
            <span className="user-nav__notification">13</span>
          </div>
          <div className="user-nav__user">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnpBKa7FAm5u35u_NM5xGNBg6kQO_3TRWIjw&usqp=CAU"
              alt="UserPhoto"
              className="user-nav__user-photo"
            />
            <span className="user-nav__user-name">Nguyen Thuan</span>
          </div>
        </nav>
      ) : (
        <Link to="login" className="login">
          Login
        </Link>
      )}
    </header>
  );
};

export default Header;
