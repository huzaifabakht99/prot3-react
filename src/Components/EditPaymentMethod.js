import { Button, Radio, RadioGroup } from "@mui/material";
import React, { useContext, useState } from "react";
import MyFormControlLabel from "@mui/material/FormControlLabel";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import cardLogo from "../assets/Group 7546.svg";
import paypalLogo from "../assets/Group 7547.svg";
import klarnaLogo from "../assets/Group 7548 (1).svg";
import amazonLogo from "../assets/Group 7547 (1).svg";
import clearpayLogo from "../assets/Frame.svg";
import cardLogo1 from "../assets/Group 7401.svg";
import paypalLogo1 from "../assets/Group 7545 (1).svg";
import klarnaLogo1 from "../assets/Group 7546 (1).svg";
import amazonLogo1 from "../assets/Group 7547 (1).svg";
import clearpayLogo1 from "../assets/Frame.svg";
import { inputContext } from "../Context/inputContext";

export const EditPaymentMethod = (props) => {
  const { returningUserInputs, setReturningUserInputs } =
    useContext(inputContext);
  const { formInputs, setFormInputs } = useContext(inputContext);
  const [addNewPaymnet, setAddNewPayment] = useState(false);
  const [showAmazon, setShowAmazon] = useState(false);
  const [showClearpay, setShowClearpay] = useState(false);
  const [selectedPaymentMethod, setPaymentMethod] = useState("card");

  const handlePaymentMethodChange = (ev) => {
    setPaymentMethod({ selectedDeliveryType: ev.target.value });
  };
  const onAddAmazon = () => {
    setAddNewPayment(false);
    setShowAmazon(true);
  };
  const onAddClearpay = () => {
    setAddNewPayment(false);
    setShowClearpay(true);
  };
  return (
    <>
      <div className="edit-drawer-header">
        <h5 className="drawer-heading">Contact Info</h5>
        <a>
          <CloseRoundedIcon className="clear" onClick={props.onClose} />
        </a>
      </div>
      <div className="drawer-main">
        {addNewPaymnet ? (
          ""
        ) : (
          <div className="contactInfo">
            <RadioGroup
              onChange={handlePaymentMethodChange}
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue={returningUserInputs.paymentMethod}
              name="radio-buttons-group"
            >
              <MyFormControlLabel
                sx={{
                  alignItems: "start",
                }}
                label={
                  <div className="pm-div">
                    <div className="cod">Cash on Delivery</div>
                  </div>
                }
                value={"cod"}
                control={
                  <Radio
                    sx={{
                      paddingTop: "0px",
                      alignItems: "start",
                    }}
                    onClick={() =>
                      setReturningUserInputs((prevState) => ({
                        ...prevState,
                        paymentMethod: "cod",
                      }))
                    }
                  />
                }
              />
              <MyFormControlLabel
                sx={{
                  alignItems: "start",
                }}
                label={
                  <div className="pm-div">
                    <img id="img" src={cardLogo} alt="" />
                    <span> **** 4242</span>
                  </div>
                }
                value={"card"}
                control={
                  <Radio
                    sx={{
                      paddingTop: "0px",
                      alignItems: "flexStart",
                    }}
                    onClick={() =>
                      setReturningUserInputs((prevState) => ({
                        ...prevState,
                        paymentMethod: "card",
                      }))
                    }
                  />
                }
              />
              <MyFormControlLabel
                sx={{
                  alignItems: "start",
                }}
                label={
                  <div className="pm-div">
                    <img id="img" src={paypalLogo} alt="" />
                    <span> **** 4242</span>
                  </div>
                }
                value={"paypal"}
                control={
                  <Radio
                    sx={{
                      paddingTop: "0px",
                      alignItems: "flexStart",
                    }}
                    onClick={() =>
                      setReturningUserInputs((prevState) => ({
                        ...prevState,
                        paymentMethod: "paypal",
                      }))
                    }
                  />
                }
              />
              <MyFormControlLabel
                sx={{
                  alignItems: "start",
                }}
                label={
                  <div className="pm-div">
                    <img id="img" src={klarnaLogo} alt="" />
                    <span> **** 4242</span>
                  </div>
                }
                value={"klarna"}
                control={
                  <Radio
                    sx={{
                      paddingTop: "0px",
                      alignItems: "flexStart",
                    }}
                    onClick={() =>
                      setReturningUserInputs((prevState) => ({
                        ...prevState,
                        paymentMethod: "klarna",
                      }))
                    }
                  />
                }
              />

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
            </RadioGroup>
          </div>
        )}
        {addNewPaymnet ? (
          <div>
            <button className="card-button btn-pm">
              <img id="img" src={cardLogo1} alt="" />
            </button>
            <button className="paypal btn-pm">
              <img id="img" src={paypalLogo1} alt="" />
            </button>
            <button className="klarna btn-pm">
              <img id="img" src={klarnaLogo1} alt="" />
            </button>
            <button className="amazon btn-pm" onClick={() => onAddAmazon()}>
              <img id="img" src={amazonLogo1} alt="" />
            </button>
            <button className="clearpay btn-pm" onClick={() => onAddClearpay()}>
              <img id="img" src={clearpayLogo1} alt="" />
            </button>
          </div>
        ) : (
          ""
        )}
        {addNewPaymnet ? (
          ""
        ) : (
          <div className="drawer-btn-div">
            <a className="addnew-btn" onClick={() => setAddNewPayment(true)}>
              +Add New
            </a>
            <button class="edit-drawer-done-btn" onClick={props.onClose}>
              Done
            </button>
          </div>
        )}
      </div>
    </>
  );
};
