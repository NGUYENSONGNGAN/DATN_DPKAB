import React from 'react';
import './styles.scss';
import { Menu, Dropdown, Space, Checkbox, Row, Col } from 'antd';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';

const FilterProducts = () => {
  function onChange(checkedValues) {
    console.log('checked = ', checkedValues);
  }
  const danhmuc = (
    <div className="list-dropdown">
      <Checkbox.Group className="list-dropdown-group" style={{ width: '100%' }} onChange={onChange}>
        <Checkbox value="A">A</Checkbox>
        <Checkbox value="B">B</Checkbox>
        <Checkbox value="C">C</Checkbox>
        <Checkbox value="D">D</Checkbox>
        <Checkbox value="E">E</Checkbox>
      </Checkbox.Group>
    </div>
  );

  const price = (
    <div className="list-dropdown">
      <Checkbox.Group className="list-dropdown-group" style={{ width: '100%' }} onChange={onChange}>
        <Checkbox value="A">Dưới 1,000,000₫</Checkbox>
        <Checkbox value="B">1,000,001₫ - 2,000,000₫</Checkbox>
        <Checkbox value="C">2,000,001₫ - 3,000,000₫</Checkbox>
        <Checkbox value="D">3,000,001₫ - 4,000,000₫</Checkbox>
        <Checkbox value="E">Trên 4,000,000₫</Checkbox>
      </Checkbox.Group>
    </div>
  );

  return (
    <div className="filterProducts">
      <div className="container">
        <div className="d-flex justify-content-between">
          <div className="filterProducts-filter">
            <Dropdown overlay={danhmuc}>
              <Space>
                Danh mục
                <DownOutlined />
              </Space>
            </Dropdown>
            <Dropdown overlay={price} className="ms-3">
              <Space>
                Giá
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
