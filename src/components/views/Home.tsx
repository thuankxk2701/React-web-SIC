import React, { useState } from "react";
import Header from "./header/Header";
import Article from "./article/Article";
import Footer from "./footer/Footer";

const Home: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  return (
    <div className="home">
      <Header user={user} />
      <Article />
      <Footer />
    </div>
  );
};

export default Home;
