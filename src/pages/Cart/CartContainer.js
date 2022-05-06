import React from 'react';
import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem';

import { openModal } from './features/modalSlice';
function CartContainer() {
  const dispatch = useDispatch();

  const { cartIterm, total, amount } = useSelector((state) => state.cart);

  if (amount < 1 || !cartIterm) {
    return (
      <section className="cart">
        <header>
          <h2>Your Bangle</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cartIterm.map((item) => {
          return <CartItem key={item.MaSanPham} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={() => dispatch(openModal())}>
          clear cart
        </button>
      </footer>
    </section>
  );
}

export default CartContainer;
