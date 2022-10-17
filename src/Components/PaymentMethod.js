import React, { useContext, useEffect } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MyFormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { Input } from "./Input";
import { inputContext } from "../Context/inputContext";

export const PaymentMethod = (props) => {
  const { formInputs, setFormInputs } = useContext(inputContext);
  const handleRadio = () => {
    props.setCardSelectedState(props.value);
    setFormInputs((prevState) => ({
      ...prevState,
      paymentMethod: props.value,
    }));
  };
  return (
    <>
      <div className="payment-method-div">
        <MyFormControlLabel
          sx={{
            display: "contents",
            alignItems: "start",

            justifyContent: "space-between",
          }}
          name={props.value}
          id={props.DeliveryType}
          value={props.value}
          control={
            <Radio
              checked={props.value === props.cardSelectedState ? true : false}
              sx={{
                paddingTop: "0px",
              }}
              onClick={handleRadio}
            />
          }
        />
        <div
          className="radio-div-payment"
          onClick={() => {
            setFormInputs((prevState) => ({
              ...prevState,
              paymentMethod: props.value,
            }));

            console.log("props.value => ", props.value);
            console.log("props.cardSelectedState => ", props.cardSelectedState);
            props.setCardSelectedState(props.value);
          }}
        >
          <div>
            <img src={props.imgUrl} alt="" />
          </div>
          <div className="palns-div">
            <div
              className="plans"
              // style={{
              //   border:
              //     formInputs.paymentMethod === props.value
              //       ? "2px solid #E71583"
              //       : " ",
              // }}
            >
              {props.plan}
            </div>
            <div>
              {" "}
              <KeyboardArrowDownIcon
                // style={{
                //   color:
                //     formInputs.paymentMethod === props.value ? "#E71583" : " ",
                // }}
                className="paymentMethod-icon"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
