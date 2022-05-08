import { CloseCircleOutlined } from '@ant-design/icons';
import { Button, InputNumber } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteItem, updateItem } from '../../redux/cartItems/cartSlice';
import { formatPrice } from '../../utils/products';
import './styles.scss';

const ItemCart = ({ item }) => {
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(Number(item.quantity) * Number(item.product.price));
  function onChange(value) {
    dispatch(
      updateItem({
        id: item.id,
        quantity: value,
      })
    );
  }

  useEffect(() => {
    setTotalPrice(Number(item.quantity) * Number(item.product.price));
  }, [item]);

  const handleDelete = () => {
    dispatch(deleteItem(item.id));
  };

  return (
    <div className="itemCart">
      <img className="itemCart-img" src={item.product.img} alt="img" />

      <div className="itemCart-tit">
        <h2 className="itemCart-tit-name">{item.product.name}</h2>
        <div className="itemCart-tit-price">
          <span>Giá </span>
          <span>{formatPrice(item.product.price)}</span>
        </div>
      </div>

      <div className="itemCart-amount">
        <InputNumber min={1} max={10} defaultValue={item.quantity} onChange={onChange} />
      </div>

      <div className="itemCart-price">
        <span className="money">{formatPrice(totalPrice)}</span>
      </div>

      <div className="itemCart-remove">
        <Button
          onClick={handleDelete}
          type="danger"
          shape="circle"
          icon={<CloseCircleOutlined />}
        />
      </div>
    </div>
  );
};

export default ItemCart;
