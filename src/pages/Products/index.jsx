import React from 'react';
import FilterProducts from '../../components/FilterProducts';
import ListProducts from '../../components/ListProducts';
import Title from '../../components/Title';
import './styles.scss'; /* 
import './style.css' */

const Products = () => {
  return (
    <div className="products">
      <Title title="Miễn phí vận chuyển cho toàn bộ đơn hàng" />
      <FilterProducts />
      <ListProducts />
    </div>
  );
};

export default Products;
