import React, { useState } from "react";
import { DeliveryType } from "../Components/DeliveryType";
import { Input } from "../Components/Input";
import { PaymentMethod } from "../Components/PaymentMethod";
import cardLogo from "../assets/Group 6939.svg";

import paypalLogo from "../assets/Group 6943.svg";
import klarnaLogo from "../assets/Group 7552.svg";
import amazonLogo from "../assets/Group 6969.svg";
import clearpayLogo from "../assets/Group 7551 (1).svg";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import infoImg2 from "../assets/Page-1.svg";
import infoImg1 from "../assets/Group.svg";
import RadioGroup from "@mui/material/RadioGroup";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Checkpoints } from "../Components/Checkpoints";
import { Button, InputAdornment, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CreditCardInput from "react-credit-card-input";
import { inputContext } from "../Context/inputContext";
import { useContext } from "react";

// import TextField from '@mui/material/TextField';
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

export const NewUser = (props) => {
  // const formInputContext = useContext(inputContext);
  const [selectedDeliveryType, setDeliveryType] = useState(5.95);
  const handleDeliveryTypeChange = (ev) => {
    setDeliveryType({ selectedDeliveryType: ev.target.value });
  };
  const [selectedPaymentMethod, setPaymentMethod] = useState("card");

  const handlePaymentMethodChange = (ev) => {
    setPaymentMethod({ selectedDeliveryType: ev.target.value });
  };
  const [promoMsgShow, setPromoMsgShow] = useState(false);
  const classes = useStyles();
  const [isManualAddressOpen, setisManualAddressOpen] = useState(false);

  const [inputs, setInputs] = useState({
    email: "",
    fullName: "",
    shippingAddress: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    province: "",
    country: "",
    zip: "",
    promoCode: "",
  });
  const handleInputChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        {window.location.pathname === "/new-user" ? <Checkpoints /> : ""}
        <div className="newUser-main">
          <form onSubmit={handleSubmit}>
            {/* <CustomCheckbox defaultChecked /> */}

            <h2 className="newUser-headings">1. Shipping Information</h2>

            <TextField
              sx={{ width: "100%" }}
              onChange={handleInputChange}
              name="email"
              value={inputs.email}
              InputProps={{ disableUnderline: true }}
              className={classes.root}
              placeholder=" "
              label="Email"
              error={false}
              variant="filled"
            />

            <TextField
              sx={{ width: "100%" }}
              value={inputs.fullName}
              name="fullName"
              onChange={handleInputChange}
              InputProps={{ disableUnderline: true }}
              className={classes.root}
              placeholder=""
              label="Full Name"
              error={false}
              variant="filled"
            />
            <TextField
              sx={{ width: "100%" }}
              name="shippingAddress"
              value={inputs.shippingAddress}
              onChange={handleInputChange}
              InputProps={{ disableUnderline: true }}
              className={classes.root}
              placeholder=""
              label="Shipping Address"
              error={false}
              variant="filled"
            />
            {/* <Input flagIcon={true} placeholder={'Email'} button={false}/>  
                <Input flagIcon={true} placeholder={'Full Name'} button={false}/> 
                <Input flagIcon={true} placeholder={'Shipping Address'} button={false}/>  */}
            {/* <TextField className='newUser-textField' id="outlined-basic" label="Email" variant="outlined" />
                <TextField className='newUser-textField' id="outlined-basic" label="Full Name" variant="outlined" />
                <TextField className='newUser-textField' id="outlined-basic" label="Shipping Address" variant="outlined" /> */}
            {/* <p className='manual-address'>Enter Address Manually</p>  */}
            <FormControlLabel
              className="newUser-checkBox"
              control={
                <Checkbox
                  defaultChecked
                  onClick={() => setisManualAddressOpen(!isManualAddressOpen)}
                />
              }
              label="My billing address is same as shipping."
            />

            {isManualAddressOpen ? (
              <div>
                <TextField
                  sx={{ width: "100%", paddingTop: "10px" }}
                  InputProps={{ disableUnderline: true }}
                  name="addressLine1"
                  value={inputs.addressLine1}
                  onChange={handleInputChange}
                  className={classes.root}
                  placeholder=" "
                  label="Address Line 1"
                  error={false}
                  variant="filled"
                />

                <TextField
                  sx={{ width: "100%" }}
                  InputProps={{ disableUnderline: true }}
                  name="addressLine2"
                  value={inputs.addressLine2}
                  onChange={handleInputChange}
                  className={classes.root}
                  placeholder=""
                  label="Address Line 2 (Optional)"
                  error={false}
                  variant="filled"
                />
                <div className="flex-feilds">
                  <TextField
                    sx={{ width: "100%", paddingRight: "10px" }}
                    InputProps={{ disableUnderline: true }}
                    name="city"
                    value={inputs.city}
                    onChange={handleInputChange}
                    className={classes.root}
                    placeholder=""
                    label="City"
                    error={false}
                    variant="filled"
                  />
                  <TextField
                    sx={{ width: "100%" }}
                    InputProps={{ disableUnderline: true }}
                    name="province"
                    value={inputs.province}
                    onChange={handleInputChange}
                    className={classes.root}
                    placeholder=" "
                    label="Province"
                    error={false}
                    variant="filled"
                  />
                </div>

                <div className="flex-feilds">
                  <TextField
                    sx={{ width: "100%", paddingRight: "10px" }}
                    name="country"
                    value={inputs.country}
                    onChange={handleInputChange}
                    InputProps={{ disableUnderline: true }}
                    className={classes.root}
                    placeholder=""
                    label="Country"
                    error={false}
                    variant="filled"
                  />
                  <TextField
                    f
                    sx={{ width: "100%" }}
                    name="zip"
                    value={inputs.zip}
                    onChange={handleInputChange}
                    InputProps={{ disableUnderline: true }}
                    className={classes.root}
                    placeholder=""
                    label="Zip Code"
                    error={false}
                    variant="filled"
                  />
                </div>
              </div>
            ) : (
              ""
            )}

            <h2 className="newUser-headings">2. Delivery Type</h2>
            {/* <div class="box disabled" >
                        <div class="required-shippingadd">Shipping options will show up once you enter shipping address</div>
                    </div> */}
            <RadioGroup
              onChange={handleDeliveryTypeChange}
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Standard"
              name="radio-buttons-group"
            >
              <DeliveryType
                DeliveryType={"Standard"}
                heading={" (6 to 9 business days) "}
                price={5.95}
                date={" Thurs, Jan 16"}
              />
              <DeliveryType
                DeliveryType={"Express"}
                heading={" (6 to 9 business days) "}
                price={12.95}
                date={" Mon, Jan 13"}
                // onChange={() =>
                //   formInputContext.setFormInputs(
                //     selectedDeliveryType.selectedDeliveryType
                //   )
                // }
              />
              <DeliveryType
                className="deliveryTypeSpace"
                DeliveryType={"Next Day"}
                heading={" (6 to 9 business days) "}
                price={22.95}
                date={" Thurs, Jan 09"}
                // onChange={() =>
                //   formInputContext.setFormInputs(
                //     selectedDeliveryType.selectedDeliveryType
                //   )
                // }
              />
            </RadioGroup>
            <h2 className="newUser-headings">3. Payment Method</h2>
            <RadioGroup
              onChange={handlePaymentMethodChange}
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
            >
              <PaymentMethod
                className="newUser-payment-method"
                imgUrl={cardLogo}
                plan={"PAY FULL"}
                value={"card"}
              />
              <CreditCardInput
                className={classes.cardInput}
                cardCVCInputProps={{
                  onBlur: (e) => console.log("cvc blur", e),
                  onChange: (e) => console.log("cvc change", e),
                  onError: (err) => console.log(`cvc error: ${err}`),
                }}
              />
              <PaymentMethod
                className="newUser-payment-method"
                imgUrl={paypalLogo}
                plan={"PAY FULL"}
                value={"paypal"}
              />
              <PaymentMethod
                className="newUser-payment-method"
                imgUrl={klarnaLogo}
                plan={"PAY PLAN"}
                value={"klarna"}
              />
              <PaymentMethod
                className="newUser-payment-method"
                imgUrl={clearpayLogo}
                plan={"PAY PALN"}
                value={"clearpay"}
              />
              <PaymentMethod
                className="newUser-payment-method"
                imgUrl={amazonLogo}
                plan={"PAY FULL"}
                value={"amazon"}
              />
            </RadioGroup>
            {/* <div className="promo-input-feild">
                <input className="promo-feild" matinput="" placeholder=" Enter Promo Code" />
                <button className="verify">Apply</button>
            </div> */}
            <TextField
              f
              sx={{ width: "100%" }}
              InputProps={{
                disableUnderline: true,
                endAdornment: (
                  <InputAdornment position="center" component="div">
                    <Button
                      sx={{ fontSize: "15px", fontWeight: "800" }}
                      className="verify"
                      onClick={() => setPromoMsgShow(true)}
                    >
                      Apply
                    </Button>
                  </InputAdornment>
                ),
              }}
              type="number"
              name="promoCode"
              value={inputs.promoCode}
              onChange={handleInputChange}
              disableUnderline={true}
              className={classes.root}
              placeholder=""
              label="Enter Promo code here"
              error={false}
              variant="filled"
            />
            {promoMsgShow ? (
              <div className="promo">
                {/* <img src="../../assets/Promo Code Added! Please review your order detail for updated cart before making the payment..svg" alt=""> */}
                <div className="promo-text">
                  Promo Code Added! Please review your order detail for updated
                  cart before making the payment.
                </div>
              </div>
            ) : (
              ""
            )}
            <div className="info">
              <img id="info-img" src={infoImg1} alt="" />
              <div className="info-text">
                We will set this payment method as your default, that you can
                change later.
                <img className="info-img-2" src={infoImg2} alt="" />
              </div>
            </div>
            <Button
              type="submit"
              onClick={() =>
                console.log(selectedDeliveryType.selectedDeliveryType)
              }
            >
              Submit
            </Button>
          </form>
        </div>
        <div class="dummy-div"></div>
        {/* <footer  className='cartFixed'><CartMenubar/></footer> */}
      </ThemeProvider>
    </>
  );
};
