import React, { useState, useContext, useEffect } from "react";
import TrendingFlatRoundedIcon from "@mui/icons-material/TrendingFlatRounded";
import Drawer from "@mui/material/Drawer";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";
import thumbnail from "../assets/Rectangle 206 (1).svg";
import remove from "../assets/Group 697.svg";
import { O3ds } from "../Components/O3ds";
import { Cart } from "./Cart";
import { Button, createTheme, Dialog, ThemeProvider } from "@mui/material";
import { inputContext } from "../Context/inputContext";
import { makeStyles } from "@mui/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#111111",
    },
    disabled: { main: "#696969" },
  },
});
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
  buyBtn: {},
  cartBtn: {
    backgroudColor: "#111111",
  },
}));

export const CartMenubar = (props) => {
  const classes = useStyles();
  const { returningUserInputs, setReturningUserInputs } =
    useContext(inputContext);
  const { formInputs, setFormInputs } = useContext(inputContext);
  const [is3dsOpen, setIs3dsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCart = () => {
    console.log(formInputs);
    setIsCartOpen(true);
    console.log("working");
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="main">
          <button
            variant="contained"
            onClick={handleCart}
            className="price-btn"
          >
            <div></div> $
            {formInputs.station === "returning-user"
              ? formInputs.productAmount * formInputs.Quantity +
                returningUserInputs.deliveryTypeAmount +
                formInputs.tax * formInputs.Quantity -
                formInputs.discount
              : formInputs.productAmount * formInputs.Quantity +
                formInputs.deliveryTypeAmount +
                formInputs.tax * formInputs.Quantity -
                formInputs.discount}{" "}
            <KeyboardArrowUpIcon className="right-icon" />
          </button>
          <Button
            sx={{ backgroudColor: "#69696" }}
            variant="contained"
            className="buy-btn"
            disabled={formInputs.disabledBtn}
            onClick={() => setIs3dsOpen(true)}
          >
            Buy
            <TrendingFlatRoundedIcon />
          </Button>
        </div>
        <Drawer
          sx={{
            borderRadius: "5px",
            position: "absolute",
            bottom: "100px",
          }}
          anchor="bottom"
          open={isCartOpen}
          onClose={() => setIsCartOpen(false)}
        >
          <Cart
            currency="$"
            productName="Slim Fit"
            productAmount={formInputs.productAmount}
            subtotal={
              formInputs.productAmount.toLocaleString(undefined, {
                maximumFractionDigits: 2,
              }) * formInputs.Quantity
            }
            shipping={parseFloat(formInputs.deliveryTypeAmount.toFixed(2))}
            tax={parseFloat(formInputs.tax * formInputs.Quantity).toFixed(2)}
            discount={formInputs.discount}
          />
        </Drawer>
        {/* <Drawer anchor='bottom' open={is3dsOpen} onClose={ ()=> setIs3dsOpen(false)}>
      <O3ds/>
      
    </Drawer> */}
        <Dialog open={is3dsOpen} onClose={() => setIs3dsOpen(false)}>
          <O3ds onClose={() => setIs3dsOpen(false)} />
        </Dialog>
      </ThemeProvider>
    </>
  );
};
