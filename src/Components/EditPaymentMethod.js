import { Button, Radio, RadioGroup } from "@mui/material";
import React, { useContext, useState } from "react";
import MyFormControlLabel from "@mui/material/FormControlLabel";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import cardLogo from "../assets/Group 7546.svg";
import CreditCardInput from "react-credit-card-input";
import "react-credit-cards/es/styles-compiled.css";
import infoImg2 from "../assets/Page-1.svg";
import LockIcon from "@mui/icons-material/Lock";
import paypalLogo from "../assets/Group 7547.svg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import klarnaLogo from "../assets/Group 7548 (1).svg";
import amazonLogo from "../assets/Group 7547 (1).svg";
import clearpayLogo from "../assets/Frame.svg";
import cardLogo1 from "../assets/Group 7401.svg";
import paypalLogo1 from "../assets/Group 7545 (1).svg";
import klarnaLogo1 from "../assets/Group 7552.svg";
import amazonLogo1 from "../assets/Group 7547 (1).svg";
import { makeStyles } from "@mui/styles";
import clearpayLogo1 from "../assets/Group 7551 (1).svg";
import masterCardLogo from "../assets/Group 7546.svg";
import visaCardLogo from "../assets/Group 774.svg";

import { inputContext } from "../Context/inputContext";
import DoneIcon from "@mui/icons-material/Done";

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
  cardInput: {
    border: "1px solid black",
    padding: "20px",
  },
}));

