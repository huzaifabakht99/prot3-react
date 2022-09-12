// import React, { useState } from "react";
// import { styled } from "@mui/material/styles";
// import Radio, { RadioProps } from "@mui/material/Radio";
// import RadioGroup from "@mui/material/RadioGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import FormControl from "@mui/material/FormControl";
// import FormLabel from "@mui/material/FormLabel";
// import styles from '../styles.css'
// // import styles from "./RadioBtn.module.css";
// // import Cards from "../../../assets/images/cards.svg";
// // import Paypal from "../../../assets/images/paypal.svg";
// // import Klarna from "../../../assets/images/klarna.svg";
// // import AfterPay from "../../../assets/images/afterPay.svg";
// // import AmazonPay from "../../../assets/images/amazonPay.svg";
// // import Payment from "../../../assets/images/paymentSvg.svg";
// // import UpArrow from "../../../assets/images/upArrow.svg";
// // import DownArrow from "../../../assets/images/downArrow.svg";

// // import MasterCard from "../../../assets/images/mastercard.svg";
// // import EmptyCard from "../../../assets/images/emptyCard.svg";
// // import VisaTick from "../../../assets/images/visaTick.svg";
// // import PaypalText from "../../../assets/images/paypaltext.svg";
// // import KlarnaText from "../../../assets/images/klarnatext.svg";
// // import AfterPaytext from "../../../assets/images/AfterPaytext.svg";
// // import AmazonText from "../../../assets/images/amazontext.svg";
// // import BackBtn from "../../../assets/images/backBtn.svg";
// // import AmazonButton from "../../../assets/images/amazonbutton.svg";
// // import afterpaybutton from "../../../assets/images/afterpaybutton.svg";
// // import klarnabutton from "../../../assets/images/klarnabutton.svg";
// // import paypalbutton from "../../../assets/images/paypalbutton.svg";
// // import blacklock from "../../../assets/images/blacklock.svg";
// // import InputAdornment from '@mui/material/InputAdornment';
// import TextField from "../TextField/TextField";
// import {useNavigate} from 'react-router-dom';
// import Submission from '../../../components/FirstTimeUser/Submission/Submission.js';




// export default function CardInput(props) {

// const BpIcon = styled("span")(({ theme }) => ({
//   borderRadius: "50%",
//   width: 16,
//   height: 16,
//   boxShadow:
//     theme.palette.mode === "dark"
//       ? "0 0 0 1px rgb(16 22 26 / 40%)"
//       : "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
//   backgroundColor: theme.palette.mode === "dark" ? "#394b59" : "#f5f8fa",
//   backgroundImage:
//     theme.palette.mode === "dark"
//       ? "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))"
//       : "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
//   ".Mui-focusVisible &": {
//     outline: "2px auto #E72E80",
//     outlineOffset: 2,
//   },
//   "input:hover ~ &": {
//     backgroundColor: theme.palette.mode === "dark" ? "#30404d" : "#ebf1f5",
//   },
//   "input:disabled ~ &": {
//     boxShadow: "none",
//     background:
//       theme.palette.mode === "dark"
//         ? "rgba(57,75,89,.5)"
//         : "rgba(206,217,224,.5)",
//   },
// }));

// const BpCheckedIcon = styled(BpIcon)({
//   backgroundColor: "#E72E80",
//   backgroundImage:
//     "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
//   "&:before": {
//     display: "block",
//     width: 16,
//     height: 16,
//     backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
//     content: '""',
//   },
//   "input:hover ~ &": {
//     backgroundColor: "#E72E80",
//   },
// });

// // Inspired by blueprintjs
// function BpRadio(props) {
//   function RouteChangebackhome() {
//     navigate('/')

    
// }
//   return (
    
//     <Radio
//       sx={{
//         "&:hover": {
//           bgcolor: "transparent",
//         },
//       }}
//       disableRipple
//       color="default"
//       checkedIcon={<BpCheckedIcon />}
//       icon={<BpIcon />}
//       {...props}
//     />
//   );
// }
//   let navigate = useNavigate();
//   const [deliveryType, setDeliveryType] = useState("cards");
//   const [cardNumber, setCardNumber] = useState("");
//   const [expiry, setExpiry] = useState("");
//   const [cvv, setCvv] = useState("");
//   const [cardType, setCardType] = useState("empty");

//    function RouteChangebackhome() {
//     navigate('/')

    
// }
//   function onDelChange(e) {
//     setDeliveryType(e.target.value);
//   }

//   function CardNumberChange(e) {
//     console.log(e.target.value);
//     let dummyTxt = e.target.value;

//     if (dummyTxt.length) {
//       if (dummyTxt.match(/[0-9 ]+/)) {
//         if (dummyTxt[0] == "5") {
//           setCardType("mastercard");
//         } else {
//           setCardType("visa");
//         }

