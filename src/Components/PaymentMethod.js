import React, { useContext } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MyFormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { Input } from "./Input";
import { inputContext } from "../Context/inputContext";

export const PaymentMethod = (props) => {
  const { formInputs, setFormInputs } = useContext(inputContext);
  return (
    <>
      <div className="payment-method-div">
        <MyFormControlLabel
          sx={{
            display: "contents",
            alignItems: "start",

            justifyContent: "space-between",
          }}
          id={props.DeliveryType}
          value={props.value}
          control={
            <Radio
              sx={{
                paddingTop: "0px",
              }}
              onClick={() =>
                setFormInputs((prevState) => ({
                  ...prevState,
                  paymentMethod: props.value,
                }))
              }
            />
          }
        />
        <div
          className="radio-div-payment"
          onClick={() =>
            setFormInputs((prevState) => ({
              ...prevState,
              paymentMethod: props.value,
            }))
          }
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
