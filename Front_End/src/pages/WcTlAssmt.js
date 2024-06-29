// Opstmt.js
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import jwtDecode from 'jwt-decode'

import { AppContext } from "../AppContext";
import "../styles.css";
import Footer from "../views/Footer/footer";

import Navbarr from "../views/navbarr/Navbarr";

function WctlAssmt() {
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
    tot15,
    setTot15,
    tot31,
    sumB25,
    setSumB25,
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

    sumB19,
    setSumB19,
    sumC19,
    setSumC19,
    sumD19,
    setSumD19,
    sumE19,
    setSumE19,
    sumF19,
    setSumF19,
    sumG19,
    setSumG19,
    sumH19,
    setSumH19,
    sumI19,
    setSumI19,
    sumB21,
    setSumB21,
    sumC21,
    setSumC21,
    sumD21,
    setSumD21,
    sumE21,
    setSumE21,
    sumF21,
    setSumF21,
    sumG21,
    setSumG21,
    sumH21,
    setSumH21,
    sumI21,
    setSumI21,
    Cost42,

    sumB5_14,
    setSumB5_14,
    sumC5_14,
    setSumC5_14,
    sumD5_14,
    setSumD5_14,
    sumE5_14,
    setSumE5_14,
    sumF5_14,
    setSumF5_14,
    sumG5_14,
    setSumG5_14,
    sumH5_14,
    setSumH5_14,
    sumI5_14,
    setSumI5_14,

    sumB5_28,
    setSumB5_28,
    sumC5_28,
    setSumC5_28,
    sumD5_28,
    setSumD5_28,
    sumE5_28,
    setSumE5_28,
    sumF5_28,
    setSumF5_28,
    sumG5_28,
    setSumG5_28,
    sumH5_28,
    setSumH5_28,
    sumI5_28,
    setSumI5_28,

    sumB5_21,
    setSumB5_21,
    sumC5_21,
    setSumC5_21,
    sumD5_21,
    setSumD5_21,
    sumE5_21,
    setSumE5_21,
    sumF5_21,
    setSumF5_21,
    sumG5_21,
    setSumG5_21,
    sumH5_21,
    setSumH5_21,
    sumI5_21,
    setSumI5_21,

    sumB5_22,
    setSumB5_22,
    sumC5_22,
    setSumC5_22,
    sumD5_22,
    setSumD5_22,
    sumE5_22,
    setSumE5_22,
    sumF5_22,
    setSumF5_22,
    sumG5_22,
    setSumG5_22,
    sumH5_22,
    setSumH5_22,
    sumI5_22,
    setSumI5_22,

    sumB5_15,
    setSumB5_15,
    sumC5_15,
    setSumC5_15,
    sumD5_15,
    setSumD5_15,
    sumE5_15,
    setSumE5_15,
    sumF5_15,
    setSumF5_15,
    sumG5_15,
    setSumG5_15,
    sumH5_15,
    setSumH5_15,
    sumI5_15,
    setSumI5_15,

    sumB5_40,
    setSumB5_40,
    sumC5_40,
    setSumC5_40,
    sumD5_40,
    setSumD5_40,
    sumE5_40,
    setSumE5_40,
    sumF5_40,
    setSumF5_40,
    sumG5_40,
    setSumG5_40,
    sumH5_40,
    setSumH5_40,
    sumI5_40,
    setSumI5_40,

    sumB5_16,
    setSumB5_16,
    sumC5_16,
    setSumC5_16,
    sumD5_16,
    setSumD5_16,
    sumE5_16,
    setSumE5_16,
    sumF5_16,
    setSumF5_16,
    sumG5_16,
    setSumG5_16,
    sumH5_16,
    setSumH5_16,
    sumI5_16,
    setSumI5_16,

    sumB5_10,
    setSumB5_10,
    sumC5_10,
    setSumC5_10,
    sumD5_10,
    setSumD5_10,
    sumE5_10,
    setSumE5_10,
    sumF5_10,
    setSumF5_10,
    sumG5_10,
    setSumG5_10,
    sumH5_10,
    setSumH5_10,
    sumI5_10,
    setSumI5_10,

    sumB5_11,
    setSumB5_11,
    sumC5_11,
    setSumC5_11,
    sumD5_11,
    setSumD5_11,
    sumE5_11,
    setSumE5_11,
    sumF5_11,
    setSumF5_11,
    sumG5_11,
    setSumG5_11,
    sumH5_11,
    setSumH5_11,
    sumI5_11,
    setSumI5_11,
  } = useContext(AppContext);

  const [sumB5_6, setSumB5_6] = useState(0);
  const [sumC5_6, setSumC5_6] = useState(0);
  const [sumD5_6, setSumD5_6] = useState(0);
  const [sumE5_6, setSumE5_6] = useState(0);
  const [sumF5_6, setSumF5_6] = useState(0);
  const [sumG5_6, setSumG5_6] = useState(0);
  const [sumH5_6, setSumH5_6] = useState(0);
  const [sumI5_6, setSumI5_6] = useState(0);

  const [sumB5_7, setSumB5_7] = useState(0);
  const [sumC5_7, setSumC5_7] = useState(0);
  const [sumD5_7, setSumD5_7] = useState(0);
  const [sumE5_7, setSumE5_7] = useState(0);
  const [sumF5_7, setSumF5_7] = useState(0);
  const [sumG5_7, setSumG5_7] = useState(0);
  const [sumH5_7, setSumH5_7] = useState(0);
  const [sumI5_7, setSumI5_7] = useState(0);

  const [sumB5_8, setSumB5_8] = useState(0);
  const [sumC5_8, setSumC5_8] = useState(0);
  const [sumD5_8, setSumD5_8] = useState(0);
  const [sumE5_8, setSumE5_8] = useState(0);
  const [sumF5_8, setSumF5_8] = useState(0);
  const [sumG5_8, setSumG5_8] = useState(0);
  const [sumH5_8, setSumH5_8] = useState(0);
  const [sumI5_8, setSumI5_8] = useState(0);

  const [sumB5_9, setSumB5_9] = useState(0);
  const [sumC5_9, setSumC5_9] = useState(0);
  const [sumD5_9, setSumD5_9] = useState(0);
  const [sumE5_9, setSumE5_9] = useState(0);
  const [sumF5_9, setSumF5_9] = useState(0);
  const [sumG5_9, setSumG5_9] = useState(0);
  const [sumH5_9, setSumH5_9] = useState(0);
  const [sumI5_9, setSumI5_9] = useState(0);

  const [sumB5_12, setSumB5_12] = useState(0);
  const [sumC5_12, setSumC5_12] = useState(0);
  const [sumD5_12, setSumD5_12] = useState(0);
  const [sumE5_12, setSumE5_12] = useState(0);
  const [sumF5_12, setSumF5_12] = useState(0);
  const [sumG5_12, setSumG5_12] = useState(0);
  const [sumH5_12, setSumH5_12] = useState(0);
  const [sumI5_12, setSumI5_12] = useState(0);

  const [sumB5_13, setSumB5_13] = useState(0);
  const [sumC5_13, setSumC5_13] = useState(0);
  const [sumD5_13, setSumD5_13] = useState(0);
  const [sumE5_13, setSumE5_13] = useState(0);
  const [sumF5_13, setSumF5_13] = useState(0);
  const [sumG5_13, setSumG5_13] = useState(0);
  const [sumH5_13, setSumH5_13] = useState(0);
  const [sumI5_13, setSumI5_13] = useState(0);

  const [sumB5_17, setSumB5_17] = useState(0);
  const [sumC5_17, setSumC5_17] = useState(0);
  const [sumD5_17, setSumD5_17] = useState(0);
  const [sumE5_17, setSumE5_17] = useState(0);
  const [sumF5_17, setSumF5_17] = useState(0);
  const [sumG5_17, setSumG5_17] = useState(0);
  const [sumH5_17, setSumH5_17] = useState(0);
  const [sumI5_17, setSumI5_17] = useState(0);

  const [sumB5_18, setSumB5_18] = useState(0);
  const [sumC5_18, setSumC5_18] = useState(0);
  const [sumD5_18, setSumD5_18] = useState(0);
  const [sumE5_18, setSumE5_18] = useState(0);
  const [sumF5_18, setSumF5_18] = useState(0);
  const [sumG5_18, setSumG5_18] = useState(0);
  const [sumH5_18, setSumH5_18] = useState(0);
  const [sumI5_18, setSumI5_18] = useState(0);

  const [sumB5_23, setSumB5_23] = useState(0);
  const [sumC5_23, setSumC5_23] = useState(0);
  const [sumD5_23, setSumD5_23] = useState(0);
  const [sumE5_23, setSumE5_23] = useState(0);
  const [sumF5_23, setSumF5_23] = useState(0);
  const [sumG5_23, setSumG5_23] = useState(0);
  const [sumH5_23, setSumH5_23] = useState(0);
  const [sumI5_23, setSumI5_23] = useState(0);

  const [sumB5_24, setSumB5_24] = useState(0);
  const [sumC5_24, setSumC5_24] = useState(0);
  const [sumD5_24, setSumD5_24] = useState(0);
  const [sumE5_24, setSumE5_24] = useState(0);
  const [sumF5_24, setSumF5_24] = useState(0);
  const [sumG5_24, setSumG5_24] = useState(0);
  const [sumH5_24, setSumH5_24] = useState(0);
  const [sumI5_24, setSumI5_24] = useState(0);

  const [sumB5_26, setSumB5_26] = useState(0);
  const [sumC5_26, setSumC5_26] = useState(0);
  const [sumD5_26, setSumD5_26] = useState(0);
  const [sumE5_26, setSumE5_26] = useState(0);
  const [sumF5_26, setSumF5_26] = useState(0);
  const [sumG5_26, setSumG5_26] = useState(0);
  const [sumH5_26, setSumH5_26] = useState(0);
  const [sumI5_26, setSumI5_26] = useState(0);

  const [sumB5_27, setSumB5_27] = useState(0);
  const [sumC5_27, setSumC5_27] = useState(0);
  const [sumD5_27, setSumD5_27] = useState(0);
  const [sumE5_27, setSumE5_27] = useState(0);
  const [sumF5_27, setSumF5_27] = useState(0);
  const [sumG5_27, setSumG5_27] = useState(0);
  const [sumH5_27, setSumH5_27] = useState(0);
  const [sumI5_27, setSumI5_27] = useState(0);

  const [sumB5_29, setSumB5_29] = useState(0);
  const [sumC5_29, setSumC5_29] = useState(0);
  const [sumD5_29, setSumD5_29] = useState(0);
  const [sumE5_29, setSumE5_29] = useState(0);
  const [sumF5_29, setSumF5_29] = useState(0);
  const [sumG5_29, setSumG5_29] = useState(0);
  const [sumH5_29, setSumH5_29] = useState(0);
  const [sumI5_29, setSumI5_29] = useState(0);

  const [sumB5_30, setSumB5_30] = useState(0);
  const [sumC5_30, setSumC5_30] = useState(0);
  const [sumD5_30, setSumD5_30] = useState(0);
  const [sumE5_30, setSumE5_30] = useState(0);
  const [sumF5_30, setSumF5_30] = useState(0);
  const [sumG5_30, setSumG5_30] = useState(0);
  const [sumH5_30, setSumH5_30] = useState(0);
  const [sumI5_30, setSumI5_30] = useState(0);

  const [sumB5_31, setSumB5_31] = useState(0);
  const [sumC5_31, setSumC5_31] = useState(0);
  const [sumD5_31, setSumD5_31] = useState(0);
  const [sumE5_31, setSumE5_31] = useState(0);
  const [sumF5_31, setSumF5_31] = useState(0);
  const [sumG5_31, setSumG5_31] = useState(0);
  const [sumH5_31, setSumH5_31] = useState(0);
  const [sumI5_31, setSumI5_31] = useState(0);

  const [sumB5_33, setSumB5_33] = useState(0);
  const [sumC5_33, setSumC5_33] = useState(0);
  const [sumD5_33, setSumD5_33] = useState(0);
  const [sumE5_33, setSumE5_33] = useState(0);
  const [sumF5_33, setSumF5_33] = useState(0);
  const [sumG5_33, setSumG5_33] = useState(0);
  const [sumH5_33, setSumH5_33] = useState(0);
  const [sumI5_33, setSumI5_33] = useState(0);

  const [sumB5_37, setSumB5_37] = useState(0);
  const [sumC5_37, setSumC5_37] = useState(0);
  const [sumD5_37, setSumD5_37] = useState(0);
  const [sumE5_37, setSumE5_37] = useState(0);
  const [sumF5_37, setSumF5_37] = useState(0);
  const [sumG5_37, setSumG5_37] = useState(0);
  const [sumH5_37, setSumH5_37] = useState(0);
  const [sumI5_37, setSumI5_37] = useState(0);

  const [sumB5_38, setSumB5_38] = useState(0);
  const [sumC5_38, setSumC5_38] = useState(0);
  const [sumD5_38, setSumD5_38] = useState(0);
  const [sumE5_38, setSumE5_38] = useState(0);
  const [sumF5_38, setSumF5_38] = useState(0);
  const [sumG5_38, setSumG5_38] = useState(0);
  const [sumH5_38, setSumH5_38] = useState(0);
  const [sumI5_38, setSumI5_38] = useState(0);

  const [sumB5_39, setSumB5_39] = useState(0);
  const [sumC5_39, setSumC5_39] = useState(0);
  const [sumD5_39, setSumD5_39] = useState(0);
  const [sumE5_39, setSumE5_39] = useState(0);
  const [sumF5_39, setSumF5_39] = useState(0);
  const [sumG5_39, setSumG5_39] = useState(0);
  const [sumH5_39, setSumH5_39] = useState(0);
  const [sumI5_39, setSumI5_39] = useState(0);

  const [sumB5_41, setSumB5_41] = useState(0);
  const [sumC5_41, setSumC5_41] = useState(0);
  const [sumD5_41, setSumD5_41] = useState(0);
  const [sumE5_41, setSumE5_41] = useState(0);
  const [sumF5_41, setSumF5_41] = useState(0);
  const [sumG5_41, setSumG5_41] = useState(0);
  const [sumH5_41, setSumH5_41] = useState(0);
  const [sumI5_41, setSumI5_41] = useState(0);

  const [sumB5_42, setSumB5_42] = useState(0);
  const [sumC5_42, setSumC5_42] = useState(0);
  const [sumD5_42, setSumD5_42] = useState(0);
  const [sumE5_42, setSumE5_42] = useState(0);
  const [sumF5_42, setSumF5_42] = useState(0);
  const [sumG5_42, setSumG5_42] = useState(0);
  const [sumH5_42, setSumH5_42] = useState(0);
  const [sumI5_42, setSumI5_42] = useState(0);

  const [sumB5_43, setSumB5_43] = useState(0);
  const [sumC5_43, setSumC5_43] = useState(0);
  const [sumD5_43, setSumD5_43] = useState(0);
  const [sumE5_43, setSumE5_43] = useState(0);
  const [sumF5_43, setSumF5_43] = useState(0);
  const [sumG5_43, setSumG5_43] = useState(0);
  const [sumH5_43, setSumH5_43] = useState(0);
  const [sumI5_43, setSumI5_43] = useState(0);

  const [sumB5_44, setSumB5_44] = useState(0);
  const [sumC5_44, setSumC5_44] = useState(0);
  const [sumD5_44, setSumD5_44] = useState(0);
  const [sumE5_44, setSumE5_44] = useState(0);
  const [sumF5_44, setSumF5_44] = useState(0);
  const [sumG5_44, setSumG5_44] = useState(0);
  const [sumH5_44, setSumH5_44] = useState(0);
  const [sumI5_44, setSumI5_44] = useState(0);

  const [sumB5_45, setSumB5_45] = useState(0);
  const [sumC5_45, setSumC5_45] = useState(0);
  const [sumD5_45, setSumD5_45] = useState(0);
  const [sumE5_45, setSumE5_45] = useState(0);
  const [sumF5_45, setSumF5_45] = useState(0);
  const [sumG5_45, setSumG5_45] = useState(0);
  const [sumH5_45, setSumH5_45] = useState(0);
  const [sumI5_45, setSumI5_45] = useState(0);

  const [sumB5_46, setSumB5_46] = useState(0);
  const [sumC5_46, setSumC5_46] = useState(0);
  const [sumD5_46, setSumD5_46] = useState(0);
  const [sumE5_46, setSumE5_46] = useState(0);
  const [sumF5_46, setSumF5_46] = useState(0);
  const [sumG5_46, setSumG5_46] = useState(0);
  const [sumH5_46, setSumH5_46] = useState(0);
  const [sumI5_46, setSumI5_46] = useState(0);

  const [sumB5_47, setSumB5_47] = useState(0);
  const [sumC5_47, setSumC5_47] = useState(0);
  const [sumD5_47, setSumD5_47] = useState(0);
  const [sumE5_47, setSumE5_47] = useState(0);
  const [sumF5_47, setSumF5_47] = useState(0);
  const [sumG5_47, setSumG5_47] = useState(0);
  const [sumH5_47, setSumH5_47] = useState(0);
  const [sumI5_47, setSumI5_47] = useState(0);

  const [sumB5_48, setSumB5_48] = useState(0);
  const [sumC5_48, setSumC5_48] = useState(0);
  const [sumD5_48, setSumD5_48] = useState(0);
  const [sumE5_48, setSumE5_48] = useState(0);
  const [sumF5_48, setSumF5_48] = useState(0);
  const [sumG5_48, setSumG5_48] = useState(0);
  const [sumH5_48, setSumH5_48] = useState(0);
  const [sumI5_48, setSumI5_48] = useState(0);

  const [sumB5_49, setSumB5_49] = useState(0);
  const [sumC5_49, setSumC5_49] = useState(0);
  const [sumD5_49, setSumD5_49] = useState(0);
  const [sumE5_49, setSumE5_49] = useState(0);
  const [sumF5_49, setSumF5_49] = useState(0);
  const [sumG5_49, setSumG5_49] = useState(0);
  const [sumH5_49, setSumH5_49] = useState(0);
  const [sumI5_49, setSumI5_49] = useState(0);

  const calculateValue = (numeratorKey, denominatorKey, multiplier) => {
    const numerator = parseFloat(inputValues[numeratorKey] || 0);
    const denominator = parseFloat(inputValues[denominatorKey] || 0);
    return denominator !== 0 ? (numerator / denominator) * multiplier : 0;
  };

  //------------------------------------------------ MAIN FUNCION2 ---------------------------------------------

  const uploadData = async (cell_id, cell_value) => {
    try {
      const user_id = localStorage.getItem("user_id");
      const res = await fetch("http://127.0.0.1:8000/api/save_wctl/", {
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
        const res = await fetch("http://127.0.0.1:8000/api/save_wctl/", {
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

  const updateB5_6 = () => {
    setSumB5_6(calculateTotal([0]) + parseFloat(inputValues["B1_25"] || 0));
    setSumC5_6(calculateTotal([0]) + parseFloat(inputValues["C1_25"] || 0));
    setSumD5_6(calculateTotal([0]) + parseFloat(inputValues["D1_25"] || 0));
    setSumE5_6(calculateTotal([0]) + parseFloat(inputValues["E1_25"] || 0));
    setSumF5_6(calculateTotal([0]) + parseFloat(inputValues["F1_25"] || 0));
    setSumG5_6(calculateTotal([0]) + parseFloat(inputValues["G1_25"] || 0));
    setSumH5_6(calculateTotal([0]) + parseFloat(inputValues["H1_25"] || 0));
    setSumI5_6(calculateTotal([0]) + parseFloat(inputValues["I1_25"] || 0));
  };

  useEffect(() => {
    updateB5_6();
  }, [inputValues, tot2020]);

  useEffect(() => {
    const uploadB5_6 = async () => {
      await uploadData("B5_6", sumB5_6.toString());
      await uploadData("C5_6", sumC5_6.toString());
      await uploadData("D5_6", sumD5_6.toString());
      await uploadData("E5_6", sumE5_6.toString());
      await uploadData("F5_6", sumF5_6.toString());
      await uploadData("G5_6", sumG5_6.toString());
      await uploadData("H5_6", sumH5_6.toString());
      await uploadData("I5_6", sumI5_6.toString());
    };
    if (
      sumB5_6 ||
      sumC5_6 ||
      sumD5_6 ||
      sumE5_6 ||
      sumF5_6 ||
      sumG5_6 ||
      sumH5_6 ||
      sumI5_6
    ) {
      uploadB5_6();
    }
  }, [sumB5_6, sumC5_6, sumD5_6, sumE5_6, sumF5_6, sumG5_6, sumH5_6, sumI5_6]);

  //------------------------------------------------ SAVE FOR 7 TO DATABASE ---------------------------------------------

  const updateB5_7 = () => {
    setSumB5_7(calculateValue("B1_25", "B1_16", 12));
    setSumC5_7(calculateValue("C1_25", "C1_16", 12));
    setSumD5_7(calculateValue("D1_25", "D1_16", 12));
    setSumE5_7(calculateValue("E1_25", "E1_16", 12));
    setSumF5_7(calculateValue("F1_25", "F1_16", 12));
    setSumG5_7(calculateValue("G1_25", "G1_16", 12));
    setSumH5_7(calculateValue("H1_25", "H1_16", 12));
    setSumI5_7(calculateValue("I1_25", "I1_16", 12));
  };

  useEffect(() => {
    updateB5_7();
  }, [inputValues, tot2020]);

  useEffect(() => {
    const uploadB5_7 = async () => {
      const dataToUpload = [
        { id: "B5_7", value: sumB5_7 },
        { id: "C5_7", value: sumC5_7 },
        { id: "D5_7", value: sumD5_7 },
        { id: "E5_7", value: sumE5_7 },
        { id: "F5_7", value: sumF5_7 },
        { id: "G5_7", value: sumG5_7 },
        { id: "H5_7", value: sumH5_7 },
        { id: "I5_7", value: sumI5_7 },
      ];

      for (const { id, value } of dataToUpload) {
        await uploadData(id, value.toString());
      }
    };

    if (
      sumB5_7 !== 0 ||
      sumC5_7 !== 0 ||
      sumD5_7 !== 0 ||
      sumE5_7 !== 0 ||
      sumF5_7 !== 0 ||
      sumG5_7 !== 0 ||
      sumH5_7 !== 0 ||
      sumI5_7 !== 0
    ) {
      uploadB5_7();
    }
  }, [sumB5_7, sumC5_7, sumD5_7, sumE5_7, sumF5_7, sumG5_7, sumH5_7, sumI5_7]);

  //------------------------------------------------ SAVE FOR 8 TO DATABASE ---------------------------------------------

  const updateB5_8 = () => {
    setSumB5_8(calculateTotal([0]) + parseFloat(inputValues["B1_24"] || 0));
    setSumC5_8(calculateTotal([0]) + parseFloat(inputValues["C1_24"] || 0));
    setSumD5_8(calculateTotal([0]) + parseFloat(inputValues["D1_24"] || 0));
    setSumE5_8(calculateTotal([0]) + parseFloat(inputValues["E1_24"] || 0));
    setSumF5_8(calculateTotal([0]) + parseFloat(inputValues["F1_24"] || 0));
    setSumG5_8(calculateTotal([0]) + parseFloat(inputValues["G1_24"] || 0));
    setSumH5_8(calculateTotal([0]) + parseFloat(inputValues["H1_24"] || 0));
    setSumI5_8(calculateTotal([0]) + parseFloat(inputValues["I1_24"] || 0));
  };

  useEffect(() => {
    updateB5_8();
  }, [inputValues]);

  useEffect(() => {
    const uploadB5_8 = async () => {
      await uploadData("B5_8", sumB5_8.toString());
      await uploadData("C5_8", sumC5_8.toString());
      await uploadData("D5_8", sumD5_8.toString());
      await uploadData("E5_8", sumE5_8.toString());
      await uploadData("F5_8", sumF5_8.toString());
      await uploadData("G5_8", sumG5_8.toString());
      await uploadData("H5_8", sumH5_8.toString());
      await uploadData("I5_8", sumI5_8.toString());
    };
    if (
      sumB5_8 ||
      sumC5_8 ||
      sumD5_8 ||
      sumE5_8 ||
      sumF5_8 ||
      sumG5_8 ||
      sumH5_8 ||
      sumI5_8
    ) {
      uploadB5_8();
    }
  }, [sumB5_8, sumC5_8, sumD5_8, sumE5_8, sumF5_8, sumG5_8, sumH5_8, sumI5_8]);

  //------------------------------------------------ SAVE FOR 9 TO DATABASE ---------------------------------------------

  const updateB5_9 = () => {
    const calculateValue9 = (numeratorKey, denominatorKey, multiplier) => {
      const numerator = parseFloat(inputValues[numeratorKey] || 0);
      const denominator = parseFloat(Cost26[denominatorKey] || 0);
      return denominator !== 0 ? (numerator / denominator) * multiplier : 0;
    };

    setSumB5_9(calculateValue9("B1_24", "B1_26", 12));
    setSumC5_9(calculateValue9("C1_24", "C1_26", 12));
    setSumD5_9(calculateValue9("D1_24", "D1_26", 12));
    setSumE5_9(calculateValue9("E1_24", "E1_26", 12));
    setSumF5_9(calculateValue9("F1_24", "F1_26", 12));
    setSumG5_9(calculateValue9("G1_24", "G1_26", 12));
    setSumH5_9(calculateValue9("H1_24", "H1_26", 12));
    setSumI5_9(calculateValue9("I1_24", "I1_26", 12));
  };

  useEffect(() => {
    updateB5_9();
  }, [inputValues, tot2020, Cost26]);

  useEffect(() => {
    const uploadB5_9 = async () => {
      const dataToUpload = [
        { id: "B5_9", value: sumB5_9 },
        { id: "C5_9", value: sumC5_9 },
        { id: "D5_9", value: sumD5_9 },
        { id: "E5_9", value: sumE5_9 },
        { id: "F5_9", value: sumF5_9 },
        { id: "G5_9", value: sumG5_9 },
        { id: "H5_9", value: sumH5_9 },
        { id: "I5_9", value: sumI5_9 },
      ];

      for (const { id, value } of dataToUpload) {
        await uploadData(id, value.toString());
      }
    };

    if (
      sumB5_9 !== 0 ||
      sumC5_9 !== 0 ||
      sumD5_9 !== 0 ||
      sumE5_9 !== 0 ||
      sumF5_9 !== 0 ||
      sumG5_9 !== 0 ||
      sumH5_9 !== 0 ||
      sumI5_9 !== 0
    ) {
      uploadB5_9();
    }
  }, [sumB5_9, sumC5_9, sumD5_9, sumE5_9, sumF5_9, sumG5_9, sumH5_9, sumI5_9]);

  //------------------------------------------------ SAVE FOR 10 TO DATABASE ---------------------------------------------

  const updateB5_10 = () => {
    setSumB5_10(calculateTotal([0]) + parseFloat(inputValues["B1_23"] || 0));
    setSumC5_10(calculateTotal([0]) + parseFloat(inputValues["C1_23"] || 0));
    setSumD5_10(calculateTotal([0]) + parseFloat(inputValues["D1_23"] || 0));
    setSumE5_10(calculateTotal([0]) + parseFloat(inputValues["E1_23"] || 0));
    setSumF5_10(calculateTotal([0]) + parseFloat(inputValues["F1_23"] || 0));
    setSumG5_10(calculateTotal([0]) + parseFloat(inputValues["G1_23"] || 0));
    setSumH5_10(calculateTotal([0]) + parseFloat(inputValues["H1_23"] || 0));
    setSumI5_10(calculateTotal([0]) + parseFloat(inputValues["I1_23"] || 0));
  };

  useEffect(() => {
    updateB5_10();
  }, [inputValues, tot2020]);

  useEffect(() => {
    const uploadB5_10 = async () => {
      await uploadData("B5_10", sumB5_10.toString());
      await uploadData("C5_10", sumC5_10.toString());
      await uploadData("D5_10", sumD5_10.toString());
      await uploadData("E5_10", sumE5_10.toString());
      await uploadData("F5_10", sumF5_10.toString());
      await uploadData("G5_10", sumG5_10.toString());
      await uploadData("H5_10", sumH5_10.toString());
      await uploadData("I5_10", sumI5_10.toString());
    };
    if (
      sumB5_10 ||
      sumC5_10 ||
      sumD5_10 ||
      sumE5_10 ||
      sumF5_10 ||
      sumG5_10 ||
      sumH5_10 ||
      sumI5_10
    ) {
      uploadB5_10();
    }
  }, [
    sumB5_10,
    sumC5_10,
    sumD5_10,
    sumE5_10,
    sumF5_10,
    sumG5_10,
    sumH5_10,
    sumI5_10,
  ]);

  //------------------------------------------------ SAVE FOR 11 TO DATABASE ---------------------------------------------

  const updateB5_11 = () => {
    const calculateValue11 = (numeratorKey, denominatorKey, multiplier) => {
      const numerator = parseFloat(inputValues[numeratorKey] || 0);
      const denominator = parseFloat(Cost26[denominatorKey] || 0);
      return denominator !== 0 ? (numerator / denominator) * multiplier : 0;
    };

    setSumB5_11(calculateValue11("B1_23", "B1_26", 12));
    setSumC5_11(calculateValue11("C1_23", "C1_26", 12));
    setSumD5_11(calculateValue11("D1_23", "D1_26", 12));
    setSumE5_11(calculateValue11("E1_23", "E1_26", 12));
    setSumF5_11(calculateValue11("F1_23", "F1_26", 12));
    setSumG5_11(calculateValue11("G1_23", "G1_26", 12));
    setSumH5_11(calculateValue11("H1_23", "H1_26", 12));
    setSumI5_11(calculateValue11("I1_23", "I1_26", 12));
  };

  useEffect(() => {
    updateB5_11();
  }, [inputValues, Cost26]);

  useEffect(() => {
    const uploadB5_11 = async () => {
      const dataToUpload = [
        { id: "B5_11", value: sumB5_11 },
        { id: "C5_11", value: sumC5_11 },
        { id: "D5_11", value: sumD5_11 },
        { id: "E5_11", value: sumE5_11 },
        { id: "F5_11", value: sumF5_11 },
        { id: "G5_11", value: sumG5_11 },
        { id: "H5_11", value: sumH5_11 },
        { id: "I5_11", value: sumI5_11 },
      ];

      for (const { id, value } of dataToUpload) {
        await uploadData(id, value.toString());
      }
    };

    if (
      sumB5_11 !== 0 ||
      sumC5_11 !== 0 ||
      sumD5_11 !== 0 ||
      sumE5_11 !== 0 ||
      sumF5_11 !== 0 ||
      sumG5_11 !== 0 ||
      sumH5_11 !== 0 ||
      sumI5_11 !== 0
    ) {
      uploadB5_11();
    }
  }, [
    sumB5_11,
    sumC5_11,
    sumD5_11,
    sumE5_11,
    sumF5_11,
    sumG5_11,
    sumH5_11,
    sumI5_11,
  ]);

  //------------------------------------------------ SAVE FOR 12 TO DATABASE ---------------------------------------------

  const updateB5_12 = () => {
    setSumB5_12(calculateTotal([0]) + parseFloat(inputValues["B2_10"] || 0));
    setSumC5_12(calculateTotal([0]) + parseFloat(inputValues["C2_10"] || 0));
    setSumD5_12(calculateTotal([0]) + parseFloat(inputValues["D2_10"] || 0));
    setSumE5_12(calculateTotal([0]) + parseFloat(inputValues["E2_10"] || 0));
    setSumF5_12(calculateTotal([0]) + parseFloat(inputValues["F2_10"] || 0));
    setSumG5_12(calculateTotal([0]) + parseFloat(inputValues["G2_10"] || 0));
    setSumH5_12(calculateTotal([0]) + parseFloat(inputValues["H2_10"] || 0));
    setSumI5_12(calculateTotal([0]) + parseFloat(inputValues["I2_10"] || 0));
  };

  useEffect(() => {
    updateB5_12();
  }, [inputValues, tot2020]);

  useEffect(() => {
    const uploadB5_12 = async () => {
      await uploadData("B5_12", sumB5_12.toString());
      await uploadData("C5_12", sumC5_12.toString());
      await uploadData("D5_12", sumD5_12.toString());
      await uploadData("E5_12", sumE5_12.toString());
      await uploadData("F5_12", sumF5_12.toString());
      await uploadData("G5_12", sumG5_12.toString());
      await uploadData("H5_12", sumH5_12.toString());
      await uploadData("I5_12", sumI5_12.toString());
    };
    if (
      sumB5_12 ||
      sumC5_12 ||
      sumD5_12 ||
      sumE5_12 ||
      sumF5_12 ||
      sumG5_12 ||
      sumH5_12 ||
      sumI5_12
    ) {
      uploadB5_12();
    }
  }, [
    sumB5_12,
    sumC5_12,
    sumD5_12,
    sumE5_12,
    sumF5_12,
    sumG5_12,
    sumH5_12,
    sumI5_12,
  ]);

  //------------------------------------------------ SAVE FOR 13 TO DATABASE ---------------------------------------------

  const updateB5_13 = () => {
    setSumB5_13(calculateValue("B2_10", "B1_19", 12));
    setSumC5_13(calculateValue("C2_10", "C1_19", 12));
    setSumD5_13(calculateValue("D2_10", "D1_19", 12));
    setSumE5_13(calculateValue("E2_10", "E1_19", 12));
    setSumF5_13(calculateValue("F2_10", "F1_19", 12));
    setSumG5_13(calculateValue("G2_10", "G1_19", 12));
    setSumH5_13(calculateValue("H2_10", "H1_19", 12));
    setSumI5_13(calculateValue("I2_10", "I1_19", 12));
  };

  useEffect(() => {
    updateB5_13();
  }, [inputValues, tot2020]);

  useEffect(() => {
    const uploadB5_13 = async () => {
      const dataToUpload = [
        { id: "B5_13", value: sumB5_13 },
        { id: "C5_13", value: sumC5_13 },
        { id: "D5_13", value: sumD5_13 },
        { id: "E5_13", value: sumE5_13 },
        { id: "F5_13", value: sumF5_13 },
        { id: "G5_13", value: sumG5_13 },
        { id: "H5_13", value: sumH5_13 },
        { id: "I5_13", value: sumI5_13 },
      ];

      for (const { id, value } of dataToUpload) {
        await uploadData(id, value.toString());
      }
    };

    if (
      sumB5_13 !== 0 ||
      sumC5_13 !== 0 ||
      sumD5_13 !== 0 ||
      sumE5_13 !== 0 ||
      sumF5_13 !== 0 ||
      sumG5_13 !== 0 ||
      sumH5_13 !== 0 ||
      sumI5_13 !== 0
    ) {
      uploadB5_13();
    }
  }, [
    sumB5_13,
    sumC5_13,
    sumD5_13,
    sumE5_13,
    sumF5_13,
    sumG5_13,
    sumH5_13,
    sumI5_13,
  ]);

  // /------------------------------------------------- TOTAL OF 14 ------------------------------------------------------

  const uploadSumB5_14 = () => {
    setSumB5_14(
      parseFloat(sumB5_6 || 0) +
        parseFloat(sumB5_8 || 0) +
        parseFloat(sumB5_10 || 0) +
        parseFloat(sumB5_12 || 0)
    );
    setSumC5_14(
      parseFloat(sumC5_6 || 0) +
        parseFloat(sumC5_8 || 0) +
        parseFloat(sumC5_10 || 0) +
        parseFloat(sumC5_12 || 0)
    );
    setSumD5_14(
      parseFloat(sumD5_6 || 0) +
        parseFloat(sumD5_8 || 0) +
        parseFloat(sumD5_10 || 0) +
        parseFloat(sumD5_12 || 0)
    );
    setSumE5_14(
      parseFloat(sumE5_6 || 0) +
        parseFloat(sumE5_8 || 0) +
        parseFloat(sumE5_10 || 0) +
        parseFloat(sumE5_12 || 0)
    );
    setSumF5_14(
      parseFloat(sumF5_6 || 0) +
        parseFloat(sumF5_8 || 0) +
        parseFloat(sumF5_10 || 0) +
        parseFloat(sumF5_12 || 0)
    );
    setSumG5_14(
      parseFloat(sumG5_6 || 0) +
        parseFloat(sumG5_8 || 0) +
        parseFloat(sumG5_10 || 0) +
        parseFloat(sumG5_12 || 0)
    );
    setSumH5_14(
      parseFloat(sumH5_6 || 0) +
        parseFloat(sumH5_8 || 0) +
        parseFloat(sumH5_10 || 0) +
        parseFloat(sumH5_12 || 0)
    );
    setSumI5_14(
      parseFloat(sumI5_6 || 0) +
        parseFloat(sumI5_8 || 0) +
        parseFloat(sumI5_10 || 0) +
        parseFloat(sumI5_12 || 0)
    );
  };

  useEffect(() => {
    uploadSumB5_14();
  }, [
    inputValues,
    sumB5_6,
    sumC5_6,
    sumD5_6,
    sumE5_6,
    sumF5_6,
    sumG5_6,
    sumH5_6,
    sumI5_6,
    sumB5_8,
    sumC5_8,
    sumD5_8,
    sumE5_8,
    sumF5_8,
    sumG5_8,
    sumH5_8,
    sumI5_8,
    sumB5_10,
    sumC5_10,
    sumD5_10,
    sumE5_10,
    sumF5_10,
    sumG5_10,
    sumH5_10,
    sumI5_10,
    sumB5_12,
    sumC5_12,
    sumD5_12,
    sumE5_12,
    sumF5_12,
    sumG5_12,
    sumH5_12,
    sumI5_12,
  ]);

  useEffect(() => {
    const uploadSumB5_14 = async () => {
      await uploadData("B5_14", sumB5_14.toString());
      await uploadData("C5_14", sumC5_14.toString());
      await uploadData("D5_14", sumD5_14.toString());
      await uploadData("E5_14", sumE5_14.toString());
      await uploadData("F5_14", sumF5_14.toString());
      await uploadData("G5_14", sumG5_14.toString());
      await uploadData("H5_14", sumH5_14.toString());
      await uploadData("I5_14", sumI5_14.toString());
    };
    if (
      sumB5_14 ||
      sumC5_14 ||
      sumD5_14 ||
      sumE5_14 ||
      sumF5_14 ||
      sumG5_14 ||
      sumH5_14 ||
      sumI5_14
    ) {
      uploadSumB5_14();
    }
  }, [
    sumB5_14,
    sumC5_14,
    sumD5_14,
    sumE5_14,
    sumF5_14,
    sumG5_14,
    sumH5_14,
    sumI5_14,
  ]);

  // /------------------------------------------------- TOTAL OF 15 ------------------------------------------------------

  const uploadSumB5_15 = () => {
    setSumB5_15(
      +(
        parseFloat(inputValues["B3_19"] || 0) +
        parseFloat(inputValues["B2_11"] || 0)
      )
    );
    setSumC5_15(
      +(
        parseFloat(inputValues["C3_19"] || 0) +
        parseFloat(inputValues["C2_11"] || 0)
      )
    );
    setSumD5_15(
      +(
        parseFloat(inputValues["D3_19"] || 0) +
        parseFloat(inputValues["D2_11"] || 0)
      )
    );
    setSumE5_15(
      +(
        parseFloat(inputValues["E3_19"] || 0) +
        parseFloat(inputValues["E2_11"] || 0)
      )
    );
    setSumF5_15(
      +(
        parseFloat(inputValues["F3_19"] || 0) +
        parseFloat(inputValues["F2_11"] || 0)
      )
    );
    setSumG5_15(
      +(
        parseFloat(inputValues["G3_19"] || 0) +
        parseFloat(inputValues["G2_11"] || 0)
      )
    );
    setSumH5_15(
      +(
        parseFloat(inputValues["H3_19"] || 0) +
        parseFloat(inputValues["H2_11"] || 0)
      )
    );
    setSumI5_15(
      +(
        parseFloat(inputValues["I3_19"] || 0) +
        parseFloat(inputValues["I2_11"] || 0)
      )
    );
  };

  useEffect(() => {
    uploadSumB5_15();
  }, [inputValues]);

  useEffect(() => {
    const uploadSumB5_15 = async () => {
      await uploadData("B5_15", sumB5_15.toString());
      await uploadData("C5_15", sumC5_15.toString());
      await uploadData("D5_15", sumD5_15.toString());
      await uploadData("E5_15", sumE5_15.toString());
      await uploadData("F5_15", sumF5_15.toString());
      await uploadData("G5_15", sumG5_15.toString());
      await uploadData("H5_15", sumH5_15.toString());
      await uploadData("I5_15", sumI5_15.toString());
    };
    if (
      sumB5_15 ||
      sumC5_15 ||
      sumD5_15 ||
      sumE5_15 ||
      sumF5_15 ||
      sumG5_15 ||
      sumH5_15 ||
      sumI5_15
    ) {
      uploadSumB5_15();
    }
  }, [
    sumB5_15,
    sumC5_15,
    sumD5_15,
    sumE5_15,
    sumF5_15,
    sumG5_15,
    sumH5_15,
    sumI5_15,
  ]);

  //------------------------------------------------ SAVE FOR 16 TO DATABASE ---------------------------------------------

  const updateB5_16 = () => {
    const calculateValue16 = (numerator, denominatorKey, multiplier) => {
      const denominator = parseFloat(tot2020[denominatorKey] || 0);
      return denominator !== 0 ? (numerator / denominator) * multiplier : 0;
    };

    setSumB5_16(calculateValue16(sumB5_15, "B1_10", 12));
    setSumC5_16(calculateValue16(sumC5_15, "C1_10", 12));
    setSumD5_16(calculateValue16(sumD5_15, "D1_10", 12));
    setSumE5_16(calculateValue16(sumE5_15, "E1_10", 12));
    setSumF5_16(calculateValue16(sumF5_15, "F1_10", 12));
    setSumG5_16(calculateValue16(sumG5_15, "G1_10", 12));
    setSumH5_16(calculateValue16(sumH5_15, "H1_10", 12));
    setSumI5_16(calculateValue16(sumI5_15, "I1_10", 12));
  };

  useEffect(() => {
    updateB5_16();
  }, [
    inputValues,
    sumB5_15,
    sumC5_15,
    sumD5_15,
    sumE5_15,
    sumF5_15,
    sumG5_15,
    sumH5_15,
    sumI5_15,
    tot2020,
  ]);

  useEffect(() => {
    const uploadB5_16 = async () => {
      const dataToUpload = [
        { id: "B5_16", value: sumB5_16 },
        { id: "C5_16", value: sumC5_16 },
        { id: "D5_16", value: sumD5_16 },
        { id: "E5_16", value: sumE5_16 },
        { id: "F5_16", value: sumF5_16 },
        { id: "G5_16", value: sumG5_16 },
        { id: "H5_16", value: sumH5_16 },
        { id: "I5_16", value: sumI5_16 },
      ];

      for (const { id, value } of dataToUpload) {
        await uploadData(id, value.toString());
      }
    };

    if (
      sumB5_16 ||
      sumC5_16 ||
      sumD5_16 ||
      sumE5_16 ||
      sumF5_16 ||
      sumG5_16 ||
      sumH5_16 ||
      sumI5_16
    ) {
      uploadB5_16();
    }
  }, [
    sumB5_16,
    sumC5_16,
    sumD5_16,
    sumE5_16,
    sumF5_16,
    sumG5_16,
    sumH5_16,
    sumI5_16,
  ]);

  //------------------------------------------------ SAVE FOR 17 TO DATABASE ---------------------------------------------

  const updateB5_17 = () => {
    setSumB5_17(calculateTotal([0]) + parseFloat(tot15.B3_15 || 0));
    setSumC5_17(calculateTotal([0]) + parseFloat(tot15.C3_15 || 0));
    setSumD5_17(calculateTotal([0]) + parseFloat(tot15.D3_15 || 0));
    setSumE5_17(calculateTotal([0]) + parseFloat(tot15.E3_15 || 0));
    setSumF5_17(calculateTotal([0]) + parseFloat(tot15.F3_15 || 0));
    setSumG5_17(calculateTotal([0]) + parseFloat(tot15.G3_15 || 0));
    setSumH5_17(calculateTotal([0]) + parseFloat(tot15.H3_15 || 0));
    setSumI5_17(calculateTotal([0]) + parseFloat(tot15.I3_15 || 0));
  };

  useEffect(() => {
    updateB5_17();
  }, [inputValues, tot15]);

  useEffect(() => {
    const uploadB5_17 = async () => {
      await uploadData("B5_17", sumB5_17.toString());
      await uploadData("C5_17", sumC5_17.toString());
      await uploadData("D5_17", sumD5_17.toString());
      await uploadData("E5_17", sumE5_17.toString());
      await uploadData("F5_17", sumF5_17.toString());
      await uploadData("G5_17", sumG5_17.toString());
      await uploadData("H5_17", sumH5_17.toString());
      await uploadData("I5_17", sumI5_17.toString());
    };
    if (
      sumB5_17 ||
      sumC5_17 ||
      sumD5_17 ||
      sumE5_17 ||
      sumF5_17 ||
      sumG5_17 ||
      sumH5_17 ||
      sumI5_17
    ) {
      uploadB5_17();
    }
  }, [
    sumB5_17,
    sumC5_17,
    sumD5_17,
    sumE5_17,
    sumF5_17,
    sumG5_17,
    sumH5_17,
    sumI5_17,
  ]);

  // /------------------------------------------------- TOTAL OF 18 ------------------------------------------------------

  const uploadSumB5_18 = () => {
    setSumB5_18(
      parseFloat(sumB5_14 || 0) +
        parseFloat(sumB5_15 || 0) +
        parseFloat(sumB5_17 || 0)
    );
    setSumC5_18(
      parseFloat(sumC5_14 || 0) +
        parseFloat(sumC5_15 || 0) +
        parseFloat(sumC5_17 || 0)
    );
    setSumD5_18(
      parseFloat(sumD5_14 || 0) +
        parseFloat(sumD5_15 || 0) +
        parseFloat(sumD5_17 || 0)
    );
    setSumE5_18(
      parseFloat(sumE5_14 || 0) +
        parseFloat(sumE5_15 || 0) +
        parseFloat(sumE5_17 || 0)
    );
    setSumF5_18(
      parseFloat(sumF5_14 || 0) +
        parseFloat(sumF5_15 || 0) +
        parseFloat(sumF5_17 || 0)
    );
    setSumG5_18(
      parseFloat(sumG5_14 || 0) +
        parseFloat(sumG5_15 || 0) +
        parseFloat(sumG5_17 || 0)
    );
    setSumH5_18(
      parseFloat(sumH5_14 || 0) +
        parseFloat(sumH5_15 || 0) +
        parseFloat(sumH5_17 || 0)
    );
    setSumI5_18(
      parseFloat(sumI5_14 || 0) +
        parseFloat(sumI5_15 || 0) +
        parseFloat(sumI5_17 || 0)
    );
  };

  useEffect(() => {
    uploadSumB5_18();
  }, [
    inputValues,
    sumB5_14,
    sumC5_14,
    sumD5_14,
    sumE5_14,
    sumF5_14,
    sumG5_14,
    sumH5_14,
    sumI5_14,
    sumB5_15,
    sumC5_15,
    sumD5_15,
    sumE5_15,
    sumF5_15,
    sumG5_15,
    sumH5_15,
    sumI5_15,
    sumB5_17,
    sumC5_17,
    sumD5_17,
    sumE5_17,
    sumF5_17,
    sumG5_17,
    sumH5_17,
    sumI5_17,
  ]);

  useEffect(() => {
    const uploadSumB5_18 = async () => {
      await uploadData("B5_18", sumB5_18.toString());
      await uploadData("C5_18", sumC5_18.toString());
      await uploadData("D5_18", sumD5_18.toString());
      await uploadData("E5_18", sumE5_18.toString());
      await uploadData("F5_18", sumF5_18.toString());
      await uploadData("G5_18", sumG5_18.toString());
      await uploadData("H5_18", sumH5_18.toString());
      await uploadData("I5_18", sumI5_18.toString());
    };
    if (
      sumB5_18 ||
      sumC5_18 ||
      sumD5_18 ||
      sumE5_18 ||
      sumF5_18 ||
      sumG5_18 ||
      sumH5_18 ||
      sumI5_18
    ) {
      uploadSumB5_18();
    }
  }, [
    sumB5_18,
    sumC5_18,
    sumD5_18,
    sumE5_18,
    sumF5_18,
    sumG5_18,
    sumH5_18,
    sumI5_18,
  ]);

  //------------------------------------------------ SAVE FOR 21 TO DATABASE ---------------------------------------------

  const updateB5_21 = () => {
    setSumB5_21(calculateTotal([0]) + parseFloat(inputValues["B2_36"] || 0));
    setSumC5_21(calculateTotal([0]) + parseFloat(inputValues["C2_36"] || 0));
    setSumD5_21(calculateTotal([0]) + parseFloat(inputValues["D2_36"] || 0));
    setSumE5_21(calculateTotal([0]) + parseFloat(inputValues["E2_36"] || 0));
    setSumF5_21(calculateTotal([0]) + parseFloat(inputValues["F2_36"] || 0));
    setSumG5_21(calculateTotal([0]) + parseFloat(inputValues["G2_36"] || 0));
    setSumH5_21(calculateTotal([0]) + parseFloat(inputValues["H2_36"] || 0));
    setSumI5_21(calculateTotal([0]) + parseFloat(inputValues["I2_36"] || 0));
  };

  useEffect(() => {
    updateB5_21();
  }, [inputValues, tot2020]);

  useEffect(() => {
    const uploadB5_21 = async () => {
      await uploadData("B5_21", sumB5_21.toString());
      await uploadData("C5_21", sumC5_21.toString());
      await uploadData("D5_21", sumD5_21.toString());
      await uploadData("E5_21", sumE5_21.toString());
      await uploadData("F5_21", sumF5_21.toString());
      await uploadData("G5_21", sumG5_21.toString());
      await uploadData("H5_21", sumH5_21.toString());
      await uploadData("I5_21", sumI5_21.toString());
    };
    if (
      sumB5_21 ||
      sumC5_21 ||
      sumD5_21 ||
      sumE5_21 ||
      sumF5_21 ||
      sumG5_21 ||
      sumH5_21 ||
      sumI5_21
    ) {
      uploadB5_21();
    }
  }, [
    sumB5_21,
    sumC5_21,
    sumD5_21,
    sumE5_21,
    sumF5_21,
    sumG5_21,
    sumH5_21,
    sumI5_21,
  ]);

  //------------------------------------------------ SAVE FOR 22 TO DATABASE ---------------------------------------------

  const updateB5_22 = () => {
    const calculateValue22 = (numeratorKey, denominatorKey, multiplier) => {
      const numerator = +parseFloat(inputValues[numeratorKey] || 0);
      const denominator = parseFloat(inputValues[denominatorKey] || 0);
      return denominator !== 0 ? (numerator / denominator) * multiplier : 0;
    };

    setSumB5_22(calculateValue22("B2_36", "B1_16", 12));
    setSumC5_22(calculateValue22("C2_36", "C1_16", 12));
    setSumD5_22(calculateValue22("D2_36", "D1_16", 12));
    setSumE5_22(calculateValue22("E2_36", "E1_16", 12));
    setSumF5_22(calculateValue22("F2_36", "F1_16", 12));
    setSumG5_22(calculateValue22("G2_36", "G1_16", 12));
    setSumH5_22(calculateValue22("H2_36", "H1_16", 12));
    setSumI5_22(calculateValue22("I2_36", "I1_16", 12));
  };

  useEffect(() => {
    updateB5_22();
  }, [inputValues]);

  useEffect(() => {
    const uploadB5_22 = async () => {
      const dataToUpload = [
        { id: "B5_22", value: sumB5_22 },
        { id: "C5_22", value: sumC5_22 },
        { id: "D5_22", value: sumD5_22 },
        { id: "E5_22", value: sumE5_22 },
        { id: "F5_22", value: sumF5_22 },
        { id: "G5_22", value: sumG5_22 },
        { id: "H5_22", value: sumH5_22 },
        { id: "I5_22", value: sumI5_22 },
      ];

      for (const { id, value } of dataToUpload) {
        await uploadData(id, value.toString());
      }
    };

    if (
      sumB5_22 !== 0 ||
      sumC5_22 !== 0 ||
      sumD5_22 !== 0 ||
      sumE5_22 !== 0 ||
      sumF5_22 !== 0 ||
      sumG5_22 !== 0 ||
      sumH5_22 !== 0 ||
      sumI5_22 !== 0
    ) {
      uploadB5_22();
    }
  }, [
    sumB5_22,
    sumC5_22,
    sumD5_22,
    sumE5_22,
    sumF5_22,
    sumG5_22,
    sumH5_22,
    sumI5_22,
  ]);

  //------------------------------------------------ SAVE FOR 23 TO DATABASE ---------------------------------------------

  const updateB5_23 = () => {
    setSumB5_23(calculateTotal([0]) + parseFloat(tot31.B1_31 || 0));
    setSumC5_23(calculateTotal([0]) + parseFloat(tot31.C1_31 || 0));
    setSumD5_23(calculateTotal([0]) + parseFloat(tot31.D1_31 || 0));
    setSumE5_23(calculateTotal([0]) + parseFloat(tot31.E1_31 || 0));
    setSumF5_23(calculateTotal([0]) + parseFloat(tot31.F1_31 || 0));
    setSumG5_23(calculateTotal([0]) + parseFloat(tot31.G1_31 || 0));
    setSumH5_23(calculateTotal([0]) + parseFloat(tot31.H1_31 || 0));
    setSumI5_23(calculateTotal([0]) + parseFloat(tot31.I1_31 || 0));
  };

  useEffect(() => {
    updateB5_23();
  }, [inputValues, tot31]);

  useEffect(() => {
    const uploadB5_23 = async () => {
      await uploadData("B5_23", sumB5_23.toString());
      await uploadData("C5_23", sumC5_23.toString());
      await uploadData("D5_23", sumD5_23.toString());
      await uploadData("E5_23", sumE5_23.toString());
      await uploadData("F5_23", sumF5_23.toString());
      await uploadData("G5_23", sumG5_23.toString());
      await uploadData("H5_23", sumH5_23.toString());
      await uploadData("I5_23", sumI5_23.toString());
    };
    if (
      sumB5_23 ||
      sumC5_23 ||
      sumD5_23 ||
      sumE5_23 ||
      sumF5_23 ||
      sumG5_23 ||
      sumH5_23 ||
      sumI5_23
    ) {
      uploadB5_23();
    }
  }, [
    sumB5_23,
    sumC5_23,
    sumD5_23,
    sumE5_23,
    sumF5_23,
    sumG5_23,
    sumH5_23,
    sumI5_23,
  ]);

  // /------------------------------------------------- TOTAL OF 24 ------------------------------------------------------

  const uploadSumB5_24 = () => {
    setSumB5_24(parseFloat(sumB5_21 || 0) + parseFloat(sumB5_23 || 0));
    setSumC5_24(parseFloat(sumC5_21 || 0) + parseFloat(sumC5_23 || 0));
    setSumD5_24(parseFloat(sumD5_21 || 0) + parseFloat(sumD5_23 || 0));
    setSumE5_24(parseFloat(sumE5_21 || 0) + parseFloat(sumE5_23 || 0));
    setSumF5_24(parseFloat(sumF5_21 || 0) + parseFloat(sumF5_23 || 0));
    setSumG5_24(parseFloat(sumG5_21 || 0) + parseFloat(sumG5_23 || 0));
    setSumH5_24(parseFloat(sumH5_21 || 0) + parseFloat(sumH5_23 || 0));
    setSumI5_24(parseFloat(sumI5_21 || 0) + parseFloat(sumI5_23 || 0));
  };

  useEffect(() => {
    uploadSumB5_24();
  }, [
    inputValues,
    sumB5_21,
    sumC5_21,
    sumD5_21,
    sumE5_21,
    sumF5_21,
    sumG5_21,
    sumH5_21,
    sumI5_21,
    sumB5_23,
    sumC5_23,
    sumD5_23,
    sumE5_23,
    sumF5_23,
    sumG5_23,
    sumH5_23,
    sumI5_23,
  ]);

  useEffect(() => {
    const uploadSumB5_24 = async () => {
      await uploadData("B5_24", sumB5_24.toString());
      await uploadData("C5_24", sumC5_24.toString());
      await uploadData("D5_24", sumD5_24.toString());
      await uploadData("E5_24", sumE5_24.toString());
      await uploadData("F5_24", sumF5_24.toString());
      await uploadData("G5_24", sumG5_24.toString());
      await uploadData("H5_24", sumH5_24.toString());
      await uploadData("I5_24", sumI5_24.toString());
    };
    if (
      sumB5_24 ||
      sumC5_24 ||
      sumD5_24 ||
      sumE5_24 ||
      sumF5_24 ||
      sumG5_24 ||
      sumH5_24 ||
      sumI5_24
    ) {
      uploadSumB5_24();
    }
  }, [
    sumB5_24,
    sumC5_24,
    sumD5_24,
    sumE5_24,
    sumF5_24,
    sumG5_24,
    sumH5_24,
    sumI5_24,
  ]);

  // /------------------------------------------------- TOTAL OF 26 ------------------------------------------------------

  const uploadSumB5_26 = () => {
    setSumB5_26(+parseFloat(sumB5_18 || 0) - parseFloat(sumB5_24 || 0));
    setSumC5_26(+parseFloat(sumC5_18 || 0) - parseFloat(sumC5_24 || 0));
    setSumD5_26(+parseFloat(sumD5_18 || 0) - parseFloat(sumD5_24 || 0));
    setSumE5_26(+parseFloat(sumE5_18 || 0) - parseFloat(sumE5_24 || 0));
    setSumF5_26(+parseFloat(sumF5_18 || 0) - parseFloat(sumF5_24 || 0));
    setSumG5_26(+parseFloat(sumG5_18 || 0) - parseFloat(sumG5_24 || 0));
    setSumH5_26(+parseFloat(sumH5_18 || 0) - parseFloat(sumH5_24 || 0));
    setSumI5_26(+parseFloat(sumI5_18 || 0) - parseFloat(sumI5_24 || 0));
  };

  useEffect(() => {
    uploadSumB5_26();
  }, [
    inputValues,
    sumB5_18,
    sumC5_18,
    sumD5_18,
    sumE5_18,
    sumF5_18,
    sumG5_18,
    sumH5_18,
    sumI5_18,
    sumB5_24,
    sumC5_24,
    sumD5_24,
    sumE5_24,
    sumF5_24,
    sumG5_24,
    sumH5_24,
    sumI5_24,
  ]);

  useEffect(() => {
    const uploadSumB5_26 = async () => {
      await uploadData("B5_26", sumB5_26.toString());
      await uploadData("C5_26", sumC5_26.toString());
      await uploadData("D5_26", sumD5_26.toString());
      await uploadData("E5_26", sumE5_26.toString());
      await uploadData("F5_26", sumF5_26.toString());
      await uploadData("G5_26", sumG5_26.toString());
      await uploadData("H5_26", sumH5_26.toString());
      await uploadData("I5_26", sumI5_26.toString());
    };
    if (
      sumB5_26 ||
      sumC5_26 ||
      sumD5_26 ||
      sumE5_26 ||
      sumF5_26 ||
      sumG5_26 ||
      sumH5_26 ||
      sumI5_26
    ) {
      uploadSumB5_26();
    }
  }, [
    sumB5_26,
    sumC5_26,
    sumD5_26,
    sumE5_26,
    sumF5_26,
    sumG5_26,
    sumH5_26,
    sumI5_26,
  ]);

  // /------------------------------------------------- TOTAL OF 27 ------------------------------------------------------

  const uploadSumB5_27 = () => {
    setSumB5_27(+parseFloat(sumB5_18 || 0) * 0.25);
    setSumC5_27(+parseFloat(sumC5_18 || 0) * 0.25);
    setSumD5_27(+parseFloat(sumD5_18 || 0) * 0.25);
    setSumE5_27(+parseFloat(sumE5_18 || 0) * 0.25);
    setSumF5_27(+parseFloat(sumF5_18 || 0) * 0.25);
    setSumG5_27(+parseFloat(sumG5_18 || 0) * 0.25);
    setSumH5_27(+parseFloat(sumH5_18 || 0) * 0.25);
    setSumI5_27(+parseFloat(sumI5_18 || 0) * 0.25);
  };

  useEffect(() => {
    uploadSumB5_27();
  }, [
    inputValues,
    sumB5_18,
    sumC5_18,
    sumD5_18,
    sumE5_18,
    sumF5_18,
    sumG5_18,
    sumH5_18,
    sumI5_18,
  ]);

  useEffect(() => {
    const uploadSumB5_27 = async () => {
      await uploadData("B5_27", sumB5_27.toString());
      await uploadData("C5_27", sumC5_27.toString());
      await uploadData("D5_27", sumD5_27.toString());
      await uploadData("E5_27", sumE5_27.toString());
      await uploadData("F5_27", sumF5_27.toString());
      await uploadData("G5_27", sumG5_27.toString());
      await uploadData("H5_27", sumH5_27.toString());
      await uploadData("I5_27", sumI5_27.toString());
    };
    if (
      sumB5_27 ||
      sumC5_27 ||
      sumD5_27 ||
      sumE5_27 ||
      sumF5_27 ||
      sumG5_27 ||
      sumH5_27 ||
      sumI5_27
    ) {
      uploadSumB5_27();
    }
  }, [
    sumB5_27,
    sumC5_27,
    sumD5_27,
    sumE5_27,
    sumF5_27,
    sumG5_27,
    sumH5_27,
    sumI5_27,
  ]);

  //------------------------------------------------ SAVE FOR 28 TO DATABASE ---------------------------------------------

  const updateB5_28 = () => {
    setSumB5_28(calculateTotal([0]) + parseFloat(sumB4_25 || 0));
    setSumC5_28(calculateTotal([0]) + parseFloat(sumC4_25 || 0));
    setSumD5_28(calculateTotal([0]) + parseFloat(sumD4_25 || 0));
    setSumE5_28(calculateTotal([0]) + parseFloat(sumE4_25 || 0));
    setSumF5_28(calculateTotal([0]) + parseFloat(sumF4_25 || 0));
    setSumG5_28(calculateTotal([0]) + parseFloat(sumG4_25 || 0));
    setSumH5_28(calculateTotal([0]) + parseFloat(sumH4_25 || 0));
    setSumI5_28(calculateTotal([0]) + parseFloat(sumI4_25 || 0));
  };

  useEffect(() => {
    updateB5_28();
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
    const uploadB5_28 = async () => {
      await uploadData("B5_28", sumB5_28.toString());
      await uploadData("C5_28", sumC5_28.toString());
      await uploadData("D5_28", sumD5_28.toString());
      await uploadData("E5_28", sumE5_28.toString());
      await uploadData("F5_28", sumF5_28.toString());
      await uploadData("G5_28", sumG5_28.toString());
      await uploadData("H5_28", sumH5_28.toString());
      await uploadData("I5_28", sumI5_28.toString());
    };
    if (
      sumB5_28 ||
      sumC5_28 ||
      sumD5_28 ||
      sumE5_28 ||
      sumF5_28 ||
      sumG5_28 ||
      sumH5_28 ||
      sumI5_28
    ) {
      uploadB5_28();
    }
  }, [
    sumB5_28,
    sumC5_28,
    sumD5_28,
    sumE5_28,
    sumF5_28,
    sumG5_28,
    sumH5_28,
    sumI5_28,
  ]);

  // /------------------------------------------------- TOTAL OF 29 ------------------------------------------------------

  const uploadSumB5_29 = () => {
    setSumB5_29(parseFloat(sumB5_26 || 0) - parseFloat(sumB5_27 || 0));
    setSumC5_29(parseFloat(sumC5_26 || 0) - parseFloat(sumC5_27 || 0));
    setSumD5_29(parseFloat(sumD5_26 || 0) - parseFloat(sumD5_27 || 0));
    setSumE5_29(parseFloat(sumE5_26 || 0) - parseFloat(sumE5_27 || 0));
    setSumF5_29(parseFloat(sumF5_26 || 0) - parseFloat(sumF5_27 || 0));
    setSumG5_29(parseFloat(sumG5_26 || 0) - parseFloat(sumG5_27 || 0));
    setSumH5_29(parseFloat(sumH5_26 || 0) - parseFloat(sumH5_27 || 0));
    setSumI5_29(parseFloat(sumI5_26 || 0) - parseFloat(sumI5_27 || 0));
  };

  useEffect(() => {
    uploadSumB5_29();
  }, [
    inputValues,
    sumB5_26,
    sumC5_26,
    sumD5_26,
    sumE5_26,
    sumF5_26,
    sumG5_26,
    sumH5_26,
    sumI5_26,
    sumB5_27,
    sumC5_27,
    sumD5_27,
    sumE5_27,
    sumF5_27,
    sumG5_27,
    sumH5_27,
    sumI5_27,
  ]);

  useEffect(() => {
    const uploadSumB5_29 = async () => {
      await uploadData("B5_29", sumB5_29.toString());
      await uploadData("C5_29", sumC5_29.toString());
      await uploadData("D5_29", sumD5_29.toString());
      await uploadData("E5_29", sumE5_29.toString());
      await uploadData("F5_29", sumF5_29.toString());
      await uploadData("G5_29", sumG5_29.toString());
      await uploadData("H5_29", sumH5_29.toString());
      await uploadData("I5_29", sumI5_29.toString());
    };
    if (
      sumB5_29 ||
      sumC5_29 ||
      sumD5_29 ||
      sumE5_29 ||
      sumF5_29 ||
      sumG5_29 ||
      sumH5_29 ||
      sumI5_29
    ) {
      uploadSumB5_29();
    }
  }, [
    sumB5_29,
    sumC5_29,
    sumD5_29,
    sumE5_29,
    sumF5_29,
    sumG5_29,
    sumH5_29,
    sumI5_29,
  ]);

  // /------------------------------------------------- TOTAL OF 30 ------------------------------------------------------

  const uploadSumB5_30 = () => {
    setSumB5_30(parseFloat(sumB5_26 || 0) - parseFloat(sumB5_28 || 0));
    setSumC5_30(parseFloat(sumC5_26 || 0) - parseFloat(sumC5_28 || 0));
    setSumD5_30(parseFloat(sumD5_26 || 0) - parseFloat(sumD5_28 || 0));
    setSumE5_30(parseFloat(sumE5_26 || 0) - parseFloat(sumE5_28 || 0));
    setSumF5_30(parseFloat(sumF5_26 || 0) - parseFloat(sumF5_28 || 0));
    setSumG5_30(parseFloat(sumG5_26 || 0) - parseFloat(sumG5_28 || 0));
    setSumH5_30(parseFloat(sumH5_26 || 0) - parseFloat(sumH5_28 || 0));
    setSumI5_30(parseFloat(sumI5_26 || 0) - parseFloat(sumI5_28 || 0));
  };

  useEffect(() => {
    uploadSumB5_30();
  }, [
    inputValues,
    sumB5_26,
    sumC5_26,
    sumD5_26,
    sumE5_26,
    sumF5_26,
    sumG5_26,
    sumH5_26,
    sumI5_26,
    sumB5_28,
    sumC5_28,
    sumD5_28,
    sumE5_28,
    sumF5_28,
    sumG5_28,
    sumH5_28,
    sumI5_28,
  ]);

  useEffect(() => {
    const uploadSumB5_30 = async () => {
      await uploadData("B5_30", sumB5_30.toString());
      await uploadData("C5_30", sumC5_30.toString());
      await uploadData("D5_30", sumD5_30.toString());
      await uploadData("E5_30", sumE5_30.toString());
      await uploadData("F5_30", sumF5_30.toString());
      await uploadData("G5_30", sumG5_30.toString());
      await uploadData("H5_30", sumH5_30.toString());
      await uploadData("I5_30", sumI5_30.toString());
    };
    if (
      sumB5_30 ||
      sumC5_30 ||
      sumD5_30 ||
      sumE5_30 ||
      sumF5_30 ||
      sumG5_30 ||
      sumH5_30 ||
      sumI5_30
    ) {
      uploadSumB5_30();
    }
  }, [
    sumB5_30,
    sumC5_30,
    sumD5_30,
    sumE5_30,
    sumF5_30,
    sumG5_30,
    sumH5_30,
    sumI5_30,
  ]);

  // /------------------------------------------------- TOTAL OF 31 ------------------------------------------------------

  const uploadSumB5_31 = () => {
    setSumB5_31(Math.min(sumB5_29, sumB5_30));
    setSumC5_31(Math.min(sumC5_29, sumC5_30));
    setSumD5_31(Math.min(sumD5_29, sumD5_30));
    setSumE5_31(Math.min(sumE5_29, sumE5_30));
    setSumF5_31(Math.min(sumF5_29, sumF5_30));
    setSumG5_31(Math.min(sumG5_29, sumG5_30));
    setSumH5_31(Math.min(sumH5_29, sumH5_30));
    setSumI5_31(Math.min(sumI5_29, sumI5_30));
  };

  useEffect(() => {
    uploadSumB5_31();
  }, [
    inputValues,
    sumB5_29,
    sumC5_29,
    sumD5_29,
    sumE5_29,
    sumF5_29,
    sumG5_29,
    sumH5_29,
    sumI5_29,
    sumB5_30,
    sumC5_30,
    sumD5_30,
    sumE5_30,
    sumF5_30,
    sumG5_30,
    sumH5_30,
    sumI5_30,
  ]);

  useEffect(() => {
    const uploadSumB5_31 = async () => {
      await uploadData("B5_31", sumB5_31.toString());
      await uploadData("C5_31", sumC5_31.toString());
      await uploadData("D5_31", sumD5_31.toString());
      await uploadData("E5_31", sumE5_31.toString());
      await uploadData("F5_31", sumF5_31.toString());
      await uploadData("G5_31", sumG5_31.toString());
      await uploadData("H5_31", sumH5_31.toString());
      await uploadData("I5_31", sumI5_31.toString());
    };
    if (
      sumB5_31 ||
      sumC5_31 ||
      sumD5_31 ||
      sumE5_31 ||
      sumF5_31 ||
      sumG5_31 ||
      sumH5_31 ||
      sumI5_31
    ) {
      uploadSumB5_31();
    }
  }, [
    sumB5_31,
    sumC5_31,
    sumD5_31,
    sumE5_31,
    sumF5_31,
    sumG5_31,
    sumH5_31,
    sumI5_31,
  ]);

  // /------------------------------------------------- TOTAL OF 33 ------------------------------------------------------

  const uploadSumB5_33 = () => {
    setSumB5_33(Math.min(parseFloat(sumB5_28) - parseFloat(sumB5_27)), 0);
    setSumC5_33(Math.min(parseFloat(sumC5_28) - parseFloat(sumC5_27)), 0);
    setSumD5_33(Math.min(parseFloat(sumD5_28) - parseFloat(sumD5_27)), 0);
    setSumE5_33(Math.min(parseFloat(sumE5_28) - parseFloat(sumE5_27)), 0);
    setSumF5_33(Math.min(parseFloat(sumF5_28) - parseFloat(sumF5_27)), 0);
    setSumG5_33(Math.min(parseFloat(sumG5_28) - parseFloat(sumG5_27)), 0);
    setSumH5_33(Math.min(parseFloat(sumH5_28) - parseFloat(sumH5_27)), 0);
    setSumI5_33(Math.min(parseFloat(sumI5_28) - parseFloat(sumI5_27)), 0);
  };

  useEffect(() => {
    uploadSumB5_33();
  }, [
    inputValues,
    sumB5_28,
    sumC5_28,
    sumD5_28,
    sumE5_28,
    sumF5_28,
    sumG5_28,
    sumH5_28,
    sumI5_28,
    sumB5_27,
    sumC5_27,
    sumD5_27,
    sumE5_27,
    sumF5_27,
    sumG5_27,
    sumH5_27,
    sumI5_27,
  ]);

  useEffect(() => {
    const uploadSumB5_33 = async () => {
      await uploadData("B5_33", sumB5_33.toString());
      await uploadData("C5_33", sumC5_33.toString());
      await uploadData("D5_33", sumD5_33.toString());
      await uploadData("E5_33", sumE5_33.toString());
      await uploadData("F5_33", sumF5_33.toString());
      await uploadData("G5_33", sumG5_33.toString());
      await uploadData("H5_33", sumH5_33.toString());
      await uploadData("I5_33", sumI5_33.toString());
    };
    if (
      sumB5_33 ||
      sumC5_33 ||
      sumD5_33 ||
      sumE5_33 ||
      sumF5_33 ||
      sumG5_33 ||
      sumH5_33 ||
      sumI5_33
    ) {
      uploadSumB5_33();
    }
  }, [
    sumB5_33,
    sumC5_33,
    sumD5_33,
    sumE5_33,
    sumF5_33,
    sumG5_33,
    sumH5_33,
    sumI5_33,
  ]);

  //------------------------------------------------ SAVE FOR 37 TO DATABASE ---------------------------------------------

  const updateB5_37 = () => {
    setSumB5_37(parseFloat(sumB19 || 0));
    setSumC5_37(parseFloat(sumC19 || 0));
    setSumD5_37(parseFloat(sumD19 || 0));
    setSumE5_37(parseFloat(sumE19 || 0));
    setSumF5_37(parseFloat(sumF19 || 0));
    setSumG5_37(parseFloat(sumG19 || 0));
    setSumH5_37(parseFloat(sumH19 || 0));
    setSumI5_37(parseFloat(sumI19 || 0));
  };

  useEffect(() => {
    updateB5_37();
  }, [
    inputValues,
    sumB19,
    sumC19,
    sumD19,
    sumE19,
    sumF19,
    sumG19,
    sumH19,
    sumI19,
  ]);

  useEffect(() => {
    const uploadB5_37 = async () => {
      await uploadData("B5_37", sumB5_37.toString());
      await uploadData("C5_37", sumC5_37.toString());
      await uploadData("D5_37", sumD5_37.toString());
      await uploadData("E5_37", sumE5_37.toString());
      await uploadData("F5_37", sumF5_37.toString());
      await uploadData("G5_37", sumG5_37.toString());
      await uploadData("H5_37", sumH5_37.toString());
      await uploadData("I5_37", sumI5_37.toString());
    };
    if (
      sumB5_37 ||
      sumC5_37 ||
      sumD5_37 ||
      sumE5_37 ||
      sumF5_37 ||
      sumG5_37 ||
      sumH5_37 ||
      sumI5_37
    ) {
      uploadB5_37();
    }
  }, [
    sumB5_37,
    sumC5_37,
    sumD5_37,
    sumE5_37,
    sumF5_37,
    sumG5_37,
    sumH5_37,
    sumI5_37,
  ]);

  //------------------------------------------------ SAVE FOR 38 TO DATABASE ---------------------------------------------

  const updateB5_38 = () => {
    setSumB5_38(parseFloat(sumB21 || 0));
    setSumC5_38(parseFloat(sumC21 || 0));
    setSumD5_38(parseFloat(sumD21 || 0));
    setSumE5_38(parseFloat(sumE21 || 0));
    setSumF5_38(parseFloat(sumF21 || 0));
    setSumG5_38(parseFloat(sumG21 || 0));
    setSumH5_38(parseFloat(sumH21 || 0));
    setSumI5_38(parseFloat(sumI21 || 0));
  };

  useEffect(() => {
    updateB5_38();
  }, [
    inputValues,
    sumB21,
    sumC21,
    sumD21,
    sumE21,
    sumF21,
    sumG21,
    sumH21,
    sumI21,
  ]);

  useEffect(() => {
    const uploadB5_38 = async () => {
      await uploadData("B5_38", sumB5_38.toString());
      await uploadData("C5_38", sumC5_38.toString());
      await uploadData("D5_38", sumD5_38.toString());
      await uploadData("E5_38", sumE5_38.toString());
      await uploadData("F5_38", sumF5_38.toString());
      await uploadData("G5_38", sumG5_38.toString());
      await uploadData("H5_38", sumH5_38.toString());
      await uploadData("I5_38", sumI5_38.toString());
    };
    if (
      sumB5_38 ||
      sumC5_38 ||
      sumD5_38 ||
      sumE5_38 ||
      sumF5_38 ||
      sumG5_38 ||
      sumH5_38 ||
      sumI5_38
    ) {
      uploadB5_38();
    }
  }, [
    sumB5_38,
    sumC5_38,
    sumD5_38,
    sumE5_38,
    sumF5_38,
    sumG5_38,
    sumH5_38,
    sumI5_38,
  ]);

  // /------------------------------------------------- TOTAL OF 39 ------------------------------------------------------

  const uploadSumB5_39 = () => {
    setSumB5_39(
      parseFloat(inputValues["B2_40"] || 0) +
        parseFloat(inputValues["B2_42"] || 0) +
        parseFloat(sumB5_48 || 0)
    );
    setSumC5_39(
      parseFloat(inputValues["C2_40"] || 0) +
        parseFloat(inputValues["C2_42"] || 0) +
        parseFloat(sumC5_48 || 0)
    );
    setSumD5_39(
      parseFloat(inputValues["D2_40"] || 0) +
        parseFloat(inputValues["D2_42"] || 0) +
        parseFloat(sumD5_48 || 0)
    );
    setSumE5_39(
      parseFloat(inputValues["E2_40"] || 0) +
        parseFloat(inputValues["E2_42"] || 0) +
        parseFloat(sumE5_48 || 0)
    );
    setSumF5_39(
      parseFloat(inputValues["F2_40"] || 0) +
        parseFloat(inputValues["F2_42"] || 0) +
        parseFloat(sumF5_48 || 0)
    );
    setSumG5_39(
      parseFloat(inputValues["G2_40"] || 0) +
        parseFloat(inputValues["G2_42"] || 0) +
        parseFloat(sumG5_48 || 0)
    );
    setSumH5_39(
      parseFloat(inputValues["H2_40"] || 0) +
        parseFloat(inputValues["H2_42"] || 0) +
        parseFloat(sumH5_48 || 0)
    );
    setSumI5_39(
      parseFloat(inputValues["I2_40"] || 0) +
        parseFloat(inputValues["I2_42"] || 0) +
        parseFloat(sumI5_48 || 0)
    );
  };

  useEffect(() => {
    uploadSumB5_39();
  }, [
    inputValues,
    sumB5_48,
    sumC5_48,
    sumD5_48,
    sumE5_48,
    sumF5_48,
    sumG5_48,
    sumH5_48,
    sumI5_48,
  ]);

  useEffect(() => {
    const uploadSumB5_39 = async () => {
      await uploadData("B5_39", sumB5_39.toString());
      await uploadData("C5_39", sumC5_39.toString());
      await uploadData("D5_39", sumD5_39.toString());
      await uploadData("E5_39", sumE5_39.toString());
      await uploadData("F5_39", sumF5_39.toString());
      await uploadData("G5_39", sumG5_39.toString());
      await uploadData("H5_39", sumH5_39.toString());
      await uploadData("I5_39", sumI5_39.toString());
    };
    if (
      sumB5_39 ||
      sumC5_39 ||
      sumD5_39 ||
      sumE5_39 ||
      sumF5_39 ||
      sumG5_39 ||
      sumH5_39 ||
      sumI5_39
    ) {
      uploadSumB5_39();
    }
  }, [
    sumB5_39,
    sumC5_39,
    sumD5_39,
    sumE5_39,
    sumF5_39,
    sumG5_39,
    sumH5_39,
    sumI5_39,
  ]);

  // /------------------------------------------------- TOTAL OF 40 ------------------------------------------------------

  const updateB5_40 = () => {
    const calculateValue40 = (numerator, denominator) => {
      return denominator !== 0 ? numerator / denominator : 0;
    };

    setSumB5_40(calculateValue40(sumB5_37, sumB5_39));
    setSumC5_40(calculateValue40(sumC5_37, sumC5_39));
    setSumD5_40(calculateValue40(sumD5_37, sumD5_39));
    setSumE5_40(calculateValue40(sumE5_37, sumE5_39));
    setSumF5_40(calculateValue40(sumF5_37, sumF5_39));
    setSumG5_40(calculateValue40(sumG5_37, sumG5_39));
    setSumH5_40(calculateValue40(sumH5_37, sumH5_39));
    setSumI5_40(calculateValue40(sumI5_37, sumI5_39));
  };

  useEffect(() => {
    updateB5_40();
  }, [
    inputValues,
    sumB5_39,
    sumC5_39,
    sumD5_39,
    sumE5_39,
    sumF5_39,
    sumG5_39,
    sumH5_39,
    sumI5_39,
    sumB5_37,
    sumC5_37,
    sumD5_37,
    sumE5_37,
    sumF5_37,
    sumG5_37,
    sumH5_37,
    sumI5_37,
  ]);

  useEffect(() => {
    const uploadB5_40 = async () => {
      const dataToUpload = [
        { id: "B5_40", value: sumB5_40 },
        { id: "C5_40", value: sumC5_40 },
        { id: "D5_40", value: sumD5_40 },
        { id: "E5_40", value: sumE5_40 },
        { id: "F5_40", value: sumF5_40 },
        { id: "G5_40", value: sumG5_40 },
        { id: "H5_40", value: sumH5_40 },
        { id: "I5_40", value: sumI5_40 },
      ];

      for (const { id, value } of dataToUpload) {
        await uploadData(id, value.toString());
      }
    };

    if (
      sumB5_40 !== 0 ||
      sumC5_40 !== 0 ||
      sumD5_40 !== 0 ||
      sumE5_40 !== 0 ||
      sumF5_40 !== 0 ||
      sumG5_40 !== 0 ||
      sumH5_40 !== 0 ||
      sumI5_40 !== 0
    ) {
      uploadB5_40();
    }
  }, [
    sumB5_40,
    sumC5_40,
    sumD5_40,
    sumE5_40,
    sumF5_40,
    sumG5_40,
    sumH5_40,
    sumI5_40,
  ]);

  // /------------------------------------------------- TOTAL OF 41 ------------------------------------------------------

  const uploadSumB5_41 = () => {
    setSumB5_41(parseFloat(sumB5_38 || 0) - parseFloat(sumB5_39 || 0));
    setSumC5_41(parseFloat(sumC5_38 || 0) - parseFloat(sumC5_39 || 0));
    setSumD5_41(parseFloat(sumD5_38 || 0) - parseFloat(sumD5_39 || 0));
    setSumE5_41(parseFloat(sumE5_38 || 0) - parseFloat(sumE5_39 || 0));
    setSumF5_41(parseFloat(sumF5_38 || 0) - parseFloat(sumF5_39 || 0));
    setSumG5_41(parseFloat(sumG5_38 || 0) - parseFloat(sumG5_39 || 0));
    setSumH5_41(parseFloat(sumH5_38 || 0) - parseFloat(sumH5_39 || 0));
    setSumI5_41(parseFloat(sumI5_38 || 0) - parseFloat(sumI5_39 || 0));
  };

  useEffect(() => {
    uploadSumB5_41();
  }, [
    sumB5_38,
    sumC5_38,
    sumD5_38,
    sumE5_38,
    sumF5_38,
    sumG5_38,
    sumH5_38,
    sumI5_38,
    sumB5_39,
    sumC5_39,
    sumD5_39,
    sumE5_39,
    sumF5_39,
    sumG5_39,
    sumH5_39,
    sumI5_39,
  ]);

  useEffect(() => {
    const uploadSumB5_41 = async () => {
      await uploadData("B5_41", sumB5_41.toString());
      await uploadData("C5_41", sumC5_41.toString());
      await uploadData("D5_41", sumD5_41.toString());
      await uploadData("E5_41", sumE5_41.toString());
      await uploadData("F5_41", sumF5_41.toString());
      await uploadData("G5_41", sumG5_41.toString());
      await uploadData("H5_41", sumH5_41.toString());
      await uploadData("I5_41", sumI5_41.toString());
    };
    if (
      sumB5_41 ||
      sumC5_41 ||
      sumD5_41 ||
      sumE5_41 ||
      sumF5_41 ||
      sumG5_41 ||
      sumH5_41 ||
      sumI5_41
    ) {
      uploadSumB5_41();
    }
  }, [
    sumB5_41,
    sumC5_41,
    sumD5_41,
    sumE5_41,
    sumF5_41,
    sumG5_41,
    sumH5_41,
    sumI5_41,
  ]);

  // /------------------------------------------------- TOTAL OF 42 ------------------------------------------------------

  const updateB5_42 = () => {
    const calculateValue42 = (numerator, denominator) => {
      return denominator !== 0 && numerator < 1
        ? (numerator / denominator) * 100
        : 0;
    };

    setSumB5_42(calculateValue42(sumB5_41, sumB5_38));
    setSumC5_42(calculateValue42(sumC5_41, sumC5_38));
    setSumD5_42(calculateValue42(sumD5_41, sumD5_38));
    setSumE5_42(calculateValue42(sumE5_41, sumE5_38));
    setSumF5_42(calculateValue42(sumF5_41, sumF5_38));
    setSumG5_42(calculateValue42(sumG5_41, sumG5_38));
    setSumH5_42(calculateValue42(sumH5_41, sumH5_38));
    setSumI5_42(calculateValue42(sumI5_41, sumI5_38));
  };

  useEffect(() => {
    updateB5_42();
  }, [
    sumB5_38,
    sumC5_38,
    sumD5_38,
    sumE5_38,
    sumF5_38,
    sumG5_38,
    sumH5_38,
    sumI5_38,
    sumB5_41,
    sumC5_41,
    sumD5_41,
    sumE5_41,
    sumF5_41,
    sumG5_41,
    sumH5_41,
    sumI5_41,
  ]);

  useEffect(() => {
    const uploadSumB5_42 = async () => {
      const dataToUpload = [
        { id: "B5_42", value: sumB5_42 },
        { id: "C5_42", value: sumC5_42 },
        { id: "D5_42", value: sumD5_42 },
        { id: "E5_42", value: sumE5_42 },
        { id: "F5_42", value: sumF5_42 },
        { id: "G5_42", value: sumG5_42 },
        { id: "H5_42", value: sumH5_42 },
        { id: "I5_42", value: sumI5_42 },
      ];

      for (const { id, value } of dataToUpload) {
        await uploadData(id, value.toString());
      }
    };

    if (
      sumB5_42 ||
      sumC5_42 ||
      sumD5_42 ||
      sumE5_42 ||
      sumF5_42 ||
      sumG5_42 ||
      sumH5_42 ||
      sumI5_42
    ) {
      uploadSumB5_42();
    }
  }, [
    sumB5_42,
    sumC5_42,
    sumD5_42,
    sumE5_42,
    sumF5_42,
    sumG5_42,
    sumH5_42,
    sumI5_42,
  ]);

  // /------------------------------------------------- TOTAL OF 44 ------------------------------------------------------

  const updateB5_44 = () => {
    const calculateValue44 = (numerator, denominator) => {
      return denominator !== 0 ? numerator / denominator : 0;
    };

    setSumB5_44(calculateValue44(sumB5_38, sumB5_39));
    setSumC5_44(calculateValue44(sumC5_38, sumC5_39));
    setSumD5_44(calculateValue44(sumD5_38, sumD5_39));
    setSumE5_44(calculateValue44(sumE5_38, sumE5_39));
    setSumF5_44(calculateValue44(sumF5_38, sumF5_39));
    setSumG5_44(calculateValue44(sumG5_38, sumG5_39));
    setSumH5_44(calculateValue44(sumH5_38, sumH5_39));
    setSumI5_44(calculateValue44(sumI5_38, sumI5_39));
  };

  useEffect(() => {
    updateB5_44();
  }, [
    inputValues,
    sumB5_39,
    sumC5_39,
    sumD5_39,
    sumE5_39,
    sumF5_39,
    sumG5_39,
    sumH5_39,
    sumI5_39,
    sumB5_38,
    sumC5_38,
    sumD5_38,
    sumE5_38,
    sumF5_38,
    sumG5_38,
    sumH5_38,
    sumI5_38,
  ]);

  useEffect(() => {
    const uploadB5_44 = async () => {
      const dataToUpload = [
        { id: "B5_44", value: sumB5_44 },
        { id: "C5_44", value: sumC5_44 },
        { id: "D5_44", value: sumD5_44 },
        { id: "E5_44", value: sumE5_44 },
        { id: "F5_44", value: sumF5_44 },
        { id: "G5_44", value: sumG5_44 },
        { id: "H5_44", value: sumH5_44 },
        { id: "I5_44", value: sumI5_44 },
      ];

      for (const { id, value } of dataToUpload) {
        await uploadData(id, value.toString());
      }
    };

    if (
      sumB5_44 !== 0 ||
      sumC5_44 !== 0 ||
      sumD5_44 !== 0 ||
      sumE5_44 !== 0 ||
      sumF5_44 !== 0 ||
      sumG5_44 !== 0 ||
      sumH5_44 !== 0 ||
      sumI5_44 !== 0
    ) {
      uploadB5_44();
    }
  }, [
    sumB5_44,
    sumC5_44,
    sumD5_44,
    sumE5_44,
    sumF5_44,
    sumG5_44,
    sumH5_44,
    sumI5_44,
  ]);

  //------------------------------------------------ SAVE FOR 46 TO DATABASE ---------------------------------------------

  useEffect(() => {
    setInputValues((prevValues) => ({
      ...prevValues,
      B5_46: sumB5_49 > 0 ? "Yes" : "No",
    }));
  }, [sumB5_49]);

  useEffect(() => {
    setInputValues((prevValues) => ({
      ...prevValues,
      C5_46: sumC5_49 > 0 ? "Yes" : "No",
    }));
  }, [sumC5_49]);

  useEffect(() => {
    setInputValues((prevValues) => ({
      ...prevValues,
      D5_46: sumD5_49 > 0 ? "yes" : "No",
    }));
  }, [sumD5_49]);

  useEffect(() => {
    setInputValues((prevValues) => ({
      ...prevValues,
      E5_46: sumE5_49 > 0 ? "Yes" : "No",
    }));
  }, [sumE5_49]);

  useEffect(() => {
    setInputValues((prevValues) => ({
      ...prevValues,
      F5_46: sumF5_49 > 0 ? "Yes" : "No",
    }));
  }, [sumF5_49]);

  useEffect(() => {
    setInputValues((prevValues) => ({
      ...prevValues,
      G5_46: sumG5_49 > 0 ? "Yes" : "No",
    }));
  }, [sumG5_49]);

  useEffect(() => {
    setInputValues((prevValues) => ({
      ...prevValues,
      H5_46: sumH5_49 > 0 ? "Yes" : "No",
    }));
  }, [sumH5_49]);

  useEffect(() => {
    setInputValues((prevValues) => ({
      ...prevValues,
      I5_46: sumI5_49 > 0 ? "Yes" : "No",
    }));
  }, [sumI5_49]);

  //------------------------------------------------ SAVE FOR 47 TO DATABASE ---------------------------------------------

  const updateB5_47 = () => {
    setSumB5_47(parseFloat(Cost42.B1_42 || 0));
    setSumC5_47(parseFloat(Cost42.C1_42 || 0));
    setSumD5_47(parseFloat(Cost42.D1_42 || 0));
    setSumE5_47(parseFloat(Cost42.E1_42 || 0));
    setSumF5_47(parseFloat(Cost42.F1_42 || 0));
    setSumG5_47(parseFloat(Cost42.G1_42 || 0));
    setSumH5_47(parseFloat(Cost42.H1_42 || 0));
    setSumI5_47(parseFloat(Cost42.I1_42 || 0));
  };

  useEffect(() => {
    updateB5_47();
  }, [inputValues, Cost42]);

  useEffect(() => {
    const uploadB5_47 = async () => {
      await uploadData("B5_47", sumB5_47.toString());
      await uploadData("C5_47", sumC5_47.toString());
      await uploadData("D5_47", sumD5_47.toString());
      await uploadData("E5_47", sumE5_47.toString());
      await uploadData("F5_47", sumF5_47.toString());
      await uploadData("G5_47", sumG5_47.toString());
      await uploadData("H5_47", sumH5_47.toString());
      await uploadData("I5_47", sumI5_47.toString());
    };
    if (
      sumB5_47 ||
      sumC5_47 ||
      sumD5_47 ||
      sumE5_47 ||
      sumF5_47 ||
      sumG5_47 ||
      sumH5_47 ||
      sumI5_47
    ) {
      uploadB5_47();
    }
  }, [
    sumB5_47,
    sumC5_47,
    sumD5_47,
    sumE5_47,
    sumF5_47,
    sumG5_47,
    sumH5_47,
    sumI5_47,
  ]);

  //------------------------------------------------ SAVE FOR 48 TO DATABASE ---------------------------------------------

  const updateB5_48 = () => {
    setSumB5_48(
      parseFloat(inputValues["B3_32"] || 0) +
        parseFloat(inputValues["B3_26"] || 0)
    );
    setSumC5_48(
      parseFloat(inputValues["C3_32"] || 0) +
        parseFloat(inputValues["C3_26"] || 0)
    );
    setSumD5_48(
      parseFloat(inputValues["D3_32"] || 0) +
        parseFloat(inputValues["D3_26"] || 0)
    );
    setSumE5_48(
      parseFloat(inputValues["E3_32"] || 0) +
        parseFloat(inputValues["E3_26"] || 0)
    );
    setSumF5_48(
      parseFloat(inputValues["F3_32"] || 0) +
        parseFloat(inputValues["F3_26"] || 0)
    );
    setSumG5_48(
      parseFloat(inputValues["G3_32"] || 0) +
        parseFloat(inputValues["G3_26"] || 0)
    );
    setSumH5_48(
      parseFloat(inputValues["H3_32"] || 0) +
        parseFloat(inputValues["H3_26"] || 0)
    );
    setSumI5_48(
      parseFloat(inputValues["I3_32"] || 0) +
        parseFloat(inputValues["I3_26"] || 0)
    );
  };

  useEffect(() => {
    updateB5_48();
  }, [inputValues]);

  useEffect(() => {
    const uploadB5_48 = async () => {
      await uploadData("B5_48", sumB5_48.toString());
      await uploadData("C5_48", sumC5_48.toString());
      await uploadData("D5_48", sumD5_48.toString());
      await uploadData("E5_48", sumE5_48.toString());
      await uploadData("F5_48", sumF5_48.toString());
      await uploadData("G5_48", sumG5_48.toString());
      await uploadData("H5_48", sumH5_48.toString());
      await uploadData("I5_48", sumI5_48.toString());
    };
    if (
      sumB5_48 ||
      sumC5_48 ||
      sumD5_48 ||
      sumE5_48 ||
      sumF5_48 ||
      sumG5_48 ||
      sumH5_48 ||
      sumI5_48
    ) {
      uploadB5_48();
    }
  }, [
    sumB5_48,
    sumC5_48,
    sumD5_48,
    sumE5_48,
    sumF5_48,
    sumG5_48,
    sumH5_48,
    sumI5_48,
  ]);

  //------------------------------------------------ SAVE FOR 48 TO DATABASE ---------------------------------------------

  const updateB5_49 = () => {
    setSumB5_49(
      Math.round(parseFloat(sumB5_47 || 0) - parseFloat(sumB5_48 || 0))
    );
    setSumC5_49(
      Math.round(parseFloat(sumC5_47 || 0) - parseFloat(sumC5_48 || 0))
    );
    setSumD5_49(
      Math.round(parseFloat(sumD5_47 || 0) - parseFloat(sumD5_48 || 0))
    );
    setSumE5_49(
      Math.round(parseFloat(sumE5_47 || 0) - parseFloat(sumE5_48 || 0))
    );
    setSumF5_49(
      Math.round(parseFloat(sumF5_47 || 0) - parseFloat(sumF5_48 || 0))
    );
    setSumG5_49(
      Math.round(parseFloat(sumG5_47 || 0) - parseFloat(sumG5_48 || 0))
    );
    setSumH5_49(
      Math.round(parseFloat(sumH5_47 || 0) - parseFloat(sumH5_48 || 0))
    );
    setSumI5_49(
      Math.round(parseFloat(sumI5_47 || 0) - parseFloat(sumI5_48 || 0))
    );
  };

  useEffect(() => {
    updateB5_49();
  }, [
    sumB5_48,
    sumC5_48,
    sumD5_48,
    sumE5_48,
    sumF5_48,
    sumG5_48,
    sumH5_48,
    sumI5_48,
    sumB5_47,
    sumC5_47,
    sumD5_47,
    sumE5_47,
    sumF5_47,
    sumG5_47,
    sumH5_47,
    sumI5_47,
  ]);

  useEffect(() => {
    const uploadB5_49 = async () => {
      await uploadData("B5_49", sumB5_49.toString());
      await uploadData("C5_49", sumC5_49.toString());
      await uploadData("D5_49", sumD5_49.toString());
      await uploadData("E5_49", sumE5_49.toString());
      await uploadData("F5_49", sumF5_49.toString());
      await uploadData("G5_49", sumG5_49.toString());
      await uploadData("H5_49", sumH5_49.toString());
      await uploadData("I5_49", sumI5_49.toString());
    };
    if (
      sumB5_49 ||
      sumC5_49 ||
      sumD5_49 ||
      sumE5_49 ||
      sumF5_49 ||
      sumG5_49 ||
      sumH5_49 ||
      sumI5_49
    ) {
      uploadB5_49();
    }
  }, [
    sumB5_49,
    sumC5_49,
    sumD5_49,
    sumE5_49,
    sumF5_49,
    sumG5_49,
    sumH5_49,
    sumI5_49,
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
            <div className="col-lg-4 border-end border-black d-flex justify-content-center">
              <h5>WC/TL ASSESSMENT</h5>
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
              <div className="col-lg-4 border-end border-black d-flex justify-content-center">
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
              <div className="col-lg-4 border-end border-black d-flex justify-content-center">
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

        {/*---------------------------------------- OPERATING DATA ------------------------------------------------------*/}

        <div className="container-fluid border-1 border-black mt-3">
          <div
            className="row"
            style={{ backgroundColor: "rgb(224, 231, 231)" }}
          >
            <div className="col-lg-4 border-end border-black d-flex justify-content-center">
              <h5>CURRENT ASSETS </h5>
            </div>
          </div>
        </div>

        <div className="container-fluid border-1 border-black mt-3">
          <div className="row">
            <div className="col-lg-4 border-end border-black d-flex justify-content-center">
              <h6>Raw Materials</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B5_6"
                    value={sumB5_6}
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
                    name="C5_6"
                    value={sumC5_6}
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
                    name="D5_6"
                    value={sumD5_6}
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
                    name="E5_6"
                    value={sumE5_6}
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
                    name="F5_6"
                    value={sumF5_6}
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
                    name="G5_6"
                    value={sumG5_6}
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
                    name="H5_6"
                    value={sumH5_6}
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
                    name="I5_6"
                    value={sumI5_6}
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
            <div className="col-lg-4 border-end border-black d-flex justify-content-center">
              <h6>(Month's Cost Of Production)</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B5_7"
                    value={sumB5_7}
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
                    name="C5_7"
                    value={sumC5_7}
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
                    name="D5_7"
                    value={sumD5_7}
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
                    name="E5_7"
                    value={sumE5_7}
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
                    name="F5_7"
                    value={sumF5_7}
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
                    name="G5_7"
                    value={sumG5_7}
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
                    name="H5_7"
                    value={sumH5_7}
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
                    name="I5_7"
                    value={sumI5_7}
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
            <div className="col-lg-4 border-end border-black d-flex justify-content-center">
              <h6>Stock-in-process</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B5_8"
                    value={sumB5_8}
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
                    name="C5_8"
                    value={sumC5_8}
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
                    name="D5_8"
                    value={sumD5_8}
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
                    name="E5_8"
                    value={sumE5_8}
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
                    name="F5_8"
                    value={sumF5_8}
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
                    name="G5_8"
                    value={sumG5_8}
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
                    name="H5_8"
                    value={sumH5_8}
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
                    name="I5_8"
                    value={sumI5_8}
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
            <div className="col-lg-4 border-end border-black d-flex justify-content-center">
              <h6>(Month's Cost of Production)</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B5_9"
                    value={sumB5_9}
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
                    name="C5_9"
                    value={sumC5_9}
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
                    name="D5_9"
                    value={sumD5_9}
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
                    name="E5_9"
                    value={sumE5_9}
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
                    name="F5_9"
                    value={sumF5_9}
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
                    name="G5_9"
                    value={sumG5_9}
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
                    name="H5_9"
                    value={sumH5_9}
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
                    name="I5_9"
                    value={sumI5_9}
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
            <div className="col-lg-4 border-end border-black d-flex justify-content-center">
              <h6>Finished Goods</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B5_10"
                    value={sumB5_10}
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
                    name="C5_10"
                    value={sumC5_10}
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
                    name="D5_10"
                    value={sumD5_10}
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
                    name="E5_10"
                    value={sumE5_10}
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
                    name="F5_10"
                    value={sumF5_10}
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
                    name="G5_10"
                    value={sumG5_10}
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
                    name="H5_10"
                    value={sumH5_10}
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
                    name="I5_10"
                    value={sumI5_10}
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
            <div className="col-lg-4 border-end border-black d-flex justify-content-center">
              <h6>(Month's Cost Of Sales)</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B5_11"
                    value={sumB5_11}
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
                    name="C5_11"
                    value={sumC5_11}
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
                    name="D5_11"
                    value={sumD5_11}
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
                    name="E5_11"
                    value={sumE5_11}
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
                    name="F5_11"
                    value={sumF5_11}
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
                    name="G5_11"
                    value={sumG5_11}
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
                    name="H5_11"
                    value={sumH5_11}
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
                    name="I5_11"
                    value={sumI5_11}
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
            <div className="col-lg-4 border-end border-black d-flex justify-content-center">
              <h6>Other Consumable spares</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B5_12"
                    value={sumB5_12}
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
                    name="C5_12"
                    value={sumC5_12}
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
                    name="D5_12"
                    value={sumD5_12}
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
                    name="E5_12"
                    value={sumE5_12}
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
                    name="F5_12"
                    value={sumF5_12}
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
                    name="G5_12"
                    value={sumG5_12}
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
                    name="H5_12"
                    value={sumH5_12}
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
                    name="I5_12"
                    value={sumI5_12}
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
            <div className="col-lg-4 border-end border-black d-flex justify-content-center">
              <h6>(Month's Consumption)</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B5_13"
                    value={sumB5_13}
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
                    name="C5_13"
                    value={sumC5_13}
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
                    name="D5_13"
                    value={sumD5_13}
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
                    name="E5_13"
                    value={sumE5_13}
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
                    name="F5_13"
                    value={sumF5_13}
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
                    name="G5_13"
                    value={sumG5_13}
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
                    name="H5_13"
                    value={sumH5_13}
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
                    name="I5_13"
                    value={sumI5_13}
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
            <div className="col-lg-4 border-end border-black d-flex justify-content-center">
              <h6>TOTAL INVENTORY</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B5_14"
                    value={sumB5_14}
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
                    name="C5_14"
                    value={sumC5_14}
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
                    name="D5_14"
                    value={sumD5_14}
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
                    name="E5_14"
                    value={sumE5_14}
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
                    name="F5_14"
                    value={sumF5_14}
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
                    name="G5_14"
                    value={sumG5_14}
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
                    name="H5_14"
                    value={sumH5_14}
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
                    name="I5_14"
                    value={sumI5_14}
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
            <div className="col-lg-4 border-end border-black d-flex justify-content-center">
              <h6>RECEIVABLES</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B5_15"
                    value={sumB5_15}
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
                    name="C5_15"
                    value={sumC5_15}
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
                    name="D5_15"
                    value={sumD5_15}
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
                    name="E5_15"
                    value={sumE5_15}
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
                    name="F5_15"
                    value={sumF5_15}
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
                    name="G5_15"
                    value={sumG5_15}
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
                    name="H5_15"
                    value={sumH5_15}
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
                    name="I5_15"
                    value={sumI5_15}
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
            <div className="col-lg-4 border-end border-black d-flex justify-content-center">
              <h6>(Month's gross sales)</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B5_16"
                    value={sumB5_16}
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
                    name="C5_16"
                    value={sumC5_16}
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
                    name="D5_16"
                    value={sumD5_16}
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
                    name="E5_16"
                    value={sumE5_16}
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
                    name="F5_16"
                    value={sumF5_16}
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
                    name="G5_16"
                    value={sumG5_16}
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
                    name="H5_16"
                    value={sumH5_16}
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
                    name="I5_16"
                    value={sumI5_16}
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
            <div className="col-lg-4 border-end border-black d-flex justify-content-center">
              <h6>Other Current Assets</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B5_17"
                    value={sumB5_17}
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
                    name="C5_17"
                    value={sumC5_17}
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
                    name="D5_17"
                    value={sumD5_17}
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
                    name="E5_17"
                    value={sumE5_17}
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
                    name="F5_17"
                    value={sumF5_17}
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
                    name="G5_17"
                    value={sumG5_17}
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
                    name="H5_17"
                    value={sumH5_17}
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
                    name="I5_17"
                    value={sumI5_17}
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
            <div className="col-lg-4 border-end border-black d-flex justify-content-center">
              <h6>TOTAL CHARGEABLE CA</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B5_18"
                    value={sumB5_18}
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
                    name="C5_18"
                    value={sumC5_18}
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
                    name="D5_18"
                    value={sumD5_18}
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
                    name="E5_18"
                    value={sumE5_18}
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
                    name="F5_18"
                    value={sumF5_18}
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
                    name="G5_18"
                    value={sumG5_18}
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
                    name="H5_18"
                    value={sumH5_18}
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
                    name="I5_18"
                    value={sumI5_18}
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
            <div className="col-lg-4 border-end border-black d-flex justify-content-center">
              <h5>CL OTHER THAN BANK BORROWINGS</h5>
            </div>
          </div>
        </div>
        <div className="container-fluid border-1 border-black mt-3">
          <div className="row">
            <div className="col-lg-4 border-end border-black d-flex justify-content-center">
              <h6>TRADE CREDITORS</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B5_21"
                    value={sumB5_21}
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
                    name="C5_21"
                    value={sumC5_21}
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
                    name="D5_21"
                    value={sumD5_21}
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
                    name="E5_21"
                    value={sumE5_21}
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
                    name="F5_21"
                    value={sumF5_21}
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
                    name="G5_21"
                    value={sumG5_21}
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
                    name="H5_21"
                    value={sumH5_21}
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
                    name="I5_21"
                    value={sumI5_21}
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
            <div className="col-lg-4 border-end border-black d-flex justify-content-center">
              <h6>(Month's Purchases)</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B5_22"
                    value={sumB5_22}
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
                    name="C5_22"
                    value={sumC5_22}
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
                    name="D5_22"
                    value={sumD5_22}
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
                    name="E5_22"
                    value={sumE5_22}
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
                    name="F5_22"
                    value={sumF5_22}
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
                    name="G5_22"
                    value={sumG5_22}
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
                    name="H5_22"
                    value={sumH5_22}
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
                    name="I5_22"
                    value={sumI5_22}
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
            <div className="col-lg-4 border-end border-black d-flex justify-content-center">
              <h6>Other Current Liabilities</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B5_23"
                    value={sumB5_23}
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
                    name="C5_23"
                    value={sumC5_23}
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
                    name="D5_23"
                    value={sumD5_23}
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
                    name="E5_23"
                    value={sumE5_23}
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
                    name="F5_23"
                    value={sumF5_23}
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
                    name="G5_23"
                    value={sumG5_23}
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
                    name="H5_23"
                    value={sumH5_23}
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
                    name="I5_23"
                    value={sumI5_23}
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
            <div className="col-lg-4 border-end border-black d-flex justify-content-center">
              <h6>TOTAL LIABILITIES</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B5_24"
                    value={sumB5_24}
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
                    name="C5_24"
                    value={sumC5_24}
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
                    name="D5_24"
                    value={sumD5_24}
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
                    name="E5_24"
                    value={sumE5_24}
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
                    name="F5_24"
                    value={sumF5_24}
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
                    name="G5_24"
                    value={sumG5_24}
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
                    name="H5_24"
                    value={sumH5_24}
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
                    name="I5_24"
                    value={sumI5_24}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid border-1 border-black mt-3">
          <div className="row">
            <div className="col-lg-4 border-end border-black d-flex justify-content-center">
              <h6>WORKING CAPITAL GAP(A)</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B5_26"
                    value={sumB5_26}
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
                    name="C5_26"
                    value={sumC5_26}
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
                    name="D5_26"
                    value={sumD5_26}
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
                    name="E5_26"
                    value={sumE5_26}
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
                    name="F5_26"
                    value={sumF5_26}
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
                    name="G5_26"
                    value={sumG5_26}
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
                    name="H5_26"
                    value={sumH5_26}
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
                    name="I5_26"
                    value={sumI5_26}
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
            <div className="col-lg-4 border-end border-black d-flex justify-content-center">
              <h6>25% Margin on C A (B)</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B5_27"
                    value={sumB5_27}
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
                    name="C5_27"
                    value={sumC5_27}
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
                    name="D5_27"
                    value={sumD5_27}
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
                    name="E5_27"
                    value={sumE5_27}
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
                    name="F5_27"
                    value={sumF5_27}
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
                    name="G5_27"
                    value={sumG5_27}
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
                    name="H5_27"
                    value={sumH5_27}
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
                    name="I5_27"
                    value={sumI5_27}
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
            <div className="col-lg-4 border-end border-black d-flex justify-content-center">
              <h6>Actual/Projected N W C(C)</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B5_28"
                    value={sumB5_28}
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
                    name="C5_28"
                    value={sumC5_28}
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
                    name="D5_28"
                    value={sumD5_28}
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
                    name="E5_28"
                    value={sumE5_28}
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
                    name="F5_28"
                    value={sumF5_28}
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
                    name="G5_28"
                    value={sumG5_28}
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
                    name="H5_28"
                    value={sumH5_28}
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
                    name="I5_28"
                    value={sumI5_28}
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
            <div className="col-lg-4 border-end border-black d-flex justify-content-center">
              <h6>A - B (I)</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B5_29"
                    value={sumB5_29}
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
                    name="C5_29"
                    value={sumC5_29}
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
                    name="D5_29"
                    value={sumD5_29}
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
                    name="E5_29"
                    value={sumE5_29}
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
                    name="F5_29"
                    value={sumF5_29}
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
                    name="G5_29"
                    value={sumG5_29}
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
                    name="H5_29"
                    value={sumH5_29}
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
                    name="I5_29"
                    value={sumI5_29}
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
            <div className="col-lg-4 border-end border-black d-flex justify-content-center">
              <h6>A - C (II)</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B5_30"
                    value={sumB5_30}
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
                    name="C5_30"
                    value={sumC5_30}
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
                    name="D5_30"
                    value={sumD5_30}
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
                    name="E5_30"
                    value={sumE5_30}
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
                    name="F5_30"
                    value={sumF5_30}
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
                    name="G5_30"
                    value={sumG5_30}
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
                    name="H5_30"
                    value={sumH5_30}
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
                    name="I5_30"
                    value={sumI5_30}
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
            <div className="col-lg-4 border-end border-black d-flex justify-content-center">
              <h6>M P B F( Lower of I or II )</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B5_31"
                    value={sumB5_31}
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
                    name="C5_31"
                    value={sumC5_31}
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
                    name="D5_31"
                    value={sumD5_31}
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
                    name="E5_31"
                    value={sumE5_31}
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
                    name="F5_31"
                    value={sumF5_31}
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
                    name="G5_31"
                    value={sumG5_31}
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
                    name="H5_31"
                    value={sumH5_31}
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
                    name="I5_31"
                    value={sumI5_31}
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
            <div className="col-lg-4 border-end border-black d-flex justify-content-center">
              <h6>Excess borrowings representing</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col"></div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col"></div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col"></div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col"></div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col"></div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col"></div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col"></div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col"></div>
              </div>
            </div>
            {/* Add similar input fields for other years here */}
          </div>
        </div>

        <div className="container-fluid border-1 border-black mt-3">
          <div className="row">
            <div className="col-lg-4 border-end border-black d-flex justify-content-center">
              <h6>SHORTFALL IN NWC</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B5_33"
                    value={sumB5_33}
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
                    name="C5_33"
                    value={sumC5_33}
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
                    name="D5_33"
                    value={sumD5_33}
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
                    name="E5_33"
                    value={sumE5_33}
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
                    name="F5_33"
                    value={sumF5_33}
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
                    name="G5_33"
                    value={sumG5_33}
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
                    name="H5_33"
                    value={sumH5_33}
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
                    name="I5_33"
                    value={sumI5_33}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
            {/* Add similar input fields for other years here */}
          </div>
        </div>

        {/*--------------------------------------------------- FIXED ASSETS--------------------------------------- */}
        <div className="container-fluid border-1 border-black mt-3">
          <div
            className="row"
            style={{ backgroundColor: "rgb(224, 231, 231)" }}
          >
            <div className="col-lg-4 border-end border-black d-flex justify-content-center">
              <h5>FIXED ASSETS</h5>
            </div>
          </div>
        </div>
        <div className="container-fluid border-1 border-black mt-3">
          <div className="row">
            <div className="col-lg-4 border-end border-black d-flex justify-content-center">
              <h5>Margin Of Security</h5>
            </div>
          </div>
        </div>
        <div className="container-fluid border-1 border-black mt-3">
          <div className="row">
            <div className="col-lg-4 border-end border-black d-flex justify-content-center">
              <h6>Gross Fixed Assets</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B5_37"
                    value={sumB5_37}
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
                    name="C5_37"
                    value={sumC5_37}
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
                    name="D5_37"
                    value={sumD5_37}
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
                    name="E5_37"
                    value={sumE5_37}
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
                    name="F5_37"
                    value={sumF5_37}
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
                    name="G5_37"
                    value={sumG5_37}
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
                    name="H5_37"
                    value={sumH5_37}
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
                    name="I5_37"
                    value={sumI5_37}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid border-1 border-black mt-3">
          <div className="row">
            <div className="col-lg-4 border-end border-black d-flex justify-content-center">
              <h6>WDV of Fixed Assets</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B5_38"
                    value={sumB5_38}
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
                    name="C5_38"
                    value={sumC5_38}
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
                    name="D5_38"
                    value={sumD5_38}
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
                    name="E5_38"
                    value={sumE5_38}
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
                    name="F5_38"
                    value={sumF5_38}
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
                    name="G5_38"
                    value={sumG5_38}
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
                    name="H5_38"
                    value={sumH5_38}
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
                    name="I5_38"
                    value={sumI5_38}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid border-1 border-black mt-3">
          <div className="row">
            <div className="col-lg-4 border-end border-black d-flex justify-content-center">
              <h6>Term Loan O/S</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B5_39"
                    value={sumB5_39}
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
                    name="C5_39"
                    value={sumC5_39}
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
                    name="D5_39"
                    value={sumD5_39}
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
                    name="E5_39"
                    value={sumE5_39}
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
                    name="F5_39"
                    value={sumF5_39}
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
                    name="G5_39"
                    value={sumG5_39}
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
                    name="H5_39"
                    value={sumH5_39}
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
                    name="I5_39"
                    value={sumI5_39}
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
            <div className="col-lg-4 border-end border-black d-flex justify-content-center">
              <h6>Gross Fixed Assets / Term Loan</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B5_40"
                    value={sumB5_40}
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
                    name="C5_40"
                    value={sumC5_40}
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
                    name="D5_40"
                    value={sumD5_40}
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
                    name="E5_40"
                    value={sumE5_40}
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
                    name="F5_40"
                    value={sumF5_40}
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
                    name="G5_40"
                    value={sumG5_40}
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
                    name="H5_40"
                    value={sumH5_40}
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
                    name="I5_40"
                    value={sumI5_40}
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
            <div className="col-lg-4 border-end border-black d-flex justify-content-center">
              <h6>Margin</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B5_41"
                    value={sumB5_41}
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
                    name="C5_41"
                    value={sumC5_41}
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
                    name="D5_41"
                    value={sumD5_41}
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
                    name="E5_41"
                    value={sumE5_41}
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
                    name="F5_41"
                    value={sumF5_41}
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
                    name="G5_41"
                    value={sumG5_41}
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
                    name="H5_41"
                    value={sumH5_41}
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
                    name="I5_41"
                    value={sumI5_41}
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
            <div className="col-lg-4 border-end border-black d-flex justify-content-center">
              <h6>Security Margin</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B5_42"
                    value={sumB5_42}
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
                    name="C5_42"
                    value={sumC5_42}
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
                    name="D5_42"
                    value={sumD5_42}
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
                    name="E5_42"
                    value={sumE5_42}
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
                    name="F5_42"
                    value={sumF5_42}
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
                    name="G5_42"
                    value={sumG5_42}
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
                    name="H5_42"
                    value={sumH5_42}
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
                    name="I5_42"
                    value={sumI5_42}
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
            <div className="col-lg-4 border-end border-black d-flex justify-content-center">
              <h6>Average Security Margin</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B5_43"
                    value={inputValues.B5_43}
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
                    name="C5_43"
                    value={inputValues.C5_43}
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
                    name="D5_43"
                    value={inputValues.D5_43}
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
                    name="E5_43"
                    value={inputValues.E5_43}
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
                    name="F5_43"
                    value={inputValues.F5_43}
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
                    name="G5_43"
                    value={inputValues.G5_43}
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
                    name="H5_43"
                    value={inputValues.H5_43}
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
                    name="I5_43"
                    value={inputValues.I5_43}
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
            <div className="col-lg-4 border-end border-black d-flex justify-content-center">
              <h6>Fixed Asset Coverage Ratio</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B5_44"
                    value={sumB5_44}
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
                    name="C5_44"
                    value={sumC5_44}
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
                    name="D5_44"
                    value={sumD5_44}
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
                    name="E5_44"
                    value={sumE5_44}
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
                    name="F5_44"
                    value={sumF5_44}
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
                    name="G5_44"
                    value={sumG5_44}
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
                    name="H5_44"
                    value={sumH5_44}
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
                    name="I5_44"
                    value={sumI5_44}
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
          <div
            className="row"
            style={{ backgroundColor: "rgb(224, 231, 231)" }}
          >
            <div className="col-lg-4 border-end border-black d-flex justify-content-center">
              <h5></h5>
            </div>
          </div>
        </div>
        <div className="container-fluid border-1 border-black mt-3">
          <div className="row">
            <div className="col-lg-4 border-end border-black d-flex justify-content-center">
              <h6>If Cash accrual greater TL Installment</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    style={{ fontWeight: "bold" }}
                    aria-label="First name"
                    name="B5_46"
                    value={inputValues.B5_46}
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
                    style={{ fontWeight: "bold" }}
                    aria-label="First name"
                    name="C5_46"
                    value={inputValues.C5_46}
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
                    style={{ fontWeight: "bold" }}
                    aria-label="First name"
                    name="D5_46"
                    value={inputValues.D5_46}
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
                    style={{ fontWeight: "bold" }}
                    aria-label="First name"
                    name="E5_46"
                    value={inputValues.E5_46}
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
                    style={{ fontWeight: "bold" }}
                    aria-label="First name"
                    name="F5_46"
                    value={inputValues.F5_46}
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
                    style={{ fontWeight: "bold" }}
                    aria-label="First name"
                    name="G5_46"
                    value={inputValues.G5_46}
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
                    style={{ fontWeight: "bold" }}
                    aria-label="First name"
                    name="H5_46"
                    value={inputValues.H5_46}
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
                    style={{ fontWeight: "bold" }}
                    aria-label="First name"
                    name="I5_46"
                    value={inputValues.I5_46}
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
            <div className="col-lg-4 border-end border-black d-flex justify-content-center">
              <h6>Cash Accrual</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B5_47"
                    value={sumB5_47}
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
                    name="C5_47"
                    value={sumC5_47}
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
                    name="D5_47"
                    value={sumD5_47}
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
                    name="E5_47"
                    value={sumE5_47}
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
                    name="F5_47"
                    value={sumF5_47}
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
                    name="G5_47"
                    value={sumG5_47}
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
                    name="H5_47"
                    value={sumH5_47}
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
                    name="I5_47"
                    value={sumI5_47}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid border-1 border-black mt-3">
          <div className="row">
            <div className="col-lg-4 border-end border-black d-flex justify-content-center">
              <h6>TL Installment</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B5_48"
                    value={sumB5_48}
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
                    name="C5_48"
                    value={sumC5_48}
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
                    name="D5_48"
                    value={sumD5_48}
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
                    name="E5_48"
                    value={sumE5_48}
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
                    name="F5_48"
                    value={sumF5_48}
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
                    name="G5_48"
                    value={sumG5_48}
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
                    name="H5_48"
                    value={sumH5_48}
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
                    name="I5_48"
                    value={sumI5_48}
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
            <div className="col-lg-4 border-end border-black d-flex justify-content-center">
              <h6>Difference</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B5_49"
                    value={sumB5_49}
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
                    name="C5_49"
                    value={sumC5_49}
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
                    name="D5_49"
                    value={sumD5_49}
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
                    name="E5_49"
                    value={sumE5_49}
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
                    name="F5_49"
                    value={sumF5_49}
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
                    name="G5_49"
                    value={sumG5_49}
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
                    name="H5_49"
                    value={sumH5_49}
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
                    name="I5_49"
                    value={sumI5_49}
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
            <div className="col-lg-4 border-end border-black d-flex justify-content-center">
              <h6>Net DSCR</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B5_50"
                    value={inputValues.B5_50}
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
                    name="C5_50"
                    value={inputValues.C5_50}
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
                    name="D5_50"
                    value={inputValues.D5_50}
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
                    name="E5_50"
                    value={inputValues.E5_50}
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
                    name="F5_50"
                    value={inputValues.F5_50}
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
                    name="G5_50"
                    value={inputValues.G5_50}
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
                    name="H5_50"
                    value={inputValues.H5_50}
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
                    name="I5_50"
                    value={inputValues.I5_50}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            {/* Add similar input fields for other years here */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default WctlAssmt;
