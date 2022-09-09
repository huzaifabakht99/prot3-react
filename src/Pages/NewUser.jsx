import React from 'react'
import { DeliveryType } from '../Components/DeliveryType';
import { Input } from '../Components/Input';
import { PaymentMethod } from '../Components/PaymentMethod';
import cardLogo from "../assets/Group 6939.svg";

import paypalLogo from "../assets/Group 6943.svg"
import klarnaLogo from "../assets/Group 7552.svg"
import amazonLogo from "../assets/Group 6969.svg"
import clearpayLogo from "../assets/Group 7551 (1).svg"
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import infoImg2 from '../assets/Page-1.svg'
import infoImg1 from "../assets/Group.svg"
import RadioGroup from '@mui/material/RadioGroup';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles'
import { Header } from '../Components/Header';
import { CartMenubar } from '../Components/CartMenubar';
import { Checkpoints } from '../Components/Checkpoints';

// import TextField from '@mui/material/TextField';
const theme = createTheme({
    palette: {
      primary: {
        main: "#E72E80",
      },
    },
  });
export const NewUser = (props) => {
  return (
    <>
    <ThemeProvider theme={theme}>

     {window.location.pathname==='/new-user' ?<Checkpoints/>:''}
    <div className='newUser-main'>
    
        {/* <CustomCheckbox defaultChecked /> */}
     
        <h2 className='newUser-headings'>1. Shipping Information</h2>
        <Input flagIcon={true} placeholder={'Email'} button={false}/>  
        <Input flagIcon={true} placeholder={'Full Name'} button={false}/> 
        <Input flagIcon={true} placeholder={'Shipping Address'} button={false}/> 
        {/* <TextField className='newUser-textField' id="outlined-basic" label="Email" variant="outlined" />
        <TextField className='newUser-textField' id="outlined-basic" label="Full Name" variant="outlined" />
        <TextField className='newUser-textField' id="outlined-basic" label="Shipping Address" variant="outlined" /> */}
        <p className='manual-address'>Enter Address Manually</p> 
        <FormControlLabel className='newUser-checkBox' control={<Checkbox defaultChecked />} label="My billing address is same as shipping." />

        <h2 className='newUser-headings'>2. Delivery Type</h2>
        {/* <div class="box disabled" >
                    <div class="required-shippingadd">Shipping options will show up once you enter shipping address</div>
                </div> */}
        <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="Standard" name="radio-buttons-group">
            <DeliveryType DeliveryType={'Standard'} heading={' (6 to 9 business days) '} price={'$5.95'} date={' Thurs, Jan 16'}/>
            <DeliveryType DeliveryType={'Express'} heading={' (6 to 9 business days) '} price={'$12.95'} date={' Mon, Jan 13'}/>
            <DeliveryType DeliveryType={'Next Day'} heading={' (6 to 9 business days) '} price={'$22.95'} date={' Thurs, Jan 09'}/>
        </RadioGroup>
        <h2 className='newUser-headings'>3. Payment Method</h2>
        <RadioGroup aria-labelledby="demo-radio-buttons-group-label"  name="radio-buttons-group">
            <PaymentMethod className='newUser-payment-method' imgUrl={cardLogo} plan={'PAY FULL'} value={'card'}/>
            <PaymentMethod className='newUser-payment-method' imgUrl={paypalLogo} plan={'PAY FULL'} value={'paypal'}/>
            <PaymentMethod className='newUser-payment-method' imgUrl={klarnaLogo} plan={'PAY PLAN'} value={'klarna'}/>
            <PaymentMethod className='newUser-payment-method' imgUrl={clearpayLogo} plan={'PAY PALN'} value={'clearpay'}/>
            <PaymentMethod className='newUser-payment-method' imgUrl={amazonLogo} plan={'PAY FULL'} value={'amazon'}/>
        </RadioGroup>
        <div className="promo-input-feild">
            <input className="promo-feild" matinput="" placeholder=" Enter Promo Code" />
            <button className="verify">Apply</button>
        </div>
        <div className="promo">
            {/* <img src="../../assets/Promo Code Added! Please review your order detail for updated cart before making the payment..svg" alt=""> */}
            <div className="promo-text">
            Promo Code Added! Please review your order detail for updated cart before
            making the payment.
            </div>
        </div>
        <div className="info">
            <img id="info-img" src={infoImg1} alt="" />
            <div className="info-text">
            We will set this payment method as your default, that you can change
            later.
            <img
                className="info-img-2"
                src={infoImg2}
                alt=""
            />
            </div>
        </div>
        
    </div>
    <div class="dummy-div"></div>
    {/* <footer  className='cartFixed'><CartMenubar/></footer> */}
    </ThemeProvider>



    </>
  )
}
