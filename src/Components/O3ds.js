import React from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useNavigate, Link, useHistory } from "react-router-dom";

export const O3ds = () => {
  return (
    <>
      <div className="o3ds-main">
        <div className="o3ds-header">
          <a>
            <CloseRoundedIcon className="clear" />
          </a>
          <div className="none">
            <img src="../../assets/visa.svg" alt="" />
          </div>
          <div>
            <div className="o3ds-heading">Purchase Authentication</div>
            <div className="o3ds-text">
              We have sent you text message to your registered mobile number{" "}
              <b>+(201) 555-0123</b>
            </div>
            <h6>Confirmation Code</h6>
            <div className="o3ds-input">
              <input id="partitioned" type="text" maxLength={4} />
            </div>
            <a href="/order-detail">
              <button className="o3ds-btn">Confirm Payment</button>
            </a>
            <div className="o3ds-resend">
              <a>Resend code</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
