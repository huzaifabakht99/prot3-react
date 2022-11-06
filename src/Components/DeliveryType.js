import React, { useContext } from "react";

import MyFormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { inputContext } from "../Context/inputContext";
import { Email } from "@mui/icons-material";
import { PaymentMethod } from "./PaymentMethod";

export const DeliveryType = (props) => {
  const { formInputs, setFormInputs } = useContext(inputContext);

  return (
    <>
      <div>
        {/* <input type="radio" id={props.DeliveryType} name="age" /> */}

        <div className="radio-div">
          <MyFormControlLabel
            sx={{
              alignItems: "start",
            }}
            label={
              <div className="delivery-type-text-div">
                <h4 className="delivery-type-text-heading">
                  <span className="delivery-type-heading-price">
                    {props.DeliveryType}
                  </span>
                  {props.heading}
                  <span className="delivery-type-heading-price">
                    {props.DeliveryType === "Free Shipping"
                      ? ""
                      : ": $" + props.price}
                  </span>
                </h4>
                <p className="delivery-type-text-detail">
                  Estimated delivery:
                  <b>
                    {props.DeliveryType === "Free Shipping" ? "10-15" : ""}
                    {props.DeliveryType === "Standard Shipping" ? "3-5" : ""}
                    {props.DeliveryType === "Express Shipping" ? "1-2" : ""}
                  </b>{" "}
                  days
                </p>
              </div>
            }
            id={props.DeliveryType}
            value={props.price}
            control={
              <Radio
                sx={{
                  paddingTop: "0px",
                }}
                onClick={() =>
                  // newForm.deliveryType(50)

                  setFormInputs((prevState) => ({
                    ...prevState,
                    deliveryType: props.DeliveryType,
                    deliveryTypeAmount: props.price,
                  }))
                }
              />
            }
          />
        </div>
      </div>
    </>
  );
};
