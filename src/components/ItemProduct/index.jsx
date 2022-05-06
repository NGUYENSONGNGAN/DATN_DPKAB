import React from 'react';
import './styles.scss';

const ItemProduct = ({ item }) => {
  return (
    <div className="item-product">
      <div className="item-product-img">
        <img src={item.img} alt="Mom Daisy Heart Charm" />
      </div>
      <div className="item-product-content">
        <span className="new-product-loop-label"></span>
        <span className="item-product-content-tit">{item.name}</span>
        <span className="item-product-content-price">{item.price}</span>
      </div>
    </div>
  );
};

export default ItemProduct;
