import React from "react";
import machineRepair1 from "../../../assets/image/machineRepair/1.png";
import machineRepair2 from "../../../assets/image/machineRepair/2.png";
import machineRepair3 from "../../../assets/image/machineRepair/3.png";

const ArticleActive: React.FC = () => {
  return (
    <section className="section-about">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="article--header-club">Các sự kiện đã tổ chức</h2>
      </div>

      <div className="row">
        <div className="article--active-box col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">Sự kiện sửa máy hàng năm</h3>
          <p className="paragraph">
            Là hoạt động vô cùng quan trọng, được SIC tổ chức diễn ra hàng năm sửa chữa máy tính
            miễn phí cho sinh viên- cán bộ giáo viên bao gồm các hoạt động thiết thực như: Hỗ trợ vệ
            sinh và nâng cấp máy tính. Tư vấn máy tính miễn phí. Cài đặt windows, phần mềm,...
          </p>

          <h3 className="heading-tertiary u-margin-bottom-small">Hỗ trợ tân sinh viên nhập học</h3>
          <p className="paragraph">
            Luôn đồng hành cũng các bạn tân sinh viên, sát cánh ngay những" bước đầu tiên". CLB Tin
            Học Sinh Viên hỗ trợ tân sinh viên trong việc khai báo hồ sơ, hoàn tất thủ tục nhập học
            bằng mọi hình thức dù xa hay gần chỉ với những click chuột. Bên cạnh đó, các kênh hỗ trợ
            online, tổng đài liên hệ luôn sẵn sàng để giải đáp thắc mặc cho tân sinh viên và phụ
            huynh.
          </p>
        </div>
        <div className="article--active-box col-1-of-2">
          <div className="composition">
            <img
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              alt="Photo1"
              className="composition__photo composition__photo--p1"
              src={machineRepair1}
            />

            <img
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              alt="Photo2"
              className="composition__photo composition__photo--p2"
              src={machineRepair2}
            />

            <img
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              alt="Photo3"
              className="composition__photo composition__photo--p3"
              src={machineRepair3}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleActive;
