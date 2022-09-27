import React, { useState } from 'react'
import { OrderReviewCards } from '../Components/OrderReviewCards'
import { TotalCard } from '../Components/TotalCard'
import homeIcon from "../assets/Group 7492.svg"
import phoneIcon from "../assets/Group 7545.svg"
import deliveryIcon from"../assets/Group 7491.svg"
import paymentIcon from "../assets/Group 7490.svg"
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Drawer } from '@mui/material'
import { EditContactInfo } from '../Components/EditContactInfo'
import { EditShippingAddress } from '../Components/EditShippingAddress'
import { EditDeliveryType } from '../Components/EditDeliveryType'
import { EditPaymentMethod } from '../Components/EditPaymentMethod'
import { CartMenubar } from '../Components/CartMenubar'

// import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';


const theme = createTheme({
    palette: {
      primary: {
        main: "#E72E80",
      },
    },
  });
export const ReturningUser = () => {
  const [isEditContactOpen, setIsEditContactOpen] = useState(false)
  const [isEditShippingOpen, setIsEditShippingOpen] = useState(false)
  const [isEditDeliveryOpen, setIsEditDeliveryOpen] = useState(false)
  const [isEditPaymentOpen, setIsEditPaymentOpen] = useState(false)
  return (
    <>
     <ThemeProvider theme={theme}>
    <div className='returningUser-main'>
        <h2 className='returningUser-heading'>Order Review</h2>
        <div className='card'>
        <OrderReviewCards heading={'Contact'} subheading={'card'} onClick={()=>setIsEditContactOpen(true)} iconUrl={phoneIcon} text={"03305281803"} btn={true} verified={false}/>
        </div>
        <div className='card'>
        <OrderReviewCards heading={'Shipping Info'} subheading={'card'} onClick={()=>setIsEditShippingOpen(true)} iconUrl={homeIcon} text={"03305281803"} btn={true} verified={false}/>
        </div>
        <div className='card'>
        <OrderReviewCards heading={'Delivery Type'} subheading={'card'} onClick={()=>setIsEditDeliveryOpen(true)} iconUrl={deliveryIcon} text={"03305281803"} btn={true} verified={false}/>
        </div>
        <div className='card'>
        <OrderReviewCards heading={'Payment Method'} subheading={'card'} onClick={()=>setIsEditPaymentOpen(true)} iconUrl={paymentIcon} text={"03305281803"} btn={true} verified={false}/>
        </div>
        <div className='card'>
        <TotalCard/>
        </div>
        <FormControlLabel className='ReturningUser-checkBox' control={<Checkbox defaultChecked />} label="Save my information with 1-Click Checkout for a faster
checkout next time" />
        <div className='termsNpolicy'>
            By clicking Pay, you agree to create a 1-Click Checkout account under our <span className='terms'>Terms</span> of Use and <span className='policy'>Privacy Policy</span>
        </div>





    </div>
    <div class="dummy-div"></div>
    {/* <footer  className='cartFixed'><CartMenubar/></footer> */}
    <Drawer anchor='bottom' open={isEditContactOpen} onClose={ ()=> setIsEditContactOpen(false)}>
    
        <EditContactInfo/>
    </Drawer>
    <Drawer  anchor='bottom' open={isEditShippingOpen} onClose={ ()=> setIsEditShippingOpen(false)}>
    
     <EditShippingAddress/>
    </Drawer>
    <Drawer  anchor='bottom' open={isEditDeliveryOpen} onClose={ ()=> setIsEditDeliveryOpen(false)}>
    
      <EditDeliveryType/>
    </Drawer>
    <Drawer  anchor='bottom' open={isEditPaymentOpen} onClose={ ()=> setIsEditPaymentOpen(false)}>
      <EditPaymentMethod/>

    </Drawer>

    </ThemeProvider>
    </>
  )
}
