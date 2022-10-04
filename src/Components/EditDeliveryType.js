import { Radio, RadioGroup } from "@mui/material";
import React, { useContext, useState } from "react";
import MyFormControlLabel from "@mui/material/FormControlLabel";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { inputContext } from "../Context/inputContext";

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
          <CloseRoundedIcon className="clear" onClick={props.onClose} />
        </a>
      </div>
      <div className="drawer-main">
        <div className="contactInfo">
          <RadioGroup
            onChange={handleDeliveryTypeChange}
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue={returningUserInputs.deliveryType}
            name="radio-buttons-group"
          >
            <MyFormControlLabel
              sx={{
                alignItems: "start",
              }}
              label={
                <div>
                  <p class="edit-dt-heading">Standard</p>
                  <p class="edit-dt-detail">(6 to 9 Bussiness days)</p>
                </div>
              }
              value={"Standard"}
              name={5.95}
              control={
                <Radio
                  sx={{
                    paddingTop: "0px",
                  }}
                  onClick={() =>
                    // newForm.deliveryType(50)

                    setReturningUserInputs((prevState) => ({
                      ...prevState,

                      deliveryTypeAmount: 5.95,
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
                <div>
                  <p class="edit-dt-heading">Express</p>
                  <p class="edit-dt-detail">(2 to 3 Bussiness days)</p>
                </div>
              }
              value={"Express"}
              name={12.95}
              control={
                <Radio
                  sx={{
                    paddingTop: "0px",
                  }}
                  onClick={() =>
                    // newForm.deliveryType(50)

                    setReturningUserInputs((prevState) => ({
                      ...prevState,
                      // deliveryType: selectedDeliveryType,
                      deliveryTypeAmount: 12.95,
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
                <div>
                  <p class="edit-dt-heading">Next Day</p>
                  <p class="edit-dt-detail">(1 to 2 Bussiness days)</p>
                </div>
              }
              value={"Next Day"}
              name={22.95}
              control={
                <Radio
                  sx={{
                    paddingTop: "0px",
                  }}
                  onClick={() =>
                    // newForm.deliveryType(50)

                    setReturningUserInputs((prevState) => ({
                      ...prevState,
                      // deliveryType: selectedDeliveryType,
                      deliveryTypeAmount: 22.95,
                    }))
                  }
                />
              }
            />
          </RadioGroup>
        </div>
        <div className="drawer-btn-div">
          <a className="addnew-btn">+Add New</a>
          <button class="edit-drawer-done-btn" onClick={props.onClose}>
            Done
          </button>
        </div>
      </div>
    </>
  );
};
