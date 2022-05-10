import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



function CheckOuts() {


    const names = [
        'Oliver Hansen',
        'Van Henry',
        'April Tucker',
        'Ralph Hubbard',
        'Omar Alexander',
        'Carlos Abbott',
        'Miriam Wagner',
        'Bradley Wilkerson',
        'Virginia Andrews',
        'Kelly Snyder',
    ];

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };



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
                                            <InputLabel id="demo-select-small">Age</InputLabel>
                                            <Select
                                                labelId="demo-select-small"
                                                id="demo-select-small"
                                                value={age}
                                                label="Age"
                                                onChange={handleChange}
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                {names.map((item) => {
                                                    return <MenuItem value={10} key={item}>{item}</MenuItem>
                                                })}
                                            </Select>
                                        </FormControl>
                                    </div>
                                    <div className='box-left col-md-4'>
                                        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                                            <InputLabel id="demo-select-small">Age</InputLabel>
                                            <Select
                                                labelId="demo-select-small"
                                                id="demo-select-small"
                                                value={age}
                                                label="Age"
                                                onChange={handleChange}
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                {names.map((item) => {
                                                    return <MenuItem value={10} key={item}>{item}</MenuItem>
                                                })}
                                            </Select>
                                        </FormControl>
                                    </div>
                                    <div className='box-left col-md-4'>
                                        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                                            <InputLabel id="demo-select-small">Age</InputLabel>
                                            <Select
                                                labelId="demo-select-small"
                                                id="demo-select-small"
                                                value={age}
                                                label="Age"
                                                onChange={handleChange}
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                {names.map((item) => {
                                                    return <MenuItem value={10} key={item}>{item}</MenuItem>
                                                })}
                                            </Select>
                                        </FormControl>
                                    </div>

                                </div>
                            </div>
                        </div>





                    </div >
                </div>
                <div className='box-right col-md-6'>
                    <div className="main-header">

                        dhdygjkuiki
                    </div>
                </div>
            </div>


        </div >
    )
}

export default CheckOuts