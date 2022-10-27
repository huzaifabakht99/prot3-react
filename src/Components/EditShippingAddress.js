import { createTheme, Radio, RadioGroup, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { makeStyles } from "@mui/styles";
import MyFormControlLabel from "@mui/material/FormControlLabel";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { inputContext } from "../Context/inputContext";
import DoneIcon from "@mui/icons-material/Done";
import PlacesAutocomplete from "react-places-autocomplete";

import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from "react-places-autocomplete";

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
      outline: " none",
      borderColor: "#e72e817a ",
      boxShadow: " 0 0px 0px 0.15rem #e72e8128",
    },
    "& .MuiFilledInput-root": {
      background: "#F6F6F6",
      width: "100%",
      marginBottom: "10px",

      border: "1px solid #F6F6F6",
      borderRadius: "6px",
    },
  },
  promo: {
    "& .MuiFilledInput-root.Mui-focused": {
      backgroundColor: "white",
      outline: " none",
      borderColor: "#e72e817a ",
      boxShadow: " 0 0px 0px 0.15rem #e72e8128",
    },
    "& .MuiFilledInput-root": {
      background: "#F6F6F6",
      width: "100%",
      marginBottom: "10px",

      border: "1px solid #F6F6F6",
      borderRadius: "6px",
    },
  },
  cardInput: {
    border: "1px solid black",
    padding: "20px",
  },
  drawerPaper: {
    borderRadius: "20px 20px 0 0",
  },
}));

