// Opstmt.js
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import "../styles.css";
import Footer from "../views/Footer/footer";
import jwtDecode from 'jwt-decode'

import { AppContext } from "../AppContext";
import { multiply } from "lodash";
import Navbarr from "../views/navbarr/Navbarr";

function Ratio() {
  const token = localStorage.getItem("authTokens")

  if (token){
    const decode = jwtDecode(token)
    var username = decode.username
    

  }
  const {
    inputValues,
    setInputValues,
    tot2020,
    Cost37,
    setCost37,
    Cost31,
    setCost31,
    tot37,
    Cost27,
    setCost27,
    Cost26,
    setCost26,
    Cost41,
    setCost41,
    Cost42,
    Cost38,
    setCost38,
    sumB50,
    setSumB50,
    sumC50,
    setSumC50,
    sumD50,
    setSumD50,
    sumE50,
    setSumE50,
    sumF50,
    setSumF50,
    sumG50,
    setSumG50,
    sumH50,
    setSumH50,
    sumI50,
    setSumI50,
    sumB30,
    setSumB30,
    sumC30,
    setSumC30,
    sumD30,
    setSumD30,
    sumE30,
    setSumE30,
    sumF30,
    setSumF30,
    sumG30,
    setSumG30,
    sumH30,
    setSumH30,
    sumI30,
    setSumI30,
    sumB2,
    setSumB2,
    sumC2,
    setSumC2,
    sumD2,
    setSumD2,
    sumE2,
    setSumE2,
    sumF2,
    setSumF2,
    sumG2,
    setSumG2,
    sumH2,
    setSumH2,
    sumI2,
    setSumI2,
    sumB38,
    setSumB38,
    sumC38,
    setSumC38,
    sumD38,
    setSumD38,
    sumE38,
    setSumE38,
    sumF38,
    setSumF38,
    sumG38,
    setSumG38,
    sumH38,
    setSumH38,
    sumI38,
    setSumI38,
    sumB44,
    setSumB44,
    sumC44,
    setSumC44,
    sumD44,
    setSumD44,
    sumE44,
    setSumE44,
    sumF44,
    setSumF44,
    sumG44,
    setSumG44,
    sumH44,
    setSumH44,
    sumI44,
    setSumI44,
    sumB45,
    setSumB45,
    sumC45,
    setSumC45,
    sumD45,
    setSumD45,
    sumE45,
    setSumE45,
    sumF45,
    setSumF45,
    sumG45,
    setSumG45,
    sumH45,
    setSumH45,
    sumI45,
    setSumI45,

    sumB4_23,
    setSumB4_23,
    sumC4_23,
    setSumC4_23,
    sumD4_23,
    setSumD4_23,
    sumE4_23,
    setSumE4_23,
    sumF4_23,
    setSumF4_23,
    sumG4_23,
    setSumG4_23,
    sumH4_23,
    setSumH4_23,
    sumI4_23,
    setSumI4_23,

    sumB4_21,
    setSumB4_21,
    sumC4_21,
    setSumC4_21,
    sumD4_21,
    setSumD4_21,
    sumE4_21,
    setSumE4_21,
    sumF4_21,
    setSumF4_21,
    sumG4_21,
    setSumG4_21,
    sumH4_21,
    setSumH4_21,
    sumI4_21,
    setSumI4_21,

    sumB4_25,
    setSumB4_25,
    sumC4_25,
    setSumC4_25,
    sumD4_25,
    setSumD4_25,
    sumE4_25,
    setSumE4_25,
    sumF4_25,
    setSumF4_25,
    sumG4_25,
    setSumG4_25,
    sumH4_25,
    setSumH4_25,
    sumI4_25,
    setSumI4_25,

    sumC4_26,
    setSumC4_26,
    sumD4_26,
    setSumD4_26,
    sumE4_26,
    setSumE4_26,
    sumF4_26,
    setSumF4_26,
    sumG4_26,
    setSumG4_26,
    sumH4_26,
    setSumH4_26,
    sumI4_26,
    setSumI4_26,

    sumB4_27,
    setSumB4_27,
    sumC4_27,
    setSumC4_27,
    sumD4_27,
    setSumD4_27,
    sumE4_27,
    setSumE4_27,
    sumF4_27,
    setSumF4_27,
    sumG4_27,
    setSumG4_27,
    sumH4_27,
    setSumH4_27,
    sumI4_27,
    setSumI4_27,

    sumB4_28,
    setSumB4_28,
    sumC4_28,
    setSumC4_28,
    sumD4_28,
    setSumD4_28,
    sumE4_28,
    setSumE4_28,
    sumF4_28,
    setSumF4_28,
    sumG4_28,
    setSumG4_28,
    sumH4_28,
    setSumH4_28,
    sumI4_28,
    setSumI4_28,

    sumB4_34,
    setSumB4_34,
    sumC4_34,
    setSumC4_34,
    sumD4_34,
    setSumD4_34,
    sumE4_34,
    setSumE4_34,
    sumF4_34,
    setSumF4_34,
    sumG4_34,
    setSumG4_34,
    sumH4_34,
    setSumH4_34,
    sumI4_34,
    setSumI4_34,

    sumC4_35,
    setSumC4_35,
    sumD4_35,
    setSumD4_35,
    sumE4_35,
    setSumE4_35,
    sumF4_35,
    setSumF4_35,
    sumG4_35,
    setSumG4_35,
    sumH4_35,
    setSumH4_35,
    sumI4_35,
    setSumI4_35,

    sumB4_38,
    setSumB4_38,
    sumC4_38,
    setSumC4_38,
    sumD4_38,
    setSumD4_38,
    sumE4_38,
    setSumE4_38,
    sumF4_38,
    setSumF4_38,
    sumG4_38,
    setSumG4_38,
    sumH4_38,
    setSumH4_38,
    sumI4_38,
    setSumI4_38,

    sumB4_29,
    setSumB4_29,
    sumC4_29,
    setSumC4_29,
    sumD4_29,
    setSumD4_29,
    sumE4_29,
    setSumE4_29,
    sumF4_29,
    setSumF4_29,
    sumG4_29,
    setSumG4_29,
    sumH4_29,
    setSumH4_29,
    sumI4_29,
    setSumI4_29,

    sumB4_30,
    setSumB4_30,
    sumC4_30,
    setSumC4_30,
    sumD4_30,
    setSumD4_30,
    sumE4_30,
    setSumE4_30,
    sumF4_30,
    setSumF4_30,
    sumG4_30,
    setSumG4_30,
    sumH4_30,
    setSumH4_30,
    sumI4_30,
    setSumI4_30,

    sumB4_31,
    setSumB4_31,
    sumC4_31,
    setSumC4_31,
    sumD4_31,
    setSumD4_31,
    sumE4_31,
    setSumE4_31,
    sumF4_31,
    setSumF4_31,
    sumG4_31,
    setSumG4_31,
    sumH4_31,
    setSumH4_31,
    sumI4_31,
    setSumI4_31,

    sumB4_39,
    setSumB4_39,
    sumC4_39,
    setSumC4_39,
    sumD4_39,
    setSumD4_39,
    sumE4_39,
    setSumE4_39,
    sumF4_39,
    setSumF4_39,
    sumG4_39,
    setSumG4_39,
    sumH4_39,
    setSumH4_39,
    sumI4_39,
    setSumI4_39,

    sumB4_40,
    setSumB4_40,
    sumC4_40,
    setSumC4_40,
    sumD4_40,
    setSumD4_40,
    sumE4_40,
    setSumE4_40,
    sumF4_40,
    setSumF4_40,
    sumG4_40,
    setSumG4_40,
    sumH4_40,
    setSumH4_40,
    sumI4_40,
    setSumI4_40,

    sumB4_6,
    setSumB4_6,
    sumC4_6,
    setSumC4_6,
    sumD4_6,
    setSumD4_6,
    sumE4_6,
    setSumE4_6,
    sumF4_6,
    setSumF4_6,
    sumG4_6,
    setSumG4_6,
    sumH4_6,
    setSumH4_6,
    sumI4_6,
    setSumI4_6,
  } = useContext(AppContext);

  const [sumB4_7, setSumB4_7] = useState(0);
  const [sumC4_7, setSumC4_7] = useState(0);
  const [sumD4_7, setSumD4_7] = useState(0);
  const [sumE4_7, setSumE4_7] = useState(0);
  const [sumF4_7, setSumF4_7] = useState(0);
  const [sumG4_7, setSumG4_7] = useState(0);
  const [sumH4_7, setSumH4_7] = useState(0);
  const [sumI4_7, setSumI4_7] = useState(0);

  const [sumB4_8, setSumB4_8] = useState(0);
  const [sumC4_8, setSumC4_8] = useState(0);
  const [sumD4_8, setSumD4_8] = useState(0);
  const [sumE4_8, setSumE4_8] = useState(0);
  const [sumF4_8, setSumF4_8] = useState(0);
  const [sumG4_8, setSumG4_8] = useState(0);
  const [sumH4_8, setSumH4_8] = useState(0);
  const [sumI4_8, setSumI4_8] = useState(0);

  const [sumB4_9, setSumB4_9] = useState(0);
  const [sumC4_9, setSumC4_9] = useState(0);
  const [sumD4_9, setSumD4_9] = useState(0);
  const [sumE4_9, setSumE4_9] = useState(0);
  const [sumF4_9, setSumF4_9] = useState(0);
  const [sumG4_9, setSumG4_9] = useState(0);
  const [sumH4_9, setSumH4_9] = useState(0);
  const [sumI4_9, setSumI4_9] = useState(0);

  const [sumB4_10, setSumB4_10] = useState(0);
  const [sumC4_10, setSumC4_10] = useState(0);
  const [sumD4_10, setSumD4_10] = useState(0);
  const [sumE4_10, setSumE4_10] = useState(0);
  const [sumF4_10, setSumF4_10] = useState(0);
  const [sumG4_10, setSumG4_10] = useState(0);
  const [sumH4_10, setSumH4_10] = useState(0);
  const [sumI4_10, setSumI4_10] = useState(0);

  const [sumB4_11, setSumB4_11] = useState(0);
  const [sumC4_11, setSumC4_11] = useState(0);
  const [sumD4_11, setSumD4_11] = useState(0);
  const [sumE4_11, setSumE4_11] = useState(0);
  const [sumF4_11, setSumF4_11] = useState(0);
  const [sumG4_11, setSumG4_11] = useState(0);
  const [sumH4_11, setSumH4_11] = useState(0);
  const [sumI4_11, setSumI4_11] = useState(0);

  const [sumB4_12, setSumB4_12] = useState(0);
  const [sumC4_12, setSumC4_12] = useState(0);
  const [sumD4_12, setSumD4_12] = useState(0);
  const [sumE4_12, setSumE4_12] = useState(0);
  const [sumF4_12, setSumF4_12] = useState(0);
  const [sumG4_12, setSumG4_12] = useState(0);
  const [sumH4_12, setSumH4_12] = useState(0);
  const [sumI4_12, setSumI4_12] = useState(0);

  const [sumB4_13, setSumB4_13] = useState(0);
  const [sumC4_13, setSumC4_13] = useState(0);
  const [sumD4_13, setSumD4_13] = useState(0);
  const [sumE4_13, setSumE4_13] = useState(0);
  const [sumF4_13, setSumF4_13] = useState(0);
  const [sumG4_13, setSumG4_13] = useState(0);
  const [sumH4_13, setSumH4_13] = useState(0);
  const [sumI4_13, setSumI4_13] = useState(0);

  const [sumB4_14, setSumB4_14] = useState(0);
  const [sumC4_14, setSumC4_14] = useState(0);
  const [sumD4_14, setSumD4_14] = useState(0);
  const [sumE4_14, setSumE4_14] = useState(0);
  const [sumF4_14, setSumF4_14] = useState(0);
  const [sumG4_14, setSumG4_14] = useState(0);
  const [sumH4_14, setSumH4_14] = useState(0);
  const [sumI4_14, setSumI4_14] = useState(0);

  const [sumB4_15, setSumB4_15] = useState(0);
  const [sumC4_15, setSumC4_15] = useState(0);
  const [sumD4_15, setSumD4_15] = useState(0);
  const [sumE4_15, setSumE4_15] = useState(0);
  const [sumF4_15, setSumF4_15] = useState(0);
  const [sumG4_15, setSumG4_15] = useState(0);
  const [sumH4_15, setSumH4_15] = useState(0);
  const [sumI4_15, setSumI4_15] = useState(0);

  const [sumB4_16, setSumB4_16] = useState(0);
  const [sumC4_16, setSumC4_16] = useState(0);
  const [sumD4_16, setSumD4_16] = useState(0);
  const [sumE4_16, setSumE4_16] = useState(0);
  const [sumF4_16, setSumF4_16] = useState(0);
  const [sumG4_16, setSumG4_16] = useState(0);
  const [sumH4_16, setSumH4_16] = useState(0);
  const [sumI4_16, setSumI4_16] = useState(0);

  const [sumB4_17, setSumB4_17] = useState(0);
  const [sumC4_17, setSumC4_17] = useState(0);
  const [sumD4_17, setSumD4_17] = useState(0);
  const [sumE4_17, setSumE4_17] = useState(0);
  const [sumF4_17, setSumF4_17] = useState(0);
  const [sumG4_17, setSumG4_17] = useState(0);
  const [sumH4_17, setSumH4_17] = useState(0);
  const [sumI4_17, setSumI4_17] = useState(0);

  const [sumB4_18, setSumB4_18] = useState(0);
  const [sumC4_18, setSumC4_18] = useState(0);
  const [sumD4_18, setSumD4_18] = useState(0);
  const [sumE4_18, setSumE4_18] = useState(0);
  const [sumF4_18, setSumF4_18] = useState(0);
  const [sumG4_18, setSumG4_18] = useState(0);
  const [sumH4_18, setSumH4_18] = useState(0);
  const [sumI4_18, setSumI4_18] = useState(0);

  const [sumC4_22, setSumC4_22] = useState(0);
  const [sumD4_22, setSumD4_22] = useState(0);
  const [sumE4_22, setSumE4_22] = useState(0);
  const [sumF4_22, setSumF4_22] = useState(0);
  const [sumG4_22, setSumG4_22] = useState(0);
  const [sumH4_22, setSumH4_22] = useState(0);
  const [sumI4_22, setSumI4_22] = useState(0);

  const [sumB4_24, setSumB4_24] = useState(0);
  const [sumC4_24, setSumC4_24] = useState(0);
  const [sumD4_24, setSumD4_24] = useState(0);
  const [sumE4_24, setSumE4_24] = useState(0);
  const [sumF4_24, setSumF4_24] = useState(0);
  const [sumG4_24, setSumG4_24] = useState(0);
  const [sumH4_24, setSumH4_24] = useState(0);
  const [sumI4_24, setSumI4_24] = useState(0);

  const [sumB4_36, setSumB4_36] = useState(0);
  const [sumC4_36, setSumC4_36] = useState(0);
  const [sumD4_36, setSumD4_36] = useState(0);
  const [sumE4_36, setSumE4_36] = useState(0);
  const [sumF4_36, setSumF4_36] = useState(0);
  const [sumG4_36, setSumG4_36] = useState(0);
  const [sumH4_36, setSumH4_36] = useState(0);
  const [sumI4_36, setSumI4_36] = useState(0);

  const [sumB4_37, setSumB4_37] = useState(0);
  const [sumC4_37, setSumC4_37] = useState(0);
  const [sumD4_37, setSumD4_37] = useState(0);
  const [sumE4_37, setSumE4_37] = useState(0);
  const [sumF4_37, setSumF4_37] = useState(0);
  const [sumG4_37, setSumG4_37] = useState(0);
  const [sumH4_37, setSumH4_37] = useState(0);
  const [sumI4_37, setSumI4_37] = useState(0);

  const [sumB4_41, setSumB4_41] = useState(0);
  const [sumC4_41, setSumC4_41] = useState(0);
  const [sumD4_41, setSumD4_41] = useState(0);
  const [sumE4_41, setSumE4_41] = useState(0);
  const [sumF4_41, setSumF4_41] = useState(0);
  const [sumG4_41, setSumG4_41] = useState(0);
  const [sumH4_41, setSumH4_41] = useState(0);
  const [sumI4_41, setSumI4_41] = useState(0);

  const [sumB4_42, setSumB4_42] = useState(0);
  const [sumC4_42, setSumC4_42] = useState(0);
  const [sumD4_42, setSumD4_42] = useState(0);
  const [sumE4_42, setSumE4_42] = useState(0);
  const [sumF4_42, setSumF4_42] = useState(0);
  const [sumG4_42, setSumG4_42] = useState(0);
  const [sumH4_42, setSumH4_42] = useState(0);
  const [sumI4_42, setSumI4_42] = useState(0);

  const [sumB4_43, setSumB4_43] = useState(0);
  const [sumC4_43, setSumC4_43] = useState(0);
  const [sumD4_43, setSumD4_43] = useState(0);
  const [sumE4_43, setSumE4_43] = useState(0);
  const [sumF4_43, setSumF4_43] = useState(0);
  const [sumG4_43, setSumG4_43] = useState(0);
  const [sumH4_43, setSumH4_43] = useState(0);
  const [sumI4_43, setSumI4_43] = useState(0);

  const [sumB4_44, setSumB4_44] = useState(0);
  const [sumC4_44, setSumC4_44] = useState(0);
  const [sumD4_44, setSumD4_44] = useState(0);
  const [sumE4_44, setSumE4_44] = useState(0);
  const [sumF4_44, setSumF4_44] = useState(0);
  const [sumG4_44, setSumG4_44] = useState(0);
  const [sumH4_44, setSumH4_44] = useState(0);
  const [sumI4_44, setSumI4_44] = useState(0);

  const [sumB4_45, setSumB4_45] = useState(0);
  const [sumC4_45, setSumC4_45] = useState(0);
  const [sumD4_45, setSumD4_45] = useState(0);
  const [sumE4_45, setSumE4_45] = useState(0);
  const [sumF4_45, setSumF4_45] = useState(0);
  const [sumG4_45, setSumG4_45] = useState(0);
  const [sumH4_45, setSumH4_45] = useState(0);
  const [sumI4_45, setSumI4_45] = useState(0);

  const [sumB4_48, setSumB4_48] = useState(0);
  const [sumC4_48, setSumC4_48] = useState(0);
  const [sumD4_48, setSumD4_48] = useState(0);
  const [sumE4_48, setSumE4_48] = useState(0);
  const [sumF4_48, setSumF4_48] = useState(0);
  const [sumG4_48, setSumG4_48] = useState(0);
  const [sumH4_48, setSumH4_48] = useState(0);
  const [sumI4_48, setSumI4_48] = useState(0);

  const [sumB4_49, setSumB4_49] = useState(0);
  const [sumC4_49, setSumC4_49] = useState(0);
  const [sumD4_49, setSumD4_49] = useState(0);
  const [sumE4_49, setSumE4_49] = useState(0);
  const [sumF4_49, setSumF4_49] = useState(0);
  const [sumG4_49, setSumG4_49] = useState(0);
  const [sumH4_49, setSumH4_49] = useState(0);
  const [sumI4_49, setSumI4_49] = useState(0);

  const [sumB4_50, setSumB4_50] = useState(0);
  const [sumC4_50, setSumC4_50] = useState(0);
  const [sumD4_50, setSumD4_50] = useState(0);
  const [sumE4_50, setSumE4_50] = useState(0);
  const [sumF4_50, setSumF4_50] = useState(0);
  const [sumG4_50, setSumG4_50] = useState(0);
  const [sumH4_50, setSumH4_50] = useState(0);
  const [sumI4_50, setSumI4_50] = useState(0);

  const [sumB4_51, setSumB4_51] = useState(0);
  const [sumC4_51, setSumC4_51] = useState(0);
  const [sumD4_51, setSumD4_51] = useState(0);
  const [sumE4_51, setSumE4_51] = useState(0);
  const [sumF4_51, setSumF4_51] = useState(0);
  const [sumG4_51, setSumG4_51] = useState(0);
  const [sumH4_51, setSumH4_51] = useState(0);
  const [sumI4_51, setSumI4_51] = useState(0);

  const [sumB4_52, setSumB4_52] = useState(0);
  const [sumC4_52, setSumC4_52] = useState(0);
  const [sumD4_52, setSumD4_52] = useState(0);
  const [sumE4_52, setSumE4_52] = useState(0);
  const [sumF4_52, setSumF4_52] = useState(0);
  const [sumG4_52, setSumG4_52] = useState(0);
  const [sumH4_52, setSumH4_52] = useState(0);
  const [sumI4_52, setSumI4_52] = useState(0);

  //------------------------------------------------ MAIN FUNCION2 ---------------------------------------------

  const uploadData = async (cell_id, cell_value) => {
    try {
      const user_id = localStorage.getItem("user_id");
      const res = await fetch("http://127.0.0.1:8000/api/save_ratio/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cell_id, cell_value, user_id }),
      });
      console.log("Response:", res);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const calculateTotal = (arr) => {
    return arr.reduce(
      (total, currentValue) =>
        total + parseFloat(inputValues[currentValue] || 0),
      0
    );
  };

  //------------------------------------------------ MAIN FUNCION ---------------------------------------------

  const changeData = async (e) => {
    try {
      const { name, value } = e.target;

      console.log(value); // Log the value being set
      setInputValues((prev) => ({ ...prev, [name]: value }));
      const user_id = localStorage.getItem("user_id");

      let da = JSON.stringify({
        cell_id: name,
        cell_value: value,
        user_id: user_id,
      });

      console.log(da); // Log the name being set

      if (value != "") {
        const res = await fetch("http://127.0.0.1:8000/api/save_ratio/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            cell_id: name,
            cell_value: value,
            user_id: user_id,
          }),
        });
        console.log("Response:", res); // Log the response data
      }
    } catch (error) {
      console.error("Error:", error); // Log any errors that occur during the request
    }
  };

  //------------------------------------------------ SAVE FOR 6 TO DATABASE ---------------------------------------------

  const updateB4_6 = () => {
    setSumB4_6(calculateTotal([0]) + parseFloat(tot2020.B1_10 || 0));
    setSumC4_6(calculateTotal([0]) + parseFloat(tot2020.C1_10 || 0));
    setSumD4_6(calculateTotal([0]) + parseFloat(tot2020.D1_10 || 0));
    setSumE4_6(calculateTotal([0]) + parseFloat(tot2020.E1_10 || 0));
    setSumF4_6(calculateTotal([0]) + parseFloat(tot2020.F1_10 || 0));
    setSumG4_6(calculateTotal([0]) + parseFloat(tot2020.G1_10 || 0));
    setSumH4_6(calculateTotal([0]) + parseFloat(tot2020.H1_10 || 0));
    setSumI4_6(calculateTotal([0]) + parseFloat(tot2020.I1_10 || 0));
  };

  useEffect(() => {
    updateB4_6();
  }, [inputValues, tot2020]);

  useEffect(() => {
    const uploadB4_6 = async () => {
      await uploadData("B4_6", sumB4_6.toString());
      await uploadData("C4_6", sumC4_6.toString());
      await uploadData("D4_6", sumD4_6.toString());
      await uploadData("E4_6", sumE4_6.toString());
      await uploadData("F4_6", sumF4_6.toString());
      await uploadData("G4_6", sumG4_6.toString());
      await uploadData("H4_6", sumH4_6.toString());
      await uploadData("I4_6", sumI4_6.toString());
    };
    if (
      sumB4_6 ||
      sumC4_6 ||
      sumD4_6 ||
      sumE4_6 ||
      sumF4_6 ||
      sumG4_6 ||
      sumH4_6 ||
      sumI4_6
    ) {
      uploadB4_6();
    }
  }, [sumB4_6, sumC4_6, sumD4_6, sumE4_6, sumF4_6, sumG4_6, sumH4_6, sumI4_6]);

  //------------------------------------------------------ CODE FOR 7  ---------------------------------------------

  const updateTotals = () => {
    setSumB4_7(
      calculateTotal(["B1_15", "B1_16"]) - parseFloat(inputValues["B1_25"] || 0)
    );
    setSumC4_7(
      calculateTotal(["B1_25", "C1_16"]) - parseFloat(inputValues["C1_25"] || 0)
    );
    setSumD4_7(
      calculateTotal(["C1_25", "D1_16"]) - parseFloat(inputValues["D1_25"] || 0)
    );
    setSumE4_7(
      calculateTotal(["D1_25", "E1_16"]) - parseFloat(inputValues["E1_25"] || 0)
    );
    setSumF4_7(
      calculateTotal(["E1_25", "F1_16"]) - parseFloat(inputValues["F1_25"] || 0)
    );
    setSumG4_7(
      calculateTotal(["F1_25", "G1_16"]) - parseFloat(inputValues["G1_25"] || 0)
    );
    setSumH4_7(
      calculateTotal(["G1_25", "H1_16"]) - parseFloat(inputValues["H1_25"] || 0)
    );
    setSumI4_7(
      calculateTotal(["H1_25", "I1_16"]) - parseFloat(inputValues["I1_25"] || 0)
    );
  };

  useEffect(() => {
    updateTotals();
  }, [inputValues]);

  useEffect(() => {
    const uploadTotals = async () => {
      await uploadData("B4_7", sumB4_7.toString());
      await uploadData("C4_7", sumC4_7.toString());
      await uploadData("D4_7", sumD4_7.toString());
      await uploadData("E4_7", sumE4_7.toString());
      await uploadData("F4_7", sumF4_7.toString());
      await uploadData("G4_7", sumG4_7.toString());
      await uploadData("H4_7", sumH4_7.toString());
      await uploadData("I4_7", sumI4_7.toString());
    };

    if (
      sumB4_7 ||
      sumC4_7 ||
      sumD4_7 ||
      sumE4_7 ||
      sumF4_7 ||
      sumG4_7 ||
      sumH4_7 ||
      sumI4_7
    ) {
      uploadTotals();
    }
  }, [sumB4_7, sumC4_7, sumD4_7, sumE4_7, sumF4_7, sumG4_7, sumH4_7, sumI4_7]);

  //------------------------------------------------ SAVE FOR 8 TO DATABASE ---------------------------------------------

  const updateB4_8 = () => {
    setSumB4_8(parseFloat(Cost27.B1_27 || 0));
    setSumC4_8(parseFloat(Cost27.C1_27 || 0));
    setSumD4_8(parseFloat(Cost27.D1_27 || 0));
    setSumE4_8(parseFloat(Cost27.E1_27 || 0));
    setSumF4_8(parseFloat(Cost27.F1_27 || 0));
    setSumG4_8(parseFloat(Cost27.G1_27 || 0));
    setSumH4_8(parseFloat(Cost27.H1_27 || 0));
    setSumI4_8(parseFloat(Cost27.I1_27 || 0));
  };

  useEffect(() => {
    updateB4_8();
  }, [inputValues, Cost27]);

  useEffect(() => {
    const uploadB4_8 = async () => {
      await uploadData("B4_8", sumB4_8.toString());
      await uploadData("C4_8", sumC4_8.toString());
      await uploadData("D4_8", sumD4_8.toString());
      await uploadData("E4_8", sumE4_8.toString());
      await uploadData("F4_8", sumF4_8.toString());
      await uploadData("G4_8", sumG4_8.toString());
      await uploadData("H4_8", sumH4_8.toString());
      await uploadData("I4_8", sumI4_8.toString());
    };
    if (
      sumB4_8 ||
      sumC4_8 ||
      sumD4_8 ||
      sumE4_8 ||
      sumF4_8 ||
      sumG4_8 ||
      sumH4_8 ||
      sumI4_8
    ) {
      uploadB4_8();
    }
  }, [sumB4_8, sumC4_8, sumD4_8, sumE4_8, sumF4_8, sumG4_8, sumH4_8, sumI4_8]);

  //------------------------------------------------ SAVE FOR 9 TO DATABASE ---------------------------------------------

  const updateB4_9 = () => {
    setSumB4_9(parseFloat(Cost26.B1_26 || 0));
    setSumC4_9(parseFloat(Cost26.C1_26 || 0));
    setSumD4_9(parseFloat(Cost26.D1_26 || 0));
    setSumE4_9(parseFloat(Cost26.E1_26 || 0));
    setSumF4_9(parseFloat(Cost26.F1_26 || 0));
    setSumG4_9(parseFloat(Cost26.G1_26 || 0));
    setSumH4_9(parseFloat(Cost26.H1_26 || 0));
    setSumI4_9(parseFloat(Cost26.I1_26 || 0));
  };

  useEffect(() => {
    updateB4_9();
  }, [inputValues, Cost26]);

  useEffect(() => {
    const uploadB4_9 = async () => {
      await uploadData("B4_9", sumB4_9.toString());
      await uploadData("C4_9", sumC4_9.toString());
      await uploadData("D4_9", sumD4_9.toString());
      await uploadData("E4_9", sumE4_9.toString());
      await uploadData("F4_9", sumF4_9.toString());
      await uploadData("G4_9", sumG4_9.toString());
      await uploadData("H4_9", sumH4_9.toString());
      await uploadData("I4_9", sumI4_9.toString());
    };
    if (
      sumB4_9 ||
      sumC4_9 ||
      sumD4_9 ||
      sumE4_9 ||
      sumF4_9 ||
      sumG4_9 ||
      sumH4_9 ||
      sumI4_9
    ) {
      uploadB4_9();
    }
  }, [sumB4_9, sumC4_9, sumD4_9, sumE4_9, sumF4_9, sumG4_9, sumH4_9, sumI4_9]);

  //------------------------------------------------------ CODE FOR 10  ---------------------------------------------

  const updateB4_10 = () => {
    setSumB4_10(
      parseFloat(tot2020.B1_10 || 0) +
        parseFloat(inputValues["B1_23"] || 0) +
        parseFloat(inputValues["B1_24"] || 0) -
        parseFloat(inputValues["B1_13"] || 0) -
        parseFloat(inputValues["B1_14"] || 0)
    );
    setSumC4_10(
      parseFloat(tot2020.C1_10 || 0) +
        parseFloat(inputValues["C1_23"] || 0) +
        parseFloat(inputValues["C1_24"] || 0) -
        parseFloat(inputValues["B1_23"] || 0) -
        parseFloat(inputValues["B1_24"] || 0)
    );
    setSumD4_10(
      parseFloat(tot2020.D1_10 || 0) +
        parseFloat(inputValues["D1_23"] || 0) +
        parseFloat(inputValues["D1_24"] || 0) -
        parseFloat(inputValues["C1_23"] || 0) -
        parseFloat(inputValues["C1_24"] || 0)
    );
    setSumE4_10(
      parseFloat(tot2020.E1_10 || 0) +
        parseFloat(inputValues["E1_23"] || 0) +
        parseFloat(inputValues["E1_24"] || 0) -
        parseFloat(inputValues["D1_23"] || 0) -
        parseFloat(inputValues["D1_24"] || 0)
    );
    setSumF4_10(
      parseFloat(tot2020.F1_10 || 0) +
        parseFloat(inputValues["F1_23"] || 0) +
        parseFloat(inputValues["F1_24"] || 0) -
        parseFloat(inputValues["E1_23"] || 0) -
        parseFloat(inputValues["E1_24"] || 0)
    );
    setSumG4_10(
      parseFloat(tot2020.G1_10 || 0) +
        parseFloat(inputValues["G1_23"] || 0) +
        parseFloat(inputValues["G1_24"] || 0) -
        parseFloat(inputValues["F1_23"] || 0) -
        parseFloat(inputValues["F1_24"] || 0)
    );
    setSumH4_10(
      parseFloat(tot2020.H1_10 || 0) +
        parseFloat(inputValues["H1_23"] || 0) +
        parseFloat(inputValues["H1_24"] || 0) -
        parseFloat(inputValues["G1_23"] || 0) -
        parseFloat(inputValues["G1_24"] || 0)
    );
    setSumI4_10(
      parseFloat(tot2020.I1_10 || 0) +
        parseFloat(inputValues["I1_23"] || 0) +
        parseFloat(inputValues["I1_24"] || 0) -
        parseFloat(inputValues["H1_23"] || 0) -
        parseFloat(inputValues["H1_24"] || 0)
    );
  };

  useEffect(() => {
    updateB4_10();
  }, [inputValues, tot2020]);

  useEffect(() => {
    const uploadB4_10 = async () => {
      await uploadData("B4_10", sumB4_10.toString());
      await uploadData("C4_10", sumC4_10.toString());
      await uploadData("D4_10", sumD4_10.toString());
      await uploadData("E4_10", sumE4_10.toString());
      await uploadData("F4_10", sumF4_10.toString());
      await uploadData("G4_10", sumG4_10.toString());
      await uploadData("H4_10", sumH4_10.toString());
      await uploadData("I4_10", sumI4_10.toString());
    };

    if (
      sumB4_10 ||
      sumC4_10 ||
      sumD4_10 ||
      sumE4_10 ||
      sumF4_10 ||
      sumG4_10 ||
      sumH4_10 ||
      sumI4_10
    ) {
      uploadB4_10();
    }
  }, [
    sumB4_10,
    sumC4_10,
    sumD4_10,
    sumE4_10,
    sumF4_10,
    sumG4_10,
    sumH4_10,
    sumI4_10,
  ]);

  //------------------------------------------------------ CODE FOR 11  ---------------------------------------------

  const updateB4_11 = () => {
    const calculateValue11 = (sum8, sum39, sum10, inputValue1, inputValue2) => {
      const numerator = parseFloat(sum8 || 0) - parseFloat(sum39 || 0);
      const denominator =
        parseFloat(sum10 || 0) +
        parseFloat(inputValue1 || 0) -
        parseFloat(inputValue2 || 0);
      return denominator !== 0 ? (numerator / denominator) * 100 : 0;
    };

    setSumB4_11(
      calculateValue11(
        sumB4_8,
        sumB4_39,
        sumB4_10,
        inputValues["B1_23"],
        inputValues["B1_13"]
      )
    );
    setSumC4_11(
      calculateValue11(
        sumC4_8,
        sumC4_39,
        sumC4_10,
        inputValues["C1_23"],
        inputValues["B1_23"]
      )
    );
    setSumD4_11(
      calculateValue11(
        sumD4_8,
        sumD4_39,
        sumD4_10,
        inputValues["D1_23"],
        inputValues["C1_23"]
      )
    );
    setSumE4_11(
      calculateValue11(
        sumE4_8,
        sumE4_39,
        sumE4_10,
        inputValues["E1_23"],
        inputValues["D1_23"]
      )
    );
    setSumF4_11(
      calculateValue11(
        sumF4_8,
        sumF4_39,
        sumF4_10,
        inputValues["F1_23"],
        inputValues["E1_23"]
      )
    );
    setSumG4_11(
      calculateValue11(
        sumG4_8,
        sumG4_39,
        sumG4_10,
        inputValues["G1_23"],
        inputValues["F1_23"]
      )
    );
    setSumH4_11(
      calculateValue11(
        sumH4_8,
        sumH4_39,
        sumH4_10,
        inputValues["H1_23"],
        inputValues["G1_23"]
      )
    );
    setSumI4_11(
      calculateValue11(
        sumI4_8,
        sumI4_39,
        sumI4_10,
        inputValues["I1_23"],
        inputValues["H1_23"]
      )
    );
  };

  useEffect(() => {
    updateB4_11();
  }, [
    inputValues,
    sumB4_10,
    sumC4_10,
    sumD4_10,
    sumE4_10,
    sumF4_10,
    sumG4_10,
    sumH4_10,
    sumI4_10,
    sumB4_9,
    sumC4_9,
    sumD4_9,
    sumE4_9,
    sumF4_9,
    sumG4_9,
    sumH4_9,
    sumI4_9,
    sumB4_8,
    sumC4_8,
    sumD4_8,
    sumE4_8,
    sumF4_8,
    sumG4_8,
    sumH4_8,
    sumI4_8,
  ]);

  useEffect(() => {
    const uploadB4_11 = async () => {
      const dataToUpload = [
        { id: "B4_11", value: sumB4_11 },
        { id: "C4_11", value: sumC4_11 },
        { id: "D4_11", value: sumD4_11 },
        { id: "E4_11", value: sumE4_11 },
        { id: "F4_11", value: sumF4_11 },
        { id: "G4_11", value: sumG4_11 },
        { id: "H4_11", value: sumH4_11 },
        { id: "I4_11", value: sumI4_11 },
      ];

      for (const { id, value } of dataToUpload) {
        await uploadData(id, value.toString());
      }
    };

    if (
      sumB4_11 !== 0 ||
      sumC4_11 !== 0 ||
      sumD4_11 !== 0 ||
      sumE4_11 !== 0 ||
      sumF4_11 !== 0 ||
      sumG4_11 !== 0 ||
      sumH4_11 !== 0 ||
      sumI4_11 !== 0
    ) {
      uploadB4_11();
    }
  }, [
    sumB4_11,
    sumC4_11,
    sumD4_11,
    sumE4_11,
    sumF4_11,
    sumG4_11,
    sumH4_11,
    sumI4_11,
  ]);

  //  ------------------------------------------------------ CODE FOR 12  ---------------------------------------------
  const updateB4_12 = () => {
    const calculateValue12 = (sum9, sum39, sum6) => {
      const numerator = parseFloat(sum9 || 0) - parseFloat(sum39 || 0);
      const denominator = parseFloat(sum6 || 0);
      return denominator !== 0 ? (numerator / denominator) * 100 : 0;
    };

    setSumB4_12(calculateValue12(sumB4_9, sumB4_39, sumB4_6));
    setSumC4_12(calculateValue12(sumC4_9, sumC4_39, sumC4_6));
    setSumD4_12(calculateValue12(sumD4_9, sumD4_39, sumD4_6));
    setSumE4_12(calculateValue12(sumE4_9, sumE4_39, sumE4_6));
    setSumF4_12(calculateValue12(sumF4_9, sumF4_39, sumF4_6));
    setSumG4_12(calculateValue12(sumG4_9, sumG4_39, sumG4_6));
    setSumH4_12(calculateValue12(sumH4_9, sumH4_39, sumH4_6));
    setSumI4_12(calculateValue12(sumI4_9, sumI4_39, sumI4_6));
  };

  useEffect(() => {
    updateB4_12();
  }, [
    inputValues,
    sumB4_6,
    sumC4_6,
    sumD4_6,
    sumE4_6,
    sumF4_6,
    sumG4_6,
    sumH4_6,
    sumI4_6,
    sumB4_9,
    sumC4_9,
    sumD4_9,
    sumE4_9,
    sumF4_9,
    sumG4_9,
    sumH4_9,
    sumI4_9,
    sumB4_39,
    sumC4_39,
    sumD4_39,
    sumE4_39,
    sumF4_39,
    sumG4_39,
    sumH4_39,
    sumI4_39,
  ]);

  useEffect(() => {
    const uploadB4_12 = async () => {
      const dataToUpload = [
        { id: "B4_12", value: sumB4_12 },
        { id: "C4_12", value: sumC4_12 },
        { id: "D4_12", value: sumD4_12 },
        { id: "E4_12", value: sumE4_12 },
        { id: "F4_12", value: sumF4_12 },
        { id: "G4_12", value: sumG4_12 },
        { id: "H4_12", value: sumH4_12 },
        { id: "I4_12", value: sumI4_12 },
      ];

      for (const { id, value } of dataToUpload) {
        await uploadData(id, value.toString());
      }
    };

    if (
      sumB4_12 !== 0 ||
      sumC4_12 !== 0 ||
      sumD4_12 !== 0 ||
      sumE4_12 !== 0 ||
      sumF4_12 !== 0 ||
      sumG4_12 !== 0 ||
      sumH4_12 !== 0 ||
      sumI4_12 !== 0
    ) {
      uploadB4_12();
    }
  }, [
    sumB4_12,
    sumC4_12,
    sumD4_12,
    sumE4_12,
    sumF4_12,
    sumG4_12,
    sumH4_12,
    sumI4_12,
  ]);

  //  ------------------------------------------------------ CODE FOR 13  ---------------------------------------------

  const updateB4_13 = () => {
    const calculateValue13 = (sum7, sum10) => {
      const numerator = parseFloat(sum7 || 0);
      const denominator = parseFloat(sum10 || 0);
      return denominator !== 0 ? (numerator / denominator) * 100 : 0;
    };

    setSumB4_13(calculateValue13(sumB4_7, sumB4_10));
    setSumC4_13(calculateValue13(sumC4_7, sumC4_10));
    setSumD4_13(calculateValue13(sumD4_7, sumD4_10));
    setSumE4_13(calculateValue13(sumE4_7, sumE4_10));
    setSumF4_13(calculateValue13(sumF4_7, sumF4_10));
    setSumG4_13(calculateValue13(sumG4_7, sumG4_10));
    setSumH4_13(calculateValue13(sumH4_7, sumH4_10));
    setSumI4_13(calculateValue13(sumI4_7, sumI4_10));
  };

  useEffect(() => {
    updateB4_13();
  }, [
    inputValues,
    sumB4_7,
    sumC4_7,
    sumD4_7,
    sumE4_7,
    sumF4_7,
    sumG4_7,
    sumH4_7,
    sumI4_7,
    sumB4_10,
    sumC4_10,
    sumD4_10,
    sumE4_10,
    sumF4_10,
    sumG4_10,
    sumH4_10,
    sumI4_10,
  ]);

  useEffect(() => {
    const uploadB4_13 = async () => {
      const dataToUpload = [
        { id: "B4_13", value: sumB4_13 },
        { id: "C4_13", value: sumC4_13 },
        { id: "D4_13", value: sumD4_13 },
        { id: "E4_13", value: sumE4_13 },
        { id: "F4_13", value: sumF4_13 },
        { id: "G4_13", value: sumG4_13 },
        { id: "H4_13", value: sumH4_13 },
        { id: "I4_13", value: sumI4_13 },
      ];

      for (const { id, value } of dataToUpload) {
        await uploadData(id, value.toString());
      }
    };

    if (
      sumB4_13 !== 0 ||
      sumC4_13 !== 0 ||
      sumD4_13 !== 0 ||
      sumE4_13 !== 0 ||
      sumF4_13 !== 0 ||
      sumG4_13 !== 0 ||
      sumH4_13 !== 0 ||
      sumI4_13 !== 0
    ) {
      uploadB4_13();
    }
  }, [
    sumB4_13,
    sumC4_13,
    sumD4_13,
    sumE4_13,
    sumF4_13,
    sumG4_13,
    sumH4_13,
    sumI4_13,
  ]);

  //------------------------------------------------------ CODE FOR 14   ---------------------------------------------

  const calculatePercentage = (numerator, denominator) => {
    const num = parseFloat(numerator || 0);
    const denom = parseFloat(denominator || 0);
    return denom !== 0 ? (num / denom) * 100 : 0;
  };

  const updateB4_14 = () => {
    setSumB4_14(calculatePercentage(Cost37.B1_37, tot2020.B1_10));
    setSumC4_14(calculatePercentage(Cost37.C1_37, tot2020.C1_10));
    setSumD4_14(calculatePercentage(Cost37.D1_37, tot2020.D1_10));
    setSumE4_14(calculatePercentage(Cost37.E1_37, tot2020.E1_10));
    setSumF4_14(calculatePercentage(Cost37.F1_37, tot2020.F1_10));
    setSumG4_14(calculatePercentage(Cost37.G1_37, tot2020.G1_10));
    setSumH4_14(calculatePercentage(Cost37.H1_37, tot2020.H1_10));
    setSumI4_14(calculatePercentage(Cost37.I1_37, tot2020.I1_10));
  };

  useEffect(() => {
    updateB4_14();
  }, [inputValues, tot2020, Cost37]);

  //------------------------------------------------------ CODE FOR 15   ---------------------------------------------

  const updateB4_15 = () => {
    const calculatePercentageInverse = (numerator, denominator) => {
      const percentage = calculatePercentage(numerator, denominator);
      return 100 - percentage;
    };

    setSumB4_15(calculatePercentageInverse(Cost31.B1_31, Cost26.B1_26));
    setSumC4_15(calculatePercentageInverse(Cost31.C1_31, Cost26.C1_26));
    setSumD4_15(calculatePercentageInverse(Cost31.D1_31, Cost26.D1_26));
    setSumE4_15(calculatePercentageInverse(Cost31.E1_31, Cost26.E1_26));
    setSumF4_15(calculatePercentageInverse(Cost31.F1_31, Cost26.F1_26));
    setSumG4_15(calculatePercentageInverse(Cost31.G1_31, Cost26.G1_26));
    setSumH4_15(calculatePercentageInverse(Cost31.H1_31, Cost26.H1_26));
    setSumI4_15(calculatePercentageInverse(Cost31.I1_31, Cost26.I1_26));
  };

  useEffect(() => {
    updateB4_15();
  }, [inputValues, Cost31, Cost26]);

  //------------------------------------------------------ CODE FOR 16   ---------------------------------------------

  const updateB4_16 = () => {
    setSumB4_16(calculatePercentage(inputValues["B1_20"], Cost26.B1_26));
    setSumC4_16(calculatePercentage(inputValues["C1_20"], Cost26.C1_26));
    setSumD4_16(calculatePercentage(inputValues["D1_20"], Cost26.D1_26));
    setSumE4_16(calculatePercentage(inputValues["E1_20"], Cost26.E1_26));
    setSumF4_16(calculatePercentage(inputValues["F1_20"], Cost26.F1_26));
    setSumG4_16(calculatePercentage(inputValues["G1_20"], Cost26.G1_26));
    setSumH4_16(calculatePercentage(inputValues["H1_20"], Cost26.H1_26));
    setSumI4_16(calculatePercentage(inputValues["I1_20"], Cost26.I1_26));
  };
  useEffect(() => {
    updateB4_16();
  }, [inputValues, Cost26]);

  //------------------------------------------------------ CODE FOR 17   ---------------------------------------------

  const updateB4_17 = () => {
    setSumB4_17(calculatePercentage(inputValues["B1_29"], Cost26.B1_26));
    setSumC4_17(calculatePercentage(inputValues["C1_29"], Cost26.C1_26));
    setSumD4_17(calculatePercentage(inputValues["D1_29"], Cost26.D1_26));
    setSumE4_17(calculatePercentage(inputValues["E1_29"], Cost26.E1_26));
    setSumF4_17(calculatePercentage(inputValues["F1_29"], Cost26.F1_26));
    setSumG4_17(calculatePercentage(inputValues["G1_29"], Cost26.G1_26));
    setSumH4_17(calculatePercentage(inputValues["H1_29"], Cost26.H1_26));
    setSumI4_17(calculatePercentage(inputValues["I1_29"], Cost26.I1_26));
  };
  useEffect(() => {
    updateB4_17();
  }, [inputValues, Cost26]);

  //------------------------------------------------------ CODE FOR 18  ---------------------------------------------

  const updateB4_18 = () => {
    setSumB4_18(calculatePercentage(inputValues["B1_30"], Cost26.B1_26));
    setSumC4_18(calculatePercentage(inputValues["C1_30"], Cost26.C1_26));
    setSumD4_18(calculatePercentage(inputValues["D1_30"], Cost26.D1_26));
    setSumE4_18(calculatePercentage(inputValues["E1_30"], Cost26.E1_26));
    setSumF4_18(calculatePercentage(inputValues["F1_30"], Cost26.F1_26));
    setSumG4_18(calculatePercentage(inputValues["G1_30"], Cost26.G1_26));
    setSumH4_18(calculatePercentage(inputValues["H1_30"], Cost26.H1_26));
    setSumI4_18(calculatePercentage(inputValues["I1_30"], Cost26.I1_26));
  };

  useEffect(() => {
    updateB4_18();
  }, [inputValues, Cost26]);

  //------------------------------------------------------ CODE FOR 14-18  ---------------------------------------------

  const uploadDataSet = async (dataSet) => {
    for (const { id, value } of dataSet) {
      await uploadData(id, value.toString());
    }
  };

  useEffect(() => {
    const uploadB4_14 = () =>
      uploadDataSet([
        { id: "B4_14", value: sumB4_14 },
        { id: "C4_14", value: sumC4_14 },
        { id: "D4_14", value: sumD4_14 },
        { id: "E4_14", value: sumE4_14 },
        { id: "F4_14", value: sumF4_14 },
        { id: "G4_14", value: sumG4_14 },
        { id: "H4_14", value: sumH4_14 },
        { id: "I4_14", value: sumI4_14 },
      ]);

    if (
      sumB4_14 ||
      sumC4_14 ||
      sumD4_14 ||
      sumE4_14 ||
      sumF4_14 ||
      sumG4_14 ||
      sumH4_14 ||
      sumI4_14
    ) {
      uploadB4_14();
    }
  }, [
    sumB4_14,
    sumC4_14,
    sumD4_14,
    sumE4_14,
    sumF4_14,
    sumG4_14,
    sumH4_14,
    sumI4_14,
  ]);

  useEffect(() => {
    const uploadB4_15 = () =>
      uploadDataSet([
        { id: "B4_15", value: sumB4_15 },
        { id: "C4_15", value: sumC4_15 },
        { id: "D4_15", value: sumD4_15 },
        { id: "E4_15", value: sumE4_15 },
        { id: "F4_15", value: sumF4_15 },
        { id: "G4_15", value: sumG4_15 },
        { id: "H4_15", value: sumH4_15 },
        { id: "I4_15", value: sumI4_15 },
      ]);

    if (
      sumB4_15 ||
      sumC4_15 ||
      sumD4_15 ||
      sumE4_15 ||
      sumF4_15 ||
      sumG4_15 ||
      sumH4_15 ||
      sumI4_15
    ) {
      uploadB4_15();
    }
  }, [
    sumB4_15,
    sumC4_15,
    sumD4_15,
    sumE4_15,
    sumF4_15,
    sumG4_15,
    sumH4_15,
    sumI4_15,
  ]);

  useEffect(() => {
    const uploadB4_16 = () =>
      uploadDataSet([
        { id: "B4_16", value: sumB4_16 },
        { id: "C4_16", value: sumC4_16 },
        { id: "D4_16", value: sumD4_16 },
        { id: "E4_16", value: sumE4_16 },
        { id: "F4_16", value: sumF4_16 },
        { id: "G4_16", value: sumG4_16 },
        { id: "H4_16", value: sumH4_16 },
        { id: "I4_16", value: sumI4_16 },
      ]);

    if (
      sumB4_16 ||
      sumC4_16 ||
      sumD4_16 ||
      sumE4_16 ||
      sumF4_16 ||
      sumG4_16 ||
      sumH4_16 ||
      sumI4_16
    ) {
      uploadB4_16();
    }
  }, [
    sumB4_16,
    sumC4_16,
    sumD4_16,
    sumE4_16,
    sumF4_16,
    sumG4_16,
    sumH4_16,
    sumI4_16,
  ]);

  useEffect(() => {
    const uploadB4_17 = () =>
      uploadDataSet([
        { id: "B4_17", value: sumB4_17 },
        { id: "C4_17", value: sumC4_17 },
        { id: "D4_17", value: sumD4_17 },
        { id: "E4_17", value: sumE4_17 },
        { id: "F4_17", value: sumF4_17 },
        { id: "G4_17", value: sumG4_17 },
        { id: "H4_17", value: sumH4_17 },
        { id: "I4_17", value: sumI4_17 },
      ]);

    if (
      sumB4_17 ||
      sumC4_17 ||
      sumD4_17 ||
      sumE4_17 ||
      sumF4_17 ||
      sumG4_17 ||
      sumH4_17 ||
      sumI4_17
    ) {
      uploadB4_17();
    }
  }, [
    sumB4_17,
    sumC4_17,
    sumD4_17,
    sumE4_17,
    sumF4_17,
    sumG4_17,
    sumH4_17,
    sumI4_17,
  ]);

  useEffect(() => {
    const uploadB4_18 = () =>
      uploadDataSet([
        { id: "B4_18", value: sumB4_18 },
        { id: "C4_18", value: sumC4_18 },
        { id: "D4_18", value: sumD4_18 },
        { id: "E4_18", value: sumE4_18 },
        { id: "F4_18", value: sumF4_18 },
        { id: "G4_18", value: sumG4_18 },
        { id: "H4_18", value: sumH4_18 },
        { id: "I4_18", value: sumI4_18 },
      ]);

    if (
      sumB4_18 ||
      sumC4_18 ||
      sumD4_18 ||
      sumE4_18 ||
      sumF4_18 ||
      sumG4_18 ||
      sumH4_18 ||
      sumI4_18
    ) {
      uploadB4_18();
    }
  }, [
    sumB4_18,
    sumC4_18,
    sumD4_18,
    sumE4_18,
    sumF4_18,
    sumG4_18,
    sumH4_18,
    sumI4_18,
  ]);

  //------------------------------------------------- TOTAL OF 21 -------------------------------------------------------

  const uploadSumB4_21 = () => {
    setSumB4_21(+parseFloat(sumB50 || 0) - parseFloat(sumB30 || 0));
    setSumC4_21(+parseFloat(sumC50 || 0) - parseFloat(sumC30 || 0));
    setSumD4_21(+parseFloat(sumD50 || 0) - parseFloat(sumD30 || 0));
    setSumE4_21(+parseFloat(sumE50 || 0) - parseFloat(sumE30 || 0));
    setSumF4_21(+parseFloat(sumF50 || 0) - parseFloat(sumF30 || 0));
    setSumG4_21(+parseFloat(sumG50 || 0) - parseFloat(sumG30 || 0));
    setSumH4_21(+parseFloat(sumH50 || 0) - parseFloat(sumH30 || 0));
    setSumI4_21(+parseFloat(sumI50 || 0) - parseFloat(sumI30 || 0));
  };

  useEffect(() => {
    uploadSumB4_21();
  }, [
    inputValues,
    sumB50,
    sumC50,
    sumD50,
    sumE50,
    sumF50,
    sumG50,
    sumH50,
    sumI50,
    sumB30,
    sumC30,
    sumD30,
    sumE30,
    sumF30,
    sumG30,
    sumH30,
    sumI30,
  ]);

  useEffect(() => {
    const uploadSumB4_21 = async () => {
      await uploadData("B2_21", sumB4_21.toString());
      await uploadData("C2_21", sumC4_21.toString());
      await uploadData("D2_21", sumD4_21.toString());
      await uploadData("E2_21", sumE4_21.toString());
      await uploadData("F2_21", sumF4_21.toString());
      await uploadData("G2_21", sumG4_21.toString());
      await uploadData("H2_21", sumH4_21.toString());
      await uploadData("I2_21", sumI4_21.toString());
    };
    if (
      sumB4_21 ||
      sumC4_21 ||
      sumD4_21 ||
      sumE4_21 ||
      sumF4_21 ||
      sumG4_21 ||
      sumH4_21 ||
      sumI4_21
    ) {
      uploadSumB4_21();
    }
  }, [
    sumB4_21,
    sumC4_21,
    sumD4_21,
    sumE4_21,
    sumF4_21,
    sumG4_21,
    sumH4_21,
    sumI4_21,
  ]);

  //------------------------------------------------- TOTAL OF 22 -------------------------------------------------------

  const uploadSumB4_22 = () => {
    setSumC4_22(+parseFloat(sumC4_21 || 0) - parseFloat(sumB4_21 || 0));
    setSumD4_22(+parseFloat(sumD4_21 || 0) - parseFloat(sumC4_21 || 0));
    setSumE4_22(+parseFloat(sumE4_21 || 0) - parseFloat(sumD4_21 || 0));
    setSumF4_22(+parseFloat(sumF4_21 || 0) - parseFloat(sumE4_21 || 0));
    setSumG4_22(+parseFloat(sumG4_21 || 0) - parseFloat(sumF4_21 || 0));
    setSumH4_22(+parseFloat(sumH4_21 || 0) - parseFloat(sumG4_21 || 0));
    setSumI4_22(+parseFloat(sumI4_21 || 0) - parseFloat(sumH4_21 || 0));
  };

  useEffect(() => {
    uploadSumB4_22();
  }, [
    inputValues,
    sumB4_21,
    sumC4_21,
    sumD4_21,
    sumE4_21,
    sumF4_21,
    sumG4_21,
    sumH4_21,
    sumI4_21,
  ]);

  useEffect(() => {
    const uploadSumB4_22 = async () => {
      await uploadData("C4_22", sumC4_22.toString());
      await uploadData("D4_22", sumD4_22.toString());
      await uploadData("E4_22", sumE4_22.toString());
      await uploadData("F4_22", sumF4_22.toString());
      await uploadData("G4_22", sumG4_22.toString());
      await uploadData("H4_22", sumH4_22.toString());
      await uploadData("I4_22", sumI4_22.toString());
    };
    if (
      sumC4_22 ||
      sumD4_22 ||
      sumE4_22 ||
      sumF4_22 ||
      sumG4_22 ||
      sumH4_22 ||
      sumI4_22
    ) {
      uploadSumB4_22();
    }
  }, [sumC4_22, sumD4_22, sumE4_22, sumF4_22, sumG4_22, sumH4_22, sumI4_22]);

  //------------------------------------------------- TOTAL OF 23 -------------------------------------------------------

  const uploadSumB4_23 = () => {
    setSumB4_23(
      parseFloat(sumB4_21 || 0) - parseFloat(inputValues["B2_23"] || 0)
    );
    setSumC4_23(
      parseFloat(sumC4_21 || 0) - parseFloat(inputValues["C2_23"] || 0)
    );
    setSumD4_23(
      parseFloat(sumD4_21 || 0) - parseFloat(inputValues["D2_23"] || 0)
    );
    setSumE4_23(
      parseFloat(sumE4_21 || 0) - parseFloat(inputValues["E2_23"] || 0)
    );
    setSumF4_23(
      parseFloat(sumF4_21 || 0) - parseFloat(inputValues["F2_23"] || 0)
    );
    setSumG4_23(
      parseFloat(sumG4_21 || 0) - parseFloat(inputValues["G2_23"] || 0)
    );
    setSumH4_23(
      parseFloat(sumH4_21 || 0) - parseFloat(inputValues["H2_23"] || 0)
    );
    setSumI4_23(
      parseFloat(sumI4_21 || 0) - parseFloat(inputValues["I2_23"] || 0)
    );
  };

  useEffect(() => {
    uploadSumB4_23();
  }, [
    inputValues,
    sumB4_21,
    sumC4_21,
    sumD4_21,
    sumE4_21,
    sumF4_21,
    sumG4_21,
    sumH4_21,
    sumI4_21,
  ]);

  useEffect(() => {
    const uploadSumB4_23 = async () => {
      await uploadData("B4_23", sumB4_23.toString());
      await uploadData("C4_23", sumC4_23.toString());
      await uploadData("D4_23", sumD4_23.toString());
      await uploadData("E4_23", sumE4_23.toString());
      await uploadData("F4_23", sumF4_23.toString());
      await uploadData("G4_23", sumG4_23.toString());
      await uploadData("H4_23", sumH4_23.toString());
      await uploadData("I4_23", sumI4_23.toString());
    };
    if (
      sumB4_23 ||
      sumC4_23 ||
      sumD4_23 ||
      sumE4_23 ||
      sumF4_23 ||
      sumG4_23 ||
      sumH4_23 ||
      sumI4_23
    ) {
      uploadSumB4_23();
    }
  }, [
    sumB4_23,
    sumC4_23,
    sumD4_23,
    sumE4_23,
    sumF4_23,
    sumG4_23,
    sumH4_23,
    sumI4_23,
  ]);

  //------------------------------------------------- TOTAL OF 24 -------------------------------------------------------
  const uploadSumB4_24 = () => {
    setSumB4_24(calculateTotal(["B3_33"] || 0) + parseFloat(sumB4_21 || 0));
    setSumC4_24(calculateTotal(["C3_33"] || 0) + parseFloat(sumC4_21 || 0));
    setSumD4_24(calculateTotal(["D3_33"] || 0) + parseFloat(sumD4_21 || 0));
    setSumE4_24(calculateTotal(["E3_33"] || 0) + parseFloat(sumE4_21 || 0));
    setSumF4_24(calculateTotal(["F3_33"] || 0) + parseFloat(sumF4_21 || 0));
    setSumG4_24(calculateTotal(["G3_33"] || 0) + parseFloat(sumG4_21 || 0));
    setSumH4_24(calculateTotal(["H3_33"] || 0) + parseFloat(sumH4_21 || 0));
    setSumI4_24(calculateTotal(["I3_33"] || 0) + parseFloat(sumI4_21 || 0));
  };

  useEffect(() => {
    uploadSumB4_24();
  }, [
    inputValues,
    sumB4_21,
    sumC4_21,
    sumD4_21,
    sumE4_21,
    sumF4_21,
    sumG4_21,
    sumH4_21,
    sumI4_21,
  ]);

  useEffect(() => {
    const uploadSumB4_24 = async () => {
      await uploadData("B4_24", sumB4_24.toString());
      await uploadData("C4_24", sumC4_24.toString());
      await uploadData("D4_24", sumD4_24.toString());
      await uploadData("E4_24", sumE4_24.toString());
      await uploadData("F4_24", sumF4_24.toString());
      await uploadData("G4_24", sumG4_24.toString());
      await uploadData("H4_24", sumH4_24.toString());
      await uploadData("I4_24", sumI4_24.toString());
    };
    if (
      sumB4_24 ||
      sumC4_24 ||
      sumD4_24 ||
      sumE4_24 ||
      sumF4_24 ||
      sumG4_24 ||
      sumH4_24 ||
      sumI4_24
    ) {
      uploadSumB4_24();
    }
  }, [
    sumB4_24,
    sumC4_24,
    sumD4_24,
    sumE4_24,
    sumF4_24,
    sumG4_24,
    sumH4_24,
    sumI4_24,
  ]);

  //------------------------------------------------- TOTAL OF 25 -------------------------------------------------------

  const uploadSumB4_25 = () => {
    setSumB4_25(+parseFloat(sumB2 || 0) - parseFloat(sumB38 || 0));
    setSumC4_25(+parseFloat(sumC2 || 0) - parseFloat(sumC38 || 0));
    setSumD4_25(+parseFloat(sumD2 || 0) - parseFloat(sumD38 || 0));
    setSumE4_25(+parseFloat(sumE2 || 0) - parseFloat(sumE38 || 0));
    setSumF4_25(+parseFloat(sumF2 || 0) - parseFloat(sumF38 || 0));
    setSumG4_25(+parseFloat(sumG2 || 0) - parseFloat(sumG38 || 0));
    setSumH4_25(+parseFloat(sumH2 || 0) - parseFloat(sumH38 || 0));
    setSumI4_25(+parseFloat(sumI2 || 0) - parseFloat(sumI38 || 0));
  };

  useEffect(() => {
    uploadSumB4_25();
  }, [
    inputValues,
    sumB2,
    sumC2,
    sumD2,
    sumE2,
    sumF2,
    sumG2,
    sumH2,
    sumI2,
    sumB38,
    sumC38,
    sumD38,
    sumE38,
    sumF38,
    sumG38,
    sumH38,
    sumI38,
  ]);

  useEffect(() => {
    const uploadSumB4_25 = async () => {
      await uploadData("B4_25", sumB4_25.toString());
      await uploadData("C4_25", sumC4_25.toString());
      await uploadData("D4_25", sumD4_25.toString());
      await uploadData("E4_25", sumE4_25.toString());
      await uploadData("F4_25", sumF4_25.toString());
      await uploadData("G4_25", sumG4_25.toString());
      await uploadData("H4_25", sumH4_25.toString());
      await uploadData("I4_25", sumI4_25.toString());
    };
    if (
      sumC4_25 ||
      sumD4_25 ||
      sumE4_25 ||
      sumF4_25 ||
      sumG4_25 ||
      sumH4_25 ||
      sumI4_25
    ) {
      uploadSumB4_25();
    }
  }, [
    sumB4_25,
    sumC4_25,
    sumD4_25,
    sumE4_25,
    sumF4_25,
    sumG4_25,
    sumH4_25,
    sumI4_25,
  ]);

  //------------------------------------------------- TOTAL OF 26 -------------------------------------------------------

  const uploadSumB4_26 = () => {
    setSumC4_26(+parseFloat(sumC4_25 || 0) - parseFloat(sumB4_25 || 0));
    setSumD4_26(+parseFloat(sumD4_25 || 0) - parseFloat(sumC4_25 || 0));
    setSumE4_26(+parseFloat(sumE4_25 || 0) - parseFloat(sumD4_25 || 0));
    setSumF4_26(+parseFloat(sumF4_25 || 0) - parseFloat(sumE4_25 || 0));
    setSumG4_26(+parseFloat(sumG4_25 || 0) - parseFloat(sumF4_25 || 0));
    setSumH4_26(+parseFloat(sumH4_25 || 0) - parseFloat(sumG4_25 || 0));
    setSumI4_26(+parseFloat(sumI4_25 || 0) - parseFloat(sumH4_25 || 0));
  };

  useEffect(() => {
    uploadSumB4_26();
  }, [
    inputValues,
    sumB4_25,
    sumC4_25,
    sumD4_25,
    sumE4_25,
    sumF4_25,
    sumG4_25,
    sumH4_25,
    sumI4_25,
  ]);

  useEffect(() => {
    const uploadSumB4_26 = async () => {
      await uploadData("C4_26", sumC4_26.toString());
      await uploadData("D4_26", sumD4_26.toString());
      await uploadData("E4_26", sumE4_26.toString());
      await uploadData("F4_26", sumF4_26.toString());
      await uploadData("G4_26", sumG4_26.toString());
      await uploadData("H4_26", sumH4_26.toString());
      await uploadData("I4_26", sumI4_26.toString());
    };
    if (
      sumC4_26 ||
      sumD4_26 ||
      sumE4_26 ||
      sumF4_26 ||
      sumG4_26 ||
      sumH4_26 ||
      sumI4_26
    ) {
      uploadSumB4_26();
    }
  }, [sumC4_26, sumD4_26, sumE4_26, sumF4_26, sumG4_26, sumH4_26, sumI4_26]);

  //------------------------------------------------- TOTAL OF 27 -------------------------------------------------------

  const uploadSumB4_27 = () => {
    const calculateValue27 = (numerator, denominator) => {
      return denominator !== 0 ? numerator / denominator : 0;
    };

    setSumB4_27(calculateValue27(sumB2, sumB38));
    setSumC4_27(calculateValue27(sumC2, sumC38));
    setSumD4_27(calculateValue27(sumD2, sumD38));
    setSumE4_27(calculateValue27(sumE2, sumE38));
    setSumF4_27(calculateValue27(sumF2, sumF38));
    setSumG4_27(calculateValue27(sumG2, sumG38));
    setSumH4_27(calculateValue27(sumH2, sumH38));
    setSumI4_27(calculateValue27(sumI2, sumI38));
  };

  useEffect(() => {
    uploadSumB4_27();
  }, [
    inputValues,
    sumB2,
    sumC2,
    sumD2,
    sumE2,
    sumF2,
    sumG2,
    sumH2,
    sumI2,
    sumB38,
    sumC38,
    sumD38,
    sumE38,
    sumF38,
    sumG38,
    sumH38,
    sumI38,
  ]);

  useEffect(() => {
    const uploadSumB4_27 = async () => {
      const dataToUpload = [
        { id: "B4_27", value: sumB4_27 },
        { id: "C4_27", value: sumC4_27 },
        { id: "D4_27", value: sumD4_27 },
        { id: "E4_27", value: sumE4_27 },
        { id: "F4_27", value: sumF4_27 },
        { id: "G4_27", value: sumG4_27 },
        { id: "H4_27", value: sumH4_27 },
        { id: "I4_27", value: sumI4_27 },
      ];

      for (const { id, value } of dataToUpload) {
        await uploadData(id, value.toString());
      }
    };

    if (
      sumC4_27 ||
      sumD4_27 ||
      sumE4_27 ||
      sumF4_27 ||
      sumG4_27 ||
      sumH4_27 ||
      sumI4_27
    ) {
      uploadSumB4_27();
    }
  }, [
    sumB4_27,
    sumC4_27,
    sumD4_27,
    sumE4_27,
    sumF4_27,
    sumG4_27,
    sumH4_27,
    sumI4_27,
  ]);

  //------------------------------------------------- TOTAL OF 28 -------------------------------------------------------
  const updateB4_28 = () => {
    const calculateValue28 = (sum38, sum44, tot37, sum21) => {
      const numerator =
        parseFloat(sum38 || 0) +
        parseFloat(sum44 || 0) -
        parseFloat(tot37 || 0);
      const denominator = parseFloat(sum21 || 0);
      return denominator !== 0 ? numerator / denominator : 0;
    };

    setSumB4_28(calculateValue28(sumB38, sumB44, tot37.B3_37, sumB4_21));
    setSumC4_28(calculateValue28(sumC38, sumC44, tot37.C3_37, sumC4_21));
    setSumD4_28(calculateValue28(sumD38, sumD44, tot37.D3_37, sumD4_21));
    setSumE4_28(calculateValue28(sumE38, sumE44, tot37.E3_37, sumE4_21));
    setSumF4_28(calculateValue28(sumF38, sumF44, tot37.F3_37, sumF4_21));
    setSumG4_28(calculateValue28(sumG38, sumG44, tot37.G3_37, sumG4_21));
    setSumH4_28(calculateValue28(sumH38, sumH44, tot37.H3_37, sumH4_21));
    setSumI4_28(calculateValue28(sumI38, sumI44, tot37.I3_37, sumI4_21));
  };

  useEffect(() => {
    updateB4_28();
  }, [
    inputValues,
    tot37,
    sumB38,
    sumC38,
    sumD38,
    sumE38,
    sumF38,
    sumG38,
    sumH38,
    sumI38,
    sumB44,
    sumC44,
    sumD44,
    sumE44,
    sumF44,
    sumG44,
    sumH44,
    sumI44,
    sumB4_21,
    sumC4_21,
    sumD4_21,
    sumE4_21,
    sumF4_21,
    sumG4_21,
    sumH4_21,
    sumI4_21,
  ]);

  useEffect(() => {
    const uploadB4_28 = async () => {
      const dataToUpload = [
        { id: "B4_28", value: sumB4_28 },
        { id: "C4_28", value: sumC4_28 },
        { id: "D4_28", value: sumD4_28 },
        { id: "E4_28", value: sumE4_28 },
        { id: "F4_28", value: sumF4_28 },
        { id: "G4_28", value: sumG4_28 },
        { id: "H4_28", value: sumH4_28 },
        { id: "I4_28", value: sumI4_28 },
      ];

      for (const { id, value } of dataToUpload) {
        await uploadData(id, value.toString());
      }
    };

    if (
      sumB4_28 ||
      sumC4_28 ||
      sumD4_28 ||
      sumE4_28 ||
      sumF4_28 ||
      sumG4_28 ||
      sumH4_28 ||
      sumI4_28
    ) {
      uploadB4_28();
    }
  }, [
    sumB4_28,
    sumC4_28,
    sumD4_28,
    sumE4_28,
    sumF4_28,
    sumG4_28,
    sumH4_28,
    sumI4_28,
  ]);

  //------------------------------------------------- TOTAL OF 29 -------------------------------------------------------
  const updateB4_29 = () => {
    const calculateValue29 = (sum45, input36, input33, sum21) => {
      const numerator = parseFloat(sum45 || 0) - parseFloat(input36 || 0);
      const denominator = parseFloat(input33 || 0) + parseFloat(sum21 || 0);
      return denominator !== 0 ? numerator / denominator : 0;
    };

    setSumB4_29(
      calculateValue29(
        sumB45,
        inputValues["B3_36"],
        inputValues["B3_33"],
        sumB4_21
      )
    );
    setSumC4_29(
      calculateValue29(
        sumC45,
        inputValues["C3_36"],
        inputValues["C3_33"],
        sumC4_21
      )
    );
    setSumD4_29(
      calculateValue29(
        sumD45,
        inputValues["D3_36"],
        inputValues["D3_33"],
        sumD4_21
      )
    );
    setSumE4_29(
      calculateValue29(
        sumE45,
        inputValues["E3_36"],
        inputValues["E3_33"],
        sumE4_21
      )
    );
    setSumF4_29(
      calculateValue29(
        sumF45,
        inputValues["F3_36"],
        inputValues["F3_33"],
        sumF4_21
      )
    );
    setSumG4_29(
      calculateValue29(
        sumG45,
        inputValues["G3_36"],
        inputValues["G3_33"],
        sumG4_21
      )
    );
    setSumH4_29(
      calculateValue29(
        sumH45,
        inputValues["H3_36"],
        inputValues["H3_33"],
        sumH4_21
      )
    );
    setSumI4_29(
      calculateValue29(
        sumI45,
        inputValues["I3_36"],
        inputValues["I3_33"],
        sumI4_21
      )
    );
  };

  useEffect(() => {
    updateB4_29();
  }, [
    inputValues,
    sumB45,
    sumC45,
    sumD45,
    sumE45,
    sumF45,
    sumG45,
    sumH45,
    sumI45,
    sumB4_21,
    sumC4_21,
    sumD4_21,
    sumE4_21,
    sumF4_21,
    sumG4_21,
    sumH4_21,
    sumI4_21,
  ]);

  useEffect(() => {
    const uploadB4_29 = async () => {
      const dataToUpload = [
        { id: "B4_29", value: sumB4_29 },
        { id: "C4_29", value: sumC4_29 },
        { id: "D4_29", value: sumD4_29 },
        { id: "E4_29", value: sumE4_29 },
        { id: "F4_29", value: sumF4_29 },
        { id: "G4_29", value: sumG4_29 },
        { id: "H4_29", value: sumH4_29 },
        { id: "I4_29", value: sumI4_29 },
      ];

      for (const { id, value } of dataToUpload) {
        await uploadData(id, value.toString());
      }
    };

    if (
      sumB4_29 ||
      sumC4_29 ||
      sumD4_29 ||
      sumE4_29 ||
      sumF4_29 ||
      sumG4_29 ||
      sumH4_29 ||
      sumI4_29
    ) {
      uploadB4_29();
    }
  }, [
    sumB4_29,
    sumC4_29,
    sumD4_29,
    sumE4_29,
    sumF4_29,
    sumG4_29,
    sumH4_29,
    sumI4_29,
  ]);

  //------------------------------------------------- TOTAL OF 30 -------------------------------------------------------
  const uploadSumB4_30 = () => {
    const calculateValue30 = (input40, input39, sum23) => {
      const numerator = parseFloat(input40 || 0) - parseFloat(input39 || 0);
      const denominator = +parseFloat(sum23 || 0);
      return denominator !== 0 ? numerator / denominator : 0;
    };
    setSumB4_30(
      calculateValue30(inputValues["B2_40"], inputValues["B3_39"], sumB4_23)
    );
    setSumC4_30(
      calculateValue30(inputValues["C2_40"], inputValues["C3_39"], sumC4_23)
    );
    setSumD4_30(
      calculateValue30(inputValues["D2_40"], inputValues["D3_39"], sumD4_23)
    );
    setSumE4_30(
      calculateValue30(inputValues["E2_40"], inputValues["E3_39"], sumE4_23)
    );
    setSumF4_30(
      calculateValue30(inputValues["F2_40"], inputValues["F3_39"], sumF4_23)
    );
    setSumG4_30(
      calculateValue30(inputValues["G2_40"], inputValues["G3_39"], sumG4_23)
    );
    setSumH4_30(
      calculateValue30(inputValues["H2_40"], inputValues["H3_39"], sumH4_23)
    );
    setSumI4_30(
      calculateValue30(inputValues["I2_40"], inputValues["I3_39"], sumI4_23)
    );
  };

  useEffect(() => {
    uploadSumB4_30();
  }, [
    inputValues,
    sumB4_23,
    sumC4_23,
    sumD4_23,
    sumE4_23,
    sumF4_23,
    sumG4_23,
    sumH4_23,
    sumI4_23,
  ]);

  useEffect(() => {
    const uploadSumB4_30 = async () => {
      await uploadData("B4_30", sumB4_30.toString());
      await uploadData("C4_30", sumC4_30.toString());
      await uploadData("D4_30", sumD4_30.toString());
      await uploadData("E4_30", sumE4_30.toString());
      await uploadData("F4_30", sumF4_30.toString());
      await uploadData("G4_30", sumG4_30.toString());
      await uploadData("H4_30", sumH4_30.toString());
      await uploadData("I4_30", sumI4_30.toString());
    };
    if (
      sumB4_30 ||
      sumC4_30 ||
      sumD4_30 ||
      sumE4_30 ||
      sumF4_30 ||
      sumG4_30 ||
      sumH4_30 ||
      sumI4_30
    ) {
      uploadSumB4_30();
    }
  }, [
    sumB4_30,
    sumC4_30,
    sumD4_30,
    sumE4_30,
    sumF4_30,
    sumG4_30,
    sumH4_30,
    sumI4_30,
  ]);

  //------------------------------------------------- TOTAL OF 31 -------------------------------------------------------
  const uploadSumB4_31 = () => {
    const calculateValue31 = (
      sum44,
      input33,
      input26,
      input34,
      input37,
      sum21
    ) => {
      const numerator =
        parseFloat(sum44 || 0) +
        parseFloat(input33 || 0) +
        parseFloat(input26 || 0) -
        (parseFloat(input34 || 0) + parseFloat(input37 || 0));
      const denominator = parseFloat(sum21 || 0);
      return denominator !== 0 ? numerator / denominator : 0;
    };
    setSumB4_31(
      calculateValue31(
        sumB44,
        inputValues["B3_33"],
        inputValues["B3_26"],
        inputValues["B3_34"],
        inputValues["B3_37"],
        sumB4_21
      )
    );
    setSumC4_31(
      calculateValue31(
        sumC44,
        inputValues["C3_33"],
        inputValues["C3_26"],
        inputValues["C3_34"],
        inputValues["C3_37"],
        sumC4_21
      )
    );
    setSumD4_31(
      calculateValue31(
        sumD44,
        inputValues["D3_33"],
        inputValues["D3_26"],
        inputValues["D3_34"],
        inputValues["D3_37"],
        sumD4_21
      )
    );
    setSumE4_31(
      calculateValue31(
        sumE44,
        inputValues["E3_33"],
        inputValues["E3_26"],
        inputValues["E3_34"],
        inputValues["E3_37"],
        sumE4_21
      )
    );
    setSumF4_31(
      calculateValue31(
        sumF44,
        inputValues["F3_33"],
        inputValues["F3_26"],
        inputValues["F3_34"],
        inputValues["F3_37"],
        sumF4_21
      )
    );
    setSumG4_31(
      calculateValue31(
        sumG44,
        inputValues["G3_33"],
        inputValues["G3_26"],
        inputValues["G3_34"],
        inputValues["G3_37"],
        sumG4_21
      )
    );
    setSumH4_31(
      calculateValue31(
        sumH44,
        inputValues["H3_33"],
        inputValues["H3_26"],
        inputValues["H3_34"],
        inputValues["H3_37"],
        sumH4_21
      )
    );
    setSumI4_31(
      calculateValue31(
        sumI44,
        inputValues["I3_33"],
        inputValues["I3_26"],
        inputValues["I3_34"],
        inputValues["I3_37"],
        sumI4_21
      )
    );
  };

  useEffect(() => {
    uploadSumB4_31();
  }, [
    inputValues,
    sumB4_21,
    sumC4_21,
    sumD4_21,
    sumE4_21,
    sumF4_21,
    sumG4_21,
    sumH4_21,
    sumI4_21,
    sumB44,
    sumC44,
    sumD44,
    sumE44,
    sumF44,
    sumG44,
    sumH44,
    sumI44,
  ]);

  useEffect(() => {
    const uploadSumB4_31 = async () => {
      await uploadData("B4_31", sumB4_31.toString());
      await uploadData("C4_31", sumC4_31.toString());
      await uploadData("D4_31", sumD4_31.toString());
      await uploadData("E4_31", sumE4_31.toString());
      await uploadData("F4_31", sumF4_31.toString());
      await uploadData("G4_31", sumG4_31.toString());
      await uploadData("H4_31", sumH4_31.toString());
      await uploadData("I4_31", sumI4_31.toString());
    };
    if (
      sumB4_31 ||
      sumC4_31 ||
      sumD4_31 ||
      sumE4_31 ||
      sumF4_31 ||
      sumG4_31 ||
      sumH4_31 ||
      sumI4_31
    ) {
      uploadSumB4_31();
    }
  }, [
    sumB4_31,
    sumC4_31,
    sumD4_31,
    sumE4_31,
    sumF4_31,
    sumG4_31,
    sumH4_31,
    sumI4_31,
  ]);

  //------------------------------------------------- TOTAL OF 34 -------------------------------------------------------

  const uploadSumB4_34 = () => {
    setSumB4_34(+parseFloat(tot2020.B1_10 || 0));
    setSumC4_34(+parseFloat(tot2020.C1_10 || 0));
    setSumD4_34(+parseFloat(tot2020.D1_10 || 0));
    setSumE4_34(+parseFloat(tot2020.E1_10 || 0));
    setSumF4_34(+parseFloat(tot2020.F1_10 || 0));
    setSumG4_34(+parseFloat(tot2020.G1_10 || 0));
    setSumH4_34(+parseFloat(tot2020.H1_10 || 0));
    setSumI4_34(+parseFloat(tot2020.I1_10 || 0));
  };

  useEffect(() => {
    uploadSumB4_34();
  }, [inputValues, tot2020]);

  useEffect(() => {
    const uploadSumB4_34 = async () => {
      await uploadData("B4_34", sumB4_34.toString());
      await uploadData("C4_34", sumC4_34.toString());
      await uploadData("D4_34", sumD4_34.toString());
      await uploadData("E4_34", sumE4_34.toString());
      await uploadData("F4_34", sumF4_34.toString());
      await uploadData("G4_34", sumG4_34.toString());
      await uploadData("H4_34", sumH4_34.toString());
      await uploadData("I4_34", sumI4_34.toString());
    };
    if (
      sumC4_34 ||
      sumD4_34 ||
      sumE4_34 ||
      sumF4_34 ||
      sumG4_34 ||
      sumH4_34 ||
      sumI4_34
    ) {
      uploadSumB4_34();
    }
  }, [
    sumB4_34,
    sumC4_34,
    sumD4_34,
    sumE4_34,
    sumF4_34,
    sumG4_34,
    sumH4_34,
    sumI4_34,
  ]);

  //------------------------------------------------- TOTAL OF 35 -------------------------------------------------------

  const updateB4_35 = () => {
    const calculateValue35 = (current, previous) => {
      const numerator = parseFloat(current || 0) - parseFloat(previous || 0);
      const denominator = parseFloat(previous || 0);
      return denominator !== 0 ? numerator / denominator : 0;
    };

    setSumC4_35(calculateValue35(tot2020.C1_10, tot2020.B1_10));
    setSumD4_35(calculateValue35(tot2020.D1_10, tot2020.C1_10));
    setSumE4_35(calculateValue35(tot2020.E1_10, tot2020.D1_10));
    setSumF4_35(calculateValue35(tot2020.F1_10, tot2020.E1_10));
    setSumG4_35(calculateValue35(tot2020.G1_10, tot2020.F1_10));
    setSumH4_35(calculateValue35(tot2020.H1_10, tot2020.G1_10));
    setSumI4_35(calculateValue35(tot2020.I1_10, tot2020.H1_10));
  };

  useEffect(() => {
    updateB4_35();
  }, [tot2020]);

  useEffect(() => {
    const uploadB4_35 = async () => {
      const dataToUpload = [
        { id: "C4_35", value: sumC4_35 },
        { id: "D4_35", value: sumD4_35 },
        { id: "E4_35", value: sumE4_35 },
        { id: "F4_35", value: sumF4_35 },
        { id: "G4_35", value: sumG4_35 },
        { id: "H4_35", value: sumH4_35 },
        { id: "I4_35", value: sumI4_35 },
      ];

      for (const { id, value } of dataToUpload) {
        await uploadData(id, value.toString());
      }
    };

    if (
      sumC4_35 ||
      sumD4_35 ||
      sumE4_35 ||
      sumF4_35 ||
      sumG4_35 ||
      sumH4_35 ||
      sumI4_35
    ) {
      uploadB4_35();
    }
  }, [sumC4_35, sumD4_35, sumE4_35, sumF4_35, sumG4_35, sumH4_35, sumI4_35]);

  //------------------------------------------------- TOTAL OF 36 -------------------------------------------------------

  // const uploadSumB4_36 = () => {
  //   setSumB4_36(  calculateTotal([0]) + parseFloat(Cost31.B1_31 || 0));
  //   setSumC4_36(  calculateTotal([0]) + parseFloat(Cost31.C1_31 || 0));
  //   setSumD4_36(  calculateTotal([0]) + parseFloat(Cost31.D1_31 || 0));
  //   setSumE4_36(  calculateTotal([0]) + parseFloat(Cost31.E1_31 || 0));
  //   setSumF4_36(  calculateTotal([0]) + parseFloat(Cost31.F1_31 || 0));
  //   setSumG4_36(  calculateTotal([0]) + parseFloat(Cost31.G1_31 || 0));
  //   setSumH4_36(  calculateTotal([0]) + parseFloat(Cost31.H1_31 || 0));
  //   setSumI4_36(  calculateTotal([0]) + parseFloat(Cost31.I1_31 || 0));
  // };

  // useEffect(() => {
  //   uploadSumB4_36();
  // }, [inputValues,Cost31]);

  // useEffect(() => {
  //   const uploadSumB4_36 = async () => {
  //     await uploadData("B4_36", sumB4_36.toString());
  //     await uploadData("C4_36", sumC4_36.toString());
  //     await uploadData("D4_36", sumD4_36.toString());
  //     await uploadData("E4_36", sumE4_36.toString());
  //     await uploadData("F4_36", sumF4_36.toString());
  //     await uploadData("G4_36", sumG4_36.toString());
  //     await uploadData("H4_36", sumH4_36.toString());
  //     await uploadData("I4_36", sumI4_36.toString());
  //   };
  //   if ( sumC4_36 || sumD4_36 || sumE4_36 || sumF4_36 || sumG4_36 || sumH4_36 || sumI4_36) {
  //     uploadSumB4_36();
  //   }
  // }, [ sumB4_36,sumC4_36, sumD4_36, sumE4_36, sumF4_36, sumG4_36, sumH4_36, sumI4_36]);

  const updateB4_36 = () => {
    setSumB4_36(calculateTotal([0]) + parseFloat(Cost31.B1_31 || 0));
    setSumC4_36(calculateTotal([0]) + parseFloat(Cost31.C1_31 || 0));
    setSumD4_36(calculateTotal([0]) + parseFloat(Cost31.D1_31 || 0));
    setSumE4_36(calculateTotal([0]) + parseFloat(Cost31.E1_31 || 0));
    setSumF4_36(calculateTotal([0]) + parseFloat(Cost31.F1_31 || 0));
    setSumG4_36(calculateTotal([0]) + parseFloat(Cost31.G1_31 || 0));
    setSumH4_36(calculateTotal([0]) + parseFloat(Cost31.H1_31 || 0));
    setSumI4_36(calculateTotal([0]) + parseFloat(Cost31.I1_31 || 0));
  };

  useEffect(() => {
    updateB4_36();
  }, [inputValues, Cost31]);

  useEffect(() => {
    const uploadB4_36 = async () => {
      await uploadData("B4_36", sumB4_36.toString());
      await uploadData("C4_36", sumC4_36.toString());
      await uploadData("D4_36", sumD4_36.toString());
      await uploadData("E4_36", sumE4_36.toString());
      await uploadData("F4_36", sumF4_36.toString());
      await uploadData("G4_36", sumG4_36.toString());
      await uploadData("H4_36", sumH4_36.toString());
      await uploadData("I4_36", sumI4_36.toString());
    };
    if (
      sumB4_36 ||
      sumC4_36 ||
      sumD4_36 ||
      sumE4_36 ||
      sumF4_36 ||
      sumG4_36 ||
      sumH4_36 ||
      sumI4_36
    ) {
      uploadB4_36();
    }
  }, [
    sumB4_36,
    sumC4_36,
    sumD4_36,
    sumE4_36,
    sumF4_36,
    sumG4_36,
    sumH4_36,
    sumI4_36,
  ]);

  //------------------------------------------------- TOTAL OF 37 -------------------------------------------------------

  const uploadSumB4_37 = () => {
    setSumB4_37(parseFloat(Cost38.B1_38 || 0));
    setSumC4_37(parseFloat(Cost38.C1_38 || 0));
    setSumD4_37(parseFloat(Cost38.D1_38 || 0));
    setSumE4_37(parseFloat(Cost38.E1_38 || 0));
    setSumF4_37(parseFloat(Cost38.F1_38 || 0));
    setSumG4_37(parseFloat(Cost38.G1_38 || 0));
    setSumH4_37(parseFloat(Cost38.H1_38 || 0));
    setSumI4_37(parseFloat(Cost38.I1_38 || 0));
  };

  useEffect(() => {
    uploadSumB4_37();
  }, [inputValues, Cost38]);

  useEffect(() => {
    const uploadSumB4_37 = async () => {
      await uploadData("B4_37", sumB4_37.toString());
      await uploadData("C4_37", sumC4_37.toString());
      await uploadData("D4_37", sumD4_37.toString());
      await uploadData("E4_37", sumE4_37.toString());
      await uploadData("F4_37", sumF4_37.toString());
      await uploadData("G4_37", sumG4_37.toString());
      await uploadData("H4_37", sumH4_37.toString());
      await uploadData("I4_37", sumI4_37.toString());
    };

    if (
      sumB4_37 !== undefined &&
      sumC4_37 !== undefined &&
      sumD4_37 !== undefined &&
      sumE4_37 !== undefined &&
      sumF4_37 !== undefined &&
      sumG4_37 !== undefined &&
      sumH4_37 !== undefined &&
      sumI4_37 !== undefined
    ) {
      uploadSumB4_37();
    }
  }, [
    sumB4_37,
    sumC4_37,
    sumD4_37,
    sumE4_37,
    sumF4_37,
    sumG4_37,
    sumH4_37,
    sumI4_37,
  ]);

  //------------------------------------------------- TOTAL OF 38 -------------------------------------------------------

  const uploadSumB4_38 = () => {
    setSumB4_38(parseFloat(Cost37.B1_37 || 0));
    setSumC4_38(parseFloat(Cost37.C1_37 || 0));
    setSumD4_38(parseFloat(Cost37.D1_37 || 0));
    setSumE4_38(parseFloat(Cost37.E1_37 || 0));
    setSumF4_38(parseFloat(Cost37.F1_37 || 0));
    setSumG4_38(parseFloat(Cost37.G1_37 || 0));
    setSumH4_38(parseFloat(Cost37.H1_37 || 0));
    setSumI4_38(parseFloat(Cost37.I1_37 || 0));
  };

  useEffect(() => {
    uploadSumB4_38();
  }, [inputValues, Cost37]);

  useEffect(() => {
    const uploadSumB4_38 = async () => {
      await uploadData("B4_38", sumB4_38.toString());
      await uploadData("C4_38", sumC4_38.toString());
      await uploadData("D4_38", sumD4_38.toString());
      await uploadData("E4_38", sumE4_38.toString());
      await uploadData("F4_38", sumF4_38.toString());
      await uploadData("G4_38", sumG4_38.toString());
      await uploadData("H4_38", sumH4_38.toString());
      await uploadData("I4_38", sumI4_38.toString());
    };
    if (
      sumB4_38 ||
      sumC4_38 ||
      sumD4_38 ||
      sumE4_38 ||
      sumF4_38 ||
      sumG4_38 ||
      sumH4_38 ||
      sumI4_38
    ) {
      uploadSumB4_38();
    }
  }, [
    sumB4_38,
    sumC4_38,
    sumD4_38,
    sumE4_38,
    sumF4_38,
    sumG4_38,
    sumH4_38,
    sumI4_38,
  ]);

  //------------------------------------------------ SAVE FOR 39 TO DATABASE ---------------------------------------------

  const updateB4_39 = () => {
    setSumB4_39(parseFloat(inputValues["B1_21"] || 0));
    setSumC4_39(parseFloat(inputValues["C1_21"] || 0));
    setSumD4_39(parseFloat(inputValues["D1_21"] || 0));
    setSumE4_39(parseFloat(inputValues["E1_21"] || 0));
    setSumF4_39(parseFloat(inputValues["F1_21"] || 0));
    setSumG4_39(parseFloat(inputValues["G1_21"] || 0));
    setSumH4_39(parseFloat(inputValues["H1_21"] || 0));
    setSumI4_39(parseFloat(inputValues["I1_21"] || 0));
  };

  useEffect(() => {
    updateB4_39();
  }, [inputValues]);

  useEffect(() => {
    const uploadB4_39 = async () => {
      await uploadData("B4_39", sumB4_39.toString());
      await uploadData("C4_39", sumC4_39.toString());
      await uploadData("D4_39", sumD4_39.toString());
      await uploadData("E4_39", sumE4_39.toString());
      await uploadData("F4_39", sumF4_39.toString());
      await uploadData("G4_39", sumG4_39.toString());
      await uploadData("H4_39", sumH4_39.toString());
      await uploadData("I4_39", sumI4_39.toString());
    };
    if (
      sumB4_39 ||
      sumC4_39 ||
      sumD4_39 ||
      sumE4_39 ||
      sumF4_39 ||
      sumG4_39 ||
      sumH4_39 ||
      sumI4_39
    ) {
      uploadB4_39();
    }
  }, [
    sumB4_39,
    sumC4_39,
    sumD4_39,
    sumE4_39,
    sumF4_39,
    sumG4_39,
    sumH4_39,
    sumI4_39,
  ]);

  //------------------------------------------------- TOTAL OF 40 -------------------------------------------------------

  const uploadSumB4_40 = () => {
    setSumB4_40(parseFloat(Cost42.B1_42 || 0));
    setSumC4_40(parseFloat(Cost42.C1_42 || 0));
    setSumD4_40(parseFloat(Cost42.D1_42 || 0));
    setSumE4_40(parseFloat(Cost42.E1_42 || 0));
    setSumF4_40(parseFloat(Cost42.F1_42 || 0));
    setSumG4_40(parseFloat(Cost42.G1_42 || 0));
    setSumH4_40(parseFloat(Cost42.H1_42 || 0));
    setSumI4_40(parseFloat(Cost42.I1_42 || 0));
  };

  useEffect(() => {
    uploadSumB4_40();
  }, [inputValues, Cost42]);

  useEffect(() => {
    const uploadSumB4_40 = async () => {
      await uploadData("B4_40", sumB4_40.toString());
      await uploadData("C4_40", sumC4_40.toString());
      await uploadData("D4_40", sumD4_40.toString());
      await uploadData("E4_40", sumE4_40.toString());
      await uploadData("F4_40", sumF4_40.toString());
      await uploadData("G4_40", sumG4_40.toString());
      await uploadData("H4_40", sumH4_40.toString());
      await uploadData("I4_40", sumI4_40.toString());
    };
    if (
      sumB4_40 ||
      sumC4_40 ||
      sumD4_40 ||
      sumE4_40 ||
      sumF4_40 ||
      sumG4_40 ||
      sumH4_40 ||
      sumI4_40
    ) {
      uploadSumB4_40();
    }
  }, [
    sumB4_40,
    sumC4_40,
    sumD4_40,
    sumE4_40,
    sumF4_40,
    sumG4_40,
    sumH4_40,
    sumI4_40,
  ]);

  //------------------------------------------------ SAVE FOR 41 TO DATABASE ---------------------------------------------

  const updateB5_41 = () => {
    const calculateValue41 = (numerator, denominator) => {
      return denominator !== 0 ? (numerator / denominator) * 100 : 0;
    };

    setSumB4_41(calculateValue41(sumB4_37, sumB4_34));
    setSumC4_41(calculateValue41(sumC4_37, sumC4_34));
    setSumD4_41(calculateValue41(sumD4_37, sumD4_34));
    setSumE4_41(calculateValue41(sumE4_37, sumE4_34));
    setSumF4_41(calculateValue41(sumF4_37, sumF4_34));
    setSumG4_41(calculateValue41(sumG4_37, sumG4_34));
    setSumH4_41(calculateValue41(sumH4_37, sumH4_34));
    setSumI4_41(calculateValue41(sumI4_37, sumI4_34));
  };

  useEffect(() => {
    updateB5_41();
  }, [
    sumB4_37,
    sumC4_37,
    sumD4_37,
    sumE4_37,
    sumF4_37,
    sumG4_37,
    sumH4_37,
    sumI4_37,
    sumB4_34,
    sumC4_34,
    sumD4_34,
    sumE4_34,
    sumF4_34,
    sumG4_34,
    sumH4_34,
    sumI4_34,
  ]);

  useEffect(() => {
    const uploadSumB4_41 = async () => {
      const dataToUpload = [
        { id: "B4_41", value: sumB4_41 },
        { id: "C4_41", value: sumC4_41 },
        { id: "D4_41", value: sumD4_41 },
        { id: "E4_41", value: sumE4_41 },
        { id: "F4_41", value: sumF4_41 },
        { id: "G4_41", value: sumG4_41 },
        { id: "H4_41", value: sumH4_41 },
        { id: "I4_41", value: sumI4_41 },
      ];

      for (const { id, value } of dataToUpload) {
        await uploadData(id, value.toString());
      }
    };

    if (
      sumB4_41 ||
      sumC4_41 ||
      sumD4_41 ||
      sumE4_41 ||
      sumF4_41 ||
      sumG4_41 ||
      sumH4_41 ||
      sumI4_41
    ) {
      uploadSumB4_41();
    }
  }, [
    sumB4_41,
    sumC4_41,
    sumD4_41,
    sumE4_41,
    sumF4_41,
    sumG4_41,
    sumH4_41,
    sumI4_41,
  ]);

  //------------------------------------------------ SAVE FOR 42 TO DATABASE ---------------------------------------------

  const updateB5_42 = () => {
    const calculateValue42 = (numeratorKey, denominatorKey) => {
      const numerator = parseFloat(Cost31[numeratorKey] || 0);
      const denominator = parseFloat(tot2020[denominatorKey] || 0);

      return denominator !== 0 ? 100 - (numerator / denominator) * 100 : 0;
    };

    setSumB4_42(calculateValue42("B1_31", "B1_10"));
    setSumC4_42(calculateValue42("C1_31", "C1_10"));
    setSumD4_42(calculateValue42("D1_31", "D1_10"));
    setSumE4_42(calculateValue42("E1_31", "E1_10"));
    setSumF4_42(calculateValue42("F1_31", "F1_10"));
    setSumG4_42(calculateValue42("G1_31", "G1_10"));
    setSumH4_42(calculateValue42("H1_31", "H1_10"));
    setSumI4_42(calculateValue42("I1_31", "I1_10"));
  };

  useEffect(() => {
    updateB5_42();
  }, [Cost31, tot2020]);

  useEffect(() => {
    const uploadSumB4_42 = async () => {
      const dataToUpload = [
        { id: "B4_42", value: sumB4_42 },
        { id: "C4_42", value: sumC4_42 },
        { id: "D4_42", value: sumD4_42 },
        { id: "E4_42", value: sumE4_42 },
        { id: "F4_42", value: sumF4_42 },
        { id: "G4_42", value: sumG4_42 },
        { id: "H4_42", value: sumH4_42 },
        { id: "I4_42", value: sumI4_42 },
      ];

      for (const { id, value } of dataToUpload) {
        await uploadData(id, value.toString());
      }
    };

    if (
      sumB4_42 ||
      sumC4_42 ||
      sumD4_42 ||
      sumE4_42 ||
      sumF4_42 ||
      sumG4_42 ||
      sumH4_42 ||
      sumI4_42
    ) {
      uploadSumB4_42();
    }
  }, [
    sumB4_42,
    sumC4_42,
    sumD4_42,
    sumE4_42,
    sumF4_42,
    sumG4_42,
    sumH4_42,
    sumI4_42,
  ]);

  //------------------------------------------------ SAVE FOR 43 TO DATABASE ---------------------------------------------

  const updateB5_43 = () => {
    const calculateValue43 = (numeratorKey, denominatorKey) => {
      const numerator = parseFloat(Cost37[numeratorKey] || 0);
      const denominator = parseFloat(tot2020[denominatorKey] || 0);

      return denominator !== 0 ? (numerator / denominator) * 100 : 0;
    };

    setSumB4_43(calculateValue43("B1_37", "B1_10"));
    setSumC4_43(calculateValue43("C1_37", "C1_10"));
    setSumD4_43(calculateValue43("D1_37", "D1_10"));
    setSumE4_43(calculateValue43("E1_37", "E1_10"));
    setSumF4_43(calculateValue43("F1_37", "F1_10"));
    setSumG4_43(calculateValue43("G1_37", "G1_10"));
    setSumH4_43(calculateValue43("H1_37", "H1_10"));
    setSumI4_43(calculateValue43("I1_37", "I1_10"));
  };

  useEffect(() => {
    updateB5_43();
  }, [Cost37, tot2020]);

  useEffect(() => {
    const uploadSumB4_43 = async () => {
      const dataToUpload = [
        { id: "B4_43", value: sumB4_43 },
        { id: "C4_43", value: sumC4_43 },
        { id: "D4_43", value: sumD4_43 },
        { id: "E4_43", value: sumE4_43 },
        { id: "F4_43", value: sumF4_43 },
        { id: "G4_43", value: sumG4_43 },
        { id: "H4_43", value: sumH4_43 },
        { id: "I4_43", value: sumI4_43 },
      ];

      for (const { id, value } of dataToUpload) {
        await uploadData(id, value.toString());
      }
    };

    if (
      sumB4_43 ||
      sumC4_43 ||
      sumD4_43 ||
      sumE4_43 ||
      sumF4_43 ||
      sumG4_43 ||
      sumH4_43 ||
      sumI4_43
    ) {
      uploadSumB4_43();
    }
  }, [
    sumB4_43,
    sumC4_43,
    sumD4_43,
    sumE4_43,
    sumF4_43,
    sumG4_43,
    sumH4_43,
    sumI4_43,
  ]);

  //------------------------------------------------ SAVE FOR 44 TO DATABASE ---------------------------------------------

  const updateB5_44 = () => {
    const calculateValue44 = (numeratorKey, denominator) => {
      const numerator = parseFloat(Cost37[numeratorKey] || 0);
      return denominator !== 0 ? (numerator / denominator) * 100 : 0;
    };

    setSumB4_44(calculateValue44("B1_37", sumB4_21));
    setSumC4_44(calculateValue44("C1_37", sumC4_21));
    setSumD4_44(calculateValue44("D1_37", sumD4_21));
    setSumE4_44(calculateValue44("E1_37", sumE4_21));
    setSumF4_44(calculateValue44("F1_37", sumF4_21));
    setSumG4_44(calculateValue44("G1_37", sumG4_21));
    setSumH4_44(calculateValue44("H1_37", sumH4_21));
    setSumI4_44(calculateValue44("I1_37", sumI4_21));
  };

  useEffect(() => {
    updateB5_44();
  }, [
    Cost37,
    sumB4_21,
    sumC4_21,
    sumD4_21,
    sumE4_21,
    sumF4_21,
    sumG4_21,
    sumH4_21,
    sumI4_21,
  ]);

  useEffect(() => {
    const uploadSumB4_44 = async () => {
      const dataToUpload = [
        { id: "B4_44", value: sumB4_44 },
        { id: "C4_44", value: sumC4_44 },
        { id: "D4_44", value: sumD4_44 },
        { id: "E4_44", value: sumE4_44 },
        { id: "F4_44", value: sumF4_44 },
        { id: "G4_44", value: sumG4_44 },
        { id: "H4_44", value: sumH4_44 },
        { id: "I4_44", value: sumI4_44 },
      ];

      for (const { id, value } of dataToUpload) {
        await uploadData(id, value.toString());
      }
    };

    if (
      sumB4_44 ||
      sumC4_44 ||
      sumD4_44 ||
      sumE4_44 ||
      sumF4_44 ||
      sumG4_44 ||
      sumH4_44 ||
      sumI4_44
    ) {
      uploadSumB4_44();
    }
  }, [
    sumB4_44,
    sumC4_44,
    sumD4_44,
    sumE4_44,
    sumF4_44,
    sumG4_44,
    sumH4_44,
    sumI4_44,
  ]);

  //------------------------------------------------ SAVE FOR 45 TO DATABASE ---------------------------------------------

  const updateB5_45 = () => {
    const calculateValue45 = (numerator, denominator) => {
      return denominator !== 0 ? numerator / denominator : 0;
    };

    setSumB4_45(calculateValue45(sumB4_34, sumB4_21));
    setSumC4_45(calculateValue45(sumC4_34, sumC4_21));
    setSumD4_45(calculateValue45(sumD4_34, sumD4_21));
    setSumE4_45(calculateValue45(sumE4_34, sumE4_21));
    setSumF4_45(calculateValue45(sumF4_34, sumF4_21));
    setSumG4_45(calculateValue45(sumG4_34, sumG4_21));
    setSumH4_45(calculateValue45(sumH4_34, sumH4_21));
    setSumI4_45(calculateValue45(sumI4_34, sumI4_21));
  };

  useEffect(() => {
    updateB5_45();
  }, [
    Cost37,
    sumB4_34,
    sumC4_34,
    sumD4_34,
    sumE4_34,
    sumF4_34,
    sumG4_34,
    sumH4_34,
    sumI4_34,
    sumB4_21,
    sumC4_21,
    sumD4_21,
    sumE4_21,
    sumF4_21,
    sumG4_21,
    sumH4_21,
    sumI4_21,
  ]);

  useEffect(() => {
    const uploadSumB4_45 = async () => {
      const dataToUpload = [
        { id: "B4_45", value: sumB4_45 },
        { id: "C4_45", value: sumC4_45 },
        { id: "D4_45", value: sumD4_45 },
        { id: "E4_45", value: sumE4_45 },
        { id: "F4_45", value: sumF4_45 },
        { id: "G4_45", value: sumG4_45 },
        { id: "H4_45", value: sumH4_45 },
        { id: "I4_45", value: sumI4_45 },
      ];

      for (const { id, value } of dataToUpload) {
        await uploadData(id, value.toString());
      }
    };

    if (
      sumB4_45 ||
      sumC4_45 ||
      sumD4_45 ||
      sumE4_45 ||
      sumF4_45 ||
      sumG4_45 ||
      sumH4_45 ||
      sumI4_45
    ) {
      uploadSumB4_45();
    }
  }, [
    sumB4_45,
    sumC4_45,
    sumD4_45,
    sumE4_45,
    sumF4_45,
    sumG4_45,
    sumH4_45,
    sumI4_45,
  ]);

  //----------------------------------------TOTAL AND SAVE FOR 48 TO DATABASE ---------------------------------------------

  const update48 = () => {
    setSumB4_48(
      parseFloat(inputValues["B2_34"] || 0) +
        parseFloat(inputValues["B2_35"] || 0)
    );
    setSumC4_48(
      parseFloat(inputValues["C2_34"] || 0) +
        parseFloat(inputValues["C2_35"] || 0)
    );
    setSumD4_48(
      parseFloat(inputValues["D2_34"] || 0) +
        parseFloat(inputValues["D2_35"] || 0)
    );
    setSumE4_48(
      parseFloat(inputValues["E2_34"] || 0) +
        parseFloat(inputValues["E2_35"] || 0)
    );
    setSumF4_48(
      parseFloat(inputValues["F2_34"] || 0) +
        parseFloat(inputValues["F2_35"] || 0)
    );
    setSumG4_48(
      parseFloat(inputValues["G2_34"] || 0) +
        parseFloat(inputValues["G2_35"] || 0)
    );
    setSumH4_48(
      parseFloat(inputValues["H2_34"] || 0) +
        parseFloat(inputValues["H2_35"] || 0)
    );
    setSumI4_48(
      parseFloat(inputValues["I2_34"] || 0) +
        parseFloat(inputValues["I2_35"] || 0)
    );
  };

  useEffect(() => {
    update48();
  }, [inputValues]);

  useEffect(() => {
    const upload48 = async () => {
      await uploadData("B4_48", sumB4_48.toString());
      await uploadData("C4_48", sumC4_48.toString());
      await uploadData("D4_48", sumD4_48.toString());
      await uploadData("E4_48", sumE4_48.toString());
      await uploadData("F4_48", sumF4_48.toString());
      await uploadData("G4_48", sumG4_48.toString());
      await uploadData("H4_48", sumH4_48.toString());
      await uploadData("I4_48", sumI4_48.toString());
    };
    if (
      sumB4_48 ||
      sumC4_48 ||
      sumD4_48 ||
      sumE4_48 ||
      sumF4_48 ||
      sumG4_48 ||
      sumH4_48 ||
      sumI4_48
    ) {
      upload48();
    }
  }, [
    sumB4_48,
    sumC4_48,
    sumD4_48,
    sumE4_48,
    sumF4_48,
    sumG4_48,
    sumH4_48,
    sumI4_48,
  ]);

  //------------------------------------------------- TOTAL OF 49 -------------------------------------------------------

  const updateB4_49 = () => {
    const calculateValue49 = (current, previous) => {
      const numerator = parseFloat(current || 0) - parseFloat(previous || 0);
      const denominator = parseFloat(previous || 0);
      return denominator !== 0 ? numerator / denominator : 0;
    };

    setSumC4_49(calculateValue49(sumC4_48, sumB4_48));
    setSumD4_49(calculateValue49(sumD4_48, sumC4_48));
    setSumE4_49(calculateValue49(sumE4_48, sumD4_48));
    setSumF4_49(calculateValue49(sumF4_48, sumE4_48));
    setSumG4_49(calculateValue49(sumG4_48, sumF4_48));
    setSumH4_49(calculateValue49(sumH4_48, sumG4_48));
    setSumI4_49(calculateValue49(sumI4_48, sumH4_48));
  };

  useEffect(() => {
    updateB4_49();
  }, [
    sumB4_48,
    sumC4_48,
    sumD4_48,
    sumE4_48,
    sumF4_48,
    sumG4_48,
    sumH4_48,
    sumI4_48,
  ]);

  useEffect(() => {
    const uploadB4_49 = async () => {
      const dataToUpload = [
        { id: "C4_49", value: sumC4_49 },
        { id: "D4_49", value: sumD4_49 },
        { id: "E4_49", value: sumE4_49 },
        { id: "F4_49", value: sumF4_49 },
        { id: "G4_49", value: sumG4_49 },
        { id: "H4_49", value: sumH4_49 },
        { id: "I4_49", value: sumI4_49 },
      ];

      for (const { id, value } of dataToUpload) {
        await uploadData(id, value.toString());
      }
    };

    if (
      sumC4_49 ||
      sumD4_49 ||
      sumE4_49 ||
      sumF4_49 ||
      sumG4_49 ||
      sumH4_49 ||
      sumI4_49
    ) {
      uploadB4_49();
    }
  }, [sumC4_49, sumD4_49, sumE4_49, sumF4_49, sumG4_49, sumH4_49, sumI4_49]);

  //------------------------------------------------ SAVE FOR 50 TO DATABASE ---------------------------------------------

  const updateB5_50 = () => {
    const calculateValue50 = (numerator, denominator) => {
      return denominator !== 0 ? numerator / denominator : 0;
    };

    setSumB4_50(calculateValue50(sumB4_48, sumB2));
    setSumC4_50(calculateValue50(sumC4_48, sumC2));
    setSumD4_50(calculateValue50(sumD4_48, sumD2));
    setSumE4_50(calculateValue50(sumE4_48, sumE2));
    setSumF4_50(calculateValue50(sumF4_48, sumF2));
    setSumG4_50(calculateValue50(sumG4_48, sumG2));
    setSumH4_50(calculateValue50(sumH4_48, sumH2));
    setSumI4_50(calculateValue50(sumI4_48, sumI2));
  };

  useEffect(() => {
    updateB5_50();
  }, [
    sumB4_48,
    sumC4_48,
    sumD4_48,
    sumE4_48,
    sumF4_48,
    sumG4_48,
    sumH4_48,
    sumI4_48,
    sumB2,
    sumC2,
    sumD2,
    sumE2,
    sumF2,
    sumG2,
    sumH2,
    sumI2,
  ]);

  useEffect(() => {
    const uploadSumB4_50 = async () => {
      const dataToUpload = [
        { id: "B4_50", value: sumB4_50 },
        { id: "C4_50", value: sumC4_50 },
        { id: "D4_50", value: sumD4_50 },
        { id: "E4_50", value: sumE4_50 },
        { id: "F4_50", value: sumF4_50 },
        { id: "G4_50", value: sumG4_50 },
        { id: "H4_50", value: sumH4_50 },
        { id: "I4_50", value: sumI4_50 },
      ];

      for (const { id, value } of dataToUpload) {
        await uploadData(id, value.toString());
      }
    };

    if (
      sumB4_50 ||
      sumC4_50 ||
      sumD4_50 ||
      sumE4_50 ||
      sumF4_50 ||
      sumG4_50 ||
      sumH4_50 ||
      sumI4_50
    ) {
      uploadSumB4_50();
    }
  }, [
    sumB4_50,
    sumC4_50,
    sumD4_50,
    sumE4_50,
    sumF4_50,
    sumG4_50,
    sumH4_50,
    sumI4_50,
  ]);

  //------------------------------------------------- TOTAL OF 51 -------------------------------------------------------
  const updateB4_51 = () => {
    const calculateValue51 = (
      input25,
      input24,
      input23,
      input10,
      input11,
      sum6
    ) => {
      const numerator =
        parseFloat(input25 || 0) +
        parseFloat(input24 || 0) +
        parseFloat(input23 || 0) +
        parseFloat(input10 || 0) +
        parseFloat(input11 || 0);
      const denominator = parseFloat(sum6 || 0);
      return denominator !== 0 ? numerator * (365 / denominator) : 0;
    };

    setSumB4_51(
      calculateValue51(
        inputValues["B1_25"],
        inputValues["B1_24"],
        inputValues["B1_23"],
        inputValues["B2_10"],
        inputValues["B2_11"],
        sumB4_6
      )
    );
    setSumC4_51(
      calculateValue51(
        inputValues["C1_25"],
        inputValues["C1_24"],
        inputValues["C1_23"],
        inputValues["C2_10"],
        inputValues["C2_11"],
        sumC4_6
      )
    );
    setSumD4_51(
      calculateValue51(
        inputValues["D1_25"],
        inputValues["D1_24"],
        inputValues["D1_23"],
        inputValues["D2_10"],
        inputValues["D2_11"],
        sumD4_6
      )
    );
    setSumE4_51(
      calculateValue51(
        inputValues["E1_25"],
        inputValues["E1_24"],
        inputValues["E1_23"],
        inputValues["E2_10"],
        inputValues["E2_11"],
        sumE4_6
      )
    );
    setSumF4_51(
      calculateValue51(
        inputValues["F1_25"],
        inputValues["F1_24"],
        inputValues["F1_23"],
        inputValues["F2_10"],
        inputValues["F2_11"],
        sumF4_6
      )
    );
    setSumG4_51(
      calculateValue51(
        inputValues["G1_25"],
        inputValues["G1_24"],
        inputValues["G1_23"],
        inputValues["G2_10"],
        inputValues["G2_11"],
        sumG4_6
      )
    );
    setSumH4_51(
      calculateValue51(
        inputValues["H1_25"],
        inputValues["H1_24"],
        inputValues["H1_23"],
        inputValues["H2_10"],
        inputValues["H2_11"],
        sumH4_6
      )
    );
    setSumI4_51(
      calculateValue51(
        inputValues["I1_25"],
        inputValues["I1_24"],
        inputValues["I1_23"],
        inputValues["I2_10"],
        inputValues["I2_11"],
        sumI4_6
      )
    );
  };

  useEffect(() => {
    updateB4_51();
  }, [
    inputValues,
    sumB4_6,
    sumC4_6,
    sumD4_6,
    sumE4_6,
    sumF4_6,
    sumG4_6,
    sumH4_6,
    sumI4_6,
  ]);

  useEffect(() => {
    const uploadB4_51 = async () => {
      const dataToUpload = [
        { id: "B4_51", value: sumB4_51 },
        { id: "C4_51", value: sumC4_51 },
        { id: "D4_51", value: sumD4_51 },
        { id: "E4_51", value: sumE4_51 },
        { id: "F4_51", value: sumF4_51 },
        { id: "G4_51", value: sumG4_51 },
        { id: "H4_51", value: sumH4_51 },
        { id: "I4_51", value: sumI4_51 },
      ];

      for (const { id, value } of dataToUpload) {
        await uploadData(id, value.toString());
      }
    };

    if (
      sumB4_51 ||
      sumC4_51 ||
      sumD4_51 ||
      sumE4_51 ||
      sumF4_51 ||
      sumG4_51 ||
      sumH4_51 ||
      sumI4_51
    ) {
      uploadB4_51();
    }
  }, [
    sumB4_51,
    sumC4_51,
    sumD4_51,
    sumE4_51,
    sumF4_51,
    sumG4_51,
    sumH4_51,
    sumI4_51,
  ]);

  //------------------------------------------------ SAVE FOR 52 TO DATABASE ---------------------------------------------

  const updateB5_52 = () => {
    const calculateValue52 = (numerator, input30) => {
      const denominator = parseFloat(input30 || 0);
      return denominator !== 0 ? numerator / denominator : 0;
    };

    setSumB4_52(calculateValue52(sumB4_37, inputValues["B1_30"]));
    setSumC4_52(calculateValue52(sumC4_37, inputValues["C1_30"]));
    setSumD4_52(calculateValue52(sumD4_37, inputValues["D1_30"]));
    setSumE4_52(calculateValue52(sumE4_37, inputValues["E1_30"]));
    setSumF4_52(calculateValue52(sumF4_37, inputValues["F1_30"]));
    setSumG4_52(calculateValue52(sumG4_37, inputValues["G1_30"]));
    setSumH4_52(calculateValue52(sumH4_37, inputValues["H1_30"]));
    setSumI4_52(calculateValue52(sumI4_37, inputValues["I1_30"]));
  };

  useEffect(() => {
    updateB5_52();
  }, [
    sumB4_37,
    sumC4_37,
    sumD4_37,
    sumE4_37,
    sumF4_37,
    sumG4_37,
    sumH4_37,
    sumI4_37,
  ]);

  useEffect(() => {
    const uploadSumB4_52 = async () => {
      const dataToUpload = [
        { id: "B4_52", value: sumB4_52 },
        { id: "C4_52", value: sumC4_52 },
        { id: "D4_52", value: sumD4_52 },
        { id: "E4_52", value: sumE4_52 },
        { id: "F4_52", value: sumF4_52 },
        { id: "G4_52", value: sumG4_52 },
        { id: "H4_52", value: sumH4_52 },
        { id: "I4_52", value: sumI4_52 },
      ];

      for (const { id, value } of dataToUpload) {
        await uploadData(id, value.toString());
      }
    };

    if (
      sumB4_52 ||
      sumC4_52 ||
      sumD4_52 ||
      sumE4_52 ||
      sumF4_52 ||
      sumG4_52 ||
      sumH4_52 ||
      sumI4_52
    ) {
      uploadSumB4_52();
    }
  }, [
    sumB4_52,
    sumC4_52,
    sumD4_52,
    sumE4_52,
    sumF4_52,
    sumG4_52,
    sumH4_52,
    sumI4_52,
  ]);

  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offsetTop = document.querySelector(".fixed-top").offsetTop;

      if (window.pageYOffset > offsetTop) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Navbarr />

      <div
        className="bg-white rounded-3xl px-10 py-7"
        style={{
          boxShadow:
            "0 -4px 8px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div className="mt-10   rounded-3xl container-fluid border-1 border-black d-flex justify-content-center div_1">
          <h2 className="p-2 font-bold text-xl">{username}</h2>
        </div>

        <div className="container-fluid border-1 border-black mt-3">
          <div className="row">
            <div className="col-lg-4 border-end  border-black  d-flex justify-content-center">
              <h5>COMPARATIVE RATIOS</h5>
            </div>
            <div className="col-lg-8 border-start d-flex justify-content-center">
              <h5>For the year ended/ending (Rs. in Lacs)</h5>
            </div>
          </div>
        </div>

        <div
          className={`fixed-top   ${isFixed ? "fixed-top-active px-10" : ""}`}
        >
          <div className={" container-fluid border-1 border-black "}>
            <div className="row">
              <div className="col-lg-4 border-end  border-black  d-flex justify-content-center">
                <h6 className="navbar-brand">PARTICULARS</h6>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center bg-green-700">
                <h6 className="navbar-brand text-white">2020</h6>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center  bg-green-700">
                <h6 className="navbar-brand text-white">2021</h6>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center  bg-green-700">
                <h6 className="navbar-brand text-white">2022</h6>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center  bg-green-700">
                <h6 className="navbar-brand text-white ">2023</h6>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center  bg-green-700">
                <h6 className="navbar-brand text-white">2024</h6>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center  bg-green-700">
                <h6 className="navbar-brand text-white">2025</h6>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center  bg-green-700">
                <h6 className="navbar-brand text-white">2026</h6>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center  bg-green-700">
                <h6 className="navbar-brand text-white">2027</h6>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 border-end  border-black  d-flex justify-content-center">
                <h6 className="navbar-brand"></h6>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <h6>Audited</h6>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <h6>Audited</h6>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <h6>Audited</h6>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <h6>Audited</h6>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <h6>Audited</h6>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <h6>Projected</h6>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <h6>Projected</h6>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <h6>Projected</h6>
              </div>
            </div>
          </div>
        </div>

        {/*---------------------------------------- OPERATING DATA -------------------------------------*/}

        <div className="container-fluid border-1 border-black mt-3">
          <div
            className="row"
            style={{ backgroundColor: "rgb(224, 231, 231)" }}
          >
            <div className="col-lg-4 border-end  border-black  d-flex justify-content-center">
              <h5>OPERATING DATA </h5>
            </div>
          </div>
        </div>

        <div className="container-fluid border-1 border-black mt-3">
          <div className="row">
            <div className="col-lg-4 border-end  border-black  d-flex justify-content-center">
              <h6>Net Sales</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B4_6"
                    value={sumB4_6}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="C4_6"
                    value={sumC4_6}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="D4_6"
                    value={sumD4_6}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="E4_6"
                    value={sumE4_6}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="F4_6"
                    value={sumF4_6}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="G4_6"
                    value={sumG4_6}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="H4_6"
                    value={sumH4_6}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="I4_6"
                    value={sumI4_6}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            {/* Add similar input fields for other years here */}
          </div>
        </div>

        <div className="container-fluid border-1 border-black mt-3">
          <div className="row">
            <div className="col-lg-4 border-end  border-black  d-flex justify-content-center">
              <h6>Consumption of Raw Materials</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B4_7"
                    value={sumB4_7}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="C4_7"
                    value={sumC4_7}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="D4_7"
                    value={sumD4_7}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="E4_7"
                    value={sumE4_7}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="F4_7"
                    value={sumF4_7}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="G4_7"
                    value={sumG4_7}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="H4_7"
                    value={sumH4_7}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="I4_7"
                    value={sumI4_7}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            {/* Add similar input fields for other years here */}
          </div>
        </div>
        <div className="container-fluid border-1 border-black mt-3">
          <div className="row">
            <div className="col-lg-4 border-end  border-black  d-flex justify-content-center">
              <h6>Cost Of Production</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B4_8"
                    value={sumB4_8}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="C4_8"
                    value={sumC4_8}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="D4_8"
                    value={sumD4_8}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="E4_8"
                    value={sumE4_8}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="F4_8"
                    value={sumF4_8}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="G4_8"
                    value={sumG4_8}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="H4_8"
                    value={sumH4_8}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="I4_8"
                    value={sumI4_8}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            {/* Add similar input fields for other years here */}
          </div>
        </div>
        <div className="container-fluid border-1 border-black mt-3">
          <div className="row">
            <div className="col-lg-4 border-end  border-black  d-flex justify-content-center">
              <h6>Cost of Sales</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B4_9"
                    value={sumB4_9}
                    onChange={changeData}
                  />

                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="C4_9"
                    value={sumC4_9}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="D4_9"
                    value={sumD4_9}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="E4_9"
                    value={sumE4_9}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="F4_9"
                    value={sumF4_9}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="G4_9"
                    value={sumG4_9}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="H4_9"
                    value={sumH4_9}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="I4_9"
                    value={sumI4_9}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            {/* Add similar input fields for other years here */}
          </div>
        </div>
        <div className="container-fluid border-1 border-black mt-3">
          <div className="row">
            <div className="col-lg-4 border-end  border-black  d-flex justify-content-center">
              <h6>Production at Sale Value</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B4_10"
                    value={sumB4_10}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="C4_10"
                    value={sumC4_10}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="D4_10"
                    value={sumD4_10}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="E4_10"
                    value={sumE4_10}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="F4_10"
                    value={sumF4_10}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="G4_10"
                    value={sumG4_10}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="H4_10"
                    value={sumH4_10}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="I4_10"
                    value={sumI4_10}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            {/* Add similar input fields for other years here */}
          </div>
        </div>
        <div className="container-fluid border-1 border-black mt-3">
          <div className="row">
            <div className="col-lg-4 border-end  border-black  d-flex justify-content-center">
              <h6>Cost of Production -Depn/Sales+inc</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B4_11"
                    value={sumB4_11}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="C4_11"
                    value={sumC4_11}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="D4_11"
                    value={sumD4_11}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="E4_11"
                    value={sumE4_11}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="F4_11"
                    value={sumF4_11}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="G4_11"
                    value={sumG4_11}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="H4_11"
                    value={sumH4_11}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="I4_11"
                    value={sumI4_11}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            {/* Add similar input fields for other years here */}
          </div>
        </div>
        <div className="container-fluid border-1 border-black mt-3">
          <div className="row">
            <div className="col-lg-4 border-end  border-black  d-flex justify-content-center">
              <h6>Cost of sales-Depn/Sales</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B4_12"
                    value={sumB4_12}
                    onChange={changeData}
                  />

                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="C4_12"
                    value={sumC4_12}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="D4_12"
                    value={sumD4_12}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="E4_12"
                    value={sumE4_12}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="F4_12"
                    value={sumF4_12}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="G4_12"
                    value={sumG4_12}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="H4_12"
                    value={sumH4_12}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="I4_12"
                    value={sumI4_12}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            {/* Add similar input fields for other years here */}
          </div>
        </div>
        <div className="container-fluid border-1 border-black mt-3">
          <div className="row">
            <div className="col-lg-4 border-end  border-black  d-flex justify-content-center">
              <h6>RM/Production Sales %</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B4_13"
                    value={sumB4_13}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="C4_13"
                    value={sumC4_13}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="D4_13"
                    value={sumD4_13}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="E4_13"
                    value={sumE4_13}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="F4_13"
                    value={sumF4_13}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="G4_13"
                    value={sumG4_13}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="H4_13"
                    value={sumH4_13}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="I4_13"
                    value={sumI4_13}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            {/* Add similar input fields for other years here */}
          </div>
        </div>

        <div className="container-fluid border-1 border-black mt-3">
          <div className="row">
            <div className="col-lg-4 border-end  border-black  d-flex justify-content-center">
              <h6>Net Profit / Sales %</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B4_14"
                    value={sumB4_14}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="C4_14"
                    value={sumC4_14}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="D4_14"
                    value={sumD4_14}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="E4_14"
                    value={sumE4_14}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="F4_14"
                    value={sumF4_14}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="G4_14"
                    value={sumG4_14}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="H4_14"
                    value={sumH4_14}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="I4_14"
                    value={sumI4_14}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            {/* Add similar input fields for other years here */}
          </div>
        </div>

        <div className="container-fluid border-1 border-black mt-3">
          <div className="row">
            <div className="col-lg-4 border-end  border-black  d-flex justify-content-center">
              <h6>Operating Cost / Cost of Sales %</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B4_15"
                    value={sumB4_15}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="C4_15"
                    value={sumC4_15}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="D4_15"
                    value={sumD4_15}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="E4_15"
                    value={sumE4_15}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="F4_15"
                    value={sumF4_15}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="G4_15"
                    value={sumG4_15}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="H4_15"
                    value={sumH4_15}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="I4_15"
                    value={sumI4_15}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            {/* Add similar input fields for other years here */}
          </div>
        </div>

        <div className="container-fluid border-1 border-black mt-3">
          <div className="row">
            <div className="col-lg-4 border-end  border-black  d-flex justify-content-center">
              <h6>Mfg Exp / Cost of Sales %</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B4_16"
                    value={sumB4_16}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="C4_16"
                    value={sumC4_16}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="D4_16"
                    value={sumD4_16}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="E4_16"
                    value={sumE4_16}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="F4_16"
                    value={sumF4_16}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="G4_16"
                    value={sumG4_16}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="H4_16"
                    value={sumH4_16}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="I4_16"
                    value={sumI4_16}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            {/* Add similar input fields for other years here */}
          </div>
        </div>

        <div className="container-fluid border-1 border-black mt-3">
          <div className="row">
            <div className="col-lg-4 border-end  border-black  d-flex justify-content-center">
              <h6>Selling/Admn Exp/Cost of Sales %</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B4_17"
                    value={sumB4_17}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="C4_17"
                    value={sumC4_17}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="D4_17"
                    value={sumD4_17}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="E4_17"
                    value={sumE4_17}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="F4_17"
                    value={sumF4_17}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="G4_17"
                    value={sumG4_17}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="H4_17"
                    value={sumH4_17}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="I4_17"
                    value={sumI4_17}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            {/* Add similar input fields for other years here */}
          </div>
        </div>

        <div className="container-fluid border-1 border-black mt-3">
          <div className="row">
            <div className="col-lg-4 border-end  border-black  d-flex justify-content-center">
              <h6>Fin. Charges / Cost of Sales %</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B4_18"
                    value={sumB4_18}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="C4_18"
                    value={sumC4_18}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="D4_18"
                    value={sumD4_18}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="E4_18"
                    value={sumE4_18}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="F4_18"
                    value={sumF4_18}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="G4_18"
                    value={sumG4_18}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="H4_18"
                    value={sumH4_18}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="I4_18"
                    value={sumI4_18}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            {/* Add similar input fields for other years here */}
          </div>
        </div>

        {/*---------------------------------------- FINANCIAL INDICATORS -------------------------------------*/}

        <div className="container-fluid border-1 border-black mt-3">
          <div
            className="row"
            style={{ backgroundColor: "rgb(224, 231, 231)" }}
          >
            <div className="col-lg-4 border-end  border-black  d-flex justify-content-center">
              <h5>FINANCIAL INDICATORS</h5>
            </div>
          </div>
        </div>
        <div className="container-fluid border-1 border-black mt-3">
          <div className="row">
            <div className="col-lg-4 border-end  border-black  d-flex justify-content-center">
              <h6>Tangible Net Worth(TNW)</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B4_21"
                    value={sumB4_21}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="C4_21"
                    value={sumC4_21}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="D4_21"
                    value={sumD4_21}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="E4_21"
                    value={sumE4_21}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="F4_21"
                    value={sumF4_21}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="G4_21"
                    value={sumG4_21}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="H4_21"
                    value={sumH4_21}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="I4_21"
                    value={sumI4_21}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
            {/* Add similar input fields for other years here */}
          </div>
        </div>
        <div className="container-fluid border-1 border-black mt-3">
          <div className="row">
            <div className="col-lg-4 border-end  border-black  d-flex justify-content-center">
              <h6>Increase / Decrease</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B4_22"
                    value={inputValues.B4_22}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="C4_22"
                    value={sumC4_22}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="D4_22"
                    value={sumD4_22}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="E4_22"
                    value={sumE4_22}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="F4_22"
                    value={sumF4_22}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="G4_22"
                    value={sumG4_22}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="H4_22"
                    value={sumH4_22}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="I4_22"
                    value={sumI4_22}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
            {/* Add similar input fields for other years here */}
          </div>
        </div>

        <div className="container-fluid border-1 border-black mt-3">
          <div className="row">
            <div className="col-lg-4 border-end  border-black  d-flex justify-content-center">
              <h6>TNW (Adjusted)</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B4_23"
                    value={sumB4_23}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="C4_23"
                    value={sumC4_23}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="D4_23"
                    value={sumD4_23}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="E4_23"
                    value={sumE4_23}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="F4_23"
                    value={sumF4_23}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="G4_23"
                    value={sumG4_23}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="H4_23"
                    value={sumH4_23}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="I4_23"
                    value={sumI4_23}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            {/* Add similar input fields for other years here */}
          </div>
        </div>
        <div className="container-fluid border-1 border-black mt-3">
          <div className="row">
            <div className="col-lg-4 border-end  border-black  d-flex justify-content-center">
              <h6>TNW (Quasi Equity)</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B4_24"
                    value={sumB4_24}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="C4_24"
                    value={sumC4_24}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="D4_24"
                    value={sumD4_24}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="E4_24"
                    value={sumE4_24}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="F4_24"
                    value={sumF4_24}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="G4_24"
                    value={sumG4_24}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="H4_24"
                    value={sumH4_24}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="I4_24"
                    value={sumI4_24}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid border-1 border-black mt-3">
          <div className="row">
            <div className="col-lg-4 border-end  border-black  d-flex justify-content-center">
              <h6>Net Working Capital(NWC)</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B4_25"
                    value={sumB4_25}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="C4_25"
                    value={sumC4_25}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="D4_25"
                    value={sumD4_25}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="E4_25"
                    value={sumE4_25}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="F4_25"
                    value={sumF4_25}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="G4_25"
                    value={sumG4_25}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="H4_25"
                    value={sumH4_25}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="I4_25"
                    value={sumI4_25}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            {/* Add similar input fields for other years here */}
          </div>
        </div>

        <div className="container-fluid border-1 border-black mt-3">
          <div className="row">
            <div className="col-lg-4 border-end  border-black  d-flex justify-content-center">
              <h6>Increase / Decrease</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B4_26"
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="C4_26"
                    value={sumC4_26}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="D4_26"
                    value={sumD4_26}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="E4_26"
                    value={sumE4_26}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="F4_26"
                    value={sumF4_26}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="G4_26"
                    value={sumG4_26}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="H4_26"
                    value={sumH4_26}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="I4_26"
                    value={sumI4_26}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            {/* Add similar input fields for other years here */}
          </div>
        </div>

        <div className="container-fluid border-1 border-black mt-3">
          <div className="row">
            <div className="col-lg-4 border-end  border-black  d-flex justify-content-center">
              <h6>Current Ratio</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B4_27"
                    value={sumB4_27}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="C4_27"
                    value={sumC4_27}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="D4_27"
                    value={sumD4_27}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="E4_27"
                    value={sumE4_27}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="F4_27"
                    value={sumF4_27}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="G4_27"
                    value={sumG4_27}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="H4_27"
                    value={sumH4_27}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="I4_27"
                    value={sumI4_27}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            {/* Add similar input fields for other years here */}
          </div>
        </div>

        <div className="container-fluid border-1 border-black mt-3">
          <div className="row">
            <div className="col-lg-4 border-end  border-black  d-flex justify-content-center">
              <h6>TOL / T N W</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B4_28"
                    value={sumB4_28}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="C4_28"
                    value={sumC4_28}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="D4_28"
                    value={sumD4_28}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="E4_28"
                    value={sumE4_28}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="F4_28"
                    value={sumF4_28}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="G4_28"
                    value={sumG4_28}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="H4_28"
                    value={sumH4_28}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="I4_28"
                    value={sumI4_28}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            {/* Add similar input fields for other years here */}
          </div>
        </div>

        <div className="container-fluid border-1 border-black mt-3">
          <div className="row">
            <div className="col-lg-4 border-end  border-black  d-flex justify-content-center">
              <h6>TOL / T N W(Quasi Equity)</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B4_29"
                    value={sumB4_29}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="C4_29"
                    value={sumC4_29}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="D4_29"
                    value={sumD4_29}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="E4_29"
                    value={sumE4_29}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="F4_29"
                    value={sumF4_29}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="G4_29"
                    value={sumG4_29}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="H4_29"
                    value={sumH4_29}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="I4_29"
                    value={sumI4_29}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            {/* Add similar input fields for other years here */}
          </div>
        </div>

        <div className="container-fluid border-1 border-black mt-3">
          <div className="row">
            <div className="col-lg-4 border-end  border-black  d-flex justify-content-center">
              <h6>TOL / T N W(Adjusted)</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B4_30"
                    value={sumB4_30}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="C4_30"
                    value={sumC4_30}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="D4_30"
                    value={sumD4_30}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="E4_30"
                    value={sumE4_30}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="F4_30"
                    value={sumF4_30}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="G4_30"
                    value={sumG4_30}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="H4_30"
                    value={sumH4_30}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="I4_30"
                    value={sumI4_30}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            {/* Add similar input fields for other years here */}
          </div>
        </div>

        <div className="container-fluid border-1 border-black mt-3">
          <div className="row">
            <div className="col-lg-4 border-end  border-black  d-flex justify-content-center">
              <h6 style={{ color: "red" }}>Funded Debt / T N W</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B4_31"
                    value={sumB4_31}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="C4_31"
                    value={sumC4_31}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="D4_31"
                    value={sumD4_31}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="E4_31"
                    value={sumE4_31}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="F4_31"
                    value={sumF4_31}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="G4_31"
                    value={sumG4_31}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="H4_31"
                    value={sumH4_31}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="I4_31"
                    value={sumI4_31}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            {/* Add similar input fields for other years here */}
          </div>
        </div>

        {/*---------------------------------------- PROFITABILITY RATIOS -------------------------------------*/}

        <div className="container-fluid border-1 border-black mt-3">
          <div
            className="row"
            style={{ backgroundColor: "rgb(224, 231, 231)" }}
          >
            <div className="col-lg-4 border-end  border-black  d-flex justify-content-center">
              <h5>PROFITABILITY RATIOS </h5>
            </div>
          </div>
        </div>

        <div className="container-fluid border-1 border-black mt-3">
          <div className="row">
            <div className="col-lg-4 border-end  border-black  d-flex justify-content-center">
              <h6>NET SALES</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B4_34"
                    value={sumB4_34}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="C4_34"
                    value={sumC4_34}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="D4_34"
                    value={sumD4_34}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="E4_34"
                    value={sumE4_34}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="F4_34"
                    value={sumF4_34}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="G4_34"
                    value={sumG4_34}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="H4_34"
                    value={sumH4_34}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="I4_34"
                    value={sumI4_34}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
            {/* Add similar input fields for other years here */}
          </div>
        </div>
        <div className="container-fluid border-1 border-black mt-3">
          <div className="row">
            <div className="col-lg-4 border-end  border-black  d-flex justify-content-center">
              <h6>% rise (+) / fall(-) in sales</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B4_35"
                    value={inputValues.B4_35}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="C4_35"
                    value={sumC4_35}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="D4_35"
                    value={sumD4_35}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="E4_35"
                    value={sumE4_35}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="F4_35"
                    value={sumF4_35}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="G4_35"
                    value={sumG4_35}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="H4_35"
                    value={sumH4_35}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="I4_35"
                    value={sumI4_35}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
            {/* Add similar input fields for other years here */}
          </div>
        </div>
        <div className="container-fluid border-1 border-black mt-3">
          <div className="row">
            <div className="col-lg-4 border-end  border-black  d-flex justify-content-center">
              <h6>Operating Profit</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B4_36"
                    value={sumB4_36}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="C4_36"
                    value={sumC4_36}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="D4_36"
                    value={sumD4_36}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="E4_36"
                    value={sumE4_36}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="F4_36"
                    value={sumF4_36}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="G4_36"
                    value={sumG4_36}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="H4_36"
                    value={sumH4_36}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="I4_36"
                    value={sumI4_36}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid border-1 border-black mt-3">
          <div className="row">
            <div className="col-lg-4 border-end  border-black  d-flex justify-content-center">
              <h6>PBDIT</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B4_37"
                    value={sumB4_37}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="C4_37"
                    value={sumC4_37}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="D4_37"
                    value={sumD4_37}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="E4_37"
                    value={sumE4_37}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="F4_37"
                    value={sumF4_37}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="G4_37"
                    value={sumG4_37}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="H4_37"
                    value={sumH4_37}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="I4_37"
                    value={sumI4_37}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid border-1 border-black mt-3">
          <div className="row">
            <div className="col-lg-4 border-end  border-black  d-flex justify-content-center">
              <h6>NET PROFIT</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B4_38"
                    value={sumB4_38}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="C4_38"
                    value={sumC4_38}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="D4_38"
                    value={sumD4_38}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="E4_38"
                    value={sumE4_38}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="F4_38"
                    value={sumF4_38}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="G4_38"
                    value={sumG4_38}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="H4_38"
                    value={sumH4_38}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="I4_38"
                    value={sumI4_38}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid border-1 border-black mt-3">
          <div className="row">
            <div className="col-lg-4 border-end  border-black  d-flex justify-content-center">
              <h6>Depreciation</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B4_39"
                    value={sumB4_39}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="C4_39"
                    value={sumC4_39}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="D4_39"
                    value={sumD4_39}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="E4_39"
                    value={sumE4_39}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="F4_39"
                    value={sumF4_39}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="G4_39"
                    value={sumG4_39}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="H4_39"
                    value={sumH4_39}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="I4_39"
                    value={sumI4_39}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            {/* Add similar input fields for other years here */}
          </div>
        </div>

        <div className="container-fluid border-1 border-black mt-3">
          <div className="row">
            <div className="col-lg-4 border-end  border-black  d-flex justify-content-center">
              <h6>Cash accruals</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B4_40"
                    value={sumB4_40}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="C4_40"
                    value={sumC4_40}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="D4_40"
                    value={sumD4_40}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="E4_40"
                    value={sumE4_40}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="F4_40"
                    value={sumF4_40}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="G4_40"
                    value={sumG4_40}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="H4_40"
                    value={sumH4_40}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="I4_40"
                    value={sumI4_40}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            {/* Add similar input fields for other years here */}
          </div>
        </div>
        <div className="container-fluid border-1 border-black mt-3">
          <div className="row">
            <div className="col-lg-4 border-end  border-black  d-flex justify-content-center">
              <h6>PBDIT / Sales%</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B4_41"
                    value={sumB4_41}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="C4_41"
                    value={sumC4_41}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="D4_41"
                    value={sumD4_41}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="E4_41"
                    value={sumE4_41}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="F4_41"
                    value={sumF4_41}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="G4_41"
                    value={sumG4_41}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="H4_41"
                    value={sumH4_41}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="I4_41"
                    value={sumI4_41}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            {/* Add similar input fields for other years here */}
          </div>
        </div>
        <div className="container-fluid border-1 border-black mt-3">
          <div className="row">
            <div className="col-lg-4 border-end  border-black  d-flex justify-content-center">
              <h6>Operating Cost / Sales(%)</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B4_42"
                    value={sumB4_42}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="C4_42"
                    value={sumC4_42}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="D4_42"
                    value={sumD4_42}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="E4_42"
                    value={sumE4_42}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="F4_42"
                    value={sumF4_42}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="G4_42"
                    value={sumG4_42}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="H4_42"
                    value={sumH4_42}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="I4_42"
                    value={sumI4_42}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            {/* Add similar input fields for other years here */}
          </div>
        </div>
        <div className="container-fluid border-1 border-black mt-3">
          <div className="row">
            <div className="col-lg-4 border-end  border-black  d-flex justify-content-center">
              <h6>Net Profile / Sales(%)</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B4_43"
                    value={sumB4_43}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="C4_43"
                    value={sumC4_43}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="D4_43"
                    value={sumD4_43}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="E4_43"
                    value={sumE4_43}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="F4_43"
                    value={sumF4_43}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="G4_43"
                    value={sumG4_43}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="H4_43"
                    value={sumH4_43}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="I4_43"
                    value={sumI4_43}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            {/* Add similar input fields for other years here */}
          </div>
        </div>
        <div className="container-fluid border-1 border-black mt-3">
          <div className="row">
            <div className="col-lg-4 border-end  border-black  d-flex justify-content-center">
              <h6>Net Profit / TNW (%)</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B4_44"
                    value={sumB4_44}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="C4_44"
                    value={sumC4_44}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="D4_44"
                    value={sumD4_44}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="E4_44"
                    value={sumE4_44}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="F4_44"
                    value={sumF4_44}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="G4_44"
                    value={sumG4_44}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="H4_44"
                    value={sumH4_44}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="I4_44"
                    value={sumI4_44}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            {/* Add similar input fields for other years here */}
          </div>
        </div>
        <div className="container-fluid border-1 border-black mt-3">
          <div className="row">
            <div className="col-lg-4 border-end  border-black  d-flex justify-content-center">
              <h6>Sales / T N W</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B4_45"
                    value={sumB4_45}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="C4_45"
                    value={sumC4_45}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="D4_45"
                    value={sumD4_45}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="E4_45"
                    value={sumE4_45}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="F4_45"
                    value={sumF4_45}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="G4_45"
                    value={sumG4_45}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="H4_45"
                    value={sumH4_45}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="I4_45"
                    value={sumI4_45}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            {/* Add similar input fields for other years here */}
          </div>
        </div>

        {/*---------------------------------------- BANK FINANCE -------------------------------------*/}

        <div className="container-fluid border-1 border-black mt-3">
          <div
            className="row"
            style={{ backgroundColor: "rgb(224, 231, 231)" }}
          >
            <div className="col-lg-4 border-end  border-black  d-flex justify-content-center">
              <h5>BANK FINANCE</h5>
            </div>
          </div>
        </div>
        <div className="container-fluid border-1 border-black mt-3">
          <div className="row">
            <div className="col-lg-4 border-end  border-black  d-flex justify-content-center">
              <h6>TOTAL BANK BORROWINGS</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B4_48"
                    value={sumB4_48}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="C4_48"
                    value={sumC4_48}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="D4_48"
                    value={sumD4_48}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="E4_48"
                    value={sumE4_48}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="F4_48"
                    value={sumF4_48}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="G4_48"
                    value={sumG4_48}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="H4_48"
                    value={sumH4_48}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="I4_48"
                    value={sumI4_48}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            {/* Add similar input fields for other years here */}
          </div>
        </div>
        <div className="container-fluid border-1 border-black mt-3">
          <div className="row">
            <div className="col-lg-4 border-end  border-black  d-flex justify-content-center">
              <h6>Inc / dec in Bank Borrowings%</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B4_49"
                    value={sumB4_49}
                    onChange={changeData}
                  />

                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="C4_49"
                    value={sumC4_49}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="D4_49"
                    value={sumD4_49}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="E4_49"
                    value={sumE4_49}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="F4_49"
                    value={sumF4_49}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="G4_49"
                    value={sumG4_49}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="H4_49"
                    value={sumH4_49}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="I4_49"
                    value={sumI4_49}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            {/* Add similar input fields for other years here */}
          </div>
        </div>
        <div className="container-fluid border-1 border-black mt-3">
          <div className="row">
            <div className="col-lg-4 border-end  border-black  d-flex justify-content-center">
              <h6>Bank Finance / Current Assets</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B4_50"
                    value={sumB4_50}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="C4_50"
                    value={sumC4_50}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="D4_50"
                    value={sumD4_50}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="E4_50"
                    value={sumE4_50}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="F4_50"
                    value={sumF4_50}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="G4_50"
                    value={sumG4_50}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="H4_50"
                    value={sumH4_50}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="I4_50"
                    value={sumI4_50}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            {/* Add similar input fields for other years here */}
          </div>
        </div>

        <div className="container-fluid border-1 border-black mt-3">
          <div className="row">
            <div className="col-lg-4 border-end  border-black  d-flex justify-content-center">
              <h6>Inc + Receivables / Sales (days)</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B4_51"
                    value={sumB4_51}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="C4_51"
                    value={sumC4_51}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="D4_51"
                    value={sumD4_51}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="E4_51"
                    value={sumE4_51}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="F4_51"
                    value={sumF4_51}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="G4_51"
                    value={sumG4_51}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="H4_51"
                    value={sumH4_51}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="I4_51"
                    value={sumI4_51}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            {/* Add similar input fields for other years here */}
          </div>
        </div>
        <div className="container-fluid border-1 border-black mt-3">
          <div className="row">
            <div className="col-lg-4 border-end  border-black  d-flex justify-content-center">
              <h6>PBDIT / Interest</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B4_52"
                    value={sumB4_52}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="C4_52"
                    value={sumC4_52}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="D4_52"
                    value={sumD4_52}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="E4_52"
                    value={sumE4_52}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="F4_52"
                    value={sumF4_52}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="G4_52"
                    value={sumG4_52}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="H4_52"
                    value={sumH4_52}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="I4_52"
                    value={sumI4_52}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            {/* Add similar input fields for other years here */}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Ratio;
