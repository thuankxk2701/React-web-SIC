import React from "react";
import { GoLocation } from "react-icons/go";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineHomeWork } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import logo from "../../../assets/image/logo.png";

const Footer: React.FC = () => {
  return (
    <section className="section-footer">
      <div className="row">
        <div className="pre-footer col-1-of-4">
          <img className="pre-footer-icons" src={logo} alt="FooterLogo" />
          <p className="pre-footer-text">Khơi nguồn tri thức </p>
          <p className="pre-footer-text">Tiếp sức đam mê</p>
        </div>
        <div className="pre-footer col-1-of-4">
          <div className="pre-footer-header">
            <h1>Địa chỉ</h1>
          </div>
          <span>
            <GoLocation className="pre-footer-header-icons" />
            <span className="pre-footer-header-text">Phòng 204 tầng 2 thư viện ĐH Thủy Lợi.</span>
          </span>
          <br />
          <br />
          <span>
            <MdOutlineHomeWork className="pre-footer-header-icons" />
            <span className="pre-footer-header-text">
              Trường ĐH Thủy Lọi,175,Sơn Tây,Đống Đa,Hà Nội
            </span>
          </span>
        </div>
        <div className="pre-footer col-1-of-4">
          <div className="pre-footer-header">
            <h1>Theo dõi</h1>
          </div>
          <span>
            <AiOutlineYoutube className="pre-footer-header-icons" />
            <span className="pre-footer-header-text">Youtube CLB SIC</span>
          </span>
          <br />
          <br />
          <span>
            <FaFacebookF className="pre-footer-header-icons" />
            <span className="pre-footer-header-text">CTV Câu Lạc Bộ SIC</span>
          </span>
          <br />
          <br />
          <span>
            <AiOutlineInstagram className="pre-footer-header-icons" />
            <span className="pre-footer-header-text">CTV Câu Lạc Bộ SIC</span>
          </span>
        </div>
        <div className="pre-footer col-1-of-4">
          <div className="pre-footer-header">
            <h1>Liên lạc</h1>
          </div>
          <span>
            <AiOutlineMail className="pre-footer-header-icons" />
            <span className="pre-footer-header-text">ttctde@gmail.com</span>
          </span>
          <br />
          <br />
          <span>
            <FiPhoneCall className="pre-footer-header-icons" />
            <span className="pre-footer-header-text">01234567242</span>
          </span>
          <br />
          <br />
          <span>
            <FiPhoneCall className="pre-footer-header-icons" />
            <span className="pre-footer-header-text">01234567242</span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
