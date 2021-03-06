import React from 'react';
import InnerImageZoom from 'react-inner-image-zoom';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addItem } from '../../redux/cartItems/cartSlice';
import { formatPrice, getProductById } from '../../utils/products';
import './styles.scss';

const DetailProducts = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  let productById = getProductById(id);

  console.log(productById);

  const addProduct = () => {
    dispatch(
      addItem({
        id: id,
      })
    );
  };

  return (
    <div className="detailProduct">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="detailProduct-img">
              <InnerImageZoom src={productById.img} zoomSrc={productById.img} />
              {/* <InnerImageZoom
                src="https://product.hstatic.net/200000103143/product/upload_341427505f9741a39c524cb8be3fc261_master.jpg"
                zoomSrc="https://product.hstatic.net/200000103143/product/upload_341427505f9741a39c524cb8be3fc261_master.jpg"
              />
              <InnerImageZoom
                src="https://product.hstatic.net/200000103143/product/upload_341427505f9741a39c524cb8be3fc261_master.jpg"
                zoomSrc="https://product.hstatic.net/200000103143/product/upload_341427505f9741a39c524cb8be3fc261_master.jpg"
              />
              <InnerImageZoom
                src="https://product.hstatic.net/200000103143/product/upload_341427505f9741a39c524cb8be3fc261_master.jpg"
                zoomSrc="https://product.hstatic.net/200000103143/product/upload_341427505f9741a39c524cb8be3fc261_master.jpg"
              /> */}
            </div>
          </div>

          <div className="col-md-4">
            <div className="detailProduct-info">
              <div className="detailProduct-info-lable">
                <span></span>
              </div>

              <h1 className="detailProduct-info-title">{productById.name}</h1>

              <div className="detailProduct-info-price text-center">
                <b>{formatPrice(productById.price)}</b>
              </div>

              <div className="detailProduct-info-action">
                <button onClick={addProduct} id="addcart">
                  Th??m v??o gi???
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="detailProduct-body">
          <div className="detailProduct-content">
            <h3>Th??ng tin s???n ph???m</h3>

            <div className="detailProduct-content-wrap">
              <p>
                <b>
                  <u>Th??ng tin s???n ph???m:</u>
                </b>
                <br />
                ???????c ????a v??o m???t th??? gi???i k??? di???u v???i Disney Beauty and the Beast Rose Ring. L???y c???m
                h???ng t??? b??ng h???ng m?? ho???c trong b??? phim, chi???c nh???n c?? m???t b??ng h???ng ???? zirconia
                h??nh kh???i m??u ????? ??? trung t??m c???a d???i, ???????c bao quanh b???i nh???ng chi???c l?? v?? c??nh cong
                c??ng v???i ba vi??n ???? ????? nh??? h??n. K??? ni???m t??nh y??u kh??ng ho??n h???o nh??ng k??? di???u gi???a
                Belle v?? Qu??i v???t c???a Disney, chi???c nh???n t???o n??n m???t s??? b??? sung trang nh??, k??? qu??i
                cho m???i di???n m???o.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProducts;
