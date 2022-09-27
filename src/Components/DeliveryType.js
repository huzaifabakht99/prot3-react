import React, { useContext } from "react";

import MyFormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { inputContext } from "../Context/inputContext";

export const DeliveryType = (props) => {
  const { formInputs, setFormInputs } = useContext(inputContext);
  return (
    <>
      <div className="delivery-type-box deliveryTypeSpace">
        {/* <input type="radio" id={props.DeliveryType} name="age" /> */}

        <div className="radio-div">
          <MyFormControlLabel
            label={
              <div className="delivery-type-text-div">
                <h4 className="delivery-type-text-heading">
                  <span className="delivery-type-heading-price">
                    {props.DeliveryType}
                  </span>
                  {props.heading}
                  <span className="delivery-type-heading-price">
                    ${props.price.toString()}
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
            control={<Radio onClick={() => setFormInputs(props.price)} />}
          />
        </div>
      </div>
    </>
  );
};
