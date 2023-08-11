import { List } from 'antd';
import React from 'react';
import { BsBook, BsFileEarmarkRuled, BsMusicNote } from 'react-icons/bs';

const LeftSide: React.FC = () => {
  const data = [
    {
      key: 'rules',
      title: 'Nội quy',
      link: 'https://drive.google.com/file/d/1eF2i3qi8-MW_QlnWz4GVSaibhUFKsg1A/view?usp=drive_link',
      icon: <BsFileEarmarkRuled />,
    },
    {
      key: 'credo',
      title: 'Cương lĩnh',
      link: 'https://drive.google.com/file/d/1vlUMr5_EOHJvCFE97axx_B3jh9aObi7s/view?usp=drive_link',
      icon: <BsBook />,
    },
    {
      key: 'songs',
      title: 'Bài hát truyền thống',
      link: 'https://drive.google.com/file/d/1Vu62T1bqa6_34_Q0FOhVEspSPHuAFHNQ/view?usp=drive_link',
      icon: <BsMusicNote />,
    },
  ];

  return (
    <div className="left-side p-5">
      <div className="mb-5">
        <h3 className="subtitle mb-2">Ban quản lý</h3>
        <hr />
        <p>MVP Phạm Hoàng Hiệp</p>
        <p>MVP Phạm Hoàng Hiệp</p>
        <p>MVP Phạm Hoàng Hiệp</p>
        <p>MVP Phạm Hoàng Hiệp</p>
      </div>
      <div className="mb-5">
        <h3 className="subtitle mb-2">Nội quy - Cương lĩnh</h3>
        <hr />
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={item.icon}
                title={
                  <a className="text-16" href={item.link} target="_blank">
                    {item.title}
                  </a>
                }
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default LeftSide;
