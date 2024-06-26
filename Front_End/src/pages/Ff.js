// Opstmt.js
import React, { useContext,useEffect, useState } from 'react';
import '../styles.css'
import Footer from "../views/Footer/footer";
import jwtDecode from 'jwt-decode'


import axios from 'axios'
import { AppContext } from '../AppContext';
import Navbarr from '../views/navbarr/Navbarr';

function Opstmt() {

  const token = localStorage.getItem("authTokens")

  if (token){
    const decode = jwtDecode(token)
    var username = decode.username
    

  }
  const { inputValues, setInputValues,tot2020,Cost37, setCost37,Cost31, setCost31,tot37,
    Cost27, setCost27,
    Cost26, setCost26,
    sumB50, setSumB50,
    sumC50, setSumC50,
    sumD50, setSumD50,
    sumE50, setSumE50,
    sumF50, setSumF50,
    sumG50, setSumG50,
    sumH50, setSumH50,
    sumI50, setSumI50,
    sumB30, setSumB30,
    sumC30, setSumC30,
    sumD30, setSumD30,
    sumE30, setSumE30,
    sumF30, setSumF30,
    sumG30, setSumG30,
    sumH30, setSumH30,
    sumI30, setSumI30,

    tot15,

    sumB7_66, setSumB7_66,
    sumC7_66, setSumC7_66,
    sumD7_66, setSumD7_66,
    sumE7_66, setSumE7_66,
    sumF7_66, setSumF7_66,
    sumG7_66, setSumG7_66,
    sumH7_66, setSumH7_66,
    sumI7_66, setSumI7_66,

    sumB43, setSumB43,
    sumC43, setSumC43,
    sumD43, setSumD43,
    sumE43, setSumE43,
    sumF43, setSumF43,
    sumG43, setSumG43,
    sumH43, setSumH43,
    sumI43, setSumI43,

    sumB2, setSumB2,
    sumC2, setSumC2,
    sumD2, setSumD2,
    sumE2, setSumE2,
    sumF2, setSumF2,
    sumG2, setSumG2,
    sumH2, setSumH2,
    sumI2, setSumI2,
    sumB38, setSumB38,
    sumC38, setSumC38,
    sumD38, setSumD38,
    sumE38, setSumE38,
    sumF38, setSumF38,
    sumG38, setSumG38,
    sumH38, setSumH38,
    sumI38, setSumI38,
    sumB44, setSumB44,
    sumC44, setSumC44,
    sumD44, setSumD44,
    sumE44, setSumE44,
    sumF44, setSumF44,
    sumG44, setSumG44,
    sumH44, setSumH44,
    sumI44, setSumI44,
    sumB45, setSumB45,
    sumC45, setSumC45,
    sumD45, setSumD45,
    sumE45, setSumE45,
    sumF45, setSumF45,
    sumG45, setSumG45,
    sumH45, setSumH45,
    sumI45, setSumI45,
    sumB37, setSumB37,
    sumC37, setSumC37,
    sumD37, setSumD37,
    sumE37, setSumE37,
    sumF37, setSumF37,
    sumG37, setSumG37,
    sumH37, setSumH37,
    sumI37, setSumI37,
    sumB4_25, setSumB4_25,
    sumC4_25, setSumC4_25,
    sumD4_25, setSumD4_25,
    sumE4_25, setSumE4_25,
    sumF4_25, setSumF4_25,
    sumG4_25, setSumG4_25,
    sumH4_25, setSumH4_25,
    sumI4_25, setSumI4_25,
    sumC4_26,
    sumD4_26,
    sumE4_26,
    sumF4_26,
    sumG4_26,
    sumH4_26,
    sumI4_26,

    sumB5_14, setSumB5_14,
    sumC5_14, setSumC5_14,
    sumD5_14, setSumD5_14,
    sumE5_14, setSumE5_14,
    sumF5_14, setSumF5_14,
    sumG5_14, setSumG5_14,
    sumH5_14, setSumH5_14,
    sumI5_14, setSumI5_14,

    sumB19, setSumB19,
    sumC19, setSumC19,
    sumD19, setSumD19,
    sumE19, setSumE19,
    sumF19, setSumF19,
    sumG19, setSumG19,
    sumH19, setSumH19,
    sumI19, setSumI19,

    sumB25, setSumB25,
    sumC25, setSumC25,
    sumD25, setSumD25,
    sumE25, setSumE25,
    sumF25, setSumF25,
    sumG25, setSumG25,
    sumH25, setSumH25,
    sumI25, setSumI25,

   } = useContext(AppContext);

   const [sumC6_5, setSumC6_5] = useState(0);
   const [sumD6_5, setSumD6_5] = useState(0);
   const [sumE6_5, setSumE6_5] = useState(0);
   const [sumF6_5, setSumF6_5] = useState(0);
   const [sumG6_5, setSumG6_5] = useState(0);
   const [sumH6_5, setSumH6_5] = useState(0);
   const [sumI6_5, setSumI6_5] = useState(0);

  const [sumC6_6, setSumC6_6] = useState(0);
  const [sumD6_6, setSumD6_6] = useState(0);
  const [sumE6_6, setSumE6_6] = useState(0);
  const [sumF6_6, setSumF6_6] = useState(0);
  const [sumG6_6, setSumG6_6] = useState(0);
  const [sumH6_6, setSumH6_6] = useState(0);
  const [sumI6_6, setSumI6_6] = useState(0);

  const [sumB6_7, setSumB6_7] = useState(0);
  const [sumC6_7, setSumC6_7] = useState(0);
  const [sumD6_7, setSumD6_7] = useState(0);
  const [sumE6_7, setSumE6_7] = useState(0);
  const [sumF6_7, setSumF6_7] = useState(0);
  const [sumG6_7, setSumG6_7] = useState(0);
  const [sumH6_7, setSumH6_7] = useState(0);
  const [sumI6_7, setSumI6_7] = useState(0);

  const [sumB6_8, setSumB6_8] = useState(0);
  const [sumC6_8, setSumC6_8] = useState(0);
  const [sumD6_8, setSumD6_8] = useState(0);
  const [sumE6_8, setSumE6_8] = useState(0);
  const [sumF6_8, setSumF6_8] = useState(0);
  const [sumG6_8, setSumG6_8] = useState(0);
  const [sumH6_8, setSumH6_8] = useState(0);
  const [sumI6_8, setSumI6_8] = useState(0);

  const [sumB6_9, setSumB6_9] = useState(0);
  const [sumC6_9, setSumC6_9] = useState(0);
  const [sumD6_9, setSumD6_9] = useState(0);
  const [sumE6_9, setSumE6_9] = useState(0);
  const [sumF6_9, setSumF6_9] = useState(0);
  const [sumG6_9, setSumG6_9] = useState(0);
  const [sumH6_9, setSumH6_9] = useState(0);
  const [sumI6_9, setSumI6_9] = useState(0);

  const [sumB6_10, setSumB6_10] = useState(0);
  const [sumC6_10, setSumC6_10] = useState(0);
  const [sumD6_10, setSumD6_10] = useState(0);
  const [sumE6_10, setSumE6_10] = useState(0);
  const [sumF6_10, setSumF6_10] = useState(0);
  const [sumG6_10, setSumG6_10] = useState(0);
  const [sumH6_10, setSumH6_10] = useState(0);
  const [sumI6_10, setSumI6_10] = useState(0);

  const [sumB6_11, setSumB6_11] = useState(0);
  const [sumC6_11, setSumC6_11] = useState(0);
  const [sumD6_11, setSumD6_11] = useState(0);
  const [sumE6_11, setSumE6_11] = useState(0);
  const [sumF6_11, setSumF6_11] = useState(0);
  const [sumG6_11, setSumG6_11] = useState(0);
  const [sumH6_11, setSumH6_11] = useState(0);
  const [sumI6_11, setSumI6_11] = useState(0);

  const [sumB6_12, setSumB6_12] = useState(0);
  const [sumC6_12, setSumC6_12] = useState(0);
  const [sumD6_12, setSumD6_12] = useState(0);
  const [sumE6_12, setSumE6_12] = useState(0);
  const [sumF6_12, setSumF6_12] = useState(0);
  const [sumG6_12, setSumG6_12] = useState(0);
  const [sumH6_12, setSumH6_12] = useState(0);
  const [sumI6_12, setSumI6_12] = useState(0);

  const [sumB6_13, setSumB6_13] = useState(0);
  const [sumC6_13, setSumC6_13] = useState(0);
  const [sumD6_13, setSumD6_13] = useState(0);
  const [sumE6_13, setSumE6_13] = useState(0);
  const [sumF6_13, setSumF6_13] = useState(0);
  const [sumG6_13, setSumG6_13] = useState(0);
  const [sumH6_13, setSumH6_13] = useState(0);
  const [sumI6_13, setSumI6_13] = useState(0);

  const [sumB6_15, setSumB6_15] = useState(0);
  const [sumC6_15, setSumC6_15] = useState(0);
  const [sumD6_15, setSumD6_15] = useState(0);
  const [sumE6_15, setSumE6_15] = useState(0);
  const [sumF6_15, setSumF6_15] = useState(0);
  const [sumG6_15, setSumG6_15] = useState(0);
  const [sumH6_15, setSumH6_15] = useState(0);
  const [sumI6_15, setSumI6_15] = useState(0);

  const [sumB6_16, setSumB6_16] = useState(0);
  const [sumC6_16, setSumC6_16] = useState(0);
  const [sumD6_16, setSumD6_16] = useState(0);
  const [sumE6_16, setSumE6_16] = useState(0);
  const [sumF6_16, setSumF6_16] = useState(0);
  const [sumG6_16, setSumG6_16] = useState(0);
  const [sumH6_16, setSumH6_16] = useState(0);
  const [sumI6_16, setSumI6_16] = useState(0);

  const [sumB6_17, setSumB6_17] = useState(0);
  const [sumC6_17, setSumC6_17] = useState(0);
  const [sumD6_17, setSumD6_17] = useState(0);
  const [sumE6_17, setSumE6_17] = useState(0);
  const [sumF6_17, setSumF6_17] = useState(0);
  const [sumG6_17, setSumG6_17] = useState(0);
  const [sumH6_17, setSumH6_17] = useState(0);
  const [sumI6_17, setSumI6_17] = useState(0);

  const [sumB6_18, setSumB6_18] = useState(0);
  const [sumC6_18, setSumC6_18] = useState(0);
  const [sumD6_18, setSumD6_18] = useState(0);
  const [sumE6_18, setSumE6_18] = useState(0);
  const [sumF6_18, setSumF6_18] = useState(0);
  const [sumG6_18, setSumG6_18] = useState(0);
  const [sumH6_18, setSumH6_18] = useState(0);
  const [sumI6_18, setSumI6_18] = useState(0);

  const [sumB6_19, setSumB6_19] = useState(0);
  const [sumC6_19, setSumC6_19] = useState(0);
  const [sumD6_19, setSumD6_19] = useState(0);
  const [sumE6_19, setSumE6_19] = useState(0);
  const [sumF6_19, setSumF6_19] = useState(0);
  const [sumG6_19, setSumG6_19] = useState(0);
  const [sumH6_19, setSumH6_19] = useState(0);
  const [sumI6_19, setSumI6_19] = useState(0);

  const [sumB6_20, setSumB6_20] = useState(0);
  const [sumC6_20, setSumC6_20] = useState(0);
  const [sumD6_20, setSumD6_20] = useState(0);
  const [sumE6_20, setSumE6_20] = useState(0);
  const [sumF6_20, setSumF6_20] = useState(0);
  const [sumG6_20, setSumG6_20] = useState(0);
  const [sumH6_20, setSumH6_20] = useState(0);
  const [sumI6_20, setSumI6_20] = useState(0);

  const [sumB6_21, setSumB6_21] = useState(0);
  const [sumC6_21, setSumC6_21] = useState(0);
  const [sumD6_21, setSumD6_21] = useState(0);
  const [sumE6_21, setSumE6_21] = useState(0);
  const [sumF6_21, setSumF6_21] = useState(0);
  const [sumG6_21, setSumG6_21] = useState(0);
  const [sumH6_21, setSumH6_21] = useState(0);
  const [sumI6_21, setSumI6_21] = useState(0);

  const [sumC6_22, setSumC6_22] = useState(0);
  const [sumD6_22, setSumD6_22] = useState(0);
  const [sumE6_22, setSumE6_22] = useState(0);
  const [sumF6_22, setSumF6_22] = useState(0);
  const [sumG6_22, setSumG6_22] = useState(0);
  const [sumH6_22, setSumH6_22] = useState(0);
  const [sumI6_22, setSumI6_22] = useState(0);

  const [sumB6_23, setSumB6_23] = useState(0);
  const [sumC6_23, setSumC6_23] = useState(0);
  const [sumD6_23, setSumD6_23] = useState(0);
  const [sumE6_23, setSumE6_23] = useState(0);
  const [sumF6_23, setSumF6_23] = useState(0);
  const [sumG6_23, setSumG6_23] = useState(0);
  const [sumH6_23, setSumH6_23] = useState(0);
  const [sumI6_23, setSumI6_23] = useState(0); 

  const [sumB6_24, setSumB6_24] = useState(0);
  const [sumC6_24, setSumC6_24] = useState(0);
  const [sumD6_24, setSumD6_24] = useState(0);
  const [sumE6_24, setSumE6_24] = useState(0);
  const [sumF6_24, setSumF6_24] = useState(0);
  const [sumG6_24, setSumG6_24] = useState(0);
  const [sumH6_24, setSumH6_24] = useState(0);
  const [sumI6_24, setSumI6_24] = useState(0);

  const [sumB6_25, setSumB6_25] = useState(0);
  const [sumC6_25, setSumC6_25] = useState(0);
  const [sumD6_25, setSumD6_25] = useState(0);
  const [sumE6_25, setSumE6_25] = useState(0);
  const [sumF6_25, setSumF6_25] = useState(0);
  const [sumG6_25, setSumG6_25] = useState(0);
  const [sumH6_25, setSumH6_25] = useState(0);
  const [sumI6_25, setSumI6_25] = useState(0);

  const [sumC6_26, setSumC6_26] = useState(0);
  const [sumD6_26, setSumD6_26] = useState(0);
  const [sumE6_26, setSumE6_26] = useState(0);
  const [sumF6_26, setSumF6_26] = useState(0);
  const [sumG6_26, setSumG6_26] = useState(0);
  const [sumH6_26, setSumH6_26] = useState(0);
  const [sumI6_26, setSumI6_26] = useState(0);

  const [sumB6_27, setSumB6_27] = useState(0);
  const [sumC6_27, setSumC6_27] = useState(0);
  const [sumD6_27, setSumD6_27] = useState(0);
  const [sumE6_27, setSumE6_27] = useState(0);
  const [sumF6_27, setSumF6_27] = useState(0);
  const [sumG6_27, setSumG6_27] = useState(0);
  const [sumH6_27, setSumH6_27] = useState(0);
  const [sumI6_27, setSumI6_27] = useState(0);

  const [sumB6_28, setSumB6_28] = useState(0);
  const [sumC6_28, setSumC6_28] = useState(0);
  const [sumD6_28, setSumD6_28] = useState(0);
  const [sumE6_28, setSumE6_28] = useState(0);
  const [sumF6_28, setSumF6_28] = useState(0);
  const [sumG6_28, setSumG6_28] = useState(0);
  const [sumH6_28, setSumH6_28] = useState(0);
  const [sumI6_28, setSumI6_28] = useState(0);

  const [sumB6_31, setSumB6_31] = useState(0);
  const [sumC6_31, setSumC6_31] = useState(0);
  const [sumD6_31, setSumD6_31] = useState(0);
  const [sumE6_31, setSumE6_31] = useState(0);
  const [sumF6_31, setSumF6_31] = useState(0);
  const [sumG6_31, setSumG6_31] = useState(0);
  const [sumH6_31, setSumH6_31] = useState(0);
  const [sumI6_31, setSumI6_31] = useState(0);

  const [sumB6_32, setSumB6_32] = useState(0);
  const [sumC6_32, setSumC6_32] = useState(0);
  const [sumD6_32, setSumD6_32] = useState(0);
  const [sumE6_32, setSumE6_32] = useState(0);
  const [sumF6_32, setSumF6_32] = useState(0);
  const [sumG6_32, setSumG6_32] = useState(0);
  const [sumH6_32, setSumH6_32] = useState(0);
  const [sumI6_32, setSumI6_32] = useState(0);

  const [sumB6_33, setSumB6_33] = useState(0);
  const [sumC6_33, setSumC6_33] = useState(0);
  const [sumD6_33, setSumD6_33] = useState(0);
  const [sumE6_33, setSumE6_33] = useState(0);
  const [sumF6_33, setSumF6_33] = useState(0);
  const [sumG6_33, setSumG6_33] = useState(0);
  const [sumH6_33, setSumH6_33] = useState(0);
  const [sumI6_33, setSumI6_33] = useState(0);

  const [sumB6_34, setSumB6_34] = useState(0);
  const [sumC6_34, setSumC6_34] = useState(0);
  const [sumD6_34, setSumD6_34] = useState(0);
  const [sumE6_34, setSumE6_34] = useState(0);
  const [sumF6_34, setSumF6_34] = useState(0);
  const [sumG6_34, setSumG6_34] = useState(0);
  const [sumH6_34, setSumH6_34] = useState(0);
  const [sumI6_34, setSumI6_34] = useState(0);

  const [sumB6_37, setSumB6_37] = useState(0);
  const [sumC6_37, setSumC6_37] = useState(0);
  const [sumD6_37, setSumD6_37] = useState(0);
  const [sumE6_37, setSumE6_37] = useState(0);
  const [sumF6_37, setSumF6_37] = useState(0);
  const [sumG6_37, setSumG6_37] = useState(0);
  const [sumH6_37, setSumH6_37] = useState(0);
  const [sumI6_37, setSumI6_37] = useState(0);

  const [sumB6_38, setSumB6_38] = useState(0);
  const [sumC6_38, setSumC6_38] = useState(0);
  const [sumD6_38, setSumD6_38] = useState(0);
  const [sumE6_38, setSumE6_38] = useState(0);
  const [sumF6_38, setSumF6_38] = useState(0);
  const [sumG6_38, setSumG6_38] = useState(0);
  const [sumH6_38, setSumH6_38] = useState(0);
  const [sumI6_38, setSumI6_38] = useState(0);

  const [sumB6_39, setSumB6_39] = useState(0);
  const [sumC6_39, setSumC6_39] = useState(0);
  const [sumD6_39, setSumD6_39] = useState(0);
  const [sumE6_39, setSumE6_39] = useState(0);
  const [sumF6_39, setSumF6_39] = useState(0);
  const [sumG6_39, setSumG6_39] = useState(0);
  const [sumH6_39, setSumH6_39] = useState(0);
  const [sumI6_39, setSumI6_39] = useState(0);

  const [sumB6_40, setSumB6_40] = useState(0);
  const [sumC6_40, setSumC6_40] = useState(0);
  const [sumD6_40, setSumD6_40] = useState(0);
  const [sumE6_40, setSumE6_40] = useState(0);
  const [sumF6_40, setSumF6_40] = useState(0);
  const [sumG6_40, setSumG6_40] = useState(0);
  const [sumH6_40, setSumH6_40] = useState(0);
  const [sumI6_40, setSumI6_40] = useState(0);

  const [sumB6_41, setSumB6_41] = useState(0);
  const [sumC6_41, setSumC6_41] = useState(0);
  const [sumD6_41, setSumD6_41] = useState(0);
  const [sumE6_41, setSumE6_41] = useState(0);
  const [sumF6_41, setSumF6_41] = useState(0);
  const [sumG6_41, setSumG6_41] = useState(0);
  const [sumH6_41, setSumH6_41] = useState(0);
  const [sumI6_41, setSumI6_41] = useState(0);

  const [sumB6_42, setSumB6_42] = useState(0);
  const [sumC6_42, setSumC6_42] = useState(0);
  const [sumD6_42, setSumD6_42] = useState(0);
  const [sumE6_42, setSumE6_42] = useState(0);
  const [sumF6_42, setSumF6_42] = useState(0);
  const [sumG6_42, setSumG6_42] = useState(0);
  const [sumH6_42, setSumH6_42] = useState(0);
  const [sumI6_42, setSumI6_42] = useState(0);

  const [sumB6_43, setSumB6_43] = useState(0);
  const [sumC6_43, setSumC6_43] = useState(0);
  const [sumD6_43, setSumD6_43] = useState(0);
  const [sumE6_43, setSumE6_43] = useState(0);
  const [sumF6_43, setSumF6_43] = useState(0);
  const [sumG6_43, setSumG6_43] = useState(0);
  const [sumH6_43, setSumH6_43] = useState(0);
  const [sumI6_43, setSumI6_43] = useState(0);

  const [sumB6_45, setSumB6_45] = useState(0);
  const [sumC6_45, setSumC6_45] = useState(0);
  const [sumD6_45, setSumD6_45] = useState(0);
  const [sumE6_45, setSumE6_45] = useState(0);
  const [sumF6_45, setSumF6_45] = useState(0);
  const [sumG6_45, setSumG6_45] = useState(0);
  const [sumH6_45, setSumH6_45] = useState(0);
  const [sumI6_45, setSumI6_45] = useState(0);

  const [sumB6_46, setSumB6_46] = useState(0);
  const [sumC6_46, setSumC6_46] = useState(0);
  const [sumD6_46, setSumD6_46] = useState(0);
  const [sumE6_46, setSumE6_46] = useState(0);
  const [sumF6_46, setSumF6_46] = useState(0);
  const [sumG6_46, setSumG6_46] = useState(0);
  const [sumH6_46, setSumH6_46] = useState(0);
  const [sumI6_46, setSumI6_46] = useState(0);

  const [sumB6_47, setSumB6_47] = useState(0);
  const [sumC6_47, setSumC6_47] = useState(0);
  const [sumD6_47, setSumD6_47] = useState(0);
  const [sumE6_47, setSumE6_47] = useState(0);
  const [sumF6_47, setSumF6_47] = useState(0);
  const [sumG6_47, setSumG6_47] = useState(0);
  const [sumH6_47, setSumH6_47] = useState(0);
  const [sumI6_47, setSumI6_47] = useState(0);

  const [sumB6_48, setSumB6_48] = useState(0);
  const [sumC6_48, setSumC6_48] = useState(0);
  const [sumD6_48, setSumD6_48] = useState(0);
  const [sumE6_48, setSumE6_48] = useState(0);
  const [sumF6_48, setSumF6_48] = useState(0);
  const [sumG6_48, setSumG6_48] = useState(0);
  const [sumH6_48, setSumH6_48] = useState(0);
  const [sumI6_48, setSumI6_48] = useState(0);

  const [sumB6_49, setSumB6_49] = useState(0);
  const [sumC6_49, setSumC6_49] = useState(0);
  const [sumD6_49, setSumD6_49] = useState(0);
  const [sumE6_49, setSumE6_49] = useState(0);
  const [sumF6_49, setSumF6_49] = useState(0);
  const [sumG6_49, setSumG6_49] = useState(0);
  const [sumH6_49, setSumH6_49] = useState(0);
  const [sumI6_49, setSumI6_49] = useState(0);

  const [sumB6_50, setSumB6_50] = useState(0);
  const [sumC6_50, setSumC6_50] = useState(0);
  const [sumD6_50, setSumD6_50] = useState(0);
  const [sumE6_50, setSumE6_50] = useState(0);
  const [sumF6_50, setSumF6_50] = useState(0);
  const [sumG6_50, setSumG6_50] = useState(0);
  const [sumH6_50, setSumH6_50] = useState(0);
  const [sumI6_50, setSumI6_50] = useState(0);

  const [sumB6_51, setSumB6_51] = useState(0);
  const [sumC6_51, setSumC6_51] = useState(0);
  const [sumD6_51, setSumD6_51] = useState(0);
  const [sumE6_51, setSumE6_51] = useState(0);
  const [sumF6_51, setSumF6_51] = useState(0);
  const [sumG6_51, setSumG6_51] = useState(0);
  const [sumH6_51, setSumH6_51] = useState(0);
  const [sumI6_51, setSumI6_51] = useState(0);
  

  const [sumB6_53, setSumB6_53] = useState(0);
  const [sumC6_53, setSumC6_53] = useState(0);
  const [sumD6_53, setSumD6_53] = useState(0);
  const [sumE6_53, setSumE6_53] = useState(0);
  const [sumF6_53, setSumF6_53] = useState(0);
  const [sumG6_53, setSumG6_53] = useState(0);
  const [sumH6_53, setSumH6_53] = useState(0);
  const [sumI6_53, setSumI6_53] = useState(0);

  const [sumB6_54, setSumB6_54] = useState(0);
  const [sumC6_54, setSumC6_54] = useState(0);
  const [sumD6_54, setSumD6_54] = useState(0);
  const [sumE6_54, setSumE6_54] = useState(0);
  const [sumF6_54, setSumF6_54] = useState(0);
  const [sumG6_54, setSumG6_54] = useState(0);
  const [sumH6_54, setSumH6_54] = useState(0);
  const [sumI6_54, setSumI6_54] = useState(0);

  const [sumB6_55, setSumB6_55] = useState(0);
  const [sumC6_55, setSumC6_55] = useState(0);
  const [sumD6_55, setSumD6_55] = useState(0);
  const [sumE6_55, setSumE6_55] = useState(0);
  const [sumF6_55, setSumF6_55] = useState(0);
  const [sumG6_55, setSumG6_55] = useState(0);
  const [sumH6_55, setSumH6_55] = useState(0);
  const [sumI6_55, setSumI6_55] = useState(0);

  

  const [sumB6_57, setSumB6_57] = useState(0);
  const [sumC6_57, setSumC6_57] = useState(0);
  const [sumD6_57, setSumD6_57] = useState(0);
  const [sumE6_57, setSumE6_57] = useState(0);
  const [sumF6_57, setSumF6_57] = useState(0);
  const [sumG6_57, setSumG6_57] = useState(0);
  const [sumH6_57, setSumH6_57] = useState(0);
  const [sumI6_57, setSumI6_57] = useState(0);

  const [sumB6_58, setSumB6_58] = useState(0);
  const [sumC6_58, setSumC6_58] = useState(0);
  const [sumD6_58, setSumD6_58] = useState(0);
  const [sumE6_58, setSumE6_58] = useState(0);
  const [sumF6_58, setSumF6_58] = useState(0);
  const [sumG6_58, setSumG6_58] = useState(0);
  const [sumH6_58, setSumH6_58] = useState(0);
  const [sumI6_58, setSumI6_58] = useState(0);

  const [sumB6_59, setSumB6_59] = useState(0);
  const [sumC6_59, setSumC6_59] = useState(0);
  const [sumD6_59, setSumD6_59] = useState(0);
  const [sumE6_59, setSumE6_59] = useState(0);
  const [sumF6_59, setSumF6_59] = useState(0);
  const [sumG6_59, setSumG6_59] = useState(0);
  const [sumH6_59, setSumH6_59] = useState(0);
  const [sumI6_59, setSumI6_59] = useState(0);

  const [sumB6_61, setSumB6_61] = useState(0);
  const [sumC6_61, setSumC6_61] = useState(0);
  const [sumD6_61, setSumD6_61] = useState(0);
  const [sumE6_61, setSumE6_61] = useState(0);
  const [sumF6_61, setSumF6_61] = useState(0);
  const [sumG6_61, setSumG6_61] = useState(0);
  const [sumH6_61, setSumH6_61] = useState(0);
  const [sumI6_61, setSumI6_61] = useState(0);

  const [sumB6_62, setSumB6_62] = useState(0);
  const [sumC6_62, setSumC6_62] = useState(0);
  const [sumD6_62, setSumD6_62] = useState(0);
  const [sumE6_62, setSumE6_62] = useState(0);
  const [sumF6_62, setSumF6_62] = useState(0);
  const [sumG6_62, setSumG6_62] = useState(0);
  const [sumH6_62, setSumH6_62] = useState(0);
  const [sumI6_62, setSumI6_62] = useState(0);

  const [sumB6_63, setSumB6_63] = useState(0);
  const [sumC6_63, setSumC6_63] = useState(0);
  const [sumD6_63, setSumD6_63] = useState(0);
  const [sumE6_63, setSumE6_63] = useState(0);
  const [sumF6_63, setSumF6_63] = useState(0);
  const [sumG6_63, setSumG6_63] = useState(0);
  const [sumH6_63, setSumH6_63] = useState(0);
  const [sumI6_63, setSumI6_63] = useState(0);

  const [sumB6_65, setSumB6_65] = useState(0);
  const [sumC6_65, setSumC6_65] = useState(0);
  const [sumD6_65, setSumD6_65] = useState(0);
  const [sumE6_65, setSumE6_65] = useState(0);
  const [sumF6_65, setSumF6_65] = useState(0);
  const [sumG6_65, setSumG6_65] = useState(0);
  const [sumH6_65, setSumH6_65] = useState(0);
  const [sumI6_65, setSumI6_65] = useState(0);


  const [sumB6_67, setSumB6_67] = useState(0);
  const [sumC6_67, setSumC6_67] = useState(0);
  const [sumD6_67, setSumD6_67] = useState(0);
  const [sumE6_67, setSumE6_67] = useState(0);
  const [sumF6_67, setSumF6_67] = useState(0);
  const [sumG6_67, setSumG6_67] = useState(0);
  const [sumH6_67, setSumH6_67] = useState(0);
  const [sumI6_67, setSumI6_67] = useState(0);


  const [sumC6_68, setSumC6_68] = useState(0);
  const [sumD6_68, setSumD6_68] = useState(0);
  const [sumE6_68, setSumE6_68] = useState(0);
  const [sumF6_68, setSumF6_68] = useState(0);
  const [sumG6_68, setSumG6_68] = useState(0);
  const [sumH6_68, setSumH6_68] = useState(0);
  const [sumI6_68, setSumI6_68] = useState(0);

  const [sumB6_69, setSumB6_69] = useState(0);
  const [sumC6_69, setSumC6_69] = useState(0);
  const [sumD6_69, setSumD6_69] = useState(0);
  const [sumE6_69, setSumE6_69] = useState(0);
  const [sumF6_69, setSumF6_69] = useState(0);
  const [sumG6_69, setSumG6_69] = useState(0);
  const [sumH6_69, setSumH6_69] = useState(0);
  const [sumI6_69, setSumI6_69] = useState(0);









  

  //------------------------------------------------ MAIN FUNCION2 ---------------------------------------------


  const uploadData = async (cell_id, cell_value) => {
    try {
      const user_id = localStorage.getItem("user_id");
      const res = await fetch("http://127.0.0.1:8000/api/save_ff/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ cell_id, cell_value, user_id })
      });
      console.log('Response:', res);
    } catch (error) {
      console.error('Error:', error);
    }
  };

   const calculateTotal = (arr) => {
    return arr.reduce((total, currentValue) => total + parseFloat(inputValues[currentValue] || 0), 0);
  
  
  };


   
  //------------------------------------------------ MAIN FUNCION ---------------------------------------------
  
    
    const changeData = async (e) => {
      try {
          const { name, value } = e.target;
          
          console.log(value); // Log the value being set
          setInputValues(prev => ({ ...prev, [name]: value }));
          const user_id = localStorage.getItem("user_id");

          let da= JSON.stringify({
            cell_id:name, cell_value:value,user_id:user_id
        })

          console.log(da); // Log the name being set
          
         if(value!=""){
          const res = await fetch("http://127.0.0.1:8000/api/save_ff/", {
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify( {
              cell_id:name, cell_value:value,user_id:user_id
          })
        })
        console.log('Response:', res); // Log the response data
         }
          
      } catch (error) {

          console.error('Error:', error); // Log any errors that occur during the request
      }
  };






  //------------------------------------------------- TOTAL OF 5 -------------------------------------------------------


  const calculateValue5 = (numeratorKey) => {
     const numerator = parseFloat(Cost37[numeratorKey]);
     return numerator > 0 ? numerator : 0;
  };

  const updateB6_5 = () => {
   
  
    setSumC6_5(calculateValue5("C1_37"));
    setSumD6_5(calculateValue5("D1_37"));
    setSumE6_5(calculateValue5("E1_37"));
    setSumF6_5(calculateValue5("F1_37"));
    setSumG6_5(calculateValue5("G1_37"));
    setSumH6_5(calculateValue5("H1_37"));
    setSumI6_5(calculateValue5("I1_37"));
  };
  useEffect(() => {
    updateB6_5();
  }, [Cost37]);

  useEffect(() => {
    const uploadB6_5 = async () => {
     const dataToUpload = [
        { id: "C6_5", value: sumC6_5 },
        { id: "D6_5", value: sumD6_5 },
        { id: "E6_5", value: sumE6_5 },
        { id: "F6_5", value: sumF6_5 },
        { id: "G6_5", value: sumG6_5 },
        { id: "H6_5", value: sumH6_5 },
        { id: "I6_5", value: sumI6_5 }
      ];
  
      for (const { id, value } of dataToUpload) {
        await uploadData(id, value.toString());
      }
    };
  
    if ( sumC6_5 || sumD6_5 || sumE6_5 || sumF6_5 || sumG6_5 || sumH6_5 || sumI6_5) {
      uploadB6_5();
    }
  }, [ sumC6_5, sumD6_5, sumE6_5, sumF6_5, sumG6_5, sumH6_5, sumI6_5]);
  

  //------------------------------------------------- TOTAL OF 6 -------------------------------------------------------


