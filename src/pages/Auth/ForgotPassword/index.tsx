import { Button, Form, Input, message } from 'antd';
import { Loading, LoginButton } from 'components';
import React, { useState } from 'react';
import { FaRegUser } from 'react-icons/fa';
import { FiMail, FiPhone } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { requestResetPasswordAPI } from 'services/auth';

export interface RequestResetPasswordState {
  username: string;
  email: string;
  phone: string;
}

const ForgotPassWord: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRequestResetPassword = async (
    data: RequestResetPasswordState
  ) => {
    try {
      setLoading(true);
      const res = await requestResetPasswordAPI(data);
      message.success(res.data.data.message);
      navigate('/login');
    } catch (error: any) {
      message.error(error.response.data.message);
      console.log(error.response.data);
    }
    setLoading(false);
  };

  return (
    <div className="login-container">
      <div className="wrap">
        <Form form={form} onFinish={handleRequestResetPassword}>
          <h3 className="title text-center mb-8">Quên mật khẩu</h3>
          <p className="italic mb-8 mx-2">
            Vui lòng điền đầy đủ thông tin bên dưới để lấy lại mật khẩu của bạn
          </p>
          <div className="group">
            <label className="label" htmlFor="username">
              Tên đăng nhập
            </label>
            <Form.Item
              name="username"
              rules={[
                { required: true, message: 'Vui lòng nhập tên đăng nhập' },
              ]}
              hasFeedback
            >
              <Input
                id="username"
                size="large"
                placeholder="Tên đăng nhập"
                prefix={<FaRegUser />}
              />
            </Form.Item>
          </div>
          <div className="group">
            <label className="label" htmlFor="email">
              Địa chỉ email
            </label>
            <Form.Item
              name="email"
              rules={[
                { required: true, message: 'Vui lòng nhập địa chỉ email' },
                { type: 'email', message: 'Địa chỉ email không hợp lệ' },
              ]}
              hasFeedback
            >
              <Input
                id="email"
                size="large"
                placeholder="Địa chỉ email"
                prefix={<FiMail />}
              />
            </Form.Item>
          </div>
          <div className="group">
            <label className="label" htmlFor="phone">
              Số điện thoại
            </label>
            <Form.Item
              name="phone"
              rules={[
                { required: true, message: 'Vui lòng nhập số điện thoại' },
              ]}
              hasFeedback
            >
              <Input
                id="phone"
                size="large"
                placeholder="Số điện thoại"
                prefix={<FiPhone />}
              />
            </Form.Item>
          </div>
          <div className="text-right mt-2 mb-8">
            <Button type="text" onClick={() => navigate('/login')}>
              Quay lại trang đăng nhập
            </Button>
          </div>
          <LoginButton type="submit">gửi yêu cầu</LoginButton>
        </Form>
      </div>

      {loading && <Loading />}
    </div>
  );
};

export default ForgotPassWord;
