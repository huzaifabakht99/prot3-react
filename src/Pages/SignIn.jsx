import React, { useContext, useEffect, useState } from "react";
import { NewUser } from "./NewUser";
import "../style.css";
import lockImg from "../assets/Group 7483.svg";
import { Checkpoints } from "../Components/Checkpoints";
import { Input } from "../Components/Input";
import { makeStyles } from "@mui/styles";
import AddIcon from "@mui/icons-material/Add";

import flagIcon from "../assets/Group 7554.svg";
import { OrderReviewCards } from "../Components/OrderReviewCards";
import { CartMenubar } from "../Components/CartMenubar";
import { inputContext } from "../Context/inputContext";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";
import {
  Button,
  createTheme,
  Drawer,
  InputAdornment,
  TextField,
  ThemeProvider,
} from "@mui/material";

import { Otp } from "../Components/Otp";

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

export const SignIn = () => {
  const [isOtpOpen, setIsOtpOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const classes = useStyles();
  const { returningUserInputs, setReturningUserInputs } =
    useContext(inputContext);
  const { formInputs, setFormInputs } = useContext(inputContext);
  useEffect(() => {
    setFormInputs((prevState) => ({
      ...prevState,
      disabledBtn: true,
      station: "",
      paymentMethod: "",
      shippingAddress: "",
    }));

    console.log(formInputs.numberThroughSignin.length);
  }, []);
  const handleInputChange = (e) => {
    setFormInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    setReturningUserInputs((prevState) => ({
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
  const onClose = () => {
    setIsOtpOpen(false);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="signIn-main">
          <Checkpoints />
          <div className="signIn-div">
            <h2 className="signIn-heading">Start Your Checkout!</h2>
            <p className="signIn-text">
              Enter your phone number below to start with the checkout process.
            </p>

            <span
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* <PhoneInput
                sx={{ width: "100%" }}
                country={"us"}
                onlyCountries={["us", "pk"]}
                inputMode={"numeric"}
                name="numberThroughSignin"
                value={formInputs.numberThroughSignin}
                onChange={handleInputChange}
              /> */}
              <IntlTelInput
                preferredCountries={["us"]}
                // onPhoneNumberChange={onChange((phone) => setPhone(phone))}
                onlyCountries={["us", "pk"]}
                // inputMode={"numeric"}
                name={"numberThroughSignin"}
                // onSelectFlag={(number, country) => {
                //   setFieldValue(name, number);
                // }}
                // value={formInputs.numberThroughSignin}
                // onChange={() => console.log(formInputs.numberThroughSignin)}
                style={{
                  border: "1px solid #e72e80",
                  width: "100%",
                  borderRadius: "5px",
                  padding: "0px 10px",
                  height: "50PX",
                  boxSizing: " border-box",
                  textAlign: "center",
                }}
              />

              <Button
                disabled={formInputs.numberThroughSignin.toString().length < 12}
                variant="contained"
                sx={{
                  marginLeft: "10px",
                  fontWeight: "600",
                  height: "35.65217208862305px",
                  width: "auto",
                  padding: "0px 10px",
                  lineHeight: "12px",
                  borderRadius: "7px",
                  color: " white",
                  fontSize: "12px",
                }}
                onClick={() => setIsOtpOpen(true)}
              >
                Send OTP
              </Button>
            </span>
            {/* <TextField
              sx={{ width: "100%" }}
              InputProps={{
                disableUnderline: true,

                endAdornment: (
                  <InputAdornment position="center" component="div">
                    <Button
                      disabled={
                        formInputs.numberThroughSignin.toString().length < 12
                      }
                      variant="contained"
                      sx={{
                        fontWeight: "600",
                        height: "35.65217208862305px",
                        width: "auto",
                        padding: "0px 20px",
                        borderRadius: "7px",
                        color: " white",

                        fontSize: "13px",
                      }}
                      className="signin-button"
                      onClick={() => setIsOtpOpen(true)}
                    >
                      Send OTP
                    </Button>
                  </InputAdornment>
                ),
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
              name="numberThroughSignin"
              value={formInputs.numberThroughSignin}
              onChange={handleInputChange}
              disableUnderline={true}
              className={classes.root}
              placeholder=""
              label="Phone Number"
              error={false}
              variant="filled"
              onInput={(e) => {
                e.target.value = Math.max(0, e.target.value)
                  .toString()
                  .slice(0, 12);
              }}
            /> */}
          </div>
          <div style={{ paddingTop: "172px" }}>
            <NewUser />
          </div>

          <div class="dummy-div"></div>
          <div className="img-lock">
            <div className="lock">
              <img src={lockImg} alt="" />
              <div className="lock-text">Enter Phone to Continue</div>
            </div>
          </div>
        </div>

        {/* <footer  className='cartFixed'><CartMenubar/></footer> */}
      </ThemeProvider>
      <Drawer
        anchor="bottom"
        open={isOtpOpen}
        onClose={() => setIsOtpOpen(false)}
      >
        <Otp onClose={onClose} />
      </Drawer>
    </>
  );
};
