import { Form, Input, message } from 'antd';
import { Loading, LoginButton } from 'components';
import React, { useEffect, useState } from 'react';
import { BiLockAlt } from 'react-icons/bi';
import { useLocation, useNavigate } from 'react-router-dom';
import { active } from 'redux/slices/auth.slice';
import { useAppDispatch } from 'redux/store';
import { firstLogin } from 'services/auth';
import { COMMON } from 'src/constants';

export interface FirstLogin {
  password?: string;
  cfPassword?: string;
}

const FirstLogin: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/home' } };
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = localStorage.getItem(COMMON.ACCESS_TOKEN);
    if (!token) navigate('/login', { replace: true });
  }, []);

  const handleChangePassword = async (data: FirstLogin) => {
    try {
      setLoading(true);
      const res = await firstLogin(data);
      message.success(res.data.data.message);
      dispatch(active());
      navigate(from, { replace: true });
    } catch (error: any) {
      message.error(error.response.data.message);
      navigate('/login', { replace: true });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="wrap">
        <Form form={form} onFinish={handleChangePassword}>
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
