import { Button, Form, Input } from 'antd';
import React from 'react';
import { BiLockAlt } from 'react-icons/bi';
import { FaRegUser } from 'react-icons/fa';
import LogginButton from '../../components/LoginButton';
import './login.scss';

interface LoginState {
  username: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const [form] = Form.useForm();

  const handleLogin = async (data: LoginState) => {
    console.log(data);

    form.resetFields();
  };

  return (
    <div className="login-container">
      <div className="wrap">
        <Form form={form} onFinish={handleLogin}>
          <h3 className="title text-center">Đăng nhập</h3>
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
            <label className="label" htmlFor="password">
              Mật khẩu
            </label>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: 'Vui lòng nhập mật khẩu' },
                { min: 6, message: 'Mật khẩu phải có ít nhất 6 ký tự' },
                { max: 32, message: 'Mật khẩu không được quá 32 ký tự' },
              ]}
              hasFeedback
            >
              <Input.Password
                id="password"
                size="large"
                placeholder="Mật khẩu"
                prefix={<BiLockAlt />}
              />
            </Form.Item>
          </div>
          <div className="text-right">
            <Button type="text">Quên mật khẩu?</Button>
          </div>
          <LogginButton type="submit">Đăng nhập</LogginButton>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
