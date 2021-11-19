import React from "react";

const ArticleRegister: React.FC = () => {
  return (
    <section className="section-tours" id="section-tours">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="article--header-club">Các lớp bồi dưỡng của SIC</h2>
      </div>

      <div className="row">
        <div className="article--register-box col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--1">&nbsp;</div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--1">Language C++</span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>Thời gian:7h-24h</li>
                  <li>Giới hạn đăng kí :40</li>
                  <li>Language C++</li>
                  <li>Thời gian trong vòng 30</li>
                  <li>Chủ nhiệm : KeyXK</li>
                </ul>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-1">
              <div className="card__cta">
                <div className="card__register-box">
                  <p className="card__register-only">Only</p>
                  <p className="card__register-value">Hãy tin vào SIC</p>
                </div>
                <a href="#popup" className="button-card-1">
                  Đăng kí
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="article--register-box col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--2">&nbsp;</div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--2">Language Python</span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>Thời gian:7h-21h</li>
                  <li>Giới hạn đăng kí :50</li>
                  <li>Language Python</li>
                  <li>Thời gian trong vòng 50</li>
                  <li>Chủ nhiệm : KeyXK</li>
                </ul>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-2">
              <div className="card__cta">
                <div className="card__register-box">
                  <p className="card__register-only">Only</p>
                  <p className="card__register-value">Hãy tin vào SIC</p>
                </div>
                <a href="#popup" className="button-card-2">
                  Đăng kí
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="article--register-box col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--3">&nbsp;</div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--3">Language Java</span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>Thời gian:7h-21h</li>
                  <li>Giới hạn đăng kí :60</li>
                  <li>Language Java</li>
                  <li>Thời gian trong vòng 50</li>
                  <li>Chủ nhiệm : KeyXK</li>
                </ul>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-3">
              <div className="card__cta">
                <div className="card__register-box">
                  <p className="card__register-only">Only</p>
                  <p className="card__register-value">Hãy tin vào SIC</p>
                </div>
                <a href="#popup" className="button-card-3">
                  Đăng kí
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleRegister;