//         dummyTxt = dummyTxt.replaceAll(" ", "");
//         if (dummyTxt.length <= 16) {
//           let joy = dummyTxt.match(/.{1,4}/g);

//           console.log(joy.join(" "));
//           setCardNumber(joy.join(" "));
//         }
//       }
//     } else {
//       setCardNumber("");
//       setCardType("empty");
//     }
//   }

//   function ExpiryChange(e) {
//     console.log(e.target.value);

//     let prevValue = expiry;
//     let val = e.target.value;

//     if (val.length) {
//       console.log("1");
//       if (val.match(/^[0-9/]*$/)) {
//         console.log("2");
//         if (val.length <= 5) {
//           console.log("3");
//           if (val.length == 2) {
//             if (parseInt(val) > 12) {
//               return;
//             }
//           }

//           if (prevValue.length < 2 && val.length == 2) {
//             console.log("4");
//             val = val + "/";
//           }

//           setExpiry(val);
//         }
//       }
//     } else {
//       setExpiry("");
//     }
//   }

//   function CvvChange(e) {
//     let val = e.target.value;

//     if (val.match(/^[0-9]*$/)) {
//       if (val.length <= 3) {
//         setCvv(val);
//       }
//     }
//   }
 
//   return (
//     <>
//     <FormControl style={{ width: "100%" }}>
//       <RadioGroup
//         defaultValue="cards"
//         aria-labelledby="demo-customized-radios"
//         name="customized-radios"
//         className={styles.PaymentRadio}
//       >
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             marginTop: "10px",
//           }}
//         >
//           <div style={{ display: "flex" }}>
//             <FormControlLabel
//               className={styles.RadioTextActive}
//               onChange={onDelChange}
//               value="cards"
//               control={<BpRadio />}
//             />
//             {/* <img src={Cards} style={{ width: "65%" }} /> */}
//           </div>
//           <div style={{ display: "flex" }}>
//             <p className={styles.PAYFULL}>PAY FULL</p>
//             {/* {deliveryType == "cards" ? (
//               <img className={styles.Arrow} src={DownArrow} />
//             ) : (
//               <img className={styles.Arrow} src={UpArrow} />
//             )} */}
//           </div>
//         </div>
//         {deliveryType == "cards" && (
//           <div className={styles.CardForm} style={{height:"48px"}}>
//             {/* {cardType == "empty" && (
//               <img src={EmptyCard} style={{ paddingLeft: "10px" ,height:"14.48px",marginTop:"15px"}} />
//             )}
//             {cardType == "visa" && (
//               <img src={VisaTick} style={{ paddingLeft: "10px" ,height:"14.48px",marginTop:"15px"}} />
//             )}
//             {cardType == "mastercard" && (
//               <img src={MasterCard} style={{ paddingLeft: "10px",height:"14.48px",marginTop:"15px" }} />
//             )} */}
//             <TextField 
//               label="Card number"
//               inputId="card"
//               type="card"
//               onChange={CardNumberChange}
//               value={cardNumber}
//             />
//             <TextField
//               label="MM/YY"
//               inputId="expiry"
//               type="payment"
//               onChange={ExpiryChange}
//               value={expiry}
//             />
//             <TextField
//               label="CVV"
//               inputId="cvv"
//               type="payment"
//               onChange={CvvChange}
//               value={cvv}
             
//             />
//                     {/* <img src={blacklock} style={{height:"14.48px",marginTop:"17px", marginRight:"15px"}} /> */}


//           </div>
//         )}

//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             marginTop: "10px",
//           }}
//         >
//           <div style={{ display: "flex" }}>
//             <FormControlLabel
//               className={styles.RadioText}
//               onChange={onDelChange}
//               value="paypal"
//               control={<BpRadio />}
//             />
//             {/* <img src={Paypal} style={{ width: "75%" }} /> */}
//           </div>
//           <div style={{ display: "flex" }}>
//             <p className={styles.PAYFULL}>PAY FULL</p>
//             {/* {deliveryType == "paypal" ? (
//               <img className={styles.Arrow} src={DownArrow} />
//             ) : (
//               <img className={styles.Arrow} src={UpArrow} />
//             )} */}
//           </div>
//         </div>

//         {deliveryType == "paypal" && (
//           <div style={{ justifyContent: "center", display: "flex" }}>
//             {/* <img centered src={PaypalText} /> */}
//           </div>
//         )}

//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             marginTop: "10px",
//           }}
//         >
//           <div style={{ display: "flex" }}>
//             <FormControlLabel
//               className={styles.RadioText}
//               onChange={onDelChange}
//               value="klarna"
//               control={<BpRadio />}
//             />
//             {/* <img src={Klarna} style={{ width: "75%" }} /> */}
//           </div>

