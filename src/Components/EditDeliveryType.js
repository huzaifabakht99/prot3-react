import { Radio, RadioGroup } from "@mui/material";
import React, { useContext, useState } from "react";
import MyFormControlLabel from "@mui/material/FormControlLabel";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { inputContext } from "../Context/inputContext";
import DoneIcon from "@mui/icons-material/Done";

export const EditDeliveryType = (props) => {
  const { returningUserInputs, setReturningUserInputs } =
    useContext(inputContext);

  const { formInputs, setFormInputs } = useContext(inputContext);
  const [selectedDeliveryType, setSelectedDeliveryType] = useState("standard");
  const handleDeliveryTypeChange = (ev) => {
    setSelectedDeliveryType(ev.target.value);
    setReturningUserInputs((prevState) => ({
      ...prevState,

      deliveryType: ev.target.value,
    }));
  };
  const handleDeliveryTypeChange1 = (ev) => {
    // setSelectedDeliveryType(ev.target.value);
    setReturningUserInputs((prevState) => ({
      ...prevState,

      deliveryTypeAmount: 5,
    }));
  };
  const handleDeliveryTypeChange2 = (ev) => {
    // setSelectedDeliveryType(ev.target.value);
    setReturningUserInputs((prevState) => ({
      ...prevState,
      deliveryType: ev.target.value,
      deliveryTypeAmount: 5,
    }));
  };
  const handleDeliveryTypeChange3 = (ev) => {
    // setSelectedDeliveryType(ev.target.value);
    setReturningUserInputs((prevState) => ({
      ...prevState,
      deliveryType: ev.target.value,
      deliveryTypeAmount: 0,
    }));
  };
  return (
    <>
      <div className="edit-drawer-header">
        <h5 className="drawer-heading">DELIVERY TYPE</h5>
        <a>
          <CloseRoundedIcon
            className="clear"
            fontSize="1.3rem"
            onClick={props.onClose}
          />
        </a>
      </div>
      <hr className="hr-drawer" />

      <div className="drawer-main">
        <div className="contactInfo">
          <div
            className="drawer-item-div"
            onClick={() =>
              setReturningUserInputs((prevState) => ({
                ...prevState,
                deliveryType: "Free Shipping",
                deliveryTypeAmount: 0,
              }))
            }
          >
            <div className="tick-div">
              {returningUserInputs.deliveryType === "Free Shipping" ? (
                <DoneIcon sx={{ color: "#e72e80" }} />
              ) : (
                ""
              )}
            </div>
            <div className="main-tick-content">
              <div className="content-main-text">Free Shipping</div>
              <div className="content-subtext">
                Estimated delivery: 10-15 days
              </div>
            </div>
          </div>
          <hr className="hr-drawer" />
          <div
            className="drawer-item-div"
            onClick={() =>
              setReturningUserInputs((prevState) => ({
                ...prevState,
                deliveryType: "Standard Shipping",
                deliveryTypeAmount: 12.95,
              }))
            }
          >
            <div className="tick-div">
              {returningUserInputs.deliveryType === "Standard Shipping" ? (
                <DoneIcon sx={{ color: "#e72e80" }} />
              ) : (
                ""
              )}
            </div>
            <div className="main-tick-content">
              <div className="content-main-text">
                Standard Shipping: $12.95{" "}
              </div>
              <div className="content-subtext">
                Estimated delivery: 3-5 days
              </div>
            </div>
          </div>
          <hr className="hr-drawer" />
          <div
            className="drawer-item-div"
            onClick={() =>
              setReturningUserInputs((prevState) => ({
                ...prevState,
                deliveryType: "Express Shipping",
                deliveryTypeAmount: 22.95,
              }))
            }
          >
            <div className="tick-div">
              {returningUserInputs.deliveryType === "Express Shipping" ? (
                <DoneIcon sx={{ color: "#e72e80" }} />
              ) : (
                ""
              )}
            </div>
            <div className="main-tick-content">
              <div className="content-main-text">Express Shipping: $22.00</div>
              <div className="content-subtext">
                Estimated delivery: 1-2 days
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
