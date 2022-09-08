import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import verifiedIcon  from '../assets/Group7536.svg';


export const OrderReviewCards = (props) => {
  return (
    <>
       <div className='card-main'>
       <div className='card-detail-with-icon'>
            <div className="card-icon">
                 <img src={props.iconUrl} alt="" />
            </div>
            <div className="detail-info">
                <h6 className='card-heading'>{props.heading}</h6>
                <h6 className='card-sub-heading'>{props.subheading}</h6>
                <div className='verified-contact'>
                <p className='card-text'>{props.text}</p>
                
                </div>
            </div>
        </div>
        <div>
            { props.btn ?<button className="card-btn" onClick={props.onClick}>
            Edit  <KeyboardArrowDownIcon />
            </button> :""}
            { props.verified? <img src={verifiedIcon} alt="" /> :""}
        </div>
        
       </div>
    </>

  )
}
