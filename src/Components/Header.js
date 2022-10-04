import React from "react";
import headerImg from "../assets/Group 7553 (1).svg";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

export const Header = (props) => {
  return (
    <>
      <div className="header-main">
        <div class="none"></div>
        <div className="images-div">
          <img src={headerImg} alt="" />
          <span class="yourBrand">Your Brand</span>
        </div>
        <a>
          <CloseRoundedIcon className="clear" />
        </a>
      </div>
    </>
  );
};
