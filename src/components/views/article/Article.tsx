import React from "react";
import Carousels from "../carousel/Carousels";

import { cnArrs } from "./supportArticle";
import CardArticle from "./CardArticle";
import ArticleActive from "./ArticleActive";
import ArticleRegister from "./ArticleRegister";

const Article: React.FC = () => {
  return (
    <section className="article">
      <div className="article--header">
        <h1 className="article--header-club">STUDENT INFORMATIC CLUB</h1>
        <p className="article--header-text">Sinh viên giúp sinh viên làm chủ công nghệ.</p>
        <div className="row">
          <div className="article--row-carousel col-1-of-2">
            <h1 className="article--row-text">Các hoạt động</h1>
            <Carousels />
          </div>
          <div className="article--row-leader col-1-of-2">
            <h1 className="article--row-text">Ban chủ nghiệm</h1>
            <div className="article--row-leader-box">
              {cnArrs &&
                cnArrs.map((cnArr, index) => (
                  <div key={index} className="article--row-leader-chairman">
                    <img className="chairman--image" src={cnArr.image} alt="" />
                    <span className="chairman--text">
                      <h1 className="chairman--text-name">{cnArr.name}</h1>

                      <span className="chairman--text-position">{cnArr.position}</span>
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="article--information">
        <div className="article--information-content">
          <h1 className="article--information-content__text article--header-club">Về chúng tôi</h1>
          <CardArticle />
        </div>
      </div>
      <div className="article--active">
        <ArticleActive />
      </div>
      <div className="article--register">
        <ArticleRegister />
      </div>
    </section>
  );
};

export default Article;
