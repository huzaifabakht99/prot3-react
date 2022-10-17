import React, { useEffect, useState } from "react";
import { DeliveryType } from "../Components/DeliveryType";
import { Input } from "../Components/Input";
import { PaymentMethod } from "../Components/PaymentMethod";
import cardLogo from "../assets/Group 6939.svg";
import MyFormControlLabel from "@mui/material/FormControlLabel";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

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
import headerImg from "../assets/Group 7553 (1).svg";
import {
  Button,
  Hidden,
  InputAdornment,
  Radio,
  TextField,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import CreditCardInput from "react-credit-card-input";
import { inputContext } from "../Context/inputContext";
import { useContext } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import klarnaImg from "../assets/Group 7439.svg";
import afterpayImg from "../assets/Group 7439 (1).svg";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

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
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvc, setCardCvc] = useState("");
  const [focus, setFocus] = useState("");
  // const [expanded, setExpanded] = React.useState(false);

  // const handleChange = (panel) => (event, isExpanded) => {
  //   setExpanded(isExpanded ? panel : false);
  // };
  const { formInputs, setFormInputs } = useContext(inputContext);
  const [selectedDeliveryType, setDeliveryType] = useState(5.95);
  const handleDeliveryTypeChange = (ev) => {
    setDeliveryType({ selectedDeliveryType: ev.target.value });
  };
  const [selectedPaymentMethod, setPaymentMethod] = useState("card");

  const handlePaymentMethodChange = (ev) => {
    setPaymentMethod({ selectedPaymentMethod: ev.target.value });
  };
  const [promoMsgShow, setPromoMsgShow] = useState(false);
  const classes = useStyles();
  const [isManualAddressOpen, setisManualAddressOpen] = useState(false);

  const [cardSelectedState, setCardSelectedState] = useState("cod");

  // const [inputs, setInputs] = useState({
  //   email: "",
  //   fullName: "",
  //   shippingAddress: "",
  //   addressLine1: "",
  //   addressLine2: "",
  //   city: "",
  //   province: "",
  //   country: "",
  //   zip: "",
  //   promoCode: "",
  // });
  const handleInputChange = (e) => {
    setFormInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleShippingInputChange = (e) => {
    setFormInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
      deliveryTypeAmount: 0,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formInputs);
  };
  useEffect(() => {
    setFormInputs((prevState) => ({
      ...prevState,
      disabledBtn: false,
      station: "new-user",
    }));
  }, []);

  const onPromoClick = () => {
    setPromoMsgShow(true);
    setFormInputs((prevState) => ({
      ...prevState,
      discount: 3,
    }));
  };
  const handleCardNumberInput = (e) => {
    setCardNumber(e.target.value);
  };
  const handleCardExpiryInput = (e) => {
    setCardExpiry(e.target.value);
  };
  const handleCardCvcInput = (e) => {
    setCardCvc(e.target.value);
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
              value={formInputs.email}
              InputProps={{ disableUnderline: true }}
              className={classes.root}
              placeholder=" "
              label="Email"
              error={false}
              variant="filled"
            />

            <TextField
              sx={{ width: "100%" }}
              value={formInputs.fullName}
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
              value={formInputs.shippingAddress}
              onChange={handleShippingInputChange}
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
                  value={formInputs.addressLine1}
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
                  value={formInputs.addressLine2}
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
                    name="country"
                    value={formInputs.country}
                    onChange={handleInputChange}
                    InputProps={{ disableUnderline: true }}
                    className={classes.root}
                    placeholder=""
                    label="Country"
                    error={false}
                    variant="filled"
                  />
                  <TextField
                    sx={{ width: "100%" }}
                    InputProps={{ disableUnderline: true }}
                    name="province"
                    value={formInputs.state}
                    onChange={handleInputChange}
                    className={classes.root}
                    placeholder=" "
                    label="State"
                    error={false}
                    variant="filled"
                  />
                </div>

                <div className="flex-feilds">
                  <TextField
                    sx={{ width: "100%", paddingRight: "10px" }}
                    InputProps={{ disableUnderline: true }}
                    name="city"
                    value={formInputs.city}
                    onChange={handleInputChange}
                    className={classes.root}
                    placeholder=""
                    label="City"
                    error={false}
                    variant="filled"
                  />
                  <TextField
                    sx={{ width: "100%" }}
                    name="zip"
                    value={formInputs.zip}
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
            {formInputs.shippingAddress ? (
              <RadioGroup
                onChange={handleDeliveryTypeChange}
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue={0}
                name="radio-buttons-group"
              >
                <div
                  className="delivery-type-box"
                  style={{
                    border:
                      formInputs.deliveryTypeAmount === 0
                        ? "1px solid #E71583"
                        : "",
                  }}
                >
                  <DeliveryType
                    DeliveryType={"Standard"}
                    heading={" (6 to 9 business days) "}
                    price={0}
                    date={" Thurs, Jan 16"}
                  />
                </div>
                <div
                  className="delivery-type-box"
                  style={{
                    border:
                      formInputs.deliveryTypeAmount === 12.95
                        ? "1px solid #E71583"
                        : "",
                  }}
                >
                  <DeliveryType
                    DeliveryType={"Express"}
                    heading={" (2 to 3 business days) "}
                    price={12.95}
                    date={" Mon, Jan 13"}
                    // onChange={() =>
                    //   formInputContext.setFormformInputs(
                    //     selectedDeliveryType.selectedDeliveryType
                    //   )
                    // }
                  />
                </div>
                <div
                  className="delivery-type-box"
                  style={{
                    border:
                      formInputs.deliveryTypeAmount === 22.95
                        ? "1px solid #E71583"
                        : "",
                  }}
                >
                  <DeliveryType
                    className="deliveryTypeSpace"
                    DeliveryType={"Next Day"}
                    heading={" (1 to 2 business days) "}
                    price={22.95}
                    date={" Thurs, Jan 09"}
                    // onChange={() =>
                    //   formInputContext.setFormformInputs(
                    //     selectedDeliveryType.selectedDeliveryType
                    //   )
                    // }
                  />
                </div>
              </RadioGroup>
            ) : (
              <div className="box disabled">
                <div className="required-shippingadd">
                  Shipping options will show up once you enter shipping address
                </div>
              </div>
            )}
            <h2 className="newUser-headings">3. Payment Method</h2>
            <RadioGroup
              onChange={handlePaymentMethodChange}
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
            >
              {/* <div>
                <Accordion
                  expanded={expanded === "panel0"}
                  onChange={handleChange("panel0")}
                >
                  <AccordionSummary
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <div className="payment-method-div">
                      <MyFormControlLabel
                        sx={{
                          display: "contents",

                          justifyContent: "space-between",
                        }}
                        id="cod"
                        value="cod"
                        control={<Radio />}
                      />
                      <div className="radio-div-payment">
                        <div>
                          <div className="cod">Cash on Delivery</div>
                        </div>
                        <div className="palns-div">
                          <div className="plans">COD</div>
                          <div>
                            {" "}
                            
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionSummary>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <PaymentMethod
                      className="newUser-payment-method"
                      imgUrl={cardLogo}
                      plan={"PAY FULL"}
                      value={"card"}
                    />
                  </AccordionSummary>
                  <AccordionDetails>
                    <CreditCardInput
                      className={classes.cardInput}
                      cardCVCInputProps={{
                        onBlur: (e) => console.log("cvc blur", e),
                        onChange: (e) => console.log("cvc change", e),
                        onError: (err) => console.log(`cvc error: ${err}`),
                      }}
                    />
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel2"}
                  onChange={handleChange("panel2")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                  >
                    <PaymentMethod
                      className="newUser-payment-method"
                      imgUrl={paypalLogo}
                      plan={"PAY FULL"}
                      value={"paypal"}
                    />
                  </AccordionSummary>
                  <AccordionDetails>
                    <div class="option-expandes-more">
                      <div class="website-link">
                        <div class="text">
                          Complete your transaction via PayPal by clicking on
                          the button below
                        </div>
                        <div class="accordion-grey-text">
                          PayPal will open in a new tab.
                        </div>
                      </div>
                    </div>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel3"}
                  onChange={handleChange("panel3")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                  >
                    <PaymentMethod
                      className="newUser-payment-method"
                      imgUrl={klarnaLogo}
                      plan={"PAY PLAN"}
                      value={"klarna"}
                    />
                  </AccordionSummary>
                  <AccordionDetails>
                    <div class="klarna-div">
                      <img src={klarnaImg} alt="" />
                    </div>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel4"}
                  onChange={handleChange("panel4")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                  >
                    <PaymentMethod
                      className="newUser-payment-method"
                      imgUrl={clearpayLogo}
                      plan={"PAY PALN"}
                      value={"clearpay"}
                    />
                  </AccordionSummary>
                  <AccordionDetails>
                    <div class="option-expandes-more">
                      <div class="afterpay-div">
                        <img src={afterpayImg} alt="" />
                      </div>
                    </div>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel5"}
                  onChange={handleChange("panel5")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                  >
                    <PaymentMethod
                      className="newUser-payment-method"
                      imgUrl={amazonLogo}
                      plan={"PAY FULL"}
                      value={"amazon"}
                    />
                  </AccordionSummary>
                  <AccordionDetails>
                    <div class="option-expandes-more">
                      <div class="website-link">
                        <div class="accordion-text">
                          Complete your transaction via PayPal by clicking on
                          the button below
                        </div>
                        <div class="accordion-grey-text">
                          Amazon will open in a new tab.
                        </div>
                      </div>
                    </div>
                  </AccordionDetails>
                </Accordion>
              </div> */}

              {/* -------------------1------------------------ */}

              <div className="newUser-payment-method">
                <div className="payment-method-div">
                  <MyFormControlLabel
                    sx={{
                      display: "contents",

                      justifyContent: "space-between",
                    }}
                    id="cod"
                    value="cod"
                    control={
                      <Radio
                        checked={cardSelectedState === "cod" ? true : false}
                        onClick={() =>
                          setFormInputs((prevState) => ({
                            ...prevState,
                            paymentMethod: "cod",
                          }))
                        }
                      />
                    }
                  />
                  <div
                    onClick={() => setCardSelectedState("cod")}
                    className="radio-div-payment"
                  >
                    <div>
                      <div className="cod">Cash on Delivery</div>
                    </div>
                    <div className="palns-div">
                      <div className="plans">COD</div>
                      <div>
                        <KeyboardArrowDownIcon
                          sx={{ visibility: "hidden" }}
                          className="paymentMethod-icon"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* -------------------2------------------------ */}
              <div className="newUser-payment-method">
                <PaymentMethod
                  className="newUser-payment-method"
                  imgUrl={cardLogo}
                  plan={"PAY FULL"}
                  value={"card"}
                  setCardSelectedState={setCardSelectedState}
                  cardSelectedState={cardSelectedState}
                />
              </div>
              {formInputs.paymentMethod === "card" ? (
                <div
                  className="card-input"
                  style={{
                    flexDirection: "column",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div className="cards-div">
                    {/* <div style={{ paddingBottom: "20px" }}>
                      <Cards
                        cvc={cardCvc}
                        expiry={cardExpiry}
                        focused={focus}
                        name={cardName}
                        number={cardNumber}
                      />
                    </div> */}
                    {/* <div>
                      <TextField
                        sx={{ width: "100%" }}
                        onChange={handleCardInput}
                        type="tel"
                        name="cardNumber"
                        placeholder="Card Number"
                        value={cardNumber}
                        InputProps={{ disableUnderline: true }}
                        className={classes.root}
                        label="Card Number"
                        error={false}
                        variant="filled"
                        onFocus={(e) => setFocus(e.target.name)}
                        onInput={(e) => {
                          e.target.value = Math.max(0, e.target.value)
                            .toString()
                            .slice(0, 16);
                        }}
                      />
                      <TextField
                        sx={{ width: "100%" }}
                        onChange={(e) => setCardName(e.target.value)}
                        name="cardName"
                        value={cardName}
                        InputProps={{ disableUnderline: true }}
                        className={classes.root}
                        placeholder=" "
                        label="Card Name"
                        error={false}
                        variant="filled"
                        onFocus={(e) => setFocus(e.target.name)}
                      />
                      <div style={{ display: "flex" }}>
                        <TextField
                          sx={{ width: "100%", paddingRight: "10px" }}
                          onChange={(e) => setCardExpiry(e.target.value)}
                          name="expiry"
                          value={cardExpiry}
                          InputProps={{ disableUnderline: true }}
                          className={classes.root}
                          placeholder=" "
                          label="Expiry"
                          type="number"
                          error={false}
                          variant="filled"
                          onFocus={(e) => setFocus(e.target.name)}
                          onInput={(e) => {
                            e.target.value = Math.max(0, e.target.value)
                              .toString()
                              .slice(0, 4);
                          }}
                        />
                        <TextField
                          type="password"
                          sx={{ width: "100%" }}
                          onChange={(e) => setCardCvc(e.target.value)}
                          name="cvc"
                          value={cardCvc}
                          InputProps={{ disableUnderline: true }}
                          className={classes.root}
                          placeholder=" "
                          label="CVC"
                          error={false}
                          variant="filled"
                          onFocus={(e) => setFocus(e.target.name)}
                          onInput={(e) => {
                            e.target.value = Math.max(0, e.target.value)
                              .toString()
                              .slice(0, 3);
                          }}
                        />
                      </div>
                    </div> */}
                  </div>

                  <CreditCardInput
                    className={classes.cardInput}
                    // cardCVCInputProps={{
                    //   onBlur: (e) => console.log("cvc blur", e),
                    //   onChange: (e) => console.log("cvc change", e),
                    //   // onError: (err) => console.log(`cvc error: ${err}`),
                    // }}
                    cardNumberInputProps={{
                      value: cardNumber,
                      onChange: handleCardNumberInput,
                    }}
                    cardExpiryInputProps={{
                      value: cardExpiry,
                      onChange: handleCardExpiryInput,
                    }}
                    cardCVCInputProps={{
                      value: cardCvc,
                      onChange: handleCardCvcInput,
                    }}
                    containerStyle={{}}
                    fieldStyle={{
                      border: "1px solid #c2c2c2",
                      padding: "20px 10px",
                      borderRadius: "6px",
                    }}
                  />
                </div>
              ) : (
                ""
              )}
              {/* -------------------3------------------------ */}
              <div className="newUser-payment-method">
                <PaymentMethod
                  className="newUser-payment-method"
                  imgUrl={paypalLogo}
                  plan={"PAY FULL"}
                  value={"paypal"}
                  setCardSelectedState={setCardSelectedState}
                  cardSelectedState={cardSelectedState}
                />
              </div>
              {formInputs.paymentMethod == "paypal" ? (
                <div class="option-expandes-more">
                  <div class="website-link">
                    <div class="accordion-text">
                      Complete your transaction via PayPal by clicking on the
                      Buy button below
                    </div>
                    <div class="accordion-grey-text">
                      PayPal will open in a new tab.
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
              {/* -------------------4------------------------ */}
              <div className="newUser-payment-method">
                <PaymentMethod
                  className="newUser-payment-method"
                  imgUrl={klarnaLogo}
                  plan={"PAY PLAN"}
                  value={"klarna"}
                  setCardSelectedState={setCardSelectedState}
                  cardSelectedState={cardSelectedState}
                />
              </div>
              {formInputs.paymentMethod == "klarna" ? (
                <div class="klarna-div">
                  <img src={klarnaImg} alt="" />
                </div>
              ) : (
                ""
              )}
              {/* -------------------5------------------------ */}
              <div className="newUser-payment-method">
                <PaymentMethod
                  className="newUser-payment-method"
                  imgUrl={clearpayLogo}
                  plan={"PAY PLAN"}
                  value={"clearpay"}
                  setCardSelectedState={setCardSelectedState}
                  cardSelectedState={cardSelectedState}
                />
              </div>
              {formInputs.paymentMethod == "clearpay" ? (
                <div class="option-expandes-more">
                  <div class="afterpay-div">
                    <img src={afterpayImg} alt="" />
                  </div>
                </div>
              ) : (
                ""
              )}
              {/* -------------------1------------------------ */}
              <div className="newUser-payment-method">
                <PaymentMethod
                  className="newUser-payment-method"
                  imgUrl={amazonLogo}
                  plan={"PAY FULL"}
                  value={"amazon"}
                  setCardSelectedState={setCardSelectedState}
                  cardSelectedState={cardSelectedState}
                />
              </div>
              {formInputs.paymentMethod == "amazon" ? (
                <div class="option-expandes-more">
                  <div class="website-link">
                    <div class="accordion-text">
                      Complete your transaction via PayPal by clicking on the
                      Buy button below
                    </div>
                    <div class="accordion-grey-text">
                      Amazon will open in a new tab.
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </RadioGroup>
            {/* <div className="promo-input-feild">
                <input className="promo-feild" matinput="" placeholder=" Enter Promo Code" />
                <button className="verify">Apply</button>
            </div> */}
            <TextField
              sx={{ width: "100%" }}
              InputProps={{
                disableUnderline: true,
                endAdornment: (
                  <InputAdornment position="center" component="div">
                    <Button
                      sx={{ fontSize: "15px", fontWeight: "800" }}
                      className="verify"
                      onClick={() => onPromoClick()}
                    >
                      Apply
                    </Button>
                  </InputAdornment>
                ),
              }}
              type="text"
              name="promoCode"
              value={formInputs.promoCode}
              onChange={handleInputChange}
              disableUnderline={true}
              className={classes.root}
              placeholder=""
              label="Enter Promo code here"
              error={false}
              variant="filled"
            />
            {formInputs.promoCode === "2020" && promoMsgShow == true ? (
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
            {formInputs.promoCode !== "2020" && promoMsgShow == true ? (
              <div className="promo">
                {/* <img src="../../assets/Promo Code Added! Please review your order detail for updated cart before making the payment..svg" alt=""> */}
                <div className="promo-text-wrong">
                  Unfortunately!Promo Code didn't apply!
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
          </form>
        </div>
        <div class="dummy-div"></div>
        {/* <footer  className='cartFixed'><CartMenubar/></footer> */}
      </ThemeProvider>
    </>
  );
};
