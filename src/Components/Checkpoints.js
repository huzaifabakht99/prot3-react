import React, { useContext } from "react";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";
import { inputContext } from "../Context/inputContext";
import { Button } from "@mui/material";

export const Checkpoints = () => {
  const { formInputs, setFormInputs } = useContext(inputContext);
  return (
    <>
      <div className="checkpoint">
        <div className="checkpoint-column">
          <div className="checkpoint-lense">
            <FiberManualRecordRoundedIcon
              style={{
                color: formInputs.station === "new-user" ? "#E71583" : "",
              }}
              fontSize="small"
            />
          </div>
          <div
            className="checkpoint-text"
            style={{
              color: formInputs.station === "new-user" ? "#E71583" : "",
            }}
          >
            Shipping
          </div>
        </div>

        {formInputs.paymentMethod === "card" ||
        formInputs.paymentMethod === "amazon" ||
        formInputs.paymentMethod === "klarna" ||
        formInputs.paymentMethod === "clearpay" ||
        formInputs.paymentMethod === "cod" ||
        formInputs.paymentMethod === "paypal" ? (
          <hr className="pink" />
        ) : (
          <hr className="hr-checkpoint" />
        )}
        <div className="checkpoint-column">
          <div className="checkpoint-lense">
            <FiberManualRecordRoundedIcon
              style={{
                color:
                  formInputs.paymentMethod === "card" ||
                  formInputs.paymentMethod === "amazon" ||
                  formInputs.paymentMethod === "klarna" ||
                  formInputs.paymentMethod === "clearpay" ||
                  formInputs.paymentMethod === "cod" ||
                  formInputs.paymentMethod === "paypal"
                    ? "#E71583"
                    : "",
              }}
              fontSize="small"
            />
          </div>
          <div
            style={{
              color:
                formInputs.paymentMethod === "card" ||
                formInputs.paymentMethod === "amazon" ||
                formInputs.paymentMethod === "klarna" ||
                formInputs.paymentMethod === "clearpay" ||
                formInputs.paymentMethod === "cod" ||
                formInputs.paymentMethod === "paypal"
                  ? "#E71583"
                  : "",
            }}
            className="checkpoint-text"
          >
            Payment
          </div>
        </div>
        <hr className="hr-checkpoint" />
        <div className="checkpoint-column">
          <div className="checkpoint-lense">
            <FiberManualRecordRoundedIcon fontSize="small" />
          </div>
          <div className="checkpoint-text">Review</div>
        </div>
      </div>
    </>
  );
};
