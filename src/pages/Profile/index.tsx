import {
  Avatar,
  Col,
  Row,
  Typography,
  Button,
  Modal,
  Form,
  Input,
  DatePicker,
  message,
  Image,
  Space,
  Upload,
} from 'antd';
import type { UploadProps } from 'antd';
import ImgCrop from 'antd-img-crop';
import { Loading } from 'components';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPosition } from 'utils';
import NotFound from '../NotFound';
import './index.scss';
import dayjs from 'dayjs';
import { DATE_FORMAT } from 'src/constants';
import { EditOutlined } from '@ant-design/icons';

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

const props: UploadProps = {
  name: 'file',
  accept: 'image/*',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const Profile: React.FC = () => {
  const { id } = useParams();
  // const [profile, setProfile] = useState<User>();
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');
  const [messageApi, contextHolder] = message.useMessage();

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    // setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);

    message.success('Đã thay đổi thông tin thành công');
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };

  // const success = () => {
  //   setTimeout(() => {messageApi.open({
  //     type: 'success',
  //     content: 'This is a success message',
  //   });
  // }, 2000);

  // };

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
            {/* <Avatar size={200} src={profile?.avatar} /> */}
            <div className="profile-ava">
              <div className="img-wrap">
                <Image
                  height="100%"
                  fallback="data:image/png;base64,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"
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
              </div>
              <ImgCrop rotationSlider>
                <Upload {...props}>
                  <Button icon={<EditOutlined />}>Edit</Button>
                </Upload>
              </ImgCrop>
            </div>
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
            <Row align="middle">
              <Button type="primary" onClick={showModal}>
                Chỉnh sửa thông tin
              </Button>
              <Modal
                title="Chỉnh sửa thông tin TNV"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
                okText="Lưu"
                cancelText="Huỷ"
              >
                <Form
                  name="basic"
                  labelCol={{ span: 8 }}
                  wrapperCol={{ span: 16 }}
                  style={{ maxWidth: 600 }}
                  initialValues={{
                    ...profile,
                    birthday: dayjs(profile?.birthday),
                  }}
                  // onFinish={onFinish}
                  // onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your email!',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    label="Số điện thoại"
                    name="phone"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your phone!',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="DatePicker"
                    name="birthday"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your birthday!',
                      },
                    ]}
                  >
                    <DatePicker className="w-full" format={DATE_FORMAT} />
                  </Form.Item>
                  <Form.Item label="Quê quán" name="hometown">
                    <Input />
                  </Form.Item>
                  <Form.Item label="Địa chỉ tạm trú" name="address">
                    <Input />
                  </Form.Item>
                  {/* <Form.Item label="Bio" name="bio">
                    <Input.TextArea showCount maxLength={100}/>
                  </Form.Item> */}
                </Form>
              </Modal>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Profile;
