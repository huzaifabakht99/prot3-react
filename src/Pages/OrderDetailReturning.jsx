import React, { useContext, useEffect } from "react";
import checkGif from "../assets/check-circle.gif";
import checkGif2 from "../assets/success.gif";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import img2 from "../assets/Group 7489.svg";
import img1 from "../assets/Untitled-1-02 1.svg";
import { OrderReviewCards } from "../Components/OrderReviewCards";
import amazonLogo1 from "../assets/Group 7547 (1).svg";

import clearpayLogo1 from "../assets/Group 7551 (1).svg";
import masterCardLogo from "../assets/Group 7546.svg";
import visaCardLogo from "../assets/Group 774.svg";

import { TotalCard } from "../Components/TotalCard";
import homeIcon from "../assets/Group 7492.svg";
import phoneIcon from "../assets/Group 7545.svg";
import deliveryIcon from "../assets/Group 7491.svg";
import paymentIcon from "../assets/Group 7490.svg";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CartMenubar } from "../Components/CartMenubar";
import { inputContext } from "../Context/inputContext";
import CallIcon from "../assets/Vector (1).svg";
import HomeIcon from "../assets/Vector (2).svg";
import LocalShippingIcon from "../assets/Vector (3).svg";
import thumbnail from "../assets/Rectangle 206 (1).svg";
import "../orderDetail.css";
import qrImg from "../assets/image 38.svg";

import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import StarIcon from "@mui/icons-material/Star";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import { Timer } from "../Components/Timer";
import cardLogo from "../assets/Group 6939.svg";

import paypalLogo from "../assets/Group 6943.svg";
import klarnaLogo from "../assets/Group 7552.svg";
import amazonLogo from "../assets/Group 6969.svg";
import clearpayLogo from "../assets/Group 7551 (1).svg";
import { useState } from "react";
const theme = createTheme({
  palette: {
    primary: {
      main: "#E72E80",
    },
  },
});

