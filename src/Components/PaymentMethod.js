import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MyFormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { Input } from './Input';

export const PaymentMethod = (props) => {
  return (
    <>
    <div className="payment-method-div">
        <div className='img-div'>
        <MyFormControlLabel  id={props.DeliveryType}  value={props.value} control={<Radio />} />
            <img src={props.imgUrl} alt="" />
        </div>
        <div className='palns-div'>
            <div className="plans">{props.plan}</div>
          <div>  <KeyboardArrowDownIcon className='paymentMethod-icon'/></div>
        </div>
    </div>

    </>
  )
}
