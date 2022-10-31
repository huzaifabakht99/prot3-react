import React, { useContext, useEffect, useState } from "react";
import { OrderReviewCards } from "../Components/OrderReviewCards";
import { TotalCard } from "../Components/TotalCard";
import homeIcon from "../assets/Group 7492.svg";
import phoneIcon from "../assets/Group 7545.svg";
import deliveryIcon from "../assets/Group 7491.svg";
import paymentIcon from "../assets/Group 7490.svg";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Button,
  Drawer,
  InputAdornment,
  Switch,
  TextField,
} from "@mui/material";
import { EditContactInfo } from "../Components/EditContactInfo";
import { EditShippingAddress } from "../Components/EditShippingAddress";
import { EditDeliveryType } from "../Components/EditDeliveryType";
import { EditPaymentMethod } from "../Components/EditPaymentMethod";
import { CartMenubar } from "../Components/CartMenubar";
import { inputContext } from "../Context/inputContext";
import VerifiedIcon from "@mui/icons-material/Verified";
import { makeStyles, styled } from "@mui/styles";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import cardLogo from "../assets/Group 6939.svg";

import paypalLogo from "../assets/Group 6943.svg";
import klarnaLogo from "../assets/Group 7552.svg";
import amazonLogo from "../assets/Group 6969.svg";
import clearpayLogo from "../assets/Group 7551 (1).svg";
import { style } from "@mui/system/Stack/createStack";
import amazonLogo1 from "../assets/Group 7547 (1).svg";
import clearpayLogo1 from "../assets/Group 7551 (1).svg";
import masterCardLogo from "../assets/Group 7546.svg";
import visaCardLogo from "../assets/Group 774.svg";
// import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';

