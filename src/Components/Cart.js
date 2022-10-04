import React, { useContext, useState } from "react";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";
import thumbnail from "../assets/Rectangle 206 (1).svg";
import remove from "../assets/Group 697.svg";
import { inputContext } from "../Context/inputContext";
import { Button } from "@mui/material";

export const Cart = (props) => {
  const { formInputs, setFormInputs } = useContext(inputContext);
  const [showCounter, setShowCounter] = useState(false);
  const { returningUserInputs, setReturningUserInputs } =
    useContext(inputContext);

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
                  <div className="quantity text">
                    Quantity:{formInputs.Quantity}
                  </div>
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
                  onClick={() =>
                    setFormInputs((prevState) => ({
                      ...prevState,
                      Quantity: formInputs.Quantity - 1,
                    }))
                  }
                >
                  <RemoveCircleRoundedIcon />
                </button>
                <div className="count">{formInputs.Quantity}</div>
                <button
                  className="btn-add-remove-counter"
                  onClick={() =>
                    setFormInputs((prevState) => ({
                      ...prevState,
                      Quantity: formInputs.Quantity + 1,
                    }))
                  }
                >
                  <AddCircleRoundedIcon disabled="true" />
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
            {formInputs.deliveryTypeAmount != 0 ||
            formInputs.station === "returning-user" ? (
              <div className="amount-row">
                <div className="text">Shipping</div>
                <div className="amount">
                  {props.currency}
                  {formInputs.station === "returning-user"
                    ? returningUserInputs.deliveryTypeAmount
                    : props.shipping}
                </div>
              </div>
            ) : (
              ""
            )}
            <div className="amount-row">
              <div className="text">
                {formInputs.deliveryType == 0 ? "Estimated Tax" : "Tax"}
              </div>
              <div className="amount">
                {props.currency}
                {props.tax}
              </div>
            </div>
            {formInputs.promoCode === "2020" ? (
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
            ) : (
              ""
            )}
          </div>
          <hr className="hr-cart" />
          <div className="total-div">
            <div className="total">Total</div>
            <div className="total">
              {props.currency}

              {formInputs.station === "returning-user"
                ? parseFloat(
                    (
                      formInputs.productAmount * formInputs.Quantity +
                      returningUserInputs.deliveryTypeAmount +
                      formInputs.tax * formInputs.Quantity -
                      formInputs.discount
                    ).toFixed(2)
                  )
                : parseFloat(
                    (
                      formInputs.productAmount * formInputs.Quantity +
                      formInputs.deliveryTypeAmount +
                      formInputs.tax * formInputs.Quantity -
                      formInputs.discount
                    ).toFixed(2)
                  )}
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
