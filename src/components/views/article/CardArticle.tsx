import React from "react";
import { BiGlobe } from "react-icons/bi";
import { BiShieldQuarter } from "react-icons/bi";
import { FiChrome } from "react-icons/fi";

const CardArticle: React.FC = () => {
  return (
    <div className="row">
      <div className="article--information-card__box col-1-of-3">
        <div className="article--card-box__icons">
          <FiChrome className="article--card-icon" />
        </div>
        <h1 className="article--card-heading">CLB Tin học sinh viên Student Informatic Club</h1>
        <span className="article--card-description">
          CLB Tin học sinh viên – Student Informatic Club (SIC) trực thuộc Đoàn Thanh niên – Hội
          sinh viên. CLB Tin Học Sinh Viên, trụ sở đặt tại phòng 204 tầng 2 thư viện ĐH Thủy Lợi.
        </span>
      </div>
      <div className="article--information-card__box col-1-of-3">
        <div className="article--card-box__icons">
          <BiShieldQuarter className="article--card-icon" />
        </div>
        <h1 className="article--card-heading">Được thành lập ngày 18/10/2001</h1>
        <span className="article--card-description">
          Sau gần 20 năm hình thành và phát triển, CLB đã góp phần không nhỏ trong tổ chức các sự
          kiện lớn nhỏ của trường, và đặc biệt là hỗ trợ thư viện quản lý phòng multimedia, hỗ trợ
          sinh viên toàn trường trong việc học tập, giải trí và khai thác thông tin trên máy tính.
        </span>
      </div>
      <div className="article--information-card__box col-1-of-3">
        <div className="article--card-box__icons">
          <BiGlobe className="article--card-icon" />
        </div>
        <h1 className="article--card-heading">Student Informatic Club Nơi kết nối đam mê</h1>
        <span className="article--card-description">
          CLB không chỉ là nơi các bạn được trau dồi kiến thức tin học, được trao đổi các kỹ năng sử
          dụng phần mềm mà SIC còn là một môi trường thân thiện, vui vẻ, tích cực và bổ ích cho các
          bạn sinh viên được hoạt động, vui chơi, giao lưu,
        </span>
      </div>
    </div>
  );
};

export default CardArticle;
