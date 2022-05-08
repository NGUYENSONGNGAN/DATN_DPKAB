import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import './styles.scss';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useCookies } from 'react-cookie';

const Login = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });

    console.log(values);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        'http://localhost:4000/login',
        { ...values },
        { withCredentials: true }
      );
      if (data) {
        alert('Dang nhap thanh cong!');
        navigate('/');
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [cookies] = useCookies(['cookie-name']);
  useEffect(() => {
    if (cookies.jwt) {
      navigate('/');
    }
  }, [cookies, navigate]);
  return (
    <div className="login">
      <div className="row">
        <div className="col-md-12 d-flex justify-content-around">
          <div className="customer-login">
            <div id="login">
              <div className="login-tit">
                <h1>Đăng nhập</h1>
              </div>
              <form id="customer_login">
                <Input
                  name="email"
                  size="large"
                  placeholder="Email"
                  prefix={<UserOutlined />}
                  onChange={handleChange}
                />
                <Input
                  onChange={handleChange}
                  name="password"
                  className="mt-3"
                  size="large"
                  placeholder="Mật khẩu"
                  prefix={<LockOutlined />}
                />
                <div className="d-flex req_pass">
                  <Link to="/">Quên mật khẩu?</Link>
                  <span className="fw-lighter">hoặc</span>
                  <Link to="/register">Đăng ký</Link>
                </div>
                <Button onClick={handleSubmit} className="mt-3 fw-bold" size="large" block>
                  ĐĂNG NHẬP
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
