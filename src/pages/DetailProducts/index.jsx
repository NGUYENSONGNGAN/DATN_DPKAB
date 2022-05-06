import React from 'react';

function DetailProducts() {
    return (
        <div className="product_detail">
            <div className="product_detail_main">
                <div className="product_detail_imgDetail">
                    <div className="group_images">
                        <img src="image/product_detail1.png" alt="" />
                    </div>

                    <div className="Share_icon_container">
                        <div className="text_title">Chia sẻ : </div>
                        <img src="image/social-facebook.svg" alt="social-facebook" className="img_first" />
                        <img src="image/social-messenger.svg" alt="social-facebook" />
                        <img src="image/social-pinterest.svg" alt="social-facebook" />
                        <img src="image/social-twitter.svg" alt="social-facebook" />
                        <img src="image/social-copy.svg" alt="social-facebook" className="img_last" />
                        <div className="styles__Separator-sc-1l4uvu3" />
                        <div className="like_info">
                            <img src="image/icons-like.svg" alt="" />
                            <span>Thích</span>
                        </div>
                    </div>
                </div>
                <div className="space_detail" />
                <div className="product_detail_content">
                    <div className="header_detail_content">
                        <div className="brand">
                            <span>Thương hiệu : </span>
                            <a href="#">perfect us</a>
                        </div>
                        <h1 className="title">
                            MÁY LÀM MÁT KHÔNG KHI HIỆU PERFECT US-0411BR HÀNG NHẬP KHẨU CHÍNH HÃNG
                        </h1>
                        <div className="below_title">
                            <div className="stars">
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                            </div>
                            <a href="#" className="number">(Xem 3 đánh giá)</a>
                            <div className="space_product_detail"> </div>
                            <div className="product_sold">Đã bán 14</div>
                        </div>
                    </div>
                    <div className="body_detail_content">
                        <div className="body_detail_content_left">
                            <div className="price_and_icon">
                                <div className="product_price">1.350.000 ₫</div>
                                <div className="banner_icon">
                                    <img src="image/img_left_body.png" alt="" width="130" height="24" className="icon" />
                                    <img
                                        src="image/question.svg"
                                        alt=""
                                        width="11"
                                        height="11"
                                        className="view_more_next"
                                    />
                                </div>
                            </div>
                            <div className="discount_coupon">
                                <div className="coupon__text">4 Mã Giảm Giá</div>
                                <div className="coupon__tags">
                                    <div className="coupon__tag">Giảm 30K</div>
                                    <div className="coupon__tag">Giảm 20K</div>
                                    <div className="coupon__tag">Giảm 50K</div>
                                    <img src="image/coupon_next.png" alt="" className="View_more_coupon" />
                                </div>

                            </div>
                            <div className="delivery_zone">
                                <div className="delivery_zone__heading">
                                    <span>Giao đến</span>
                                    <span className="address">Q. 1, P. Bến Nghé, Hồ Chí Minh</span>
                                    -
                                    <span className="address_change">Đổi địa chỉ</span>
                                </div>
                                <div className="delivery_zone__inner">
                                    <div className="shipping_info__item">
                                        <div className="shipping_info__item__header">
                                            <div className="shipping_info__item__header__logo" style={{width: '49px'}}>
                                                <img src="image/icon_tikinow.png" height="14" width="49" alt="" />
                                            </div>
                                            <div className="divider" />
                                            <div className="shipping_info__item__header__highlight">
                                                Trước 14:00 hôm nay
                                            </div>
                                        </div>
                                        <div className="shipping_info__item__note">93.000đ</div>
                                    </div>
                                    <div className="shipping_info__item">
                                        <div className="shipping_info__item__header">
                                            <div className="shipping_info__item__header__logo" style={{width: '49px'}}>
                                                <img src="image/icon_tikifast.png" height="14" width="49" alt="" />
                                            </div>
                                            <div className="divider" />
                                            <div className="shipping_info__item__header__highlight">
                                                Ngày mai, trước 23:00
                                            </div>
                                        </div>
                                        <div className="shipping_info__item__note">15.500đ (đã trừ 50K Freeship)</div>
                                    </div>
                                </div>
                            </div>
                            <div className="add_to_cart">
                                <div className="qty_and_message">
                                    <p className="lable">Số lượng</p>
                                </div>
                                <div className="group_input">
                                    <button className="disable">
                                        <img src="image/icons-remove.svg" width="20" height="20" alt="" />
                                    </button>
                                    <input type="text" defaultValue="1" />
                                    <button>
                                        <img src="image/icons-add.svg" width="20" height="20" alt="" />
                                    </button>
                                </div>
                                <div className="group_button">
                                    <button className="btn btn_add_to_cart">Chọn mua</button>
                                </div>
                            </div>
                        </div>
                        <div className="body_detail_content_right">
                            <div className="seller_info">
                                <div className="webpimg_container">
                                    <img
                                        src="image/efb7c4d0a1ccfb53b8cc32d7756295d2.jpg.webp"
                                        style={{width: '44px'}}
                                        alt=""
                                    />
                                </div>
                                <span className="seller_name">PERFECT US</span>
                            </div>
                            <div className="seller_detail">
                                <div className="item">
                                    <div className="title">
                                        <span>4.2 / 5</span>
                                        <i className="fa-solid fa-star" />
                                    </div>

                                    <div className="sub_title">85</div>
                                </div>

                                <div className="border_left" />
                                <div className="item normal">
                                    <div className="title"><span>11</span></div>
                                    <div className="sub_title">Theo dõi</div>
                                </div>
                            </div>
                            <div className="seller_action">
                                <div className="action">
                                    <img src="image/d735c33edfdc6cf6aeb6e183bec28869.png" />
                                    <span>Xem Shop</span>
                                </div>
                                <div className="action">
                                    <img src="image/eeda00767e26b5873030e44f951441c4.png" />
                                    <span>Theo Dõi</span>
                                </div>
                            </div>
                            <div className="warranty_detail">
                                <div className="warranty_item">
                                    <span className="itemLeft">Thời gian bảo hành</span>
                                    <span className="itemRight">12 Tháng</span>
                                </div>
                                <div className="warranty_item">
                                    <span className="itemLeft">Hình thức bảo hành</span>
                                    <span className="itemRight">Hóa đơn</span>
                                </div>
                                <div className="warranty_item">
                                    <span className="itemLeft">Nơi bảo hành</span>
                                    <span className="itemRight">Bảo hành chính hãng</span>
                                </div>
                                <div className="warranty_item">
                                    <span className="itemLeft">Hướng dẫn bảo hành</span>
                                    <span className="itemRight text_link ">Xem chi tiết</span>
                                </div>
                            </div>
                            <div className="Curtom_benefit">
                                <div className="benefit_item">
                                    <img alt="compensation-icon" src="image/security.png" height="32" width="32" />
                                    <span>
                                        Hoàn tiền
                                        <b>111%</b>
                                        /nếu hàng giả
                                    </span>
                                </div>
                                <div className="benefit_item">
                                    <img alt="compensation-icon" src="image/like_icon.png" height="32" width="32" />
                                    <span>Mở hộpkiểm tranhận hàng</span>
                                </div>
                                <div className="benefit_item">
                                    <img alt="compensation-icon" src="image/prev_icon.png" height="32" width="32" />
                                    <span>
                                        Đổi trả trong
                                        <b>7 ngày</b>
                                        nếu sp lỗi
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default DetailProducts;
