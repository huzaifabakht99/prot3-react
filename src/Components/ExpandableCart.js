import React, { useState, useContext, useEffect } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { inputContext } from "../Context/inputContext";
import thumbnail from "../assets/Rectangle 206 (1).svg";

export const ExpandableCart = (props) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { returningUserInputs, setReturningUserInputs } =
    useContext(inputContext);
  const { formInputs, setFormInputs } = useContext(inputContext);
  return (
    <div style={{ width: "100%", padding: "20px", boxSizing: "border-box" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          paddingTop: "7px",
          overflow: "auto",
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

      {formInputs.bottomCart === false && formInputs.station === "new-user" ? (
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
                  {formInputs.shippingAddress == "" ? "Estimated Tax" : "Tax"}
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
          {/* 1 */}
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
    </div>
  );
};
