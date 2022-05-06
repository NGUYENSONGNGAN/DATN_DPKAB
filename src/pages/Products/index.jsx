import React from 'react';
import FilterProducts from '../../components/FilterProducts';
import ListProducts from '../../components/ListProducts';
import './styles.scss';/* 
import './style.css' */


const Products = () => {
 
  return (
    <div className="products">
      <div className="products-header text-center">
        <h6>Miễn phí vận chuyển cho toàn bộ đơn hàng</h6>
      </div>
      <FilterProducts />
      <ListProducts/>
     
    </div>
  );
};

export default Products;
