import React from 'react';
import { ChevronDown, ChevronUp } from './icons';
import './CartItem.css';
import { useDispatch } from 'react-redux';
import { removeItem, increase, decrease } from './features/cartSlice';

function CartItem(cartItem) {
  const dispatch = useDispatch();
  return (
    <article className="cart-item">
      <img src={cartItem.HinhAnh[0]} alt={cartItem.tenSanPham} />
      <div>
        <h4>{cartItem.tenSanPham}</h4>
        <h4 className="item-price">${cartItem.donGiaMoi}</h4>
        <button
          className="remove-btn"
          onClick={() => {
            dispatch(removeItem(cartItem.MaSanPham));
          }}
        >
          remove
        </button>
      </div>
      <div>
        <button
          className="amount-btn"
          onClick={() => {
             dispatch(increase(cartItem.MaSanPham));
          }}
        >
          <ChevronUp />
        </button>
        <p className="amount">{cartItem.SoLuong}</p>

        <button
          className="amount-btn"
          onClick={() => {
            if (cartItem.SoLuong === 1) {
              dispatch(removeItem(cartItem.MaSanPham));
              return;
            }
            dispatch(decrease(cartItem.MaSanPham));
          }}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
}

export default CartItem;
