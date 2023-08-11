import { Avatar, List, message } from 'antd';
import React, { useEffect, useState } from 'react';
import { BsBook, BsFileEarmarkRuled, BsMusicNote } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Loading } from 'src/components';
import { UserManagement, getUserManagement } from 'src/services/user';

const LeftSide: React.FC = () => {
  const [management, setManagement] = useState<UserManagement[]>([]);
  const [loading, setLoading] = useState(false);

  const noiQuyData = [
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

  const getManagement = async () => {
    try {
      setLoading(true);
      const { data } = await getUserManagement();
      setManagement(data.data);
    } catch (error: any) {
      message.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getManagement();
  }, []);

  return (
    <>
      <div className="left-side p-5">
        <div className="mb-5">
          <h3 className="subtitle mb-2">Ban quản lý</h3>
          <hr />
          <List
            itemLayout="horizontal"
            dataSource={management}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar src={item?.avatar}>
                      {item.username.charAt(0).toUpperCase()}
                    </Avatar>
                  }
                  title={
                    <Link className="text-16" to={`/profile/${item.id}`}>
                      {item.fullname}
                    </Link>
                  }
                  description={
                    item.position === 'DOI_TRUONG' ? 'Đội trưởng' : 'Đội phó'
                  }
                />
              </List.Item>
            )}
          />
        </div>
        <div className="mb-5">
          <h3 className="subtitle mb-2">Nội quy - Cương lĩnh</h3>
          <hr />
          <List
            itemLayout="horizontal"
            dataSource={noiQuyData}
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

      {loading && <Loading />}
    </>
  );
};

export default LeftSide;
