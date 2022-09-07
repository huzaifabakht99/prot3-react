import React from 'react'
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';
import thumbnail from "../assets/Rectangle 206 (1).svg"
import remove from "../assets/Group 697.svg"

export const Cart = () => {
  return (
    <>
    <span className="cart-main">
        <div className="cart">
            {/* <img src="../assets/Group 7548.svg" alt=""> */}
            <div>
            <h2 className='brand-name'>Forever21</h2>
            <div className='product-detail'>
                <div className='product-img-with-detail'>
                <img
                    className="icon"
                    src={thumbnail}
                    alt=""
                />
                <div className="product">
                    <div className="text">Stretch Carrot Fit</div>
                    <div className="text">Denim</div>
                    <div className="quantity text">Quantity:</div>
                </div>
                </div>
                <div className="amount">$360.00</div>
            </div>
            </div>
            <div className="counter-div">
            
                <img src={remove} alt="" />
          
            <div className="counter">
                <button className='btn-add-remove-counter'>
                <RemoveCircleRoundedIcon/>
                </button>
                <div>1</div>
                <button className='btn-add-remove-counter'>
                <AddCircleRoundedIcon/>
                </button>
            </div>
            </div>
            <hr  className='hr-cart'/>
            {/* <div><img src="../assets/Group 7550.svg" alt=""></div> */}
            <div>
            <div className="amount-row">
                <div className="text">Subtotal</div>
                <div className="amount">$</div>
            </div>
            <div className="amount-row">
                <div className="text">Shipping</div>
                <div className="amount">$5.95</div>
            </div>
            <div className="amount-row">
                <div className="text">Estimated Tax</div>
                <div className="amount">$</div>
            </div>
            <div
                className="amount-row"
                fxlayout="row"
                fxlayoutalign="space-between center"
            >
                <div className="text">Discount </div>
                <div className="amount">-$3</div>
            </div>
            </div>
            <hr className='hr-cart'/>
            <div className='total-div'>
            <div className="total">Total</div>
            <div className="total">$</div>
            </div>
        </div>
        <div className="button-div">
            <button className="edit-order">Edit Order</button>
        </div>
    </span>

    </>
  )
}
