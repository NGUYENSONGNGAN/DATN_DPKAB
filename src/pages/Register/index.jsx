import React from 'react';
import { Input, Button } from 'antd';
import { LockOutlined, PhoneOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="login">
      <div className="row">
        <div className="col-md-12 d-flex justify-content-around">
          <div className="customer-login">
            <div id="login">
              <div className="login-tit">
                <h1>Đăng ký</h1>
              </div>
              <form action="" id="customer_login">
                <Input size="large" placeholder="Email" prefix={<UserOutlined />} />
                <Input
                  className="mt-3"
                  size="large"
                  placeholder="Địa chỉ"
                  prefix={<SolutionOutlined />}
                />
                <Input
                  className="mt-3"
                  size="large"
                  placeholder="Số điện thoại"
                  prefix={<PhoneOutlined />}
                />
                <Input
                  className="mt-3"
                  size="large"
                  placeholder="Mật khẩu"
                  prefix={<LockOutlined />}
                />
                <div className="d-flex req_pass justify-content-end">
                  <Link to="/login">Đăng nhập</Link>
                </div>
                <Button className="mt-3 fw-bold" size="large" block>
                  ĐĂNG Ký
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
