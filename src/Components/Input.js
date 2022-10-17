import { Drawer } from "@mui/material";
import React, { useState } from "react";
import { Otp } from "./Otp";
import camera from "../assets/Vector.svg";
import backArrow from "../assets/Vector.svg";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import InputAdornment from "@mui/material/InputAdornment";
import greycard from "../assets/Vector.svg";
import expiryicon from "../assets/Vector.svg";
import lockicon from "../assets/Vector.svg";
import personicon from "../assets/Vector.svg";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Switch, { SwitchProps } from "@mui/material/Switch";
import poweredbystripe from "../assets/Vector.svg";
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";

export const Input = (props) => {
  const [isOtpOpen, setIsOtpOpen] = useState(false);
  return (
    <>
      {/* <div className="input-div">
       {props.flagIcon ? <img className="icon-flag" src={props.flagIconUrl} alt="" />:""}
        <input type="text" placeholder={props.placeholder}/>
        {props.button ?<button onClick={()=> setIsOtpOpen(true)} variant='contained' className="signin-button">Enter</button> :""}
    </div>
    <Drawer anchor='bottom' open={isOtpOpen} onClose={ ()=> setIsOtpOpen(false)}>
      <Otp/>
    </Drawer> */}
      <Card
        sx={{
          minWidth: 275,
          height: "250px",
          borderRadius: "10px",
          margin: "15px",
        }}
      >
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <TextField
                id="outlined-basic"
                label="Card Number"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <img src={greycard} />
                    </InputAdornment>
                  ),
                }}
                style={{
                  width: "320px",
                }}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                id="outlined-basic"
                label="Expiry"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <img src={expiryicon} />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={5}>
              <TextField
                id="outlined-basic"
                label="CVV"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <img src={lockicon} />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                id="outlined-basic"
                label="Name on the card"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <img src={personicon} />
                    </InputAdornment>
                  ),
                }}
                style={{
                  width: "320px",
                }}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Card
        sx={{
          minWidth: 275,
          height: "55px",
          borderRadius: "10px",
          margin: "15px",
        }}
      >
        <CardContent>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p>Save this to payment option</p>

            <FormControlLabel
              // control={<IOSSwitch defaultChecked />}
              style={{ marginBottom: "12px" }}
            />
          </div>
        </CardContent>
      </Card>
    </>
  );
};
