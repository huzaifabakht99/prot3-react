// import logo from './logo.svg';
import "./App.css";
import { NewUser } from "./Pages/NewUser";
import { ReturningUser } from "./Pages/ReturningUser";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SignIn } from "./Pages/SignIn";
import { Header } from "./Components/Header";
import { EditContactInfo } from "./Components/EditContactInfo";
import { OrderDetail } from "./Pages/OrderDetail";
import { CartMenubar } from "./Components/CartMenubar";
import { createContext, useState } from "react";
import { inputContext } from "./Context/inputContext";
import { Button } from "@mui/material";

function App() {
  const [formInputs, setFormInputs] = useState(5.95);

  return (
    <>
      <Button onClick={() => console.log(formInputs)}> asfasdsafa</Button>
      {window.location.pathname !== "/order-detail" ? <Header /> : ""}
      <inputContext.Provider value={{ formInputs, setFormInputs }}>
        <Router>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/new-user" element={<NewUser />} />
            <Route path="/order-detail" element={<OrderDetail />} />
            <Route path="/returning-user" element={<ReturningUser />} />
          </Routes>
        </Router>
        <footer className="cartFixed">
          <CartMenubar />
        </footer>
      </inputContext.Provider>
    </>
  );
}

export default App;
