import React from 'react'

import MyFormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

export const DeliveryType = (props) => {
  return (
    <>
    <div className="delivery-type-box">
        {/* <input type="radio" id={props.DeliveryType} name="age" /> */}
        
        <div className="radio-div">
            <MyFormControlLabel  id={props.DeliveryType}  value={props.DeliveryType} control={<Radio />} />
            <div className="delivery-type-text-div">
            <h4 className="delivery-type-text-heading">
                <span className="delivery-type-heading-price">{props.DeliveryType}</span>
                {props.heading}
                <span className="delivery-type-heading-price">{props.price}</span>
            </h4>
            <p className="delivery-type-text-detail">
                Order within <span className="detail-date-time">6 hrs 1 min</span> to get it by 
                <span className="detail-date-time">{props.date}</span>
            </p>
            </div>
        </div>
    </div>

    <input type="radio" id="re" name="age" />


    </>
  )
}