const uploadSumB6_6 = () => {
  setSumC6_6(  parseFloat(inputValues["C2_20"] || 0) - parseFloat(inputValues["B2_20"] || 0));
  setSumD6_6(  parseFloat(inputValues["D2_20"] || 0) - parseFloat(inputValues["C2_20"] || 0));
  setSumE6_6(  parseFloat(inputValues["E2_20"] || 0) - parseFloat(inputValues["D2_20"] || 0));
  setSumF6_6(  parseFloat(inputValues["F2_20"] || 0) - parseFloat(inputValues["E2_20"] || 0)); 
  setSumG6_6(  parseFloat(inputValues["G2_20"] || 0) - parseFloat(inputValues["F2_20"] || 0));
  setSumH6_6(  parseFloat(inputValues["H2_20"] || 0) - parseFloat(inputValues["G2_20"] || 0));
  setSumI6_6(  parseFloat(inputValues["I2_20"] || 0) - parseFloat(inputValues["H2_20"] || 0));
};

useEffect(() => {
  uploadSumB6_6();
}, [inputValues]);

useEffect(() => {
  const uploadSumB6_6 = async () => {
    await uploadData("C6_6", sumC6_6.toString());
    await uploadData("D6_6", sumD6_6.toString());
    await uploadData("E6_6", sumE6_6.toString());
    await uploadData("F6_6", sumF6_6.toString());
    await uploadData("G6_6", sumG6_6.toString());
    await uploadData("H6_6", sumH6_6.toString());
    await uploadData("I6_6", sumI6_6.toString());
  };
  if ( sumC6_6 || sumD6_6 || sumE6_6 || sumF6_6 || sumG6_6 || sumH6_6 || sumI6_6) {
    uploadSumB6_6();
  }
}, [ sumC6_6, sumD6_6, sumE6_6, sumF6_6, sumG6_6, sumH6_6, sumI6_6,]);



  //------------------------------------------------- TOTAL OF 7 -------------------------------------------------------


  const uploadSumB6_7 = () => {
    setSumC6_7( ( parseFloat(inputValues["C2_47"] || 0) + parseFloat(inputValues["C2_48"] || 0 )) - ( parseFloat(inputValues["B2_47"] || 0) +  parseFloat(inputValues["B2_48"] || 0)));
    setSumD6_7( ( parseFloat(inputValues["D2_47"] || 0) + parseFloat(inputValues["D2_48"] || 0 )) - ( parseFloat(inputValues["C2_47"] || 0) +  parseFloat(inputValues["C2_48"] || 0)));
    setSumE6_7( ( parseFloat(inputValues["E2_47"] || 0) + parseFloat(inputValues["E2_48"] || 0 )) - ( parseFloat(inputValues["D2_47"] || 0) +  parseFloat(inputValues["D2_48"] || 0)));
    setSumF6_7( ( parseFloat(inputValues["F2_47"] || 0) + parseFloat(inputValues["F2_48"] || 0 )) - ( parseFloat(inputValues["E2_47"] || 0) +  parseFloat(inputValues["E2_48"] || 0))); 
    setSumG6_7( ( parseFloat(inputValues["G2_47"] || 0) + parseFloat(inputValues["G2_48"] || 0 )) - ( parseFloat(inputValues["F2_47"] || 0) +  parseFloat(inputValues["F2_48"] || 0)));
    setSumH6_7( ( parseFloat(inputValues["H2_47"] || 0) + parseFloat(inputValues["H2_48"] || 0 )) - ( parseFloat(inputValues["G2_47"] || 0) +  parseFloat(inputValues["G2_48"] || 0)));
    setSumI6_7( ( parseFloat(inputValues["I2_47"] || 0) + parseFloat(inputValues["I2_48"] || 0 )) - ( parseFloat(inputValues["H2_47"] || 0) +  parseFloat(inputValues["H2_48"] || 0)));
  };
  
  useEffect(() => {
    uploadSumB6_7();
  }, [inputValues]);
  
  useEffect(() => {
    const uploadSumB6_7 = async () => {
      await uploadData("C6_7", sumC6_7.toString());
      await uploadData("D6_7", sumD6_7.toString());
      await uploadData("E6_7", sumE6_7.toString());
      await uploadData("F6_7", sumF6_7.toString());
      await uploadData("G6_7", sumG6_7.toString());
      await uploadData("H6_7", sumH6_7.toString());
      await uploadData("I6_7", sumI6_7.toString());
    };
    if ( sumC6_7 || sumD6_7 || sumE6_7 || sumF6_7 || sumG6_7 || sumH6_7 || sumI6_7) {
      uploadSumB6_7();
    }
  }, [ sumC6_7, sumD6_7, sumE6_7, sumF6_7, sumG6_7, sumH6_7, sumI6_7,]);

  //------------------------------------------------- TOTAL OF 8 -------------------------------------------------------


  const uploadSumB6_8 = () => {
    setSumC6_8(  parseFloat(sumC6_68 || 0));
    setSumD6_8(  parseFloat(sumD6_68 || 0));
    setSumE6_8(  parseFloat(sumE6_68 || 0));
    setSumF6_8(  parseFloat(sumF6_68 || 0)); 
    setSumG6_8(  parseFloat(sumG6_68 || 0));
    setSumH6_8(  parseFloat(sumH6_68 || 0));
    setSumI6_8(  parseFloat(sumI6_68 || 0));
  };
  
  useEffect(() => {
    uploadSumB6_8();
  }, [sumC6_68, sumD6_68, sumE6_68, sumF6_68, sumG6_68, sumH6_68, sumI6_68]);
  
  useEffect(() => {
    const uploadSumB6_8 = async () => {
      await uploadData("C6_8", sumC6_8.toString());
      await uploadData("D6_8", sumD6_8.toString());
      await uploadData("E6_8", sumE6_8.toString());
      await uploadData("F6_8", sumF6_8.toString());
      await uploadData("G6_8", sumG6_8.toString());
      await uploadData("H6_8", sumH6_8.toString());
      await uploadData("I6_8", sumI6_8.toString());
    };
    if ( sumC6_8 || sumD6_8 || sumE6_8 || sumF6_8 || sumG6_8 || sumH6_8 || sumI6_8) {
      uploadSumB6_8();
    }
  }, [ sumC6_8, sumD6_8, sumE6_8, sumF6_8, sumG6_8, sumH6_8, sumI6_8,]);




  
    //------------------------------------------------- TOTAL OF 9 -------------------------------------------------------


    const calculateValue9 = (numerator,denominator) => {
      const result = numerator - denominator
      return result > 0 ? result : 0;
   };
 
   const updateB6_9 = () => {
    
   
     setSumC6_9(calculateValue9(sumC43, sumB43  ));
     setSumD6_9(calculateValue9(sumD43, sumC43  ));
     setSumE6_9(calculateValue9(sumE43, sumD43  ));
     setSumF6_9(calculateValue9(sumF43, sumE43  ));
     setSumG6_9(calculateValue9(sumG43, sumF43  ));
     setSumH6_9(calculateValue9(sumH43, sumG43  ));
     setSumI6_9(calculateValue9(sumI43, sumH43  ));
   };
   useEffect(() => {
     updateB6_9();
   }, [ sumB43,sumC43,sumD43,sumE43,sumF43,sumG43,sumH43,sumI43]);
 
   useEffect(() => {
     const uploadB6_9 = async () => {
      const dataToUpload = [
         { id: "C6_9", value: sumC6_9 },
         { id: "D6_9", value: sumD6_9 },
         { id: "E6_9", value: sumE6_9 },
         { id: "F6_9", value: sumF6_9 },
         { id: "G6_9", value: sumG6_9 },
         { id: "H6_9", value: sumH6_9 },
         { id: "I6_9", value: sumI6_9 }
       ];
   
       for (const { id, value } of dataToUpload) {
         await uploadData(id, value.toString());
       }
     };
   
     if ( sumC6_9 || sumD6_9 || sumE6_9 || sumF6_9 || sumG6_9 || sumH6_9 || sumI6_9) {
       uploadB6_9();
     }
   }, [ sumC6_9, sumD6_9, sumE6_9, sumF6_9, sumG6_9, sumH6_9, sumI6_9]);





    //------------------------------------------------- TOTAL OF 10 -------------------------------------------------------


    const calculateValue10 = (numerator,denominator) => {
      const result = numerator - denominator
      return result > 0 ? result : 0;
   };
 
   const updateB6_10 = () => {
    
   
     setSumC6_10(calculateValue10( sumB19, sumC19 ));
     setSumD6_10(calculateValue10( sumC19, sumD19 ));
     setSumE6_10(calculateValue10( sumD19, sumE19 ));
     setSumF6_10(calculateValue10( sumE19, sumF19 ));
     setSumG6_10(calculateValue10( sumF19, sumG19 ));
     setSumH6_10(calculateValue10( sumG19, sumH19 ));
     setSumI6_10(calculateValue10( sumH19, sumI19 ));
   };
   useEffect(() => {
     updateB6_10();
   }, [ sumB19,sumC19,sumD19,sumE19,sumF19,sumG19,sumH19,sumI19]);
 
   useEffect(() => {
     const uploadB6_10 = async () => {
      const dataToUpload = [
         { id: "C6_10", value: sumC6_10 },
         { id: "D6_10", value: sumD6_10 },
         { id: "E6_10", value: sumE6_10 },
         { id: "F6_10", value: sumF6_10 },
         { id: "G6_10", value: sumG6_10 },
         { id: "H6_10", value: sumH6_10 },
         { id: "I6_10", value: sumI6_10 }
       ];
   
       for (const { id, value } of dataToUpload) {
         await uploadData(id, value.toString());
       }
     };
   
     if ( sumC6_10 || sumD6_10 || sumE6_10 || sumF6_10 || sumG6_10 || sumH6_10 || sumI6_10) {
       uploadB6_10();
     }
   }, [ sumC6_10, sumD6_10, sumE6_10, sumF6_10, sumG6_10, sumH6_10, sumI6_10]);



    //------------------------------------------------- TOTAL OF 11 -------------------------------------------------------


    const calculateValue11 = (numerator,denominator) => {
      const result = numerator - denominator
      return result > 0 ? result : 0;
   };
 
   const updateB6_11 = () => {
    
   
     setSumC6_11(calculateValue11( sumB25, sumC25 ));
     setSumD6_11(calculateValue11( sumC25, sumD25 ));
     setSumE6_11(calculateValue11( sumD25, sumE25 ));
     setSumF6_11(calculateValue11( sumE25, sumF25 ));
     setSumG6_11(calculateValue11( sumF25, sumG25 ));
     setSumH6_11(calculateValue11( sumG25, sumH25 ));
     setSumI6_11(calculateValue11( sumH25, sumI25 ));
   };
   useEffect(() => {
     updateB6_11();
   }, [ sumB25,sumC25,sumD25,sumE25,sumF25,sumG25,sumH25,sumI25]);
 
   useEffect(() => {
     const uploadB6_11 = async () => {
      const dataToUpload = [
         { id: "C6_11", value: sumC6_11 },
         { id: "D6_11", value: sumD6_11 },
         { id: "E6_11", value: sumE6_11 },
         { id: "F6_11", value: sumF6_11 },
         { id: "G6_11", value: sumG6_11 },
         { id: "H6_11", value: sumH6_11 },
         { id: "I6_11", value: sumI6_11 }
       ];
   
       for (const { id, value } of dataToUpload) {
         await uploadData(id, value.toString());
       }
     };
   
     if ( sumC6_11 || sumD6_11 || sumE6_11 || sumF6_11 || sumG6_11 || sumH6_11 || sumI6_11) {
       uploadB6_11();
     }
   }, [ sumC6_11, sumD6_11, sumE6_11, sumF6_11, sumG6_11, sumH6_11, sumI6_11]);



   //------------------------------------------------- TOTAL OF 12 -------------------------------------------------------


   const calculateValue12 = (numerator,denominator) => {
    const result = numerator - denominator
    return result > 0 ? result : 0;
 };

 const updateB6_12 = () => {
  
 
   setSumC6_12(calculateValue12( sumB30, sumC30 ));
   setSumD6_12(calculateValue12( sumC30, sumD30 ));
   setSumE6_12(calculateValue12( sumD30, sumE30 ));
   setSumF6_12(calculateValue12( sumE30, sumF30 ));
   setSumG6_12(calculateValue12( sumF30, sumG30 ));
   setSumH6_12(calculateValue12( sumG30, sumH30 ));
   setSumI6_12(calculateValue12( sumH30, sumI30 ));
 };
 useEffect(() => {
   updateB6_12();
 }, [ sumB30,sumC30,sumD30,sumE30,sumF30,sumG30,sumH30,sumI30]);

 useEffect(() => {
   const uploadB6_12 = async () => {
    const dataToUpload = [
       { id: "C6_12", value: sumC6_12 },
       { id: "D6_12", value: sumD6_12 },
       { id: "E6_12", value: sumE6_12 },
       { id: "F6_12", value: sumF6_12 },
       { id: "G6_12", value: sumG6_12 },
       { id: "H6_12", value: sumH6_12 },
       { id: "I6_12", value: sumI6_12 }
     ];
 
     for (const { id, value } of dataToUpload) {
       await uploadData(id, value.toString());
     }
   };
 
   if ( sumC6_12 || sumD6_12 || sumE6_12 || sumF6_12 || sumG6_12 || sumH6_12 || sumI6_12) {
     uploadB6_12();
   }
 }, [ sumC6_12, sumD6_12, sumE6_12, sumF6_12, sumG6_12, sumH6_12, sumI6_12]);



   //------------------------------------------------- TOTAL OF 13 -------------------------------------------------------


   const calculateValue13 = (sum5,sum6,sum7,sum8,sum9,sum10,sum11,sum12) => {
    const result = sum5+sum6+sum7+sum8+sum9+sum10+sum11+sum12
    return result !== 0 ? result : 0;
 };

 const updateB6_13 = () => {
  
 
   setSumC6_13(calculateValue13(sumC6_5, sumC6_6, sumC6_7, sumC6_8, sumC6_9, sumC6_10, sumC6_11, sumC6_12 ));
   setSumD6_13(calculateValue13(sumD6_5, sumD6_6, sumD6_7, sumD6_8, sumD6_9, sumD6_10, sumD6_11, sumD6_12 ));
   setSumE6_13(calculateValue13(sumE6_5, sumE6_6, sumE6_7, sumE6_8, sumE6_9, sumE6_10, sumE6_11, sumE6_12 ));
   setSumF6_13(calculateValue13(sumF6_5, sumF6_6, sumF6_7, sumF6_8, sumF6_9, sumF6_10, sumF6_11, sumF6_12 ));
   setSumG6_13(calculateValue13(sumG6_5, sumG6_6, sumG6_7, sumG6_8, sumG6_9, sumG6_10, sumG6_11, sumG6_12 ));
   setSumH6_13(calculateValue13(sumH6_5, sumH6_6, sumH6_7, sumH6_8, sumH6_9, sumH6_10, sumH6_11, sumH6_12 ));
   setSumI6_13(calculateValue13(sumI6_5, sumI6_6, sumI6_7, sumI6_8, sumI6_9, sumI6_10, sumI6_11, sumI6_12 ));
 };
 useEffect(() => {
   updateB6_13();
 }, [ sumC6_12, sumD6_12, sumE6_12, sumF6_12, sumG6_12, sumH6_12, sumI6_12,sumC6_11, sumD6_11, sumE6_11, sumF6_11, sumG6_11, sumH6_11, sumI6_11,sumC6_10, sumD6_10, sumE6_10, sumF6_10, sumG6_10, sumH6_10, sumI6_10, sumC6_9, sumD6_9, sumE6_9, sumF6_9, sumG6_9, sumH6_9, sumI6_9,sumC6_8, sumD6_8, sumE6_8, sumF6_8, sumG6_8, sumH6_8, sumI6_8,sumC6_7, sumD6_7, sumE6_7, sumF6_7, sumG6_7, sumH6_7, sumI6_7,sumC6_6, sumD6_6, sumE6_6, sumF6_6, sumG6_6, sumH6_6, sumI6_6,sumC6_5, sumD6_5, sumE6_5, sumF6_5, sumG6_5, sumH6_5, sumI6_5]);

 useEffect(() => {
   const uploadB6_13 = async () => {
    const dataToUpload = [
       { id: "C6_13", value: sumC6_13 },
       { id: "D6_13", value: sumD6_13 },
       { id: "E6_13", value: sumE6_13 },
       { id: "F6_13", value: sumF6_13 },
       { id: "G6_13", value: sumG6_13 },
       { id: "H6_13", value: sumH6_13 },
       { id: "I6_13", value: sumI6_13 }
     ];
 
     for (const { id, value } of dataToUpload) {
       await uploadData(id, value.toString());
     }
   };
 
   if ( sumC6_13 || sumD6_13 || sumE6_13 || sumF6_13 || sumG6_13 || sumH6_13 || sumI6_13) {
     uploadB6_13();
   }
 }, [ sumC6_13, sumD6_13, sumE6_13, sumF6_13, sumG6_13, sumH6_13, sumI6_13]);


  //------------------------------------------------- TOTAL OF 15 -------------------------------------------------------


  const calculateValue15 = (numeratorkey) => {
    const numerator = parseFloat (Cost37[numeratorkey])
    return numerator < 0 ? -1 * numerator: 0;
 };

 const updateB6_15 = () => {
  
 
   setSumC6_15(calculateValue15( "C1_37" ));
   setSumD6_15(calculateValue15( "D1_37" ));
   setSumE6_15(calculateValue15( "E1_37" ));
   setSumF6_15(calculateValue15( "F1_37" ));
   setSumG6_15(calculateValue15( "G1_37" ));
   setSumH6_15(calculateValue15( "H1_37" ));
   setSumI6_15(calculateValue15( "I1_37" ));
 };
 useEffect(() => {
   updateB6_15();
 }, [ Cost37]);

 useEffect(() => {
   const uploadB6_15 = async () => {
    const dataToUpload = [
       { id: "C6_15", value: sumC6_15 },
       { id: "D6_15", value: sumD6_15 },
       { id: "E6_15", value: sumE6_15 },
       { id: "F6_15", value: sumF6_15 },
       { id: "G6_15", value: sumG6_15 },
       { id: "H6_15", value: sumH6_15 },
       { id: "I6_15", value: sumI6_15 }
     ];
 
     for (const { id, value } of dataToUpload) {
       await uploadData(id, value.toString());
     }
   };
 
   if ( sumC6_15 || sumD6_15 || sumE6_15 || sumF6_15 || sumG6_15 || sumH6_15 || sumI6_15) {
     uploadB6_15();
   }
 }, [ sumC6_15, sumD6_15, sumE6_15, sumF6_15, sumG6_15, sumH6_15, sumI6_15]);



  //------------------------------------------------- TOTAL OF 16 -------------------------------------------------------


  const calculateValue16 = (numerator,denominator) => {
    const result = numerator - denominator
    return result < 0 ? -1 * result: 0;
 };

 const updateB6_16 = () => {
  
 
   setSumC6_16(calculateValue16( sumB19, sumC19 ));
   setSumD6_16(calculateValue16( sumC19, sumD19 ));
   setSumE6_16(calculateValue16( sumD19, sumE19 ));
   setSumF6_16(calculateValue16( sumE19, sumF19 ));
   setSumG6_16(calculateValue16( sumF19, sumG19 ));
   setSumH6_16(calculateValue16( sumG19, sumH19 ));
   setSumI6_16(calculateValue16( sumH19, sumI19 ));
 };
 useEffect(() => {
   updateB6_16();
 }, [sumB19,sumC19,sumD19,sumE19,sumF19,sumG19,sumH19,sumI19]);

 useEffect(() => {
   const uploadB6_16 = async () => {
    const dataToUpload = [
       { id: "C6_16", value: sumC6_16 },
       { id: "D6_16", value: sumD6_16 },
       { id: "E6_16", value: sumE6_16 },
       { id: "F6_16", value: sumF6_16 },
       { id: "G6_16", value: sumG6_16 },
       { id: "H6_16", value: sumH6_16 },
       { id: "I6_16", value: sumI6_16 }
     ];
 
     for (const { id, value } of dataToUpload) {
       await uploadData(id, value.toString());
     }
   };
 
   if ( sumC6_16 || sumD6_16 || sumE6_16 || sumF6_16 || sumG6_16 || sumH6_16 || sumI6_16) {
     uploadB6_16();
   }
 }, [ sumC6_16, sumD6_16, sumE6_16, sumF6_16, sumG6_16, sumH6_16, sumI6_16]);


 //------------------------------------------------- TOTAL OF 17 -------------------------------------------------------


 const calculateValue17 = (numerator,denominator) => {
  const result = numerator - denominator
  return result < 0 ? -1 * result: 0;
};

