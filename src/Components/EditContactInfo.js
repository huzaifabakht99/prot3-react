import { Radio } from '@mui/material'
import React from 'react'
import MyFormControlLabel from '@mui/material/FormControlLabel';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';



export const EditContactInfo = (props) => {
  return (
    <>
    <div className='drawer-main'>
        <div className='contactInfo'>
            <div className='edit-drawer-header'>
                <h5 className='drawer-heading'>Contact Info</h5>
                <a>
                    <CloseRoundedIcon className='clear'/>
                </a>
            </div>
            <MyFormControlLabel  label={props.contact} value={props.contact} control={<Radio />} />

            

        </div>
        <div className='drawer-btn-div'>
            <a className="addnew-btn" >+Add New</a>
            <button class="edit-drawer-done-btn">Done</button>
        </div>
    </div>
    
    </>
  )
}
