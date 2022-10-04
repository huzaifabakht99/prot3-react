import React, { useState } from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useNavigate, Link, useHistory } from "react-router-dom";
import OTPInput, { ResendOTP } from "otp-input-react";

export const O3ds = (props) => {
  const navigate = useNavigate();
  const onConfirmPayment = () => {
    navigate("/order-detail");
  };

  const [OTP, setOTP] = useState("");
  return (
    <>
      <div className="o3ds-main">
        <div className="o3ds-header">
          <a>
            <CloseRoundedIcon className="clear" onClick={props.onClose} />
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
            <h6 className="confirm-code-heading">Confirmation Code</h6>

            <div
              className="o3ds-otp-div"
              style={{
                marginTop: "15px",
                marginBottom: "30px",
                paddingLeft: "20px",
              }}
            >
              <OTPInput
                value={OTP}
                onChange={setOTP}
                autoFocus
                OTPLength={4}
                otpType="number"
                disabled={false}
                inputStyles={{
                  border: "1px solid #000000",
                  borderRadius: "5px",
                }}
              />
            </div>

            <a>
              <button onClick={onConfirmPayment} className="o3ds-btn">
                Confirm Payment
              </button>
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
