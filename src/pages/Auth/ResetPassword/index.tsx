import { Alert, Form, Input, message } from 'antd';
import React, { useEffect, useState } from 'react';
import { BiLockAlt } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { Loading, LoginButton } from '../../../components';
import { checkTokenAPI, resetPasswordAPI } from '../../../services/auth';

export interface ResetPasswordState {
  token?: string;
  password?: string;
  cfPassword?: string;
}

const ResetPassword: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const navigate = useNavigate();
  const token = new URLSearchParams(window.location.search)
    .get('token')
    ?.split(' ')
    .join('+');

  const checkValidToken = async () => {
    try {
      setLoading(true);
      await checkTokenAPI(token!);
    } catch (error) {
      setIsValid(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkValidToken();
  }, []);

  const handleResetPassword = async (data: ResetPasswordState) => {
    try {
      setLoading(true);
      const res = await resetPasswordAPI({ ...data, token });
      message.success(res.data.data.message);
      navigate('/login', { replace: true });
    } catch (error: any) {
      message.error(error.response.data.message);
      console.log(error.response.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="wrap">
        {isValid ? (
          <Form form={form} onFinish={handleResetPassword}>
            <h3 className="title text-center mb-12">Đặt lại mật khẩu</h3>
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
            <LoginButton type="submit">đặt lại mật khẩu</LoginButton>
          </Form>
        ) : (
          <>
            <Alert
              message="Error"
              description="Link đã hết hạn hoặc không hợp lệ"
              type="error"
              showIcon
            />
            <div className="text-center mt-15">
              <LoginButton
                onClick={() => navigate('/forgot-password', { replace: true })}
              >
                gửi lại email
              </LoginButton>
            </div>
          </>
        )}
      </div>

      {loading && <Loading />}
    </div>
  );
};

export default ResetPassword;
