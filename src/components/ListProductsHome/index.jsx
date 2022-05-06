import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import ItemProduct from '../ItemProduct';
import { dataProducts } from './data';
import './styles.scss';

const ListProductsHome = () => {
  var settings = {
    className: 'center',
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    autoplay: true,
   autoplaySpeed: 1000,
  };
  return (
    <div className="list-products">
      <h2 className="my-3">XU HƯỚNG</h2>
      <Slider {...settings}>
        {dataProducts.map((item) => (
          <Link to="/" key={item.id}>
            <ItemProduct item={item} />
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default ListProductsHome;
