import React, { useState } from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useNavigate } from "react-router-dom";
import { Diversity1 } from "@mui/icons-material";
import OTPInput, { ResendOTP } from "otp-input-react";

export const Otp = (props) => {
  const navigate = useNavigate();
  const [OTP, setOTP] = useState("");

  return (
    <>
      <div className="otp-main">
        <div className="otp-header">
          <div className="none" />
          <div className="heading">Confirm Your Identity</div>
          <a>
            <CloseRoundedIcon className="clear" onClick={props.onClose} />
          </a>
        </div>
        <hr />
        <div className="otp-body">
          <div style={{ margin: "30px", paddingLeft: "20px" }}>
            <OTPInput
              value={OTP}
              onChange={setOTP}
              autoFocus
              OTPLength={4}
              otpType="number"
              disabled={false}
              inputStyles={{ border: "1px solid #e71583", borderRadius: "5px" }}
            />
          </div>

          <div className="otp-text">
            Enter the code we sent over SMS to <b>+(201) 555-0123</b>
          </div>
          <div className="drawer-btn-div-otp">
            <button onClick={() => navigate("/new-user")} className="signIn">
              NewUser
            </button>
            <button
              onClick={() => navigate("/returning-user")}
              className="signIn"
            >
              ReturningUser
            </button>
          </div>
          <div className="resend">
            <a>Resend code in 20s</a>
          </div>
        </div>
      </div>
    </>
  );
};
