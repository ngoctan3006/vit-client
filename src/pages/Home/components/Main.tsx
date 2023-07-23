import { Carousel } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const contentStyle: React.CSSProperties = {
  width: 'auto',
  height: '300px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: 'white',
};

const imgStyle: React.CSSProperties = {
  width: '100%',
  height: '300px',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
};
const imageDescriptions = [
  { description: 'Mô tả 1', link: '/event/HPBD' },
  { description: 'Mô tả 2', link: '/event/NHSVTN' },
  { description: 'Mô tả 3', link: '/event/XYT' },
  { description: 'Mô tả 4', link: '/event/MHX' },
];
const Main: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const nav = useNavigate();

  return (
    <div className="main p-5">
      <div>
        <p className="subtitle">Sự kiện hot</p>
        <div className="d-center">
          <div className="card">
            <Carousel autoplay>
              {imageDescriptions.map((image, index) => (
                <div
                  key={index}
                  style={contentStyle}
                  onClick={() => nav(image.link)}
                >
                  <div
                    style={{
                      ...imgStyle,
                      backgroundImage: `url(
                        ../src/assets/images/home/vit${index + 1}.jpg
                      )`,
                    }}
                  ></div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <p className="subtitle">Q&A</p>
        <div className="qa-hot p-3">
          <p>quest 1</p>
          <p>quest 1</p>
          <p>quest 1</p>
          <p>quest 1</p>
          <p>quest 1</p>
          <p>quest 1</p>
          <p>quest 1</p>
          <p>quest 1</p>
          <p>quest 1</p>
          <p>quest 1</p>
          <p>quest 1</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
