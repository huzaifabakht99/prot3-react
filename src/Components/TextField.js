import * as React from "react";
import { alpha, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { height } from "@mui/system";
import styles from '../styles.css'

// import styles from './TextField.module.css';

const style = {
  "&.Mui-focused": {
    backgroundColor: "#ffffff",
  //   boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
    borderColor: "#848484"
  },
    ".MuiInputLabel-root.Mui-focused": {
        color: "#848484"
    },
    ".MuiInputLabel-root": {
        color: "#848484"
    },
  "& .MuiFilledInput-root": {
    border: "1px solid rgba(0, 0, 0, 0.2)",
    overflow: "hidden",
    borderRadius: 4,
    backgroundColor: "#ffffff",
    "&:hover": {
      backgroundColor: "#ffffff"
    }
  }
}

const style2 = {
  "&.Mui-focused": {
    backgroundColor: "#ffffff",
  //   boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
    borderColor: "#848484"
  },
    ".MuiInputLabel-root.Mui-focused": {
        color: "#848484"
    },
    ".MuiInputLabel-root": {
        color: "#848484",
        fontSize: '13px'
    },
  "& .MuiFilledInput-root": {
    overflow: "hidden",
    borderRadius: 4,
    backgroundColor: "#ffffff",
    "&:hover": {
      backgroundColor: "#ffffff"
    },
    // width: '50%',
    fontSize: '13px'
  }
}

const RedditTextField = styled((props) => (
  <TextField
    InputProps={{ disableUnderline: true }}
    {...props}
  />
))(({ theme }) => (style));

const RedditTextField2 = styled((props) => (
  <TextField
    InputProps={{ disableUnderline: true }}
    {...props}
  />
))(({ theme }) => (style2));

export default function CustomizedInputs(props) {
  return (
    <Box className={`${props.type == 'card' ? styles.Card : ''}`}>
      {!props.type && <RedditTextField
        label={props.label}
        id={props.inputId}
        variant="filled"
        style={{ marginTop: 11, width: '100%' }}
      />}

      {props.type == 'payment' && <RedditTextField2
        label={props.label}
        id={props.inputId}
        variant="filled"
        style={{ width: '100%', height: '42px' }}
        onChange={props.onChange}
        value={props.value}
      />}

      {props.type == 'card' && <RedditTextField2
        label={props.label}
        id={props.inputId}
        variant="filled"
        style={{ width: '100%', height: '42px' }}
        onChange={props.onChange}
        value={props.value}
      />}

    </Box>
  );
}
