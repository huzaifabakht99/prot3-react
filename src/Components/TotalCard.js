import React from "react";

export const TotalCard = (props) => {
  return (
    <>
      <div className="totalCard-main">
        <div className="line">
          <div className="grey-text">Subtotal</div>
          <div className="totalCard-text">${props.subtotal}</div>
        </div>
        <div className="line">
          <div className="grey-text">Shipping</div>
          <div className="totalCard-text">${props.shipping}</div>
        </div>
        <div className="line">
          <div className="grey-text">Tax</div>
          <div className="totalCard-text">${props.tax}</div>
        </div>
        {/* <div className="line">
          <div className="grey-text">Discount</div>
          <div className="totalCard-text">-${props.discount}</div>
        </div> */}
        <div className="line">
          <div className="total-text">Total</div>
          <div className="total-text">${props.total}</div>
        </div>
      </div>
    </>
  );
};
