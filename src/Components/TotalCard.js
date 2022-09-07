import React from 'react'

export const TotalCard = () => {
  return (
    <>
    <div className='totalCard-main'>
        <div className="line">
            <div className="grey-text">Subtotal</div>
            <div className="totalCard-text">$102</div>
        </div>
        <div className="line">
            <div className="grey-text">Shipping</div>
            <div className="totalCard-text">$150</div>
        </div>
        <div className="line">
            <div className="grey-text">Tax</div>
            <div className="totalCard-text">$1.67</div>
        </div>
        <div className="line">
            <div className="grey-text">Discount</div>
            <div className="totalCard-text">-$3</div>
        </div>
        <div className="line">
            <div className="total-text">Total</div>
            <div className="total-text">$360</div>
        </div>
    </div>
</>


  )
}
