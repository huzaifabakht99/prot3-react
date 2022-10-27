import React, { useContext, useEffect } from "react";
import checkGif from "../assets/check-circle.gif";
import checkGif2 from "../assets/success.gif";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import img2 from "../assets/Group 7489.svg";
import img1 from "../assets/Untitled-1-02 1.svg";
import { OrderReviewCards } from "../Components/OrderReviewCards";
import amazonLogo1 from "../assets/Group 7547 (1).svg";

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

export const OrderDetail = () => {
  const { formInputs, setFormInputs } = useContext(inputContext);
  const [showAllItem, setShowAllItem] = useState(false);
  const [hideAllItem, setHideAllItem] = useState(false);
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
            Thank you {formInputs.fullName} for your purchase, Your order with
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
              ""
            ) : (
              <div className="puchasedItems-div">
                <div className="purchased-items">Purchased Items (5)</div>
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
                {showAllItem ? (
                  <div>
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
                ) : (
                  ""
                )}
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
            )}
          </div>
          <div className="shippingNpayment-div">
            <div className="shippingNpayment-heading">Shipping and Payment</div>
            <div className="shippingNpayment">
              <div className="shippingNpayment-icon">
                <HomeOutlinedIcon fontSize="small" />
              </div>
              <div className="shippingNpayment-text">
                {formInputs.shippingAddress}
              </div>
            </div>

            <div className="shippingNpayment">
              <div className="shippingNpayment-icon">
                <LocalShippingOutlinedIcon fontSize="small" />
              </div>
              <div>
                <div className="shippingNpayment-text">
                  {formInputs.deliveryType}
                </div>
                <div className="shippingNpayment-text">
                  Est. Delivery{" "}
                  {formInputs.deliveryType === "Standard"
                    ? "Wed,Jan 25- Thurs, Jan 30"
                    : ""}
                  {formInputs.deliveryType === "Express"
                    ? "Wed,Jan 17- Thurs, Jan 18"
                    : ""}
                  {formInputs.deliveryType === "Next Day"
                    ? "Wed,Jan 15- Thurs, Jan 16"
                    : ""}
                </div>
              </div>
            </div>

            <div className="shippingNpayment">
              <div className="shippingNpayment-icon">
                <CreditCardOutlinedIcon fontSize="small" />
              </div>
              <div style={{ width: "100%" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <div className="shippingNpayment-text">
                    {formInputs.paymentMethod === "cod" ? (
                      <span className="cod">Cash on delivery</span>
                    ) : (
                      ""
                    )}
                    {formInputs.paymentMethod === "card" ? (
                      <img src={cardLogo} alt="" />
                    ) : (
                      ""
                    )}
                    {formInputs.paymentMethod === "paypal" ? (
                      <img src={paypalLogo} alt="" />
                    ) : (
                      ""
                    )}
                    {formInputs.paymentMethod === "amazon" ? (
                      <img
                        style={{ transform: "scale(0.9)", paddingTop: "3px" }}
                        src={amazonLogo1}
                        alt=""
                      />
                    ) : (
                      ""
                    )}
                    {formInputs.paymentMethod === "clearpay" ? (
                      <img src={clearpayLogo} alt="" />
                    ) : (
                      ""
                    )}
                    {formInputs.paymentMethod === "klarna" ? (
                      <img src={klarnaLogo} alt="" />
                    ) : (
                      ""
                    )}
                  </div>
                  {formInputs.paymentMethod === "klarna" ||
                  formInputs.paymentMethod === "clearpay" ? (
                    <div className="pink-btn">View Plan</div>
                  ) : (
                    ""
                  )}
                </div>
                {formInputs.paymentMethod === "cod" ? (
                  ""
                ) : (
                  <div className="shippingNpayment-text">
                    {" "}
                    {formInputs.paymentMethod === "card" ? "****6754" : ""}
                    {formInputs.paymentMethod === "paypal"
                      ? formInputs.email
                      : ""}
                    {formInputs.paymentMethod === "amazon"
                      ? formInputs.email
                      : ""}
                    {formInputs.paymentMethod === "clearpay"
                      ? "Visa card ending with 4362"
                      : ""}
                    {formInputs.paymentMethod === "klarna"
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
