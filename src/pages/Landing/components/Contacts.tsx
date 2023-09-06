import React from 'react';

interface Props {
  className?: string;
  id?: string;
}

interface Contact {
  type: string;
  content?: React.ReactNode;
}

const contacts: Contact[] = [
  {
    type: 'Contact',
    content: (
      <div className="box">
        <div className="image">
          <img
            width="40"
            height="40"
            src="https://img.icons8.com/ultraviolet/40/phone.png"
            alt="phone"
          />
        </div>
        <div className="content">
          <a href="tel:0968124602" target="_blank">
            <p>Đội trưởng</p>
            <p>Phạm Hoàng Hiệp</p>
            <p>0968124602</p>
          </a>
        </div>
      </div>
    ),
  },
  {
    type: 'Facebook',
    content: (
      <div className="box">
        <div className="image">
          <img
            width="40"
            height="40"
            src="https://img.icons8.com/ultraviolet/40/facebook-new.png"
            alt="facebook-new"
          />
        </div>
        <div className="content">
          <p>
            <a
              href="https://www.facebook.com/doitinhnguyen.soict"
              target="_blank"
            >
              Đội Tình nguyện Trường Công nghệ Thông tin và Truyền thông
            </a>
          </p>
        </div>
      </div>
    ),
  },
  {
    type: 'Youtube',
    content: (
      <div className="box">
        <div className="image">
          <img
            width="40"
            height="40"
            src="https://img.icons8.com/ultraviolet/40/youtube.png"
            alt="youtube"
          />
        </div>
        <div className="content">
          <p>
            <a href="https://www.youtube.com/c/tinhnguyenict" target="_blank">
              Đội SVTN Trường CNTT&TT
            </a>
          </p>
        </div>
      </div>
    ),
  },
  {
    type: 'Instagram',
    content: (
      <div className="box">
        <div className="image">
          <img
            width="40"
            height="40"
            src="https://img.icons8.com/ultraviolet/40/instagram-new.png"
            alt="instagram-new"
          />
        </div>
        <div className="content">
          <a
            href="https://www.instagram.com/vit_chungtalamotgiadinh"
            target="_blank"
          >
            <p>vit_chungtalamotgiadinh</p>
          </a>
        </div>
      </div>
    ),
  },
  {
    type: 'Email',
    content: (
      <div className="box">
        <div className="image">
          <img
            width="40"
            height="40"
            src="https://img.icons8.com/ultraviolet/40/gmail--v1.png"
            alt="gmail--v1"
          />
        </div>
        <div className="content">
          <a href="mailto:tinhnguyen.ict@gmail.com" target="_blank">
            <p>tinhnguyen.ict@gmail.com</p>
          </a>
        </div>
      </div>
    ),
  },
];

const About: React.FC<Props> = ({ className='', id }: Props) => {
  return (
    <div className={`${className}`} id={id}>
      <h1 className="title text-center">Liên hệ với chúng tôi</h1>
      <div className="flex list">
        {contacts.map((contact, index) => (
          <div key={index}>{contact.content}</div>
        ))}
      </div>
    </div>
  );
};

export default About;