const updateB6_17 = () => {


 setSumC6_17(calculateValue17( sumB25, sumC25 ));
 setSumD6_17(calculateValue17( sumC25, sumD25 ));
 setSumE6_17(calculateValue17( sumD25, sumE25 ));
 setSumF6_17(calculateValue17( sumE25, sumF25 ));
 setSumG6_17(calculateValue17( sumF25, sumG25 ));
 setSumH6_17(calculateValue17( sumG25, sumH25 ));
 setSumI6_17(calculateValue17( sumH25, sumI25 ));
};
useEffect(() => {
 updateB6_17();
}, [sumB25,sumC25,sumD25,sumE25,sumF25,sumG25,sumH25,sumI25]);

useEffect(() => {
 const uploadB6_17 = async () => {
  const dataToUpload = [
     { id: "C6_17", value: sumC6_17 },
     { id: "D6_17", value: sumD6_17 },
     { id: "E6_17", value: sumE6_17 },
     { id: "F6_17", value: sumF6_17 },
     { id: "G6_17", value: sumG6_17 },
     { id: "H6_17", value: sumH6_17 },
     { id: "I6_17", value: sumI6_17 }
   ];

   for (const { id, value } of dataToUpload) {
     await uploadData(id, value.toString());
   }
 };

 if ( sumC6_17 || sumD6_17 || sumE6_17 || sumF6_17 || sumG6_17 || sumH6_17 || sumI6_17) {
   uploadB6_17();
 }
}, [ sumC6_17, sumD6_17, sumE6_17, sumF6_17, sumG6_17, sumH6_17, sumI6_17]);

 //------------------------------------------------- TOTAL OF 18 -------------------------------------------------------


 const calculateValue18 = (numerator,denominator) => {
  const result = numerator - denominator
  return result < 0 ? -1 * result: 0;
};

const updateB6_18 = () => {


 setSumC6_18(calculateValue18( sumB30, sumC30 ));
 setSumD6_18(calculateValue18( sumC30, sumD30 ));
 setSumE6_18(calculateValue18( sumD30, sumE30 ));
 setSumF6_18(calculateValue18( sumE30, sumF30 ));
 setSumG6_18(calculateValue18( sumF30, sumG30 ));
 setSumH6_18(calculateValue18( sumG30, sumH30 ));
 setSumI6_18(calculateValue18( sumH30, sumI30 ));
};
useEffect(() => {
 updateB6_18();
}, [sumB30,sumC30,sumD30,sumE30,sumF30,sumG30,sumH30,sumI30]);

useEffect(() => {
 const uploadB6_18 = async () => {
  const dataToUpload = [
     { id: "C6_18", value: sumC6_18 },
     { id: "D6_18", value: sumD6_18 },
     { id: "E6_18", value: sumE6_18 },
     { id: "F6_18", value: sumF6_18 },
     { id: "G6_18", value: sumG6_18 },
     { id: "H6_18", value: sumH6_18 },
     { id: "I6_18", value: sumI6_18 }
   ];

   for (const { id, value } of dataToUpload) {
     await uploadData(id, value.toString());
   }
 };

 if ( sumC6_18 || sumD6_18 || sumE6_18 || sumF6_18 || sumG6_18 || sumH6_18 || sumI6_18) {
   uploadB6_18();
 }
}, [ sumC6_18, sumD6_18, sumE6_18, sumF6_18, sumG6_18, sumH6_18, sumI6_18]);




//------------------------------------------------- TOTAL OF 19 -------------------------------------------------------


const uploadSumB6_19 = () => {
  setSumB6_19( parseFloat(sumB6_69 || 0) );
  setSumC6_19( parseFloat(sumC6_69 || 0) );
  setSumD6_19( parseFloat(sumD6_69 || 0) );
  setSumE6_19( parseFloat(sumE6_69 || 0) );
  setSumF6_19( parseFloat(sumF6_69 || 0) ); 
  setSumG6_19( parseFloat(sumG6_69 || 0) );
  setSumH6_19( parseFloat(sumH6_69 || 0) );
  setSumI6_19( parseFloat(sumI6_69 || 0) );
};

useEffect(() => {
  uploadSumB6_19();
}, [inputValues,sumB6_69,sumC6_69, sumD6_69, sumE6_69, sumF6_69, sumG6_69, sumH6_69, sumI6_69]);

useEffect(() => {
  const uploadSumB6_19 = async () => {
    await uploadData("B6_19", sumB6_19.toString());
    await uploadData("C6_19", sumC6_19.toString());
    await uploadData("D6_19", sumD6_19.toString());
    await uploadData("E6_19", sumE6_19.toString());
    await uploadData("F6_19", sumF6_19.toString());
    await uploadData("G6_19", sumG6_19.toString());
    await uploadData("H6_19", sumH6_19.toString());
    await uploadData("I6_19", sumI6_19.toString());
  };
  if ( sumB6_19 || sumC6_19 || sumD6_19 || sumE6_19 || sumF6_19 || sumG6_19 || sumH6_19 || sumI6_19) {
    uploadSumB6_19();
  }
}, [ sumB6_19,sumC6_19, sumD6_19, sumE6_19, sumF6_19, sumG6_19, sumH6_19, sumI6_19]);


 //------------------------------------------------- TOTAL OF 20 -------------------------------------------------------


 const calculateValue20 = (numerator,denominator) => {
  const result = numerator - denominator
  return result < 0 ? -1 * result: 0;
};

const updateB6_20 = () => {


 setSumC6_20(calculateValue20(sumC43,  sumB43  ));
 setSumD6_20(calculateValue20(sumD43,  sumC43  ));
 setSumE6_20(calculateValue20(sumE43,  sumD43  ));
 setSumF6_20(calculateValue20(sumF43,  sumE43  ));
 setSumG6_20(calculateValue20(sumG43,  sumF43  ));
 setSumH6_20(calculateValue20(sumH43,  sumG43  ));
 setSumI6_20(calculateValue20(sumI43,  sumH43  ));
};
useEffect(() => {
 updateB6_20();
}, [sumB43,sumC43,sumD43,sumE43,sumF43,sumG43,sumH43,sumI43]);

useEffect(() => {
 const uploadB6_20 = async () => {
  const dataToUpload = [
     { id: "C6_20", value: sumC6_20 },
     { id: "D6_20", value: sumD6_20 },
     { id: "E6_20", value: sumE6_20 },
     { id: "F6_20", value: sumF6_20 },
     { id: "G6_20", value: sumG6_20 },
     { id: "H6_20", value: sumH6_20 },
     { id: "I6_20", value: sumI6_20 }
   ];

   for (const { id, value } of dataToUpload) {
     await uploadData(id, value.toString());
   }
 };

 if ( sumC6_20 || sumD6_20 || sumE6_20 || sumF6_20 || sumG6_20 || sumH6_20 || sumI6_20) {
   uploadB6_20();
 }
}, [ sumC6_20, sumD6_20, sumE6_20, sumF6_20, sumG6_20, sumH6_20, sumI6_20]);
  
  
//------------------------------------------------- TOTAL OF 21 -------------------------------------------------------


const uploadSumB6_21 = () => {
  setSumC6_21( parseFloat(inputValues["C1_40"] || 0) );
  setSumD6_21( parseFloat(inputValues["D1_40"] || 0) );
  setSumE6_21( parseFloat(inputValues["E1_40"] || 0) );
  setSumF6_21( parseFloat(inputValues["F1_40"] || 0) ); 
  setSumG6_21( parseFloat(inputValues["G1_40"] || 0) );
  setSumH6_21( parseFloat(inputValues["H1_40"] || 0) );
  setSumI6_21( parseFloat(inputValues["I1_40"] || 0) );
};

useEffect(() => {
  uploadSumB6_21();
}, [inputValues]);

useEffect(() => {
  const uploadSumB6_21 = async () => {
    await uploadData("C6_21", sumC6_21.toString());
    await uploadData("D6_21", sumD6_21.toString());
    await uploadData("E6_21", sumE6_21.toString());
    await uploadData("F6_21", sumF6_21.toString());
    await uploadData("G6_21", sumG6_21.toString());
    await uploadData("H6_21", sumH6_21.toString());
    await uploadData("I6_21", sumI6_21.toString());
  };
  if ( sumC6_21 || sumD6_21 || sumE6_21 || sumF6_21 || sumG6_21 || sumH6_21 || sumI6_21) {
    uploadSumB6_21();
  }
}, [ sumC6_21, sumD6_21, sumE6_21, sumF6_21, sumG6_21, sumH6_21, sumI6_21]);




   //------------------------------------------------- TOTAL OF 22 -------------------------------------------------------


   const calculateValue22 = (sum15,sum16,sum17,sum18,sum19,sum20,sum21) => {
    const result = sum15+sum16+sum17+sum18+sum19+sum20+sum21;
    return result !== 0 ? result : 0;
 };

 const updateB6_22 = () => {
  
 
   setSumC6_22(calculateValue22(sumC6_15, sumC6_16, sumC6_17, sumC6_18, sumC6_19, sumC6_20, sumC6_21 ));
   setSumD6_22(calculateValue22(sumD6_15, sumD6_16, sumD6_17, sumD6_18, sumD6_19, sumD6_20, sumD6_21 ));
   setSumE6_22(calculateValue22(sumE6_15, sumE6_16, sumE6_17, sumE6_18, sumE6_19, sumE6_20, sumE6_21 ));
   setSumF6_22(calculateValue22(sumF6_15, sumF6_16, sumF6_17, sumF6_18, sumF6_19, sumF6_20, sumF6_21 ));
   setSumG6_22(calculateValue22(sumG6_15, sumG6_16, sumG6_17, sumG6_18, sumG6_19, sumG6_20, sumG6_21 ));
   setSumH6_22(calculateValue22(sumH6_15, sumH6_16, sumH6_17, sumH6_18, sumH6_19, sumH6_20, sumH6_21 ));
   setSumI6_22(calculateValue22(sumI6_15, sumI6_16, sumI6_17, sumI6_18, sumI6_19, sumI6_20, sumI6_21 ));
 };
 useEffect(() => {
   updateB6_22();
 }, [sumC6_21, sumD6_21, sumE6_21, sumF6_21, sumG6_21, sumH6_21, sumI6_21,sumC6_20, sumD6_20, sumE6_20, sumF6_20, sumG6_10, sumH6_10, sumI6_10, sumC6_19, sumD6_19, sumE6_19, sumF6_19, sumG6_19, sumH6_19, sumI6_19,sumC6_18, sumD6_18, sumE6_18, sumF6_18, sumG6_18, sumH6_18, sumI6_18,sumC6_17, sumD6_17, sumE6_17, sumF6_17, sumG6_17, sumH6_17, sumI6_17,sumC6_16, sumD6_16, sumE6_16, sumF6_16, sumG6_16, sumH6_16, sumI6_16,sumC6_15, sumD6_15, sumE6_15, sumF6_15, sumG6_15, sumH6_15, sumI6_15]);

 useEffect(() => {
   const uploadB6_22 = async () => {
    const dataToUpload = [
       { id: "C6_22", value: sumC6_22 },
       { id: "D6_22", value: sumD6_22 },
       { id: "E6_22", value: sumE6_22 },
       { id: "F6_22", value: sumF6_22 },
       { id: "G6_22", value: sumG6_22 },
       { id: "H6_22", value: sumH6_22 },
       { id: "I6_22", value: sumI6_22 }
     ];
 
     for (const { id, value } of dataToUpload) {
       await uploadData(id, value.toString());
     }
   };
 
   if ( sumC6_22 || sumD6_22 || sumE6_22 || sumF6_22 || sumG6_22 || sumH6_22 || sumI6_22) {
     uploadB6_22();
   }
 }, [ sumC6_22, sumD6_22, sumE6_22, sumF6_22, sumG6_22, sumH6_22, sumI6_22]);



 //------------------------------------------------- TOTAL OF 23 -------------------------------------------------------


 const uploadSumB6_23 = () => {
  setSumC6_23(  parseFloat(sumC6_13 || 0) - parseFloat(sumC6_22 || 0));
  setSumD6_23(  parseFloat(sumD6_13 || 0) - parseFloat(sumD6_22 || 0));
  setSumE6_23(  parseFloat(sumE6_13 || 0) - parseFloat(sumE6_22 || 0));
  setSumF6_23(  parseFloat(sumF6_13 || 0) - parseFloat(sumF6_22 || 0)); 
  setSumG6_23(  parseFloat(sumG6_13 || 0) - parseFloat(sumG6_22 || 0));
  setSumH6_23(  parseFloat(sumH6_13 || 0) - parseFloat(sumH6_22 || 0));
  setSumI6_23(  parseFloat(sumI6_13 || 0) - parseFloat(sumI6_22 || 0));
};

