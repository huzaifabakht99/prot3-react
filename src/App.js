// import logo from './logo.svg';
import "./App.css";
import { NewUser } from "./Pages/NewUser";
import { ReturningUser } from "./Pages/ReturningUser";
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

function App() {
  // variavle that have EditForm belongs to edit shipping drawer
  const [returningUserInputs, setReturningUserInputs] = useState({
    numberThroughSignin: 1,
    fullName: "Huzaifa Bakht",
    shippingAddress: "545 W. 14th Street way , NY 77011",
    deliveryType: "Standard",
    paymentMethod: "cod",
    deliveryTypeAmount: 5.95,
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

    productAmount: 360,
    Quantity: 1,
    tax: 1.26,
    discount: 0,
    total: 0,
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
        }}
      >
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/new-user" element={<NewUser />} />
          <Route path="/order-detail" element={<OrderDetail />} />
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