export const EditShippingAddress = (props) => {
  const { returningUserInputs, setReturningUserInputs } =
    useContext(inputContext);

  const [inputList, setInputList] = useState([
    {
      name: "Hadia Ali",
      address: "4717 Crummit Lane",
      country: "USA",
      state: " Nebraska",
      city: "Omaha",
      zip: " 68102",
    },
    {
      name: "Usman Nasir",
      address: "52 Hillcrest Circle",
      country: "USA",
      state: " Minnesota",
      city: "Minneapolis",
      zip: " 55415",
    },
    {
      name: "Jordan Olivas",
      address: "920 Lynch Street",
      country: "USA",
      state: " California",
      city: "San Jose",
      zip: " 95110",
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

  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState({
    lat: null,
    long: null,
  });
  const handleSelectAddress = async (value) => {
    const result = await geocodeByAddress(value);
    const ll = getLatLng(result[0]);
    console.log(ll);
    setAddress(value);
    setCoordinates(ll);
  };
  const handleShippingInputChange = (e) => {
    setFormInputs((prevState) => ({
      ...prevState,
      shippingAddress: e.target.value,
      deliveryTypeAmount: 0,
    }));
  };
  const handleMoreAdd = () => {
    setMoreShippingAddress(false);
    setManualShippingAddress(false);
  };

  const [moreShippingAddress, setMoreShippingAddress] = useState(false);
  const [manualShippingAddress, setManualShippingAddress] = useState(false);
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
      <hr className="hr-drawer" style={{ position: "absolute", top: "49px" }} />
      <div className="drawer-main">
        {addNewAddress ? (
          ""
        ) : (
          <div className="contactInfo">
            {inputList.map((item, i) => {
              return (
                <div>
                  <hr className="hr-drawer" />
                  <div className="drawer-item-div">
                    <div className="tick-div">
                      <DoneIcon sx={{ color: "#e72e80" }} />
                    </div>
                    <div className="main-tick-content">
                      <div className="content-main-text">{item.name}</div>
                      <div className="content-subtext">
                        {item.address +
                          "," +
                          item.city +
                          ", " +
                          item.state +
                          "," +
                          item.zip +
                          "," +
                          item.country}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        {addNewAddress ? (
          <div className="editShippingAddress " style={{ marginTop: "33px" }}>
            <div>
              <TextField
                sx={{ width: "100%" }}
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

              <PlacesAutocomplete
                value={address}
                onChange={setAddress}
                onSelect={handleSelectAddress}
              >
                {({
                  getInputProps,
                  suggestions,
                  getSuggestionItemProps,
                  loading,
                }) => (
                  <div>
                    {/* <input
                    {...getInputProps({
                      placeholder: "Search Places ...",
                      className: "location-search-input",
                    })}
                  /> */}
                    <TextField
                      {...getInputProps({
                        // placeholder: "Search Places ...",
                        className: "location-search-input",
                      })}
                      sx={{ width: "100%" }}
                      name="shippingAddress"
                      // value={formInputs.shippingAddress}
                      // onChange={handleShippingInputChange}
                      InputProps={{ disableUnderline: true }}
                      className={classes.root}
                      // placeholder=""
                      label="Shipping Address"
                      error={false}
                      variant="filled"
                    />
                    <div className="autocomplete-dropdown-container">
                      {loading && <div>Loading...</div>}
                      {suggestions.map((suggestion) => {
                        const className = suggestion.active
                          ? "suggestion-item--active"
                          : "suggestion-item";
                        // inline style for demonstration purpose
                        const style = suggestion.active
                          ? { backgroundColor: "#fafafa", cursor: "pointer" }
                          : { backgroundColor: "#ffffff", cursor: "pointer" };
                        return (
                          <div
                            {...getSuggestionItemProps(suggestion, {
                              className,
                              style,
                            })}
                          >
                            <span>{suggestion.description}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </PlacesAutocomplete>

              {/* <Input flagIcon={true} placeholder={'Email'} button={false}/>  
                <Input flagIcon={true} placeholder={'Full Name'} button={false}/> 
                <Input flagIcon={true} placeholder={'Shipping Address'} button={false}/>  */}
              {/* <TextField className='newUser-textField' id="outlined-basic" label="Email" variant="outlined" />
                <TextField className='newUser-textField' id="outlined-basic" label="Full Name" variant="outlined" />
                <TextField className='newUser-textField' id="outlined-basic" label="Shipping Address" variant="outlined" /> */}
              <p className="more-add-div">
                {manualShippingAddress ? (
                  <a
                    className="more-shipping-add"
                    onClick={() => setMoreShippingAddress(!moreShippingAddress)}
                  >
                    + Appartment, suit, building, etc.
                  </a>
                ) : (
                  <a
                    className="manual-address"
                    onClick={() => setManualShippingAddress(true)}
                  >
                    Enter Address Manually
                  </a>
                )}
              </p>
              {moreShippingAddress ? (
                <TextField
                  sx={{ width: "100%" }}
                  name="shippingAddress"
                  value={formInputs.shippingAddress}
                  onChange={handleShippingInputChange}
                  InputProps={{ disableUnderline: true }}
                  className={classes.root}
                  placeholder=""
                  label="Shipping Address"
                  error={false}
                  variant="filled"
                />
              ) : (
                ""
              )}
              {manualShippingAddress ? (
                <div>
                  <div className="flex-feilds">
                    <TextField
                      sx={{ width: "100%", paddingRight: "10px" }}
                      name="zip"
                      value={formInputs.zip}
                      onChange={handleInputChange}
                      InputProps={{ disableUnderline: true }}
                      className={classes.root}
                      placeholder=""
                      label="Zip Code"
                      error={false}
                      variant="filled"
                    />
                    <TextField
                      sx={{ width: "100%" }}
                      InputProps={{ disableUnderline: true }}
                      name="city"
                      value={formInputs.city}
                      onChange={handleInputChange}
                      className={classes.root}
                      placeholder=""
                      label="City"
                      error={false}
                      variant="filled"
                    />
                  </div>
                  <div className="flex-feilds">
                    <TextField
                      sx={{ width: "100%", paddingRight: "10px" }}
                      InputProps={{ disableUnderline: true }}
                      name="province"
                      value={formInputs.state}
                      onChange={handleInputChange}
                      className={classes.root}
                      placeholder=" "
                      label="State"
                      error={false}
                      variant="filled"
                    />
                    <TextField
                      sx={{ width: "100%" }}
                      name="country"
                      value={formInputs.country}
                      onChange={handleInputChange}
                      InputProps={{ disableUnderline: true }}
                      className={classes.root}
                      placeholder=""
                      label="Country"
                      error={false}
                      variant="filled"
                    />
                  </div>
                  <p className="more-add-div">
                    <a className="more-shipping-add" onClick={handleMoreAdd}>
                      or use Google auto fill address
                    </a>
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="addNew-shipping ">
              <button
                style={{ marginTop: "33px", marginBottom: "28px" }}
                className="save-btn"
                onClick={() => onSave()}
              >
                Save Address
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
        {addNewAddress ? (
          ""
        ) : (
          <div
            className="drawer-btn-div"
            style={{ marginTop: "25px", marginBottom: "25px" }}
          >
            <a
              className="addnew-btn"
              onClick={() => console.log(setAddNewAddress(true))}
            >
              + Add New Shipping Address
            </a>
          </div>
        )}
      </div>
    </>
  );
};
