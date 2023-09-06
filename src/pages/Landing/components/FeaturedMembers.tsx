import React from 'react';
import HTMLFlipBook from 'react-pageflip';

interface Props {
  className?: string;
  id?: string;
}

interface MemberInfo {
  isFirstPage?: boolean;
  content?: React.ReactNode;
  name?: string;
  position?: string;
  description?: string;
  image?: string;
}

const members: MemberInfo[] = [
  {
    isFirstPage: true,
    content: (
      <div className="page-wrapper firstpage">
        <h1 className="text-center">Humans of VIT</h1>
        <div className="relative"></div>
        <p>
          Sau đây là những người anh, người chị, người bạn, vừa là những gương
          mặt hết sức thân quen trong Đội, cũng đồng thời là những tấm gương
          tình nguyện viên xuất sắc. Họ vừa là những người trụ cột trong gia
          đình VIT, cũng đồng thời là những sinh viên có thành tích học tập và
          hoạt động tốt. Hãy cùng xem họ là ai nhé.
        </p>
      </div>
    ),
  },
  {
    name: 'Lorem, ipsum dolor.',
    position: 'Lorem ipsum dolor sit amet.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex earum vel sed placeat nihil, exercitationem, repudiandae ipsam alias praesentium sint odio quis ad nulla nobis excepturi. Facilis harum asperiores iste alias autem voluptatem reiciendis officia, quod sint, ipsum ullam iusto explicabo necessitatibus eius. Distinctio recusandae, hic error eius quo suscipit?',
    image: 'https://drive.google.com/uc?id=1ddQiwDj7cqJaeU5pzq9iOO2KVOaGYnXd',
  },
  {
    name: 'Lorem, ipsum dolor.',
    position: 'Lorem ipsum dolor sit amet.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex earum vel sed placeat nihil, exercitationem, repudiandae ipsam alias praesentium sint odio quis ad nulla nobis excepturi. Facilis harum asperiores iste alias autem voluptatem reiciendis officia, quod sint, ipsum ullam iusto explicabo necessitatibus eius. Distinctio recusandae, hic error eius quo suscipit?',
    image: 'https://drive.google.com/uc?id=1UsNWwE2F_w50HMLn4EPloHG0sVXdGrfl',
  },
  {
    name: 'Lorem, ipsum dolor.',
    position: 'Lorem ipsum dolor sit amet.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex earum vel sed placeat nihil, exercitationem, repudiandae ipsam alias praesentium sint odio quis ad nulla nobis excepturi. Facilis harum asperiores iste alias autem voluptatem reiciendis officia, quod sint, ipsum ullam iusto explicabo necessitatibus eius. Distinctio recusandae, hic error eius quo suscipit?',
    image: 'https://drive.google.com/uc?id=1iYmljzz9Fh_SiTa584Mkeo-7ZTxPcdp-',
  },
  {
    name: 'Lorem, ipsum dolor.',
    position: 'Lorem ipsum dolor sit amet.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex earum vel sed placeat nihil, exercitationem, repudiandae ipsam alias praesentium sint odio quis ad nulla nobis excepturi. Facilis harum asperiores iste alias autem voluptatem reiciendis officia, quod sint, ipsum ullam iusto explicabo necessitatibus eius. Distinctio recusandae, hic error eius quo suscipit?',
    image: 'https://drive.google.com/uc?id=1_ja9LGCrz7UBb_vwfzJr5ZrWtsl9CYcv',
  },
  {
    name: 'Lorem, ipsum dolor.',
    position: 'Lorem ipsum dolor sit amet.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex earum vel sed placeat nihil, exercitationem, repudiandae ipsam alias praesentium sint odio quis ad nulla nobis excepturi. Facilis harum asperiores iste alias autem voluptatem reiciendis officia, quod sint, ipsum ullam iusto explicabo necessitatibus eius. Distinctio recusandae, hic error eius quo suscipit?',
    image: 'https://drive.google.com/uc?id=1aRCFgcU86kqvfYiOZiTvorYVhdZhmh1R',
  },
  {
    name: 'Lorem, ipsum dolor.',
    position: 'Lorem ipsum dolor sit amet.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex earum vel sed placeat nihil, exercitationem, repudiandae ipsam alias praesentium sint odio quis ad nulla nobis excepturi. Facilis harum asperiores iste alias autem voluptatem reiciendis officia, quod sint, ipsum ullam iusto explicabo necessitatibus eius. Distinctio recusandae, hic error eius quo suscipit?',
    image: 'https://drive.google.com/uc?id=1eqmYMNWySsba7cjs66FaKAFxZZAfW7c4',
  },
  {
    name: 'Lorem, ipsum dolor.',
    position: 'Lorem ipsum dolor sit amet.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex earum vel sed placeat nihil, exercitationem, repudiandae ipsam alias praesentium sint odio quis ad nulla nobis excepturi. Facilis harum asperiores iste alias autem voluptatem reiciendis officia, quod sint, ipsum ullam iusto explicabo necessitatibus eius. Distinctio recusandae, hic error eius quo suscipit?',
    image: 'https://drive.google.com/uc?id=1Vlml3GduiFq2x3O8EeXK3o6UQiIauoA1',
  },
];

const FeaturedMembers: React.FC<Props> = ({ className='', id }) => {
  return (
    <div className={className} id={id}>
      <h1 className="text-center title">
        Cùng điểm qua những gương mặt tiêu biểu của Đội
      </h1>
      <HTMLFlipBook
        width={500}
        height={680}
        className="members-book"
        style={{}}
        startPage={1}
        size="fixed"
        minWidth={500}
        minHeight={680}
        maxWidth={500}
        maxHeight={680}
        drawShadow
        flippingTime={0.5}
        usePortrait
        startZIndex={10}
        autoSize={false}
        maxShadowOpacity={1}
        showCover={false}
        mobileScrollSupport
        clickEventForward={false}
        swipeDistance={200}
        useMouseEvents
        disableFlipByClick
        showPageCorners={false}
      >
        {members?.map((member, index) =>
          member.isFirstPage ? (
            <div key={index}>{member.content}</div>
          ) : (
            <div className="page-wrapper" key={index}>
              <div className="page relative">
                <span className="page-num absolute">{index + 1}</span>
                <div className="wrapper flex">
                  <div
                    className="image"
                    style={{ backgroundImage: `url(${member.image})` }}
                  ></div>
                </div>
              </div>
            </div>
          )
        )}
      </HTMLFlipBook>
    </div>
  );
};

export default FeaturedMembers;
