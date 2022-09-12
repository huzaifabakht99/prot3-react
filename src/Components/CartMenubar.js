import React, { useState } from 'react'
import TrendingFlatRoundedIcon from '@mui/icons-material/TrendingFlatRounded';
import Drawer from '@mui/material/Drawer';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';
import thumbnail from "../assets/Rectangle 206 (1).svg"
import remove from "../assets/Group 697.svg"
import { O3ds } from '../Components/O3ds'
import { Cart } from './Cart';
import { Dialog } from '@mui/material';

export const CartMenubar = (props) => {
    
  const [is3dsOpen, setIs3dsOpen] =useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  return (
    <>
    <div className="main">
        <button onClick={()=> setIsCartOpen(true)} className="price-btn"><div></div> $360 <KeyboardArrowUpIcon className='right-icon'/></button>
        <button className="buy-btn" onClick={()=> setIs3dsOpen(true)}>Buy<TrendingFlatRoundedIcon/></button>
    </div>
    <Drawer sx={{
        borderRadius:'5px',
        position:'absolute',
        bottom:'100px'
    }} anchor='bottom' open={isCartOpen} onClose={ ()=> setIsCartOpen(false)}>
    
        <Cart/>
    </Drawer>
    {/* <Drawer anchor='bottom' open={is3dsOpen} onClose={ ()=> setIs3dsOpen(false)}>
      <O3ds/>
      
    </Drawer> */}

<Dialog
        open={is3dsOpen}
        onClose={()=> setIs3dsOpen(false)}
      >
       <O3ds/>
      </Dialog>
   
    </>
  )
}
