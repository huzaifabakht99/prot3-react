import React, { useContext, useEffect, useState } from "react";
import { OrderReviewCards } from "../Components/OrderReviewCards";
import { TotalCard } from "../Components/TotalCard";
import homeIcon from "../assets/Group 7492.svg";
import phoneIcon from "../assets/Group 7545.svg";
import deliveryIcon from "../assets/Group 7491.svg";
import paymentIcon from "../assets/Group 7490.svg";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Drawer } from "@mui/material";
import { EditContactInfo } from "../Components/EditContactInfo";
import { EditShippingAddress } from "../Components/EditShippingAddress";
import { EditDeliveryType } from "../Components/EditDeliveryType";
import { EditPaymentMethod } from "../Components/EditPaymentMethod";
import { CartMenubar } from "../Components/CartMenubar";
import { inputContext } from "../Context/inputContext";

// import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';

const theme = createTheme({
  palette: {
    primary: {
      main: "#E72E80",
    },
  },
});
export const ReturningUser = () => {
  const { formInputs, setFormInputs } = useContext(inputContext);
  const { returningUserInputs, setReturningUserInputs } =
    useContext(inputContext);

  const [isEditContactOpen, setIsEditContactOpen] = useState(false);
  const [isEditShippingOpen, setIsEditShippingOpen] = useState(false);
  const [isEditDeliveryOpen, setIsEditDeliveryOpen] = useState(false);
  const [isEditPaymentOpen, setIsEditPaymentOpen] = useState(false);
  useEffect(() => {
    setFormInputs((prevState) => ({
      ...prevState,
      disabledBtn: false,
      station: "returning-user",
    }));

    console.log(formInputs.numberThroughSignin.length);
  }, []);
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="returningUser-main">
          <h2 className="returningUser-heading">Order Review</h2>
          <div className="card">
            <OrderReviewCards
              isImg={false}
              heading={"Contact"}
              subheading={""}
              onClick={() => setIsEditContactOpen(true)}
              iconUrl={phoneIcon}
              text={"+" + returningUserInputs.numberThroughSignin}
              btn={true}
              verified={false}
            />
          </div>
          <div className="card">
            <OrderReviewCards
              isImg={false}
              heading={"Shipping Info"}
              subheading={returningUserInputs.fullName.toUpperCase()}
              onClick={() => setIsEditShippingOpen(true)}
              iconUrl={homeIcon}
              text={returningUserInputs.shippingAddress}
              btn={true}
              verified={false}
            />
          </div>
          <div className="card">
            <OrderReviewCards
              isImg={false}
              heading={"Delivery Type"}
              subheading={returningUserInputs.deliveryType}
              onClick={() => setIsEditDeliveryOpen(true)}
              iconUrl={deliveryIcon}
              text={
                returningUserInputs.deliveryType === "Standard"
                  ? "Get it between Wed, Jan 15-Fri, Jan 24"
                  : "Get it between Wed, Jan 15-Fri, Jan 18"
              }
              btn={true}
              verified={false}
            />
          </div>
          <div className="card">
            <OrderReviewCards
              isImg={true}
              heading={"Payment Method"}
              subheading={returningUserInputs.PaymentMethod}
              onClick={() => setIsEditPaymentOpen(true)}
              iconUrl={paymentIcon}
              text={""}
              btn={true}
              verified={false}
            />
          </div>
          <div className="card">
            <TotalCard
              subtotal={formInputs.productAmount * formInputs.Quantity}
              shipping={returningUserInputs.deliveryTypeAmount}
              tax={formInputs.tax * formInputs.Quantity}
              discount={formInputs.discount}
              total={
                formInputs.productAmount * formInputs.Quantity +
                returningUserInputs.deliveryTypeAmount +
                formInputs.tax * formInputs.Quantity -
                formInputs.discount
              }
            />
          </div>
          <FormControlLabel
            className="ReturningUser-checkBox"
            control={<Checkbox defaultChecked />}
            label="Save my information with 1-Click Checkout for a faster
checkout next time"
          />
          <div className="termsNpolicy">
            By clicking Pay, you agree to create a 1-Click Checkout account
            under our <span className="terms">Terms</span> of Use and{" "}
            <span className="policy">Privacy Policy</span>
          </div>
        </div>
        <div class="dummy-div"></div>
        {/* <footer  className='cartFixed'><CartMenubar/></footer> */}
        <Drawer
          anchor="bottom"
          open={isEditContactOpen}
          onClose={() => setIsEditContactOpen(false)}
        >
          <EditContactInfo onClose={() => setIsEditContactOpen(false)} />
        </Drawer>
        <Drawer
          anchor="bottom"
          open={isEditShippingOpen}
          onClose={() => setIsEditShippingOpen(false)}
        >
          <EditShippingAddress onClose={() => setIsEditShippingOpen(false)} />
        </Drawer>
        <Drawer
          anchor="bottom"
          open={isEditDeliveryOpen}
          onClose={() => setIsEditDeliveryOpen(false)}
        >
          <EditDeliveryType onClose={() => setIsEditDeliveryOpen(false)} />
        </Drawer>
        <Drawer
          anchor="bottom"
          open={isEditPaymentOpen}
          onClose={() => setIsEditPaymentOpen(false)}
        >
          <EditPaymentMethod onClose={() => setIsEditPaymentOpen(false)} />
        </Drawer>
      </ThemeProvider>
    </>
  );
};