useEffect(() => {
  uploadSumB6_23();
}, [sumC6_13, sumD6_13, sumE6_13, sumF6_13, sumG6_13, sumH6_13, sumI6_13,sumC6_22, sumD6_22, sumE6_22, sumF6_22, sumG6_22, sumH6_22, sumI6_22]);

useEffect(() => {
  const uploadSumB6_23 = async () => {
    await uploadData("C6_23", sumC6_23.toString());
    await uploadData("D6_23", sumD6_23.toString());
    await uploadData("E6_23", sumE6_23.toString());
    await uploadData("F6_23", sumF6_23.toString());
    await uploadData("G6_23", sumG6_23.toString());
    await uploadData("H6_23", sumH6_23.toString());
    await uploadData("I6_23", sumI6_23.toString());
  };
  if ( sumC6_23 || sumD6_23 || sumE6_23 || sumF6_23 || sumG6_23 || sumH6_23 || sumI6_23) {
    uploadSumB6_23();
  }
}, [ sumC6_23, sumD6_23, sumE6_23, sumF6_23, sumG6_23, sumH6_23, sumI6_23]);



 //------------------------------------------------- TOTAL OF 24 -------------------------------------------------------


 const uploadSumB6_24 = () => {
  setSumC6_24(  parseFloat(sumC2 || 0) - parseFloat(sumB2 || 0));
  setSumD6_24(  parseFloat(sumD2 || 0) - parseFloat(sumC2 || 0));
  setSumE6_24(  parseFloat(sumE2 || 0) - parseFloat(sumD2 || 0));
  setSumF6_24(  parseFloat(sumF2 || 0) - parseFloat(sumE2 || 0)); 
  setSumG6_24(  parseFloat(sumG2 || 0) - parseFloat(sumF2 || 0));
  setSumH6_24(  parseFloat(sumH2 || 0) - parseFloat(sumG2 || 0));
  setSumI6_24(  parseFloat(sumI2 || 0) - parseFloat(sumH2 || 0));
};

useEffect(() => {
  uploadSumB6_24();
}, [inputValues]);

useEffect(() => {
  const uploadSumB6_24 = async () => {
    await uploadData("C6_24", sumC6_24.toString());
    await uploadData("D6_24", sumD6_24.toString());
    await uploadData("E6_24", sumE6_24.toString());
    await uploadData("F6_24", sumF6_24.toString());
    await uploadData("G6_24", sumG6_24.toString());
    await uploadData("H6_24", sumH6_24.toString());
    await uploadData("I6_24", sumI6_24.toString());
  };
  if ( sumC6_24 || sumD6_24 || sumE6_24 || sumF6_24 || sumG6_24 || sumH6_24 || sumI6_24) {
    uploadSumB6_24();
  }
}, [ sumC6_24, sumD6_24, sumE6_24, sumF6_24, sumG6_24, sumH6_24, sumI6_24]);






  //------------------------------------------------- TOTAL OF 25 -------------------------------------------------------


  const uploadSumB6_25 = () => {
    setSumC6_25( ( parseFloat(inputValues["C2_36"] || 0) + parseFloat(sumC37 || 0 )) - ( parseFloat(inputValues["B2_36"] || 0) +  parseFloat(sumB37 || 0)));
    setSumD6_25( ( parseFloat(inputValues["D2_36"] || 0) + parseFloat(sumD37 || 0 )) - ( parseFloat(inputValues["C2_36"] || 0) +  parseFloat(sumC37 || 0)));
    setSumE6_25( ( parseFloat(inputValues["E2_36"] || 0) + parseFloat(sumE37 || 0 )) - ( parseFloat(inputValues["D2_36"] || 0) +  parseFloat(sumD37 || 0)));
    setSumF6_25( ( parseFloat(inputValues["F2_36"] || 0) + parseFloat(sumF37 || 0 )) - ( parseFloat(inputValues["E2_36"] || 0) +  parseFloat(sumE37 || 0))); 
    setSumG6_25( ( parseFloat(inputValues["G2_36"] || 0) + parseFloat(sumG37 || 0 )) - ( parseFloat(inputValues["F2_36"] || 0) +  parseFloat(sumF37 || 0)));
    setSumH6_25( ( parseFloat(inputValues["H2_36"] || 0) + parseFloat(sumH37 || 0 )) - ( parseFloat(inputValues["G2_36"] || 0) +  parseFloat(sumG37 || 0)));
    setSumI6_25( ( parseFloat(inputValues["I2_36"] || 0) + parseFloat(sumI37 || 0 )) - ( parseFloat(inputValues["H2_36"] || 0) +  parseFloat(sumH37 || 0)));
  };
  
  useEffect(() => {
    uploadSumB6_25();
  }, [inputValues,sumB37, sumC37, sumD37, sumE37, sumF37, sumG37, sumH37, sumI37]);
  
  useEffect(() => {
    const uploadSumB6_25 = async () => {
      await uploadData("C6_25", sumC6_25.toString());
      await uploadData("D6_25", sumD6_25.toString());
      await uploadData("E6_25", sumE6_25.toString());
      await uploadData("F6_25", sumF6_25.toString());
      await uploadData("G6_25", sumG6_25.toString());
      await uploadData("H6_25", sumH6_25.toString());
      await uploadData("I6_25", sumI6_25.toString());
    };
    if ( sumC6_25 || sumD6_25 || sumE6_25 || sumF6_25 || sumG6_25 || sumH6_25 || sumI6_25) {
      uploadSumB6_25();
    }
  }, [ sumC6_25, sumD6_25, sumE6_25, sumF6_25, sumG6_25, sumH6_25, sumI6_25]);
  

 //------------------------------------------------- TOTAL OF 26 -------------------------------------------------------


 const uploadSumB6_26 = () => {
  setSumC6_26(  parseFloat(sumC6_24 || 0) - parseFloat(sumC6_25 || 0));
  setSumD6_26(  parseFloat(sumD6_24 || 0) - parseFloat(sumD6_25 || 0));
  setSumE6_26(  parseFloat(sumE6_24 || 0) - parseFloat(sumE6_25 || 0));
  setSumF6_26(  parseFloat(sumF6_24 || 0) - parseFloat(sumF6_25 || 0)); 
  setSumG6_26(  parseFloat(sumG6_24 || 0) - parseFloat(sumG6_25 || 0));
  setSumH6_26(  parseFloat(sumH6_24 || 0) - parseFloat(sumH6_25 || 0));
  setSumI6_26(  parseFloat(sumI6_24 || 0) - parseFloat(sumI6_25 || 0));
};

useEffect(() => {
  uploadSumB6_26();
}, [sumC6_24, sumD6_24, sumE6_24, sumF6_24, sumG6_24, sumH6_24, sumI6_24,sumC6_25, sumD6_25, sumE6_25, sumF6_25, sumG6_25, sumH6_25, sumI6_25]);

useEffect(() => {
  const uploadSumB6_26 = async () => {
    await uploadData("C6_26", sumC6_26.toString());
    await uploadData("D6_26", sumD6_26.toString());
    await uploadData("E6_26", sumE6_26.toString());
    await uploadData("F6_26", sumF6_26.toString());
    await uploadData("G6_26", sumG6_26.toString());
    await uploadData("H6_26", sumH6_26.toString());
    await uploadData("I6_26", sumI6_26.toString());
  };
  if ( sumC6_26 || sumD6_26 || sumE6_26 || sumF6_26 || sumG6_26 || sumH6_26 || sumI6_26) {
    uploadSumB6_26();
  }
}, [ sumC6_26, sumD6_26, sumE6_26, sumF6_26, sumG6_26, sumH6_26, sumI6_26]);


 //------------------------------------------------- TOTAL OF 27 -------------------------------------------------------


 const uploadSumB6_27 = () => {
  setSumC6_27(  parseFloat(sumC6_23 || 0) - parseFloat(sumC6_26 || 0));
  setSumD6_27(  parseFloat(sumD6_23 || 0) - parseFloat(sumD6_26 || 0));
  setSumE6_27(  parseFloat(sumE6_23 || 0) - parseFloat(sumE6_26 || 0));
  setSumF6_27(  parseFloat(sumF6_23 || 0) - parseFloat(sumF6_26 || 0)); 
  setSumG6_27(  parseFloat(sumG6_23 || 0) - parseFloat(sumG6_26 || 0));
  setSumH6_27(  parseFloat(sumH6_23 || 0) - parseFloat(sumH6_26 || 0));
  setSumI6_27(  parseFloat(sumI6_23 || 0) - parseFloat(sumI6_26 || 0));
};

useEffect(() => {
  uploadSumB6_27();
}, [sumC6_23, sumD6_23, sumE6_23, sumF6_23, sumG6_23, sumH6_23, sumI6_23,sumC6_26, sumD6_26, sumE6_26, sumF6_26, sumG6_26, sumH6_26, sumI6_26]);

useEffect(() => {
  const uploadSumB6_27 = async () => {
    await uploadData("C6_27", sumC6_27.toString());
    await uploadData("D6_27", sumD6_27.toString());
    await uploadData("E6_27", sumE6_27.toString());
    await uploadData("F6_27", sumF6_27.toString());
    await uploadData("G6_27", sumG6_27.toString());
    await uploadData("H6_27", sumH6_27.toString());
    await uploadData("I6_27", sumI6_27.toString());
  };
  if ( sumC6_27 || sumD6_27 || sumE6_27 || sumF6_27 || sumG6_27 || sumH6_27 || sumI6_27) {
    uploadSumB6_27();
  }
}, [ sumC6_27, sumD6_27, sumE6_27, sumF6_27, sumG6_27, sumH6_27, sumI6_27]);









  //------------------------------------------------- TOTAL OF 28 -------------------------------------------------------


  const uploadSumB6_28 = () => {
    setSumC6_28( ( parseFloat(inputValues["C2_34"] || 0) + parseFloat(inputValues["C2_35"] || 0 )) - ( parseFloat(inputValues["B2_34"] || 0) +  parseFloat(inputValues["B2_35"] || 0)));
    setSumD6_28( ( parseFloat(inputValues["D2_34"] || 0) + parseFloat(inputValues["D2_35"] || 0 )) - ( parseFloat(inputValues["C2_34"] || 0) +  parseFloat(inputValues["C2_35"] || 0)));
    setSumE6_28( ( parseFloat(inputValues["E2_34"] || 0) + parseFloat(inputValues["E2_35"] || 0 )) - ( parseFloat(inputValues["D2_34"] || 0) +  parseFloat(inputValues["D2_35"] || 0)));
    setSumF6_28( ( parseFloat(inputValues["F2_34"] || 0) + parseFloat(inputValues["F2_35"] || 0 )) - ( parseFloat(inputValues["E2_34"] || 0) +  parseFloat(inputValues["E2_35"] || 0))); 
    setSumG6_28( ( parseFloat(inputValues["G2_34"] || 0) + parseFloat(inputValues["G2_35"] || 0 )) - ( parseFloat(inputValues["F2_34"] || 0) +  parseFloat(inputValues["F2_35"] || 0)));
    setSumH6_28( ( parseFloat(inputValues["H2_34"] || 0) + parseFloat(inputValues["H2_35"] || 0 )) - ( parseFloat(inputValues["G2_34"] || 0) +  parseFloat(inputValues["G2_35"] || 0)));
    setSumI6_28( ( parseFloat(inputValues["I2_34"] || 0) + parseFloat(inputValues["I2_35"] || 0 )) - ( parseFloat(inputValues["H2_34"] || 0) +  parseFloat(inputValues["H2_35"] || 0)));
  };
  
  useEffect(() => {
    uploadSumB6_28();
  }, [inputValues]);
  
  useEffect(() => {
    const uploadSumB6_28 = async () => {
      await uploadData("C6_28", sumC6_28.toString());
      await uploadData("D6_28", sumD6_28.toString());
      await uploadData("E6_28", sumE6_28.toString());
      await uploadData("F6_28", sumF6_28.toString());
      await uploadData("G6_28", sumG6_28.toString());
      await uploadData("H6_28", sumH6_28.toString());
      await uploadData("I6_28", sumI6_28.toString());
    };
    if ( sumC6_28 || sumD6_28 || sumE6_28 || sumF6_28 || sumG6_28 || sumH6_28 || sumI6_28) {
      uploadSumB6_28();
    }
  }, [ sumC6_28, sumD6_28, sumE6_28, sumF6_28, sumG6_28, sumH6_28, sumI6_28]);




  //------------------------------------------------- TOTAL OF 31 -------------------------------------------------------


  const uploadSumB6_31 = () => {
    setSumC6_31(  parseFloat(sumC6_13 || 0));
    setSumD6_31(  parseFloat(sumD6_13 || 0));
    setSumE6_31(  parseFloat(sumE6_13 || 0));
    setSumF6_31(  parseFloat(sumF6_13 || 0)); 
    setSumG6_31(  parseFloat(sumG6_13 || 0));
    setSumH6_31(  parseFloat(sumH6_13 || 0));
    setSumI6_31(  parseFloat(sumI6_13 || 0));
  };
  
  useEffect(() => {
    uploadSumB6_31();
  }, [sumC6_13, sumD6_13, sumE6_13, sumF6_13, sumG6_13, sumH6_13, sumI6_13]);
  
  useEffect(() => {
    const uploadSumB6_31 = async () => {
      await uploadData("C6_31", sumC6_31.toString());
      await uploadData("D6_31", sumD6_31.toString());
      await uploadData("E6_31", sumE6_31.toString());
      await uploadData("F6_31", sumF6_31.toString());
      await uploadData("G6_31", sumG6_31.toString());
      await uploadData("H6_31", sumH6_31.toString());
      await uploadData("I6_31", sumI6_31.toString());
    };
    if ( sumC6_31 || sumD6_31 || sumE6_31 || sumF6_31 || sumG6_31 || sumH6_31 || sumI6_31) {
      uploadSumB6_31();
    }
  }, [ sumC6_31, sumD6_31, sumE6_31, sumF6_31, sumG6_31, sumH6_31, sumI6_31,]);


  //------------------------------------------------- TOTAL OF 32 -------------------------------------------------------


  const uploadSumB6_32 = () => {
    setSumC6_32(  parseFloat(sumC6_22 || 0));
    setSumD6_32(  parseFloat(sumD6_22 || 0));
    setSumE6_32(  parseFloat(sumE6_22 || 0));
    setSumF6_32(  parseFloat(sumF6_22 || 0)); 
    setSumG6_32(  parseFloat(sumG6_22 || 0));
    setSumH6_32(  parseFloat(sumH6_22 || 0));
    setSumI6_32(  parseFloat(sumI6_22 || 0));
  };
  
  useEffect(() => {
    uploadSumB6_32();
  }, [sumC6_22, sumD6_22, sumE6_22, sumF6_22, sumG6_22, sumH6_22, sumI6_22]);
  
  useEffect(() => {
    const uploadSumB6_32 = async () => {
      await uploadData("C6_32", sumC6_32.toString());
      await uploadData("D6_32", sumD6_32.toString());
      await uploadData("E6_32", sumE6_32.toString());
      await uploadData("F6_32", sumF6_32.toString());
      await uploadData("G6_32", sumG6_32.toString());
      await uploadData("H6_32", sumH6_32.toString());
      await uploadData("I6_32", sumI6_32.toString());
    };
    if ( sumC6_32 || sumD6_32 || sumE6_32 || sumF6_32 || sumG6_32 || sumH6_32 || sumI6_32) {
      uploadSumB6_32();
    }
  }, [ sumC6_32, sumD6_32, sumE6_32, sumF6_32, sumG6_32, sumH6_32, sumI6_32,]);


  //------------------------------------------------- TOTAL OF 33 -------------------------------------------------------


  const uploadSumB6_33 = () => {
    setSumC6_33(  parseFloat(sumC6_31 || 0)  - parseFloat(sumC6_32 || 0));
    setSumD6_33(  parseFloat(sumD6_31 || 0)  - parseFloat(sumD6_32 || 0));
    setSumE6_33(  parseFloat(sumE6_31 || 0)  - parseFloat(sumE6_32 || 0));
    setSumF6_33(  parseFloat(sumF6_31 || 0)  - parseFloat(sumF6_32 || 0)); 
    setSumG6_33(  parseFloat(sumG6_31 || 0)  - parseFloat(sumG6_32 || 0));
    setSumH6_33(  parseFloat(sumH6_31 || 0)  - parseFloat(sumH6_32 || 0));
    setSumI6_33(  parseFloat(sumI6_31 || 0)  - parseFloat(sumI6_32 || 0));
  };
  
  useEffect(() => {
    uploadSumB6_33();
  }, [sumC6_31, sumD6_31, sumE6_31, sumF6_31, sumG6_31, sumH6_31, sumI6_31,sumC6_32, sumD6_32, sumE6_32, sumF6_32, sumG6_32, sumH6_32, sumI6_32]);
  
  useEffect(() => {
    const uploadSumB6_33 = async () => {
      await uploadData("C6_33", sumC6_33.toString());
      await uploadData("D6_33", sumD6_33.toString());
      await uploadData("E6_33", sumE6_33.toString());
      await uploadData("F6_33", sumF6_33.toString());
      await uploadData("G6_33", sumG6_33.toString());
      await uploadData("H6_33", sumH6_33.toString());
      await uploadData("I6_33", sumI6_33.toString());
    };
    if ( sumC6_33 || sumD6_33 || sumE6_33 || sumF6_33 || sumG6_33 || sumH6_33 || sumI6_33) {
      uploadSumB6_33();
    }
  }, [ sumC6_33, sumD6_33, sumE6_33, sumF6_33, sumG6_33, sumH6_33, sumI6_33,]);



//------------------------------------------------- TOTAL OF 34 -------------------------------------------------------

const uploadSumB6_34 = () => {
  const calculateValue34 = (numerator, denominator) => {
    return denominator !== 0 ? (numerator / denominator) : 0;
  };

  setSumC6_34(calculateValue34(sumC6_32, sumC6_31));
  setSumD6_34(calculateValue34(sumD6_32, sumD6_31));
  setSumE6_34(calculateValue34(sumE6_32, sumE6_31));
  setSumF6_34(calculateValue34(sumF6_32, sumF6_31));
  setSumG6_34(calculateValue34(sumG6_32, sumG6_31));
  setSumH6_34(calculateValue34(sumH6_32, sumH6_31));
  setSumI6_34(calculateValue34(sumI6_32, sumI6_31));
};

useEffect(() => {
  uploadSumB6_34();
}, [sumC6_31, sumD6_31, sumE6_31, sumF6_31, sumG6_31, sumH6_31, sumI6_31,sumC6_32, sumD6_32, sumE6_32, sumF6_32, sumG6_32, sumH6_32, sumI6_32]);

useEffect(() => {
  const uploadSumB6_34 = async () => {
    const dataToUpload = [
      { id: "B6_34", value: sumB6_34 },
      { id: "C6_34", value: sumC6_34 },
      { id: "D6_34", value: sumD6_34 },
      { id: "E6_34", value: sumE6_34 },
      { id: "F6_34", value: sumF6_34 },
      { id: "G6_34", value: sumG6_34 },
      { id: "H6_34", value: sumH6_34 },
      { id: "I6_34", value: sumI6_34 }
    ];

    for (const { id, value } of dataToUpload) {
      await uploadData(id, value.toString());
    }
  };

  if (sumC6_34 || sumD6_34 || sumE6_34 || sumF6_34 || sumG6_34 || sumH6_34 || sumI6_34) {
    uploadSumB6_34();
  }
}, [sumB6_34, sumC6_34, sumD6_34, sumE6_34, sumF6_34, sumG6_34, sumH6_34, sumI6_34]);


 //------------------------------------------------- TOTAL OF 37 -------------------------------------------------------


 const calculateValue37 = (numerator,denominator) => {
  const result = numerator - denominator
  return result > 0 ?  result: 0;
};

const updateB6_37 = () => {


 setSumC6_37(calculateValue37(sumC7_66,  sumB7_66  ));
 setSumD6_37(calculateValue37(sumD7_66,  sumC7_66  ));
 setSumE6_37(calculateValue37(sumE7_66,  sumD7_66  ));
 setSumF6_37(calculateValue37(sumF7_66,  sumE7_66  ));
 setSumG6_37(calculateValue37(sumG7_66,  sumF7_66  ));
 setSumH6_37(calculateValue37(sumH7_66,  sumG7_66  ));
 setSumI6_37(calculateValue37(sumI7_66,  sumH7_66  ));
};
useEffect(() => {
 updateB6_37();
}, [sumB7_66,sumC7_66,sumD7_66,sumE7_66,sumF7_66,sumG7_66,sumH7_66,sumI7_66]);

