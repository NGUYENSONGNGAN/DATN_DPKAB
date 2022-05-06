import React, { useEffect } from 'react';
import CartContainer from './CartContainer';
import { useDispatch, useSelector } from 'react-redux';
import NavCart from './NavCart';
import { calculateTotals } from './features/cartSlice';
import Modal from './Modal';

function Cart() {
 /*  const { cartItem } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItem]); */
  return (
    <>
       <Modal />
      <NavCart />
      <CartContainer />
    </>
  );
}

export default Cart;
