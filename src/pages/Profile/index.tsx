import { Avatar, Col, Row, Typography } from 'antd';
import { Loading } from 'components';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPosition } from 'utils';
import NotFound from '../NotFound';
import './index.scss';

const Title = Typography.Title;

const profile = {
  id: 32,
  username: 'hieu.dm',
  fullname: 'Dương Minh Hiếu',
  email: 'hieu.dm176584@sis.hust.edu.vn',
  phone: '0961360123',
  bio: 'Xin chào',
  avatar: 'https://vit-storage.s3.amazonaws.com/1683949735412_766250704.png',
  birthday: '1999-01-29T00:00:00.000Z',
  hometown: 'Thành phố Thái Nguyên, tỉnh Thái Nguyên',
  address: 'Yên Lãng, Hà Nội',
  school: 'Đại học Bách Khoa Hà Nội',
  student_id: '20172233',
  class: 'Cơ điện tử',
  cccd: '123456789',
  date_join: '2021-04-01T00:59:30.000Z',
  date_out: '2022-04-01T00:59:30.000Z',
  last_login: null,
  gender: 'MALE',
  status: 'ACTIVE',
  position: 'MEMBER',
  created_at: '2023-05-06T16:02:38.547Z',
  updated_at: '2023-05-13T03:52:16.305Z',
};

const Profile: React.FC = () => {
  const { id } = useParams();
  // const [profile, setProfile] = useState<User>();
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // useEffect(() => {
  //   const getInfo = async () => {
  //     if (!id) return;
  //     try {
  //       setLoading(true);
  //       const res = await getUser(id);
  //       setProfile(res.data.data);
  //     } catch (error: any) {
  //       setIsError(true);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   getInfo();
  // }, [id]);

  if (isError) return <NotFound />;
  if (loading) return <Loading />;

  return (
    <div className="profile">
      <div className="container">
        <Row>
          <Col xs={24} sm={8} className="d-center">
            <Avatar size={200} src={profile?.avatar} />
          </Col>
          <Col xs={24} sm={16}>
            <Row align="middle">
              <Col span={6}>
                <Title level={4}>Họ và tên: </Title>
              </Col>
              <Col span={18}>
                <Title level={4}>{profile?.fullname}</Title>
              </Col>
            </Row>
            <Row align="middle">
              <Col span={6}>
                <Title level={4}>Chức vụ: </Title>
              </Col>
              <Col span={18}>
                <Title level={4}>{getPosition(profile?.position)}</Title>
              </Col>
            </Row>
            <Row align="middle">
              <Col span={6}>
                <Title level={4}>Địa chỉ email: </Title>
              </Col>
              <Col span={18}>
                <Title level={4}>
                  <a href={`mailto:${profile?.email}`}>{profile?.email}</a>
                </Title>
              </Col>
            </Row>
            <Row align="middle">
              <Col span={6}>
                <Title level={4}>Số điện thoại: </Title>
              </Col>
              <Col span={18}>
                <Title level={4}>
                  <a href={`tel:${profile?.phone}`}>{profile?.phone}</a>
                </Title>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Profile;
