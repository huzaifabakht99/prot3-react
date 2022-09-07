import React from 'react'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {  useNavigate } from 'react-router-dom';


export const Otp = () => {
  const navigate = useNavigate;
  const navToPage=()=>{
    navigate('/newuser')
  }
  return (
    <>
    <div className="otp-main">
        <div className="otp-header">
            <div className="none" />
            <div className="heading">Confirm Your Identity</div>
            <a>
            <CloseRoundedIcon className='clear'/>
            </a>
        </div>
        <hr />
        <div className="otp-body">
            <div className="otp-input">
            <input id="partitioned" type="text" maxLength={4} />{" "}
            <button onClick={()=> navToPage() } className="signIn">NewUser</button>
            <button onClick={()=> navigate('/returninguser')} className="signIn">ReturningUser</button>
            </div>
            <div className="otp-text">
            Enter the code we sent over SMS to <b>+(201) 555-0123</b>
            </div>
            <div className="resend">
            <a>Resend code in 20s</a>
            </div>
        </div>
    </div>
    </>
  )
}
