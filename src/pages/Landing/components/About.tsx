import React from 'react';
import iconMusic from 'assets/images/landing/icon-music.png';
import iconCalendar from 'assets/images/landing/icon-callendar.png';
import iconVolunteer from 'assets/images/landing/icon-volunteer.png';

interface Props {
  className?: string;
  id?: string;
}

const About: React.FC<Props> = ({ className='', id }: Props) => {
  return (
    <div className={className} id={id}>
      <div className="text-center title">
        <div>Đội Tình nguyện</div>
        <div>Trường Công nghệ Thông tin và Truyền thông</div>
      </div>
      <div className="info-container">
        <div className="card">
          <div className="d-flex justify-center items-center">
            <img src="/logo.png" width={80} height={80} alt="logo" />
          </div>
          <div>
            <h2 className="text-center">Các tên gọi</h2>
            <br />
            <p>
              Đội có tên gọi đầy đủ là Đội sinh viên Tình Nguyện Trường Công
              nghệ Thông tin và Truyền thông - Đại học Bách Khoa Hà Nội
            </p>
            <p>
              Tên viết tắt: V.I.T (VIT) - Volunteer of Information Technology
            </p>
          </div>
        </div>
        <div className="card">
          <div className="d-flex justify-center items-center">
            <img src={iconMusic} width={100} height={100} alt="icon-music" />
          </div>
          <div>
            <h2 className="text-center">Bài hát của Đội</h2>
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
          <div className="d-flex justify-center items-center">
            <img
              src={iconCalendar}
              width={80}
              height={80}
              alt="icon-calendar"
            />
          </div>
          <div>
            <h2 className="text-center">Ngày truyền thống</h2>
            <br />
            <h1 className="text-center birthday">21/09</h1>
            <br />
            <p>
              Đội được thành lập vào ngày 21/09/2009. Vì vậy đây vừa là ngày
              truyền thống của Đội, cũng đồng thời là ngày sinh nhật Đội luôn.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="d-flex justify-center items-center">
            <img
              src={iconVolunteer}
              width={80}
              height={80}
              alt="icon-volunteer"
            />
          </div>
          <div>
            <h2 className="text-center">Hoạt động truyền thống hàng tuần</h2>
            <br />
            <p>
              Hàng tuần, Đội có tổ chức hoạt động dạy học cho trẻ em tại Nhà
              Nuôi dưỡng Trẻ em Hữu nghị Quận Đống Đa
            </p>
            <em>Địa chỉ tại: 102 P.Yên Lãng, Thịnh Quang, Đống Đa, Hà Nội</em>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
