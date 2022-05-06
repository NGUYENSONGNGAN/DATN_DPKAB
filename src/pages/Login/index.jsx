import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import './styles.scss';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Login = () => {
  
  return (
    <div className="login">
      <div className="row">
        <div className="col-md-12 d-flex justify-content-around">
          <div className="customer-login">
            <div id="login">
              <div className="login-tit">
                <h1>Đăng nhập</h1>
              </div>
              <form action="" id="customer_login" >
                <Input size="large" placeholder="Email" prefix={<UserOutlined />} />
                <Input
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
                <Button className="mt-3 fw-bold" size="large" block>
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
