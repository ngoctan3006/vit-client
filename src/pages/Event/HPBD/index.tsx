import React from 'react';
import image1 from 'assets/images/home/vit1.jpg';
import './index.scss';

const HPBD: React.FC = () => {
  return (
    <div className="event mt-5">
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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
          voluptates doloribus assumenda quae. Suscipit, est voluptatibus
          delectus repellendus non quos a amet consequuntur ipsam. Quaerat,
          consequatur. Voluptates, eum nobis dolores cum id ratione libero
          dolore voluptate eligendi quo eaque nisi ut repellat, reiciendis aut
          voluptatum, repudiandae perferendis magni tempora! Quaerat.
        </div>
        <div className="part participants">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, totam.
          Nulla, cum numquam delectus eveniet, hic at incidunt placeat eligendi
          odio molestias non corporis, vel esse. Eum dolore praesentium sed.
        </div>
      </div>
      <hr />
      <div className="contents">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ducimus
          eum iure omnis rerum laborum quaerat, cumque suscipit magnam, repellat
          ratione sequi vitae iste ullam nam temporibus delectus.
        </p>
        <img src={image1} height={300} width="100%" alt="image1" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente vel
          deleniti eveniet repellendus veritatis error aliquam laudantium
          pariatur quidem blanditiis!
        </p>
        h
      </div>
    </div>
  );
};

export default HPBD;
