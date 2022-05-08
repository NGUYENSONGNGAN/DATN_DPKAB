import React, {useEffect, useState} from 'react';
import { Input, Button } from 'antd';
import { LockOutlined, PhoneOutlined, SolutionOutlined, UserAddOutlined, UserOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { useCookies } from 'react-cookie';

const Register = () => {
  const navigate = useNavigate()
  const [values, setValues] = useState({name:  "", email: "", password: "", address: "",phoneNumber: ""})

  const handleChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value })

    console.log(values)
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {data} = await axios.post("http://localhost:4000/register", {...values}, { withCredentials: true })
      if(data) {
        alert("Dang ky thanh cong!")
        navigate("/")
      }
    } catch (error) {
      console.log(error)
    }
  }

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
                <h1>Đăng ký</h1>
              </div>
              <form id="customer_login">
                <Input name="name" size="large" placeholder="Họ và Tên" prefix={<UserAddOutlined />} onChange={handleChange} />
                <Input name="email" className="mt-3" size="large" placeholder="Email" prefix={<UserOutlined />} onChange={handleChange}/>
                <Input
                  className="mt-3"
                  name="address"
                  size="large"
                  placeholder="Địa chỉ"
                  prefix={<SolutionOutlined />}
                  onChange={handleChange}
                />
                <Input
                name="phoneNumber"
                  className="mt-3"
                  size="large"
                  placeholder="Số điện thoại"
                  prefix={<PhoneOutlined />}
                  onChange={handleChange}
                />
                <Input
                name="password"
                  className="mt-3"
                  size="large"
                  placeholder="Mật khẩu"
                  prefix={<LockOutlined />}
                  onChange={handleChange}
                />
                <div className="d-flex req_pass justify-content-end">
                  <Link to="/login">Đăng nhập</Link>
                </div>
                <Button onClick={handleSubmit} className="mt-3 fw-bold" size="large" block>
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
