import { Button, Form, Input, message } from 'antd';
import React from 'react';
import { BiLockAlt } from 'react-icons/bi';
import { FaRegUser } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { Loading, LoginButton } from '../../components';
import { login } from '../../redux/actions/auth.action';
import { authSelector } from '../../redux/slices/auth.slice';
import { AppDispatch } from '../../redux/store';
import './login.scss';

export interface LoginState {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch<AppDispatch>();
  const { loading, isAuthenticated, user } = useSelector(authSelector);
  const navigate = useNavigate();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/home' } };

  const handleLogin = async (data: LoginState) => {
    try {
      dispatch(login(data)).then((res) => {
        if (res.type.includes('fulfilled')) {
          form.resetFields();
          message.success('Đăng nhập thành công');
          navigate(from, { replace: true });
        }
      });
    } catch (error) {}
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
          <LoginButton type="submit">Đăng nhập</LoginButton>
        </Form>
      </div>

      {loading && <Loading />}
    </div>
  );
};

export default Login;
