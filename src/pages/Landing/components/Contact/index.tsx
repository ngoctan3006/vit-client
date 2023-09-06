import React from 'react';

interface Props {
  className?: string;
}

interface ContactProps {
  icon: React.ReactNode;
  href: string;
  title: React.ReactNode;
}

const Contact: React.FC<ContactProps> = ({ icon, href, title }) => (
  <div className="box">
    <div className="icon"></div>
    <div className="content">
      <a href={href} target="_blank" rel="noopener noreferrer"></a>
      <div>{title}</div>
    </div>
  </div>
);

const contacts: ContactProps[] = [
  {
    icon: (
      <img
        width="40"
        height="40"
        src="https://img.icons8.com/ultraviolet/40/phone.png"
        alt="phone"
      />
    ),
    href: 'tel:0968124602',
    title: (
      <>
        <p>Đội trưởng</p>
        <p>Phạm Hoàng Hiệp</p>
        <p>0968124602</p>
      </>
    ),
  },
  {
    icon: (
      <img
        width="40"
        height="40"
        src="https://img.icons8.com/ultraviolet/40/facebook-new.png"
        alt="phone"
      />
    ),
    href: 'tel:0968124602',
    title: 'Đội Tình nguyện Trường Công nghệ Thông tin và Truyền thông',
  },
  {
    icon: (
      <img
        width="40"
        height="40"
        src="https://img.icons8.com/ultraviolet/40/youtube.png"
        alt="phone"
      />
    ),
    href: 'https://www.youtube.com/c/tinhnguyenict',
    title: 'Đội SVTN Trường CNTT&TT',
  },
  {
    icon: (
      <img
        width="40"
        height="40"
        src="https://img.icons8.com/ultraviolet/40/instagram-new.png"
        alt="phone"
      />
    ),
    href: 'https://www.instagram.com/vit_chungtalamotgiadinh',
    title: 'vit_chungtalamotgiadinh',
  },
  {
    icon: (
      <img
        width="40"
        height="40"
        src="https://img.icons8.com/ultraviolet/40/gmail--v1.png"
        alt="phone"
      />
    ),
    href: 'mailto:tinhnguyen.ict@gmail.com',
    title: 'tinhnguyen.ict@gmail.com',
  },
];

const About: React.FC<Props> = ({ className = '' }: Props) => {
  return (
    <div className={`${className} section bg-white px-[300px]`}>
      <div className="title text-blue-800 border-b-blue-800">
        Thông tin liên hệ
      </div>
      <div className="flex justify-between py-20 gap-6">
        {contacts.map((contact, index) => (
          <div
            className={`relative w-full align-self bg-white font-semibold border-[1px] border-solid border-blue-800 shadow-[0_10px_4px_rgba(0,0,0,0.5)] rounded-3xl group transition-all duration-200`}
            key={index}
          >
            <div className="absolute inset-0 w-full h-full z-10 flex items-center justify-center scale-100  transition-all duration-200 group-hover:scale-0">
              {contact.icon}
            </div>
            <div className="relative inset-0 w-full h-full p-2 flex flex-col items-center justify-center transition-transform duration-200 scale-0 bg-[rgba(45, 99, 247, 0.6)] group-hover:scale-100 rounded-3xl text-white hover:bg-blue-400 cursor-pointer">
              <a
                href={contact.href}
                target="_blank"
                className="text-center w-full underline leading-8"
              >
                <div>{contact.title}</div>
              </a>
            </div>
          </div>
        ))}
      </div>
      {
        // TODO: Code phần liên hệ vào đây
      }
    </div>
  );
};

export default About;
