import React from 'react';
import './styles.scss';
import { Menu, Dropdown, Space } from 'antd';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';

const FilterProducts = () => {
  const menu = (
    <Menu
      items={[
        {
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
              1st menu item
            </a>
          ),
        },
        {
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
              2nd menu item (disabled)
            </a>
          ),
          icon: <SmileOutlined />,
          disabled: true,
        },
        {
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
              3rd menu item (disabled)
            </a>
          ),
          disabled: true,
        },
        {
          danger: true,
          label: 'a danger item',
        },
      ]}
    />
  );

  return (
    <div className="filterProducts">
      <div className="filterProducts-container">
        <div className="d-flex justify-content-between">
          <div className="filterProducts-filter">
            <Dropdown overlay={menu}>
              <Space>
                Danh mục
                <DownOutlined />
              </Space>
            </Dropdown>
          </div>
          <div className="filterProducts-sort"></div>
        </div>
      </div>
    </div>
  );
};

export default FilterProducts;
