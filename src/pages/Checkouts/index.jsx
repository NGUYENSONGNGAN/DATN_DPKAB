import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from "axios"



function CheckOuts() {

    const [age1, setAge1] = React.useState('');
    const [age2, setAge2] = React.useState('');
    const [age3, setAge3] = React.useState('');
    const [names, setNames] = React.useState([]);
    const [districts, setDistricts] = React.useState({});

    useEffect(() => {
        const fetchNames = async () => {
            axios.get("https://provinces.open-api.vn/api/?depth=3")
                .then((response) => setNames(response.data));
        }
        fetchNames();
    }, [])

    const [listH, setlistH] = useState([]);
    const [listX, setlistX] = useState([]);

    const handleChangeT = (event) => {
        setAge1(event.target.value);
        const itemFilter = names.find((item) => item.code == event.target.value);
        setlistH(itemFilter.districts)
    };
    const handleChange = (event) => {
        setAge2(event.target.value);
        const itemxa = listH.find((item) => item.code == event.target.value);
        console.log('itemxa', itemxa)
        setlistX(itemxa.wards)
        console.log('itemxa.wards', itemxa.wards)
    }
    const handleChangeP = (event) => {
        setAge3(event.target.value);
    }



    return (
        <div className='main container'>
            <div className='row'>
                <div className='box-left col-md-6'>
                    <div className="main-header">
                        <Link to='/'>
                            <h1 className="logo-text">Pandora Việt Nam</h1>
                        </Link>
                        <ul className="breadcrumb ">
                            <li className="breadcrumb-item">
                                <Link to="/cart">Giỏ hàng</Link>
                            </li>
                            <li className="breadcrumb-item breadcrumb-item-current">
                                Thông tin giao hàng
                            </li>
                        </ul>

                    </div>


                    <div className="section">
                        <div className="section-header">
                            <h2 className="section-title">Thông tin giao hàng</h2>
                        </div>
                        <div className="section-content section-customer-information no-mb">


                            <p className="section-content-text">
                                Bạn đã có tài khoản?
                                <Link to="/login">Đăng nhập</Link>
                            </p>


                            <div className="fieldset">
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        '& > :not(style)': { m: 1 },
                                    }}
                                    className='info_custom'
                                >
                                    <TextField
                                        id="demo-helper-text-misaligned"
                                        label="Họ và tên"
                                        size="small"
                                    />
                                    <div className='row' style={{ width: '100%' }}>
                                        <div className='col-md-8' style={{ padding: '0' }}><TextField id="demo-helper-text-misaligned-no-helper" label="Email" size="small" /></div>
                                        <div className='col-md-4' style={{ paddingRight: '0' }}><TextField id="demo-helper-text-misaligned-no-helper" label="Số điện thoại" size="small" /></div></div>

                                    <TextField id="demo-helper-text-misaligned-no-helper" label="Địa chỉ" size="small" />

                                </Box>

                                <div className='row'>
                                    <div className='box-left col-md-4'>
                                        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                                            <InputLabel id="demo-select-small">Tỉnh/Thành phố</InputLabel>
                                            <Select
                                                labelId="demo-select-small"
                                                id="demo-select-small"
                                                value={age1}
                                                label="Age"
                                                onChange={handleChangeT}
                                            >
                                                {names.map((item) => {
                                                    return <MenuItem value={item.code} key={item.code}>{item.name}</MenuItem>

                                                })}
                                            </Select>
                                        </FormControl>
                                    </div>
                                    <div className='box-left col-md-4'>
                                        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                                            <InputLabel id="demo-select-small">Quận huyện</InputLabel>
                                            <Select
                                                labelId="demo-select-small"
                                                id="demo-select-small"
                                                value={age2}
                                                label="Age"
                                                onChange={handleChange}
                                            >

                                                {listH.length && listH.map((item) => {
                                                    return <MenuItem value={item.code} key={item.code}>{item.name}</MenuItem>

                                                })}



                                                {/* <MenuItem value={10} key={districts.code}>{districts.name}</MenuItem> */}
                                            </Select>
                                        </FormControl>
                                    </div>
                                    <div className='box-left col-md-4'>
                                        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                                            <InputLabel id="demo-select-small">Xã/phường</InputLabel>
                                            <Select
                                                labelId="demo-select-small"
                                                id="demo-select-small"
                                                value={age3}
                                                label="Age"
                                                onChange={handleChangeP}
                                            >
                                                {listX.length && listX.map((item) => {
                                                    return <MenuItem value={item.code} key={item.code}>{item.name}</MenuItem>

                                                })}


                                            </Select>
                                        </FormControl>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="section-header">
                            <h2 className="section-title ">Phương thức thanh toán</h2>
                        </div>
                        <div className="content-box">

                            <div className="radio-wrapper content-box-row">
                                <label className="radio-label" htmlFor="payment_method_id_1002364966">
                                    <div className="radio-input payment-method-checkbox">
                                        <input type-id="4" id="payment_method_id_1002364966" className="input-radio" name="payment_method_id" type="radio" value="1002364966" />
                                    </div>
                                    <div className="radio-content-input">
                                        <img className="main-img" src="https://hstatic.net/0/0/global/design/seller/image/payment/other.svg?v=1" />
                                        <div>
                                            <span className="radio-label-primary">Chuyển khoản qua ngân hàng</span>
                                            <span className="quick-tagline hidden"></span>
                                            <span className="quick-tagline  hidden ">Buy Now, Pay Later</span>
                                        </div>
                                    </div>
                                </label>
                            </div>
                            <div className="radio-wrapper content-box-row">
                                <label className="radio-label" htmlFor="payment_method_id_1002364968">
                                    <div className="radio-input payment-method-checkbox">
                                        <input type-id="1" id="payment_method_id_1002364968" className="input-radio" name="payment_method_id" type="radio" value="1002364968" />
                                    </div>
                                    <div className="radio-content-input">
                                        <img className="main-img" src="https://hstatic.net/0/0/global/design/seller/image/payment/cod.svg?v=1" />
                                        <div>
                                            <span className="radio-label-primary">Thanh toán khi giao hàng (COD)</span>
                                            <span className="quick-tagline hidden"></span>
                                            <span className="quick-tagline  hidden ">Buy Now, Pay Later

                                            </span></div>
                                    </div>
                                </label>
                            </div>
                            <div className="radio-wrapper content-box-row">
                                <label className="radio-label" htmlFor="payment_method_id_1002373494">
                                    <div className="radio-input payment-method-checkbox">
                                        <input type-id="8" id="payment_method_id_1002373494" className="input-radio" name="payment_method_id" type="radio" value="1002373494" />
                                    </div>
                                    <div className="radio-content-input">
                                        <img className="main-img" src="https://hstatic.net/0/0/global/design/seller/image/payment/vnpay_new.svg?v=1" />
                                        <div>
                                            <span className="radio-label-primary">Thẻ ATM/Visa/Master/JCB/QR Pay qua cổng VNPAY</span>
                                            <span className="quick-tagline hidden"></span>
                                            <span className="quick-tagline  hidden ">Buy Now, Pay Later
                                            </span>
                                        </div>
                                    </div>
                                </label>
                            </div>

                            <div className="step-footer">
                                <Link className="step-footer-previous-link" to="/cart">
                                    Giỏ hàng
                                </Link>
                                <Link to='/payment'>
                                <button type="submit" className="step-footer-continue-btn btn">
                                    <span className="btn-content">Hoàn tất đơn hàng</span>
                                </button></Link>

                            </div>
                        </div>


                    </div >
                </div>
                <div className='box-right col-md-6'>
                    <div className="main-header">


                    </div>
                </div>
            </div>


        </div >
    )
}

export default CheckOuts