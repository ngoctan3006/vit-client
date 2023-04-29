import { Button, Input } from 'antd';
import React from 'react';
import { BiLockAlt } from 'react-icons/bi';
import { FaRegUser } from 'react-icons/fa';
import './login.scss';
import LogginButton from '../../components/LoginButton';

const LoginPage: React.FC = () => {
  return (
    <div className="login-container">
      <div className="wrap">
        <form>
          <h3 className="title text-center">Đăng nhập</h3>
          <div className="group">
            <label className="label" htmlFor="username">
              Tên đăng nhập
            </label>
            <Input
              size="large"
              placeholder="Tên đăng nhập"
              prefix={<FaRegUser />}
            />
          </div>
          <div className="group">
            <label className="label" htmlFor="password">
              Mật khẩu
            </label>
            <Input.Password
              size="large"
              placeholder="Mật khẩu"
              prefix={<BiLockAlt />}
            />
          </div>
          <div className="text-right">
            <Button type="text">Quên mật khẩu?</Button>
          </div>
          <LogginButton onClick={() => console.log('hello world')}>
            Đăng nhập
          </LogginButton>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
