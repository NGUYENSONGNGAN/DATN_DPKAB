import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import ItemProduct from '../ItemProduct';
import { allProducts } from '../../assets/data/products';

function ListProducts() {
  return (
    <section className="menu container" id="menu">
      <div className="box_container ">
        {allProducts.map((item) => {
          return <ItemProduct item={item} key={item.id} />;
        })}
      </div>
    </section>
  );
}

export default ListProducts;
