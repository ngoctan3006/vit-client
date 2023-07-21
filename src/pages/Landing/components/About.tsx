import React from 'react';

interface Props {
  className?: string;
}

const About: React.FC<Props> = ({ className }: Props) => {
  return (
    <div className={`${className} flex items-center`}>
      <div className="banner"></div>
      <div className="content">
        <h1 className="text-center title">Đội Tình nguyện</h1>
        <h1 className="text-center title">
          Trường Công nghệ Thông tin và Truyền thông
        </h1>
        <div className="info-container">
          <div className="card">
            <div className="logo d-flex justify-center items-center cursor-pointer">
              <img src="/logo.png" width={80} height={80} alt="logo" />
            </div>
            <div>
              <h2 className="text-center">Các tên gọi</h2>
              <br />
              <p>
                Đội có tên gọi đầy đủ là Đội sinh viên Tình Nguyện Trường Công
                nghệ Thông tin và Truyền thông – Đại học Bách Khoa Hà Nội
              </p>
              <p>
                Tên viết tắt: V.I.T (VIT) – Volunteer of Information Technology
              </p>
            </div>
          </div>
          <div className="card">
            <div className="logo d-flex justify-center items-center cursor-pointer">
              <img src="/logo.png" width={80} height={80} alt="logo" />
            </div>
            <div>
              <h2 className="text-center">Bài hát của Đội:</h2>
              <br />
              <p>Đội có các bài hát truyền thống như:</p>
              <ul>
                <li> Chỉ thế thôi</li>
                <li> Tình yêu mặt trời</li>
                <li> Lá cờ</li>
                <li> Rung Chuông Vàng</li>
                <li>Về ăn cơm</li>
              </ul>
            </div>
          </div>
          <div className="card">
            <div className="logo d-flex justify-center items-center cursor-pointer">
              <img src="/logo.png" width={80} height={80} alt="logo" />
            </div>
            <div>
              <h2 className="text-center">Ngày truyền thống của Đội:</h2>
              <br />
              <h1 className="text-center birthday">21/09</h1>
              <br />
              <p>
                Đội được thành lập vào ngày 21/09/2009. Vì vậy đây vừa là ngày
                truyền thống của Đội, cũng đồng thời là ngày sinh nhật Đội luôn.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