export const EditPaymentMethod = (props) => {
  const { returningUserInputs, setReturningUserInputs } =
    useContext(inputContext);
  const { formInputs, setFormInputs } = useContext(inputContext);
  const [addNewPaymnet, setAddNewPayment] = useState(false);
  const [showAmazon, setShowAmazon] = useState(false);
  const [showClearpay, setShowClearpay] = useState(false);
  const [selectedPaymentMethod, setPaymentMethod] = useState("card");
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvc, setCardCvc] = useState("");

  const handlePaymentMethodChange = (ev) => {
    setPaymentMethod({ selectedDeliveryType: ev.target.value });
  };
  const classes = useStyles();
  const onAddAmazon = () => {
    setAddNewPayment(false);
    setShowAmazon(true);
  };
  const onAddClearpay = () => {
    setAddNewPayment(false);
    setShowClearpay(true);
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
      <div className="edit-drawer-header">
        <div style={{ display: "flex", alignItems: "center" }}>
          <KeyboardBackspaceRoundedIcon
            onClick={() => setAddNewPayment(false)}
          />
          <h5 className="drawer-heading" style={{ marginLeft: "10px" }}>
            {addNewPaymnet
              ? "Add New Credit/Debit Card"
              : "Change Payment Method"}
          </h5>
        </div>
        <a>
          <CloseRoundedIcon className="clear" onClick={props.onClose} />
        </a>
      </div>
      <hr className="hr-drawer" />
      <div
        className="drawer-main"
        style={{ minHeight: "auto", paddingBottom: "5px" }}
      >
        {addNewPaymnet ? (
          ""
        ) : (
          <div className="contactInfo">
            <div onClick={props.onClose}>
              <div
                className="drawer-item-div"
                onClick={() =>
                  setReturningUserInputs((prevState) => ({
                    ...prevState,
                    paymentMethod: "cod",
                  }))
                }
              >
                <div className="tick-div">
                  {" "}
                  {returningUserInputs.paymentMethod === "cod" ? (
                    <DoneIcon sx={{ color: "#e72e80" }} />
                  ) : (
                    ""
                  )}
                </div>
                <div className="main-tick-content">
                  <div className="cod">Cash on delivery</div>
                </div>
              </div>
              <hr className="hr-drawer" />
              <div
                className="drawer-item-div"
                onClick={() =>
                  setReturningUserInputs((prevState) => ({
                    ...prevState,
                    paymentMethod: "card1",
                  }))
                }
              >
                <div className="tick-div">
                  {" "}
                  {returningUserInputs.paymentMethod === "card1" ? (
                    <DoneIcon sx={{ color: "#e72e80" }} />
                  ) : (
                    ""
                  )}
                </div>
                <div className="main-tick-content">
                  <img src={masterCardLogo} />
                  <span style={{ visibility: "hidden" }}>w</span>
                  ****9087
                </div>
              </div>
              <hr className="hr-drawer" />
              <div
                className="drawer-item-div"
                onClick={() =>
                  setReturningUserInputs((prevState) => ({
                    ...prevState,
                    paymentMethod: "card2",
                  }))
                }
              >
                <div className="tick-div">
                  {" "}
                  {returningUserInputs.paymentMethod === "card2" ? (
                    <DoneIcon sx={{ color: "#e72e80" }} />
                  ) : (
                    ""
                  )}
                </div>
                <div className="main-tick-content">
                  <img src={visaCardLogo} />
                  <span style={{ visibility: "hidden" }}>w</span>
                  ****9087
                </div>
              </div>
              <hr className="hr-drawer" />
              <div
                className="drawer-item-div"
                onClick={() =>
                  setReturningUserInputs((prevState) => ({
                    ...prevState,
                    paymentMethod: "amazon",
                  }))
                }
              >
                <div className="tick-div">
                  {" "}
                  {returningUserInputs.paymentMethod === "amazon" ? (
                    <DoneIcon sx={{ color: "#e72e80" }} />
                  ) : (
                    ""
                  )}
                </div>
                <div className="main-tick-content">
                  <img src={amazonLogo1} />
                  <div>jordan.olivas@gmail.com</div>
                </div>
              </div>
            </div>

            {showAmazon ? (
              <MyFormControlLabel
                sx={{
                  alignItems: "start",
                }}
                label={
                  <div className="pm-div">
                    <img id="img" src={amazonLogo} alt="" />
                    <span> **** 4242</span>
                  </div>
                }
                value={"amazon"}
                control={
                  <Radio
                    sx={{
                      paddingTop: "0px",
                      alignItems: "flexStart",
                    }}
                    onClick={() =>
                      setReturningUserInputs((prevState) => ({
                        ...prevState,
                        paymentMethod: "amazon",
                      }))
                    }
                  />
                }
              />
            ) : (
              ""
            )}

            {showClearpay ? (
              <MyFormControlLabel
                sx={{
                  alignItems: "start",
                }}
                label={
                  <div className="pm-div">
                    <img id="img" src={clearpayLogo} alt="" />
                    <span> **** 4242</span>
                  </div>
                }
                value={"clear"}
                control={
                  <Radio
                    sx={{
                      paddingTop: "0px",
                    }}
                    onClick={() =>
                      setReturningUserInputs((prevState) => ({
                        ...prevState,
                        paymentMethod: "clearpay",
                      }))
                    }
                  />
                }
              />
            ) : (
              ""
            )}
            {addNewPaymnet ? (
              ""
            ) : (
              <div className="drawer-btn-div" style={{ marginTop: "25px" }}>
                <a
                  className="addnew-btn"
                  onClick={() => setAddNewPayment(true)}
                >
                  + Add New Credit/Debit Card
                </a>
              </div>
            )}
          </div>
        )}
        {addNewPaymnet ? (
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "20px",
                marginBottom: "26px",
              }}
            >
              <div> We accept all major cards </div>
              <img src={cardLogo1} />
            </div>
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
            <button
              className="buttons"
              style={{ width: "100%", marginTop: "26px", marginBottom: "24px" }}
            >
              Add Card
            </button>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "25px",
              }}
            >
              {" "}
              <LockIcon fontSize="10px" />
              Your information is safe <img src={infoImg2} />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      {addNewPaymnet ? "" : <hr className="hr-drawer" />}
      {addNewPaymnet ? (
        ""
      ) : (
        <div
          style={{
            paddingRight: "20px",
            paddingLeft: "20px",
            padding: "0px 20px 22px 20px",
          }}
        >
          <div
            style={{ marginTop: "19px", fontSize: "14px", color: "#6B6B6B" }}
          >
            Other Available Methods
          </div>
          <div onClick={props.onClose}>
            <div
              className="radio-div-payment"
              onClick={() =>
                setReturningUserInputs((prevState) => ({
                  ...prevState,
                  paymentMethod: "paypal",
                }))
              }
              style={{ marginTop: "25px" }}
            >
              <div>
                <img src={paypalLogo1} alt="" />
              </div>
              <div className="palns-div">
                <div className="plans">FULL PAYMENT</div>
              </div>
            </div>
            <div
              className="radio-div-payment"
              onClick={() =>
                setReturningUserInputs((prevState) => ({
                  ...prevState,
                  paymentMethod: "klarna",
                }))
              }
              style={{ marginTop: "25px" }}
            >
              <div>
                <img src={klarnaLogo1} alt="" />
              </div>
              <div className="palns-div">
                <div className="plans">FULL PAYMENT</div>
              </div>
            </div>
            <div
              className="radio-div-payment"
              onClick={() =>
                setReturningUserInputs((prevState) => ({
                  ...prevState,
                  paymentMethod: "clearpay",
                }))
              }
              style={{ marginTop: "25px" }}
            >
              <div>
                <img src={clearpayLogo1} alt="" />
              </div>
              <div className="palns-div">
                <div className="plans">FULL PAYMENT</div>
              </div>
            </div>
            <div
              className="radio-div-payment"
              onClick={() =>
                setReturningUserInputs((prevState) => ({
                  ...prevState,
                  paymentMethod: "amazon",
                }))
              }
              style={{ marginTop: "25px" }}
            >
              <div>
                <img src={amazonLogo1} alt="" />
              </div>
              <div className="palns-div">
                <div className="plans">FULL PAYMENT</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