useEffect(() => {
 const uploadB6_37 = async () => {
  const dataToUpload = [
     { id: "C6_37", value: sumC6_37 },
     { id: "D6_37", value: sumD6_37 },
     { id: "E6_37", value: sumE6_37 },
     { id: "F6_37", value: sumF6_37 },
     { id: "G6_37", value: sumG6_37 },
     { id: "H6_37", value: sumH6_37 },
     { id: "I6_37", value: sumI6_37 }
   ];

   for (const { id, value } of dataToUpload) {
     await uploadData(id, value.toString());
   }
 };

 if ( sumC6_37 || sumD6_37 || sumE6_37 || sumF6_37 || sumG6_37 || sumH6_37 || sumI6_37) {
   uploadB6_37();
 }
}, [ sumC6_37, sumD6_37, sumE6_37, sumF6_37, sumG6_37, sumH6_37, sumI6_37]);
  

 //------------------------------------------------- TOTAL OF 38 -------------------------------------------------------


 const calculateValue38 = (inputValue1, inputValue2) => { 
  const  denominator = parseFloat(inputValue1 || 0) - parseFloat(inputValue2 || 0)
  return denominator > 0 ?  denominator: 0;
};

const updateB6_38 = () => {


 setSumC6_38(calculateValue38(inputValues["C2_36"],  inputValues["B2_36"]  ));
 setSumD6_38(calculateValue38(inputValues["D2_36"],  inputValues["C2_36"]  ));
 setSumE6_38(calculateValue38(inputValues["E2_36"],  inputValues["D2_36"]  ));
 setSumF6_38(calculateValue38(inputValues["F2_36"],  inputValues["E2_36"]  ));
 setSumG6_38(calculateValue38(inputValues["G2_36"],  inputValues["F2_36"]  ));
 setSumH6_38(calculateValue38(inputValues["H2_36"],  inputValues["G2_36"]  ));
 setSumI6_38(calculateValue38(inputValues["I2_36"],  inputValues["H2_36"]  ));
};
useEffect(() => {
 updateB6_38();
}, [inputValues]);

useEffect(() => {
 const uploadB6_38 = async () => {
  const dataToUpload = [
     { id: "C6_38", value: sumC6_38 },
     { id: "D6_38", value: sumD6_38 },
     { id: "E6_38", value: sumE6_38 },
     { id: "F6_38", value: sumF6_38 },
     { id: "G6_38", value: sumG6_38 },
     { id: "H6_38", value: sumH6_38 },
     { id: "I6_38", value: sumI6_38 }
   ];

   for (const { id, value } of dataToUpload) {
     await uploadData(id, value.toString());
   }
 };

 if ( sumC6_38 || sumD6_38 || sumE6_38 || sumF6_38 || sumG6_38 || sumH6_38 || sumI6_38) {
   uploadB6_38();
 }
}, [ sumC6_38, sumD6_38, sumE6_38, sumF6_38, sumG6_38, sumH6_38, sumI6_38]);
 

 //------------------------------------------------- TOTAL OF 39 -------------------------------------------------------


 const calculateValue39 = (numerator,denominator) => {
  const result = numerator - denominator
  return result > 0 ?  result: 0;
};

const updateB6_39 = () => {


 setSumC6_39(calculateValue39(sumC37,  sumB37  ));
 setSumD6_39(calculateValue39(sumD37,  sumC37  ));
 setSumE6_39(calculateValue39(sumE37,  sumD37  ));
 setSumF6_39(calculateValue39(sumF37,  sumE37  ));
 setSumG6_39(calculateValue39(sumG37,  sumF37  ));
 setSumH6_39(calculateValue39(sumH37,  sumG37  ));
 setSumI6_39(calculateValue39(sumI37,  sumH37  ));
};
useEffect(() => {
 updateB6_39();
}, [sumB37,sumC37,sumD37,sumE37,sumF37,sumG37,sumH37,sumI37]);

useEffect(() => {
 const uploadB6_39 = async () => {
  const dataToUpload = [
     { id: "C6_39", value: sumC6_39 },
     { id: "D6_39", value: sumD6_39 },
     { id: "E6_39", value: sumE6_39 },
     { id: "F6_39", value: sumF6_39 },
     { id: "G6_39", value: sumG6_39 },
     { id: "H6_39", value: sumH6_39 },
     { id: "I6_39", value: sumI6_39 }
   ];

   for (const { id, value } of dataToUpload) {
     await uploadData(id, value.toString());
   }
 };

 if ( sumC6_39 || sumD6_39 || sumE6_39 || sumF6_39 || sumG6_39 || sumH6_39 || sumI6_39) {
   uploadB6_39();
 }
}, [ sumC6_39, sumD6_39, sumE6_39, sumF6_39, sumG6_39, sumH6_39, sumI6_39]);
  

 //------------------------------------------------- TOTAL OF 40 -------------------------------------------------------



 const calculateValue40 = (numerator,denominator) => {
  const result = numerator - denominator
  return result < 0 ? -1 * result: 0;
};

const updateB6_40 = () => {


 setSumC6_40(calculateValue40(sumC5_14,  sumB5_14  ));
 setSumD6_40(calculateValue40(sumD5_14,  sumC5_14  ));
 setSumE6_40(calculateValue40(sumE5_14,  sumD5_14  ));
 setSumF6_40(calculateValue40(sumF5_14,  sumE5_14  ));
 setSumG6_40(calculateValue40(sumG5_14,  sumF5_14  ));
 setSumH6_40(calculateValue40(sumH5_14,  sumG5_14  ));
 setSumI6_40(calculateValue40(sumI5_14,  sumH5_14  ));
};
useEffect(() => {
 updateB6_40();
}, [sumB5_14,sumC5_14,sumD5_14,sumE5_14,sumF5_14,sumG5_14,sumH5_14,sumI5_14]);

useEffect(() => {
 const uploadB6_40 = async () => {
  const dataToUpload = [
     { id: "C6_40", value: sumC6_40 },
     { id: "D6_40", value: sumD6_40 },
     { id: "E6_40", value: sumE6_40 },
     { id: "F6_40", value: sumF6_40 },
     { id: "G6_40", value: sumG6_40 },
     { id: "H6_40", value: sumH6_40 },
     { id: "I6_40", value: sumI6_40 }
   ];

   for (const { id, value } of dataToUpload) {
     await uploadData(id, value.toString());
   }
 };

 if ( sumC6_40 || sumD6_40 || sumE6_40 || sumF6_40 || sumG6_40 || sumH6_40 || sumI6_40) {
   uploadB6_40();
 }
}, [ sumC6_40, sumD6_40, sumE6_40, sumF6_40, sumG6_40, sumH6_40, sumI6_40]);
  



 //------------------------------------------------- TOTAL OF 41 -------------------------------------------------------



 const calculateValue41 = (inputValue1, inputValue2) => { 
  const  denominator = parseFloat(inputValue1 || 0) - parseFloat(inputValue2 || 0)
  return denominator < 0 ? -1 * denominator: 0;
};

const updateB6_41 = () => {


 setSumC6_41(calculateValue41(inputValues["C2_11"],  inputValues["B2_11"]  ));
 setSumD6_41(calculateValue41(inputValues["D2_11"],  inputValues["C2_11"]  ));
 setSumE6_41(calculateValue41(inputValues["E2_11"],  inputValues["D2_11"]  ));
 setSumF6_41(calculateValue41(inputValues["F2_11"],  inputValues["E2_11"]  ));
 setSumG6_41(calculateValue41(inputValues["G2_11"],  inputValues["F2_11"]  ));
 setSumH6_41(calculateValue41(inputValues["H2_11"],  inputValues["G2_11"]  ));
 setSumI6_41(calculateValue41(inputValues["I2_11"],  inputValues["H2_11"]  ));
};
useEffect(() => {
 updateB6_41();
}, [inputValues]);

useEffect(() => {
 const uploadB6_41 = async () => {
  const dataToUpload = [
     { id: "C6_41", value: sumC6_41 },
     { id: "D6_41", value: sumD6_41 },
     { id: "E6_41", value: sumE6_41 },
     { id: "F6_41", value: sumF6_41 },
     { id: "G6_41", value: sumG6_41 },
     { id: "H6_41", value: sumH6_41 },
     { id: "I6_41", value: sumI6_41 }
   ];

   for (const { id, value } of dataToUpload) {
     await uploadData(id, value.toString());
   }
 };

 if ( sumC6_41 || sumD6_41 || sumE6_41 || sumF6_41 || sumG6_41 || sumH6_41 || sumI6_41) {
   uploadB6_41();
 }
}, [ sumC6_41, sumD6_41, sumE6_41, sumF6_41, sumG6_41, sumH6_41, sumI6_41]);
 

 //------------------------------------------------- TOTAL OF 42 -------------------------------------------------------



 const updateB6_42 = () => {
  const calculateValue42 = (current, previous) => {
    const numerator = parseFloat(current || 0) - parseFloat(previous || 0);
    const denominator = parseFloat(previous || 0);
    return denominator !== 0 ? numerator / denominator : 0;
  };

  setSumC6_42(calculateValue42(tot15.C3_15, tot15.B3_15));
  setSumD6_42(calculateValue42(tot15.D3_15, tot15.C3_15));
  setSumE6_42(calculateValue42(tot15.E3_15, tot15.D3_15));
  setSumF6_42(calculateValue42(tot15.F3_15, tot15.E3_15));
  setSumG6_42(calculateValue42(tot15.G3_15, tot15.F3_15));
  setSumH6_42(calculateValue42(tot15.H3_15, tot15.G3_15));
  setSumI6_42(calculateValue42(tot15.I3_15, tot15.H3_15));
};

useEffect(() => {
  updateB6_42();
}, [tot15]);

useEffect(() => {
  const uploadB6_42 = async () => {
    const dataToUpload = [
      { id: "C6_42", value: sumC6_42 },
      { id: "D6_42", value: sumD6_42 },
      { id: "E6_42", value: sumE6_42 },
      { id: "F6_42", value: sumF6_42 },
      { id: "G6_42", value: sumG6_42 },
      { id: "H6_42", value: sumH6_42 },
      { id: "I6_42", value: sumI6_42 }
    ];

    for (const { id, value } of dataToUpload) {
      await uploadData(id, value.toString());
    }
  };

  if ( sumC6_42 || sumD6_42 || sumE6_42 || sumF6_42 || sumG6_42 || sumH6_42 || sumI6_42) {
    uploadB6_42();
  }
}, [ sumC6_42, sumD6_42, sumE6_42, sumF6_42, sumG6_42, sumH6_42, sumI6_42]);





   //------------------------------------------------- TOTAL OF 43 -------------------------------------------------------


   const calculateValue43 = (sum37,sum38,sum39,sum40,sum41,sum42) => {
    const result = sum37+sum38+sum39+sum40+sum41+sum42;
    return result !== 0 ? result : 0;
 };

 const updateB6_43 = () => {
  
 
   setSumC6_43(calculateValue43(sumC6_37, sumC6_38, sumC6_39, sumC6_40, sumC6_41, sumC6_42 ));
   setSumD6_43(calculateValue43(sumD6_37, sumD6_38, sumD6_39, sumD6_40, sumD6_41, sumD6_42 ));
   setSumE6_43(calculateValue43(sumE6_37, sumE6_38, sumE6_39, sumE6_40, sumE6_41, sumE6_42 ));
   setSumF6_43(calculateValue43(sumF6_37, sumF6_38, sumF6_39, sumF6_40, sumF6_41, sumF6_42 ));
   setSumG6_43(calculateValue43(sumG6_37, sumG6_38, sumG6_39, sumG6_40, sumG6_41, sumG6_42 ));
   setSumH6_43(calculateValue43(sumH6_37, sumH6_38, sumH6_39, sumH6_40, sumH6_41, sumH6_42 ));
   setSumI6_43(calculateValue43(sumI6_37, sumI6_38, sumI6_39, sumI6_40, sumI6_41, sumI6_42 ));
 };
 useEffect(() => {
   updateB6_43();
 }, [sumC6_37, sumD6_37, sumE6_37, sumF6_37, sumG6_37, sumH6_37, sumI6_37,sumC6_38, sumD6_38, sumE6_38, sumF6_38, sumG6_38, sumH6_38, sumI6_38, sumC6_39, sumD6_39, sumE6_39, sumF6_39, sumG6_39, sumH6_39, sumI6_39,sumC6_40, sumD6_40, sumE6_40, sumF6_40, sumG6_40, sumH6_40, sumI6_40,sumC6_41, sumD6_41, sumE6_41, sumF6_41, sumG6_41, sumH6_41, sumI6_41,sumC6_42, sumD6_42, sumE6_42, sumF6_42, sumG6_42, sumH6_42, sumI6_42]);

 useEffect(() => {
   const uploadB6_43 = async () => {
    const dataToUpload = [
       { id: "C6_43", value: sumC6_43 },
       { id: "D6_43", value: sumD6_43 },
       { id: "E6_43", value: sumE6_43 },
       { id: "F6_43", value: sumF6_43 },
       { id: "G6_43", value: sumG6_43 },
       { id: "H6_43", value: sumH6_43 },
       { id: "I6_43", value: sumI6_43 }
     ];
 
     for (const { id, value } of dataToUpload) {
       await uploadData(id, value.toString());
     }
   };
 
   if ( sumC6_43 || sumD6_43 || sumE6_43 || sumF6_43 || sumG6_43 || sumH6_43 || sumI6_43) {
     uploadB6_43();
   }
 }, [ sumC6_43, sumD6_43, sumE6_43, sumF6_43, sumG6_43, sumH6_43, sumI6_43]);


  //------------------------------------------------- TOTAL OF 45 -------------------------------------------------------


  const calculateValue45 = (numerator,denominator) => {
    const result = numerator - denominator
    return result < 0 ? -1 * result: 0;
  };
  
  const updateB6_45 = () => {
  
  
   setSumC6_45(calculateValue45(sumC7_66,  sumB7_66  ));
   setSumD6_45(calculateValue45(sumD7_66,  sumC7_66  ));
   setSumE6_45(calculateValue45(sumE7_66,  sumD7_66  ));
   setSumF6_45(calculateValue45(sumF7_66,  sumE7_66  ));
   setSumG6_45(calculateValue45(sumG7_66,  sumF7_66  ));
   setSumH6_45(calculateValue45(sumH7_66,  sumG7_66  ));
   setSumI6_45(calculateValue45(sumI7_66,  sumH7_66  ));
  };
  useEffect(() => {
   updateB6_45();
  }, [sumB7_66,sumC7_66,sumD7_66,sumE7_66,sumF7_66,sumG7_66,sumH7_66,sumI7_66]);
  
  useEffect(() => {
   const uploadB6_45 = async () => {
    const dataToUpload = [
       { id: "C6_45", value: sumC6_45 },
       { id: "D6_45", value: sumD6_45 },
       { id: "E6_45", value: sumE6_45 },
       { id: "F6_45", value: sumF6_45 },
       { id: "G6_45", value: sumG6_45 },
       { id: "H6_45", value: sumH6_45 },
       { id: "I6_45", value: sumI6_45 }
     ];
  
     for (const { id, value } of dataToUpload) {
       await uploadData(id, value.toString());
     }
   };
  
   if ( sumC6_45 || sumD6_45 || sumE6_45 || sumF6_45 || sumG6_45 || sumH6_45 || sumI6_45) {
     uploadB6_45();
   }
  }, [ sumC6_45, sumD6_45, sumE6_45, sumF6_45, sumG6_45, sumH6_45, sumI6_45]);
    



 //------------------------------------------------- TOTAL OF 46 -------------------------------------------------------


 const calculateValue46 = (inputValue1, inputValue2) => { 
  const  denominator = parseFloat(inputValue1 || 0) - parseFloat(inputValue2 || 0)
  return denominator < 0 ? -1 * denominator: 0;
};

const updateB6_46 = () => {


 setSumC6_46(calculateValue46(inputValues["C2_36"],  inputValues["B2_36"]  ));
 setSumD6_46(calculateValue46(inputValues["D2_36"],  inputValues["C2_36"]  ));
 setSumE6_46(calculateValue46(inputValues["E2_36"],  inputValues["D2_36"]  ));
 setSumF6_46(calculateValue46(inputValues["F2_36"],  inputValues["E2_36"]  ));
 setSumG6_46(calculateValue46(inputValues["G2_36"],  inputValues["F2_36"]  ));
 setSumH6_46(calculateValue46(inputValues["H2_36"],  inputValues["G2_36"]  ));
 setSumI6_46(calculateValue46(inputValues["I2_36"],  inputValues["H2_36"]  ));
};
useEffect(() => {
 updateB6_46();
}, [inputValues]);

useEffect(() => {
 const uploadB6_46 = async () => {
  const dataToUpload = [
     { id: "C6_46", value: sumC6_46 },
     { id: "D6_46", value: sumD6_46 },
     { id: "E6_46", value: sumE6_46 },
     { id: "F6_46", value: sumF6_46 },
     { id: "G6_46", value: sumG6_46 },
     { id: "H6_46", value: sumH6_46 },
     { id: "I6_46", value: sumI6_46 }
   ];

   for (const { id, value } of dataToUpload) {
     await uploadData(id, value.toString());
   }
 };

 if ( sumC6_46 || sumD6_46 || sumE6_46 || sumF6_46 || sumG6_46 || sumH6_46 || sumI6_46) {
   uploadB6_46();
 }
}, [ sumC6_46, sumD6_46, sumE6_46, sumF6_46, sumG6_46, sumH6_46, sumI6_46]);



 //------------------------------------------------- TOTAL OF 47 -------------------------------------------------------


 const calculateValue47 = (numerator,denominator) => {
  const result = numerator - denominator
  return result < 0 ? -1 * result: 0;
};

const updateB6_47 = () => {


 setSumC6_47(calculateValue47(sumC37,  sumB37  ));
 setSumD6_47(calculateValue47(sumD37,  sumC37  ));
 setSumE6_47(calculateValue47(sumE37,  sumD37  ));
 setSumF6_47(calculateValue47(sumF37,  sumE37  ));
 setSumG6_47(calculateValue47(sumG37,  sumF37  ));
 setSumH6_47(calculateValue47(sumH37,  sumG37  ));
 setSumI6_47(calculateValue47(sumI37,  sumH37  ));
};
useEffect(() => {
 updateB6_47();
}, [sumB37,sumC37,sumD37,sumE37,sumF37,sumG37,sumH37,sumI37]);

useEffect(() => {
 const uploadB6_47 = async () => {
  const dataToUpload = [
     { id: "C6_47", value: sumC6_47 },
     { id: "D6_47", value: sumD6_47 },
     { id: "E6_47", value: sumE6_47 },
     { id: "F6_47", value: sumF6_47 },
     { id: "G6_47", value: sumG6_47 },
     { id: "H6_47", value: sumH6_47 },
     { id: "I6_47", value: sumI6_47 }
   ];

   for (const { id, value } of dataToUpload) {
     await uploadData(id, value.toString());
   }
 };

 if ( sumC6_47 || sumD6_47 || sumE6_47 || sumF6_47 || sumG6_47 || sumH6_47 || sumI6_47) {
   uploadB6_47();
 }
}, [ sumC6_47, sumD6_47, sumE6_47, sumF6_47, sumG6_47, sumH6_47, sumI6_47]);
  



 //------------------------------------------------- TOTAL OF 48 -------------------------------------------------------



 const calculateValue48 = (numerator,denominator) => {
  const result = numerator - denominator
  return result > 0 ?  result: 0;
};

const updateB6_48 = () => {


 setSumC6_48(calculateValue48(sumC5_14,  sumB5_14  ));
 setSumD6_48(calculateValue48(sumD5_14,  sumC5_14  ));
 setSumE6_48(calculateValue48(sumE5_14,  sumD5_14  ));
 setSumF6_48(calculateValue48(sumF5_14,  sumE5_14  ));
 setSumG6_48(calculateValue48(sumG5_14,  sumF5_14  ));
 setSumH6_48(calculateValue48(sumH5_14,  sumG5_14  ));
 setSumI6_48(calculateValue48(sumI5_14,  sumH5_14  ));
};
useEffect(() => {
 updateB6_48();
}, [sumB5_14,sumC5_14,sumD5_14,sumE5_14,sumF5_14,sumG5_14,sumH5_14,sumI5_14]);

useEffect(() => {
 const uploadB6_48 = async () => {
  const dataToUpload = [
     { id: "C6_48", value: sumC6_48 },
     { id: "D6_48", value: sumD6_48 },
     { id: "E6_48", value: sumE6_48 },
     { id: "F6_48", value: sumF6_48 },
     { id: "G6_48", value: sumG6_48 },
     { id: "H6_48", value: sumH6_48 },
     { id: "I6_48", value: sumI6_48 }
   ];

   for (const { id, value } of dataToUpload) {
     await uploadData(id, value.toString());
   }
 };

 if ( sumC6_48 || sumD6_48 || sumE6_48 || sumF6_48 || sumG6_48 || sumH6_48 || sumI6_48) {
   uploadB6_48();
 }
}, [ sumC6_48, sumD6_48, sumE6_48, sumF6_48, sumG6_48, sumH6_48, sumI6_48]);
  



 //------------------------------------------------- TOTAL OF 49 -------------------------------------------------------



 const calculateValue49 = (inputValue1, inputValue2) => { 
  const  denominator = parseFloat(inputValue1 || 0) - parseFloat(inputValue2 || 0)
  return denominator > 0 ?  denominator: 0;
};

const updateB6_49 = () => {


 setSumC6_49(calculateValue49(inputValues["C2_11"],  inputValues["B2_11"]  ));
 setSumD6_49(calculateValue49(inputValues["D2_11"],  inputValues["C2_11"]  ));
 setSumE6_49(calculateValue49(inputValues["E2_11"],  inputValues["D2_11"]  ));
 setSumF6_49(calculateValue49(inputValues["F2_11"],  inputValues["E2_11"]  ));
 setSumG6_49(calculateValue49(inputValues["G2_11"],  inputValues["F2_11"]  ));
 setSumH6_49(calculateValue49(inputValues["H2_11"],  inputValues["G2_11"]  ));
 setSumI6_49(calculateValue49(inputValues["I2_11"],  inputValues["H2_11"]  ));
};
useEffect(() => {
 updateB6_49();
}, [inputValues]);

