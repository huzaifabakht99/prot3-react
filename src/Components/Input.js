import { Button, Drawer, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Otp } from './Otp'





export const Input = (props) => {
  const [isOtpOpen, setIsOtpOpen] =useState(false)
  return (
    <>
    <div className="input-div">
       {props.flagIcon ? <img className="icon-flag" src={props.flagIconUrl} alt="" />:""}
        <input type="text" placeholder={props.placeholder}/>
        {props.button ?<button onClick={()=> setIsOtpOpen(true)} variant='contained' className="signin-button">Enter</button> :""}
    </div>
    <Drawer anchor='bottom' open={isOtpOpen} onClose={ ()=> setIsOtpOpen(false)}>
      <Otp/>
    </Drawer>
    </>
  )
}


