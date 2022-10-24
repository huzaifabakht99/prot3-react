import React, { useContext } from "react";

import MyFormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { inputContext } from "../Context/inputContext";
import { Email } from "@mui/icons-material";

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
                    ${props.price}
                    <span>{props.price !== 0 ? "" : " Free"}</span>
                  </span>
                </h4>
                <p className="delivery-type-text-detail">
                  Order within{" "}
                  <span className="detail-date-time">6 hrs 1 min</span> to get
                  it by
                  <span className="detail-date-time">{props.date}</span>
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
                    isAnimation: "glow",
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
