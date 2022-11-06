import React, { useContext, useEffect, useState } from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";
import remove from "../assets/Group 697.svg";
import { inputContext } from "../Context/inputContext";
import { Button } from "@mui/material";
import thumbnail from "../assets/Rectangle 206 (1).svg";

import DeleteIcon from "@mui/icons-material/Delete";

export const Cart = (props) => {
  const [deleteCart, setDeleteCart] = useState(false);
  const { formInputs, setFormInputs } = useContext(inputContext);
  const [showCounter, setShowCounter] = useState(false);
  const { returningUserInputs, setReturningUserInputs } =
    useContext(inputContext);

  const closeIFrame = () => {
    document.getElementById("closeIframe").remove();
  };

  return (
    <>
      <span className="cart-main">
        <div className="cart">
          {/* <img src="../assets/Group 7548.svg" alt=""> */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <div></div>
            <h5 style={{ margin: "8px 0px", fontSize: "14px" }}>
              {" "}
              Order Details
            </h5>
            <a>
              <CloseRoundedIcon className="clear" onClick={props.onClose} />
            </a>
          </div>
          {deleteCart ? (
            <div className="deleteCart-main">
              <p className="deleteCart-heading">
                Are you sure, you want to remove all cart items?
              </p>

              <p className="deleteCart-text">
                Since your cart will be empty, you will be redirected to
                merchant website and this checkout will close.
              </p>
              <div className="deleteCart-button-div">
                <button
                  className="deleteCart-buttons"
                  onClick={() => closeIFrame()}
                  // onClick={() => setIsOtpOpen(true)}
                >
                  Yes, close this checkout
                </button>
                <button
                  onClick={() => setDeleteCart(false)}
                  className="deleteCart-white deleteCart-buttons"
                >
                  No, continue shopping
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div>
                <hr className="hr-cart" />
                <h2 className="brand-name">Cart (1 item)</h2>
                <div className="product-detail">
                  <div className="product-img-with-detail">
                    <img className="icon" src={thumbnail} alt="" />
                    <div className="product">
                      <div className="text">{props.productName}</div>
                      <div>
                        <div className="quantity">
                          Size: 10ml, Qty: {formInputs.Quantity}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="amount">
                    <div>
                      {" "}
                      {props.currency}
                      {props.productAmount + ".00"}
                    </div>
                    <DeleteIcon
                      fontSize="small"
                      sx={{ position: "relative", right: "-16px", top: "4px" }}
                      onClick={() => setDeleteCart(true)}
                    />
                  </div>
                </div>
              </div>

              {/* {showCounter ? (
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
        )} */}
              <hr className="hr-cart" />
              {/* <div><img src="../assets/Group 7550.svg" alt=""></div> */}
              <div>
                <div className="amount-row">
                  <div className="text">Subtotal</div>
                  <div className="amount">
                    {props.currency}
                    {props.subtotal + ".00"}
                  </div>
                </div>
                <div className="amount-row">
                  <div className="text">Shipping</div>
                  <div className="amount">
                    {formInputs.station !== "" ||
                    formInputs.station === "returning-user" ? (
                      <div>
                        {props.currency}
                        {formInputs.station === "returning-user"
                          ? returningUserInputs.deliveryTypeAmount
                          : props.shipping}
                      </div>
                    ) : (
                      <div className="toBe-text">To be calculated</div>
                    )}
                  </div>
                </div>

                <div className="amount-row">
                  <div className="text">
                    {formInputs.shippingAddress == "" ? "Estimated Tax" : "Tax"}
                  </div>
                  {formInputs.shippingAddress == "" ? (
                    <div className="toBe-text">To be calculated</div>
                  ) : (
                    <div className="amount">
                      {props.currency}
                      {props.tax}
                    </div>
                  )}
                </div>
                <div
                  className="amount-row"
                  fxlayout="row"
                  fxlayoutalign="space-between center"
                >
                  <div className="text">Discount </div>
                  <div className="amount">
                    {formInputs.promoCode === "2020" ? (
                      <div>
                        {props.currency}
                        {props.discount + ".00"}
                      </div>
                    ) : (
                      "$0"
                    )}
                  </div>
                </div>
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
          )}
        </div>
        {/* <div className="button-div">
          <button
            onClick={() => setShowCounter(!showCounter)}
            className="edit-order"
          >
            {showCounter ? "Done" : "Edit Order"}
          </button>
        </div> */}
      </span>
    </>
  );
};
