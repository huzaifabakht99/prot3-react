import React, { useContext, useEffect } from "react";
import checkGif from "../assets/data-150x150 (1).gif";
import checkGif2 from "../assets/success.gif";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import img2 from "../assets/Group 7489.svg";
import img1 from "../assets/Untitled-1-02 1.svg";
import { OrderReviewCards } from "../Components/OrderReviewCards";
import amazonLogo1 from "../assets/Group 7547 (1).svg";
import { makeStyles } from "@mui/styles";

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
import masterCardLogo from "../assets/Group 7546.svg";

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
import { Drawer } from "@mui/material";
import product1 from "../assets/Rectangle 207.svg";
import product2 from "../assets/Rectangle 1808.svg";
import product3 from "../assets/Rectangle 1806.svg";
import product4 from "../assets/Rectangle 1805.svg";
import Timeline from "../assets/Group 75569.svg";
// import Timeline from "@mui/lab/Timeline";
// import TimelineItem from "@mui/lab/TimelineItem";
// import TimelineSeparator from "@mui/lab/TimelineSeparator";
// import TimelineConnector from "@mui/lab/TimelineConnector";
// import TimelineContent from "@mui/lab/TimelineContent";
// import TimelineDot from "@mui/lab/TimelineDot";
const theme = createTheme({
  palette: {
    primary: {
      main: "#E72E80",
    },
  },
});
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFilledInput-root.Mui-focused": {
      backgroundColor: "white",
      outline: " none",
      borderColor: "#e72e817a ",
      boxShadow: " 0 0px 0px 0.15rem #e72e8128",
    },
    "& .MuiFilledInput-root": {
      background: "#F6F6F6",
      width: "100%",
      marginBottom: "10px",

      border: "1px solid #F6F6F6",
      borderRadius: "6px",
    },
  },
  promo: {
    "& .MuiFilledInput-root.Mui-focused": {
      backgroundColor: "white",
      outline: " none",
      borderColor: "#e72e817a ",
      boxShadow: " 0 0px 0px 0.15rem #e72e8128",
    },
    "& .MuiFilledInput-root": {
      background: "#F6F6F6",
      width: "100%",
      marginBottom: "10px",

      border: "1px solid #F6F6F6",
      borderRadius: "6px",
    },
  },
  drawerPaper: {
    borderRadius: "20px 20px 0 0",
  },
  cardInput: {
    border: "1px solid black",
    padding: "20px",
  },
}));

