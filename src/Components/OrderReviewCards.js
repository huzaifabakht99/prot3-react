import React, { useContext } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import verifiedIcon from "../assets/Group7536.svg";
import cardLogo1 from "../assets/Group 7401.svg";
import klarnaLogo1 from "../assets/Group 7545 (1).svg";
import paypalLogo1 from "../assets/Group 7546 (1).svg";
import amazonLogo1 from "../assets/Group 7547 (1).svg";
import clearpayLogo1 from "../assets/Frame.svg";
import { inputContext } from "../Context/inputContext";

export const OrderReviewCards = (props) => {
  const { returningUserInputs, setReturningUserInputs } =
    useContext(inputContext);
  const { formInputs, setFormInputs } = useContext(inputContext);
  return (
    <>
      <div className="card-main" onClick={props.onClick}>
        <div className="card-detail-with-icon">
          <div className="card-icon">
            <img src={props.iconUrl} alt="" />
          </div>
          <div className="detail-info">
            <h6 className="card-heading">{props.heading} </h6>
            {props.isImg ? (
              <div>
                {returningUserInputs.paymentMethod === "cod" ||
                returningUserInputs.paymentMethod === "" ? (
                  <div>
                    <div className="cod">Cash on Delivery</div>
                  </div>
                ) : (
                  ""
                )}
                {returningUserInputs.paymentMethod === "card" ? (
                  <img id="img" src={cardLogo1} alt="" />
                ) : (
                  ""
                )}
                {returningUserInputs.paymentMethod === "paypal" ? (
                  <img id="img" src={paypalLogo1} alt="" />
                ) : (
                  ""
                )}
                {returningUserInputs.paymentMethod === "klarna" ? (
                  <img id="img" src={klarnaLogo1} alt="" />
                ) : (
                  ""
                )}
                {returningUserInputs.paymentMethod === "amazon" ? (
                  <img id="img" src={amazonLogo1} alt="" />
                ) : (
                  ""
                )}
                {returningUserInputs.paymentMethod === "clearpay" ? (
                  <img id="img" src={clearpayLogo1} alt="" />
                ) : (
                  ""
                )}
              </div>
            ) : (
              ""
            )}
            <h6 className="card-sub-heading">{props.subheading} </h6>
            <div className="verified-contact">
              <p className="card-text">{props.text}</p>
            </div>
          </div>
        </div>
        <div>
          {props.btn ? (
            <a className="card-btn">
              Edit
              {/* <KeyboardArrowDownIcon /> */}
            </a>
          ) : (
            ""
          )}
          {props.verified ? <img src={verifiedIcon} alt="" /> : ""}
        </div>
      </div>
    </>
  );
};
