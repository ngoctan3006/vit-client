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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, earum.
          Asperiores sapiente, obcaecati non facilis voluptates a et magni!
          Consequatur, pariatur voluptatem. Nemo sunt dolorum beatae nam
          possimus quae nihil.
        </p>
      </div>
    ),
  },
  {
    name: 'Lorem, ipsum dolor.',
    position: 'Lorem ipsum dolor sit amet.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex earum vel sed placeat nihil, exercitationem, repudiandae ipsam alias praesentium sint odio quis ad nulla nobis excepturi. Facilis harum asperiores iste alias autem voluptatem reiciendis officia, quod sint, ipsum ullam iusto explicabo necessitatibus eius. Distinctio recusandae, hic error eius quo suscipit?',
    image:
      'https://i.pinimg.com/736x/55/8e/fe/558efe12b06a64e304ab04eab7bedba4.jpg',
  },
  {
    name: 'Lorem, ipsum dolor.',
    position: 'Lorem ipsum dolor sit amet.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex earum vel sed placeat nihil, exercitationem, repudiandae ipsam alias praesentium sint odio quis ad nulla nobis excepturi. Facilis harum asperiores iste alias autem voluptatem reiciendis officia, quod sint, ipsum ullam iusto explicabo necessitatibus eius. Distinctio recusandae, hic error eius quo suscipit?',
    image:
      'https://i.pinimg.com/originals/c5/14/26/c5142691e5d832d00166a721dbc43ae0.jpg',
  },
  {
    name: 'Lorem, ipsum dolor.',
    position: 'Lorem ipsum dolor sit amet.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex earum vel sed placeat nihil, exercitationem, repudiandae ipsam alias praesentium sint odio quis ad nulla nobis excepturi. Facilis harum asperiores iste alias autem voluptatem reiciendis officia, quod sint, ipsum ullam iusto explicabo necessitatibus eius. Distinctio recusandae, hic error eius quo suscipit?',
    image:
      'https://i.pinimg.com/474x/2d/f0/92/2df092a91d84d46215f288086b6509ad.jpg',
  },
  {
    name: 'Lorem, ipsum dolor.',
    position: 'Lorem ipsum dolor sit amet.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex earum vel sed placeat nihil, exercitationem, repudiandae ipsam alias praesentium sint odio quis ad nulla nobis excepturi. Facilis harum asperiores iste alias autem voluptatem reiciendis officia, quod sint, ipsum ullam iusto explicabo necessitatibus eius. Distinctio recusandae, hic error eius quo suscipit?',
    image:
      'https://i.pinimg.com/474x/2d/f0/92/2df092a91d84d46215f288086b6509ad.jpg',
  },
  {
    name: 'Lorem, ipsum dolor.',
    position: 'Lorem ipsum dolor sit amet.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex earum vel sed placeat nihil, exercitationem, repudiandae ipsam alias praesentium sint odio quis ad nulla nobis excepturi. Facilis harum asperiores iste alias autem voluptatem reiciendis officia, quod sint, ipsum ullam iusto explicabo necessitatibus eius. Distinctio recusandae, hic error eius quo suscipit?',
    image:
      'https://i.pinimg.com/564x/b8/bb/f4/b8bbf4100e56894a54a152d8a122547d.jpg',
  },
];

const FeaturedMembers: React.FC<Props> = ({ className, id }) => {
  return (
    <div className={className} id={id}>
      <h1 className="text-center title">
        Cùng điểm qua những gương mặt tiêu biểu của Đội
      </h1>
      <HTMLFlipBook
        width={700}
        height={600}
        className="members-book"
        style={{}}
        startPage={1}
        size="fixed"
        minWidth={700}
        minHeight={600}
        maxWidth={700}
        maxHeight={600}
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
                  <div className="content">
                    <h2 className="name text-center">{member.name}</h2>
                    <p className="description">{member.description}</p>
                  </div>
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
