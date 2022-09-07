import React, { useEffect } from 'react'
import { Checkpoints } from '../Components/Checkpoints'
import { Input } from '../Components/Input'
import { NewUser } from './NewUser'
import lockImg from "../assets/Group 7483.svg" 
import flagIcon from '../assets/flag.svg'
import { OrderReviewCards } from '../Components/OrderReviewCards'
import { CartMenubar } from '../Components/CartMenubar'

export const SignIn = () => {
    useEffect(() => {
        console.log(window.location.pathname);
        if(window.location.pathname==='/'){

        }

       }, [])
  return (
    <>
        <div className='signIn-main'>
       
            <Checkpoints/>
            <div className='signIn-div'>
                <h2 className='signIn-heading'>Start Your Checkout!</h2>
                <p className='signIn-text'>Enter your phone number below to start with the checkout process.</p>
                <Input flagIconUrl={flagIcon} flagIcon={true} placeholder={'Phone Number'} button={true}/>
            </div>
            <NewUser/>
        <div className="img-lock" >
            <div className="lock">
                <img src={lockImg} alt=""/>
                <div className="lock-text">Enter your Phone number above to Sign In</div>
            </div>
            </div>

        </div>
        <div class="dummy-div"></div>
        <footer  className='cartFixed'><CartMenubar/></footer>
    </>
  )
}