useEffect(() => {
 const uploadB6_49 = async () => {
  const dataToUpload = [
     { id: "C6_49", value: sumC6_49 },
     { id: "D6_49", value: sumD6_49 },
     { id: "E6_49", value: sumE6_49 },
     { id: "F6_49", value: sumF6_49 },
     { id: "G6_49", value: sumG6_49 },
     { id: "H6_49", value: sumH6_49 },
     { id: "I6_49", value: sumI6_49 }
   ];

   for (const { id, value } of dataToUpload) {
     await uploadData(id, value.toString());
   }
 };

 if ( sumC6_49 || sumD6_49 || sumE6_49 || sumF6_49 || sumG6_49 || sumH6_49 || sumI6_49) {
   uploadB6_49();
 }
}, [ sumC6_49, sumD6_49, sumE6_49, sumF6_49, sumG6_49, sumH6_49, sumI6_49]);
 


 //------------------------------------------------- TOTAL OF 50 -------------------------------------------------------



 const updateB6_50 = () => {
  const calculateValue50 = (current, previous) => {
    const numerator = parseFloat(current || 0) - parseFloat(previous || 0);
    const denominator = parseFloat(previous || 0);
    return denominator !== 0 ? numerator / denominator : 0;
  };

  setSumC6_50(calculateValue50(tot15.C3_15, tot15.B3_15));
  setSumD6_50(calculateValue50(tot15.D3_15, tot15.C3_15));
  setSumE6_50(calculateValue50(tot15.E3_15, tot15.D3_15));
  setSumF6_50(calculateValue50(tot15.F3_15, tot15.E3_15));
  setSumG6_50(calculateValue50(tot15.G3_15, tot15.F3_15));
  setSumH6_50(calculateValue50(tot15.H3_15, tot15.G3_15));
  setSumI6_50(calculateValue50(tot15.I3_15, tot15.H3_15));
};

useEffect(() => {
  updateB6_50();
}, [tot15]);

useEffect(() => {
  const uploadB6_50 = async () => {
    const dataToUpload = [
      { id: "C6_50", value: sumC6_50 },
      { id: "D6_50", value: sumD6_50 },
      { id: "E6_50", value: sumE6_50 },
      { id: "F6_50", value: sumF6_50 },
      { id: "G6_50", value: sumG6_50 },
      { id: "H6_50", value: sumH6_50 },
      { id: "I6_50", value: sumI6_50 }
    ];

    for (const { id, value } of dataToUpload) {
      await uploadData(id, value.toString());
    }
  };

  if ( sumC6_50 || sumD6_50 || sumE6_50 || sumF6_50 || sumG6_50 || sumH6_50 || sumI6_50) {
    uploadB6_50();
  }
}, [ sumC6_50, sumD6_50, sumE6_50, sumF6_50, sumG6_50, sumH6_50, sumI6_50]);




   //------------------------------------------------- TOTAL OF 51 -------------------------------------------------------


   const calculateValue51 = (sum45,sum46,sum47,sum48,sum49,sum50) => {
    const result = sum45+sum46+sum47+sum48+sum49+sum50;
    return result !== 0 ? result : 0;
 };

 const updateB6_51 = () => {
  
 
   setSumC6_51(calculateValue51(sumC6_45, sumC6_46, sumC6_47, sumC6_48, sumC6_49, sumC6_50 ));
   setSumD6_51(calculateValue51(sumD6_45, sumD6_46, sumD6_47, sumD6_48, sumD6_49, sumD6_50 ));
   setSumE6_51(calculateValue51(sumE6_45, sumE6_46, sumE6_47, sumE6_48, sumE6_49, sumE6_50 ));
   setSumF6_51(calculateValue51(sumF6_45, sumF6_46, sumF6_47, sumF6_48, sumF6_49, sumF6_50 ));
   setSumG6_51(calculateValue51(sumG6_45, sumG6_46, sumG6_47, sumG6_48, sumG6_49, sumG6_50 ));
   setSumH6_51(calculateValue51(sumH6_45, sumH6_46, sumH6_47, sumH6_48, sumH6_49, sumH6_50 ));
   setSumI6_51(calculateValue51(sumI6_45, sumI6_46, sumI6_47, sumI6_48, sumI6_49, sumI6_50 ));
 };
 useEffect(() => {
   updateB6_51();
 }, [sumC6_45, sumD6_45, sumE6_45, sumF6_45, sumG6_45, sumH6_45, sumI6_45,sumC6_46, sumD6_46, sumE6_46, sumF6_46, sumG6_46, sumH6_46, sumI6_46, sumC6_47, sumD6_47, sumE6_47, sumF6_47, sumG6_47, sumH6_47, sumI6_47,sumC6_48, sumD6_48, sumE6_48, sumF6_48, sumG6_48, sumH6_48, sumI6_48,sumC6_49, sumD6_49, sumE6_49, sumF6_49, sumG6_49, sumH6_49, sumI6_49,sumC6_50, sumD6_50, sumE6_50, sumF6_50, sumG6_50, sumH6_50, sumI6_50]);

 useEffect(() => {
   const uploadB6_51 = async () => {
    const dataToUpload = [
       { id: "C6_51", value: sumC6_51 },
       { id: "D6_51", value: sumD6_51 },
       { id: "E6_51", value: sumE6_51 },
       { id: "F6_51", value: sumF6_51 },
       { id: "G6_51", value: sumG6_51 },
       { id: "H6_51", value: sumH6_51 },
       { id: "I6_51", value: sumI6_51 }
     ];
 
     for (const { id, value } of dataToUpload) {
       await uploadData(id, value.toString());
     }
   };
 
   if ( sumC6_51 || sumD6_51 || sumE6_51 || sumF6_51 || sumG6_51 || sumH6_51 || sumI6_51) {
     uploadB6_51();
   }
 }, [ sumC6_51, sumD6_51, sumE6_51, sumF6_51, sumG6_51, sumH6_51, sumI6_51]);









//------------------------------------------------- TOTAL OF 53 -------------------------------------------------------


const uploadSumB6_53 = () => {
  setSumC6_53( parseFloat(sumB4_25 || 0) );
  setSumD6_53( parseFloat(sumC4_25 || 0) );
  setSumE6_53( parseFloat(sumD4_25 || 0) );
  setSumF6_53( parseFloat(sumE4_25 || 0) ); 
  setSumG6_53( parseFloat(sumF4_25 || 0) );
  setSumH6_53( parseFloat(sumG4_25 || 0) );
  setSumI6_53( parseFloat(sumH4_25 || 0) );
};

useEffect(() => {
  uploadSumB6_53();
}, [inputValues,sumC4_25, sumD4_25, sumE4_25, sumF4_25, sumG4_25, sumH4_25, sumI4_25]);

useEffect(() => {
  const uploadSumB6_53 = async () => {
    await uploadData("C6_53", sumC6_53.toString());
    await uploadData("D6_53", sumD6_53.toString());
    await uploadData("E6_53", sumE6_53.toString());
    await uploadData("F6_53", sumF6_53.toString());
    await uploadData("G6_53", sumG6_53.toString());
    await uploadData("H6_53", sumH6_53.toString());
    await uploadData("I6_53", sumI6_53.toString());
  };
  if ( sumC6_53 || sumD6_53 || sumE6_53 || sumF6_53 || sumG6_53 || sumH6_53 || sumI6_53) {
    uploadSumB6_53();
  }
}, [ sumC6_53, sumD6_53, sumE6_53, sumF6_53, sumG6_53, sumH6_53, sumI6_53]);








//------------------------------------------------- TOTAL OF 54 -------------------------------------------------------


const uploadSumB6_54 = () => {
  setSumC6_54( parseFloat(sumC4_26 || 0) );
  setSumD6_54( parseFloat(sumD4_26 || 0) );
  setSumE6_54( parseFloat(sumE4_26 || 0) );
  setSumF6_54( parseFloat(sumF4_26 || 0) ); 
  setSumG6_54( parseFloat(sumG4_26 || 0) );
  setSumH6_54( parseFloat(sumH4_26 || 0) );
  setSumI6_54( parseFloat(sumI4_26 || 0) );
};

useEffect(() => {
  uploadSumB6_54();
}, [inputValues,sumC4_26, sumD4_26, sumE4_26, sumF4_26, sumG4_26, sumH4_26, sumI4_26]);

useEffect(() => {
  const uploadSumB6_54 = async () => {
    await uploadData("C6_54", sumC6_54.toString());
    await uploadData("D6_54", sumD6_54.toString());
    await uploadData("E6_54", sumE6_54.toString());
    await uploadData("F6_54", sumF6_54.toString());
    await uploadData("G6_54", sumG6_54.toString());
    await uploadData("H6_54", sumH6_54.toString());
    await uploadData("I6_54", sumI6_54.toString());
  };
  if ( sumC6_54 || sumD6_54 || sumE6_54 || sumF6_54 || sumG6_54 || sumH6_54 || sumI6_54) {
    uploadSumB6_54();
  }
}, [ sumC6_54, sumD6_54, sumE6_54, sumF6_54, sumG6_54, sumH6_54, sumI6_54]);




//------------------------------------------------- TOTAL OF 55 -------------------------------------------------------


const uploadSumB6_55 = () => {
  setSumC6_55( parseFloat(sumC6_53 || 0)  + parseFloat(sumC6_54 || 0) );
  setSumD6_55( parseFloat(sumD6_53 || 0)  + parseFloat(sumD6_54 || 0) );
  setSumE6_55( parseFloat(sumE6_53 || 0)  + parseFloat(sumE6_54 || 0) );
  setSumF6_55( parseFloat(sumF6_53 || 0)  + parseFloat(sumF6_54 || 0) ); 
  setSumG6_55( parseFloat(sumG6_53 || 0)  + parseFloat(sumG6_54 || 0) );
  setSumH6_55( parseFloat(sumH6_53 || 0)  + parseFloat(sumH6_54 || 0) );
  setSumI6_55( parseFloat(sumI6_53 || 0)  + parseFloat(sumI6_54 || 0) );
};

useEffect(() => {
  uploadSumB6_55();
}, [sumC6_54, sumD6_54, sumE6_54, sumF6_54, sumG6_54, sumH6_54, sumI6_54,sumC6_53, sumD6_53, sumE6_53, sumF6_53, sumG6_53, sumH6_53, sumI6_53]);

useEffect(() => {
  const uploadSumB6_55 = async () => {
    await uploadData("C6_55", sumC6_55.toString());
    await uploadData("D6_55", sumD6_55.toString());
    await uploadData("E6_55", sumE6_55.toString());
    await uploadData("F6_55", sumF6_55.toString());
    await uploadData("G6_55", sumG6_55.toString());
    await uploadData("H6_55", sumH6_55.toString());
    await uploadData("I6_55", sumI6_55.toString());
  };
  if ( sumC6_55 || sumD6_55 || sumE6_55 || sumF6_55 || sumG6_55 || sumH6_55 || sumI6_55) {
    uploadSumB6_55();
  }
}, [ sumC6_55, sumD6_55, sumE6_55, sumF6_55, sumG6_55, sumH6_55, sumI6_55]);




//------------------------------------------------- TOTAL OF 57 -------------------------------------------------------


const uploadSumB6_57 = () => {
  setSumC6_57( parseFloat(sumC6_13 || 0) );
  setSumD6_57( parseFloat(sumD6_13 || 0) );
  setSumE6_57( parseFloat(sumE6_13 || 0) );
  setSumF6_57( parseFloat(sumF6_13 || 0) ); 
  setSumG6_57( parseFloat(sumG6_13 || 0) );
  setSumH6_57( parseFloat(sumH6_13 || 0) );
  setSumI6_57( parseFloat(sumI6_13 || 0) );
};

useEffect(() => {
  uploadSumB6_57();
}, [inputValues,sumC6_13, sumD6_13, sumE6_13, sumF6_13, sumG6_13, sumH6_13, sumI6_13]);

useEffect(() => {
  const uploadSumB6_57 = async () => {
    await uploadData("C6_57", sumC6_57.toString());
    await uploadData("D6_57", sumD6_57.toString());
    await uploadData("E6_57", sumE6_57.toString());
    await uploadData("F6_57", sumF6_57.toString());
    await uploadData("G6_57", sumG6_57.toString());
    await uploadData("H6_57", sumH6_57.toString());
    await uploadData("I6_57", sumI6_57.toString());
  };
  if ( sumC6_57 || sumD6_57 || sumE6_57 || sumF6_57 || sumG6_57 || sumH6_57 || sumI6_57) {
    uploadSumB6_57();
  }
}, [ sumC6_57, sumD6_57, sumE6_57, sumF6_57, sumG6_57, sumH6_57, sumI6_57]);


//------------------------------------------------- TOTAL OF 58 -------------------------------------------------------


const uploadSumB6_58 = () => {
  setSumC6_58( parseFloat(sumC6_43 || 0) );
  setSumD6_58( parseFloat(sumD6_43 || 0) );
  setSumE6_58( parseFloat(sumE6_43 || 0) );
  setSumF6_58( parseFloat(sumF6_43 || 0) ); 
  setSumG6_58( parseFloat(sumG6_43 || 0) );
  setSumH6_58( parseFloat(sumH6_43 || 0) );
  setSumI6_58( parseFloat(sumI6_43 || 0) );
};

useEffect(() => {
  uploadSumB6_58();
}, [inputValues,sumC6_43, sumD6_43, sumE6_43, sumF6_43, sumG6_43, sumH6_43, sumI6_43]);

useEffect(() => {
  const uploadSumB6_58 = async () => {
    await uploadData("C6_58", sumC6_58.toString());
    await uploadData("D6_58", sumD6_58.toString());
    await uploadData("E6_58", sumE6_58.toString());
    await uploadData("F6_58", sumF6_58.toString());
    await uploadData("G6_58", sumG6_58.toString());
    await uploadData("H6_58", sumH6_58.toString());
    await uploadData("I6_58", sumI6_58.toString());
  };
  if ( sumC6_58 || sumD6_58 || sumE6_58 || sumF6_58 || sumG6_58 || sumH6_58 || sumI6_58) {
    uploadSumB6_58();
  }
}, [ sumC6_58, sumD6_58, sumE6_58, sumF6_58, sumG6_58, sumH6_58, sumI6_58]);




//------------------------------------------------- TOTAL OF 59 -------------------------------------------------------


const uploadSumB6_59 = () => {
  setSumC6_59( parseFloat(sumC6_57 || 0)  + parseFloat(sumC6_58 || 0) );
  setSumD6_59( parseFloat(sumD6_57 || 0)  + parseFloat(sumD6_58 || 0) );
  setSumE6_59( parseFloat(sumE6_57 || 0)  + parseFloat(sumE6_58 || 0) );
  setSumF6_59( parseFloat(sumF6_57 || 0)  + parseFloat(sumF6_58 || 0) ); 
  setSumG6_59( parseFloat(sumG6_57 || 0)  + parseFloat(sumG6_58 || 0) );
  setSumH6_59( parseFloat(sumH6_57 || 0)  + parseFloat(sumH6_58 || 0) );
  setSumI6_59( parseFloat(sumI6_57 || 0)  + parseFloat(sumI6_58 || 0) );
};

useEffect(() => {
  uploadSumB6_59();
}, [sumC6_58, sumD6_58, sumE6_58, sumF6_58, sumG6_58, sumH6_58, sumI6_58,sumC6_57, sumD6_57, sumE6_57, sumF6_57, sumG6_57, sumH6_57, sumI6_57]);

useEffect(() => {
  const uploadSumB6_59 = async () => {
    await uploadData("C6_59", sumC6_59.toString());
    await uploadData("D6_59", sumD6_59.toString());
    await uploadData("E6_59", sumE6_59.toString());
    await uploadData("F6_59", sumF6_59.toString());
    await uploadData("G6_59", sumG6_59.toString());
    await uploadData("H6_59", sumH6_59.toString());
    await uploadData("I6_59", sumI6_59.toString());
  };
  if ( sumC6_59 || sumD6_59 || sumE6_59 || sumF6_59 || sumG6_59 || sumH6_59 || sumI6_59) {
    uploadSumB6_59();
  }
}, [ sumC6_59, sumD6_59, sumE6_59, sumF6_59, sumG6_59, sumH6_59, sumI6_59]);




//------------------------------------------------- TOTAL OF 61 -------------------------------------------------------


const uploadSumB6_61 = () => {
  setSumC6_61( parseFloat(sumC6_22 || 0) );
  setSumD6_61( parseFloat(sumD6_22 || 0) );
  setSumE6_61( parseFloat(sumE6_22 || 0) );
  setSumF6_61( parseFloat(sumF6_22 || 0) ); 
  setSumG6_61( parseFloat(sumG6_22 || 0) );
  setSumH6_61( parseFloat(sumH6_22 || 0) );
  setSumI6_61( parseFloat(sumI6_22 || 0) );
};

useEffect(() => {
  uploadSumB6_61();
}, [inputValues,sumC6_22, sumD6_22, sumE6_22, sumF6_22, sumG6_22, sumH6_22, sumI6_22]);

useEffect(() => {
  const uploadSumB6_61 = async () => {
    await uploadData("C6_61", sumC6_61.toString());
    await uploadData("D6_61", sumD6_61.toString());
    await uploadData("E6_61", sumE6_61.toString());
    await uploadData("F6_61", sumF6_61.toString());
    await uploadData("G6_61", sumG6_61.toString());
    await uploadData("H6_61", sumH6_61.toString());
    await uploadData("I6_61", sumI6_61.toString());
  };
  if ( sumC6_61 || sumD6_61 || sumE6_61 || sumF6_61 || sumG6_61 || sumH6_61 || sumI6_61) {
    uploadSumB6_61();
  }
}, [ sumC6_61, sumD6_61, sumE6_61, sumF6_61, sumG6_61, sumH6_61, sumI6_61]);


//------------------------------------------------- TOTAL OF 62 -------------------------------------------------------


const uploadSumB6_62 = () => {
  setSumC6_62( parseFloat(sumC6_51 || 0) );
  setSumD6_62( parseFloat(sumD6_51 || 0) );
  setSumE6_62( parseFloat(sumE6_51 || 0) );
  setSumF6_62( parseFloat(sumF6_51 || 0) ); 
  setSumG6_62( parseFloat(sumG6_51 || 0) );
  setSumH6_62( parseFloat(sumH6_51 || 0) );
  setSumI6_62( parseFloat(sumI6_51 || 0) );
};

useEffect(() => {
  uploadSumB6_62();
}, [inputValues,sumC6_51, sumD6_51, sumE6_51, sumF6_51, sumG6_51, sumH6_51, sumI6_51]);

useEffect(() => {
  const uploadSumB6_62 = async () => {
    await uploadData("C6_62", sumC6_62.toString());
    await uploadData("D6_62", sumD6_62.toString());
    await uploadData("E6_62", sumE6_62.toString());
    await uploadData("F6_62", sumF6_62.toString());
    await uploadData("G6_62", sumG6_62.toString());
    await uploadData("H6_62", sumH6_62.toString());
    await uploadData("I6_62", sumI6_62.toString());
  };
  if ( sumC6_62 || sumD6_62 || sumE6_62 || sumF6_62 || sumG6_62 || sumH6_62 || sumI6_62) {
    uploadSumB6_62();
  }
}, [ sumC6_62, sumD6_62, sumE6_62, sumF6_62, sumG6_62, sumH6_62, sumI6_62]);



//------------------------------------------------- TOTAL OF 63 -------------------------------------------------------


const uploadSumB6_63 = () => {
  setSumC6_59( parseFloat(sumC6_61 || 0)  + parseFloat(sumC6_62 || 0) );
  setSumD6_59( parseFloat(sumD6_61 || 0)  + parseFloat(sumD6_62 || 0) );
  setSumE6_59( parseFloat(sumE6_61 || 0)  + parseFloat(sumE6_62 || 0) );
  setSumF6_59( parseFloat(sumF6_61 || 0)  + parseFloat(sumF6_62 || 0) ); 
  setSumG6_59( parseFloat(sumG6_61 || 0)  + parseFloat(sumG6_62 || 0) );
  setSumH6_59( parseFloat(sumH6_61 || 0)  + parseFloat(sumH6_62 || 0) );
  setSumI6_59( parseFloat(sumI6_61 || 0)  + parseFloat(sumI6_62 || 0) );
};

useEffect(() => {
  uploadSumB6_63();
}, [sumC6_62, sumD6_62, sumE6_62, sumF6_62, sumG6_62, sumH6_62, sumI6_62,sumC6_61, sumD6_61, sumE6_61, sumF6_61, sumG6_61, sumH6_61, sumI6_61]);

useEffect(() => {
  const uploadSumB6_63 = async () => {
    await uploadData("C6_63", sumC6_63.toString());
    await uploadData("D6_63", sumD6_63.toString());
    await uploadData("E6_63", sumE6_63.toString());
    await uploadData("F6_63", sumF6_63.toString());
    await uploadData("G6_63", sumG6_63.toString());
    await uploadData("H6_63", sumH6_63.toString());
    await uploadData("I6_63", sumI6_63.toString());
  };
  if ( sumC6_63 || sumD6_63 || sumE6_63 || sumF6_63 || sumG6_63 || sumH6_63 || sumI6_63) {
    uploadSumB6_63();
  }
}, [ sumC6_63, sumD6_63, sumE6_63, sumF6_63, sumG6_63, sumH6_63, sumI6_63]);

//------------------------------------------------- TOTAL OF 65 -------------------------------------------------------


const uploadSumB6_65 = () => {
  setSumC6_59( parseFloat(sumC6_59 || 0)  - parseFloat(sumC6_63 || 0) );
  setSumD6_59( parseFloat(sumD6_59 || 0)  - parseFloat(sumD6_63 || 0) );
  setSumE6_59( parseFloat(sumE6_59 || 0)  - parseFloat(sumE6_63 || 0) );
  setSumF6_59( parseFloat(sumF6_59 || 0)  - parseFloat(sumF6_63 || 0) ); 
  setSumG6_59( parseFloat(sumG6_59 || 0)  - parseFloat(sumG6_63 || 0) );
  setSumH6_59( parseFloat(sumH6_59 || 0)  - parseFloat(sumH6_63 || 0) );
  setSumI6_59( parseFloat(sumI6_59 || 0)  - parseFloat(sumI6_63 || 0) );
};

