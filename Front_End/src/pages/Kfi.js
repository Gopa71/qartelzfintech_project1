// Opstmt.js
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import jwtDecode from 'jwt-decode'
import { AppContext } from "../AppContext";
import Navbarr from "../views/navbarr/Navbarr";
import Footer from "../views/Footer/footer";
import "../styles.css";

function Opstmt() {
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

    Cost27,
    setCost27,
    Cost26,
    setCost26,
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
    sumB37,
    setSumB37,
    sumC37,
    setSumC37,
    sumD37,
    setSumD37,
    sumE37,
    setSumE37,
    sumF37,
    setSumF37,
    sumG37,
    setSumG37,
    sumH37,
    setSumH37,
    sumI37,
    setSumI37,

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

    sumB51,
    setSumB51,
    sumC51,
    setSumC51,
    sumD51,
    setSumD51,
    sumE51,
    setSumE51,
    sumF51,
    setSumF51,
    sumG51,
    setSumG51,
    sumH51,
    setSumH51,
    sumI51,
    setSumI51,

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

    sumB25,
    setSumB25,
    sumC25,
    setSumC25,
    sumD25,
    setSumD25,
    sumE25,
    setSumE25,
    sumF25,
    setSumF25,
    sumG25,
    setSumG25,
    sumH25,
    setSumH25,
    sumI25,
    setSumI25,

    sumB31,
    setSumB31,
    sumC31,
    setSumC31,
    sumD31,
    setSumD31,
    sumE31,
    setSumE31,
    sumF31,
    setSumF31,
    sumG31,
    setSumG31,
    sumH31,
    setSumH31,
    sumI31,
    setSumI31,

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

    sumB7_66,
    setSumB7_66,
    sumC7_66,
    setSumC7_66,
    sumD7_66,
    setSumD7_66,
    sumE7_66,
    setSumE7_66,
    sumF7_66,
    setSumF7_66,
    sumG7_66,
    setSumG7_66,
    sumH7_66,
    setSumH7_66,
    sumI7_66,
    setSumI7_66,
  } = useContext(AppContext);

  const [sumB7_5, setSumB7_5] = useState(0);
  const [sumC7_5, setSumC7_5] = useState(0);
  const [sumD7_5, setSumD7_5] = useState(0);
  const [sumE7_5, setSumE7_5] = useState(0);
  const [sumF7_5, setSumF7_5] = useState(0);
  const [sumG7_5, setSumG7_5] = useState(0);
  const [sumH7_5, setSumH7_5] = useState(0);
  const [sumI7_5, setSumI7_5] = useState(0);

  const [sumC7_6, setSumC7_6] = useState(0);
  const [sumD7_6, setSumD7_6] = useState(0);
  const [sumE7_6, setSumE7_6] = useState(0);
  const [sumF7_6, setSumF7_6] = useState(0);
  const [sumG7_6, setSumG7_6] = useState(0);
  const [sumH7_6, setSumH7_6] = useState(0);
  const [sumI7_6, setSumI7_6] = useState(0);

  const [sumB7_7, setSumB7_7] = useState(0);
  const [sumC7_7, setSumC7_7] = useState(0);
  const [sumD7_7, setSumD7_7] = useState(0);
  const [sumE7_7, setSumE7_7] = useState(0);
  const [sumF7_7, setSumF7_7] = useState(0);
  const [sumG7_7, setSumG7_7] = useState(0);
  const [sumH7_7, setSumH7_7] = useState(0);
  const [sumI7_7, setSumI7_7] = useState(0);

  const [sumB7_8, setSumB7_8] = useState(0);
  const [sumC7_8, setSumC7_8] = useState(0);
  const [sumD7_8, setSumD7_8] = useState(0);
  const [sumE7_8, setSumE7_8] = useState(0);
  const [sumF7_8, setSumF7_8] = useState(0);
  const [sumG7_8, setSumG7_8] = useState(0);
  const [sumH7_8, setSumH7_8] = useState(0);
  const [sumI7_8, setSumI7_8] = useState(0);

  const [sumB7_9, setSumB7_9] = useState(0);
  const [sumC7_9, setSumC7_9] = useState(0);
  const [sumD7_9, setSumD7_9] = useState(0);
  const [sumE7_9, setSumE7_9] = useState(0);
  const [sumF7_9, setSumF7_9] = useState(0);
  const [sumG7_9, setSumG7_9] = useState(0);
  const [sumH7_9, setSumH7_9] = useState(0);
  const [sumI7_9, setSumI7_9] = useState(0);

  const [sumB7_10, setSumB7_10] = useState(0);
  const [sumC7_10, setSumC7_10] = useState(0);
  const [sumD7_10, setSumD7_10] = useState(0);
  const [sumE7_10, setSumE7_10] = useState(0);
  const [sumF7_10, setSumF7_10] = useState(0);
  const [sumG7_10, setSumG7_10] = useState(0);
  const [sumH7_10, setSumH7_10] = useState(0);
  const [sumI7_10, setSumI7_10] = useState(0);

  const [sumB7_11, setSumB7_11] = useState(0);
  const [sumC7_11, setSumC7_11] = useState(0);
  const [sumD7_11, setSumD7_11] = useState(0);
  const [sumE7_11, setSumE7_11] = useState(0);
  const [sumF7_11, setSumF7_11] = useState(0);
  const [sumG7_11, setSumG7_11] = useState(0);
  const [sumH7_11, setSumH7_11] = useState(0);
  const [sumI7_11, setSumI7_11] = useState(0);

  const [sumB7_12, setSumB7_12] = useState(0);
  const [sumC7_12, setSumC7_12] = useState(0);
  const [sumD7_12, setSumD7_12] = useState(0);
  const [sumE7_12, setSumE7_12] = useState(0);
  const [sumF7_12, setSumF7_12] = useState(0);
  const [sumG7_12, setSumG7_12] = useState(0);
  const [sumH7_12, setSumH7_12] = useState(0);
  const [sumI7_12, setSumI7_12] = useState(0);

  const [sumB7_13, setSumB7_13] = useState(0);
  const [sumC7_13, setSumC7_13] = useState(0);
  const [sumD7_13, setSumD7_13] = useState(0);
  const [sumE7_13, setSumE7_13] = useState(0);
  const [sumF7_13, setSumF7_13] = useState(0);
  const [sumG7_13, setSumG7_13] = useState(0);
  const [sumH7_13, setSumH7_13] = useState(0);
  const [sumI7_13, setSumI7_13] = useState(0);

  const [sumB7_14, setSumB7_14] = useState(0);
  const [sumC7_14, setSumC7_14] = useState(0);
  const [sumD7_14, setSumD7_14] = useState(0);
  const [sumE7_14, setSumE7_14] = useState(0);
  const [sumF7_14, setSumF7_14] = useState(0);
  const [sumG7_14, setSumG7_14] = useState(0);
  const [sumH7_14, setSumH7_14] = useState(0);
  const [sumI7_14, setSumI7_14] = useState(0);

  const [sumB7_15, setSumB7_15] = useState(0);
  const [sumC7_15, setSumC7_15] = useState(0);
  const [sumD7_15, setSumD7_15] = useState(0);
  const [sumE7_15, setSumE7_15] = useState(0);
  const [sumF7_15, setSumF7_15] = useState(0);
  const [sumG7_15, setSumG7_15] = useState(0);
  const [sumH7_15, setSumH7_15] = useState(0);
  const [sumI7_15, setSumI7_15] = useState(0);

  const [sumB7_16, setSumB7_16] = useState(0);
  const [sumC7_16, setSumC7_16] = useState(0);
  const [sumD7_16, setSumD7_16] = useState(0);
  const [sumE7_16, setSumE7_16] = useState(0);
  const [sumF7_16, setSumF7_16] = useState(0);
  const [sumG7_16, setSumG7_16] = useState(0);
  const [sumH7_16, setSumH7_16] = useState(0);
  const [sumI7_16, setSumI7_16] = useState(0);

  const [sumB7_17, setSumB7_17] = useState(0);
  const [sumC7_17, setSumC7_17] = useState(0);
  const [sumD7_17, setSumD7_17] = useState(0);
  const [sumE7_17, setSumE7_17] = useState(0);
  const [sumF7_17, setSumF7_17] = useState(0);
  const [sumG7_17, setSumG7_17] = useState(0);
  const [sumH7_17, setSumH7_17] = useState(0);
  const [sumI7_17, setSumI7_17] = useState(0);

  const [sumB7_18, setSumB7_18] = useState(0);
  const [sumC7_18, setSumC7_18] = useState(0);
  const [sumD7_18, setSumD7_18] = useState(0);
  const [sumE7_18, setSumE7_18] = useState(0);
  const [sumF7_18, setSumF7_18] = useState(0);
  const [sumG7_18, setSumG7_18] = useState(0);
  const [sumH7_18, setSumH7_18] = useState(0);
  const [sumI7_18, setSumI7_18] = useState(0);

  const [sumB7_22, setSumB7_22] = useState(0);
  const [sumC7_22, setSumC7_22] = useState(0);
  const [sumD7_22, setSumD7_22] = useState(0);
  const [sumE7_22, setSumE7_22] = useState(0);
  const [sumF7_22, setSumF7_22] = useState(0);
  const [sumG7_22, setSumG7_22] = useState(0);
  const [sumH7_22, setSumH7_22] = useState(0);
  const [sumI7_22, setSumI7_22] = useState(0);

  const [sumB7_23, setSumB7_23] = useState(0);
  const [sumC7_23, setSumC7_23] = useState(0);
  const [sumD7_23, setSumD7_23] = useState(0);
  const [sumE7_23, setSumE7_23] = useState(0);
  const [sumF7_23, setSumF7_23] = useState(0);
  const [sumG7_23, setSumG7_23] = useState(0);
  const [sumH7_23, setSumH7_23] = useState(0);
  const [sumI7_23, setSumI7_23] = useState(0);

  const [sumB7_24, setSumB7_24] = useState(0);
  const [sumC7_24, setSumC7_24] = useState(0);
  const [sumD7_24, setSumD7_24] = useState(0);
  const [sumE7_24, setSumE7_24] = useState(0);
  const [sumF7_24, setSumF7_24] = useState(0);
  const [sumG7_24, setSumG7_24] = useState(0);
  const [sumH7_24, setSumH7_24] = useState(0);
  const [sumI7_24, setSumI7_24] = useState(0);

  const [sumB7_25, setSumB7_25] = useState(0);
  const [sumC7_25, setSumC7_25] = useState(0);
  const [sumD7_25, setSumD7_25] = useState(0);
  const [sumE7_25, setSumE7_25] = useState(0);
  const [sumF7_25, setSumF7_25] = useState(0);
  const [sumG7_25, setSumG7_25] = useState(0);
  const [sumH7_25, setSumH7_25] = useState(0);
  const [sumI7_25, setSumI7_25] = useState(0);

  const [sumB7_27, setSumB7_27] = useState(0);
  const [sumC7_27, setSumC7_27] = useState(0);
  const [sumD7_27, setSumD7_27] = useState(0);
  const [sumE7_27, setSumE7_27] = useState(0);
  const [sumF7_27, setSumF7_27] = useState(0);
  const [sumG7_27, setSumG7_27] = useState(0);
  const [sumH7_27, setSumH7_27] = useState(0);
  const [sumI7_27, setSumI7_27] = useState(0);

  const [sumB7_28, setSumB7_28] = useState(0);
  const [sumC7_28, setSumC7_28] = useState(0);
  const [sumD7_28, setSumD7_28] = useState(0);
  const [sumE7_28, setSumE7_28] = useState(0);
  const [sumF7_28, setSumF7_28] = useState(0);
  const [sumG7_28, setSumG7_28] = useState(0);
  const [sumH7_28, setSumH7_28] = useState(0);
  const [sumI7_28, setSumI7_28] = useState(0);

  const [sumB7_29, setSumB7_29] = useState(0);
  const [sumC7_29, setSumC7_29] = useState(0);
  const [sumD7_29, setSumD7_29] = useState(0);
  const [sumE7_29, setSumE7_29] = useState(0);
  const [sumF7_29, setSumF7_29] = useState(0);
  const [sumG7_29, setSumG7_29] = useState(0);
  const [sumH7_29, setSumH7_29] = useState(0);
  const [sumI7_29, setSumI7_29] = useState(0);

  const [sumB7_30, setSumB7_30] = useState(0);
  const [sumC7_30, setSumC7_30] = useState(0);
  const [sumD7_30, setSumD7_30] = useState(0);
  const [sumE7_30, setSumE7_30] = useState(0);
  const [sumF7_30, setSumF7_30] = useState(0);
  const [sumG7_30, setSumG7_30] = useState(0);
  const [sumH7_30, setSumH7_30] = useState(0);
  const [sumI7_30, setSumI7_30] = useState(0);

  const [sumB7_31, setSumB7_31] = useState(0);
  const [sumC7_31, setSumC7_31] = useState(0);
  const [sumD7_31, setSumD7_31] = useState(0);
  const [sumE7_31, setSumE7_31] = useState(0);
  const [sumF7_31, setSumF7_31] = useState(0);
  const [sumG7_31, setSumG7_31] = useState(0);
  const [sumH7_31, setSumH7_31] = useState(0);
  const [sumI7_31, setSumI7_31] = useState(0);

  const [sumB7_34, setSumB7_34] = useState(0);
  const [sumC7_34, setSumC7_34] = useState(0);
  const [sumD7_34, setSumD7_34] = useState(0);
  const [sumE7_34, setSumE7_34] = useState(0);
  const [sumF7_34, setSumF7_34] = useState(0);
  const [sumG7_34, setSumG7_34] = useState(0);
  const [sumH7_34, setSumH7_34] = useState(0);
  const [sumI7_34, setSumI7_34] = useState(0);

  const [sumB7_35, setSumB7_35] = useState(0);
  const [sumC7_35, setSumC7_35] = useState(0);
  const [sumD7_35, setSumD7_35] = useState(0);
  const [sumE7_35, setSumE7_35] = useState(0);
  const [sumF7_35, setSumF7_35] = useState(0);
  const [sumG7_35, setSumG7_35] = useState(0);
  const [sumH7_35, setSumH7_35] = useState(0);
  const [sumI7_35, setSumI7_35] = useState(0);

  const [sumB7_36, setSumB7_36] = useState(0);
  const [sumC7_36, setSumC7_36] = useState(0);
  const [sumD7_36, setSumD7_36] = useState(0);
  const [sumE7_36, setSumE7_36] = useState(0);
  const [sumF7_36, setSumF7_36] = useState(0);
  const [sumG7_36, setSumG7_36] = useState(0);
  const [sumH7_36, setSumH7_36] = useState(0);
  const [sumI7_36, setSumI7_36] = useState(0);

  const [sumB7_37, setSumB7_37] = useState(0);
  const [sumC7_37, setSumC7_37] = useState(0);
  const [sumD7_37, setSumD7_37] = useState(0);
  const [sumE7_37, setSumE7_37] = useState(0);
  const [sumF7_37, setSumF7_37] = useState(0);
  const [sumG7_37, setSumG7_37] = useState(0);
  const [sumH7_37, setSumH7_37] = useState(0);
  const [sumI7_37, setSumI7_37] = useState(0);

  const [sumB7_38, setSumB7_38] = useState(0);
  const [sumC7_38, setSumC7_38] = useState(0);
  const [sumD7_38, setSumD7_38] = useState(0);
  const [sumE7_38, setSumE7_38] = useState(0);
  const [sumF7_38, setSumF7_38] = useState(0);
  const [sumG7_38, setSumG7_38] = useState(0);
  const [sumH7_38, setSumH7_38] = useState(0);
  const [sumI7_38, setSumI7_38] = useState(0);

  const [sumB7_41, setSumB7_41] = useState(0);
  const [sumC7_41, setSumC7_41] = useState(0);
  const [sumD7_41, setSumD7_41] = useState(0);
  const [sumE7_41, setSumE7_41] = useState(0);
  const [sumF7_41, setSumF7_41] = useState(0);
  const [sumG7_41, setSumG7_41] = useState(0);
  const [sumH7_41, setSumH7_41] = useState(0);
  const [sumI7_41, setSumI7_41] = useState(0);

  const [sumB7_42, setSumB7_42] = useState(0);
  const [sumC7_42, setSumC7_42] = useState(0);
  const [sumD7_42, setSumD7_42] = useState(0);
  const [sumE7_42, setSumE7_42] = useState(0);
  const [sumF7_42, setSumF7_42] = useState(0);
  const [sumG7_42, setSumG7_42] = useState(0);
  const [sumH7_42, setSumH7_42] = useState(0);
  const [sumI7_42, setSumI7_42] = useState(0);

  const [sumB7_43, setSumB7_43] = useState(0);
  const [sumC7_43, setSumC7_43] = useState(0);
  const [sumD7_43, setSumD7_43] = useState(0);
  const [sumE7_43, setSumE7_43] = useState(0);
  const [sumF7_43, setSumF7_43] = useState(0);
  const [sumG7_43, setSumG7_43] = useState(0);
  const [sumH7_43, setSumH7_43] = useState(0);
  const [sumI7_43, setSumI7_43] = useState(0);

  const [sumB7_44, setSumB7_44] = useState(0);
  const [sumC7_44, setSumC7_44] = useState(0);
  const [sumD7_44, setSumD7_44] = useState(0);
  const [sumE7_44, setSumE7_44] = useState(0);
  const [sumF7_44, setSumF7_44] = useState(0);
  const [sumG7_44, setSumG7_44] = useState(0);
  const [sumH7_44, setSumH7_44] = useState(0);
  const [sumI7_44, setSumI7_44] = useState(0);

  const [sumB7_45, setSumB7_45] = useState(0);
  const [sumC7_45, setSumC7_45] = useState(0);
  const [sumD7_45, setSumD7_45] = useState(0);
  const [sumE7_45, setSumE7_45] = useState(0);
  const [sumF7_45, setSumF7_45] = useState(0);
  const [sumG7_45, setSumG7_45] = useState(0);
  const [sumH7_45, setSumH7_45] = useState(0);
  const [sumI7_45, setSumI7_45] = useState(0);

  const [sumB7_46, setSumB7_46] = useState(0);
  const [sumC7_46, setSumC7_46] = useState(0);
  const [sumD7_46, setSumD7_46] = useState(0);
  const [sumE7_46, setSumE7_46] = useState(0);
  const [sumF7_46, setSumF7_46] = useState(0);
  const [sumG7_46, setSumG7_46] = useState(0);
  const [sumH7_46, setSumH7_46] = useState(0);
  const [sumI7_46, setSumI7_46] = useState(0);

  const [sumB7_49, setSumB7_49] = useState(0);
  const [sumC7_49, setSumC7_49] = useState(0);
  const [sumD7_49, setSumD7_49] = useState(0);
  const [sumE7_49, setSumE7_49] = useState(0);
  const [sumF7_49, setSumF7_49] = useState(0);
  const [sumG7_49, setSumG7_49] = useState(0);
  const [sumH7_49, setSumH7_49] = useState(0);
  const [sumI7_49, setSumI7_49] = useState(0);

  const [sumB7_50, setSumB7_50] = useState(0);
  const [sumC7_50, setSumC7_50] = useState(0);
  const [sumD7_50, setSumD7_50] = useState(0);
  const [sumE7_50, setSumE7_50] = useState(0);
  const [sumF7_50, setSumF7_50] = useState(0);
  const [sumG7_50, setSumG7_50] = useState(0);
  const [sumH7_50, setSumH7_50] = useState(0);
  const [sumI7_50, setSumI7_50] = useState(0);

  const [sumB7_51, setSumB7_51] = useState(0);
  const [sumC7_51, setSumC7_51] = useState(0);
  const [sumD7_51, setSumD7_51] = useState(0);
  const [sumE7_51, setSumE7_51] = useState(0);
  const [sumF7_51, setSumF7_51] = useState(0);
  const [sumG7_51, setSumG7_51] = useState(0);
  const [sumH7_51, setSumH7_51] = useState(0);
  const [sumI7_51, setSumI7_51] = useState(0);

  const [sumB7_52, setSumB7_52] = useState(0);
  const [sumC7_52, setSumC7_52] = useState(0);
  const [sumD7_52, setSumD7_52] = useState(0);
  const [sumE7_52, setSumE7_52] = useState(0);
  const [sumF7_52, setSumF7_52] = useState(0);
  const [sumG7_52, setSumG7_52] = useState(0);
  const [sumH7_52, setSumH7_52] = useState(0);
  const [sumI7_52, setSumI7_52] = useState(0);

  const [sumB7_53, setSumB7_53] = useState(0);
  const [sumC7_53, setSumC7_53] = useState(0);
  const [sumD7_53, setSumD7_53] = useState(0);
  const [sumE7_53, setSumE7_53] = useState(0);
  const [sumF7_53, setSumF7_53] = useState(0);
  const [sumG7_53, setSumG7_53] = useState(0);
  const [sumH7_53, setSumH7_53] = useState(0);
  const [sumI7_53, setSumI7_53] = useState(0);

  const [sumB7_54, setSumB7_54] = useState(0);
  const [sumC7_54, setSumC7_54] = useState(0);
  const [sumD7_54, setSumD7_54] = useState(0);
  const [sumE7_54, setSumE7_54] = useState(0);
  const [sumF7_54, setSumF7_54] = useState(0);
  const [sumG7_54, setSumG7_54] = useState(0);
  const [sumH7_54, setSumH7_54] = useState(0);
  const [sumI7_54, setSumI7_54] = useState(0);

  const [sumB7_57, setSumB7_57] = useState(0);
  const [sumC7_57, setSumC7_57] = useState(0);
  const [sumD7_57, setSumD7_57] = useState(0);
  const [sumE7_57, setSumE7_57] = useState(0);
  const [sumF7_57, setSumF7_57] = useState(0);
  const [sumG7_57, setSumG7_57] = useState(0);
  const [sumH7_57, setSumH7_57] = useState(0);
  const [sumI7_57, setSumI7_57] = useState(0);

  const [sumB7_58, setSumB7_58] = useState(0);
  const [sumC7_58, setSumC7_58] = useState(0);
  const [sumD7_58, setSumD7_58] = useState(0);
  const [sumE7_58, setSumE7_58] = useState(0);
  const [sumF7_58, setSumF7_58] = useState(0);
  const [sumG7_58, setSumG7_58] = useState(0);
  const [sumH7_58, setSumH7_58] = useState(0);
  const [sumI7_58, setSumI7_58] = useState(0);

  const [sumB7_59, setSumB7_59] = useState(0);
  const [sumC7_59, setSumC7_59] = useState(0);
  const [sumD7_59, setSumD7_59] = useState(0);
  const [sumE7_59, setSumE7_59] = useState(0);
  const [sumF7_59, setSumF7_59] = useState(0);
  const [sumG7_59, setSumG7_59] = useState(0);
  const [sumH7_59, setSumH7_59] = useState(0);
  const [sumI7_59, setSumI7_59] = useState(0);

  const [sumB7_60, setSumB7_60] = useState(0);
  const [sumC7_60, setSumC7_60] = useState(0);
  const [sumD7_60, setSumD7_60] = useState(0);
  const [sumE7_60, setSumE7_60] = useState(0);
  const [sumF7_60, setSumF7_60] = useState(0);
  const [sumG7_60, setSumG7_60] = useState(0);
  const [sumH7_60, setSumH7_60] = useState(0);
  const [sumI7_60, setSumI7_60] = useState(0);

  const [sumB7_61, setSumB7_61] = useState(0);
  const [sumC7_61, setSumC7_61] = useState(0);
  const [sumD7_61, setSumD7_61] = useState(0);
  const [sumE7_61, setSumE7_61] = useState(0);
  const [sumF7_61, setSumF7_61] = useState(0);
  const [sumG7_61, setSumG7_61] = useState(0);
  const [sumH7_61, setSumH7_61] = useState(0);
  const [sumI7_61, setSumI7_61] = useState(0);

  const [sumB7_62, setSumB7_62] = useState(0);
  const [sumC7_62, setSumC7_62] = useState(0);
  const [sumD7_62, setSumD7_62] = useState(0);
  const [sumE7_62, setSumE7_62] = useState(0);
  const [sumF7_62, setSumF7_62] = useState(0);
  const [sumG7_62, setSumG7_62] = useState(0);
  const [sumH7_62, setSumH7_62] = useState(0);
  const [sumI7_62, setSumI7_62] = useState(0);

  const [sumB7_63, setSumB7_63] = useState(0);
  const [sumC7_63, setSumC7_63] = useState(0);
  const [sumD7_63, setSumD7_63] = useState(0);
  const [sumE7_63, setSumE7_63] = useState(0);
  const [sumF7_63, setSumF7_63] = useState(0);
  const [sumG7_63, setSumG7_63] = useState(0);
  const [sumH7_63, setSumH7_63] = useState(0);
  const [sumI7_63, setSumI7_63] = useState(0);

  const [sumB7_64, setSumB7_64] = useState(0);
  const [sumC7_64, setSumC7_64] = useState(0);
  const [sumD7_64, setSumD7_64] = useState(0);
  const [sumE7_64, setSumE7_64] = useState(0);
  const [sumF7_64, setSumF7_64] = useState(0);
  const [sumG7_64, setSumG7_64] = useState(0);
  const [sumH7_64, setSumH7_64] = useState(0);
  const [sumI7_64, setSumI7_64] = useState(0);

  const [sumB7_65, setSumB7_65] = useState(0);
  const [sumC7_65, setSumC7_65] = useState(0);
  const [sumD7_65, setSumD7_65] = useState(0);
  const [sumE7_65, setSumE7_65] = useState(0);
  const [sumF7_65, setSumF7_65] = useState(0);
  const [sumG7_65, setSumG7_65] = useState(0);
  const [sumH7_65, setSumH7_65] = useState(0);
  const [sumI7_65, setSumI7_65] = useState(0);

  //------------------------------------------------ MAIN FUNCION2 ---------------------------------------------

  const uploadData = async (cell_id, cell_value) => {
    try {
      const user_id = localStorage.getItem("user_id");
      const res = await fetch("http://127.0.0.1:8000/api/save_kfi/", {
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
        const res = await fetch("http://127.0.0.1:8000/api/save_kfi/", {
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

  //------------------------------------------------- TOTAL OF 5 -------------------------------------------------------

  const uploadSumB7_5 = () => {
    setSumB7_5(parseFloat(sumB4_34 || 0));
    setSumC7_5(parseFloat(sumC4_34 || 0));
    setSumD7_5(parseFloat(sumD4_34 || 0));
    setSumE7_5(parseFloat(sumE4_34 || 0));
    setSumF7_5(parseFloat(sumF4_34 || 0));
    setSumG7_5(parseFloat(sumG4_34 || 0));
    setSumH7_5(parseFloat(sumH4_34 || 0));
    setSumI7_5(parseFloat(sumI4_34 || 0));
  };

  useEffect(() => {
    uploadSumB7_5();
  }, [
    inputValues,
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
    const uploadSumB7_5 = async () => {
      await uploadData("B7_5", sumB7_5.toString());
      await uploadData("C7_5", sumC7_5.toString());
      await uploadData("D7_5", sumD7_5.toString());
      await uploadData("E7_5", sumE7_5.toString());
      await uploadData("F7_5", sumF7_5.toString());
      await uploadData("G7_5", sumG7_5.toString());
      await uploadData("H7_5", sumH7_5.toString());
      await uploadData("I7_5", sumI7_5.toString());
    };
    if (
      sumB7_5 ||
      sumC7_5 ||
      sumD7_5 ||
      sumE7_5 ||
      sumF7_5 ||
      sumG7_5 ||
      sumH7_5 ||
      sumI7_5
    ) {
      uploadSumB7_5();
    }
  }, [sumB7_5, sumC7_5, sumD7_5, sumE7_5, sumF7_5, sumG7_5, sumH7_5, sumI7_5]);

  //------------------------------------------------- TOTAL OF 6 -------------------------------------------------------

  const uploadSumB7_6 = () => {
    setSumC7_6(parseFloat(sumC4_35 || 0));
    setSumD7_6(parseFloat(sumD4_35 || 0));
    setSumE7_6(parseFloat(sumE4_35 || 0));
    setSumF7_6(parseFloat(sumF4_35 || 0));
    setSumG7_6(parseFloat(sumG4_35 || 0));
    setSumH7_6(parseFloat(sumH4_35 || 0));
    setSumI7_6(parseFloat(sumI4_35 || 0));
  };

  useEffect(() => {
    uploadSumB7_6();
  }, [
    inputValues,
    sumC4_35,
    sumD4_35,
    sumE4_35,
    sumF4_35,
    sumG4_35,
    sumH4_35,
    sumI4_35,
  ]);

  useEffect(() => {
    const uploadSumB7_6 = async () => {
      await uploadData("C7_6", sumC7_6.toString());
      await uploadData("D7_6", sumD7_6.toString());
      await uploadData("E7_6", sumE7_6.toString());
      await uploadData("F7_6", sumF7_6.toString());
      await uploadData("G7_6", sumG7_6.toString());
      await uploadData("H7_6", sumH7_6.toString());
      await uploadData("I7_6", sumI7_6.toString());
    };
    if (
      sumC7_6 ||
      sumD7_6 ||
      sumE7_6 ||
      sumF7_6 ||
      sumG7_6 ||
      sumH7_6 ||
      sumI7_6
    ) {
      uploadSumB7_6();
    }
  }, [sumC7_6, sumD7_6, sumE7_6, sumF7_6, sumG7_6, sumH7_6, sumI7_6]);

  //------------------------------------------------- TOTAL OF 7 -------------------------------------------------------

  const uploadSumB7_7 = () => {
    setSumB7_7(parseFloat(Cost31.B1_31 || 0));
    setSumC7_7(parseFloat(Cost31.C1_31 || 0));
    setSumD7_7(parseFloat(Cost31.D1_31 || 0));
    setSumE7_7(parseFloat(Cost31.E1_31 || 0));
    setSumF7_7(parseFloat(Cost31.F1_31 || 0));
    setSumG7_7(parseFloat(Cost31.G1_31 || 0));
    setSumH7_7(parseFloat(Cost31.H1_31 || 0));
    setSumI7_7(parseFloat(Cost31.I1_31 || 0));
  };

  useEffect(() => {
    uploadSumB7_7();
  }, [inputValues, Cost31]);

  useEffect(() => {
    const uploadSumB7_7 = async () => {
      await uploadData("B7_7", sumB7_7.toString());
      await uploadData("C7_7", sumC7_7.toString());
      await uploadData("D7_7", sumD7_7.toString());
      await uploadData("E7_7", sumE7_7.toString());
      await uploadData("F7_7", sumF7_7.toString());
      await uploadData("G7_7", sumG7_7.toString());
      await uploadData("H7_7", sumH7_7.toString());
      await uploadData("I7_7", sumI7_7.toString());
    };
    if (
      sumB7_7 ||
      sumC7_7 ||
      sumD7_7 ||
      sumE7_7 ||
      sumF7_7 ||
      sumG7_7 ||
      sumH7_7 ||
      sumI7_7
    ) {
      uploadSumB7_7();
    }
  }, [sumB7_7, sumC7_7, sumD7_7, sumE7_7, sumF7_7, sumG7_7, sumH7_7, sumI7_7]);

  //------------------------------------------------- TOTAL OF 8 -------------------------------------------------------

  const uploadSumB7_8 = () => {
    setSumB7_8(parseFloat(sumB4_38 || 0));
    setSumC7_8(parseFloat(sumC4_38 || 0));
    setSumD7_8(parseFloat(sumD4_38 || 0));
    setSumE7_8(parseFloat(sumE4_38 || 0));
    setSumF7_8(parseFloat(sumF4_38 || 0));
    setSumG7_8(parseFloat(sumG4_38 || 0));
    setSumH7_8(parseFloat(sumH4_38 || 0));
    setSumI7_8(parseFloat(sumI4_38 || 0));
  };

  useEffect(() => {
    uploadSumB7_8();
  }, [
    inputValues,
    sumB4_38,
    sumC4_38,
    sumD4_38,
    sumE4_38,
    sumF4_38,
    sumG4_38,
    sumH4_38,
    sumI4_38,
  ]);

  useEffect(() => {
    const uploadSumB7_8 = async () => {
      await uploadData("B7_8", sumB7_8.toString());
      await uploadData("C7_8", sumC7_8.toString());
      await uploadData("D7_8", sumD7_8.toString());
      await uploadData("E7_8", sumE7_8.toString());
      await uploadData("F7_8", sumF7_8.toString());
      await uploadData("G7_8", sumG7_8.toString());
      await uploadData("H7_8", sumH7_8.toString());
      await uploadData("I7_8", sumI7_8.toString());
    };
    if (
      sumB7_8 ||
      sumC7_8 ||
      sumD7_8 ||
      sumE7_8 ||
      sumF7_8 ||
      sumG7_8 ||
      sumH7_8 ||
      sumI7_8
    ) {
      uploadSumB7_8();
    }
  }, [sumB7_8, sumC7_8, sumD7_8, sumE7_8, sumF7_8, sumG7_8, sumH7_8, sumI7_8]);

  //------------------------------------------------- TOTAL OF 9 -------------------------------------------------------

  const uploadSumB7_9 = () => {
    setSumB7_9(parseFloat(sumB4_40 || 0));
    setSumC7_9(parseFloat(sumC4_40 || 0));
    setSumD7_9(parseFloat(sumD4_40 || 0));
    setSumE7_9(parseFloat(sumE4_40 || 0));
    setSumF7_9(parseFloat(sumF4_40 || 0));
    setSumG7_9(parseFloat(sumG4_40 || 0));
    setSumH7_9(parseFloat(sumH4_40 || 0));
    setSumI7_9(parseFloat(sumI4_40 || 0));
  };

  useEffect(() => {
    uploadSumB7_9();
  }, [
    inputValues,
    sumB4_40,
    sumC4_40,
    sumD4_40,
    sumE4_40,
    sumF4_40,
    sumG4_40,
    sumH4_40,
    sumI4_40,
  ]);

  useEffect(() => {
    const uploadSumB7_9 = async () => {
      await uploadData("B7_9", sumB7_9.toString());
      await uploadData("C7_9", sumC7_9.toString());
      await uploadData("D7_9", sumD7_9.toString());
      await uploadData("E7_9", sumE7_9.toString());
      await uploadData("F7_9", sumF7_9.toString());
      await uploadData("G7_9", sumG7_9.toString());
      await uploadData("H7_9", sumH7_9.toString());
      await uploadData("I7_9", sumI7_9.toString());
    };
    if (
      sumB7_9 ||
      sumC7_9 ||
      sumD7_9 ||
      sumE7_9 ||
      sumF7_9 ||
      sumG7_9 ||
      sumH7_9 ||
      sumI7_9
    ) {
      uploadSumB7_9();
    }
  }, [sumB7_9, sumC7_9, sumD7_9, sumE7_9, sumF7_9, sumG7_9, sumH7_9, sumI7_9]);

  //------------------------------------------------- TOTAL OF 10 -------------------------------------------------------

  const uploadSumB7_10 = () => {
    setSumB7_10(parseFloat(sumB4_25 || 0));
    setSumC7_10(parseFloat(sumC4_25 || 0));
    setSumD7_10(parseFloat(sumD4_25 || 0));
    setSumE7_10(parseFloat(sumE4_25 || 0));
    setSumF7_10(parseFloat(sumF4_25 || 0));
    setSumG7_10(parseFloat(sumG4_25 || 0));
    setSumH7_10(parseFloat(sumH4_25 || 0));
    setSumI7_10(parseFloat(sumI4_25 || 0));
  };

  useEffect(() => {
    uploadSumB7_10();
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
    const uploadSumB7_10 = async () => {
      await uploadData("B7_10", sumB7_10.toString());
      await uploadData("C7_10", sumC7_10.toString());
      await uploadData("D7_10", sumD7_10.toString());
      await uploadData("E7_10", sumE7_10.toString());
      await uploadData("F7_10", sumF7_10.toString());
      await uploadData("G7_10", sumG7_10.toString());
      await uploadData("H7_10", sumH7_10.toString());
      await uploadData("I7_10", sumI7_10.toString());
    };
    if (
      sumB7_10 ||
      sumC7_10 ||
      sumD7_10 ||
      sumE7_10 ||
      sumF7_10 ||
      sumG7_10 ||
      sumH7_10 ||
      sumI7_10
    ) {
      uploadSumB7_10();
    }
  }, [
    sumB7_10,
    sumC7_10,
    sumD7_10,
    sumE7_10,
    sumF7_10,
    sumG7_10,
    sumH7_10,
    sumI7_10,
  ]);

  //------------------------------------------------- TOTAL OF 11 -------------------------------------------------------

  const uploadSumB7_11 = () => {
    setSumB7_11(parseFloat(sumB4_27 || 0));
    setSumC7_11(parseFloat(sumC4_27 || 0));
    setSumD7_11(parseFloat(sumD4_27 || 0));
    setSumE7_11(parseFloat(sumE4_27 || 0));
    setSumF7_11(parseFloat(sumF4_27 || 0));
    setSumG7_11(parseFloat(sumG4_27 || 0));
    setSumH7_11(parseFloat(sumH4_27 || 0));
    setSumI7_11(parseFloat(sumI4_27 || 0));
  };

  useEffect(() => {
    uploadSumB7_11();
  }, [
    inputValues,
    sumB4_27,
    sumC4_27,
    sumD4_27,
    sumE4_27,
    sumF4_27,
    sumG4_27,
    sumH4_27,
    sumI4_27,
  ]);

  useEffect(() => {
    const uploadSumB7_11 = async () => {
      await uploadData("B7_11", sumB7_11.toString());
      await uploadData("C7_11", sumC7_11.toString());
      await uploadData("D7_11", sumD7_11.toString());
      await uploadData("E7_11", sumE7_11.toString());
      await uploadData("F7_11", sumF7_11.toString());
      await uploadData("G7_11", sumG7_11.toString());
      await uploadData("H7_11", sumH7_11.toString());
      await uploadData("I7_11", sumI7_11.toString());
    };
    if (
      sumB7_11 ||
      sumC7_11 ||
      sumD7_11 ||
      sumE7_11 ||
      sumF7_11 ||
      sumG7_11 ||
      sumH7_11 ||
      sumI7_11
    ) {
      uploadSumB7_11();
    }
  }, [
    sumB7_11 || sumC7_11,
    sumD7_11,
    sumE7_11,
    sumF7_11,
    sumG7_11,
    sumH7_11,
    sumI7_11,
  ]);

  //------------------------------------------------- TOTAL OF 12 -------------------------------------------------------

  const uploadSumB7_12 = () => {
    setSumB7_12(parseFloat(sumB4_21 || 0));
    setSumC7_12(parseFloat(sumC4_21 || 0));
    setSumD7_12(parseFloat(sumD4_21 || 0));
    setSumE7_12(parseFloat(sumE4_21 || 0));
    setSumF7_12(parseFloat(sumF4_21 || 0));
    setSumG7_12(parseFloat(sumG4_21 || 0));
    setSumH7_12(parseFloat(sumH4_21 || 0));
    setSumI7_12(parseFloat(sumI4_21 || 0));
  };

  useEffect(() => {
    uploadSumB7_12();
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
    const uploadSumB7_12 = async () => {
      await uploadData("B7_12", sumB7_12.toString());
      await uploadData("C7_12", sumC7_12.toString());
      await uploadData("D7_12", sumD7_12.toString());
      await uploadData("E7_12", sumE7_12.toString());
      await uploadData("F7_12", sumF7_12.toString());
      await uploadData("G7_12", sumG7_12.toString());
      await uploadData("H7_12", sumH7_12.toString());
      await uploadData("I7_12", sumI7_12.toString());
    };
    if (
      sumB7_12 ||
      sumC7_12 ||
      sumD7_12 ||
      sumE7_12 ||
      sumF7_12 ||
      sumG7_12 ||
      sumH7_12 ||
      sumI7_12
    ) {
      uploadSumB7_12();
    }
  }, [
    sumB7_12,
    sumC7_12,
    sumD7_12,
    sumE7_12,
    sumF7_12,
    sumG7_12,
    sumH7_12,
    sumI7_12,
  ]);

  //------------------------------------------------- TOTAL OF 13 -------------------------------------------------------

  const uploadSumB7_13 = () => {
    setSumB7_13(parseFloat(sumB4_23 || 0));
    setSumC7_13(parseFloat(sumC4_23 || 0));
    setSumD7_13(parseFloat(sumD4_23 || 0));
    setSumE7_13(parseFloat(sumE4_23 || 0));
    setSumF7_13(parseFloat(sumF4_23 || 0));
    setSumG7_13(parseFloat(sumG4_23 || 0));
    setSumH7_13(parseFloat(sumH4_23 || 0));
    setSumI7_13(parseFloat(sumI4_23 || 0));
  };

  useEffect(() => {
    uploadSumB7_13();
  }, [inputValues, Cost31]);

  useEffect(() => {
    const uploadSumB7_13 = async () => {
      await uploadData("B7_13", sumB7_13.toString());
      await uploadData("C7_13", sumC7_13.toString());
      await uploadData("D7_13", sumD7_13.toString());
      await uploadData("E7_13", sumE7_13.toString());
      await uploadData("F7_13", sumF7_13.toString());
      await uploadData("G7_13", sumG7_13.toString());
      await uploadData("H7_13", sumH7_13.toString());
      await uploadData("I7_13", sumI7_13.toString());
    };
    if (
      sumB7_13 ||
      sumC7_13 ||
      sumD7_13 ||
      sumE7_13 ||
      sumF7_13 ||
      sumG7_13 ||
      sumH7_13 ||
      sumI7_13
    ) {
      uploadSumB7_13();
    }
  }, [
    sumB7_13 || sumC7_13,
    sumD7_13,
    sumE7_13,
    sumF7_13,
    sumG7_13,
    sumH7_13,
    sumI7_13,
  ]);

  //------------------------------------------------- TOTAL OF 14 -------------------------------------------------------

  const uploadSumB7_14 = () => {
    setSumB7_14(parseFloat(sumB4_28 || 0));
    setSumC7_14(parseFloat(sumC4_28 || 0));
    setSumD7_14(parseFloat(sumD4_28 || 0));
    setSumE7_14(parseFloat(sumE4_28 || 0));
    setSumF7_14(parseFloat(sumF4_28 || 0));
    setSumG7_14(parseFloat(sumG4_28 || 0));
    setSumH7_14(parseFloat(sumH4_28 || 0));
    setSumI7_14(parseFloat(sumI4_28 || 0));
  };

  useEffect(() => {
    uploadSumB7_14();
  }, [
    inputValues,
    sumB4_28,
    sumC4_28,
    sumD4_28,
    sumE4_28,
    sumF4_28,
    sumG4_28,
    sumH4_28,
    sumI4_28,
  ]);

  useEffect(() => {
    const uploadSumB7_14 = async () => {
      await uploadData("B7_14", sumB7_14.toString());
      await uploadData("C7_14", sumC7_14.toString());
      await uploadData("D7_14", sumD7_14.toString());
      await uploadData("E7_14", sumE7_14.toString());
      await uploadData("F7_14", sumF7_14.toString());
      await uploadData("G7_14", sumG7_14.toString());
      await uploadData("H7_14", sumH7_14.toString());
      await uploadData("I7_14", sumI7_14.toString());
    };
    if (
      sumB7_14 ||
      sumC7_14 ||
      sumD7_14 ||
      sumE7_14 ||
      sumF7_14 ||
      sumG7_14 ||
      sumH7_14 ||
      sumI7_14
    ) {
      uploadSumB7_14();
    }
  }, [
    sumB7_14,
    sumC7_14,
    sumD7_14,
    sumE7_14,
    sumF7_14,
    sumG7_14,
    sumH7_14,
    sumI7_14,
  ]);

  //------------------------------------------------- TOTAL OF 15 -------------------------------------------------------

  const uploadSumB7_15 = () => {
    setSumB7_15(parseFloat(sumB4_30 || 0));
    setSumC7_15(parseFloat(sumC4_30 || 0));
    setSumD7_15(parseFloat(sumD4_30 || 0));
    setSumE7_15(parseFloat(sumE4_30 || 0));
    setSumF7_15(parseFloat(sumF4_30 || 0));
    setSumG7_15(parseFloat(sumG4_30 || 0));
    setSumH7_15(parseFloat(sumH4_30 || 0));
    setSumI7_15(parseFloat(sumI4_30 || 0));
  };

  useEffect(() => {
    uploadSumB7_15();
  }, [
    inputValues,
    sumB4_30,
    sumC4_30,
    sumD4_30,
    sumE4_30,
    sumF4_30,
    sumG4_30,
    sumH4_30,
    sumI4_30,
  ]);

  useEffect(() => {
    const uploadSumB7_15 = async () => {
      await uploadData("B7_15", sumB7_15.toString());
      await uploadData("C7_15", sumC7_15.toString());
      await uploadData("D7_15", sumD7_15.toString());
      await uploadData("E7_15", sumE7_15.toString());
      await uploadData("F7_15", sumF7_15.toString());
      await uploadData("G7_15", sumG7_15.toString());
      await uploadData("H7_15", sumH7_15.toString());
      await uploadData("I7_15", sumI7_15.toString());
    };
    if (
      sumB7_15 ||
      sumC7_15 ||
      sumD7_15 ||
      sumE7_15 ||
      sumF7_15 ||
      sumG7_15 ||
      sumH7_15 ||
      sumI7_15
    ) {
      uploadSumB7_15();
    }
  }, [
    sumB7_15,
    sumC7_15,
    sumD7_15,
    sumE7_15,
    sumF7_15,
    sumG7_15,
    sumH7_15,
    sumI7_15,
  ]);

  //------------------------------------------------- TOTAL OF 16 -------------------------------------------------------

  const uploadSumB7_16 = () => {
    setSumB7_16(parseFloat(sumB4_29 || 0));
    setSumC7_16(parseFloat(sumC4_29 || 0));
    setSumD7_16(parseFloat(sumD4_29 || 0));
    setSumE7_16(parseFloat(sumE4_29 || 0));
    setSumF7_16(parseFloat(sumF4_29 || 0));
    setSumG7_16(parseFloat(sumG4_29 || 0));
    setSumH7_16(parseFloat(sumH4_29 || 0));
    setSumI7_16(parseFloat(sumI4_29 || 0));
  };

  useEffect(() => {
    uploadSumB7_16();
  }, [
    inputValues,
    sumB4_29,
    sumC4_29,
    sumD4_29,
    sumE4_29,
    sumF4_29,
    sumG4_29,
    sumH4_29,
    sumI4_29,
  ]);

  useEffect(() => {
    const uploadSumB7_16 = async () => {
      await uploadData("B7_16", sumB7_16.toString());
      await uploadData("C7_16", sumC7_16.toString());
      await uploadData("D7_16", sumD7_16.toString());
      await uploadData("E7_16", sumE7_16.toString());
      await uploadData("F7_16", sumF7_16.toString());
      await uploadData("G7_16", sumG7_16.toString());
      await uploadData("H7_16", sumH7_16.toString());
      await uploadData("I7_16", sumI7_16.toString());
    };
    if (
      sumB7_16 ||
      sumC7_16 ||
      sumD7_16 ||
      sumE7_16 ||
      sumF7_16 ||
      sumG7_16 ||
      sumH7_16 ||
      sumI7_16
    ) {
      uploadSumB7_16();
    }
  }, [
    sumB7_16,
    sumC7_16,
    sumD7_16,
    sumE7_16,
    sumF7_16,
    sumG7_16,
    sumH7_16,
    sumI7_16,
  ]);

  //------------------------------------------------- TOTAL OF 17 -------------------------------------------------------

  const uploadSumB7_17 = () => {
    setSumB7_17(parseFloat(sumB4_31 || 0));
    setSumC7_17(parseFloat(sumC4_31 || 0));
    setSumD7_17(parseFloat(sumD4_31 || 0));
    setSumE7_17(parseFloat(sumE4_31 || 0));
    setSumF7_17(parseFloat(sumF4_31 || 0));
    setSumG7_17(parseFloat(sumG4_31 || 0));
    setSumH7_17(parseFloat(sumH4_31 || 0));
    setSumI7_17(parseFloat(sumI4_31 || 0));
  };

  useEffect(() => {
    uploadSumB7_17();
  }, [
    inputValues,
    sumB4_31,
    sumC4_31,
    sumD4_31,
    sumE4_31,
    sumF4_31,
    sumG4_31,
    sumH4_31,
    sumI4_31,
  ]);

  useEffect(() => {
    const uploadSumB7_17 = async () => {
      await uploadData("B7_17", sumB7_17.toString());
      await uploadData("C7_17", sumC7_17.toString());
      await uploadData("D7_17", sumD7_17.toString());
      await uploadData("E7_17", sumE7_17.toString());
      await uploadData("F7_17", sumF7_17.toString());
      await uploadData("G7_17", sumG7_17.toString());
      await uploadData("H7_17", sumH7_17.toString());
      await uploadData("I7_17", sumI7_17.toString());
    };
    if (
      sumB7_17 ||
      sumC7_17 ||
      sumD7_17 ||
      sumE7_17 ||
      sumF7_17 ||
      sumG7_17 ||
      sumH7_17 ||
      sumI7_17
    ) {
      uploadSumB7_17();
    }
  }, [
    sumB7_17,
    sumC7_17,
    sumD7_17,
    sumE7_17,
    sumF7_17,
    sumG7_17,
    sumH7_17,
    sumI7_17,
  ]);

  //------------------------------------------------- TOTAL OF 18 -------------------------------------------------------

  const uploadSumB7_18 = () => {
    setSumB7_18(parseFloat(sumB5_40 || 0));
    setSumC7_18(parseFloat(sumC5_40 || 0));
    setSumD7_18(parseFloat(sumD5_40 || 0));
    setSumE7_18(parseFloat(sumE5_40 || 0));
    setSumF7_18(parseFloat(sumE5_40 || 0));
    setSumG7_18(parseFloat(sumG5_40 || 0));
    setSumH7_18(parseFloat(sumH5_40 || 0));
    setSumI7_18(parseFloat(sumI5_40 || 0));
  };

  useEffect(() => {
    uploadSumB7_18();
  }, [
    inputValues,
    sumB5_40,
    sumC5_40,
    sumD5_40,
    sumE5_40,
    sumF5_40,
    sumG5_40,
    sumH5_40,
    sumI5_40,
  ]);

  useEffect(() => {
    const uploadSumB7_18 = async () => {
      await uploadData("B7_18", sumB7_18.toString());
      await uploadData("C7_18", sumC7_18.toString());
      await uploadData("D7_18", sumD7_18.toString());
      await uploadData("E7_18", sumE7_18.toString());
      await uploadData("F7_18", sumF7_18.toString());
      await uploadData("G7_18", sumG7_18.toString());
      await uploadData("H7_18", sumH7_18.toString());
      await uploadData("I7_18", sumI7_18.toString());
    };
    if (
      sumB7_18 ||
      sumC7_18 ||
      sumD7_18 ||
      sumE7_18 ||
      sumF7_18 ||
      sumG7_18 ||
      sumH7_18 ||
      sumI7_18
    ) {
      uploadSumB7_18();
    }
  }, [
    sumB7_18,
    sumC7_18,
    sumD7_18,
    sumE7_18,
    sumF7_18,
    sumG7_18,
    sumH7_18,
    sumI7_18,
  ]);

  //------------------------------------------------- TOTAL OF 22 -------------------------------------------------------

  const uploadSumB7_22 = () => {
    setSumB7_22(parseFloat(sumB50 || 0));
    setSumC7_22(parseFloat(sumC50 || 0));
    setSumD7_22(parseFloat(sumD50 || 0));
    setSumE7_22(parseFloat(sumE50 || 0));
    setSumF7_22(parseFloat(sumF50 || 0));
    setSumG7_22(parseFloat(sumG50 || 0));
    setSumH7_22(parseFloat(sumH50 || 0));
    setSumI7_22(parseFloat(sumI50 || 0));
  };

  useEffect(() => {
    uploadSumB7_22();
  }, [sumB50, sumC50, sumD50, sumE50, sumF50, sumG50, sumH50, sumI50]);

  useEffect(() => {
    const uploadSumB7_22 = async () => {
      await uploadData("B7_22", sumB7_22.toString());
      await uploadData("C7_22", sumC7_22.toString());
      await uploadData("D7_22", sumD7_22.toString());
      await uploadData("E7_22", sumE7_22.toString());
      await uploadData("F7_22", sumF7_22.toString());
      await uploadData("G7_22", sumG7_22.toString());
      await uploadData("H7_22", sumH7_22.toString());
      await uploadData("I7_22", sumI7_22.toString());
    };
    if (
      sumB7_22 ||
      sumC7_22 ||
      sumD7_22 ||
      sumE7_22 ||
      sumF7_22 ||
      sumG7_22 ||
      sumH7_22 ||
      sumI7_22
    ) {
      uploadSumB7_22();
    }
  }, [
    sumB7_22,
    sumC7_22,
    sumD7_22,
    sumE7_22,
    sumF7_22,
    sumG7_22,
    sumH7_22,
    sumI7_22,
  ]);

  //------------------------------------------------- TOTAL OF 23 -------------------------------------------------------

  const uploadSumB7_23 = () => {
    setSumB7_23(parseFloat(sumB44 || 0));
    setSumC7_23(parseFloat(sumC44 || 0));
    setSumD7_23(parseFloat(sumD44 || 0));
    setSumE7_23(parseFloat(sumE44 || 0));
    setSumF7_23(parseFloat(sumF44 || 0));
    setSumG7_23(parseFloat(sumG44 || 0));
    setSumH7_23(parseFloat(sumH44 || 0));
    setSumI7_23(parseFloat(sumI44 || 0));
  };

  useEffect(() => {
    uploadSumB7_23();
  }, [sumB44, sumC44, sumD44, sumE44, sumF44, sumG44, sumH44, sumI44]);

  useEffect(() => {
    const uploadSumB7_23 = async () => {
      await uploadData("B7_23", sumB7_23.toString());
      await uploadData("C7_23", sumC7_23.toString());
      await uploadData("D7_23", sumD7_23.toString());
      await uploadData("E7_23", sumE7_23.toString());
      await uploadData("F7_23", sumF7_23.toString());
      await uploadData("G7_23", sumG7_23.toString());
      await uploadData("H7_23", sumH7_23.toString());
      await uploadData("I7_23", sumI7_23.toString());
    };
    if (
      sumB7_23 ||
      sumC7_23 ||
      sumD7_23 ||
      sumE7_23 ||
      sumF7_23 ||
      sumG7_23 ||
      sumH7_23 ||
      sumI7_23
    ) {
      uploadSumB7_23();
    }
  }, [
    sumB7_23,
    sumC7_23,
    sumD7_23,
    sumE7_23,
    sumF7_23,
    sumG7_23,
    sumH7_23,
    sumI7_23,
  ]);

  //------------------------------------------------- TOTAL OF 24 -------------------------------------------------------

  const uploadSumB7_24 = () => {
    setSumC7_24(parseFloat(sumC38 || 0));
    setSumD7_24(parseFloat(sumD38 || 0));
    setSumE7_24(parseFloat(sumE38 || 0));
    setSumF7_24(parseFloat(sumF38 || 0));
    setSumG7_24(parseFloat(sumG38 || 0));
    setSumH7_24(parseFloat(sumH38 || 0));
    setSumI7_24(parseFloat(sumI38 || 0));
  };

  useEffect(() => {
    uploadSumB7_24();
  }, [sumB38, sumC38, sumD38, sumE38, sumF38, sumG38, sumH38, sumI38]);

  useEffect(() => {
    const uploadSumB7_24 = async () => {
      await uploadData("B7_24", sumB7_24.toString());
      await uploadData("C7_24", sumC7_24.toString());
      await uploadData("D7_24", sumD7_24.toString());
      await uploadData("E7_24", sumE7_24.toString());
      await uploadData("F7_24", sumF7_24.toString());
      await uploadData("G7_24", sumG7_24.toString());
      await uploadData("H7_24", sumH7_24.toString());
      await uploadData("I7_24", sumI7_24.toString());
    };
    if (
      sumB7_24 ||
      sumC7_24 ||
      sumD7_24 ||
      sumE7_24 ||
      sumF7_24 ||
      sumG7_24 ||
      sumH7_24 ||
      sumI7_24
    ) {
      uploadSumB7_24();
    }
  }, [
    sumB7_24,
    sumC7_24,
    sumD7_24,
    sumE7_24,
    sumF7_24,
    sumG7_24,
    sumH7_24,
    sumI7_24,
  ]);

  //------------------------------------------------- TOTAL OF 25 -------------------------------------------------------

  const uploadSumB7_25 = () => {
    setSumB7_25(parseFloat(sumB51 || 0));
    setSumC7_25(parseFloat(sumC51 || 0));
    setSumD7_25(parseFloat(sumD51 || 0));
    setSumE7_25(parseFloat(sumE51 || 0));
    setSumF7_25(parseFloat(sumF51 || 0));
    setSumG7_25(parseFloat(sumG51 || 0));
    setSumH7_25(parseFloat(sumH51 || 0));
    setSumI7_25(parseFloat(sumI51 || 0));
  };

  useEffect(() => {
    uploadSumB7_25();
  }, [
    inputValues,
    sumB51,
    sumC51,
    sumD51,
    sumE51,
    sumF51,
    sumG51,
    sumH51,
    sumI51,
  ]);

  useEffect(() => {
    const uploadSumB7_25 = async () => {
      await uploadData("B7_25", sumB7_25.toString());
      await uploadData("C7_25", sumC7_25.toString());
      await uploadData("D7_25", sumD7_25.toString());
      await uploadData("E7_25", sumE7_25.toString());
      await uploadData("F7_25", sumF7_25.toString());
      await uploadData("G7_25", sumG7_25.toString());
      await uploadData("H7_25", sumH7_25.toString());
      await uploadData("I7_25", sumI7_25.toString());
    };
    if (
      sumB7_25 ||
      sumC7_25 ||
      sumD7_25 ||
      sumE7_25 ||
      sumF7_25 ||
      sumG7_25 ||
      sumH7_25 ||
      sumI7_25
    ) {
      uploadSumB7_25();
    }
  }, [
    sumB7_25,
    sumC7_25,
    sumD7_25,
    sumE7_25,
    sumF7_25,
    sumG7_25,
    sumH7_25,
    sumI7_25,
  ]);

  //------------------------------------------------- TOTAL OF 27 -------------------------------------------------------

  const uploadSumB7_27 = () => {
    setSumB7_27(parseFloat(sumB21 || 0));
    setSumC7_27(parseFloat(sumC21 || 0));
    setSumD7_27(parseFloat(sumD21 || 0));
    setSumE7_27(parseFloat(sumE21 || 0));
    setSumF7_27(parseFloat(sumF21 || 0));
    setSumG7_27(parseFloat(sumG21 || 0));
    setSumH7_27(parseFloat(sumH21 || 0));
    setSumI7_27(parseFloat(sumI21 || 0));
  };

  useEffect(() => {
    uploadSumB7_27();
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
    const uploadSumB7_27 = async () => {
      await uploadData("B7_27", sumB7_27.toString());
      await uploadData("C7_27", sumC7_27.toString());
      await uploadData("D7_27", sumD7_27.toString());
      await uploadData("E7_27", sumE7_27.toString());
      await uploadData("F7_27", sumF7_27.toString());
      await uploadData("G7_27", sumG7_27.toString());
      await uploadData("H7_27", sumH7_27.toString());
      await uploadData("I7_27", sumI7_27.toString());
    };
    if (
      sumB7_27 ||
      sumC7_27 ||
      sumD7_27 ||
      sumE7_27 ||
      sumF7_27 ||
      sumG7_27 ||
      sumH7_27 ||
      sumI7_27
    ) {
      uploadSumB7_27();
    }
  }, [
    sumB7_27,
    sumC7_27,
    sumD7_27,
    sumE7_27,
    sumF7_27,
    sumG7_27,
    sumH7_27,
    sumI7_27,
  ]);

  //------------------------------------------------- TOTAL OF 28 -------------------------------------------------------

  const uploadSumB7_28 = () => {
    setSumB7_28(parseFloat(sumB25 || 0));
    setSumC7_28(parseFloat(sumC25 || 0));
    setSumD7_28(parseFloat(sumD25 || 0));
    setSumE7_28(parseFloat(sumE25 || 0));
    setSumF7_28(parseFloat(sumF25 || 0));
    setSumG7_28(parseFloat(sumG25 || 0));
    setSumH7_28(parseFloat(sumH25 || 0));
    setSumI7_28(parseFloat(sumI25 || 0));
  };

  useEffect(() => {
    uploadSumB7_28();
  }, [
    inputValues,
    sumB25,
    sumC25,
    sumD25,
    sumE25,
    sumF25,
    sumG25,
    sumH25,
    sumI25,
  ]);

  useEffect(() => {
    const uploadSumB7_28 = async () => {
      await uploadData("B7_28", sumB7_28.toString());
      await uploadData("C7_28", sumC7_28.toString());
      await uploadData("D7_28", sumD7_28.toString());
      await uploadData("E7_28", sumE7_28.toString());
      await uploadData("F7_28", sumF7_28.toString());
      await uploadData("G7_28", sumG7_28.toString());
      await uploadData("H7_28", sumH7_28.toString());
      await uploadData("I7_28", sumI7_28.toString());
    };
    if (
      sumB7_28 ||
      sumC7_28 ||
      sumD7_28 ||
      sumE7_28 ||
      sumF7_28 ||
      sumG7_28 ||
      sumH7_28 ||
      sumI7_28
    ) {
      uploadSumB7_28();
    }
  }, [
    sumB7_28,
    sumC7_28,
    sumD7_28,
    sumE7_28,
    sumF7_28,
    sumG7_28,
    sumH7_28,
    sumI7_28,
  ]);

  //------------------------------------------------- TOTAL OF 29 -------------------------------------------------------

  const uploadSumB7_29 = () => {
    setSumB7_29(parseFloat(sumB2 || 0));
    setSumC7_29(parseFloat(sumC2 || 0));
    setSumD7_29(parseFloat(sumD2 || 0));
    setSumE7_29(parseFloat(sumE2 || 0));
    setSumF7_29(parseFloat(sumF2 || 0));
    setSumG7_29(parseFloat(sumG2 || 0));
    setSumH7_29(parseFloat(sumH2 || 0));
    setSumI7_29(parseFloat(sumI2 || 0));
  };

  useEffect(() => {
    uploadSumB7_29();
  }, [inputValues, sumB2, sumC2, sumD2, sumE2, sumF2, sumG2, sumH2, sumI2]);

  useEffect(() => {
    const uploadSumB7_29 = async () => {
      await uploadData("B7_29", sumB7_29.toString());
      await uploadData("C7_29", sumC7_29.toString());
      await uploadData("D7_29", sumD7_29.toString());
      await uploadData("E7_29", sumE7_29.toString());
      await uploadData("F7_29", sumF7_29.toString());
      await uploadData("G7_29", sumG7_29.toString());
      await uploadData("H7_29", sumH7_29.toString());
      await uploadData("I7_29", sumI7_29.toString());
    };
    if (
      sumB7_29 ||
      sumC7_29 ||
      sumD7_29 ||
      sumE7_29 ||
      sumF7_29 ||
      sumG7_29 ||
      sumH7_29 ||
      sumI7_29
    ) {
      uploadSumB7_29();
    }
  }, [
    sumB7_29,
    sumC7_29,
    sumD7_29,
    sumE7_29,
    sumF7_29,
    sumG7_29,
    sumH7_29,
    sumI7_29,
  ]);

  //------------------------------------------------- TOTAL OF 30 -------------------------------------------------------

  const uploadSumB7_30 = () => {
    setSumB7_30(parseFloat(sumB30 || 0));
    setSumC7_30(parseFloat(sumC30 || 0));
    setSumD7_30(parseFloat(sumD30 || 0));
    setSumE7_30(parseFloat(sumE30 || 0));
    setSumF7_30(parseFloat(sumF30 || 0));
    setSumG7_30(parseFloat(sumG30 || 0));
    setSumH7_30(parseFloat(sumH30 || 0));
    setSumI7_30(parseFloat(sumI30 || 0));
  };

  useEffect(() => {
    uploadSumB7_30();
  }, [
    inputValues,
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
    const uploadSumB7_30 = async () => {
      await uploadData("B7_30", sumB7_30.toString());
      await uploadData("C7_30", sumC7_30.toString());
      await uploadData("D7_30", sumD7_30.toString());
      await uploadData("E7_30", sumE7_30.toString());
      await uploadData("F7_30", sumF7_30.toString());
      await uploadData("G7_30", sumG7_30.toString());
      await uploadData("H7_30", sumH7_30.toString());
      await uploadData("I7_30", sumI7_30.toString());
    };
    if (
      sumB7_30 ||
      sumC7_30 ||
      sumD7_30 ||
      sumE7_30 ||
      sumF7_30 ||
      sumG7_30 ||
      sumH7_30 ||
      sumI7_30
    ) {
      uploadSumB7_30();
    }
  }, [
    sumB7_30,
    sumC7_30,
    sumD7_30,
    sumE7_30,
    sumF7_30,
    sumG7_30,
    sumH7_30,
    sumI7_30,
  ]);

  //------------------------------------------------- TOTAL OF 31 -------------------------------------------------------

  const uploadSumB7_31 = () => {
    setSumB7_31(parseFloat(sumB31 || 0));
    setSumC7_31(parseFloat(sumC31 || 0));
    setSumD7_31(parseFloat(sumD31 || 0));
    setSumE7_31(parseFloat(sumE31 || 0));
    setSumF7_31(parseFloat(sumF31 || 0));
    setSumG7_31(parseFloat(sumG31 || 0));
    setSumH7_31(parseFloat(sumH31 || 0));
    setSumI7_31(parseFloat(sumI31 || 0));
  };

  useEffect(() => {
    uploadSumB7_31();
  }, [
    inputValues,
    sumB31,
    sumC31,
    sumD31,
    sumE31,
    sumF31,
    sumG31,
    sumH31,
    sumI31,
  ]);

  useEffect(() => {
    const uploadSumB7_31 = async () => {
      await uploadData("B7_31", sumB7_31.toString());
      await uploadData("C7_31", sumC7_31.toString());
      await uploadData("D7_31", sumD7_31.toString());
      await uploadData("E7_31", sumE7_31.toString());
      await uploadData("F7_31", sumF7_31.toString());
      await uploadData("G7_31", sumG7_31.toString());
      await uploadData("H7_31", sumH7_31.toString());
      await uploadData("I7_31", sumI7_31.toString());
    };
    if (
      sumB7_31 ||
      sumC7_31 ||
      sumD7_31 ||
      sumE7_31 ||
      sumF7_31 ||
      sumG7_31 ||
      sumH7_31 ||
      sumI7_31
    ) {
      uploadSumB7_31();
    }
  }, [
    sumB7_31,
    sumC7_31,
    sumD7_31,
    sumE7_31,
    sumF7_31,
    sumG7_31,
    sumH7_31,
    sumI7_31,
  ]);

  //------------------------------------------------- TOTAL OF 34 -------------------------------------------------------

  const uploadSumB7_34 = () => {
    setSumC7_34(parseFloat(sumB7_38 || 0));
    setSumD7_34(parseFloat(sumC7_38 || 0));
    setSumE7_34(parseFloat(sumD7_38 || 0));
    setSumF7_34(parseFloat(sumE7_38 || 0));
    setSumG7_34(parseFloat(sumF7_38 || 0));
    setSumH7_34(parseFloat(sumG7_38 || 0));
    setSumI7_34(parseFloat(sumH7_38 || 0));
  };

  useEffect(() => {
    uploadSumB7_34();
  }, [
    inputValues,
    sumB7_38,
    sumC7_38,
    sumD7_38,
    sumE7_38,
    sumF7_38,
    sumG7_38,
    sumH7_38,
    sumI7_38,
  ]);

  useEffect(() => {
    const uploadSumB7_34 = async () => {
      await uploadData("C7_34", sumC7_34.toString());
      await uploadData("D7_34", sumD7_34.toString());
      await uploadData("E7_34", sumE7_34.toString());
      await uploadData("F7_34", sumF7_34.toString());
      await uploadData("G7_34", sumG7_34.toString());
      await uploadData("H7_34", sumH7_34.toString());
      await uploadData("I7_34", sumI7_34.toString());
    };
    if (
      sumC7_34 ||
      sumD7_34 ||
      sumE7_34 ||
      sumF7_34 ||
      sumG7_34 ||
      sumH7_34 ||
      sumI7_34
    ) {
      uploadSumB7_34();
    }
  }, [sumC7_34, sumD7_34, sumE7_34, sumF7_34, sumG7_34, sumH7_34, sumI7_34]);

  //------------------------------------------------- TOTAL OF 35 -------------------------------------------------------

  const uploadSumB7_35 = () => {
    setSumB7_35(parseFloat(Cost37.B1_37 || 0));
    setSumC7_35(parseFloat(Cost37.C1_37 || 0));
    setSumD7_35(parseFloat(Cost37.D1_37 || 0));
    setSumE7_35(parseFloat(Cost37.E1_37 || 0));
    setSumF7_35(parseFloat(Cost37.F1_37 || 0));
    setSumG7_35(parseFloat(Cost37.G1_37 || 0));
    setSumH7_35(parseFloat(Cost37.H1_37 || 0));
    setSumI7_35(parseFloat(Cost37.I1_37 || 0));
  };

  useEffect(() => {
    uploadSumB7_35();
  }, [inputValues, Cost37]);

  useEffect(() => {
    const uploadSumB7_35 = async () => {
      await uploadData("B7_35", sumB7_35.toString());
      await uploadData("C7_35", sumC7_35.toString());
      await uploadData("D7_35", sumD7_35.toString());
      await uploadData("E7_35", sumE7_35.toString());
      await uploadData("F7_35", sumF7_35.toString());
      await uploadData("G7_35", sumG7_35.toString());
      await uploadData("H7_35", sumH7_35.toString());
      await uploadData("I7_35", sumI7_35.toString());
    };
    if (
      sumB7_35 ||
      sumC7_35 ||
      sumD7_35 ||
      sumE7_35 ||
      sumF7_35 ||
      sumG7_35 ||
      sumH7_35 ||
      sumI7_35
    ) {
      uploadSumB7_35();
    }
  }, [
    sumB7_35,
    sumC7_35,
    sumD7_35,
    sumE7_35,
    sumF7_35,
    sumG7_35,
    sumH7_35,
    sumI7_35,
  ]);

  //------------------------------------------------- TOTAL OF 36 -------------------------------------------------------

  const uploadSumB7_36 = () => {
    const calculateSum = (sum34, sum35, sum38) => {
      const result =
        parseFloat(sum34 || 0) +
        parseFloat(sum35 || 0) -
        parseFloat(sum38 || 0);
      return result < 0 ? -1 * result : null;
    };

    const newSumC7_36 = calculateSum(sumC7_34, sumC7_35, sumC7_38);
    const newSumD7_36 = calculateSum(sumD7_34, sumD7_35, sumD7_38);
    const newSumE7_36 = calculateSum(sumE7_34, sumE7_35, sumE7_38);
    const newSumF7_36 = calculateSum(sumF7_34, sumF7_35, sumF7_38);
    const newSumG7_36 = calculateSum(sumG7_34, sumG7_35, sumG7_38);
    const newSumH7_36 = calculateSum(sumH7_34, sumH7_35, sumH7_38);
    const newSumI7_36 = calculateSum(sumI7_34, sumI7_35, sumI7_38);

    if (newSumC7_36 !== null) setSumC7_36(newSumC7_36);
    if (newSumD7_36 !== null) setSumD7_36(newSumD7_36);
    if (newSumE7_36 !== null) setSumE7_36(newSumE7_36);
    if (newSumF7_36 !== null) setSumF7_36(newSumF7_36);
    if (newSumG7_36 !== null) setSumG7_36(newSumG7_36);
    if (newSumH7_36 !== null) setSumH7_36(newSumH7_36);
    if (newSumI7_36 !== null) setSumI7_36(newSumI7_36);
  };

  useEffect(() => {
    uploadSumB7_36();
  }, [
    inputValues,
    sumB7_35,
    sumC7_35,
    sumD7_35,
    sumE7_35,
    sumF7_35,
    sumG7_35,
    sumH7_35,
    sumI7_35,
    sumB7_34,
    sumC7_34,
    sumD7_34,
    sumE7_34,
    sumF7_34,
    sumG7_34,
    sumH7_34,
    sumI7_34,
    sumB7_38,
    sumC7_38,
    sumD7_38,
    sumE7_38,
    sumF7_38,
    sumG7_38,
    sumH7_38,
    sumI7_38,
  ]);

  useEffect(() => {
    const uploadSumB7_36 = async () => {
      if (sumC7_36 !== null) await uploadData("C7_36", sumC7_36.toString());
      if (sumD7_36 !== null) await uploadData("D7_36", sumD7_36.toString());
      if (sumE7_36 !== null) await uploadData("E7_36", sumE7_36.toString());
      if (sumF7_36 !== null) await uploadData("F7_36", sumF7_36.toString());
      if (sumG7_36 !== null) await uploadData("G7_36", sumG7_36.toString());
      if (sumH7_36 !== null) await uploadData("H7_36", sumH7_36.toString());
      if (sumI7_36 !== null) await uploadData("I7_36", sumI7_36.toString());
    };

    if (
      sumC7_36 !== null ||
      sumD7_36 !== null ||
      sumE7_36 !== null ||
      sumF7_36 !== null ||
      sumG7_36 !== null ||
      sumH7_36 !== null ||
      sumI7_36 !== null
    ) {
      uploadSumB7_36();
    }
  }, [
    sumB7_36,
    sumC7_36,
    sumD7_36,
    sumE7_36,
    sumF7_36,
    sumG7_36,
    sumH7_36,
    sumI7_36,
  ]);

  //------------------------------------------------- TOTAL OF 37 -------------------------------------------------------

  const uploadSumB7_37 = () => {
    const calculateSum = (sum34, sum35, sum38) => {
      const result =
        parseFloat(sum34 || 0) +
        parseFloat(sum35 || 0) -
        parseFloat(sum38 || 0);
      return result > 0 ? 1 * result : null;
    };
    const newSumC7_37 = calculateSum(sumC7_34, sumC7_35, sumC7_38);
    const newSumD7_37 = calculateSum(sumD7_34, sumD7_35, sumD7_38);
    const newSumE7_37 = calculateSum(sumE7_34, sumE7_35, sumE7_38);
    const newSumF7_37 = calculateSum(sumF7_34, sumF7_35, sumF7_38);
    const newSumG7_37 = calculateSum(sumG7_34, sumG7_35, sumG7_38);
    const newSumH7_37 = calculateSum(sumH7_34, sumH7_35, sumH7_38);
    const newSumI7_37 = calculateSum(sumI7_34, sumI7_35, sumI7_38);

    if (newSumC7_37 !== null) setSumC7_37(newSumC7_37);
    if (newSumD7_37 !== null) setSumD7_37(newSumD7_37);
    if (newSumE7_37 !== null) setSumE7_37(newSumE7_37);
    if (newSumF7_37 !== null) setSumF7_37(newSumF7_37);
    if (newSumG7_37 !== null) setSumG7_37(newSumG7_37);
    if (newSumH7_37 !== null) setSumH7_37(newSumH7_37);
    if (newSumI7_37 !== null) setSumI7_37(newSumI7_37);
  };

  useEffect(() => {
    uploadSumB7_37();
  }, [
    inputValues,
    sumB7_35,
    sumC7_35,
    sumD7_35,
    sumE7_35,
    sumF7_35,
    sumG7_35,
    sumH7_35,
    sumI7_35,
    sumB7_34,
    sumC7_34,
    sumD7_34,
    sumE7_34,
    sumF7_34,
    sumG7_34,
    sumH7_34,
    sumI7_34,
    sumB7_38,
    sumC7_38,
    sumD7_38,
    sumE7_38,
    sumF7_38,
    sumG7_38,
    sumH7_38,
    sumI7_38,
  ]);

  useEffect(() => {
    const uploadSumB7_37 = async () => {
      if (sumC7_37 !== null) await uploadData("C7_37", sumC7_37.toString());
      if (sumD7_37 !== null) await uploadData("D7_37", sumD7_37.toString());
      if (sumE7_37 !== null) await uploadData("E7_37", sumE7_37.toString());
      if (sumF7_37 !== null) await uploadData("F7_37", sumF7_37.toString());
      if (sumG7_37 !== null) await uploadData("G7_37", sumG7_37.toString());
      if (sumH7_37 !== null) await uploadData("H7_37", sumH7_37.toString());
      if (sumI7_37 !== null) await uploadData("I7_37", sumI7_37.toString());
    };

    if (
      sumC7_37 !== null ||
      sumD7_37 !== null ||
      sumE7_37 !== null ||
      sumF7_37 !== null ||
      sumG7_37 !== null ||
      sumH7_37 !== null ||
      sumI7_37 !== null
    ) {
      uploadSumB7_37();
    }
  }, [
    sumB7_37,
    sumC7_37,
    sumD7_37,
    sumE7_37,
    sumF7_37,
    sumG7_37,
    sumH7_37,
    sumI7_37,
  ]);

  //------------------------------------------------- TOTAL OF 38 -------------------------------------------------------

  const uploadSumB7_38 = () => {
    setSumB7_38(parseFloat(sumB4_21 || 0));
    setSumC7_38(parseFloat(sumC4_21 || 0));
    setSumD7_38(parseFloat(sumD4_21 || 0));
    setSumE7_38(parseFloat(sumE4_21 || 0));
    setSumF7_38(parseFloat(sumF4_21 || 0));
    setSumG7_38(parseFloat(sumG4_21 || 0));
    setSumH7_38(parseFloat(sumH4_21 || 0));
    setSumI7_38(parseFloat(sumI4_21 || 0));
  };

  useEffect(() => {
    uploadSumB7_38();
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
    const uploadSumB7_38 = async () => {
      await uploadData("B7_38", sumB7_38.toString());
      await uploadData("C7_38", sumC7_38.toString());
      await uploadData("D7_38", sumD7_38.toString());
      await uploadData("E7_38", sumE7_38.toString());
      await uploadData("F7_38", sumF7_38.toString());
      await uploadData("G7_38", sumG7_38.toString());
      await uploadData("H7_38", sumH7_38.toString());
      await uploadData("I7_38", sumI7_38.toString());
    };
    if (
      sumB7_38 ||
      sumC7_38 ||
      sumD7_38 ||
      sumE7_38 ||
      sumF7_38 ||
      sumG7_38 ||
      sumH7_38 ||
      sumI7_38
    ) {
      uploadSumB7_38();
    }
  }, [
    sumB7_38,
    sumC7_38,
    sumD7_38,
    sumE7_38,
    sumF7_38,
    sumG7_38,
    sumH7_38,
    sumI7_38,
  ]);

  //------------------------------------------------- TOTAL OF 41 -------------------------------------------------------

  const uploadSumB7_41 = () => {
    setSumB7_41(parseFloat(sumB5_10 || 0));
    setSumC7_41(parseFloat(sumC5_10 || 0));
    setSumD7_41(parseFloat(sumD5_10 || 0));
    setSumE7_41(parseFloat(sumE5_10 || 0));
    setSumF7_41(parseFloat(sumF5_10 || 0));
    setSumG7_41(parseFloat(sumG5_10 || 0));
    setSumH7_41(parseFloat(sumH5_10 || 0));
    setSumI7_41(parseFloat(sumI5_10 || 0));
  };

  useEffect(() => {
    uploadSumB7_41();
  }, [
    inputValues,
    sumB5_10,
    sumC5_10,
    sumD5_10,
    sumE5_10,
    sumF5_10,
    sumG5_10,
    sumH5_10,
    sumI5_10,
  ]);

  useEffect(() => {
    const uploadSumB7_41 = async () => {
      await uploadData("B7_41", sumB7_41.toString());
      await uploadData("C7_41", sumC7_41.toString());
      await uploadData("D7_41", sumD7_41.toString());
      await uploadData("E7_41", sumE7_41.toString());
      await uploadData("F7_41", sumF7_41.toString());
      await uploadData("G7_41", sumG7_41.toString());
      await uploadData("H7_41", sumH7_41.toString());
      await uploadData("I7_41", sumI7_41.toString());
    };
    if (
      sumB7_41 ||
      sumC7_41 ||
      sumD7_41 ||
      sumE7_41 ||
      sumF7_41 ||
      sumG7_41 ||
      sumH7_41 ||
      sumI7_41
    ) {
      uploadSumB7_41();
    }
  }, [
    sumB7_41,
    sumC7_41,
    sumD7_41,
    sumE7_41,
    sumF7_41,
    sumG7_41,
    sumH7_41,
    sumI7_41,
  ]);

  //------------------------------------------------- TOTAL OF 42 -------------------------------------------------------

  const uploadSumB7_42 = () => {
    setSumB7_42(parseFloat(sumB5_11 || 0));
    setSumC7_42(parseFloat(sumC5_11 || 0));
    setSumD7_42(parseFloat(sumD5_11 || 0));
    setSumE7_42(parseFloat(sumE5_11 || 0));
    setSumF7_42(parseFloat(sumF5_11 || 0));
    setSumG7_42(parseFloat(sumG5_11 || 0));
    setSumH7_42(parseFloat(sumH5_11 || 0));
    setSumI7_42(parseFloat(sumI5_11 || 0));
  };

  useEffect(() => {
    uploadSumB7_42();
  }, [
    inputValues,
    sumB5_11,
    sumC5_11,
    sumD5_11,
    sumE5_11,
    sumF5_11,
    sumG5_11,
    sumH5_11,
    sumI5_11,
  ]);

  useEffect(() => {
    const uploadSumB7_42 = async () => {
      await uploadData("B7_42", sumB7_42.toString());
      await uploadData("C7_42", sumC7_42.toString());
      await uploadData("D7_42", sumD7_42.toString());
      await uploadData("E7_42", sumE7_42.toString());
      await uploadData("F7_42", sumF7_42.toString());
      await uploadData("G7_42", sumG7_42.toString());
      await uploadData("H7_42", sumH7_42.toString());
      await uploadData("I7_42", sumI7_42.toString());
    };
    if (
      sumB7_42 ||
      sumC7_42 ||
      sumD7_42 ||
      sumE7_42 ||
      sumF7_42 ||
      sumG7_42 ||
      sumH7_42 ||
      sumI7_42
    ) {
      uploadSumB7_42();
    }
  }, [
    sumB7_42,
    sumC7_42,
    sumD7_42,
    sumE7_42,
    sumF7_42,
    sumG7_42,
    sumH7_42,
    sumI7_42,
  ]);

  //------------------------------------------------- TOTAL OF 43 -------------------------------------------------------

  const uploadSumB7_43 = () => {
    setSumB7_43(parseFloat(sumB5_15 || 0));
    setSumC7_43(parseFloat(sumC5_15 || 0));
    setSumD7_43(parseFloat(sumD5_15 || 0));
    setSumE7_43(parseFloat(sumE5_15 || 0));
    setSumF7_43(parseFloat(sumF5_15 || 0));
    setSumG7_43(parseFloat(sumG5_15 || 0));
    setSumH7_43(parseFloat(sumH5_15 || 0));
    setSumI7_43(parseFloat(sumI5_15 || 0));
  };

  useEffect(() => {
    uploadSumB7_43();
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
  ]);

  useEffect(() => {
    const uploadSumB7_43 = async () => {
      await uploadData("B7_43", sumB7_43.toString());
      await uploadData("C7_43", sumC7_43.toString());
      await uploadData("D7_43", sumD7_43.toString());
      await uploadData("E7_43", sumE7_43.toString());
      await uploadData("F7_43", sumF7_43.toString());
      await uploadData("G7_43", sumG7_43.toString());
      await uploadData("H7_43", sumH7_43.toString());
      await uploadData("I7_43", sumI7_43.toString());
    };
    if (
      sumB7_43 ||
      sumC7_43 ||
      sumD7_43 ||
      sumE7_43 ||
      sumF7_43 ||
      sumG7_43 ||
      sumH7_43 ||
      sumI7_43
    ) {
      uploadSumB7_43();
    }
  }, [
    sumB7_43,
    sumC7_43,
    sumD7_43,
    sumE7_43,
    sumF7_43,
    sumG7_43,
    sumH7_43,
    sumI7_43,
  ]);

  //------------------------------------------------- TOTAL OF 44 -------------------------------------------------------

  const uploadSumB7_44 = () => {
    setSumB7_44(parseFloat(sumB5_16 || 0));
    setSumC7_44(parseFloat(sumC5_16 || 0));
    setSumD7_44(parseFloat(sumD5_16 || 0));
    setSumE7_44(parseFloat(sumE5_16 || 0));
    setSumF7_44(parseFloat(sumF5_16 || 0));
    setSumG7_44(parseFloat(sumG5_16 || 0));
    setSumH7_44(parseFloat(sumH5_16 || 0));
    setSumI7_44(parseFloat(sumI5_16 || 0));
  };

  useEffect(() => {
    uploadSumB7_44();
  }, [
    inputValues,
    sumB5_16,
    sumC5_16,
    sumD5_16,
    sumE5_16,
    sumF5_16,
    sumG5_16,
    sumH5_16,
    sumI5_16,
  ]);

  useEffect(() => {
    const uploadSumB7_44 = async () => {
      await uploadData("B7_44", sumB7_44.toString());
      await uploadData("C7_44", sumC7_44.toString());
      await uploadData("D7_44", sumD7_44.toString());
      await uploadData("E7_44", sumE7_44.toString());
      await uploadData("F7_44", sumF7_44.toString());
      await uploadData("G7_44", sumG7_44.toString());
      await uploadData("H7_44", sumH7_44.toString());
      await uploadData("I7_44", sumI7_44.toString());
    };
    if (
      sumB7_44 ||
      sumC7_44 ||
      sumD7_44 ||
      sumE7_44 ||
      sumF7_44 ||
      sumG7_44 ||
      sumH7_44 ||
      sumI7_44
    ) {
      uploadSumB7_44();
    }
  }, [
    sumB7_44,
    sumC7_44,
    sumD7_44,
    sumE7_44,
    sumF7_44,
    sumG7_44,
    sumH7_44,
    sumI7_44,
  ]);

  //------------------------------------------------- TOTAL OF 45 -------------------------------------------------------

  const uploadSumB7_45 = () => {
    setSumB7_45(parseFloat(sumB5_21 || 0));
    setSumC7_45(parseFloat(sumC5_21 || 0));
    setSumD7_45(parseFloat(sumD5_21 || 0));
    setSumE7_45(parseFloat(sumE5_21 || 0));
    setSumF7_45(parseFloat(sumF5_21 || 0));
    setSumG7_45(parseFloat(sumG5_21 || 0));
    setSumH7_45(parseFloat(sumH5_21 || 0));
    setSumI7_45(parseFloat(sumI5_21 || 0));
  };

  useEffect(() => {
    uploadSumB7_45();
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
  ]);

  useEffect(() => {
    const uploadSumB7_45 = async () => {
      await uploadData("B7_45", sumB7_45.toString());
      await uploadData("C7_45", sumC7_45.toString());
      await uploadData("D7_45", sumD7_45.toString());
      await uploadData("E7_45", sumE7_45.toString());
      await uploadData("F7_45", sumF7_45.toString());
      await uploadData("G7_45", sumG7_45.toString());
      await uploadData("H7_45", sumH7_45.toString());
      await uploadData("I7_45", sumI7_45.toString());
    };
    if (
      sumB7_45 ||
      sumC7_45 ||
      sumD7_45 ||
      sumE7_45 ||
      sumF7_45 ||
      sumG7_45 ||
      sumH7_45 ||
      sumI7_45
    ) {
      uploadSumB7_45();
    }
  }, [
    sumB7_45,
    sumC7_45,
    sumD7_45,
    sumE7_45,
    sumF7_45,
    sumG7_45,
    sumH7_45,
    sumI7_45,
  ]);

  //------------------------------------------------- TOTAL OF 46 -------------------------------------------------------

  const uploadSumB7_46 = () => {
    setSumB7_46(parseFloat(sumB5_22 || 0));
    setSumC7_46(parseFloat(sumC5_22 || 0));
    setSumD7_46(parseFloat(sumD5_22 || 0));
    setSumE7_46(parseFloat(sumE5_22 || 0));
    setSumF7_46(parseFloat(sumF5_22 || 0));
    setSumG7_46(parseFloat(sumG5_22 || 0));
    setSumH7_46(parseFloat(sumH5_22 || 0));
    setSumI7_46(parseFloat(sumI5_22 || 0));
  };

  useEffect(() => {
    uploadSumB7_46();
  }, [
    inputValues,
    sumB5_22,
    sumC5_22,
    sumD5_22,
    sumE5_22,
    sumF5_22,
    sumG5_22,
    sumH5_22,
    sumI5_22,
  ]);

  useEffect(() => {
    const uploadSumB7_46 = async () => {
      await uploadData("B7_46", sumB7_46.toString());
      await uploadData("C7_46", sumC7_46.toString());
      await uploadData("D7_46", sumD7_46.toString());
      await uploadData("E7_46", sumE7_46.toString());
      await uploadData("F7_46", sumF7_46.toString());
      await uploadData("G7_46", sumG7_46.toString());
      await uploadData("H7_46", sumH7_46.toString());
      await uploadData("I7_46", sumI7_46.toString());
    };
    if (
      sumB7_46 ||
      sumC7_46 ||
      sumD7_46 ||
      sumE7_46 ||
      sumF7_46 ||
      sumG7_46 ||
      sumH7_46 ||
      sumI7_46
    ) {
      uploadSumB7_46();
    }
  }, [
    sumB7_46,
    sumC7_46,
    sumD7_46,
    sumE7_46,
    sumF7_46,
    sumG7_46,
    sumH7_46,
    sumI7_46,
  ]);

  //------------------------------------------------- TOTAL OF 49 -------------------------------------------------------

  const uploadSumB7_49 = () => {
    setSumB7_49(parseFloat(sumB4_6 || 0));
    setSumC7_49(parseFloat(sumC4_6 || 0));
    setSumD7_49(parseFloat(sumD4_6 || 0));
    setSumE7_49(parseFloat(sumE4_6 || 0));
    setSumF7_49(parseFloat(sumF4_6 || 0));
    setSumG7_49(parseFloat(sumG4_6 || 0));
    setSumH7_49(parseFloat(sumH4_6 || 0));
    setSumI7_49(parseFloat(sumI4_6 || 0));
  };

  useEffect(() => {
    uploadSumB7_49();
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
    const uploadSumB7_49 = async () => {
      await uploadData("B7_49", sumB7_49.toString());
      await uploadData("C7_49", sumC7_49.toString());
      await uploadData("D7_49", sumD7_49.toString());
      await uploadData("E7_49", sumE7_49.toString());
      await uploadData("F7_49", sumF7_49.toString());
      await uploadData("G7_49", sumG7_49.toString());
      await uploadData("H7_49", sumH7_49.toString());
      await uploadData("I7_49", sumI7_49.toString());
    };
    if (
      sumB7_49 ||
      sumC7_49 ||
      sumD7_49 ||
      sumE7_49 ||
      sumF7_49 ||
      sumG7_49 ||
      sumH7_49 ||
      sumI7_49
    ) {
      uploadSumB7_49();
    }
  }, [
    sumB7_49,
    sumC7_49,
    sumD7_49,
    sumE7_49,
    sumF7_49,
    sumG7_49,
    sumH7_49,
    sumI7_49,
  ]);

  //------------------------------------------------- TOTAL OF 50 -------------------------------------------------------

  const uploadSumB7_50 = () => {
    setSumB7_50(parseFloat(sumB7_49 || 0) * 0.25);
    setSumC7_50(parseFloat(sumC7_49 || 0) * 0.25);
    setSumD7_50(parseFloat(sumD7_49 || 0) * 0.25);
    setSumE7_50(parseFloat(sumE7_49 || 0) * 0.25);
    setSumF7_50(parseFloat(sumF7_49 || 0) * 0.25);
    setSumG7_50(parseFloat(sumG7_49 || 0) * 0.25);
    setSumH7_50(parseFloat(sumH7_49 || 0) * 0.25);
    setSumI7_50(parseFloat(sumI7_49 || 0) * 0.25);
  };

  useEffect(() => {
    uploadSumB7_50();
  }, [
    sumB7_49,
    sumC7_49,
    sumD7_49,
    sumE7_49,
    sumF7_49,
    sumG7_49,
    sumH7_49,
    sumI7_49,
  ]);

  useEffect(() => {
    const uploadSumB7_50 = async () => {
      await uploadData("B7_50", sumB7_50.toString());
      await uploadData("C7_50", sumC7_50.toString());
      await uploadData("D7_50", sumD7_50.toString());
      await uploadData("E7_50", sumE7_50.toString());
      await uploadData("F7_50", sumF7_50.toString());
      await uploadData("G7_50", sumG7_50.toString());
      await uploadData("H7_50", sumH7_50.toString());
      await uploadData("I7_50", sumI7_50.toString());
    };
    if (
      sumB7_50 ||
      sumC7_50 ||
      sumD7_50 ||
      sumE7_50 ||
      sumF7_50 ||
      sumG7_50 ||
      sumH7_50 ||
      sumI7_50
    ) {
      uploadSumB7_50();
    }
  }, [
    sumB7_50,
    sumC7_50,
    sumD7_50,
    sumE7_50,
    sumF7_50,
    sumG7_50,
    sumH7_50,
    sumI7_50,
  ]);

  //------------------------------------------------- TOTAL OF 51 -------------------------------------------------------

  const uploadSumB7_51 = () => {
    setSumB7_51(parseFloat(sumB4_6 || 0) * 0.05);
    setSumC7_51(parseFloat(sumC4_6 || 0) * 0.05);
    setSumD7_51(parseFloat(sumD4_6 || 0) * 0.05);
    setSumE7_51(parseFloat(sumE4_6 || 0) * 0.05);
    setSumF7_51(parseFloat(sumF4_6 || 0) * 0.05);
    setSumG7_51(parseFloat(sumG4_6 || 0) * 0.05);
    setSumH7_51(parseFloat(sumH4_6 || 0) * 0.05);
    setSumI7_51(parseFloat(sumI4_6 || 0) * 0.05);
  };

  useEffect(() => {
    uploadSumB7_51();
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
    const uploadSumB7_51 = async () => {
      await uploadData("B7_51", sumB7_51.toString());
      await uploadData("C7_51", sumC7_51.toString());
      await uploadData("D7_51", sumD7_51.toString());
      await uploadData("E7_51", sumE7_51.toString());
      await uploadData("F7_51", sumF7_51.toString());
      await uploadData("G7_51", sumG7_51.toString());
      await uploadData("H7_51", sumH7_51.toString());
      await uploadData("I7_51", sumI7_51.toString());
    };
    if (
      sumB7_51 ||
      sumC7_51 ||
      sumD7_51 ||
      sumE7_51 ||
      sumF7_51 ||
      sumG7_51 ||
      sumH7_51 ||
      sumI7_51
    ) {
      uploadSumB7_51();
    }
  }, [
    sumB7_51,
    sumC7_51,
    sumD7_51,
    sumE7_51,
    sumF7_51,
    sumG7_51,
    sumH7_51,
    sumI7_51,
  ]);

  //------------------------------------------------- TOTAL OF 52 -------------------------------------------------------

  const uploadSumB7_52 = () => {
    setSumB7_52(+parseFloat(sumB7_50 || 0) - parseFloat(sumB7_51 || 0));
    setSumC7_52(+parseFloat(sumC7_50 || 0) - parseFloat(sumC7_51 || 0));
    setSumD7_52(+parseFloat(sumD7_50 || 0) - parseFloat(sumD7_51 || 0));
    setSumE7_52(+parseFloat(sumE7_50 || 0) - parseFloat(sumE7_51 || 0));
    setSumF7_52(+parseFloat(sumF7_50 || 0) - parseFloat(sumF7_51 || 0));
    setSumG7_52(+parseFloat(sumG7_50 || 0) - parseFloat(sumG7_51 || 0));
    setSumH7_52(+parseFloat(sumH7_50 || 0) - parseFloat(sumH7_51 || 0));
    setSumI7_52(+parseFloat(sumI7_50 || 0) - parseFloat(sumI7_51 || 0));
  };

  useEffect(() => {
    uploadSumB7_52();
  }, [
    sumB7_51,
    sumC7_51,
    sumD7_51,
    sumE7_51,
    sumF7_51,
    sumG7_51,
    sumH7_51,
    sumI7_51,
    sumB7_50,
    sumC7_50,
    sumD7_50,
    sumE7_50,
    sumF7_50,
    sumG7_50,
    sumH7_50,
    sumI7_50,
  ]);

  useEffect(() => {
    const uploadSumB7_52 = async () => {
      await uploadData("B7_52", sumB7_52.toString());
      await uploadData("C7_52", sumC7_52.toString());
      await uploadData("D7_52", sumD7_52.toString());
      await uploadData("E7_52", sumE7_52.toString());
      await uploadData("F7_52", sumF7_52.toString());
      await uploadData("G7_52", sumG7_52.toString());
      await uploadData("H7_52", sumH7_52.toString());
      await uploadData("I7_52", sumI7_52.toString());
    };
    if (
      sumB7_52 ||
      sumC7_52 ||
      sumD7_52 ||
      sumE7_52 ||
      sumF7_52 ||
      sumG7_52 ||
      sumH7_52 ||
      sumI7_52
    ) {
      uploadSumB7_52();
    }
  }, [
    sumB7_52,
    sumC7_52,
    sumD7_52,
    sumE7_52,
    sumF7_52,
    sumG7_52,
    sumH7_52,
    sumI7_52,
  ]);

  //------------------------------------------------- TOTAL OF 53 -------------------------------------------------------

  const uploadSumB7_53 = () => {
    setSumB7_53(+parseFloat(sumB5_28 || 0));
    setSumC7_53(+parseFloat(sumC5_28 || 0));
    setSumD7_53(+parseFloat(sumD5_28 || 0));
    setSumE7_53(+parseFloat(sumE5_28 || 0));
    setSumF7_53(+parseFloat(sumF5_28 || 0));
    setSumG7_53(+parseFloat(sumG5_28 || 0));
    setSumH7_53(+parseFloat(sumH5_28 || 0));
    setSumI7_53(+parseFloat(sumI5_28 || 0));
  };

  useEffect(() => {
    uploadSumB7_53();
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

  useEffect(() => {
    const uploadSumB7_53 = async () => {
      await uploadData("B7_53", sumB7_53.toString());
      await uploadData("C7_53", sumC7_53.toString());
      await uploadData("D7_53", sumD7_53.toString());
      await uploadData("E7_53", sumE7_53.toString());
      await uploadData("F7_53", sumF7_53.toString());
      await uploadData("G7_53", sumG7_53.toString());
      await uploadData("H7_53", sumH7_53.toString());
      await uploadData("I7_53", sumI7_53.toString());
    };
    if (
      sumB7_53 ||
      sumC7_53 ||
      sumD7_53 ||
      sumE7_53 ||
      sumF7_53 ||
      sumG7_53 ||
      sumH7_53 ||
      sumI7_53
    ) {
      uploadSumB7_53();
    }
  }, [
    sumB7_53,
    sumC7_53,
    sumD7_53,
    sumE7_53,
    sumF7_53,
    sumG7_53,
    sumH7_53,
    sumI7_53,
  ]);

  //------------------------------------------------- TOTAL OF 54 -------------------------------------------------------

  const uploadSumB7_54 = () => {
    setSumB7_54(Math.min(sumB7_53 - sumB7_51, 0));
    setSumC7_54(Math.min(sumC7_53 - sumC7_51, 0));
    setSumD7_54(Math.min(sumD7_53 - sumD7_51, 0));
    setSumE7_54(Math.min(sumE7_53 - sumE7_51, 0));
    setSumF7_54(Math.min(sumF7_53 - sumF7_51, 0));
    setSumG7_54(Math.min(sumG7_53 - sumG7_51, 0));
    setSumH7_54(Math.min(sumH7_53 - sumH7_51, 0));
    setSumI7_54(Math.min(sumI7_53 - sumI7_51, 0));
  };

  useEffect(() => {
    uploadSumB7_54();
  }, [
    sumB7_53,
    sumC7_53,
    sumD7_53,
    sumE7_53,
    sumF7_53,
    sumG7_53,
    sumH7_53,
    sumI7_53,
    sumB7_51,
    sumC7_51,
    sumD7_51,
    sumE7_51,
    sumF7_51,
    sumG7_51,
    sumH7_51,
    sumI7_51,
  ]);

  useEffect(() => {
    const uploadSumB7_54 = async () => {
      await uploadData("B7_54", sumB7_54.toString());
      await uploadData("C7_54", sumC7_54.toString());
      await uploadData("D7_54", sumD7_54.toString());
      await uploadData("E7_54", sumE7_54.toString());
      await uploadData("F7_54", sumF7_54.toString());
      await uploadData("G7_54", sumG7_54.toString());
      await uploadData("H7_54", sumH7_54.toString());
      await uploadData("I7_54", sumI7_54.toString());
    };
    if (
      sumB7_54 ||
      sumC7_54 ||
      sumD7_54 ||
      sumE7_54 ||
      sumF7_54 ||
      sumG7_54 ||
      sumH7_54 ||
      sumI7_54
    ) {
      uploadSumB7_54();
    }
  }, [
    sumB7_54,
    sumC7_54,
    sumD7_54,
    sumE7_54,
    sumF7_54,
    sumG7_54,
    sumH7_54,
    sumI7_54,
  ]);

  //------------------------------------------------- TOTAL OF 57 -------------------------------------------------------

  const uploadSumB7_57 = () => {
    setSumB7_57(parseFloat(sumB5_14 || 0));
    setSumC7_57(parseFloat(sumC5_14 || 0));
    setSumD7_57(parseFloat(sumD5_14 || 0));
    setSumE7_57(parseFloat(sumE5_14 || 0));
    setSumF7_57(parseFloat(sumF5_14 || 0));
    setSumG7_57(parseFloat(sumG5_14 || 0));
    setSumH7_57(parseFloat(sumH5_14 || 0));
    setSumI7_57(parseFloat(sumI5_14 || 0));
  };

  useEffect(() => {
    uploadSumB7_57();
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

  useEffect(() => {
    const uploadSumB7_57 = async () => {
      await uploadData("B7_57", sumB7_57.toString());
      await uploadData("C7_57", sumC7_57.toString());
      await uploadData("D7_57", sumD7_57.toString());
      await uploadData("E7_57", sumE7_57.toString());
      await uploadData("F7_57", sumF7_57.toString());
      await uploadData("G7_57", sumG7_57.toString());
      await uploadData("H7_57", sumH7_57.toString());
      await uploadData("I7_57", sumI7_57.toString());
    };
    if (
      sumB7_57 ||
      sumC7_57 ||
      sumD7_57 ||
      sumE7_57 ||
      sumF7_57 ||
      sumG7_57 ||
      sumH7_57 ||
      sumI7_57
    ) {
      uploadSumB7_57();
    }
  }, [
    sumB7_57,
    sumC7_57,
    sumD7_57,
    sumE7_57,
    sumF7_57,
    sumG7_57,
    sumH7_57,
    sumI7_57,
  ]);

  //------------------------------------------------- TOTAL OF 58 -------------------------------------------------------

  const uploadSumB7_58 = () => {
    setSumB7_58(parseFloat(sumB5_21 || 0));
    setSumC7_58(parseFloat(sumC5_21 || 0));
    setSumD7_58(parseFloat(sumD5_21 || 0));
    setSumE7_58(parseFloat(sumE5_21 || 0));
    setSumF7_58(parseFloat(sumF5_21 || 0));
    setSumG7_58(parseFloat(sumG5_21 || 0));
    setSumH7_58(parseFloat(sumH5_21 || 0));
    setSumI7_58(parseFloat(sumI5_21 || 0));
  };

  useEffect(() => {
    uploadSumB7_58();
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

  useEffect(() => {
    const uploadSumB7_58 = async () => {
      await uploadData("B7_58", sumB7_58.toString());
      await uploadData("C7_58", sumC7_58.toString());
      await uploadData("D7_58", sumD7_58.toString());
      await uploadData("E7_58", sumE7_58.toString());
      await uploadData("F7_58", sumF7_58.toString());
      await uploadData("G7_58", sumG7_58.toString());
      await uploadData("H7_58", sumH7_58.toString());
      await uploadData("I7_58", sumI7_58.toString());
    };
    if (
      sumB7_58 ||
      sumC7_58 ||
      sumD7_58 ||
      sumE7_58 ||
      sumF7_58 ||
      sumG7_58 ||
      sumH7_58 ||
      sumI7_58
    ) {
      uploadSumB7_58();
    }
  }, [
    sumB7_58,
    sumC7_58,
    sumD7_58,
    sumE7_58,
    sumF7_58,
    sumG7_58,
    sumH7_58,
    sumI7_58,
    sumB7_57,
    sumC7_57,
    sumD7_57,
    sumE7_57,
    sumF7_57,
    sumG7_57,
    sumH7_57,
    sumI7_57,
  ]);

  //------------------------------------------------- TOTAL OF 59 -------------------------------------------------------

  const uploadSumB7_59 = () => {
    setSumB7_59(parseFloat(sumB7_57 || 0) - parseFloat(sumB7_58 || 0));
    setSumC7_59(parseFloat(sumC7_57 || 0) - parseFloat(sumC7_58 || 0));
    setSumD7_59(parseFloat(sumD7_57 || 0) - parseFloat(sumD7_58 || 0));
    setSumE7_59(parseFloat(sumE7_57 || 0) - parseFloat(sumE7_58 || 0));
    setSumF7_59(parseFloat(sumF7_57 || 0) - parseFloat(sumF7_58 || 0));
    setSumG7_59(parseFloat(sumG7_57 || 0) - parseFloat(sumG7_58 || 0));
    setSumH7_59(parseFloat(sumH7_57 || 0) - parseFloat(sumH7_58 || 0));
    setSumI7_59(parseFloat(sumI7_57 || 0) - parseFloat(sumI7_58 || 0));
  };

  useEffect(() => {
    uploadSumB7_59();
  }, [
    sumB7_58,
    sumC7_58,
    sumD7_58,
    sumE7_58,
    sumF7_58,
    sumG7_58,
    sumH7_58,
    sumI7_58,
    sumB7_57,
    sumC7_57,
    sumD7_57,
    sumE7_57,
    sumF7_57,
    sumG7_57,
    sumH7_57,
    sumI7_57,
  ]);
  useEffect(() => {
    const uploadSumB7_59 = async () => {
      await uploadData("B7_59", sumB7_59.toString());
      await uploadData("C7_59", sumC7_59.toString());
      await uploadData("D7_59", sumD7_59.toString());
      await uploadData("E7_59", sumE7_59.toString());
      await uploadData("F7_59", sumF7_59.toString());
      await uploadData("G7_59", sumG7_59.toString());
      await uploadData("H7_59", sumH7_59.toString());
      await uploadData("I7_59", sumI7_59.toString());
    };
    if (
      sumB7_59 ||
      sumC7_59 ||
      sumD7_59 ||
      sumE7_59 ||
      sumF7_59 ||
      sumG7_59 ||
      sumH7_59 ||
      sumI7_59
    ) {
      uploadSumB7_59();
    }
  }, [
    sumB7_59,
    sumC7_59,
    sumD7_59,
    sumE7_59,
    sumF7_59,
    sumG7_59,
    sumH7_59,
    sumI7_59,
  ]);

  //------------------------------------------------- TOTAL OF 60 -------------------------------------------------------

  const uploadSumB7_60 = () => {
    setSumB7_60(sumB7_59 * 0.25 || 0);
    setSumC7_60(sumC7_59 * 0.25 || 0);
    setSumD7_60(sumD7_59 * 0.25 || 0);
    setSumE7_60(sumE7_59 * 0.25 || 0);
    setSumF7_60(sumF7_59 * 0.25 || 0);
    setSumG7_60(sumG7_59 * 0.25 || 0);
    setSumH7_60(sumH7_59 * 0.25 || 0);
    setSumI7_60(sumI7_59 * 0.25 || 0);
  };

  useEffect(() => {
    uploadSumB7_60();
  }, [
    sumB7_59,
    sumC7_59,
    sumD7_59,
    sumE7_59,
    sumF7_59,
    sumG7_59,
    sumH7_59,
    sumI7_59,
  ]);

  useEffect(() => {
    const uploadSumB7_60 = async () => {
      await uploadData("B7_60", sumB7_60.toString());
      await uploadData("C7_60", sumC7_60.toString());
      await uploadData("D7_60", sumD7_60.toString());
      await uploadData("E7_60", sumE7_60.toString());
      await uploadData("F7_60", sumF7_60.toString());
      await uploadData("G7_60", sumG7_60.toString());
      await uploadData("H7_60", sumH7_60.toString());
      await uploadData("I7_60", sumI7_60.toString());
    };
    if (
      sumB7_60 ||
      sumC7_60 ||
      sumD7_60 ||
      sumE7_60 ||
      sumF7_60 ||
      sumG7_60 ||
      sumH7_60 ||
      sumI7_60
    ) {
      uploadSumB7_60();
    }
  }, [
    sumB7_60,
    sumC7_60,
    sumD7_60,
    sumE7_60,
    sumF7_60,
    sumG7_60,
    sumH7_60,
    sumI7_60,
  ]);

  //------------------------------------------------- TOTAL OF 61 -------------------------------------------------------

  const uploadSumB7_61 = () => {
    const calculateSum = (sum59, sum60) => {
      const result = parseFloat(sum59 || 0) - parseFloat(sum60 || 0);
      return result < 1 ? result : null;
    };
    const newSumB7_61 = calculateSum(sumB7_59, sumB7_60);
    const newSumC7_61 = calculateSum(sumC7_59, sumC7_60);
    const newSumD7_61 = calculateSum(sumD7_59, sumD7_60);
    const newSumE7_61 = calculateSum(sumE7_59, sumE7_60);
    const newSumF7_61 = calculateSum(sumF7_59, sumF7_60);
    const newSumG7_61 = calculateSum(sumG7_59, sumG7_60);
    const newSumH7_61 = calculateSum(sumH7_59, sumH7_60);
    const newSumI7_61 = calculateSum(sumI7_59, sumI7_60);

    if (newSumB7_61 !== null) setSumB7_61(newSumB7_61);
    if (newSumC7_61 !== null) setSumC7_61(newSumC7_61);
    if (newSumD7_61 !== null) setSumD7_61(newSumD7_61);
    if (newSumE7_61 !== null) setSumE7_61(newSumE7_61);
    if (newSumF7_61 !== null) setSumF7_61(newSumF7_61);
    if (newSumG7_61 !== null) setSumG7_61(newSumG7_61);
    if (newSumH7_61 !== null) setSumH7_61(newSumH7_61);
    if (newSumI7_61 !== null) setSumI7_61(newSumI7_61);
  };

  useEffect(() => {
    uploadSumB7_61();
  }, [
    sumB7_60,
    sumC7_60,
    sumD7_60,
    sumE7_60,
    sumF7_60,
    sumG7_60,
    sumH7_60,
    sumI7_60,
    sumB7_59,
    sumC7_59,
    sumD7_59,
    sumE7_59,
    sumF7_59,
    sumG7_59,
    sumH7_59,
    sumI7_59,
  ]);

  useEffect(() => {
    const uploadSumB7_61 = async () => {
      if (sumB7_61 !== null) await uploadData("B7_61", sumB7_61.toString());
      if (sumC7_61 !== null) await uploadData("C7_61", sumC7_61.toString());
      if (sumD7_61 !== null) await uploadData("D7_61", sumD7_61.toString());
      if (sumE7_61 !== null) await uploadData("E7_61", sumE7_61.toString());
      if (sumF7_61 !== null) await uploadData("F7_61", sumF7_61.toString());
      if (sumG7_61 !== null) await uploadData("G7_61", sumG7_61.toString());
      if (sumH7_61 !== null) await uploadData("H7_61", sumH7_61.toString());
      if (sumI7_61 !== null) await uploadData("I7_61", sumI7_61.toString());
    };

    if (
      sumC7_61 !== null ||
      sumD7_61 !== null ||
      sumE7_61 !== null ||
      sumF7_61 !== null ||
      sumG7_61 !== null ||
      sumH7_61 !== null ||
      sumI7_61 !== null ||
      sumB7_61 !== null
    ) {
      uploadSumB7_61();
    }
  }, [
    sumB7_61,
    sumC7_61,
    sumD7_61,
    sumE7_61,
    sumF7_61,
    sumG7_61,
    sumH7_61,
    sumI7_61,
  ]);

  //------------------------------------------------- TOTAL OF 62 -------------------------------------------------------

  const uploadSumB7_62 = () => {
    setSumB7_62(sumB5_15 || 0);
    setSumC7_62(sumC5_15 || 0);
    setSumD7_62(sumD5_15 || 0);
    setSumE7_62(sumE5_15 || 0);
    setSumF7_62(sumF5_15 || 0);
    setSumG7_62(sumG5_15 || 0);
    setSumH7_62(sumH5_15 || 0);
    setSumI7_62(sumI5_15 || 0);
  };

  useEffect(() => {
    uploadSumB7_62();
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

  useEffect(() => {
    const uploadSumB7_62 = async () => {
      await uploadData("B7_62", sumB7_62.toString());
      await uploadData("C7_62", sumC7_62.toString());
      await uploadData("D7_62", sumD7_62.toString());
      await uploadData("E7_62", sumE7_62.toString());
      await uploadData("F7_62", sumF7_62.toString());
      await uploadData("G7_62", sumG7_62.toString());
      await uploadData("H7_62", sumH7_62.toString());
      await uploadData("I7_62", sumI7_62.toString());
    };
    if (
      sumB7_62 ||
      sumC7_62 ||
      sumD7_62 ||
      sumE7_62 ||
      sumF7_62 ||
      sumG7_62 ||
      sumH7_62 ||
      sumI7_62
    ) {
      uploadSumB7_62();
    }
  }, [
    sumB7_62,
    sumC7_62,
    sumD7_62,
    sumE7_62,
    sumF7_62,
    sumG7_62,
    sumH7_62,
    sumI7_62,
  ]);

  //------------------------------------------------- TOTAL OF 63 -------------------------------------------------------

  const uploadSumB7_63 = () => {
    setSumB7_63(sumB5_15 * 0.5 || 0);
    setSumC7_63(sumC5_15 * 0.5 || 0);
    setSumD7_63(sumD5_15 * 0.5 || 0);
    setSumE7_63(sumE5_15 * 0.5 || 0);
    setSumF7_63(sumF5_15 * 0.5 || 0);
    setSumG7_63(sumG5_15 * 0.5 || 0);
    setSumH7_63(sumH5_15 * 0.5 || 0);
    setSumI7_63(sumI5_15 * 0.5 || 0);
  };

  useEffect(() => {
    uploadSumB7_63();
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

  useEffect(() => {
    const uploadSumB7_63 = async () => {
      await uploadData("B7_63", sumB7_63.toString());
      await uploadData("C7_63", sumC7_63.toString());
      await uploadData("D7_63", sumD7_63.toString());
      await uploadData("E7_63", sumE7_63.toString());
      await uploadData("F7_63", sumF7_63.toString());
      await uploadData("G7_63", sumG7_63.toString());
      await uploadData("H7_63", sumH7_63.toString());
      await uploadData("I7_63", sumI7_63.toString());
    };
    if (
      sumB7_63 ||
      sumC7_63 ||
      sumD7_63 ||
      sumE7_63 ||
      sumF7_63 ||
      sumG7_63 ||
      sumH7_63 ||
      sumI7_63
    ) {
      uploadSumB7_63();
    }
  }, [
    sumB7_63,
    sumC7_63,
    sumD7_63,
    sumE7_63,
    sumF7_63,
    sumG7_63,
    sumH7_63,
    sumI7_63,
  ]);

  //------------------------------------------------- TOTAL OF 64 -------------------------------------------------------

  const uploadSumB7_64 = () => {
    const calculateSum = (sum62, sum63) => {
      const result = parseFloat(sum62 || 0) - parseFloat(sum63 || 0);
      return result < 1 ? result : null;
    };

    const newSumB7_64 = calculateSum(sumB7_62, sumB7_63);
    const newSumC7_64 = calculateSum(sumC7_62, sumC7_63);
    const newSumD7_64 = calculateSum(sumD7_62, sumD7_63);
    const newSumE7_64 = calculateSum(sumE7_62, sumE7_63);
    const newSumF7_64 = calculateSum(sumF7_62, sumF7_63);
    const newSumG7_64 = calculateSum(sumG7_62, sumG7_63);
    const newSumH7_64 = calculateSum(sumH7_62, sumH7_63);
    const newSumI7_64 = calculateSum(sumI7_62, sumI7_63);

    if (newSumB7_64 !== null) setSumB7_64(newSumB7_64);
    if (newSumC7_64 !== null) setSumC7_64(newSumC7_64);
    if (newSumD7_64 !== null) setSumD7_64(newSumD7_64);
    if (newSumE7_64 !== null) setSumE7_64(newSumE7_64);
    if (newSumF7_64 !== null) setSumF7_64(newSumF7_64);
    if (newSumG7_64 !== null) setSumG7_64(newSumG7_64);
    if (newSumH7_64 !== null) setSumH7_64(newSumH7_64);
    if (newSumI7_64 !== null) setSumI7_64(newSumI7_64);
  };

  useEffect(() => {
    uploadSumB7_64();
  }, [
    sumB7_62,
    sumC7_62,
    sumD7_62,
    sumE7_62,
    sumF7_62,
    sumG7_62,
    sumH7_62,
    sumI7_62,
    sumB7_63,
    sumC7_63,
    sumD7_63,
    sumE7_63,
    sumF7_63,
    sumG7_63,
    sumH7_63,
    sumI7_63,
  ]);

  useEffect(() => {
    const uploadSumB7_64 = async () => {
      if (sumB7_64 !== null) await uploadData("B7_64", sumB7_64.toString());
      if (sumC7_64 !== null) await uploadData("C7_64", sumC7_64.toString());
      if (sumD7_64 !== null) await uploadData("D7_64", sumD7_64.toString());
      if (sumE7_64 !== null) await uploadData("E7_64", sumE7_64.toString());
      if (sumF7_64 !== null) await uploadData("F7_64", sumF7_64.toString());
      if (sumG7_64 !== null) await uploadData("G7_64", sumG7_64.toString());
      if (sumH7_64 !== null) await uploadData("H7_64", sumH7_64.toString());
      if (sumI7_64 !== null) await uploadData("I7_64", sumI7_64.toString());
    };

    if (
      sumC7_64 !== null ||
      sumD7_64 !== null ||
      sumE7_64 !== null ||
      sumF7_64 !== null ||
      sumG7_64 !== null ||
      sumH7_64 !== null ||
      sumI7_64 !== null ||
      sumB7_64 !== null
    ) {
      uploadSumB7_64();
    }
  }, [
    sumB7_64,
    sumC7_64,
    sumD7_64,
    sumE7_64,
    sumF7_64,
    sumG7_64,
    sumH7_64,
    sumI7_64,
  ]);

  //------------------------------------------------- TOTAL OF 65 -------------------------------------------------------

  const uploadSumB7_65 = () => {
    setSumB7_65(+parseFloat(sumB7_61 || 0) + parseFloat(sumB7_64 || 0));
    setSumC7_65(+parseFloat(sumC7_61 || 0) + parseFloat(sumC7_64 || 0));
    setSumD7_65(+parseFloat(sumD7_61 || 0) + parseFloat(sumD7_64 || 0));
    setSumE7_65(+parseFloat(sumE7_61 || 0) + parseFloat(sumE7_64 || 0));
    setSumF7_65(+parseFloat(sumF7_61 || 0) + parseFloat(sumF7_64 || 0));
    setSumG7_65(+parseFloat(sumG7_61 || 0) + parseFloat(sumG7_64 || 0));
    setSumH7_65(+parseFloat(sumH7_61 || 0) + parseFloat(sumH7_64 || 0));
    setSumI7_65(+parseFloat(sumI7_61 || 0) + parseFloat(sumI7_64 || 0));
  };

  useEffect(() => {
    uploadSumB7_65();
  }, [
    sumB7_64,
    sumC7_64,
    sumD7_64,
    sumE7_64,
    sumF7_64,
    sumG7_64,
    sumH7_64,
    sumI7_64,
    sumB7_61,
    sumC7_61,
    sumD7_61,
    sumE7_61,
    sumF7_61,
    sumG7_61,
    sumH7_61,
    sumI7_61,
  ]);
  useEffect(() => {
    const uploadSumB7_65 = async () => {
      await uploadData("B7_65", sumB7_65.toString());
      await uploadData("C7_65", sumC7_65.toString());
      await uploadData("D7_65", sumD7_65.toString());
      await uploadData("E7_65", sumE7_65.toString());
      await uploadData("F7_65", sumF7_65.toString());
      await uploadData("G7_65", sumG7_65.toString());
      await uploadData("H7_65", sumH7_65.toString());
      await uploadData("I7_65", sumI7_65.toString());
    };
    if (
      sumB7_65 ||
      sumC7_65 ||
      sumD7_65 ||
      sumE7_65 ||
      sumF7_65 ||
      sumG7_65 ||
      sumH7_65 ||
      sumI7_65
    ) {
      uploadSumB7_65();
    }
  }, [
    sumB7_65,
    sumC7_65,
    sumD7_65,
    sumE7_65,
    sumF7_65,
    sumG7_65,
    sumH7_65,
    sumI7_65,
  ]);

  //------------------------------------------------- TOTAL OF 66 -------------------------------------------------------

  const uploadSumB7_66 = () => {
    setSumB7_66(
      parseFloat(inputValues["B2_34"] || 0) +
        parseFloat(inputValues["B2_35"] || 0)
    );
    setSumC7_66(
      parseFloat(inputValues["C2_34"] || 0) +
        parseFloat(inputValues["C2_35"] || 0)
    );
    setSumD7_66(
      parseFloat(inputValues["D2_34"] || 0) +
        parseFloat(inputValues["D2_35"] || 0)
    );
    setSumE7_66(
      parseFloat(inputValues["E2_34"] || 0) +
        parseFloat(inputValues["E2_35"] || 0)
    );
    setSumF7_66(
      parseFloat(inputValues["F2_34"] || 0) +
        parseFloat(inputValues["F2_35"] || 0)
    );
    setSumG7_66(
      parseFloat(inputValues["G2_34"] || 0) +
        parseFloat(inputValues["G2_35"] || 0)
    );
    setSumH7_66(
      parseFloat(inputValues["H2_34"] || 0) +
        parseFloat(inputValues["H2_35"] || 0)
    );
    setSumI7_66(
      parseFloat(inputValues["I2_34"] || 0) +
        parseFloat(inputValues["I2_35"] || 0)
    );
  };

  useEffect(() => {
    uploadSumB7_66();
  }, [inputValues]);
  useEffect(() => {
    const uploadSumB7_66 = async () => {
      await uploadData("B7_66", sumB7_66.toString());
      await uploadData("C7_66", sumC7_66.toString());
      await uploadData("D7_66", sumD7_66.toString());
      await uploadData("E7_66", sumE7_66.toString());
      await uploadData("F7_66", sumF7_66.toString());
      await uploadData("G7_66", sumG7_66.toString());
      await uploadData("H7_66", sumH7_66.toString());
      await uploadData("I7_66", sumI7_66.toString());
    };
    if (
      sumB7_66 ||
      sumC7_66 ||
      sumD7_66 ||
      sumE7_66 ||
      sumF7_66 ||
      sumG7_66 ||
      sumH7_66 ||
      sumI7_66
    ) {
      uploadSumB7_66();
    }
  }, [
    sumB7_66,
    sumC7_66,
    sumD7_66,
    sumE7_66,
    sumF7_66,
    sumG7_66,
    sumH7_66,
    sumI7_66,
  ]);

  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the top offset of your fixed-top element
      const offsetTop = document.querySelector(".fixed-top").offsetTop;

      // Check if the scroll position is below the offsetTop
      if (window.pageYOffset > offsetTop) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    // Add event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Navbarr />

      <div className="bg-white rounded-3xl px-10 py-7" style={{ boxShadow: "0 -4px 8px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.2)" }}>
        <div className="mt-10   rounded-xl container-fluid  border-1 border-black     d-flex justify-content-center div_1">
          <h2 className="p-2 font-bold text-xl">{username}</h2>
        </div>

        <div className="container-fluid border-1 border-black mt-3">
          <div className="row">
            <div className="col-lg-4 border-end border-black d-flex justify-content-center">
              <h6>KEY FINANCIAL INDICATORS</h6>
            </div>
            <div className="col-lg-8 border-start d-flex justify-content-center">
              <h6>For the year ended/ending (Rs. in Lacs)</h6>
            </div>
          </div>
        </div>

        <div
          className={`fixed-top   ${isFixed ? "fixed-top-active px-10" : ""}`}
        >
          <div className={" container-fluid border-1 border-black "}>
            <div className="row">
              <div className="col-lg-4 border-end border-black d-flex justify-content-center">
                <h6 className="navbar-brand ">PARTICULARS</h6>
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

        {/*---------------------------------------- SOURCES ------------------------------------------------------*/}

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
              <h6>Net Sales</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="B7_5"
                    value={sumB7_5}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="C7_5"
                    value={sumC7_5}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="D7_5"
                    value={sumD7_5}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="E7_5"
                    value={sumE7_5}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="F7_5"
                    value={sumF7_5}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="G7_5"
                    value={sumG7_5}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="H7_5"
                    value={sumH7_5}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="I7_5"
                    value={sumI7_5}
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
              <h6>% rise(+)/fall(-) in sales</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="B7_6"
                    value={inputValues.B7_6}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="C7_6"
                    value={sumC7_6}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="D7_6"
                    value={sumD7_6}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="E7_6"
                    value={sumE7_6}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="F7_6"
                    value={sumF7_6}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="G7_6"
                    value={sumG7_6}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="H7_6"
                    value={sumH7_6}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="I7_6"
                    value={sumI7_6}
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
              <h6>Operating Profit</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="B7_7"
                    value={sumB7_7}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="C7_7"
                    value={sumC7_7}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="D7_7"
                    value={sumD7_7}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="E7_7"
                    value={sumE7_7}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="F7_7"
                    value={sumF7_7}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="G7_7"
                    value={sumG7_7}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="H7_7"
                    value={sumH7_7}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="I7_7"
                    value={sumI7_7}
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
              <h6 style={{ color: "blue" }}>Net Profit After Tax</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="B7_8"
                    value={sumB7_8}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="C7_8"
                    value={sumC7_8}
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
                    className="form-control border-none"
                    aria-label="First name"
                    name="D7_8"
                    value={sumD7_8}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="E7_8"
                    value={sumE7_8}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="F7_8"
                    value={sumF7_8}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="G7_8"
                    value={sumG7_8}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="H7_8"
                    value={sumH7_8}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="I7_8"
                    value={sumI7_8}
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
              <h6 style={{ color: "blue" }}>Cash accruals</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="B7_9"
                    value={sumB7_9}
                    onChange={changeData}
                  />

                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="C7_9"
                    value={sumC7_9}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="D7_9"
                    value={sumD7_9}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="E7_9"
                    value={sumE7_9}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="F7_9"
                    value={sumF7_9}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="G7_9"
                    value={sumG7_9}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="H7_9"
                    value={sumH7_9}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="I7_9"
                    value={sumI7_9}
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
              <h6 style={{ color: "blue" }}>Net Working Capital</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="B7_10"
                    value={sumB7_10}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="C7_10"
                    value={sumC7_10}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="D7_10"
                    value={sumD7_10}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="E7_10"
                    value={sumE7_10}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="F7_10"
                    value={sumF7_10}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="G7_10"
                    value={sumG7_10}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="H7_10"
                    value={sumH7_10}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="I7_10"
                    value={sumI7_10}
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
              <h6 style={{ color: "blue" }}>Current Ratio</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="B7_11"
                    value={sumB7_11}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="C7_11"
                    value={sumC7_11}
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
                    className="form-control border-none"
                    aria-label="First name"
                    name="D7_11"
                    value={sumD7_11}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="E7_11"
                    value={sumE7_11}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="F7_11"
                    value={sumF7_11}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="G7_11"
                    value={sumG7_11}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="H7_11"
                    value={sumH7_11}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="I7_11"
                    value={sumI7_11}
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
              <h6 style={{ color: "blue" }}>TNW</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="B7_12"
                    value={sumB7_12}
                    onChange={changeData}
                  />

                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="C7_12"
                    value={sumC7_12}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="D7_12"
                    value={sumD7_12}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="E7_12"
                    value={sumE7_12}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="F7_12"
                    value={sumF7_12}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="G7_12"
                    value={sumG7_12}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="H7_12"
                    value={sumH7_12}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="I7_12"
                    value={sumI7_12}
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
              <h6 style={{ color: "blue" }}>TNW ( Adjusted )</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="B7_13"
                    value={sumB7_13}
                    onChange={changeData}
                  />

                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="C7_13"
                    value={sumC7_13}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="D7_13"
                    value={sumD7_13}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="E7_13"
                    value={sumE7_13}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="F7_13"
                    value={sumF7_13}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="G7_13"
                    value={sumG7_13}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="H7_13"
                    value={sumH7_13}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="I7_13"
                    value={sumI7_13}
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
              <h6 style={{ color: "blue" }}>TOL / TNW ( Quasi Equity )</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="B7_14"
                    value={sumB7_14}
                    onChange={changeData}
                  />

                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="C7_14"
                    value={sumC7_14}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="D7_14"
                    value={sumD7_14}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="E7_14"
                    value={sumE7_14}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="F7_14"
                    value={sumF7_14}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="G7_14"
                    value={sumG7_14}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="H7_14"
                    value={sumH7_14}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="I7_14"
                    value={sumI7_14}
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
              <h6 style={{ color: "blue" }}>TOL / TNW ( Adjusted )</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="B7_15"
                    value={sumB7_15}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="C7_15"
                    value={sumC7_15}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="D7_15"
                    value={sumD7_15}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="E7_15"
                    value={sumE7_15}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="F7_15"
                    value={sumF7_15}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="G7_15"
                    value={sumG7_15}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="H7_15"
                    value={sumH7_15}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="I7_15"
                    value={sumI7_15}
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
              <h6 style={{ color: "blue" }}>TOL / TNW ( Quasi Equity )</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="B7_16"
                    value={sumB7_16}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="C7_16"
                    value={sumC7_16}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="D7_16"
                    value={sumD7_16}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="E7_16"
                    value={sumE7_16}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="F7_16"
                    value={sumF7_16}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="G7_16"
                    value={sumG7_16}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="H7_16"
                    value={sumH7_16}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="I7_16"
                    value={sumI7_16}
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
              <h6 style={{ color: "blue" }}>Funded Debt / TNW</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="B7_17"
                    value={sumB7_17}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="C7_17"
                    value={sumC7_17}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="D7_17"
                    value={sumD7_17}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="E7_17"
                    value={sumE7_17}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="F7_17"
                    value={sumF7_17}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="G7_17"
                    value={sumG7_17}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="H7_17"
                    value={sumH7_17}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="I7_17"
                    value={sumI7_17}
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
              <h6>Gross Fixed Asset/Term Loan</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="B7_18"
                    value={sumB7_18}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="C7_18"
                    value={sumC7_18}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="D7_18"
                    value={sumD7_18}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="E7_18"
                    value={sumE7_18}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="F7_18"
                    value={sumF7_18}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="G7_18"
                    value={sumG7_18}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="H7_18"
                    value={sumH7_18}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="I7_18"
                    value={sumI7_18}
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
              <h5>ABRIDGED FINANCIAL LIABILITIES</h5>
            </div>
          </div>
        </div>

        <div className="container-fluid border-1 border-black mt-3">
          <div className="row">
            <div className="col-lg-4 border-end border-black d-flex justify-content-center">
              <h6>Capital & Reserves</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="B7_22"
                    value={sumB7_22}
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
                    className="form-control border-none"
                    aria-label="First name"
                    name="C7_22"
                    value={sumC7_22}
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
                    className="form-control border-none"
                    aria-label="First name"
                    name="D7_22"
                    value={sumD7_22}
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
                    className="form-control border-none"
                    aria-label="First name"
                    name="E7_22"
                    value={sumE7_22}
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
                    className="form-control border-none"
                    aria-label="First name"
                    name="F7_22"
                    value={sumF7_22}
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
                    className="form-control border-none"
                    aria-label="First name"
                    name="G7_22"
                    value={sumG7_22}
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
                    className="form-control border-none"
                    aria-label="First name"
                    name="H7_22"
                    value={sumH7_22}
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
                    className="form-control border-none"
                    aria-label="First name"
                    name="I7_22"
                    value={sumI7_22}
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
              <h6>Long Term Liabilities</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="B7_23"
                    value={sumB7_23}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="C7_23"
                    value={sumC7_23}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="D7_23"
                    value={sumD7_23}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="E7_23"
                    value={sumE7_23}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="F7_23"
                    value={sumF7_23}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="G7_23"
                    value={sumG7_23}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="H7_23"
                    value={sumH7_23}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="I7_23"
                    value={sumI7_23}
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
              <h6>Current Liabilities</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="B7_24"
                    value={sumB7_24}
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
                    className="form-control border-none"
                    aria-label="First name"
                    name="C7_24"
                    value={sumC7_24}
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
                    className="form-control border-none"
                    aria-label="First name"
                    name="D7_24"
                    value={sumD7_24}
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
                    className="form-control border-none"
                    aria-label="First name"
                    name="E7_24"
                    value={sumE7_24}
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
                    className="form-control border-none"
                    aria-label="First name"
                    name="F7_24"
                    value={sumF7_24}
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
                    className="form-control border-none"
                    aria-label="First name"
                    name="G7_24"
                    value={sumG7_24}
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
                    className="form-control border-none"
                    aria-label="First name"
                    name="H7_24"
                    value={sumH7_24}
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
                    className="form-control border-none"
                    aria-label="First name"
                    name="I7_24"
                    value={sumI7_24}
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
              <h6>TOTAL LIABILITIES</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="B7_25"
                    value={sumB7_25}
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
                    className="form-control border-none"
                    aria-label="First name"
                    name="C7_25"
                    value={sumC7_25}
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
                    className="form-control border-none"
                    aria-label="First name"
                    name="D7_25"
                    value={sumD7_25}
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
                    className="form-control border-none"
                    aria-label="First name"
                    name="E7_25"
                    value={sumE7_25}
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
                    className="form-control border-none"
                    aria-label="First name"
                    name="F7_25"
                    value={sumF7_25}
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
                    className="form-control border-none"
                    aria-label="First name"
                    name="G7_25"
                    value={sumG7_25}
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
                    className="form-control border-none"
                    aria-label="First name"
                    name="H7_25"
                    value={sumH7_25}
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
                    className="form-control border-none"
                    aria-label="First name"
                    name="I7_25"
                    value={sumI7_25}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid border-1 border-black mt-3">
          <div
            className="row"
            style={{ backgroundColor: "rgb(224, 231, 231)" }}
          >
            <div className="col-lg-4 border-end border-black d-flex justify-content-center">
              <h5>ASSETS</h5>
            </div>
          </div>
        </div>

        <div className="container-fluid border-1 border-black mt-3">
          <div className="row">
            <div className="col-lg-4 border-end border-black d-flex justify-content-center">
              <h6>Fixed Assets</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="B7_27"
                    value={sumB7_27}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="C7_27"
                    value={sumC7_27}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="D7_27"
                    value={sumD7_27}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="E7_27"
                    value={sumE7_27}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="F7_27"
                    value={sumF7_27}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="G7_27"
                    value={sumG7_27}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="H7_27"
                    value={sumH7_27}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="I7_27"
                    value={sumI7_27}
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
              <h6>Non Current Assets</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="B7_28"
                    value={sumB7_28}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="C7_28"
                    value={sumC7_28}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="D7_28"
                    value={sumD7_28}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="E7_28"
                    value={sumE7_28}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="F7_28"
                    value={sumF7_28}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="G7_28"
                    value={sumG7_28}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="H7_28"
                    value={sumH7_28}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="I7_28"
                    value={sumI7_28}
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
              <h6>Current Assets</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="B7_29"
                    value={sumB7_29}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="C7_29"
                    value={sumC7_29}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="D7_29"
                    value={sumD7_29}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="E7_29"
                    value={sumE7_29}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="F7_29"
                    value={sumF7_29}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="G7_29"
                    value={sumG7_29}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="H7_29"
                    value={sumH7_29}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="I7_29"
                    value={sumI7_29}
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
              <h6>Intangible Assets</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="B7_30"
                    value={sumB7_30}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="C7_30"
                    value={sumC7_30}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="D7_30"
                    value={sumD7_30}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="E7_30"
                    value={sumE7_30}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="F7_30"
                    value={sumF7_30}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="G7_30"
                    value={sumG7_30}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="H7_30"
                    value={sumH7_30}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="I7_30"
                    value={sumI7_30}
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
              <h6>TOTAL ASSETS</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="B7_31"
                    value={sumB7_31}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="C7_31"
                    value={sumC7_31}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="D7_31"
                    value={sumD7_31}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="E7_31"
                    value={sumE7_31}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="F7_31"
                    value={sumF7_31}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="G7_31"
                    value={sumG7_31}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="H7_31"
                    value={sumH7_31}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="I7_31"
                    value={sumI7_31}
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
              <h5>II MOVEMENTS OF T N W</h5>
            </div>
          </div>
        </div>

        <div className="container-fluid border-1 border-black mt-3">
          <div className="row">
            <div className="col-lg-4 border-end border-black d-flex justify-content-center">
              <h6>TNW Opening Balance</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="B7_34"
                    value={sumB7_34}
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
                    className="form-control border-none"
                    aria-label="First name"
                    name="C7_34"
                    value={sumC7_34}
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
                    className="form-control border-none"
                    aria-label="First name"
                    name="D7_34"
                    value={sumD7_34}
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
                    className="form-control border-none"
                    aria-label="First name"
                    name="E7_34"
                    value={sumE7_34}
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
                    className="form-control border-none"
                    aria-label="First name"
                    name="F7_34"
                    value={sumF7_34}
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
                    className="form-control border-none"
                    aria-label="First name"
                    name="G7_34"
                    value={sumG7_34}
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
                    className="form-control border-none"
                    aria-label="First name"
                    name="H7_34"
                    value={sumH7_34}
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
                    className="form-control border-none"
                    aria-label="First name"
                    name="I7_34"
                    value={sumI7_34}
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
              <h6>ADD Profit / Loss After Tax</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="B7_35"
                    value={sumB7_35}
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
                    className="form-control border-none"
                    aria-label="First name"
                    name="C7_35"
                    value={sumC7_35}
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
                    className="form-control border-none"
                    aria-label="First name"
                    name="D7_35"
                    value={sumD7_35}
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
                    className="form-control border-none"
                    aria-label="First name"
                    name="E7_35"
                    value={sumE7_35}
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
                    className="form-control border-none"
                    aria-label="First name"
                    name="F7_35"
                    value={sumF7_35}
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
                    className="form-control border-none"
                    aria-label="First name"
                    name="G7_35"
                    value={sumG7_35}
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
                    className="form-control border-none"
                    aria-label="First name"
                    name="H7_35"
                    value={sumH7_35}
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
                    className="form-control border-none"
                    aria-label="First name"
                    name="I7_35"
                    value={sumI7_35}
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
              <h6>Increase in Capital</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="B7_36"
                    value={sumB7_36}
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
                    className="form-control border-none"
                    aria-label="First name"
                    name="C7_36"
                    value={sumC7_36}
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
                    className="form-control border-none"
                    aria-label="First name"
                    name="D7_36"
                    value={sumD7_36}
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
                    className="form-control border-none"
                    aria-label="First name"
                    name="E7_36"
                    value={sumE7_36}
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
                    className="form-control border-none"
                    aria-label="First name"
                    name="F7_36"
                    value={sumF7_36}
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
                    className="form-control border-none"
                    aria-label="First name"
                    name="G7_36"
                    value={sumG7_36}
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
                    className="form-control border-none"
                    aria-label="First name"
                    name="H7_36"
                    value={sumH7_36}
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
                    className="form-control border-none"
                    aria-label="First name"
                    name="I7_36"
                    value={sumI7_36}
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
              <h6>Less Drawings</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="B7_37"
                    value={sumB7_37}
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
                    className="form-control border-none"
                    aria-label="First name"
                    name="C7_37"
                    value={sumC7_37}
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
                    className="form-control border-none"
                    aria-label="First name"
                    name="D7_37"
                    value={sumD7_37}
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
                    className="form-control border-none"
                    aria-label="First name"
                    name="E7_37"
                    value={sumE7_37}
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
                    className="form-control border-none"
                    aria-label="First name"
                    name="F7_37"
                    value={sumF7_37}
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
                    className="form-control border-none"
                    aria-label="First name"
                    name="G7_37"
                    value={sumG7_37}
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
                    className="form-control border-none"
                    aria-label="First name"
                    name="H7_37"
                    value={sumH7_37}
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
                    className="form-control border-none"
                    aria-label="First name"
                    name="I7_37"
                    value={sumI7_37}
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
              <h6>Closing Balance</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="B7_38"
                    value={sumB7_38}
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
                    className="form-control border-none"
                    aria-label="First name"
                    name="C7_38"
                    value={sumC7_38}
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
                    className="form-control border-none"
                    aria-label="First name"
                    name="D7_38"
                    value={sumD7_38}
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
                    className="form-control border-none"
                    aria-label="First name"
                    name="E7_38"
                    value={sumE7_38}
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
                    className="form-control border-none"
                    aria-label="First name"
                    name="F7_38"
                    value={sumF7_38}
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
                    className="form-control border-none"
                    aria-label="First name"
                    name="G7_38"
                    value={sumG7_38}
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
                    className="form-control border-none"
                    aria-label="First name"
                    name="H7_38"
                    value={sumH7_38}
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
                    className="form-control border-none"
                    aria-label="First name"
                    name="I7_38"
                    value={sumI7_38}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid border-1 border-black mt-3">
          <div
            className="row"
            style={{ backgroundColor: "rgb(224, 231, 231)" }}
          >
            <div className="col-lg-4 border-end border-black d-flex justify-content-center">
              <h5>III INVENTORY HOLDINGS</h5>
            </div>
          </div>
        </div>

        <div className="container-fluid border-1 border-black mt-3">
          <div className="row">
            <div className="col-lg-4 border-end border-black d-flex justify-content-center">
              <h6>FINISHED GOODS</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="B7_41"
                    value={sumB7_41}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="C7_41"
                    value={sumC7_41}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="D7_41"
                    value={sumD7_41}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="E7_41"
                    value={sumE7_41}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="F7_41"
                    value={sumF7_41}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="G7_41"
                    value={sumG7_41}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="H7_41"
                    value={sumH7_41}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="I7_41"
                    value={sumI7_41}
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
              <h6>(Month's Cost of Sales)</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="B7_42"
                    value={sumB7_42}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="C7_42"
                    value={sumC7_42}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="D7_42"
                    value={sumD7_42}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="E7_42"
                    value={sumE7_42}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="F7_42"
                    value={sumF7_42}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="G7_42"
                    value={sumG7_42}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="H7_42"
                    value={sumH7_42}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="I7_42"
                    value={sumI7_42}
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
              <h6>RECIVABLES</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="B7_43"
                    value={sumB7_43}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="C7_43"
                    value={sumC7_43}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="D7_43"
                    value={sumD7_43}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="E7_43"
                    value={sumE7_43}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="F7_43"
                    value={sumF7_43}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="G7_43"
                    value={sumG7_43}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="H7_43"
                    value={sumH7_43}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="I7_43"
                    value={sumI7_43}
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
                    className="form-control border-none"
                    aria-label="First name"
                    name="B7_44"
                    value={sumB7_44}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="C7_44"
                    value={sumC7_44}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="D7_44"
                    value={sumD7_44}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="E7_44"
                    value={sumE7_44}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="F7_44"
                    value={sumF7_44}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="G7_44"
                    value={sumG7_44}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="H7_44"
                    value={sumH7_44}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="I7_44"
                    value={sumI7_44}
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
              <h6>TRADE CREDITORS</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="B7_45"
                    value={sumB7_45}
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
                    className="form-control border-none"
                    aria-label="First name"
                    name="C7_45"
                    value={sumC7_45}
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
                    className="form-control border-none"
                    aria-label="First name"
                    name="D7_45"
                    value={sumD7_45}
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
                    className="form-control border-none"
                    aria-label="First name"
                    name="E7_45"
                    value={sumE7_45}
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
                    className="form-control border-none"
                    aria-label="First name"
                    name="F7_45"
                    value={sumF7_45}
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
                    className="form-control border-none"
                    aria-label="First name"
                    name="G7_45"
                    value={sumG7_45}
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
                    className="form-control border-none"
                    aria-label="First name"
                    name="H7_45"
                    value={sumH7_45}
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
                    className="form-control border-none"
                    aria-label="First name"
                    name="I7_45"
                    value={sumI7_45}
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
              <h6>(Month's purchases)</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="B7_46"
                    value={sumB7_46}
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
                    className="form-control border-none"
                    aria-label="First name"
                    name="C7_46"
                    value={sumC7_46}
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
                    className="form-control border-none"
                    aria-label="First name"
                    name="D7_46"
                    value={sumD7_46}
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
                    className="form-control border-none"
                    aria-label="First name"
                    name="E7_46"
                    value={sumE7_46}
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
                    className="form-control border-none"
                    aria-label="First name"
                    name="F7_46"
                    value={sumF7_46}
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
                    className="form-control border-none"
                    aria-label="First name"
                    name="G7_46"
                    value={sumG7_46}
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
                    className="form-control border-none"
                    aria-label="First name"
                    name="H7_46"
                    value={sumH7_46}
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
                    className="form-control border-none"
                    aria-label="First name"
                    name="I7_46"
                    value={sumI7_46}
                    onChange={changeData}
                  />
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
              <h5>IV NAYAK COMMITTEE</h5>
            </div>
          </div>
        </div>
        <div className="container-fluid border-1 border-black mt-3">
          <div className="row">
            <div className="col-lg-4 border-end border-black d-flex justify-content-center">
              <h6>Net Sales</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="B7_49"
                    value={sumB7_49}
                    onChange={changeData}
                  />

                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="C7_49"
                    value={sumC7_49}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="D7_49"
                    value={sumD7_49}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="E7_49"
                    value={sumE7_49}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="F7_49"
                    value={sumF7_49}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="G7_49"
                    value={sumG7_49}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="H7_49"
                    value={sumH7_49}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="I7_49"
                    value={sumI7_49}
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
              <h6>25% of Net Sales</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="B7_50"
                    value={sumB7_50}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="C7_50"
                    value={sumC7_50}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="D7_50"
                    value={sumD7_50}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="E7_50"
                    value={sumE7_50}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="F7_50"
                    value={sumF7_50}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="G7_50"
                    value={sumG7_50}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="H7_50"
                    value={sumH7_50}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="I7_50"
                    value={sumI7_50}
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
              <h5>Less 5% Margin</h5>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="B7_51"
                    value={sumB7_51}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="C7_51"
                    value={sumC7_51}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="D7_51"
                    value={sumD7_51}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="E7_51"
                    value={sumE7_51}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="F7_51"
                    value={sumF7_51}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="G7_51"
                    value={sumG7_51}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="H7_51"
                    value={sumH7_51}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="I7_51"
                    value={sumI7_51}
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
              <h5>ELIGIBLE BANK BORROWINGS</h5>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="B7_52"
                    value={sumB7_52}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="C7_52"
                    value={sumC7_52}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="D7_52"
                    value={sumD7_52}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="E7_52"
                    value={sumE7_52}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="F7_52"
                    value={sumF7_52}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="G7_52"
                    value={sumG7_52}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="H7_52"
                    value={sumH7_52}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="I7_52"
                    value={sumI7_52}
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
              <h6>Estimated NWC (WC Margin)</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="B7_53"
                    value={sumB7_53}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="C7_53"
                    value={sumC7_53}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="D7_53"
                    value={sumD7_53}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="E7_53"
                    value={sumE7_53}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="F7_53"
                    value={sumF7_53}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="G7_53"
                    value={sumG7_53}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="H7_53"
                    value={sumH7_53}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="I7_53"
                    value={sumI7_53}
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
              <h6>NWC SHORTFALL</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="B7_54"
                    value={sumB7_54}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="C7_54"
                    value={sumC7_54}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="D7_54"
                    value={sumD7_54}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="E7_54"
                    value={sumE7_54}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="F7_54"
                    value={sumF7_54}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="G7_54"
                    value={sumG7_54}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="H7_54"
                    value={sumH7_54}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="I7_54"
                    value={sumI7_54}
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
              <h5>V STRUCTURING OF LIMITS</h5>
            </div>
          </div>
        </div>
        <div className="container-fluid border-1 border-black mt-3">
          <div className="row">
            <div className="col-lg-4 border-end border-black d-flex justify-content-center">
              <h6>Stock Value</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="B7_57"
                    value={sumB7_57}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="C7_57"
                    value={sumC7_57}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="D7_57"
                    value={sumD7_57}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="E7_57"
                    value={sumE7_57}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="F7_57"
                    value={sumF7_57}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="G7_57"
                    value={sumG7_57}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="H7_57"
                    value={sumH7_57}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="I7_57"
                    value={sumI7_57}
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
              <h6>Sundry Creditors</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="B7_58"
                    value={sumB7_58}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="C7_58"
                    value={sumC7_58}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="D7_58"
                    value={sumD7_58}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="E7_58"
                    value={sumE7_58}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="F7_58"
                    value={sumF7_58}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="G7_58"
                    value={sumG7_58}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="H7_58"
                    value={sumH7_58}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="I7_58"
                    value={sumI7_58}
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
              <h6>Paid Stock</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="B7_59"
                    value={sumB7_59}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="C7_59"
                    value={sumC7_59}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="D7_59"
                    value={sumD7_59}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="E7_59"
                    value={sumE7_59}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="F7_59"
                    value={sumF7_59}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="G7_59"
                    value={sumG7_59}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="H7_59"
                    value={sumH7_59}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="I7_59"
                    value={sumI7_59}
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
              <h6>Margin 25%</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="B7_60"
                    value={sumB7_60}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="C7_60"
                    value={sumC7_60}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="D7_60"
                    value={sumD7_60}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="E7_60"
                    value={sumE7_60}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="F7_60"
                    value={sumF7_60}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="G7_60"
                    value={sumG7_60}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="H7_60"
                    value={sumH7_60}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="I7_60"
                    value={sumI7_60}
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
              <h6>Drawing Power</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="B7_61"
                    value={sumB7_61}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="C7_61"
                    value={sumC7_61}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="D7_61"
                    value={sumD7_61}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="E7_61"
                    value={sumE7_61}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="F7_61"
                    value={sumF7_61}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="G7_61"
                    value={sumG7_61}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="H7_61"
                    value={sumH7_61}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="I7_61"
                    value={sumI7_61}
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
              <h6>Book Debits</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="B7_62"
                    value={sumB7_62}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="C7_62"
                    value={sumC7_62}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="D7_62"
                    value={sumD7_62}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="E7_62"
                    value={sumE7_62}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="F7_62"
                    value={sumF7_62}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="G7_62"
                    value={sumG7_62}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="H7_62"
                    value={sumH7_62}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="I7_62"
                    value={sumI7_62}
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
              <h6>Margin 50%</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="B7_63"
                    value={sumB7_63}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="C7_63"
                    value={sumC7_63}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="D7_63"
                    value={sumD7_63}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="E7_63"
                    value={sumE7_63}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="F7_63"
                    value={sumF7_63}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="G7_63"
                    value={sumG7_63}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="H7_63"
                    value={sumH7_63}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="I7_63"
                    value={sumI7_63}
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
              <h6>Drawing Power</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="B7_64"
                    value={sumB7_64}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="C7_64"
                    value={sumC7_64}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="D7_64"
                    value={sumD7_64}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="E7_64"
                    value={sumE7_64}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="F7_64"
                    value={sumF7_64}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="G7_64"
                    value={sumG7_64}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="H7_64"
                    value={sumH7_64}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="I7_64"
                    value={sumI7_64}
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
              <h6>Total Eligible Limit</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="B7_65"
                    value={sumB7_65}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="C7_65"
                    value={sumC7_65}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="D7_65"
                    value={sumD7_65}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="E7_65"
                    value={sumE7_65}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="F7_65"
                    value={sumF7_65}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="G7_65"
                    value={sumG7_65}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="H7_65"
                    value={sumH7_65}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="I7_65"
                    value={sumI7_65}
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
              <h6>Bank Outstanding</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="B7_66"
                    value={sumB7_66}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="C7_66"
                    value={sumC7_66}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="D7_66"
                    value={sumD7_66}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="E7_66"
                    value={sumE7_66}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="F7_66"
                    value={sumF7_66}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="G7_66"
                    value={sumG7_66}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="H7_66"
                    value={sumH7_66}
                    onChange={changeData}
                  />
                  {/* <!--//AAAAAAAA --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-none"
                    aria-label="First name"
                    name="I7_66"
                    value={sumI7_66}
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

export default Opstmt;