//           <div style={{ display: "flex" }}>
//             <p className={styles.PAYFULL}>PAY PLAN</p>
//             {/* {deliveryType == "klarna" ? (
//               <img className={styles.Arrow} src={DownArrow} />
//             ) : (
//               <img className={styles.Arrow} src={UpArrow} />
//             )} */}
//           </div>
//         </div>

//         {deliveryType == "klarna" && (
//           <div style={{ justifyContent: "center", display: "flex" }}>
//             {/* <img src={KlarnaText} style={{ paddingLeft: "10px" }} /> */}
//           </div>
//         )}

//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             marginTop: "10px",
//           }}
//         >
//           <div style={{ display: "flex" }}>
//             <FormControlLabel
//               className={styles.RadioText}
//               onChange={onDelChange}
//               value="afterpay"
//               control={<BpRadio />}
//             />
//             {/* <img src={AfterPay} style={{ width: "75%" }} /> */}
//           </div>

//           <div style={{ display: "flex" }}>
//             <p className={styles.PAYFULL}>PAY PLAN</p>
//             {/* {deliveryType == "afterpay" ? (
//               <img className={styles.Arrow} src={DownArrow} />
//             ) : (
//               <img className={styles.Arrow} src={UpArrow} />
//             )} */}
//           </div>
//         </div>

//         {deliveryType == "afterpay" && (
//           <div style={{ justifyContent: "center", display: "flex" }}>
//             {/* <img src={AfterPaytext} style={{ paddingLeft: "10px" }} /> */}
//           </div>
//         )}

//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             marginTop: "10px",
//           }}
//         >
//           <div style={{ display: "flex" }}>
//             <FormControlLabel
//               className={styles.RadioText}
//               onChange={onDelChange}
//               value="amazon"
//               control={<BpRadio />}
//             />
//             {/* <img src={AmazonPay} style={{ width: "75%" }} /> */}
//           </div>

//           <div style={{ display: "flex" }}>
            
//             <p className={styles.PAYFULL}>PAY FULL</p>
//             {/* {deliveryType == "amazon" ? (
//               <img className={styles.Arrow} src={DownArrow} />
//             ) : (
//               <img className={styles.Arrow} src={UpArrow} />
//             )} */}
//           </div>
//         </div>


//         {deliveryType == "amazon" &&   (
//           <div style={{ justifyContent: "center", display: "flex" }}>
//             {/* <img src={AmazonText} style={{ paddingLeft: "10px" }} /> */}
//           </div>
//         )}



            
//         {/* <img src={Payment} style={{ marginTop: "30px" }} /> */}
//       </RadioGroup>
   

//     </FormControl>


//     {deliveryType == "amazon" ? (
       
//         <div style={{background: "#FFFFFF",display: "flex", marginTop: "50px", padding: "20px"}}>
                 
//                  <div onClick={RouteChangebackhome}> 
//                 {/* <img src={BackBtn} /> */}
//                 </div>
//         <button style={{border:"none" , backgroundColor:"#fff"}} onClick={props.handleOpen} >
//               {/* <img style={{marginLeft: "3px",width: "100%"}} src={AmazonButton} /> */}
//               </button>
//               </div>
//             ) : 

//             deliveryType=="afterpay" ?
//             (
//               <div style={{background: "#FFFFFF",display: "flex", marginTop: "50px", padding: "20px"}}>
//              <div onClick={RouteChangebackhome}> 
//                 {/* <img src={BackBtn} /> */}
//                 </div>
//               <button style={{border:"none" , backgroundColor:"#fff"}} onClick={props.handleOpen} >
//                     {/* <img style={{marginLeft: "3px",width: "100%"}} src={afterpaybutton} /> */}
//                     </button>
//                     </div>
//             ):

//             deliveryType=="klarna" ?
//             (
//               <div style={{background: "#FFFFFF",display: "flex", marginTop: "50px", padding: "20px"}}>
//               <div onClick={RouteChangebackhome}> 
//                 {/* <img src={BackBtn} /> */}
//                 </div>
//               <button style={{border:"none" , backgroundColor:"#fff"}} onClick={props.handleOpen} >
//                     {/* <img style={{marginLeft: "3px",width: "100%"}} src={klarnabutton} /> */}
//                     </button>
//                     </div>
//             ):

//             deliveryType=="paypal" ?
//             (
//               <div style={{background: "#FFFFFF",display: "flex", marginTop: "50px", padding: "20px"}}>
//                 <div onClick={RouteChangebackhome}> 
//                 {/* <img src={BackBtn} /> */}
//                 </div>
            
//                     <button style={{border:"none" , backgroundColor:"#fff"}} onClick={props.handleOpen} >
//                     {/* <img style={{marginLeft: "3px",width: "100%"}} src={paypalbutton} /> */}
//                     </button>
//                     </div>
//             ):
         
      
//              (
//               <Submission handleOpen={props.handleOpen}>Pay</Submission>
//             )
            
//             }




//        </>
//   );
// }
