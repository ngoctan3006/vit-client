import { Form, Input } from 'antd';
import React, { useState } from 'react';
import { BiLockAlt } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { Loading, LoginButton } from '../../../components';

const FirstLogin: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <div className="wrap">
        <Form form={form}>
          <h3 className="title text-center mb-8">
            Chào mừng bạn đã đến với Đại gia đình VIT
          </h3>
          <p className="italic mb-8 mx-2">
            Hãy thay đổi mật khẩu mặc định của bạn để bảo vệ an toàn cho tài
            khoản nhé ^^
          </p>
          <div className="group">
            <label className="label" htmlFor="password">
              Mật khẩu mới
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
                placeholder="Mật khẩu mới"
                prefix={<BiLockAlt />}
              />
            </Form.Item>
          </div>
          <div className="group mb-15">
            <label className="label" htmlFor="cfPassword">
              Xác nhận mật khẩu
            </label>
            <Form.Item
              name="cfPassword"
              rules={[
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('Mật khẩu không khớp'));
                  },
                }),
              ]}
              hasFeedback
            >
              <Input.Password
                id="cfPassword"
                size="large"
                placeholder="Xác nhận mật khẩu"
                prefix={<BiLockAlt />}
              />
            </Form.Item>
          </div>
          <LoginButton type="submit">đổi mật khẩu</LoginButton>
        </Form>
      </div>

      {loading && <Loading />}
    </div>
  );
};

export default FirstLogin;
