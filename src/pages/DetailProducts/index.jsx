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
                  Thêm vào giỏ
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="detailProduct-body">
          <div className="detailProduct-content">
            <h3>Thông tin sản phẩm</h3>

            <div className="detailProduct-content-wrap">
              <p>
                <b>
                  <u>Thông tin sản phẩm:</u>
                </b>
                <br />
                Được đưa vào một thế giới kỳ diệu với Disney Beauty and the Beast Rose Ring. Lấy cảm
                hứng từ bông hồng mê hoặc trong bộ phim, chiếc nhẫn có một bông hồng đá zirconia
                hình khối màu đỏ ở trung tâm của dải, được bao quanh bởi những chiếc lá và cành cong
                cùng với ba viên đá đỏ nhỏ hơn. Kỷ niệm tình yêu không hoàn hảo nhưng kỳ diệu giữa
                Belle và Quái vật của Disney, chiếc nhẫn tạo nên một sự bổ sung trang nhã, kỳ quái
                cho mọi diện mạo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProducts;
