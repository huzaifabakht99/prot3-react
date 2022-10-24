import React, { memo, useEffect, useRef, useState } from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useNavigate } from "react-router-dom";
import { Diversity1 } from "@mui/icons-material";
import OTPInput, { ResendOTP } from "otp-input-react";
import { useContext } from "react";
import { inputContext } from "../Context/inputContext";
import { number } from "yup";
import OtpInput from "react-otp-input";

export const Otp = (props) => {
  const inputs = document.querySelectorAll(".single-otp-input input");
  const { formInputs, setFormInputs } = useContext(inputContext);
  const navigate = useNavigate();
  // const [otp, setOtp] = useState(new Array(4).fill(""));
  const [otp, setOtp] = useState();

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
  useEffect(() => {
    console.log("are you workign");
  }, []);
  const handleotpspace = (e) => {
    setOtp(e.target.value);
  };

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
          <div style={{ display: "inline-flex" }}>
            {/* <input android:inputType="textFilter"></input> */}

            <OtpInput
              // android:inputType="textNoSuggestions"
              // android:inputType="textFilter"
              keyboardType="visible-password"
              value={otp}
              isInputNum
              onChange={(e) => setOtp(e)}
              numInputs={4}
              separator={<span> </span>}
              inputStyle="Otp-Fields-New"
              // isInputSecure
              // containerStyle="otp-container"
              shouldAutoFocus={true}
            />

            {/* {otp.map((data, index) => {
              return (
                <input
                  className="single-otp-input"
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

            {/* <input
              value={otp}
              type="tel"
              maxLength="1"
              className="single-otp-input"
              required
              id="ist"
              blurOnSubmit={false}
              keyboardType="numeric"
            />
            <input
              value={otp}
              id="second"
              type="tel"
              maxLength="1"
              className="single-otp-input"
              required
              blurOnSubmit={false}
              keyboardType="numeric"
            />
            <input
              value={otp}
              id="third"
              type="tel"
              maxLength="1"
              className="single-otp-input"
              required
              blurOnSubmit={false}
              keyboardType="numeric"
            />
            <input
              value={otp}
              id="fourth"
              type="tel"
              maxLength="1"
              className="single-otp-input"
              required
              blurOnSubmit={false}
              keyboardType="numeric"
            /> */}
            {/* <input
              id="partitioned"
              // type={"tel"}
              maxLength={4}
              onChange={handleChange}
              value={otp}
              inputMode={"numeric"}
            /> */}
            {/* <OTPInput
              value={otp}
              onChange={(e) => setOtp(e)}
              autoFocus
              OTPLength={4}
              otpType="number"
              disabled={false}
              inputStyles={{ border: "1px solid #e71583", borderRadius: "5px" }}
            /> */}
          </div>

          <div className="otp-text">
            Enter the code we sent over SMS to{" "}
            <b>+{formInputs.numberThroughSignin}</b>
          </div>
          <div className="drawer-btn-div-otp">
            <button
              variant="contained"
              disabled={otp === ""}
              onClick={() => navigate("/new-user")}
              className="signIn"
            >
              New User
            </button>
            <button
              variant="contained"
              disabled={otp === ""}
              onClick={() => navigate("/returning-user")}
              className="signIn"
            >
              Returning User
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
