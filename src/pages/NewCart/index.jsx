import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartEmpty from '../../components/CartEmpty';
import ItemCart from '../../components/ItemCart';
import { formatPrice, getCartItemsInfo, getProductById } from '../../utils/products';
import './styles.scss';

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems.value);

  const [cartProducts, setCartProdutcs] = useState(getCartItemsInfo(cartItems));
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setCartProdutcs(getCartItemsInfo(cartItems));
    setTotalPrice(
      getCartItemsInfo(cartItems).reduce((total, item) => {
        return total + Number(item.quantity) * Number(item.product.price);
      }, 0)
    );
  }, [cartItems]);

  // let item = getProductById(1);
  return (
    <div className="cart">
      <div className="container">
        <div className="cart-title">
          <h1>Giỏ hàng của bạn</h1>
        </div>
        {cartItems.length > 0 ? (
          <div className="cart-content row mt-5">
            <div className="col-md-9">
              {cartProducts.map((item) => (
                <ItemCart item={item} key={item.id} />
              ))}
            </div>

            <div className="col-md-3">
              <div className="cart-content-info">
                <div className="cart-subtotal">
                  <span>Tổng tiền </span>
                  <span className="money">{formatPrice(totalPrice)}</span>
                </div>

                <div className="check-policy">
                  <input type="checkbox" />
                  <p>
                    Khi bấm nút "Thanh toán" đồng nghĩa Khách hàng đã hiểu và đồng ý các{' '}
                    <a>Điều khoản dịch vụ</a>
                    của Pandora Việt Nam.
                  </p>
                </div>

                <div className="cart-checkout text-center">
                  <button className="button-primary" type="submit">
                    Thanh toán
                  </button>
                  <Link className="cart-continue" to="/products">
                    Tiếp tục mua sắm
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <CartEmpty />
        )}
      </div>
    </div>
  );
};

export default Cart;
