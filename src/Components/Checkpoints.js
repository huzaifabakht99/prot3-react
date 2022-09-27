import React from "react";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";

export const Checkpoints = () => {
  return (
    <>
      <div className="checkpoint">
        <div className="checkpoint-column">
          <div className="checkpoint-lense">
            <FiberManualRecordRoundedIcon fontSize="small" />
          </div>
          <div className="checkpoint-text">Shipping</div>
        </div>
        <hr className="hr-checkpoint" />
        {/* <hr className="pink" /> */}
        <div className="checkpoint-column">
          <div className="checkpoint-lense">
            <FiberManualRecordRoundedIcon fontSize="small" />
          </div>
          <div className="checkpoint-text">Payment</div>
        </div>
        <hr className="hr-checkpoint" />
        <div className="checkpoint-column">
          <div className="checkpoint-lense">
            <FiberManualRecordRoundedIcon fontSize="small" />
          </div>
          <div className="checkpoint-text">Review</div>
        </div>
      </div>
    </>
  );
};
