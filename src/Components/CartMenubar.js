import React, { useState, useContext, useEffect } from "react";
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
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LockIcon from "@mui/icons-material/Lock";

const theme = createTheme({
  palette: {
    primary: {
      main: "#e73e80",
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
  const { is3dsOpen, setIs3dsOpen } = useContext(inputContext);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCart = () => {
    console.log(formInputs);
    setIsCartOpen(true);
    console.log("working");
  };
  const disable =
    (formInputs.fullName !== "" &&
      formInputs.email !== "" &&
      formInputs.shippingAddress !== "" &&
      formInputs.deliveryTypeAmount !== 0 &&
      formInputs.paymentMethod !== "") ||
    formInputs.disabledBtn !== false;

  return (
    <>
      <ThemeProvider theme={theme}>
        <div
          className="main"
          style={{ dispaly: "flex", flexDirection: "column" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              paddingTop: "7px",
            }}
            onClick={() => setIsCartOpen(true)}
          >
            <div style={{ display: "flex" }}>
              <ShoppingCartIcon fontSize="small" />
              <div className="cart-menubar-text">Order Total (1 item) </div>
              <KeyboardArrowUpIcon className="right-icon" />
            </div>
            <div className="cart-menubar-text">
              $
              {formInputs.station === "returning-user"
                ? formInputs.productAmount * formInputs.Quantity +
                  returningUserInputs.deliveryTypeAmount +
                  formInputs.tax * formInputs.Quantity -
                  formInputs.discount
                : formInputs.productAmount * formInputs.Quantity +
                  formInputs.deliveryTypeAmount +
                  formInputs.tax * formInputs.Quantity -
                  formInputs.discount}{" "}
            </div>
          </div>
          <Button
            sx={{ width: "100%", height: "45px" }}
            variant="contained"
            className="buy-btn"
            disabled={
              formInputs.station === "new-user"
                ? !disable
                : formInputs.disabledBtn
            }
            onClick={() => {
              formInputs.station === "order-detail"
                ? setIs3dsOpen(false)
                : setIs3dsOpen(true);
            }}
          >
            {formInputs.station === "order-detail" ? (
              ""
            ) : (
              <LockIcon fontSize="14px" />
            )}
            {formInputs.station === "order-detail" ? (
              <span style={{ fontSize: "11px", lineHeight: "11px" }}>
                Continue Shopping
              </span>
            ) : (
              " Place Order"
            )}
          </Button>
        </div>
        <Drawer
          sx={{
            borderRadius: "5px",
            position: "absolute",
            bottom: "100px",
            paddingBottom: "8px",
          }}
          anchor="bottom"
          open={isCartOpen}
          onClose={() => setIsCartOpen(false)}
        >
          <Cart
            onClose={() => setIsCartOpen(false)}
            currency="$"
            productName="Slim Fit"
            productAmount={parseFloat(formInputs.productAmount.toFixed(2))}
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
        {/* <Drawer
          anchor="bottom"
          open={is3dsOpen}
          onClose={() => setIs3dsOpen(false)}
        >
          <O3ds onClose={() => setIs3dsOpen(false)} />
        </Drawer> */}
        <Dialog open={is3dsOpen} onClose={() => setIs3dsOpen(false)}>
          <O3ds onClose={() => setIs3dsOpen(false)} />
        </Dialog>
      </ThemeProvider>
    </>
  );
};
