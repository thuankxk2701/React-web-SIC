import React from "react";
import logoHome from "../../assets/image/favicon.png";
import imageUser from "../../assets/image/user-6.jpg";

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="container">
        <header className="header">
          <img src={logoHome} alt="LogoSIC" />
          <form className="search">
            <input type="text" className="search__input" placeholder="Search Content" />
            <button className="search__button">click</button>
          </form>
          <nav className="user-nav">
            <div className="user-nav__user">
              <img src={imageUser} alt="UserPhoto" className="user-nav__user-photo" />
              <span className="user-nav__user-name">Sign In</span>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Home;
