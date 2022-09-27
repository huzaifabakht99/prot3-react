import React, { useState } from "react";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";
import thumbnail from "../assets/Rectangle 206 (1).svg";
import remove from "../assets/Group 697.svg";

export const Cart = (props) => {
  const [showCounter, setShowCounter] = useState(false);
  const [count, setCount] = useState(1);
  return (
    <>
      <span className="cart-main">
        <div className="cart">
          {/* <img src="../assets/Group 7548.svg" alt=""> */}
          <div>
            <h2 className="brand-name">Forever21</h2>
            <div className="product-detail">
              <div className="product-img-with-detail">
                <img className="icon" src={thumbnail} alt="" />
                <div className="product">
                  <div className="text">{props.productName}</div>
                  <div className="quantity text">Quantity:{count}</div>
                </div>
              </div>
              <div className="amount">
                {props.currency}
                {props.productAmount}
              </div>
            </div>
          </div>

          {showCounter ? (
            <div className="counter-div">
              <img src={remove} alt="" />

              <div className="counter">
                <button
                  className="btn-add-remove-counter"
                  onClick={() => setCount(count - 1)}
                >
                  <RemoveCircleRoundedIcon />
                </button>
                <div className="count">{count}</div>
                <button
                  className="btn-add-remove-counter"
                  onClick={() => setCount(count + 1)}
                >
                  <AddCircleRoundedIcon />
                </button>
              </div>
            </div>
          ) : (
            ""
          )}
          <hr className="hr-cart" />
          {/* <div><img src="../assets/Group 7550.svg" alt=""></div> */}
          <div>
            <div className="amount-row">
              <div className="text">Subtotal</div>
              <div className="amount">
                {props.currency}
                {props.subtotal}
              </div>
            </div>
            <div className="amount-row">
              <div className="text">Shipping</div>
              <div className="amount">
                {props.currency}
                {props.shipping}
              </div>
            </div>
            <div className="amount-row">
              <div className="text">Estimated Tax</div>
              <div className="amount">
                {props.currency}
                {props.tax}
              </div>
            </div>
            <div
              className="amount-row"
              fxlayout="row"
              fxlayoutalign="space-between center"
            >
              <div className="text">Discount </div>
              <div className="amount">
                {props.currency}
                {props.discount}
              </div>
            </div>
          </div>
          <hr className="hr-cart" />
          <div className="total-div">
            <div className="total">Total</div>
            <div className="total">
              {props.currency}
              {props.total}
            </div>
          </div>
        </div>
        <div className="button-div">
          <button
            onClick={() => setShowCounter(!showCounter)}
            className="edit-order"
          >
            {showCounter ? "Done" : "Edit Order"}
          </button>
        </div>
      </span>
    </>
  );
};
