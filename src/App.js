// import logo from './logo.svg';
import "./App.css";
import { NewUser } from "./Pages/NewUser";
import { ReturningUser } from "./Pages/ReturningUser";
import { OrderDetailReturning } from "./Pages/OrderDetailReturning";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import { SignIn } from "./Pages/SignIn";
import { Header } from "./Components/Header";
import { EditContactInfo } from "./Components/EditContactInfo";
import { OrderDetail } from "./Pages/OrderDetail";
import { CartMenubar } from "./Components/CartMenubar";
import { createContext, useState } from "react";
import { inputContext } from "./Context/inputContext";
import { Button } from "@mui/material";
import { SignIn2 } from "./Pages/SignIn2";

function App() {
  // variavle that have EditForm belongs to edit shipping drawer
  const [is3dsOpen, setIs3dsOpen] = useState(false);
  const [returningUserInputs, setReturningUserInputs] = useState({
    numberThroughSignin: 1,
    fullName: "Huzaifa Bakht",
    shippingAddress: "545 W. 14th Street way , NY 77011",
    deliveryType: "Standard",
    paymentMethod: "cod",
    deliveryTypeAmount: 0,
  });
  const [formInputs, setFormInputs] = useState({
    numberThroughSignin: 1,
    newNumber: 1,
    email: "",
    fullName: "",
    shippingAddress: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    country: "",
    zip: "",
    deliveryType: "",
    paymentMethod: "",
    promoCode: "",
    fullNameEditForm: "",
    addressEditForm: "",
    cityEditForm: "",
    stateEditForm: "",
    countryEditForm: "",
    zipEditForm: "",
    disabledBtn: false,
    station: "",
    deliveryTypeAmount: 0,
    closeDialog: true,

    productAmount: 360.0,
    Quantity: 1,
    tax: 1.26,
    discount: 0,
    total: 0,

    isAnimation: "",
  });

  return (
    <>
      <Header />

      <inputContext.Provider
        value={{
          formInputs,
          setFormInputs,
          returningUserInputs,
          setReturningUserInputs,
          is3dsOpen,
          setIs3dsOpen,
        }}
      >
        <Routes>
          <Route path="/" element={<SignIn2 />} />
          <Route path="/new-user" element={<NewUser />} />
          <Route path="/order-detail" element={<OrderDetail />} />
          <Route
            path="/order-detail-returning"
            element={<OrderDetailReturning />}
          />
          <Route path="/returning-user" element={<ReturningUser />} />
        </Routes>

        <footer className="cartFixed">
          <CartMenubar />
        </footer>
      </inputContext.Provider>
    </>
  );
}

export default App;
