import React, { useContext } from "react";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";
import { inputContext } from "../Context/inputContext";
import { Button } from "@mui/material";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Check from "@mui/icons-material/Check";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import VideoLabelIcon from "@mui/icons-material/VideoLabel";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  // your other stuff here

  // Add this
  step_label_root: {
    marginTop: "0px !important",
    color: "#e72e80 !important",
  },
}));
const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 3,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      // backgroundImage: "linear-gradient(90deg, #E71583 0.24%, #9457F7 99.83%)",
    },
  },
  step_label_root: {
    fontSize: "10px",
  },

  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage: "linear-gradient(90deg, #E71583 0.24%, #9457F7 99.83%)",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 10,
  height: 10,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    // backgroundImage: "linear-gradient(90deg, #E71583 0.24%, #9457F7 99.83%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
  ...(ownerState.completed && {
    backgroundImage: "linear-gradient(90deg, #E71583 0.24%, #9457F7 99.83%)",
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    ></ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const steps = ["Shipping", "Delivery", "Payment"];

export const Checkpoints = () => {
  const { formInputs, setFormInputs } = useContext(inputContext);
  const classes = useStyles();
  return (
    <>
      {/* <div className="checkpoint">
        <Stack sx={{ width: "100%" }} spacing={4}>
          <Stepper
            alternativeLabel
            activeStep={2}
            connector={<ColorlibConnector />}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel
                  classes={{ label: classes.step_label_root }}
                  StepIconComponent={ColorlibStepIcon}
                >
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </Stack>
      </div> */}
      <div className="checkpoint">
        <div className="checkpoint-column">
          <div className="checkpoint-lense">
            <FiberManualRecordRoundedIcon
              style={{
                color: formInputs.station === "new-user" ? "#E71583" : "",
              }}
              fontSize="small"
            />
          </div>
          <div
            className="checkpoint-text"
            style={{
              color: formInputs.station === "new-user" ? "#E71583" : "",
            }}
          >
            Shipping
          </div>
        </div>

        {formInputs.paymentMethod === "card" ||
        formInputs.paymentMethod === "amazon" ||
        formInputs.paymentMethod === "klarna" ||
        formInputs.paymentMethod === "clearpay" ||
        formInputs.paymentMethod === "cod" ||
        formInputs.paymentMethod === "paypal" ? (
          <hr className="pink" />
        ) : (
          <hr className="hr-checkpoint" />
        )}
        <div className="checkpoint-column">
          <div className="checkpoint-lense">
            <FiberManualRecordRoundedIcon
              style={{
                color:
                  formInputs.paymentMethod === "card" ||
                  formInputs.paymentMethod === "amazon" ||
                  formInputs.paymentMethod === "klarna" ||
                  formInputs.paymentMethod === "clearpay" ||
                  formInputs.paymentMethod === "cod" ||
                  formInputs.paymentMethod === "paypal"
                    ? "#E71583"
                    : "",
              }}
              fontSize="small"
            />
          </div>
          <div
            style={{
              color:
                formInputs.paymentMethod === "card" ||
                formInputs.paymentMethod === "amazon" ||
                formInputs.paymentMethod === "klarna" ||
                formInputs.paymentMethod === "clearpay" ||
                formInputs.paymentMethod === "cod" ||
                formInputs.paymentMethod === "paypal"
                  ? "#E71583"
                  : "",
            }}
            className="checkpoint-text"
          >
            Payment
          </div>
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
