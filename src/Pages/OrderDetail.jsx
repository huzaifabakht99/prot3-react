import React, { useContext } from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import img2 from "../assets/Group 7489.svg";
import img1 from "../assets/Untitled-1-02 1.svg";
import { OrderReviewCards } from "../Components/OrderReviewCards";
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

import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

const theme = createTheme({
  palette: {
    primary: {
      main: "#E72E80",
    },
  },
});
export const OrderDetail = () => {
  const { formInputs, setFormInputs } = useContext(inputContext);
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="menu-bar">
          {/* <KeyboardBackspaceRoundedIcon className="clear" /> */}
          <h3 className="order-detail-menubar-heading">Order # 564778</h3>
          {/* <CloseRoundedIcon className="clear" /> */}
        </div>
        <div className="orderDetail-main">
          {/* <h2>Order Detail</h2> */}
          <h2 className="orderDeatial-heading-main">
            Thank you {formInputs.fullName}!
          </h2>
          <p class="orderDetail-text-main">
            Your order is confirmed. We have accepted your order, and we’re
            getting it ready.
          </p>
          <img className="img1 div" src={img1} alt="gif" />
          <div className="gif-div">
            <img className="img2" src={img2} alt="gif" />
          </div>
          {/* <h4 className="detail-heading">
            You’ve Provided the following details:
          </h4> */}
          {/* <div className="card-border">
            <div className="card-space">
              <OrderReviewCards
                className="card-space"
                heading={"Contact"}
                subheading={"hadia"}
                iconUrl={phoneIcon}
                text={"03305281803"}
                verified={true}
                btn={false}
              />
            </div>
            <div className="card-space">
              <OrderReviewCards
                className="card-space"
                heading={"Shipping Info"}
                subheading={formInputs.fullName}
                iconUrl={homeIcon}
                text={formInputs.shippingAddress}
                verified={false}
                btn={false}
              />
            </div>
            <div className="card-space">
              <OrderReviewCards
                className="card-space"
                heading={"Delivery Type"}
                subheading={"card"}
                iconUrl={deliveryIcon}
                text={"03305281803"}
                verified={false}
                btn={false}
              />
            </div>
            <div className="card-space">
              <OrderReviewCards
                className="card-space"
                heading={"Payment Method"}
                subheading={"card"}
                iconUrl={paymentIcon}
                text={"03305281803"}
                verified={false}
                btn={false}
              />
            </div>
          </div>
          <div className="card-border">
            <TotalCard />
          </div> */}

          <>
            <div className="userDetail-main">
              <div className="">
                <div className="verifiedContact-div">
                  <div className="userDetail-div">
                    <div className="icon">
                      <img className="icon-img" src={CallIcon} alt="" />
                    </div>
                    <div className="">
                      <h6 className="orderDetail-heading">Contact</h6>
                      <div>
                        <p className="orderDetail-text">
                          {formInputs.fullName.toUpperCase()}
                        </p>
                        <p className="orderDetail-text">
                          +{formInputs.numberThroughSignin}
                        </p>
                        <p className="orderDetail-text">{formInputs.email}</p>
                      </div>
                    </div>
                  </div>
                  <div className="verified-div">
                    <VerifiedUserIcon fontSize="12px" /> Verified
                  </div>
                </div>
              </div>
              <div className="box-space">
                <div className="userDetail-div">
                  <div className="icon">
                    <img className="icon-img" src={HomeIcon} alt="" />
                  </div>
                  <div className="orderDetail-text">
                    <h6 className="orderDetail-heading">Shipping Info</h6>
                    <p className="orderDetail-text">
                      {formInputs.fullName.toUpperCase()}
                    </p>
                    <p className="orderDetail-text">
                      {formInputs.shippingAddress}
                    </p>
                  </div>
                </div>
              </div>
              <div className="box-space">
                <div className="userDetail-div">
                  <div className="icon">
                    <img className="icon-img" src={LocalShippingIcon} alt="" />
                  </div>
                  <div className="orderDetail-text">
                    <h6 className="orderDetail-heading">Delivery Type</h6>
                    <h5 className="orderDetail-subheading">
                      {formInputs.deliveryType}
                    </h5>
                    <p className="orderDetail-text">
                      {formInputs.deliveryType === "Standard"
                        ? "Get it between Wed, Jan 15-Fri, Jan 24"
                        : ""}
                      {formInputs.deliveryType === "Express"
                        ? "Get it between Wed, Jan 15-Fri, Jan 18"
                        : ""}
                      {formInputs.deliveryType === "Next Day"
                        ? "Get it between Wed, Jan 15-Fri, Jan 17"
                        : ""}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-div">
              <div className="orderDetail-product">
                <img className="thumbnail" src={thumbnail} alt="" />
                <div>
                  <div className="amount">Stretch Carrot Fit</div>
                  <div className="amount">Denim</div>
                  <div className="quantity product-text">
                    Quantity: {formInputs.Quantity}
                  </div>
                </div>
              </div>
              <div className="amount">${formInputs.productAmount}</div>
            </div>
            <div className=" pricing">
              <hr className="top order-detail-hr top-zero" />
              <div className="line">
                <div className="amount-card-text">Subtotal</div>
                <div className="text">
                  ${formInputs.productAmount * formInputs.Quantity}
                </div>
              </div>
              <div className="line">
                <div className="amount-card-text">Shipping</div>
                <div className="text">${formInputs.deliveryTypeAmount}</div>
              </div>
              <div className="line">
                <div className="amount-card-text">Tax</div>
                <div className="text">
                  ${formInputs.tax * formInputs.Quantity}
                </div>
              </div>
              {formInputs.promoCode === "2020" ? (
                <div className="line">
                  <div className="amount-card-text">Discount</div>
                  <div className="text">${formInputs.discount}</div>
                </div>
              ) : (
                ""
              )}
              <hr className="top order-detail-hr" />
              <div className="line">
                <div className="total-text">Total</div>
                <div className="total-text">
                  ${" "}
                  {formInputs.productAmount * formInputs.Quantity +
                    formInputs.deliveryTypeAmount +
                    formInputs.tax * formInputs.Quantity -
                    formInputs.discount}
                </div>
              </div>
            </div>
          </>

          <FormControlLabel
            className="ReturningUser-checkBox"
            control={<Checkbox defaultChecked />}
            label="Save my information with 1-Click Checkout for a faster checkout next time"
          />
          <div className="termsNpolicy">
            By clicking Pay, you agree to create a 1-Click Checkout account
            under our <span className="terms">Terms</span> of Use and{" "}
            <span className="policy">Privacy Policy</span>
          </div>
        </div>
        <div class="dummy-div"></div>
        {/* <footer  className='cartFixed'><CartMenubar/></footer> */}
      </ThemeProvider>
    </>
  );
};