const theme = createTheme({
  palette: {
    primary: {
      main: "#E72E80",
    },
  },
});
const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));
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
export const ReturningUser = () => {
  const [promoMsgShow, setPromoMsgShow] = useState(false);
  const { formInputs, setFormInputs } = useContext(inputContext);
  const { returningUserInputs, setReturningUserInputs } =
    useContext(inputContext);

  const [isEditContactOpen, setIsEditContactOpen] = useState(false);
  const [isEditShippingOpen, setIsEditShippingOpen] = useState(false);
  const [isEditDeliveryOpen, setIsEditDeliveryOpen] = useState(false);
  const [isEditPaymentOpen, setIsEditPaymentOpen] = useState(false);
  const [openRefundPolicy, setOpenRefundPolicy] = useState(false);
  useEffect(() => {
    setFormInputs((prevState) => ({
      ...prevState,
      disabledBtn: false,
      station: "returning-user",
    }));

    console.log(formInputs.numberThroughSignin.length);
  }, []);
  const onPromoClick = () => {
    setPromoMsgShow(true);
    setFormInputs((prevState) => ({
      ...prevState,
      discount: 3,
    }));
  };
  const onPromoRemove = () => {
    setFormInputs((prevState) => ({
      ...prevState,

      promoCode: "",
    }));
    setPromoMsgShow(false);
  };
  const handleInputChange = (e) => {
    setFormInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const classes = useStyles();
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="returningUser-main">
          <div style={{ marginBottom: "11px" }}>
            <h2 className="returningUser-heading">
              Welcome back {formInputs.fullNameEditForm}!
            </h2>
            <h2 className="returningUser-heading">
              Double check your information.
            </h2>
          </div>
          <div className="returningUser-card-div">
            <div className="returningUser-card-heading">
              Shipping and Payment
            </div>
            <div className="shippingNpayment">
              <div className="change-btn">
                <div className="shippingNpayment-icon">
                  <FmdGoodOutlinedIcon fontSize="small" />
                </div>
                <div>
                  <div className="shippingNpayment-text">
                    {formInputs.addressEditForm}
                  </div>
                  {/* <div className="shippingNpayment-text">Address</div> */}
                </div>
              </div>
              <button
                className="pink-btn"
                onClick={() => setIsEditShippingOpen(true)}
              >
                Change
              </button>
            </div>
            <div className="shippingNpayment">
              <div className="change-btn">
                <div className="shippingNpayment-icon">
                  <LocalShippingOutlinedIcon fontSize="small" />
                </div>
                <div>
                  <div className="shippingNpayment-text">
                    {returningUserInputs.deliveryType}: $
                    {returningUserInputs.deliveryTypeAmount}
                  </div>
                  <div className="shippingNpayment-text">
                    {" "}
                    Estimated delivery{" "}
                    {returningUserInputs.deliveryType === "Free Shipping"
                      ? "10-15 days"
                      : ""}
                    {returningUserInputs.deliveryType === "Standard Shipping"
                      ? "3-5 days"
                      : ""}
                    {returningUserInputs.deliveryType === "Express Shipping"
                      ? "1-2 days"
                      : ""}
                  </div>
                </div>
              </div>
              <button
                className="pink-btn"
                onClick={() => setIsEditDeliveryOpen(true)}
              >
                Change
              </button>
            </div>
            <div className="shippingNpayment">
              <div className="change-btn">
                <div className="shippingNpayment-icon">
                  <CreditCardOutlinedIcon fontSize="small" />
                </div>
                <div style={{ display: "flex" }}>
                  <div className="shippingNpayment-text">
                    {returningUserInputs.paymentMethod === "cod" ? (
                      <span>Cash on delivery</span>
                    ) : (
                      ""
                    )}
                    {returningUserInputs.paymentMethod === "card1" ? (
                      <img
                        style={{ transform: "scale(0.9)", marginLeft: "-4px" }}
                        src={masterCardLogo}
                        alt=""
                      />
                    ) : (
                      ""
                    )}
                    {returningUserInputs.paymentMethod === "card2" ? (
                      <img
                        style={{ transform: "scale(0.9)", marginLeft: "-4px" }}
                        src={visaCardLogo}
                        alt=""
                      />
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
                        style={{ transform: "scale(0.9)", marginLeft: "-4px" }}
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
                  <div
                    className="shippingNpayment-text"
                    style={{ marginLeft: "5px" }}
                  >
                    {returningUserInputs.paymentMethod === "card1"
                      ? "****6754"
                      : ""}
                    {returningUserInputs.paymentMethod === "card2"
                      ? "****0909"
                      : ""}
                    {/* {returningUserInputs.paymentMethod === "paypal"
                      ? returningUserInputs.email
                      : ""} */}
                    {returningUserInputs.paymentMethod === "amazon"
                      ? "jordan.olivas@gmail.com"
                      : ""}
                    {/* {returningUserInputs.paymentMethod === "clearpay"
                      ? "Visa card ending with 4362"
                      : ""}
                    {returningUserInputs.paymentMethod === "klarna"
                      ? "Visa card ending with 4362"
                      : ""} */}
                  </div>
                </div>
              </div>
              <button
                className="pink-btn"
                onClick={() => setIsEditPaymentOpen(true)}
              >
                Change
              </button>
            </div>

            <div className="shippingNpayment">
              <div className="change-btn">
                <div className="shippingNpayment-icon">
                  <AccountBalanceWalletOutlinedIcon fontSize="small" />
                </div>
                <div>
                  <div className="shippingNpayment-text">
                    Use Vault Points 10
                  </div>
                </div>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
          <div className="returningUser-promo-div">
            <div className="promo-hr">Do you have a promode?</div>

            <TextField
              sx={{ width: "100%" }}
              InputProps={{
                disableUnderline: true,
                startAdornment: (
                  <InputAdornment position="center" component="div">
                    {formInputs.promoCode === "2020" && promoMsgShow == true ? (
                      <VerifiedIcon
                        sx={{
                          paddingTop: "16px",
                          paddingRight: "5px",
                          color: "#2CAB00",
                        }}
                      />
                    ) : (
                      <VerifiedIcon
                        sx={{
                          paddingTop: "16px",
                          paddingRight: "5px",
                        }}
                      />
                    )}
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="center" component="div">
                    {formInputs.promoCode === "2020" && promoMsgShow == true ? (
                      <Button
                        sx={{ fontSize: "15px", fontWeight: "800" }}
                        className="verify"
                        onClick={() => onPromoRemove()}
                        disabled={formInputs.promoCode === ""}
                      >
                        Remove
                      </Button>
                    ) : (
                      <Button
                        sx={{ fontSize: "15px", fontWeight: "800" }}
                        className="verify"
                        onClick={() => onPromoClick()}
                        disabled={formInputs.promoCode === ""}
                      >
                        Apply
                      </Button>
                    )}
                  </InputAdornment>
                ),
              }}
              type="text"
              name="promoCode"
              value={formInputs.promoCode}
              onChange={handleInputChange}
              disableUnderline={true}
              className={classes.promo}
              placeholder=""
              label="Enter Promo code here"
              error={false}
              variant="filled"
            />
            {formInputs.promoCode === "2020" && promoMsgShow == true ? (
              <div className="promo">
                {/* <img src="../../assets/Promo Code Added! Please review your order detail for updated cart before making the payment..svg" alt=""> */}
                <div className="promo-text">-$3.00 (10% Off)</div>
              </div>
            ) : (
              ""
            )}
            {formInputs.promoCode !== "2020" && promoMsgShow === true ? (
              <div className="promo">
                {/* <img src="../../assets/Promo Code Added! Please review your order detail for updated cart before making the payment..svg" alt=""> */}
                <div className="promo-text-wrong">
                  Unfortunately!Promo Code didn't apply!
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="refund-policy">
            Have Questions? Read Merchant’s{" "}
            <button
              className="pink-btn"
              onClick={() => setOpenRefundPolicy(true)}
            >
              Refunds Policy
            </button>
          </div>
        </div>
        <div className="dummy-div"></div>
        {/* <footer  className='cartFixed'><CartMenubar/></footer> */}
        <Drawer
          classes={{ paper: classes.drawerPaper }}
          anchor="bottom"
          open={openRefundPolicy}
          onClose={() => setOpenRefundPolicy(false)}
        >
          <div>
            <div className="edit-drawer-header">
              <h5 className="drawer-heading">REFUND POLICY</h5>
              <a>
                <CloseRoundedIcon
                  className="clear"
                  fontSize="1.3rem"
                  onClick={() => setOpenRefundPolicy(false)}
                />
              </a>
            </div>
            <hr className="hr-drawer" />

            <div className="refund-text">
              A good refund or return policy can help protect your company and
              win your customers’ trust, but making sure your language is clear
              and concise is extremely important. Our return policy template can
              help make it easy to generate a professional, ready-to-use refund
              or return policy. A good refund or return policy can help protect
              your company and win your customers’ trust, but making sure your
              language is clear and concise is extremely important. Our return
              policy template can help make it easy to generate a professional,
              ready-to-use refund or return policy.
              <div></div>
              <div>
                A good refund or return policy can help protect your company and
                win your customers’ trust, but making sure your language is
                clear and concise is extremely important. Our return policy
                template can help make it easy to generate a professional,
                ready-to-use refund or return policy.
              </div>
            </div>
          </div>
        </Drawer>
        <Drawer
          classes={{ paper: classes.drawerPaper }}
          anchor="bottom"
          open={isEditContactOpen}
          onClose={() => setIsEditContactOpen(false)}
        >
          <EditContactInfo onClose={() => setIsEditContactOpen(false)} />
        </Drawer>
        <Drawer
          classes={{ paper: classes.drawerPaper }}
          anchor="bottom"
          open={isEditShippingOpen}
          onClose={() => setIsEditShippingOpen(false)}
        >
          <EditShippingAddress onClose={() => setIsEditShippingOpen(false)} />
        </Drawer>
        <Drawer
          classes={{ paper: classes.drawerPaper }}
          anchor="bottom"
          open={isEditDeliveryOpen}
          onClose={() => setIsEditDeliveryOpen(false)}
        >
          <EditDeliveryType onClose={() => setIsEditDeliveryOpen(false)} />
        </Drawer>
        <Drawer
          classes={{ paper: classes.drawerPaper }}
          anchor="bottom"
          open={isEditPaymentOpen}
          onClose={() => setIsEditPaymentOpen(false)}
        >
          <EditPaymentMethod onClose={() => setIsEditPaymentOpen(false)} />
        </Drawer>
      </ThemeProvider>
    </>
  );
};