export const OrderDetail = () => {
  const classes = useStyles();
  const [openInstallmentsPlan, setOpenInstallmentsPlan] = useState(false);
  const [rewardPointsOpen, setRewardPointsOpen] = useState(false);
  const [deleteCart, setDeleteCart] = useState(false);
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
              <KeyboardArrowDownIcon
                onClick={() => setRewardPointsOpen(true)}
              />
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
                          formInputs.deliveryTypeAmount
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
                      <img className="icon" src={product1} alt="" />
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
                      <img className="icon" src={product2} alt="" />
                      <div className="product">
                        <div className="text" style={{ fontWeight: "600" }}>
                          Lash Lift And Brow Lamination Kit
                        </div>
                        <div>
                          <div className="quantity">
                            Size: Small, Qty: {formInputs.Quantity}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="amount">
                      <div style={{ fontWeight: "600" }}> $147.00</div>
                    </div>
                  </div>
                </div>

                <div className="order-items">
                  <div className="product-detail">
                    <div className="product-img-with-detail">
                      <img className="icon" src={product3} alt="" />
                      <div className="product">
                        <div className="text" style={{ fontWeight: "600" }}>
                          Gel Remover
                        </div>
                        <div>
                          <div className="quantity">
                            Size: Small, Qty: {formInputs.Quantity}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="amount">
                      <div style={{ fontWeight: "600" }}> $18.00</div>
                    </div>
                  </div>
                </div>
                <div className="order-items">
                  <div className="product-detail">
                    <div className="product-img-with-detail">
                      <img className="icon" src={product4} alt="" />
                      <div className="product">
                        <div className="text" style={{ fontWeight: "600" }}>
                          Bandana
                        </div>
                        <div>
                          <div className="quantity">
                            Black, Qty: {formInputs.Quantity}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="amount">
                      <div style={{ fontWeight: "600" }}> $18.00</div>
                    </div>
                  </div>
                </div>
                <div className="order-items">
                  <div className="product-detail">
                    <div className="product-img-with-detail">
                      <img className="icon" src={product1} alt="" />
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
              <div
                style={{
                  width: "100%",
                }}
              >
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div className="shippingNpayment-text">
                    {formInputs.paymentMethod === "cod" ? (
                      <span>Cash on delivery</span>
                    ) : (
                      ""
                    )}
                    {formInputs.paymentMethod === "card" ? (
                      <img src={masterCardLogo} alt="" />
                    ) : (
                      ""
                    )}
                    {formInputs.paymentMethod === "paypal" ? (
                      <div>
                        <img src={paypalLogo} alt="" />
                        <div>{formInputs.email}</div>
                      </div>
                    ) : (
                      ""
                    )}
                    {formInputs.paymentMethod === "amazon" ? (
                      <div>
                        <img
                          style={{ transform: "scale(0.9)", paddingTop: "3px" }}
                          src={amazonLogo1}
                          alt=""
                        />

                        <div>{formInputs.email}</div>
                      </div>
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
                    <div
                      className="pink-btn"
                      onClick={() => setOpenInstallmentsPlan(true)}
                    >
                      View Plan
                    </div>
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
                onClick={() => setDeleteCart(true)}
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
            <div className="downloadNow-app">Download Now</div>
            <div className="downloadApp-qr">
              <img src={qrImg} alt="" className="downloadApp-qr-img" />
              <div className="downloadApp-qr-text">
                Scan QR Code to Download
              </div>
            </div>
          </div>
          <div className="closeCheckout-div pink-cancle-btn">
            Continue Shopping
          </div>
        </div>
      </ThemeProvider>
      <Drawer
        classes={{ paper: classes.drawerPaper }}
        sx={{
          borderRadius: "5px",
          position: "absolute",
          bottom: "100px",
          paddingBottom: "8px",
        }}
        anchor="bottom"
        open={deleteCart}
        onClose={() => setDeleteCart(false)}
      >
        <div className="edit-drawer-header">
          <h5 className="drawer-heading">Cancel Order</h5>
          <a>
            <CloseRoundedIcon
              className="clear"
              onClick={() => setDeleteCart(false)}
            />
          </a>
        </div>
        <hr className="hr-drawer" />
        <div style={{ padding: "10px 20px 20px 20px" }}>
          <div className="deleteCart-main">
            <p
              className="deleteCart-heading"
              style={{ width: "100%", textAlign: "left" }}
            >
              Hey, What Happened?
            </p>

            <p
              className="deleteCart-text"
              style={{ width: "100%", textAlign: "left" }}
            >
              Your order has been placed successfully. It will arrive within few
              days. Are you sure, you want to cancel order?
            </p>
            <div className="deleteCart-button-div">
              <button
                className="deleteCart-buttons"
                // onClick={() => setIsOtpOpen(true)}
                onClick={() => setDeleteCart(false)}
              >
                No, Don’t Cancel Order
              </button>
              <button
                onClick={() => setDeleteCart(false)}
                className="deleteCart-white deleteCart-buttons"
              >
                Yes, Cancel Order
              </button>
            </div>
          </div>
        </div>
      </Drawer>
      <Drawer
        classes={{ paper: classes.drawerPaper }}
        sx={{
          borderRadius: "5px",
          position: "absolute",
          bottom: "100px",
          paddingBottom: "8px",
        }}
        anchor="bottom"
        open={rewardPointsOpen}
        onClose={() => setRewardPointsOpen(false)}
      >
        <div className="edit-drawer-header">
          <div className="none"></div>
          <h5 className="drawer-heading">Reward Points</h5>
          <a>
            <CloseRoundedIcon
              className="clear"
              onClick={() => setRewardPointsOpen(false)}
            />
          </a>
        </div>

        <hr className="hr-drawer" />
        <div style={{ padding: "20px 20px 37px 20px" }}>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "14px",
                fontWeight: "700",
              }}
            >
              <div>Total Points Earned</div>
              <div style={{ display: "flex" }}>
                {" "}
                <div
                  style={{ width: "20px", height: "20px" }}
                  className="roundStar"
                >
                  <StarIcon fontSize="10px" />
                </div>
                <div style={{ visibility: "hidden" }}>t</div>140 Points
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingTop: "25px",
              }}
            >
              <div className="toBe-text">Maverick Strong Adhesive</div>
              <div className="toBe-text">+20 Points</div>
            </div>
            <hr className="hr-drawer" />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingTop: "12px",
              }}
            >
              <div className="toBe-text">Lash Lift And Brow Lamination Kit</div>
              <div className="toBe-text">+100 Points</div>
            </div>

            <hr className="hr-drawer" />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingTop: "12px",
              }}
            >
              <div className="toBe-text">Gel Remover</div>
              <div className="toBe-text">+5 Points</div>
            </div>
            <hr className="hr-drawer" />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingTop: "12px",
              }}
            >
              <div className="toBe-text">Bandana</div>
              <div className="toBe-text">+5 Points</div>
            </div>
            <hr className="hr-drawer" />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingTop: "12px",
              }}
            >
              <div className="toBe-text">MJ'S Isolation Tweezers</div>
              <div className="toBe-text">+10 Points</div>
            </div>
          </div>
          <div
            style={{ paddingTop: "40px", fontSize: "18px", fontWeight: "500" }}
          >
            Use QisstPay mobile app to redeem reward points.
          </div>
          <div style={{ paddingTop: "15px" }}>
            Don’t have mobile app?
            <span className="pink-cancle-btn">Download Now</span>
          </div>
        </div>
      </Drawer>
      <Drawer
        classes={{ paper: classes.drawerPaper }}
        sx={{
          borderRadius: "5px",
          position: "absolute",
          bottom: "100px",
          paddingBottom: "8px",
        }}
        anchor="bottom"
        open={openInstallmentsPlan}
        onClose={() => setOpenInstallmentsPlan(false)}
      >
        <div className="edit-drawer-header">
          <h5 className="drawer-heading">Installments Plan</h5>
          <a>
            <CloseRoundedIcon
              className="clear"
              onClick={() => setOpenInstallmentsPlan(false)}
            />
          </a>
        </div>
        <hr className="hr-drawer" />
        <div>
          <div style={{ padding: " 0px 20px", paddingTop: "20px" }}>
            <img src={klarnaLogo} alt="" />
          </div>
          {/* <div>Visa card ending with 4362</div> */}
          <div style={{ padding: " 0px 20px" }}>
            <img src={Timeline} />
          </div>
          {/* <Timeline>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <div>
                  <div>$65.75</div>
                  <div>Paid on 18 Oct 2022</div>
                </div>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <div>
                  <div>$65.75</div>
                  <div>Due two weeks from purchase date.</div>
                </div>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
              </TimelineSeparator>
              <TimelineContent>
                <div>
                  <div>$65.75</div>
                  <div>Due four weeks from purchase date.</div>
                </div>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
              </TimelineSeparator>
              <TimelineContent>
                <div>
                  <div>$65.75</div>
                  <div>Final payment. Six weeks from purchase date.</div>
                </div>
              </TimelineContent>
            </TimelineItem>
          </Timeline> */}
        </div>
      </Drawer>
    </>
  );
};
