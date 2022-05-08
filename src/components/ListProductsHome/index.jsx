import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { allProducts } from '../../assets/data/products';
import ItemProduct from '../ItemProduct';
import './styles.scss';

const ListProductsHome = () => {
  var settings = {
    className: 'center',
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  return (
    <div className="list-products container">
      <h2 className="my-3">XU HƯỚNG</h2>
      <Slider {...settings}>
        {allProducts.map((item) => (
          <ItemProduct item={item} key={item.id} />
        ))}
      </Slider>
    </div>
  );
};

export default ListProductsHome;
