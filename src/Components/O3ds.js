import React, { useContext, useState } from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useNavigate, Link, useHistory } from "react-router-dom";
import OTPInput from "otp-input-react";
import { inputContext } from "../Context/inputContext";
import { Button } from "@mui/material";
import OtpInput from "react-otp-input";

export const O3ds = (props) => {
  const { returningUserInputs, setReturningUserInputs } =
    useContext(inputContext);
  const { is3dsOpen, setIs3dsOpen } = useContext(inputContext);
  const { formInputs, setFormInputs } = useContext(inputContext);
  const navigate = useNavigate();
  const onConfirmPayment = () => {
    {
      formInputs.station === "new-user"
        ? navigate("/order-detail")
        : navigate("/order-detail-returning");
    }
    setIs3dsOpen(false);
  };

  const [otp, setOtp] = useState("");

  // const handleChange = (element, index) => {
  //   if (isNaN(element.value)) return false;

  //   setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

  //   //Focus next input
  //   if (element.nextSibling) {
  //     element.nextSibling.focus();
  //   }
  // };
  const handleChange = (e) => {
    setOtp(e.target.value);
  };
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
              <b>
                +
                {formInputs.station === "new-user"
                  ? formInputs.numberThroughSignin
                  : formInputs.newNumber}
              </b>
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
              <OtpInput
                // android:inputType="textNoSuggestions"
                // android:inputType="textFilter"
                keyboardType="visible-password"
                value={otp}
                isInputNum
                onChange={(e) => setOtp(e)}
                numInputs={4}
                separator={<span> </span>}
                inputStyle="ds-Fields-New"
                // isInputSecure
                // containerStyle="otp-container"
                shouldAutoFocus={true}
              />
              {/* {otp.map((data, index) => {
                return (
                  <input
                    className="single-otp-input-3ds"
                    type="tel"
                    name="otp"
                    maxLength="1"
                    key={index}
                    value={data}
                    onChange={(e) => handleChange(e.target, index)}
                    onFocus={(e) => e.target.select()}
                  />
                );
              })} */}
              {/* <OTPInput
                value={OTP}
                onChange={(e) => setOTP(e.target.value)}
                autoFocus
                OTPLength={4}
                otpType="number"
                disabled={false}
                inputStyles={{
                  border: "1px solid #000000",
                  borderRadius: "5px",
                }}
              /> */}
            </div>

            <a>
              <Button
                onClick={onConfirmPayment}
                variant="contained"
                disabled={otp === ""}
                className="o3ds-btn"
              >
                Confirm Payment
              </Button>
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
