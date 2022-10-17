import {
  InputAdornment,
  Radio,
  TextField,
  createTheme,
  ThemeProvider,
  RadioGroup,
} from "@mui/material";
import OtpInput from "react-otp-input";
import OTPInput, { ResendOTP } from "otp-input-react";

import AddIcon from "@mui/icons-material/Add";
import React, { useContext, useState } from "react";
import MyFormControlLabel from "@mui/material/FormControlLabel";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Input } from "../Components/Input";

import flagIcon from "../assets/Group 7554.svg";
import { inputContext } from "../Context/inputContext";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFilledInput-root.Mui-focused": {
      backgroundColor: "white",
      border: "1px solid #E71583",
    },
    "& .MuiFilledInput-root": {
      background: "white",
      width: "100%",
      marginBottom: "10px",

      border: "1px solid #C2C2C2",
      borderRadius: "6px",
    },
  },
  cardInput: {
    border: "1px solid black",
    padding: "20px",
  },
}));

export const EditContactInfo = (props) => {
  const [otp, setOtp] = useState("");
  const handleChange = (e) => {
    setOtp(e.target.value);
  };
  const [inputList, setInputList] = useState([{ number: 133052818031 }]);

  const classes = useStyles();
  const { returningUserInputs, setReturningUserInputs } =
    useContext(inputContext);
  const { formInputs, setFormInputs } = useContext(inputContext);

  const [addNewContact, setAddNewContact] = useState(false);
  const [otpForNewContact, setOtpForAddNewContact] = useState(false);

  const handleContactChange = (ev) => {
    console.log(ev.target.value, "check");
    setReturningUserInputs((prevState) => ({
      ...prevState,
      numberThroughSignin: ev.target.value,
    }));
  };

  const onSave = () => {
    setAddNewContact(false);
    setOtpForAddNewContact(true);
  };
  const onChangeNumber = () => {
    setInputList([...inputList, { number: formInputs.newNumber }]);
    setAddNewContact(false);
    setOtpForAddNewContact(false);
  };
  const handleInputChange = (e) => {
    setFormInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const theme = createTheme({
    palette: {
      primary: {
        main: "#E72E80",
      },
    },
  });

  return (
    <>
      <div className="edit-drawer-header">
        <h5 className="drawer-heading">Contact Info</h5>
        <a>
          <CloseRoundedIcon className="clear" onClick={props.onClose} />
        </a>
      </div>
      <div className="drawer-main">
        {addNewContact === false && otpForNewContact === false ? (
          <div className="contactInfo">
            <RadioGroup
              onChange={handleContactChange}
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue={returningUserInputs.numberThroughSignin}
              name="radio-buttons-group"
            >
              {inputList?.map((item, i) => {
                return (
                  <MyFormControlLabel
                    // key={i}
                    label={"+" + item?.number}
                    value={item.number}
                    control={<Radio onClick={handleContactChange} />}
                  />
                );
              })}
            </RadioGroup>
          </div>
        ) : (
          ""
        )}

        {addNewContact ? (
          <div className="addNew-contact" style={{ paddingTop: "28px" }}>
            <TextField
              sx={{ width: "100%" }}
              InputProps={{
                disableUnderline: true,

                startAdornment: (
                  <InputAdornment position="start" component="div">
                    <img className="falg" src={flagIcon} alt="" />
                    <AddIcon
                      sx={{
                        color: "#000000",
                        fontSize: "13px",
                        position: "relative",
                        left: "10px",
                      }}
                    />
                  </InputAdornment>
                ),
              }}
              type="number"
              name="newNumber"
              value={formInputs.newNumber}
              onChange={handleInputChange}
              disableUnderline={true}
              className={classes.root}
              placeholder=""
              label="Phone Number"
              error={false}
              variant="filled"
            />
            <div
              className="grey-text"
              style={{ marginTop: "35px", width: "250px", textAlign: "center" }}
            >
              A verification message will be sent to your new number.
            </div>
            <button
              className="save-btn"
              onClick={() => onSave()}
              style={{ marginTop: "25px" }}
            >
              Save
            </button>
          </div>
        ) : (
          ""
        )}

        {addNewContact || otpForNewContact === false ? (
          ""
        ) : (
          <div className="editContact-otp-div">
            <h3 className="editContact-h3" style={{ marginTop: "35px" }}>
              MObile OTP Verification
            </h3>
            <h6 className="editContact-h6">We Just Texted You</h6>
            <div class="editContact-otp-text">
              Please enter the 4-digit verification code we just sent to{" "}
              <b>{"nomber"}</b>{" "}
            </div>
            <div style={{ margin: "30px", paddingLeft: "20px" }}>
              {/* <OtpInput
                value={OTP}
                onChange={handleChange}
                numInputs={4}
                separator={<span style={{ width: "8px" }}></span>}
                isInputNum={true}
                shouldAutoFocus={true}
                inputStyle={{
                  border: "1px solid #e72e80",
                  borderRadius: "4px",
                  width: "30px",
                  height: "30px",
                  fontSize: "14px",
                  color: "#000",
                  fontWeight: "400",
                  caretColor: "blue",
                }}
                focusStyle={{
                  border: "1px solid #e72e80",
                  boxShadow: "0 0 0.2rem #e72380",

                  outline: "none",
                }}
              /> */}
              <input
                id="partitioned"
                maxLength={4}
                onChange={handleChange}
                value={otp}
                inputMode={"numeric"}
              />
            </div>
            <div
              class="email-text"
              style={{ marginTop: "25px", marginBottom: "55px" }}
            >
              Didn't receive code yet? Resend Code to{" "}
              <span className="addnew-btn">Email</span>
            </div>
            <a
              className="addnew-btn"
              onClick={() => onChangeNumber()}
              style={{ marginTop: "35px" }}
            >
              Change Mobile Number
            </a>
          </div>
        )}
        {addNewContact || otpForNewContact ? (
          ""
        ) : (
          <div className="drawer-btn-div">
            <a className="addnew-btn" onClick={() => setAddNewContact(true)}>
              +Add New
            </a>
            <button class="edit-drawer-done-btn" onClick={props.onClose}>
              Done
            </button>
          </div>
        )}
      </div>
    </>
  );
};
