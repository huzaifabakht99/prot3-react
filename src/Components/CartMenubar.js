import React, { useState, useContext, useEffect } from "react";
import Drawer from "@mui/material/Drawer";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";
import thumbnail from "../assets/Rectangle 206 (1).svg";
import remove from "../assets/Group 697.svg";
import { O3ds } from "../Components/O3ds";
import { Cart } from "./Cart";
import { Button, createTheme, Dialog, ThemeProvider } from "@mui/material";
import { inputContext } from "../Context/inputContext";
import { makeStyles } from "@mui/styles";
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
  drawerPaper: {
    borderRadius: "20px 20px 0 0",
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
  //  const bottom= window.screenBottom
  //   const screenBottom = {window.screenBottom()?false:true};
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
      // formInputs.paymentMethod !== ""&&
      formInputs.deliveryTypeAmount >= 0) ||
    formInputs.disabledBtn !== false;

  return (
    <>
      <ThemeProvider theme={theme}>
        <div
          className="main"
          style={{
            dispaly: "flex",
            flexDirection: "column",
            paddingBottom: formInputs.station === "" ? "0px" : "14px",
            minHeight: formInputs.station === "" ? "0px" : "100px",
            boxShadow: formInputs.isAnimation
              ? "0px 0px 7px 0px #e72e80"
              : "0px -1px 10px 0px #0000001A",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              paddingTop: "7px",
              marginBottom: "10px",
            }}
            onClick={() => setIsCartOpen(true)}
            // onClick={() => console.log(window.screenTop())}
          >
            <div
              style={{
                display: "flex",
              }}
            >
              {formInputs.station === "" ? (
                ""
              ) : (
                <ShoppingCartIcon fontSize="small" sx={{ padding: "2px" }} />
              )}
              <div className="cart-menubar-text">
                Order Total {formInputs.station === "" ? "" : "(1 item)"}{" "}
              </div>
              {formInputs.station === "" ? (
                ""
              ) : (
                <KeyboardArrowUpIcon className="right-icon" />
              )}
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
          {window.scrollY > 12121233 ? (
            <div
              style={{
                width: "100%",
                paddingBottom: "17.5px",
                paddingTop: "7px",
              }}
            >
              <div>
                <div>
                  <div className="amount-row">
                    <div className="text  toBe-text">Subtotal</div>
                    <div className="amount">
                      {props.currency}
                      {props.subtotal}
                    </div>
                  </div>
                  <div className="amount-row">
                    <div className="text  toBe-text">Shipping</div>
                    <div className="amount">
                      {formInputs.station !== "" ||
                      formInputs.station === "returning-user" ? (
                        <div>
                          {props.currency}
                          {formInputs.station === "returning-user"
                            ? returningUserInputs.deliveryTypeAmount
                            : props.shipping}
                        </div>
                      ) : (
                        <div className="toBe-text">To be calculated</div>
                      )}
                    </div>
                  </div>

                  <div className="amount-row">
                    <div className="text  toBe-text">
                      {formInputs.shippingAddress == ""
                        ? "Estimated Tax"
                        : "Tax"}
                    </div>
                    {formInputs.shippingAddress == "" ? (
                      <div className="toBe-text">To be calculated</div>
                    ) : (
                      <div className="amount">
                        {props.currency}
                        {props.tax}
                      </div>
                    )}
                  </div>
                  <div
                    className="amount-row"
                    fxlayout="row"
                    fxlayoutalign="space-between center"
                  >
                    <div className="text toBe-text">Discount </div>
                    <div className="amount">
                      {formInputs.promoCode === "2020" ? (
                        <div>
                          {props.currency}
                          {props.discount}
                        </div>
                      ) : (
                        "$0"
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="purchased-items">Purchased Items (5)</div>
              <div className="order-items">
                <div className="product-detail">
                  <div className="product-img-with-detail">
                    <img className="icon" src={thumbnail} alt="" />
                    <div className="product">
                      <div className="text" style={{ fontWeight: "600" }}>
                        Maverick Strong Adhesive
                      </div>
                      <div>
                        <div className="quantity">
                          Size: 10ml, Qty: {formInputs.Quantity}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="amount">
                    <div style={{ fontWeight: "600" }}> $47</div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {formInputs.station === "" ? (
            ""
          ) : (
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
          )}
        </div>
        <Drawer
          classes={{ paper: classes.drawerPaper }}
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
            productName="MAVERICK STRONG ADHESIVE"
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
