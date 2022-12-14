import React from 'react'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import gif from '../assets/3-steps.gif'
import { OrderReviewCards } from '../Components/OrderReviewCards';
import { TotalCard } from '../Components/TotalCard';
import homeIcon from "../assets/Group 7492.svg"
import phoneIcon from "../assets/Group 7545.svg"
import deliveryIcon from"../assets/Group 7491.svg"
import paymentIcon from "../assets/Group 7490.svg"
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: "#E72E80",
    },
  },
});
export const OrderDetail = () => {
  return (
    <>
    <ThemeProvider theme={theme}>
      <div className="menu-bar" >
        <KeyboardBackspaceRoundedIcon className="clear"/>
        <h3 className="h3">Order # 564778</h3>
        <CloseRoundedIcon className='clear'/>
    </div>
      <div classNameName='orderDetail-main'>

        {/* <h2>Order Detail</h2> */}
        <img className='gif' src={gif} alt='gif'/>
        <h4 className='detail-heading'>You’ve Provided the following details:</h4>
        <div className='card-border'>
          <OrderReviewCards heading={'Contact'} subheading={'card'} iconUrl={phoneIcon} text={"03305281803"} verified={true} btn={false}/>
          <OrderReviewCards heading={'Shipping Info'} subheading={'card'} iconUrl={homeIcon} text={"03305281803"} verified={false} btn={false}/>
          <OrderReviewCards heading={'Delivery Type'} subheading={'card'} iconUrl={deliveryIcon} text={"03305281803"} verified={false} btn={false}/>
          <OrderReviewCards heading={'Payment Method'} subheading={'card'} iconUrl={paymentIcon} text={"03305281803"} verified={false} btn={false}/>
        </div>
        <div className='card-border'>
        <TotalCard/>

        </div>
        <FormControlLabel className='ReturningUser-checkBox' control={<Checkbox defaultChecked />} label="Save my information with 1-Click Checkout for a faster checkout next time" />
          <div className='termsNpolicy'>
              By clicking Pay, you agree to create a 1-Click Checkout account under our <span className='terms'>Terms</span> of Use and <span className='policy'>Privacy Policy</span>
          </div>
      </div>
      <div class="dummy-div"></div>
    </ThemeProvider>
    </>
  )
}


