import React, { useContext } from "react";
import headerImg from "../assets/Group 7553 (1).svg";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import { inputContext } from "../Context/inputContext";
import { useNavigate } from "react-router-dom";

export const Header = (props) => {
  const { formInputs, setFormInputs } = useContext(inputContext);
  const navigate = useNavigate();
  return (
    <>
      <div className="header-main">
        {formInputs.station === "guest" ? (
          <KeyboardBackspaceRoundedIcon onClick={() => navigate("/")} />
        ) : (
          ""
        )}
        <div className="images-div">
          <img src={headerImg} alt="" />
          <span className="yourBrand">Your Brand</span>
        </div>
        {formInputs.station === "guest" ? <div className="none"></div> : ""}
        {/* <a>
          <CloseRoundedIcon className="clear" />
        </a> */}
      </div>
    </>
  );
};
