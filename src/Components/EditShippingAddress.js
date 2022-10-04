import { createTheme, Radio, RadioGroup, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { makeStyles } from "@mui/styles";
import MyFormControlLabel from "@mui/material/FormControlLabel";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { inputContext } from "../Context/inputContext";

const theme = createTheme({
  palette: {
    primary: {
      main: "#E72E80",
    },
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
  cardInput: {
    border: "1px solid black",
    padding: "20px",
  },
}));

export const EditShippingAddress = (props) => {
  const { returningUserInputs, setReturningUserInputs } =
    useContext(inputContext);

  const [inputList, setInputList] = useState([
    {
      name: "Huzaifa Bakht",
      address: "545 W. 14th Street way ",
      country: "",
      state: "NY",
      city: "",
      zip: " 77011",
    },
  ]);

  const handleShippingAddressChange = (ev) => {
    console.log(ev.target.value, "check");
    setReturningUserInputs((prevState) => ({
      ...prevState,
      shippingAddress: ev.target.value,
      fullName: ev.target.name,
    }));
    console.log(inputList.name);
  };

  const [addNewAddress, setAddNewAddress] = useState(false);
  const { formInputs, setFormInputs } = useContext(inputContext);
  const handleInputChange = (e) => {
    setFormInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSave = () => {
    setAddNewAddress(false);
    setInputList([
      ...inputList,
      {
        name: formInputs.fullNameEditForm,
        address: formInputs.addressEditForm,
        country: formInputs.countryEditForm,
        state: formInputs.stateEditForm,
        city: formInputs.cityEditForm,
        zip: formInputs.zipEditForm,
      },
    ]);
  };
  const classes = useStyles();
  return (
    <>
      <div className="edit-drawer-header">
        <h5 className="drawer-heading">Contact Info</h5>
        <a>
          <CloseRoundedIcon className="clear" onClick={props.onClose} />
        </a>
      </div>
      <div className="drawer-main">
        {addNewAddress ? (
          ""
        ) : (
          <div className="contactInfo">
            <RadioGroup
              onChange={handleShippingAddressChange}
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue={"standard"}
              name="radio-buttons-group"
            >
              {inputList.map((item, i) => {
                return (
                  <MyFormControlLabel
                    label={
                      <div>
                        <div>{item.name}</div>
                        <div>
                          {item.address + ", " + item.state + " " + item.zip}
                        </div>
                      </div>
                    }
                    name={item.name}
                    value={item.address + ", " + item.state + " " + item.zip}
                    control={<Radio onClick={handleShippingAddressChange} />}
                  />
                );
              })}
            </RadioGroup>
          </div>
        )}
        {addNewAddress ? (
          <div className="editShippingAddress ">
            <div>
              <TextField
                sx={{ width: "100%", paddingTop: "10px" }}
                InputProps={{ disableUnderline: true }}
                name="fullNameEditForm"
                value={formInputs.fullNameEditForm}
                onChange={handleInputChange}
                className={classes.root}
                placeholder=" "
                label="Full Name"
                error={false}
                variant="filled"
              />

              <TextField
                sx={{ width: "100%" }}
                InputProps={{ disableUnderline: true }}
                name="addressEditForm"
                value={formInputs.addressEditForm}
                onChange={handleInputChange}
                className={classes.root}
                placeholder=""
                label="Address"
                error={false}
                variant="filled"
              />
              <div className="flex-feilds">
                <TextField
                  sx={{ width: "100%", paddingRight: "10px" }}
                  InputProps={{ disableUnderline: true }}
                  name="countryEditForm"
                  value={formInputs.countryEditForm}
                  onChange={handleInputChange}
                  className={classes.root}
                  placeholder=""
                  label="Country"
                  error={false}
                  variant="filled"
                />
                <TextField
                  sx={{ width: "100%" }}
                  InputProps={{ disableUnderline: true }}
                  name="stateEditForm"
                  value={formInputs.stateEditForm}
                  onChange={handleInputChange}
                  className={classes.root}
                  placeholder=" "
                  label="State"
                  error={false}
                  variant="filled"
                />
              </div>

              <div className="flex-feilds">
                <TextField
                  sx={{ width: "100%", paddingRight: "10px" }}
                  name="cityEditForm"
                  value={formInputs.cityEditForm}
                  onChange={handleInputChange}
                  InputProps={{ disableUnderline: true }}
                  className={classes.root}
                  placeholder=""
                  label="City"
                  error={false}
                  variant="filled"
                />
                <TextField
                  sx={{ width: "100%" }}
                  name="zipEditForm"
                  value={formInputs.zipEditForm}
                  onChange={handleInputChange}
                  InputProps={{ disableUnderline: true }}
                  className={classes.root}
                  placeholder=""
                  label="Zip Code"
                  error={false}
                  variant="filled"
                />
              </div>
            </div>
            <div className="addNew-shipping ">
              <button
                style={{ marginTop: "53px", marginBottom: "28px" }}
                className="save-btn"
                onClick={() => onSave()}
              >
                Save
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
        {addNewAddress ? (
          ""
        ) : (
          <div className="drawer-btn-div">
            <a
              className="addnew-btn"
              onClick={() => console.log(setAddNewAddress(true))}
            >
              +Add New
            </a>
            <button class="edit-drawer-done-btn" onClick={props.onClose}>
              Done
            </button>
          </div>
        )}
      </div>
    </>
  );
};
