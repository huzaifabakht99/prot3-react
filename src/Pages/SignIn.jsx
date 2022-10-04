import React, { useContext, useEffect, useState } from "react";
import { NewUser } from "./NewUser";
import lockImg from "../assets/Group 7483.svg";
import { Checkpoints } from "../Components/Checkpoints";
import { Input } from "../Components/Input";
import { makeStyles } from "@mui/styles";
import AddIcon from "@mui/icons-material/Add";

import flagIcon from "../assets/Group 7554.svg";
import { OrderReviewCards } from "../Components/OrderReviewCards";
import { CartMenubar } from "../Components/CartMenubar";
import { inputContext } from "../Context/inputContext";
import {
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
            <TextField
              sx={{ width: "100%" }}
              InputProps={{
                disableUnderline: true,
                endAdornment: (
                  <InputAdornment position="center" component="div">
                    <button
                      disabled={formInputs.numberThroughSignin.length < 12}
                      sx={{ fontSize: "15px", fontWeight: "800" }}
                      className="signin-button"
                      onClick={() => setIsOtpOpen(true)}
                    >
                      Enter
                    </button>
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
            />
          </div>
          <NewUser />

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
