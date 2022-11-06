import React, { useContext, useEffect, useState } from "react";
import { NewUser } from "./NewUser";
import "../style.css";
import lockImg from "../assets/Group 7483.svg";
import { Checkpoints } from "../Components/Checkpoints";
import { Input } from "../Components/Input";
import { makeStyles } from "@mui/styles";
import AddIcon from "@mui/icons-material/Add";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate } from "react-router-dom";

import flagIcon from "../assets/Group 7554.svg";
import { OrderReviewCards } from "../Components/OrderReviewCards";
import { CartMenubar } from "../Components/CartMenubar";
import { inputContext } from "../Context/inputContext";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import thumbnail from "../assets/Rectangle 206 (1).svg";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Button,
  createTheme,
  Drawer,
  InputAdornment,
  TextField,
  ThemeProvider,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import { Otp } from "../Components/Otp";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFilledInput-root.Mui-focused": {
      backgroundColor: "white",
      border: "1px solid #E71583",
    },
    "& .MuiFilledInput-root": {
      background: "white",
      width: "100%",
      marginBottom: "10px",

      border: "1px solid #C2C2C2",
      borderRadius: "6px",
    },
  },
  cardInput: {
    border: "1px solid black",
    padding: "20px",
  },
}));

export const SignIn2 = () => {
  const [deleteCart, setDeleteCart] = useState(false);
  const [orderDetailOpen, setOrderDeatilOpen] = useState(true);
  const [isOtpOpen, setIsOtpOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const classes = useStyles();
  const { returningUserInputs, setReturningUserInputs } =
    useContext(inputContext);
  const { formInputs, setFormInputs } = useContext(inputContext);
  useEffect(() => {
    setFormInputs((prevState) => ({
      ...prevState,
      disabledBtn: true,
      station: "",
      paymentMethod: "",
      shippingAddress: "",
    }));

    console.log(formInputs.numberThroughSignin.length);
  }, []);
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    setFormInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    setReturningUserInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const theme = createTheme({
    palette: {
      primary: {
        main: "#E72E80",
      },
    },
  });
  const onClose = () => {
    setIsOtpOpen(false);
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="main-signIn2">
          <div className="signIn-heading">Start your Checkout!</div>
          <div className="signIn-text">
            Enter your phone number below to start with the checkout process.
            {/* <InfoOutlinedIcon
              fontSize="12px"
              sx={{ position: "relative", top: "2px" }}
            ></InfoOutlinedIcon> */}
          </div>
          <div className="singIn-number-input">
            <TextField
              sx={{ width: "100%" }}
              InputProps={{
                disableUnderline: true,

                // endAdornment: (
                //   <InputAdornment position="center" component="div">
                //     <Button
                //       disabled={
                //         formInputs.numberThroughSignin.toString().length < 12
                //       }
                //       variant="contained"
                //       sx={{
                //         fontWeight: "600",
                //         height: "35.65217208862305px",
                //         width: "auto",
                //         padding: "0px 20px",
                //         borderRadius: "7px",
                //         color: " white",

                //         fontSize: "13px",
                //       }}
                //       className="signin-button"
                //       onClick={() => setIsOtpOpen(true)}
                //     >
                //       Send OTP
                //     </Button>
                //   </InputAdornment>
                // ),
                startAdornment: (
                  <InputAdornment position="start" component="div">
                    <img className="falg" src={flagIcon} alt="" />

                    <AddIcon
                      sx={{
                        color: "#000000",
                        fontSize: "13px",
                        position: "relative",
                        left: "10px",
                      }}
                    />
                  </InputAdornment>
                ),
              }}
              type="number"
              name="numberThroughSignin"
              value={formInputs.numberThroughSignin}
              onChange={handleInputChange}
              disableUnderline={true}
              className={classes.root}
              placeholder=""
              label="Phone Number"
              error={false}
              variant="filled"
              onInput={(e) => {
                e.target.value = Math.max(0, e.target.value)
                  .toString()
                  .slice(0, 12);
              }}
            />
          </div>
          <div className="checkbox-div">
            <FormControlLabel
              sx={{
                display: "flex",
                alignItems: "start",
              }}
              className="newUser-checkBox"
              control={
                <Checkbox
                  sx={{
                    paddingTop: "1px",
                    marginTop: "0px",
                    "& .MuiSvgIcon-root": {
                      fontSize: "19px",
                      color: "#000000",
                    },
                  }}
                  defaultChecked
                />
              }
              label={
                <div className="lable">
                  By continuing, I agree to QisstPay{" "}
                  <button className="terms">Terms of service.</button>
                </div>
              }
            />
          </div>
          <div className="button-div">
            <button
              style={{ width: "100%" }}
              className="buttons"
              onClick={() => setIsOtpOpen(true)}
              disabled={formInputs.numberThroughSignin.toString().length < 12}
            >
              Send OTP
            </button>
            <button
              style={{ width: "100%" }}
              disabled={formInputs.numberThroughSignin.toString().length < 12}
              className="white guest-btn buttons"
              onClick={() => navigate("/guest")}
            >
              Guest Checkout
            </button>
          </div>
          <div className="signIn-ordeDetail">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  display: "flex",

                  alignItems: "center",
                }}
                onClick={() => setOrderDeatilOpen(!orderDetailOpen)}
              >
                <div style={{ display: " flex ", alignItems: "center" }}>
                  <ShoppingCartIcon fontSize="small" sx={{ padding: "2px" }} />
                  <h2 className="brand-name"> Order Detail </h2>
                </div>
                {orderDetailOpen ? (
                  <KeyboardArrowUpIcon className="right-icon" />
                ) : (
                  <KeyboardArrowDownIcon className="right-icon" />
                )}
              </div>
              <div className="pink-btn-signin">+ Add More Products</div>
            </div>

            {orderDetailOpen ? (
              <div>
                <div>
                  <div className="product-detail">
                    <div className="product-img-with-detail">
                      <img className="icon" src={thumbnail} alt="" />
                      <div className="product">
                        <div className="text">MAVERICK STRONG ADHESIVE</div>
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
                        ${parseFloat(formInputs.productAmount.toFixed(2))}
                      </div>
                      <DeleteIcon
                        fontSize="small"
                        sx={{
                          position: "relative",
                          right: "-16px",
                          top: "4px",
                        }}
                        onClick={() => setDeleteCart(true)}
                      />
                    </div>
                  </div>
                </div>
                <hr className="hr-cart" />
                {/* <div><img src="../assets/Group 7550.svg" alt=""></div> */}
                <div style={{ paddingBottom: "5px" }}>
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
                    <div className="amount">
                      {formInputs.station !== "" ||
                      formInputs.station === "returning-user" ? (
                        <div>
                          $
                          {formInputs.station === "returning-user" ? (
                            returningUserInputs.deliveryTypeAmount
                          ) : (
                            <div>
                              {parseFloat(
                                formInputs.deliveryTypeAmount.toFixed(2)
                              )}
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="toBe-text">To be calculated</div>
                      )}
                    </div>
                  </div>

                  <div className="amount-row">
                    <div className="text toBe-text">
                      {formInputs.shippingAddress == ""
                        ? "Estimated Tax"
                        : "Tax"}
                    </div>
                    {formInputs.shippingAddress == "" ? (
                      <div className="toBe-text">To be calculated</div>
                    ) : (
                      <div className="amount">
                        ${" "}
                        {parseFloat(
                          formInputs.tax * formInputs.Quantity
                        ).toFixed(2)}
                      </div>
                    )}
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
                {/* <hr className="hr-cart" /> */}
                {/* <div className="total-div" style={{ marginBottom: "30px" }}>
                  <div className="total">Total</div>
                  <div className="total">
                    $
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
                </div> */}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </ThemeProvider>
      <Drawer
        anchor="bottom"
        open={isOtpOpen}
        onClose={() => setIsOtpOpen(false)}
      >
        <Otp onClose={onClose} />
      </Drawer>
    </>
  );
};