useEffect(() => {
  uploadSumB6_65();
}, [sumC6_63, sumD6_63, sumE6_63, sumF6_63, sumG6_63, sumH6_63, sumI6_63 ,sumC6_59, sumD6_59, sumE6_59, sumF6_59, sumG6_59, sumH6_59, sumI6_59]);

useEffect(() => {
  const uploadSumB6_65 = async () => {
    await uploadData("C6_65", sumC6_65.toString());
    await uploadData("D6_65", sumD6_65.toString());
    await uploadData("E6_65", sumE6_65.toString());
    await uploadData("F6_65", sumF6_65.toString());
    await uploadData("G6_65", sumG6_65.toString());
    await uploadData("H6_65", sumH6_65.toString());
    await uploadData("I6_65", sumI6_65.toString());
  };
  if ( sumC6_65 || sumD6_65 || sumE6_65 || sumF6_65 || sumG6_65 || sumH6_65 || sumI6_65) {
    uploadSumB6_65();
  }
}, [ sumC6_65, sumD6_65, sumE6_65, sumF6_65, sumG6_65, sumH6_65, sumI6_65]);






  //------------------------------------------------- TOTAL OF 67 -------------------------------------------------------


  const uploadSumB6_67 = () => {
    setSumB6_67 ( parseFloat(inputValues["B2_40"] || 0) + parseFloat(inputValues["B2_41"] || 0 ) +  parseFloat(inputValues["B2_42"] || 0));
    setSumC6_67 ( parseFloat(inputValues["C2_40"] || 0) + parseFloat(inputValues["C2_41"] || 0 ) +  parseFloat(inputValues["C2_42"] || 0));
    setSumD6_67 ( parseFloat(inputValues["D2_40"] || 0) + parseFloat(inputValues["D2_41"] || 0 ) +  parseFloat(inputValues["D2_42"] || 0));
    setSumE6_67 ( parseFloat(inputValues["E2_40"] || 0) + parseFloat(inputValues["E2_41"] || 0 ) +  parseFloat(inputValues["E2_42"] || 0));
    setSumF6_67 ( parseFloat(inputValues["F2_40"] || 0) + parseFloat(inputValues["F2_41"] || 0 ) +  parseFloat(inputValues["F2_42"] || 0)); 
    setSumG6_67 ( parseFloat(inputValues["G2_40"] || 0) + parseFloat(inputValues["G2_41"] || 0 ) +  parseFloat(inputValues["G2_42"] || 0));
    setSumH6_67 ( parseFloat(inputValues["H2_40"] || 0) + parseFloat(inputValues["H2_41"] || 0 ) +  parseFloat(inputValues["H2_42"] || 0));
    setSumI6_67 ( parseFloat(inputValues["I2_40"] || 0) + parseFloat(inputValues["I2_41"] || 0 ) +  parseFloat(inputValues["I2_42"] || 0));
  };
  
  useEffect(() => {
    uploadSumB6_67();
  }, [inputValues]);
  
  useEffect(() => {
    const uploadSumB6_67 = async () => {
      await uploadData("B6_67", sumB6_67.toString());
      await uploadData("C6_67", sumC6_67.toString());
      await uploadData("D6_67", sumD6_67.toString());
      await uploadData("E6_67", sumE6_67.toString());
      await uploadData("F6_67", sumF6_67.toString());
      await uploadData("G6_67", sumG6_67.toString());
      await uploadData("H6_67", sumH6_67.toString());
      await uploadData("I6_67", sumI6_67.toString());
    };
    if ( sumB6_67,sumC6_67 || sumD6_67 || sumE6_67 || sumF6_67 || sumG6_67 || sumH6_67 || sumI6_67) {
      uploadSumB6_67();
    }
  }, [ sumB6_67,sumC6_67, sumD6_67, sumE6_67, sumF6_67, sumG6_67, sumH6_67, sumI6_67]);
  


  //------------------------------------------------- TOTAL OF 68 -------------------------------------------------------


  const updateB6_68 = () => {
    const calculateValue68 = (numerator, denominator) => {
      const result = numerator - denominator
      return result > 0 ? result : 0;
    };
  
    setSumC6_68(calculateValue68(sumD6_67, sumC6_67));
    setSumD6_68(calculateValue68(sumE6_67, sumD6_67));
    setSumE6_68(calculateValue68(sumF6_67, sumE6_67));
    setSumF6_68(calculateValue68(sumG6_67, sumF6_67));
    setSumG6_68(calculateValue68(sumH6_67, sumG6_67));
    setSumH6_68(calculateValue68(sumI6_67, sumH6_67));
    setSumI6_68(calculateValue68(sumI6_67));
  };
  
  useEffect(() => {
    updateB6_68();
  }, [sumC6_67, sumD6_67, sumE6_67, sumF6_67, sumG6_67, sumH6_67, sumI6_67]);  
  
  useEffect(() => {
    const uploadB6_68 = async () => {
      const dataToUpload = [
        { id: "C6_68", value: sumC6_68 },
        { id: "D6_68", value: sumD6_68 },
        { id: "E6_68", value: sumE6_68 },
        { id: "F6_68", value: sumF6_68 },
        { id: "G6_68", value: sumG6_68 },
        { id: "H6_68", value: sumH6_68 },
        { id: "I6_68", value: sumI6_68 }
      ];
  
      for (const { id, value } of dataToUpload) {
        await uploadData(id, value.toString());
      }
    };
  
    if ( sumC6_68 || sumD6_68 || sumE6_68 || sumF6_68 || sumG6_68 || sumH6_68 || sumI6_68) {
      uploadB6_68();
    }
  }, [ sumC6_68, sumD6_68, sumE6_68, sumF6_68, sumG6_68, sumH6_68, sumI6_68]);
  

 //------------------------------------------------- TOTAL OF 69 -------------------------------------------------------




 const updateB6_69 = () => {
  const calculateValue69 = (numerator, denominator) => {
    const result = numerator - denominator
    return result < 0 ? -1 * result : 0;
  };
  setSumB6_69(calculateValue69(sumC6_67, sumB6_67));
  setSumC6_69(calculateValue69(sumD6_67, sumC6_67));
  setSumD6_69(calculateValue69(sumE6_67, sumD6_67));
  setSumE6_69(calculateValue69(sumF6_67, sumE6_67));
  setSumF6_69(calculateValue69(sumG6_67, sumF6_67));
  setSumG6_69(calculateValue69(sumH6_67, sumG6_67));
  setSumH6_69(calculateValue69(sumI6_67, sumH6_67));
  setSumI6_69(calculateValue69(sumI6_67));
};

useEffect(() => {
  updateB6_69();
}, [sumB6_67,sumC6_67, sumD6_67, sumE6_67, sumF6_67, sumG6_67, sumH6_67, sumI6_67]);  

useEffect(() => {
  const uploadB6_69 = async () => {
    const dataToUpload = [
      { id: "C6_69", value: sumC6_69 },
      { id: "D6_69", value: sumD6_69 },
      { id: "E6_69", value: sumE6_69 },
      { id: "F6_69", value: sumF6_69 },
      { id: "G6_69", value: sumG6_69 },
      { id: "H6_69", value: sumH6_69 },
      { id: "I6_69", value: sumI6_69 }
    ];

    for (const { id, value } of dataToUpload) {
      await uploadData(id, value.toString());
    }
  };

  if ( sumC6_69 || sumD6_69 || sumE6_69 || sumF6_69 || sumG6_69 || sumH6_69 || sumI6_69) {
    uploadB6_69();
  }
}, [ sumC6_69, sumD6_69, sumE6_69, sumF6_69, sumG6_69, sumH6_69, sumI6_69]);












