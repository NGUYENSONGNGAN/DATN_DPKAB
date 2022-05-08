import React, { useEffect, useState } from 'react';
import './styles.scss';
import { DownOutlined, SearchOutlined } from '@ant-design/icons';
import { BiMap, BiUser, BiShoppingBag } from 'react-icons/bi';
import { Badge, Button, Dropdown, Menu, Space } from 'antd';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import { useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';
import axios from 'axios';
const mainNav = [
  {
    display: 'Trang chủ',
    path: '/',
  },
  {
    display: 'Sản phẩm',
    path: '/products',
  },
  {
    display: 'Giới thiệu',
    path: '/accessories',
  },
  {
    display: 'Liên hệ',
    path: '/contact',
  },
];
const Header = () => {
  const cartItems = useSelector((state) => state.cartItems.value);
  const [user, setUser] = useState('');

  const [cookies, setCookie, removeCookie] = useCookies(['name']);

  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies.jwt) {
      } else {
        const data = await axios.post(
          'http://localhost:4000/checkUser',
          {},
          { withCredentials: true }
        );

        console.log(data);
        if (data.data) {
          setUser(data.data.user);
        }
      }
    };

    verifyUser();
  }, [cookies]);

  const handleLogout = () => {
    removeCookie('jwt');
    setUser('');
  };
  const menu = (
    <Menu
      items={[
        {
          label: <span onClick={handleLogout}>Đăng xuất</span>,
          key: '0',
        },
      ]}
    />
  );
  return (
    <div className="header">
      <div className="header_container container">
        <Link to="/" className="Header_logo">
          <img src={logo} width="150" height="50" alt="logo" />
        </Link>
        <div className="header_action">
          <div className="action_search">
            <div className="form_group search-input-wrap">
              <input type="text" className="form-control" placeholder="Tìm sản phẩm..." />
              <Button
                className="btn_search"
                type="primary"
                shape="circle"
                icon={<SearchOutlined />}
              />
            </div>
            <div className="iconRightHeaderContainer">
              <div className="iconRightHeader icon_mapHeader">
                <BiMap className="iconRightHeaderitem" />
              </div>
              {user ? (
                <Dropdown overlay={menu} trigger={['click']}>
                  <Space style={{ cursor: 'pointer' }}>
                    {user}
                    <DownOutlined />
                  </Space>
                </Dropdown>
              ) : (
                <Link to="/login" className="iconRightHeader icon_userHeader">
                  <BiUser className="iconRightHeaderitem" />
                </Link>
              )}

              <Link to="/cart" className="iconRightHeader icon_shopingbagHeader">
                <Badge count={cartItems.length}>
                  <BiShoppingBag className="iconRightHeaderitem" />
                </Badge>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex list-menu container">
        {mainNav.map((item, index) => (
          <Link to={item.path} key={index} className="menu-item">
            {item.display}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