export const OrderDetailReturning = () => {
  const { formInputs, setFormInputs } = useContext(inputContext);
  const [showAllItem, setShowAllItem] = useState(false);
  const [hideAllItem, setHideAllItem] = useState(false);
  const { returningUserInputs, setReturningUserInputs } =
    useContext(inputContext);
  useEffect(() => {
    setFormInputs((prevState) => ({
      ...prevState,
      disabledBtn: false,
      station: "order-detail",
    }));
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="transactionNo-div">
          <div className="transactionNo-text">
            Thank you {returningUserInputs.fullName} for your purchase, Your
            order with
            <b> Your Brand</b> is placed.
            <div className="transactionNo">Transaction #ML896076</div>
          </div>
          <div className="animated-tick-div">
            <img style={{ width: "70px" }} src={checkGif} alt="" />
          </div>
        </div>
        <div className="orderDetail-main">
          <div className="earnedPoints-div">
            <div className="withRounded-star">
              <div className="roundStar">
                <StarIcon />
              </div>
              <div className="earnedPoints-text">
                Congrats! You’ve earned 140 points
              </div>
            </div>
            <div className="eye-icon">
              <RemoveRedEyeIcon fontSize="small" />
            </div>
          </div>
          <div className="orderDetail-products-div">
            <div
              className="totalAmount-div"
              onClick={() => setHideAllItem(!hideAllItem)}
            >
              <div className="order-total-amount">Total Amount</div>
              <div className="order-amount">
                $263.00{" "}
                {hideAllItem ? (
                  <KeyboardArrowUpIcon />
                ) : (
                  <KeyboardArrowDownIcon />
                )}
              </div>
            </div>
            {hideAllItem ? (
              <div style={{ paddingTop: "10px" }}>
                <div className="amount-row">
                  <div className="text toBe-text">Subtotal</div>
                  <div className="amount">
                    $
                    {formInputs.productAmount.toLocaleString(undefined, {
                      maximumFractionDigits: 2,
                    }) * formInputs.Quantity}
                  </div>
                </div>
                <div className="amount-row">
                  <div className="text toBe-text">Shipping</div>
                  <div className="amount" style={{ display: "flex" }}>
                    $
                    {formInputs.station !== "" ||
                    formInputs.station === "returning-user" ? (
                      <span>
                        {formInputs.station === "returning-user" ? (
                          returningUserInputs.deliveryTypeAmount
                        ) : (
                          <div>
                            {parseFloat(
                              formInputs.deliveryTypeAmount.toFixed(2)
                            )}
                          </div>
                        )}
                      </span>
                    ) : (
                      <div className="toBe-text">To be calculated</div>
                    )}
                  </div>
                </div>

                <div className="amount-row">
                  <div className="text toBe-text">
                    {formInputs.shippingAddress == "" ? "Estimated Tax" : "Tax"}
                  </div>

                  <div className="amount">
                    ${" "}
                    {parseFloat(formInputs.tax * formInputs.Quantity).toFixed(
                      2
                    )}
                  </div>
                </div>
                <div
                  className="amount-row"
                  fxlayout="row"
                  fxlayoutalign="space-between center"
                >
                  <div className="text toBe-text">Discount </div>
                  <div className="amount">
                    {formInputs.promoCode === "2020" ? (
                      <div>${formInputs.discount}</div>
                    ) : (
                      "$0"
                    )}
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}

            <div className="puchasedItems-div">
              <div className="purchased-items">Purchased Items (5)</div>
              <div
                style={{
                  height: showAllItem ? "auto" : "140px",
                  overflow: "hidden",
                }}
              >
                <div className="order-items">
                  <div className="product-detail">
                    <div className="product-img-with-detail">
                      <img className="icon" src={thumbnail} alt="" />
                      <div className="product">
                        <div className="text" style={{ fontWeight: "600" }}>
                          Maverick Strong Adhesive
                        </div>
                        <div>
                          <div className="quantity">
                            Size: 10ml, Qty: {formInputs.Quantity}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="amount">
                      <div style={{ fontWeight: "600" }}> $47</div>
                    </div>
                  </div>
                </div>
                <div className="order-items">
                  <div className="product-detail">
                    <div className="product-img-with-detail">
                      <img className="icon" src={thumbnail} alt="" />
                      <div className="product">
                        <div className="text" style={{ fontWeight: "600" }}>
                          Maverick Strong Adhesive
                        </div>
                        <div>
                          <div className="quantity">
                            Size: 10ml, Qty: {formInputs.Quantity}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="amount">
                      <div style={{ fontWeight: "600" }}> $47</div>
                    </div>
                  </div>
                </div>

                <div className="order-items">
                  <div className="product-detail">
                    <div className="product-img-with-detail">
                      <img className="icon" src={thumbnail} alt="" />
                      <div className="product">
                        <div className="text" style={{ fontWeight: "600" }}>
                          Maverick Strong Adhesive
                        </div>
                        <div>
                          <div className="quantity">
                            Size: 10ml, Qty: {formInputs.Quantity}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="amount">
                      <div style={{ fontWeight: "600" }}> $47</div>
                    </div>
                  </div>
                </div>
                <div className="order-items">
                  <div className="product-detail">
                    <div className="product-img-with-detail">
                      <img className="icon" src={thumbnail} alt="" />
                      <div className="product">
                        <div className="text" style={{ fontWeight: "600" }}>
                          Maverick Strong Adhesive
                        </div>
                        <div>
                          <div className="quantity">
                            Size: 10ml, Qty: {formInputs.Quantity}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="amount">
                      <div style={{ fontWeight: "600" }}> $47</div>
                    </div>
                  </div>
                </div>
                <div className="order-items">
                  <div className="product-detail">
                    <div className="product-img-with-detail">
                      <img className="icon" src={thumbnail} alt="" />
                      <div className="product">
                        <div className="text" style={{ fontWeight: "600" }}>
                          Maverick Strong Adhesive
                        </div>
                        <div>
                          <div className="quantity">
                            Size: 10ml, Qty: {formInputs.Quantity}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="amount">
                      <div style={{ fontWeight: "600" }}> $47</div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="arrow-div"
                onClick={() => setShowAllItem(!showAllItem)}
              >
                {showAllItem ? (
                  <KeyboardArrowUpIcon />
                ) : (
                  <KeyboardArrowDownIcon />
                )}
              </div>
            </div>
          </div>
          <div className="shippingNpayment-div">
            <div className="shippingNpayment-heading">Shipping and Payment</div>
            <div className="shippingNpayment">
              <div className="shippingNpayment-icon">
                <HomeOutlinedIcon fontSize="small" />
              </div>
              <div className="shippingNpayment-text">
                {returningUserInputs.shippingAddress}
              </div>
            </div>

            <div className="shippingNpayment">
              <div className="shippingNpayment-icon">
                <LocalShippingOutlinedIcon fontSize="small" />
              </div>
              <div>
                <div className="shippingNpayment-text">
                  {returningUserInputs.deliveryType}
                </div>
                <div className="shippingNpayment-text">
                  Est. Delivery{" "}
                  {returningUserInputs.deliveryType === "Free Shipping"
                    ? "Wed,Jan 25- Thurs, Jan 30"
                    : ""}
                  {returningUserInputs.deliveryType === "Standard Shipping"
                    ? "Wed,Jan 17- Thurs, Jan 18"
                    : ""}
                  {returningUserInputs.deliveryType === "Express Shipping"
                    ? "Wed,Jan 15- Thurs, Jan 16"
                    : ""}
                </div>
              </div>
            </div>

            <div className="shippingNpayment">
              <div className="shippingNpayment-icon">
                <CreditCardOutlinedIcon fontSize="small" />
              </div>
              <div style={{}}>
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  <div className="shippingNpayment-text">
                    {returningUserInputs.paymentMethod === "cod" ? (
                      <span>Cash on delivery</span>
                    ) : (
                      ""
                    )}
                    {returningUserInputs.paymentMethod === "card1" ? (
                      <img src={masterCardLogo} alt="" />
                    ) : (
                      ""
                    )}
                    {returningUserInputs.paymentMethod === "card2" ? (
                      <img src={visaCardLogo} alt="" />
                    ) : (
                      ""
                    )}
                    {returningUserInputs.paymentMethod === "paypal" ? (
                      <img src={paypalLogo} alt="" />
                    ) : (
                      ""
                    )}
                    {returningUserInputs.paymentMethod === "amazon" ? (
                      <img
                        style={{ transform: "scale(0.9)", paddingTop: "3px" }}
                        src={amazonLogo1}
                        alt=""
                      />
                    ) : (
                      ""
                    )}
                    {returningUserInputs.paymentMethod === "clearpay" ? (
                      <img src={clearpayLogo} alt="" />
                    ) : (
                      ""
                    )}
                    {returningUserInputs.paymentMethod === "klarna" ? (
                      <img src={klarnaLogo} alt="" />
                    ) : (
                      ""
                    )}
                  </div>
                  {returningUserInputs.paymentMethod === "klarna" ||
                  returningUserInputs.paymentMethod === "clearpay" ? (
                    <div className="pink-btn">View Plan</div>
                  ) : (
                    ""
                  )}
                </div>
                {returningUserInputs.paymentMethod === "cod" ? (
                  ""
                ) : (
                  <div className="shippingNpayment-text">
                    {" "}
                    {returningUserInputs.paymentMethod === "card1"
                      ? "****6754"
                      : ""}
                    {returningUserInputs.paymentMethod === "card2"
                      ? "****9059"
                      : ""}
                    {/* {returningUserInputs.paymentMethod === "paypal"
                      ? returningUserInputs.email
                      : ""} */}
                    {/* {returningUserInputs.paymentMethod === "amazon"
                      ? returningUserInputs.email
                      : ""} */}
                    {returningUserInputs.paymentMethod === "clearpay"
                      ? "Visa card ending with 4362"
                      : ""}
                    {returningUserInputs.paymentMethod === "klarna"
                      ? "Visa card ending with 4362"
                      : ""}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="cancelOrder-Timer-div">
            <div className="timer">
              <Timer className="main-timer" />
            </div>
            <div className="timer-text">
              Your order is automatically confirmed after this time or you can
              <button
                disabled={formInputs.cantCancel}
                className="pink-cancle-btn"
              >
                {" "}
                cancel order
              </button>
            </div>
          </div>
          <div className="downloadApp-div">
            <div className="downloadApp-text">
              Download the Qisstpay App to get latest discounts and track orders
            </div>
            <div className="downloadApp-qr">
              <img src={qrImg} alt="" className="downloadApp-qr-img" />
              <div className="downloadApp-qr-text">
                Scan QR Code to Download
              </div>
            </div>
          </div>
          <div className="closeCheckout-div pink-cancle-btn">
            Close Checkout Window
          </div>
        </div>
        <div className="dummy-div"></div>
      </ThemeProvider>
    </>
  );
};