const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      
      const offsetTop = document.querySelector('.fixed-top').offsetTop;

      
      if (window.pageYOffset > offsetTop) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

   
    window.addEventListener('scroll', handleScroll);

   
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);











  return (
<div >
  <Navbarr/>
  
  <div className="bg-white rounded-3xl px-10 py-7" style={{ boxShadow: "0 -4px 8px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.2)" }}>
        <div className="mt-10   rounded-3xl container-fluid border-1 border-black d-flex justify-content-center div_1">
          <h2 className="p-2 font-bold text-xl">{username}</h2>
      </div>

      <div className="container-fluid border-1 border-black mt-3">
        <div className="row">
          <div className="col-lg-4 border-end border-black d-flex justify-content-center">
            <h6>COMPARATIVE RATIOS</h6>
          </div>
          <div className="col-lg-8 border-start d-flex justify-content-center">
            <h6>For the year ended/ending (Rs. in Lacs)</h6>
          </div>
        </div>
      </div>

      <div  className={`fixed-top   ${isFixed ? 'fixed-top-active px-10' : ''}`}>


<div className={' container-fluid border-1 border-black '}>
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
            <h6 >Audited</h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <h6 >Audited</h6>
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
            <h6 >Projected</h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <h6 >Projected</h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <h6 >Projected</h6>
          </div>
        </div>
      </div>

    
      </div>

    
{/*---------------------------------------- SOURCES ------------------------------------------------------*/}

<div className="container-fluid border-1 border-black mt-3">
        <div className="row" style={{backgroundColor:"rgb(224, 231, 231)"}}>
          <div className="col-lg-4 border-end border-black d-flex justify-content-center">
            <h5 >SOURCES: </h5>
          </div>
        </div>
    </div>
    
<div className="container-fluid border-1 border-black mt-3">
<div className="row">
    <div className="col-lg-4 border-end border-black d-flex justify-content-center">
      <h6>Net Profit after tax
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="B6_5"
          value={inputValues.B6_5}
          onChange={changeData}  
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="C6_5"  
          value={sumC6_5}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           aria-label="First name" 
          name="D6_5"  
          value={sumD6_5}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="E6_5"  
          value={sumE6_5}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="F6_5" 
          value={sumF6_5}
          onChange={changeData}

          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="G6_5"  
          value={sumG6_5}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="H6_5"  
          value={sumH6_5}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="I6_5"  
          value={sumI6_5}
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
      <h6>Depreciation
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="B6_6"
          value={inputValues.B6_6}
          onChange={changeData}  
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="C6_6"  
          value={sumC6_6}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           aria-label="First name" 
          name="D6_6"  
          value={sumD6_6}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="E6_6"  
          value={sumE6_6}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="F6_6" 
          value={sumF6_6}
          onChange={changeData}

          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="G6_6"  
          value={sumG6_6}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="H6_6"  
          value={sumH6_6}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="I6_6"  
          value={sumI6_6}
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
      <h6>Increase in capital & Reserves
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="B6_7"
          value={inputValues.B6_7}
          onChange={changeData}  
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="C6_7"  
          value={sumC6_7}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           aria-label="First name" 
          name="D6_7"  
          value={sumD6_7}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="E6_7"  
          value={sumE6_7}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="F6_7" 
          value={sumF6_7}
          onChange={changeData}

          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="G6_7"  
          value={sumG6_7}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="H6_7"  
          value={sumH6_7}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="I6_7"  
          value={sumI6_7}
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
            <h6>Increase in Term Loan
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
              <input
                        type="text"
                        className="form-control"
                        
                        aria-label="First name"
                        name="B6_8"
                        value={inputValues.B6_8}
                        onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
              <input
                        type="text"
                        className="form-control"
                        
                        aria-label="First name"
                        name="C6_8"
                        value={sumC6_8}
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
                name="D6_8"  
                value={sumD6_8}
                onChange={changeData}  
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="E6_8"  
                value={sumE6_8}
                onChange={changeData}  
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="F6_8"  
                value={sumF6_8}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="G6_8" 
                value={sumG6_8}
                onChange={changeData} />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="H6_8"  
                value={sumH6_8}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="I6_8"  
                value={sumI6_8}
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
            <h6>Increase in Other Term Liabilities
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="B6_9"  
                value={inputValues.B6_9}
                onChange={changeData}
                />
                
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="C6_9"
                value={sumC6_9}
                onChange={changeData}  />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="D6_9"  
                value={sumD6_9}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="E6_9"  
                value={sumE6_9}
                onChange={changeData}  
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="F6_9" 
                value={sumF6_9}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="G6_9"  
                value={sumG6_9}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="H6_9"  
                value={sumH6_9}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="I6_9"  
                value={sumI6_9}
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
            <h6>Decreases In Fixed Assets
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="B6_10"
                value={inputValues.B6_10}
                onChange={changeData}  
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="C6_10"  
                value={sumC6_10}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 aria-label="First name" 
                name="D6_10"  
                value={sumD6_10}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="E6_10"  
                value={sumE6_10}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="F6_10" 
                value={sumF6_10}
                onChange={changeData}

                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="G6_10"  
                value={sumG6_10}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="H6_10"  
                value={sumH6_10}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="I6_10"  
                value={sumI6_10}
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
            <h6>Decrease in Other Non current Assets 
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
              <input
                        type="text"
                        className="form-control"
                        
                        aria-label="First name"
                        name="B6_11"
                        value={inputValues.B6_11}
                        onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
              <input
                        type="text"
                        className="form-control"
                        
                        aria-label="First name"
                        name="C6_11"
                        value={sumC6_11}
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
                name="D6_11"  
                value={sumD6_11}
                onChange={changeData}  
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="E6_11"  
                value={sumE6_11}
                onChange={changeData}  
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="F6_11"  
                value={sumF6_11}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="G6_11" 
                value={sumG6_11}
                onChange={changeData} />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="H6_11"  
                value={sumH6_11}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="I6_11"  
                value={sumI6_11}
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
            <h6>Decrease in intangible Assets
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="B6_12"  
                value={inputValues.B6_12}
                onChange={changeData}
                />
                
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="C6_12"
                value={sumC6_12}
                onChange={changeData}  />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="D6_12"  
                value={sumD6_12}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="E6_12"  
                value={sumE6_12}
                onChange={changeData}  
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="F6_12" 
                value={sumF6_12}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="G6_12"  
                value={sumG6_12}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="H6_12"  
                value={sumH6_12}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="I6_12"  
                value={sumI6_12}
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
            <h6>TOTAL LONG TERM SOURCES
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="B6_13"  
                value={""}
                onChange={changeData}
                />
                
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="C6_13"
                value={sumC6_13}
                onChange={changeData}  />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="D6_13"  
                value={sumD6_13}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="E6_13"  
                value={sumE6_13}
                onChange={changeData}  
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="F6_13" 
                value={sumF6_13}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="G6_13"  
                value={sumG6_13}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="H6_13"  
                value={sumH6_13}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="I6_13"  
                value={sumI6_13}
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
        <div className="row" style={{backgroundColor:"rgb(224, 231, 231)"}}>
          <div className="col-lg-4 border-end border-black d-flex justify-content-center">
            <h6 > USES:</h6>
          </div>
        </div>
    </div>

<div className="container-fluid border-1 border-black mt-3">
<div className="row">
    <div className="col-lg-4 border-end border-black d-flex justify-content-center">
      <h6>Net Loss
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="B6_15"
          value={inputValues.B6_15}
          onChange={changeData}  
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="C6_15"  
          value={sumC6_15}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           aria-label="First name" 
          name="D6_15"  
          value={sumD6_15}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="E6_15"  
          value={sumE6_15}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="F6_15" 
          value={sumF6_15}
          onChange={changeData}

          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="G6_15"  
          value={sumG6_15}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="H6_15"  
          value={sumH6_15}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="I6_15"  
          value={sumI6_15}
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
      <h6>Increase in fixed assets
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="B6_16"
          value={inputValues.B6_16}
          onChange={changeData}  
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="C6_16"  
          value={sumC6_16}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           aria-label="First name" 
          name="D6_16"  
          value={sumD6_16}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="E6_16"  
          value={sumE6_16}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="F6_16" 
          value={sumF6_16}
          onChange={changeData}

          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="G6_16"  
          value={sumG6_16}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="H6_16"  
          value={sumH6_16}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="I6_16"  
          value={sumI6_16}
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
      <h6>Increase in Non Current Assets
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="B6_17"
          value={inputValues.B6_17}
          onChange={changeData}  
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="C6_17"  
          value={sumC6_17}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           aria-label="First name" 
          name="D6_17"  
          value={sumD6_17}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="E6_17"  
          value={sumE6_17}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="F6_17" 
          value={sumF6_17}
          onChange={changeData}

          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="G6_17"  
          value={sumG6_17}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="H6_17"  
          value={sumH6_17}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="I6_17"  
          value={sumI6_17}
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
      <h6>Increase in intangible assets
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="B6_18"
          value={inputValues.B6_18}
          onChange={changeData}  
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="C6_18"  
          value={sumC6_18}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           aria-label="First name" 
          name="D6_18"  
          value={sumD6_18}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="E6_18"  
          value={sumE6_18}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="F6_18" 
          value={sumF6_18}
          onChange={changeData}

          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="G6_18"  
          value={sumG6_18}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="H6_18"  
          value={sumH6_18}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="I6_18"  
          value={sumI6_18}
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
      <h6>Decrease in Term Loan
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="B6_19"
          value={inputValues.B6_19}
          onChange={changeData}  
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="C6_19"  
          value={sumC6_19}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           aria-label="First name" 
          name="D6_19"  
          value={sumD6_19}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="E6_19"  
          value={sumE6_19}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="F6_19" 
          value={sumF6_19}
          onChange={changeData}

          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="G6_19"  
          value={sumG6_19}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="H6_19"  
          value={sumH6_19}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="I6_19"  
          value={sumI6_19}
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
      <h6>Decrease in O T L
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="B6_20"
          value={inputValues.B6_20}
          onChange={changeData}  
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="C6_20"  
          value={sumC6_20}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           aria-label="First name" 
          name="D6_20"  
          value={sumD6_20}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="E6_20"  
          value={sumE6_20}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="F6_20" 
          value={sumF6_20}
          onChange={changeData}

          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="G6_20"  
          value={sumG6_20}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="H6_20"  
          value={sumH6_20}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="I6_20"  
          value={sumI6_20}
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
            <h6>Divided Payments
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
              <input
                        type="text"
                        className="form-control"
                        
                        aria-label="First name"
                        name="B6_21"
                        value={inputValues.B6_21}
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
                        name="C6_21"
                        value={sumC6_21}
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
                name="D6_21"  
                value={sumD6_21}
                onChange={changeData}  
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="E6_21"  
                value={sumE6_21}
                onChange={changeData}  
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="F6_21"  
                value={sumF6_21}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="G6_21" 
                value={sumG6_21}
                onChange={changeData} />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="H6_21"  
                value={sumH6_21}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="I6_21"  
                value={sumI6_21}
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
            <h6>TOTAL LONG TERM USES
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="B6_22"  
                value={inputValues.B6_22}
                onChange={changeData}
                />
                

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
               
                aria-label="First name" 
                name="C6_22"
                value={sumC6_22}
                onChange={changeData}  />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text"
                className="form-control" 
                
                aria-label="First name" 
                name="D6_22"  
                value={sumD6_22}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text"
                className="form-control" 
                
                aria-label="First name" 
                name="E6_22"  
                value={sumE6_22}
                onChange={changeData}  
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text"
                className="form-control" 
                
                aria-label="First name" 
                name="F6_22" 
                value={sumF6_22}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
               
                aria-label="First name" 
                name="G6_22"  
                value={sumG6_22}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
               
                aria-label="First name" 
                name="H6_22"  
                value={sumH6_22}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text"
                className="form-control" 
                
                aria-label="First name" 
                name="I6_22"  
                value={sumI6_22}
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
      <h6>LONG TERM SURPLUS/DEFICIT
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="B6_23"
          value={inputValues.B6_23}
          onChange={changeData}  
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="C6_23"  
          value={sumC6_23}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           aria-label="First name" 
          name="D6_23"  
          value={sumD6_23}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="E6_23"  
          value={sumE6_23}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="F6_23" 
          value={sumF6_23}
          onChange={changeData}

          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="G6_23"  
          value={sumG6_23}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="H6_23"  
          value={sumH6_23}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="I6_23"  
          value={sumI6_23}
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
            <h6>Increase/decrese C A
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                
                aria-label="First name" 
                name="B6_24"
                value={inputValues.B6_24}
                onChange={changeData}  
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text"
                className="form-control" 
                
                aria-label="First name" 
                name="C6_24"  
                value={sumC6_24}
                onChange={changeData}
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
               aria-label="First name" 
                name="D6_24"  
                value={sumD6_24}
                onChange={changeData}
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
               
                aria-label="First name" 
                name="E6_24"  
                value={sumE6_24}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
               
                aria-label="First name" 
                name="F6_24" 
                value={sumF6_24}
                onChange={changeData}

                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
               
                aria-label="First name" 
                name="G6_24"  
                value={sumG6_24}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
               
                aria-label="First name" 
                name="H6_24"  
                value={sumH6_24}
                onChange={changeData} 
                />
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
               
                aria-label="First name" 
                name="I6_24"  
                value={sumI6_24}
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
            <h6>Increase/decrese in C L excel Bank borrowing
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                
                aria-label="First name" 
                name="B6_25"
                value={inputValues.B6_25}
                onChange={changeData}  
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text"
                className="form-control" 
                
                aria-label="First name" 
                name="C6_25"  
                value={sumC6_25}
                onChange={changeData}
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
               aria-label="First name" 
                name="D6_25"  
                value={sumD6_25}
                onChange={changeData}
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
               
                aria-label="First name" 
                name="E6_25"  
                value={sumE6_25}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
               
                aria-label="First name" 
                name="F6_25" 
                value={sumF6_25}
                onChange={changeData}

                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
               
                aria-label="First name" 
                name="G6_25"  
                value={sumG6_25}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
               
                aria-label="First name" 
                name="H6_25"  
                value={sumH6_25}
                onChange={changeData} 
                />
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
               
                aria-label="First name" 
                name="I6_25"  
                value={sumI6_25}
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
      <h6>Increase/decrease W C gap
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="B6_26"
          value={""}
          onChange={changeData}  
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="C6_26"  
          value={sumC6_26}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           aria-label="First name" 
          name="D6_26"  
          value={sumD6_26}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="E6_26"  
          value={sumE6_26}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="F6_26" 
          value={sumF6_26}
          onChange={changeData}

          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="G6_26"  
          value={sumG6_26}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="H6_26"  
          value={sumH6_26}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="I6_26"  
          value={sumI6_26}
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
      <h6>Net Surplus/Deficit
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="B6_27"
          value={inputValues.B6_27}
          onChange={changeData}  
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="C6_27"  
          value={sumC6_27}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           aria-label="First name" 
          name="D6_27"  
          value={sumD6_27}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="E6_27"  
          value={sumE6_27}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="F6_27" 
          value={sumF6_27}
          onChange={changeData}

          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="G6_27"  
          value={sumG6_27}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="H6_27"  
          value={sumH6_27}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="I6_27"  
          value={sumI6_27}
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
      <h6>Inc./dec.in Bank Borrowing
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="B6_28"
          value={inputValues.B6_28}
          onChange={changeData}  
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="C6_28"  
          value={sumC6_28}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           aria-label="First name" 
          name="D6_28"  
          value={sumD6_28}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="E6_28"  
          value={sumE6_28}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="F6_28" 
          value={sumF6_28}
          onChange={changeData}

          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="G6_28"  
          value={sumG6_28}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="H6_28"  
          value={sumH6_28}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="I6_28"  
          value={sumI6_28}
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
        <div className="row" style={{backgroundColor:"rgb(224, 231, 231)"}}>
          <div className="col-lg-4 border-end border-black d-flex justify-content-center">
            <h5 >FUNDD FLOW STATEMENT</h5>
          </div>
        </div>
    </div>

<div className="container-fluid border-1 border-black mt-3">
<div className="row">
    <div className="col-lg-4 border-end border-black d-flex justify-content-center">
      <h6>Long Term Sources
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="B6_31"
          value={inputValues.B6_31}
          onChange={changeData}  
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="C6_31"  
          value={sumC6_31}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           aria-label="First name" 
          name="D6_31"  
          value={sumD6_31}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="E6_31"  
          value={sumE6_31}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="F6_31" 
          value={sumF6_31}
          onChange={changeData}

          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="G6_31"  
          value={sumG6_31}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="H6_31"  
          value={sumH6_31}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="I6_31"  
          value={sumI6_31}
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
            <h6>Long Term Uses
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
              <input
                        type="text"
                        className="form-control"
                        
                        aria-label="First name"
                        name="B6_32"
                        value={inputValues.B6_32}
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
                        name="C6_32"
                        value={sumC6_32}
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
                name="D6_32"  
                value={sumD6_32}
                onChange={changeData}  
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                  
                aria-label="First name" 
                name="E6_32"  
                value={sumE6_32}
                onChange={changeData}  
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                  
                aria-label="First name" 
                name="F6_32"  
                value={sumF6_32}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                  
                aria-label="First name" 
                name="G6_32" 
                value={sumG6_32}
                onChange={changeData} />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                  
                aria-label="First name" 
                name="H6_32"  
                value={sumH6_32}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                  
                aria-label="First name" 
                name="I6_32"  
                value={sumI6_32}
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
            <h6>Surplus/Deficit
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
              <input
                        type="text"
                        className="form-control"
                        
                        aria-label="First name"
                        name="B6_33"
                        value={inputValues.B6_33}
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
                        name="C6_33"
                        value={sumC6_33}
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
                name="D6_33"  
                value={sumD6_33}
                onChange={changeData}  
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                  
                aria-label="First name" 
                name="E6_33"  
                value={sumE6_33}
                onChange={changeData}  
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                  
                aria-label="First name" 
                name="F6_33"  
                value={sumF6_33}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                  
                aria-label="First name" 
                name="G6_33" 
                value={sumG6_33}
                onChange={changeData} />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                  
                aria-label="First name" 
                name="H6_33"  
                value={sumH6_33}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                  
                aria-label="First name" 
                name="I6_33"  
                value={sumI6_33}
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
            <h6>Long Term Uses/Long Term Sources
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
              <input
                        type="text"
                        className="form-control"
                        
                        aria-label="First name"
                        name="B6_34"
                        value={inputValues.B6_34}
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
                        name="C6_34"
                        value={sumC6_34}
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
                name="D6_34"  
                value={sumD6_34}
                onChange={changeData}  
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                  
                aria-label="First name" 
                name="E6_34"  
                value={sumE6_34}
                onChange={changeData}  
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                  
                aria-label="First name" 
                name="F6_34"  
                value={sumF6_34}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                  
                aria-label="First name" 
                name="G6_34" 
                value={sumG6_34}
                onChange={changeData} />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                  
                aria-label="First name" 
                name="H6_34"  
                value={sumH6_34}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                  
                aria-label="First name" 
                name="I6_34"  
                value={sumI6_34}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          {/* Add similar input fields for other years here */}
      </div>
    </div>

    <div className="container-fluid border-1 border-black mt-3">
        <div className="row" style={{backgroundColor:"rgb(224, 231, 231)"}}>
          <div className="col-lg-4 border-end border-black d-flex justify-content-center">
            <h5 >II BUILDING UP OF N W C</h5>
          </div>
        </div>
    </div>
    

    {/*--------------------------------------------------- FIXED ASSETS--------------------------------------- */}
    <div className="container-fluid border-1 border-black mt-3">
        <div className="row" style={{backgroundColor:"rgb(224, 231, 231)"}}>
          <div className="col-lg-4 border-end border-black d-flex justify-content-center">
            <h6 >SOURCES</h6>
          </div>
        </div>
    </div>
    <div className="container-fluid border-1 border-black mt-3">
      <div className="row">
          <div className="col-lg-4 border-end border-black d-flex justify-content-center">
            <h6>Increase in Bank Borrowings
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                
                aria-label="First name" 
                name="B6_37"
                value={inputValues.B6_37}
                onChange={changeData}  
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text"
                className="form-control" 
                 
                aria-label="First name" 
                name="C6_37"  
                value={sumC6_37}
                onChange={changeData}
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
               aria-label="First name" 
               
                name="D6_37"  
                value={sumD6_37}
                onChange={changeData}
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                
                aria-label="First name" 
                name="E6_37"  
                value={sumE6_37}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                
                aria-label="First name" 
                name="F6_37" 
                value={sumF6_37}
                onChange={changeData}

                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                
                aria-label="First name" 
                name="G6_37"  
                value={sumG6_37}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                
                aria-label="First name" 
                name="H6_37"  
                value={sumH6_37}
                onChange={changeData} 
                />
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                
                aria-label="First name" 
                name="I6_37"  
                value={sumI6_37}
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
            <h6>Increase in Sundry Creditors
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                
                aria-label="First name" 
                name="B6_38"
                value={inputValues.B6_38}
                onChange={changeData}  
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text"
                className="form-control" 
                 
                aria-label="First name" 
                name="C6_38"  
                value={sumC6_38}
                onChange={changeData}
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
               aria-label="First name" 
               
                name="D6_38"  
                value={sumD6_38}
                onChange={changeData}
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                
                aria-label="First name" 
                name="E6_38"  
                value={sumE6_38}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                
                aria-label="First name" 
                name="F6_38" 
                value={sumF6_38}
                onChange={changeData}

                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                
                aria-label="First name" 
                name="G6_38"  
                value={sumG6_38}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                
                aria-label="First name" 
                name="H6_38"  
                value={sumH6_38}
                onChange={changeData} 
                />
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                
                aria-label="First name" 
                name="I6_38"  
                value={sumI6_38}
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
      <h6>Increase in Other Current Liabilities
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="B6_39"
          value={inputValues.B6_39}
          onChange={changeData}  
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="C6_39"  
          value={sumC6_39}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           aria-label="First name" 
          name="D6_39"  
          value={sumD6_39}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="E6_39"  
          value={sumE6_39}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="F6_39" 
          value={sumF6_39}
          onChange={changeData}

          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="G6_39"  
          value={sumG6_39}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="H6_39"  
          value={sumH6_39}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="I6_39"  
          value={sumI6_39}
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
      <h6>Decrease in Inventory
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="B6_40"
          value={inputValues.B6_40}
          onChange={changeData}  
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="C6_40"  
          value={sumC6_40}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           aria-label="First name" 
          name="D6_40"  
          value={sumD6_40}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="E6_40"  
          value={sumE6_40}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="F6_40" 
          value={sumF6_40}
          onChange={changeData}

          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="G6_40"  
          value={sumG6_40}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="H6_40"  
          value={sumH6_40}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="I6_40"  
          value={sumI6_40}
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
      <h6>Decrease in Receivables
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="B6_41"
          value={inputValues.B6_41}
          onChange={changeData}  
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="C6_41"  
          value={sumC6_41}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           aria-label="First name" 
          name="D6_41"  
          value={sumD6_41}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="E6_41"  
          value={sumE6_41}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="F6_41" 
          value={sumF6_41}
          onChange={changeData}

          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="G6_41"  
          value={sumG6_41}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="H6_41"  
          value={sumH6_41}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="I6_41"  
          value={sumI6_41}
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
      <h6>Decrease in Other Currebt Assets
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="B6_42"
          value={inputValues.B6_42}
          onChange={changeData}  
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="C6_42"  
          value={sumC6_42}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           aria-label="First name" 
          name="D6_42"  
          value={sumD6_42}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="E6_42"  
          value={sumE6_42}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="F6_42" 
          value={sumF6_42}
          onChange={changeData}

          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="G6_42"  
          value={sumG6_42}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="H6_42"  
          value={sumH6_42}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="I6_42"  
          value={sumI6_42}
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
      <h5>TOTAL SHORT TERM SOURCES
       </h5>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="B6_43"
          value={""}
          onChange={changeData}  
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="C6_43"  
          value={sumC6_43}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           aria-label="First name" 
          name="D6_43"  
          value={sumD6_43}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="E6_43"  
          value={sumE6_43}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="F6_43" 
          value={sumF6_43}
          onChange={changeData}

          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="G6_43"  
          value={sumG6_43}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="H6_43"  
          value={sumH6_43}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="I6_43"  
          value={sumI6_43}
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
        <div className="row" style={{backgroundColor:"rgb(224, 231, 231)"}}>
          <div className="col-lg-4 border-end border-black d-flex justify-content-center">
            <h6 >USES</h6>
          </div>
        </div>
    </div>

    <div className="container-fluid border-1 border-black mt-3">
      <div className="row">
          <div className="col-lg-4 border-end border-black d-flex justify-content-center">
            <h6>Decrease in Bank Borrowings
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="B6_45"  
                value={inputValues.B6_45}
                onChange={changeData}
                />
                

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                
                aria-label="First name" 
                name="C6_45"
                value={sumC6_45}
                onChange={changeData}  />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text"
                className="form-control" 
                 
                aria-label="First name" 
                name="D6_45"  
                value={sumD6_45}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text"
                className="form-control" 
                 
                aria-label="First name" 
                name="E6_45"  
                value={sumE6_45}
                onChange={changeData}  
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text"
                className="form-control" 
                 
                aria-label="First name" 
                name="F6_45" 
                value={sumF6_45}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                
                aria-label="First name" 
                name="G6_45"  
                value={sumG6_45}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                
                aria-label="First name" 
                name="H6_45"  
                value={sumH6_45}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text"
                className="form-control" 
                 
                aria-label="First name" 
                name="I6_45"  
                value={sumI6_45}
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
            <h6>Decrease in Sundry Creditors
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="B6_46"  
                value={inputValues.B6_46}
                onChange={changeData}
                />
                

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                
                aria-label="First name" 
                name="C6_46"
                value={sumC6_46}
                onChange={changeData}  />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text"
                className="form-control" 
                 
                aria-label="First name" 
                name="D6_46"  
                value={sumD6_46}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text"
                className="form-control" 
                 
                aria-label="First name" 
                name="E6_46"  
                value={sumE6_46}
                onChange={changeData}  
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text"
                className="form-control" 
                 
                aria-label="First name" 
                name="F6_46" 
                value={sumF6_46}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                
                aria-label="First name" 
                name="G6_46"  
                value={sumG6_46}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                
                aria-label="First name" 
                name="H6_46"  
                value={sumH6_46}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text"
                className="form-control" 
                 
                aria-label="First name" 
                name="I6_46"  
                value={sumI6_46}
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
            <h6>Decrease in O C L
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                
                aria-label="First name" 
                name="B6_47"
                value={inputValues.B6_47}
                onChange={changeData}  
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text"
                className="form-control" 
                 
                aria-label="First name" 
                name="C6_47"  
                value={sumC6_47}
                onChange={changeData}
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
               aria-label="First name" 
               
                name="D6_47"  
                value={sumD6_47}
                onChange={changeData}
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                
                aria-label="First name" 
                name="E6_47"  
                value={sumE6_47}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                
                aria-label="First name" 
                name="F6_47" 
                value={sumF6_47}
                onChange={changeData}

                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                
                aria-label="First name" 
                name="G6_47"  
                value={sumG6_47}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                
                aria-label="First name" 
                name="H6_47"  
                value={sumH6_47}
                onChange={changeData} 
                />
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                
                aria-label="First name" 
                name="I6_47"  
                value={sumI6_47}
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
            <h6>Increase in Inventory
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
              <input
                        type="text"
                        className="form-control"
                        
                        aria-label="First name"
                        name="B6_48"
                        value={inputValues.B6_48}
                        onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
              <input
                        type="text"
                        className="form-control"
                        
                        aria-label="First name"
                        name="C6_48"
                        value={sumC6_48}
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
                name="D6_48"  
                value={sumD6_48}
                onChange={changeData}  
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="E6_48"  
                value={sumE6_48}
                onChange={changeData}  
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="F6_48"  
                value={sumF6_48}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="G6_48" 
                value={sumG6_48}
                onChange={changeData} />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="H6_48"  
                value={sumH6_48}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="I6_48"  
                value={sumI6_48}
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
            <h6>Increase in Receivables
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="B6_49"  
                value={inputValues.B6_49}
                onChange={changeData}
                />
                
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="C6_49"
                value={sumC6_49}
                onChange={changeData}  />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="D6_49"  
                value={sumD6_49}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="E6_49"  
                value={sumE6_49}
                onChange={changeData}  
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="F6_49" 
                value={sumF6_49}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="G6_49"  
                value={sumG6_49}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="H6_49"  
                value={sumH6_49}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="I6_49"  
                value={sumI6_49}
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
            <h6>Increase in O C A
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="B6_50"
                value={""}
                onChange={changeData}  
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="C6_50"  
                value={sumC6_50}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 aria-label="First name" 
                name="D6_50"  
                value={sumD6_50}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="E6_50"  
                value={sumE6_50}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="F6_50" 
                value={sumF6_50}
                onChange={changeData}

                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="G6_50"  
                value={sumG6_50}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="H6_50"  
                value={sumH6_50}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="I6_50"  
                value={sumI6_50}
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
            <h5>TOTAL SHORT TERM USES
             </h5>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="B6_51"
                value={inputValues.B6_51}
                onChange={changeData}  
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="C6_51"  
                value={sumC6_51}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 aria-label="First name" 
                name="D6_51"  
                value={sumD6_51}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="E6_51"  
                value={sumE6_51}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="F6_51" 
                value={sumF6_51}
                onChange={changeData}

                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="G6_51"  
                value={sumG6_51}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="H6_51"  
                value={sumH6_51}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="I6_51"  
                value={sumI6_51}
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
            <h6>NWC at the beginning of the year
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="B6_53"
                value={inputValues.B6_53}
                onChange={changeData}  
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="C6_53"  
                value={sumC6_53}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 aria-label="First name" 
                name="D6_53"  
                value={sumD6_53}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="E6_53"  
                value={sumE6_53}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="F6_53" 
                value={sumF6_53}
                onChange={changeData}

                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="G6_53"  
                value={sumG6_53}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="H6_53"  
                value={sumH6_53}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="I6_53"  
                value={sumI6_53}
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
            <h6>Increase / Decrease in NWC
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="B6_54"
                value={inputValues.B6_54}
                onChange={changeData}  
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="C6_54"  
                value={sumC6_54}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 aria-label="First name" 
                name="D6_54"  
                value={sumD6_54}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="E6_54"  
                value={sumE6_54}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="F6_54" 
                value={sumF6_54}
                onChange={changeData}

                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="G6_54"  
                value={sumG6_54}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="H6_54"  
                value={sumH6_54}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="I6_54"  
                value={sumI6_54}
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
            <h6>NWC at the end of the year
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="B6_55"
                value={inputValues.B6_55}
                onChange={changeData}  
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="C6_55"  
                value={sumC6_55}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 aria-label="First name" 
                name="D6_55"  
                value={sumD6_55}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="E6_55"  
                value={sumE6_55}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="F6_55" 
                value={sumF6_55}
                onChange={changeData}

                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="G6_55"  
                value={sumG6_55}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="H6_55"  
                value={sumH6_55}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="I6_55"  
                value={sumI6_55}
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
            <h6>LONG TERM USES
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="B6_57"
                value={""}
                onChange={changeData}  
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="C6_57"  
                value={sumC6_57}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 aria-label="First name" 
                name="D6_57"  
                value={sumD6_57}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="E6_57"  
                value={sumE6_57}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="F6_57" 
                value={sumF6_57}
                onChange={changeData}

                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="G6_57"  
                value={sumG6_57}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="H6_57"  
                value={sumH6_57}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="I6_57"  
                value={sumI6_57}
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
            <h6>SHORT TERM USES
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="B6_58"
                value={""}
                onChange={changeData}  
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="C6_58"  
                value={sumC6_58}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 aria-label="First name" 
                name="D6_58"  
                value={sumD6_58}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="E6_58"  
                value={sumE6_58}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="F6_58" 
                value={sumF6_58}
                onChange={changeData}

                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="G6_58"  
                value={sumG6_58}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="H6_58"  
                value={sumH6_58}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="I6_58"  
                value={sumI6_58}
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
            <h6>TOTAL SOURCES
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="B6_59"
                value={inputValues.B6_59}
                onChange={changeData}  
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="C6_59"  
                value={sumC6_59}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 aria-label="First name" 
                name="D6_59"  
                value={sumD6_59}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="E6_59"  
                value={sumE6_59}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="F6_59" 
                value={sumF6_59}
                onChange={changeData}

                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="G6_59"  
                value={sumG6_59}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="H6_59"  
                value={sumH6_59}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="I6_59"  
                value={sumI6_59}
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
            <h6>LONG TERM USES
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="B6_61"
                value={inputValues.B6_61}
                onChange={changeData}  
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="C6_61"  
                value={sumC6_61}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 aria-label="First name" 
                name="D6_61"  
                value={sumD6_61}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="E6_61"  
                value={sumE6_61}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="F6_61" 
                value={sumF6_61}
                onChange={changeData}

                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="G6_61"  
                value={sumG6_61}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="H6_61"  
                value={sumH6_61}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="I6_61"  
                value={sumI6_61}
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
            <h6>SHORT TERM USES
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="B6_62"
                value={inputValues.B6_62}
                onChange={changeData}  
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="C6_62"  
                value={sumC6_62}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 aria-label="First name" 
                name="D6_62"  
                value={sumD6_62}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="E6_62"  
                value={sumE6_62}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="F6_62" 
                value={sumF6_62}
                onChange={changeData}

                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="G6_62"  
                value={sumG6_62}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="H6_62"  
                value={sumH6_62}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="I6_62"  
                value={sumI6_62}
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
            <h6>TOTAL USES
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="B6_63"
                value={inputValues.B6_63}
                onChange={changeData}  
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="C6_63"  
                value={sumC6_63}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 aria-label="First name" 
                name="D6_63"  
                value={sumD6_63}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="E6_63"  
                value={sumE6_63}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="F6_63" 
                value={sumF6_63}
                onChange={changeData}

                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="G6_63"  
                value={sumG6_63}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="H6_63"  
                value={sumH6_63}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="I6_63"  
                value={sumI6_63}
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
            <h6>Whether Tailed / Difference ?
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="B6_65"
                value={inputValues.B6_65}
                onChange={changeData}  
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="C6_65"  
                value={sumC6_65}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 aria-label="First name" 
                name="D6_65"  
                value={sumD6_65}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="E6_65"  
                value={sumE6_65}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="F6_65" 
                value={sumF6_65}
                onChange={changeData}

                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="G6_65"  
                value={sumG6_65}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="H6_65"  
                value={sumH6_65}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="I6_65"  
                value={sumI6_65}
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
            <h6>TERM LOAN
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="B6_67"
                value={sumB6_67}
                onChange={changeData}  
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="C6_67"  
                value={sumC6_67}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 aria-label="First name" 
                name="D6_67"  
                value={sumD6_67}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="E6_67"  
                value={sumE6_67}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="F6_67" 
                value={sumF6_67}
                onChange={changeData}

                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="G6_67"  
                value={sumG6_67}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="H6_67"  
                value={sumH6_67}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="I6_67"  
                value={sumI6_67}
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
            <h6>INCREASE IN TERM LOAN
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="B6_68"
                value={inputValues.B6_68}
                onChange={changeData}  
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="C6_68"  
                value={sumC6_68}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 aria-label="First name" 
                name="D6_68"  
                value={sumD6_68}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="E6_68"  
                value={sumE6_68}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="F6_68" 
                value={sumF6_68}
                onChange={changeData}

                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="G6_68"  
                value={sumG6_68}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="H6_68"  
                value={sumH6_68}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="I6_68"  
                value={sumI6_68}
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
            <h6>DECREASE IN TERM LOAN
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="B6_69"
                value={sumB6_69}
                onChange={changeData}  
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="C6_69"  
                value={sumC6_69}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 aria-label="First name" 
                name="D6_69"  
                value={sumD6_69}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="E6_69"  
                value={sumE6_69}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="F6_69" 
                value={sumF6_69}
                onChange={changeData}

                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="G6_69"  
                value={sumG6_69}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="H6_69"  
                value={sumH6_69}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="I6_69"  
                value={sumI6_69}
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
