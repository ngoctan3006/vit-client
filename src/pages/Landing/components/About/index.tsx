import React from 'react';
import Card from './Card';
import styles from './styles.module.scss';

interface Props {
  className?: string;
}

const About: React.FC<Props> = ({ className = '' }) => {
  return (
    <div
      className={`${className} ${styles.landingAbout} section bg-[url('images/landing/section-about-bg.webp')] bg-cover bg-no-repeat px-9 lg:px-[300px]`}
      id="about"
    >
      <div className="title text-white lg:border-b-white">Tổng quan</div>
      <div className={`${styles.cards} flex flex-col lg:flex-row lg:flex-wrap py-9 lg:py-20 justify-between gap-10`}>
        <Card
          label="Các tên gọi"
          icon={<img src="/logo.png" width={80} height={80} alt="logo" />}
        >
          <p>
            Đội có tên gọi đầy đủ là Đội sinh viên Tình Nguyện Trường Công nghệ
            Thông tin và Truyền thông - Đại học Bách Khoa Hà Nội.
          </p>
          <br />
          <p>Tên viết tắt: V.I.T (VIT) - Volunteer of Information Technology</p>
        </Card>
        <Card
          label="Bài hát Đội"
          icon={
            <img
              src="/images/landing/icon-music.webp"
              width={80}
              height={80}
              alt="icon-music"
            />
          }
        >
          <p>Đội có các bài hát truyền thống như:</p>
          <br />
          <ul className="list-disc pl-10">
            <li>Chỉ thế thôi</li>
            <li>Tình yêu mặt trời</li>
            <li>Lá cờ</li>
            <li>Rung Chuông Vàng</li>
            <li>Về ăn cơm</li>
          </ul>
        </Card>
        <Card
          label="Ngày truyền thống"
          icon={
            <img
              src="/images/landing/icon-calendar.webp"
              width={80}
              height={80}
              alt="icon-calendar"
            />
          }
        >
          <h1 className="text-center text-[32px] font-semibold text-blue-800">
            21/09
          </h1>
          <br />
          <p>
            Đội được thành lập vào ngày 21/09/2009. Vì vậy đây vừa là ngày
            truyền thống của Đội, cũng đồng thời là ngày sinh nhật Đội luôn.
          </p>
        </Card>
        <Card
          label="Hoạt động thường niên"
          icon={
            <img
              src="/images/landing/icon-volunteer.webp"
              width={80}
              height={80}
              alt="icon-volunteer"
            />
          }
        >
          <p>
            Hàng tuần, Đội có tổ chức hoạt động dạy học cho trẻ em tại Nhà Nuôi
            dưỡng Trẻ em Hữu nghị Quận Đống Đa
          </p>
          <br />
          <em className="font-medium text-lg">
            Địa chỉ tại: 102 P.Yên Lãng, Thịnh Quang, Đống Đa, Hà Nội
          </em>
        </Card>
      </div>
    </div>
  );
};

export default About;
