import React, { useState } from 'react';
import image1 from 'assets/images/home/vit1.jpg';
import './index.scss';
import { Link } from 'react-router-dom';

const Detail: React.FC = () => {
  const [modal, setModal] = useState<string>('');
  const images = [
    '/src/assets/images/home/vit1.jpg',
    '/src/assets/images/home/vit2.jpg',
  ];

  return (
    <div className="event mt-5">
      {modal !== '' ? (
        <div
          style={{
            backgroundImage: `url(${modal})`,
          }}
        ></div>
      ) : (
        <>
          {' '}
          <div className="main-banner">
            <div className="image-wrapper">
              <img className="image" src={image1}></img>
            </div>
            <div className="title">
              <div className="time">2023-07-24 - 2023-09-12</div>
              <div className="event-name">Sinh nhật VIT 13 tuổi</div>
              <hr />
            </div>
          </div>
          <div className="flex">
            <div className="part detail">
              <div className="label">Chi tiết</div>
              <div className="item">Số ngày: </div>
              <div className="item">Địa chỉ: </div>
              <div className="item">Tạo ngày: </div>
              <div className="item">Trạng thái: </div>
            </div>
            <div className="part participants">
              <div className="label">Người tham dự</div>
              <div className="item">Chi tiết người:</div>
              <Link to="/event/members" className="item">
                Xem tất cả
              </Link>
            </div>
          </div>
          <hr />
          <div className="contents">
            <p>
              description Được dịch từ tiếng Anh-Mô tả là mô hình phát triển câu
              chuyện nhằm mục đích làm sinh động một địa điểm, đối tượng, nhân
              vật hoặc nhóm. Miêu tả là một trong bốn phương thức tu từ cùng với
              trình bày, lập luận và tường thuật. Trong thực tế, sẽ rất khó để
              viết văn học chỉ dựa trên một trong bốn phương thức cơ bản
            </p>
            <div className="info-container">
              {images.map((img, index) => (
                <div key={index} className="card" onClick={() => setModal(img)}>
                  <img src={img} height={300} width="100%" alt="img" />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Detail;
