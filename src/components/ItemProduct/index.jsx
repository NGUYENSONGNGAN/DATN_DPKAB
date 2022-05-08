import React from 'react';
import { Link } from 'react-router-dom';
import { formatPrice } from '../../utils/products';
import './styles.scss';

const ItemProduct = ({ item }) => {
  return (
    <div>
      <Link to={`/detailProduct/${item.id}`}>
        <div className="item-product">
          <div className="item-product-img">
            <img src={item.img} alt="Mom Daisy Heart Charm" />
          </div>
          <div className="item-product-content">
            <span className="new-product-loop-label"></span>
            <span className="item-product-content-tit">{item.name}</span>
            <span className="item-product-content-price">{formatPrice(item.price)}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ItemProduct;
