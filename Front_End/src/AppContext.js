import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [inputValues, setInputValues] = useState({
    B1_7: '', B1_8: '', B1_9: '', 
    C1_7: '', C1_8: '', C1_9: '', 
    B1_23: '', B1_24: '', B1_25: '',
    C1_23: '', C1_24: '', C1_25: ''
  });

  const [tot15, setTot15] = useState({ B3_15: '',C3_15: '' });
  const [tot23, setTot23] = useState({B3_23: '',});
  const [tot31, setTot31] = useState({});
  const [tot37, setTot37] = useState({});
  const [tot2020, setTot2020] = useState({B1_10: '',});
  const [Cost27, setCost27] = useState({});
  const [Cost26, setCost26] = useState({});
  const [Cost31, setCost31] = useState({});
  const [Cost37, setCost37] = useState({});
  const [Cost42, setCost42] = useState({});
  const [Cost41, setCost41] = useState({});
  const [Cost39, setCost39] = useState({});
  const [Cost38, setCost38] = useState({});

  const [sumB2, setSumB2] = useState(0);
  const [sumC2, setSumC2] = useState(0);
  const [sumD2, setSumD2] = useState(0);
  const [sumE2, setSumE2] = useState(0);
  const [sumF2, setSumF2] = useState(0);
  const [sumG2, setSumG2] = useState(0);
  const [sumH2, setSumH2] = useState(0);
  const [sumI2, setSumI2] = useState(0);

  const [sumB19, setSumB19] = useState(0);
  const [sumC19, setSumC19] = useState(0);
  const [sumD19, setSumD19] = useState(0);
  const [sumE19, setSumE19] = useState(0);
  const [sumF19, setSumF19] = useState(0);
  const [sumG19, setSumG19] = useState(0);
  const [sumH19, setSumH19] = useState(0);
  const [sumI19, setSumI19] = useState(0);

  const [sumB21, setSumB21] = useState(0);
  const [sumC21, setSumC21] = useState(0);
  const [sumD21, setSumD21] = useState(0);
  const [sumE21, setSumE21] = useState(0);
  const [sumF21, setSumF21] = useState(0);
  const [sumG21, setSumG21] = useState(0);
  const [sumH21, setSumH21] = useState(0);
  const [sumI21, setSumI21] = useState(0);

  const [sumB25, setSumB25] = useState(0);
  const [sumC25, setSumC25] = useState(0);
  const [sumD25, setSumD25] = useState(0);
  const [sumE25, setSumE25] = useState(0);
  const [sumF25, setSumF25] = useState(0);
  const [sumG25, setSumG25] = useState(0);
  const [sumH25, setSumH25] = useState(0);
  const [sumI25, setSumI25] = useState(0);

  const [sumB50, setSumB50] = useState(0);
  const [sumC50, setSumC50] = useState(0);
  const [sumD50, setSumD50] = useState(0);
  const [sumE50, setSumE50] = useState(0);
  const [sumF50, setSumF50] = useState(0);
  const [sumG50, setSumG50] = useState(0);
  const [sumH50, setSumH50] = useState(0);
  const [sumI50, setSumI50] = useState(0);

  const [sumB30, setSumB30] = useState(0);
  const [sumC30, setSumC30] = useState(0);
  const [sumD30, setSumD30] = useState(0);
  const [sumE30, setSumE30] = useState(0);
  const [sumF30, setSumF30] = useState(0);
  const [sumG30, setSumG30] = useState(0);
  const [sumH30, setSumH30] = useState(0);
  const [sumI30, setSumI30] = useState(0);

  const [sumB37, setSumB37] = useState(0);
  const [sumC37, setSumC37] = useState(0);
  const [sumD37, setSumD37] = useState(0);
  const [sumE37, setSumE37] = useState(0);
  const [sumF37, setSumF37] = useState(0);
  const [sumG37, setSumG37] = useState(0);
  const [sumH37, setSumH37] = useState(0);
  const [sumI37, setSumI37] = useState(0);

  const [sumB38, setSumB38] = useState(0);
  const [sumC38, setSumC38] = useState(0);
  const [sumD38, setSumD38] = useState(0);
  const [sumE38, setSumE38] = useState(0);
  const [sumF38, setSumF38] = useState(0);
  const [sumG38, setSumG38] = useState(0);
  const [sumH38, setSumH38] = useState(0);
  const [sumI38, setSumI38] = useState(0);

  const [sumB44, setSumB44] = useState(0);
  const [sumC44, setSumC44] = useState(0);
  const [sumD44, setSumD44] = useState(0);
  const [sumE44, setSumE44] = useState(0);
  const [sumF44, setSumF44] = useState(0);
  const [sumG44, setSumG44] = useState(0);
  const [sumH44, setSumH44] = useState(0);
  const [sumI44, setSumI44] = useState(0);

  const [sumB45, setSumB45] = useState(0);
  const [sumC45, setSumC45] = useState(0);
  const [sumD45, setSumD45] = useState(0);
  const [sumE45, setSumE45] = useState(0);
  const [sumF45, setSumF45] = useState(0);
  const [sumG45, setSumG45] = useState(0);
  const [sumH45, setSumH45] = useState(0);
  const [sumI45, setSumI45] = useState(0);


  const [sumB4_25, setSumB4_25] = useState(0);
  const [sumC4_25, setSumC4_25] = useState(0);
  const [sumD4_25, setSumD4_25] = useState(0);
  const [sumE4_25, setSumE4_25] = useState(0);
  const [sumF4_25, setSumF4_25] = useState(0);
  const [sumG4_25, setSumG4_25] = useState(0);
  const [sumH4_25, setSumH4_25] = useState(0);
  const [sumI4_25, setSumI4_25] = useState(0);

  const [ sumC4_26, setSumC4_26,] = useState(0);     
  const [ sumD4_26, setSumD4_26,] = useState(0);    
  const [sumE4_26, setSumE4_26,] = useState(0);    
  const [ sumF4_26, setSumF4_26,] = useState(0);    
  const [sumG4_26, setSumG4_26,] = useState(0);    
  const [sumH4_26, setSumH4_26,] = useState(0);    
  const [sumI4_26, setSumI4_26,] = useState(0);    
  // const [] = useState(0);    
  const [sumB4_34, setSumB4_34] = useState(0);
  const [sumC4_34, setSumC4_34] = useState(0);
  const [sumD4_34, setSumD4_34] = useState(0);
  const [sumE4_34, setSumE4_34] = useState(0);
  const [sumF4_34, setSumF4_34] = useState(0);
  const [sumG4_34, setSumG4_34] = useState(0);
  const [sumH4_34, setSumH4_34] = useState(0);
  const [sumI4_34, setSumI4_34] = useState(0);
    
  const [sumC4_35, setSumC4_35] = useState(0);
  const [sumD4_35, setSumD4_35] = useState(0);
  const [sumE4_35, setSumE4_35] = useState(0);
  const [sumF4_35, setSumF4_35] = useState(0);
  const [sumG4_35, setSumG4_35] = useState(0);
  const [sumH4_35, setSumH4_35] = useState(0);
  const [sumI4_35, setSumI4_35] = useState(0);  
    
  const [sumB4_38, setSumB4_38] = useState(0);
  const [sumC4_38, setSumC4_38] = useState(0);
  const [sumD4_38, setSumD4_38] = useState(0);
  const [sumE4_38, setSumE4_38] = useState(0);
  const [sumF4_38, setSumF4_38] = useState(0);
  const [sumG4_38, setSumG4_38] = useState(0);
  const [sumH4_38, setSumH4_38] = useState(0);
  const [sumI4_38, setSumI4_38] = useState(0);
     
  const [sumB4_39, setSumB4_39] = useState(0);
  const [sumC4_39, setSumC4_39] = useState(0);
  const [sumD4_39, setSumD4_39] = useState(0);
  const [sumE4_39, setSumE4_39] = useState(0);
  const [sumF4_39, setSumF4_39] = useState(0);
  const [sumG4_39, setSumG4_39] = useState(0);
  const [sumH4_39, setSumH4_39] = useState(0);
  const [sumI4_39, setSumI4_39] = useState(0);

  const [sumB4_40, setSumB4_40] = useState(0);
  const [sumC4_40, setSumC4_40] = useState(0);
  const [sumD4_40, setSumD4_40] = useState(0);
  const [sumE4_40, setSumE4_40] = useState(0);
  const [sumF4_40, setSumF4_40] = useState(0);
  const [sumG4_40, setSumG4_40] = useState(0);
  const [sumH4_40, setSumH4_40] = useState(0);
  const [sumI4_40, setSumI4_40] = useState(0);

  const [sumB4_27, setSumB4_27] = useState(0);
  const [sumC4_27, setSumC4_27] = useState(0);
  const [sumD4_27, setSumD4_27] = useState(0);
  const [sumE4_27, setSumE4_27] = useState(0);
  const [sumF4_27, setSumF4_27] = useState(0);
  const [sumG4_27, setSumG4_27] = useState(0);
  const [sumH4_27, setSumH4_27] = useState(0);
  const [sumI4_27, setSumI4_27] = useState(0);

  const [sumB4_29, setSumB4_29] = useState(0);
  const [sumC4_29, setSumC4_29] = useState(0);
  const [sumD4_29, setSumD4_29] = useState(0);
  const [sumE4_29, setSumE4_29] = useState(0);
  const [sumF4_29, setSumF4_29] = useState(0);
  const [sumG4_29, setSumG4_29] = useState(0);
  const [sumH4_29, setSumH4_29] = useState(0);
  const [sumI4_29, setSumI4_29] = useState(0);

  const [sumB4_30, setSumB4_30] = useState(0);
  const [sumC4_30, setSumC4_30] = useState(0);
  const [sumD4_30, setSumD4_30] = useState(0);
  const [sumE4_30, setSumE4_30] = useState(0);
  const [sumF4_30, setSumF4_30] = useState(0);
  const [sumG4_30, setSumG4_30] = useState(0);
  const [sumH4_30, setSumH4_30] = useState(0);
  const [sumI4_30, setSumI4_30] = useState(0);

  const [sumB4_31, setSumB4_31] = useState(0);
  const [sumC4_31, setSumC4_31] = useState(0);
  const [sumD4_31, setSumD4_31] = useState(0);
  const [sumE4_31, setSumE4_31] = useState(0);
  const [sumF4_31, setSumF4_31] = useState(0);
  const [sumG4_31, setSumG4_31] = useState(0);
  const [sumH4_31, setSumH4_31] = useState(0);
  const [sumI4_31, setSumI4_31] = useState(0);

  const [sumB4_21, setSumB4_21] = useState(0);
  const [sumC4_21, setSumC4_21] = useState(0);
  const [sumD4_21, setSumD4_21] = useState(0);
  const [sumE4_21, setSumE4_21] = useState(0);
  const [sumF4_21, setSumF4_21] = useState(0);
  const [sumG4_21, setSumG4_21] = useState(0);
  const [sumH4_21, setSumH4_21] = useState(0);
  const [sumI4_21, setSumI4_21] = useState(0);

  
  const [sumB4_23, setSumB4_23] = useState(0);
  const [sumC4_23, setSumC4_23] = useState(0);
  const [sumD4_23, setSumD4_23] = useState(0);
  const [sumE4_23, setSumE4_23] = useState(0);
  const [sumF4_23, setSumF4_23] = useState(0);
  const [sumG4_23, setSumG4_23] = useState(0);
  const [sumH4_23, setSumH4_23] = useState(0);
  const [sumI4_23, setSumI4_23] = useState(0);

    
  const [sumB4_28, setSumB4_28] = useState(0);
  const [sumC4_28, setSumC4_28] = useState(0);
  const [sumD4_28, setSumD4_28] = useState(0);
  const [sumE4_28, setSumE4_28] = useState(0);
  const [sumF4_28, setSumF4_28] = useState(0);
  const [sumG4_28, setSumG4_28] = useState(0);
  const [sumH4_28, setSumH4_28] = useState(0);
  const [sumI4_28, setSumI4_28] = useState(0);

  const [sumB5_40, setSumB5_40] = useState(0);
  const [sumC5_40, setSumC5_40] = useState(0);
  const [sumD5_40, setSumD5_40] = useState(0);
  const [sumE5_40, setSumE5_40] = useState(0);
  const [sumF5_40, setSumF5_40] = useState(0);
  const [sumG5_40, setSumG5_40] = useState(0);
  const [sumH5_40, setSumH5_40] = useState(0);
  const [sumI5_40, setSumI5_40] = useState(0);

  const [sumB51, setSumB51] = useState(0);
  const [sumC51, setSumC51] = useState(0);
  const [sumD51, setSumD51] = useState(0);
  const [sumE51, setSumE51] = useState(0);
  const [sumF51, setSumF51] = useState(0);
  const [sumG51, setSumG51] = useState(0);
  const [sumH51, setSumH51] = useState(0);
  const [sumI51, setSumI51] = useState(0);

  const [sumB31, setSumB31] = useState(0);
  const [sumC31, setSumC31] = useState(0);
  const [sumD31, setSumD31] = useState(0);
  const [sumE31, setSumE31] = useState(0);
  const [sumF31, setSumF31] = useState(0);
  const [sumG31, setSumG31] = useState(0);
  const [sumH31, setSumH31] = useState(0);
  const [sumI31, setSumI31] = useState(0);
     
  const [sumB5_16, setSumB5_16] = useState(0);
  const [sumC5_16, setSumC5_16] = useState(0);
  const [sumD5_16, setSumD5_16] = useState(0);
  const [sumE5_16, setSumE5_16] = useState(0);
  const [sumF5_16, setSumF5_16] = useState(0);
  const [sumG5_16, setSumG5_16] = useState(0);
  const [sumH5_16, setSumH5_16] = useState(0);
  const [sumI5_16, setSumI5_16] = useState(0);
     

  const [sumB5_10, setSumB5_10] = useState(0);
  const [sumC5_10, setSumC5_10] = useState(0);
  const [sumD5_10, setSumD5_10] = useState(0);
  const [sumE5_10, setSumE5_10] = useState(0);
  const [sumF5_10, setSumF5_10] = useState(0);
  const [sumG5_10, setSumG5_10] = useState(0);
  const [sumH5_10, setSumH5_10] = useState(0);
  const [sumI5_10, setSumI5_10] = useState(0);

  const [sumB5_11, setSumB5_11] = useState(0);
  const [sumC5_11, setSumC5_11] = useState(0);
  const [sumD5_11, setSumD5_11] = useState(0);
  const [sumE5_11, setSumE5_11] = useState(0);
  const [sumF5_11, setSumF5_11] = useState(0);
  const [sumG5_11, setSumG5_11] = useState(0);
  const [sumH5_11, setSumH5_11] = useState(0);
  const [sumI5_11, setSumI5_11] = useState(0);

  const [sumB5_15, setSumB5_15] = useState(0);
  const [sumC5_15, setSumC5_15] = useState(0);
  const [sumD5_15, setSumD5_15] = useState(0);
  const [sumE5_15, setSumE5_15] = useState(0);
  const [sumF5_15, setSumF5_15] = useState(0);
  const [sumG5_15, setSumG5_15] = useState(0);
  const [sumH5_15, setSumH5_15] = useState(0);
  const [sumI5_15, setSumI5_15] = useState(0);

  const [sumB5_21, setSumB5_21] = useState(0);
  const [sumC5_21, setSumC5_21] = useState(0);
  const [sumD5_21, setSumD5_21] = useState(0);
  const [sumE5_21, setSumE5_21] = useState(0);
  const [sumF5_21, setSumF5_21] = useState(0);
  const [sumG5_21, setSumG5_21] = useState(0);
  const [sumH5_21, setSumH5_21] = useState(0);
  const [sumI5_21, setSumI5_21] = useState(0);

  const [sumB5_22, setSumB5_22] = useState(0);
  const [sumC5_22, setSumC5_22] = useState(0);
  const [sumD5_22, setSumD5_22] = useState(0);
  const [sumE5_22, setSumE5_22] = useState(0);
  const [sumF5_22, setSumF5_22] = useState(0);
  const [sumG5_22, setSumG5_22] = useState(0);
  const [sumH5_22, setSumH5_22] = useState(0);
  const [sumI5_22, setSumI5_22] = useState(0);

  const [sumB4_6, setSumB4_6] = useState(0);
  const [sumC4_6, setSumC4_6] = useState(0);
  const [sumD4_6, setSumD4_6] = useState(0);
  const [sumE4_6, setSumE4_6] = useState(0);
  const [sumF4_6, setSumF4_6] = useState(0);
  const [sumG4_6, setSumG4_6] = useState(0);
  const [sumH4_6, setSumH4_6] = useState(0);
  const [sumI4_6, setSumI4_6] = useState(0);

  const [sumB5_28, setSumB5_28] = useState(0);
  const [sumC5_28, setSumC5_28] = useState(0);
  const [sumD5_28, setSumD5_28] = useState(0);
  const [sumE5_28, setSumE5_28] = useState(0);
  const [sumF5_28, setSumF5_28] = useState(0);
  const [sumG5_28, setSumG5_28] = useState(0);
  const [sumH5_28, setSumH5_28] = useState(0);
  const [sumI5_28, setSumI5_28] = useState(0);

  const [sumB5_14, setSumB5_14] = useState(0);
  const [sumC5_14, setSumC5_14] = useState(0);
  const [sumD5_14, setSumD5_14] = useState(0);
  const [sumE5_14, setSumE5_14] = useState(0);
  const [sumF5_14, setSumF5_14] = useState(0);
  const [sumG5_14, setSumG5_14] = useState(0);
  const [sumH5_14, setSumH5_14] = useState(0);
  const [sumI5_14, setSumI5_14] = useState(0);

  const [sumB43, setSumB43] = useState(0);
  const [sumC43, setSumC43] = useState(0);
  const [sumD43, setSumD43] = useState(0);
  const [sumE43, setSumE43] = useState(0);
  const [sumF43, setSumF43] = useState(0);
  const [sumG43, setSumG43] = useState(0);
  const [sumH43, setSumH43] = useState(0);
  const [sumI43, setSumI43] = useState(0);

  const [sumB7_66, setSumB7_66] = useState(0);
  const [sumC7_66, setSumC7_66] = useState(0);
  const [sumD7_66, setSumD7_66] = useState(0);
  const [sumE7_66, setSumE7_66] = useState(0);
  const [sumF7_66, setSumF7_66] = useState(0);
  const [sumG7_66, setSumG7_66] = useState(0);
  const [sumH7_66, setSumH7_66] = useState(0);
  const [sumI7_66, setSumI7_66] = useState(0);

  return (
    <AppContext.Provider value={{
      inputValues,
      setInputValues,
      tot15,
      setTot15,
      tot23,
      setTot23,
      tot31,
      setTot31,
      tot37,
      setTot37,
      tot2020, 
      setTot2020,
      Cost27, setCost27,
      Cost26, setCost26,
      Cost31, setCost31,
      Cost37, setCost37,
      Cost42, setCost42,
      Cost41, setCost41,
      Cost39, setCost39,
      Cost38, setCost38,
      sumB2, setSumB2,
      sumC2, setSumC2,
      sumD2, setSumD2,
      sumE2, setSumE2,
      sumF2, setSumF2,
      sumG2, setSumG2,
      sumH2, setSumH2,
      sumI2, setSumI2,
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
      sumB25, setSumB25,
      sumC25, setSumC25,
      sumD25, setSumD25,
      sumE25, setSumE25,
      sumF25, setSumF25,
      sumG25, setSumG25,
      sumH25, setSumH25,
      sumI25, setSumI25,
      sumB19, setSumB19,
      sumC19, setSumC19,
      sumD19, setSumD19,
      sumE19, setSumE19,
      sumF19, setSumF19,
      sumG19, setSumG19,
      sumH19, setSumH19,
      sumI19, setSumI19,
      sumB21, setSumB21,
      sumC21, setSumC21,
      sumD21, setSumD21,
      sumE21, setSumE21,
      sumF21, setSumF21,
      sumG21, setSumG21,
      sumH21, setSumH21,
      sumI21, setSumI21,
      sumB37, setSumB37,
     sumC37, setSumC37,
     sumD37, setSumD37,
     sumE37, setSumE37,
     sumF37, setSumF37,
     sumG37, setSumG37,
     sumH37, setSumH37,
     sumI37, setSumI37,

     sumB43, setSumB43,
     sumC43, setSumC43,
     sumD43, setSumD43,
     sumE43, setSumE43,
     sumF43, setSumF43,
     sumG43, setSumG43,
     sumH43, setSumH43,
     sumI43, setSumI43,

     sumB4_25, setSumB4_25,
     sumC4_25, setSumC4_25,
     sumD4_25, setSumD4_25,
     sumE4_25, setSumE4_25,
     sumF4_25, setSumF4_25,
     sumG4_25, setSumG4_25,
     sumH4_25, setSumH4_25,
     sumI4_25, setSumI4_25,

     sumC4_26, setSumC4_26,
     sumD4_26, setSumD4_26,
     sumE4_26, setSumE4_26,
     sumF4_26, setSumF4_26,
     sumG4_26, setSumG4_26,
     sumH4_26, setSumH4_26,
     sumI4_26, setSumI4_26,

     sumB4_27, setSumB4_27,
     sumC4_27, setSumC4_27,
     sumD4_27, setSumD4_27,
     sumE4_27, setSumE4_27,
     sumF4_27, setSumF4_27,
     sumG4_27, setSumG4_27,
     sumH4_27, setSumH4_27,
     sumI4_27, setSumI4_27,

     sumB4_34, setSumB4_34,
     sumC4_34, setSumC4_34,
     sumD4_34, setSumD4_34,
     sumE4_34, setSumE4_34,
     sumF4_34, setSumF4_34,
     sumG4_34, setSumG4_34,
     sumH4_34, setSumH4_34,
     sumI4_34, setSumI4_34,
     sumC4_35, setSumC4_35,
     sumD4_35, setSumD4_35,
     sumE4_35, setSumE4_35,
     sumF4_35, setSumF4_35,
     sumG4_35, setSumG4_35,
     sumH4_35, setSumH4_35,
     sumI4_35, setSumI4_35,

     sumB4_38, setSumB4_38,
     sumC4_38, setSumC4_38,
     sumD4_38, setSumD4_38,
     sumE4_38, setSumE4_38,
     sumF4_38, setSumF4_38,
     sumG4_38, setSumG4_38,
     sumH4_38, setSumH4_38,
     sumI4_38, setSumI4_38,

     sumB4_29, setSumB4_29,
     sumC4_29, setSumC4_29,
     sumD4_29, setSumD4_29,
     sumE4_29, setSumE4_29,
     sumF4_29, setSumF4_29,
     sumG4_29, setSumG4_29,
     sumH4_29, setSumH4_29,
     sumI4_29, setSumI4_29,
 
     sumB4_30, setSumB4_30,
     sumC4_30, setSumC4_30,
     sumD4_30, setSumD4_30,
     sumE4_30, setSumE4_30,
     sumF4_30, setSumF4_30,
     sumG4_30, setSumG4_30,
     sumH4_30, setSumH4_30,
     sumI4_30, setSumI4_30,
 
     sumB4_31, setSumB4_31,
     sumC4_31, setSumC4_31,
     sumD4_31, setSumD4_31,
     sumE4_31, setSumE4_31,
     sumF4_31, setSumF4_31,
     sumG4_31, setSumG4_31,
     sumH4_31, setSumH4_31,
     sumI4_31, setSumI4_31,
 
     sumB4_40, setSumB4_40,
     sumC4_40, setSumC4_40,
     sumD4_40, setSumD4_40,
     sumE4_40, setSumE4_40,
     sumF4_40, setSumF4_40,
     sumG4_40, setSumG4_40,
     sumH4_40, setSumH4_40,
     sumI4_40, setSumI4_40,

     sumB4_21, setSumB4_21,
     sumC4_21, setSumC4_21,
     sumD4_21, setSumD4_21,
     sumE4_21, setSumE4_21,
     sumF4_21, setSumF4_21,
     sumG4_21, setSumG4_21,
     sumH4_21, setSumH4_21,
     sumI4_21, setSumI4_21,
   
     sumB4_39, setSumB4_39,
     sumC4_39, setSumC4_39,
     sumD4_39, setSumD4_39,
     sumE4_39, setSumE4_39,
     sumF4_39, setSumF4_39,
     sumG4_39, setSumG4_39,
     sumH4_39, setSumH4_39,
     sumI4_39, setSumI4_39,

     sumB4_23, setSumB4_23,
     sumC4_23, setSumC4_23,
     sumD4_23, setSumD4_23,
     sumE4_23, setSumE4_23,
     sumF4_23, setSumF4_23,
     sumG4_23, setSumG4_23,
     sumH4_23, setSumH4_23,
     sumI4_23, setSumI4_23,

     sumB4_28, setSumB4_28,
     sumC4_28, setSumC4_28,
     sumD4_28, setSumD4_28,
     sumE4_28, setSumE4_28,
     sumF4_28, setSumF4_28,
     sumG4_28, setSumG4_28,
     sumH4_28, setSumH4_28,
     sumI4_28, setSumI4_28,
       
     sumB5_40, setSumB5_40,
     sumC5_40, setSumC5_40,
     sumD5_40, setSumD5_40,
     sumE5_40, setSumE5_40,
     sumF5_40, setSumF5_40,
     sumG5_40, setSumG5_40,
     sumH5_40, setSumH5_40,
     sumI5_40, setSumI5_40,

     sumB51, setSumB51,
     sumC51, setSumC51,
     sumD51, setSumD51,
     sumE51, setSumE51,
     sumF51, setSumF51,
     sumG51, setSumG51,
     sumH51, setSumH51,
     sumI51, setSumI51,

     sumB31, setSumB31,
     sumC31, setSumC31,
     sumD31, setSumD31,
     sumE31, setSumE31,
     sumF31, setSumF31,
     sumG31, setSumG31,
     sumH31, setSumH31,
     sumI31, setSumI31,

     sumB5_16, setSumB5_16,
     sumC5_16, setSumC5_16,
     sumD5_16, setSumD5_16,
     sumE5_16, setSumE5_16,
     sumF5_16, setSumF5_16,
     sumG5_16, setSumG5_16,
     sumH5_16, setSumH5_16,
     sumI5_16, setSumI5_16,
      
     sumB5_10, setSumB5_10,
     sumC5_10, setSumC5_10,
     sumD5_10, setSumD5_10,
     sumE5_10, setSumE5_10,
     sumF5_10, setSumF5_10,
     sumG5_10, setSumG5_10,
     sumH5_10, setSumH5_10,
     sumI5_10, setSumI5_10,

     sumB5_11, setSumB5_11,
     sumC5_11, setSumC5_11,
     sumD5_11, setSumD5_11,
     sumE5_11, setSumE5_11,
     sumF5_11, setSumF5_11,
     sumG5_11, setSumG5_11,
     sumH5_11, setSumH5_11,
     sumI5_11, setSumI5_11,

     sumB5_15, setSumB5_15,
     sumC5_15, setSumC5_15,
     sumD5_15, setSumD5_15,
     sumE5_15, setSumE5_15,
     sumF5_15, setSumF5_15,
     sumG5_15, setSumG5_15,
     sumH5_15, setSumH5_15,
     sumI5_15, setSumI5_15,

     sumB5_21, setSumB5_21,
     sumC5_21, setSumC5_21,
     sumD5_21, setSumD5_21,
     sumE5_21, setSumE5_21,
     sumF5_21, setSumF5_21,
     sumG5_21, setSumG5_21,
     sumH5_21, setSumH5_21,
     sumI5_21, setSumI5_21,
        
     sumB5_22, setSumB5_22,
     sumC5_22, setSumC5_22,
     sumD5_22, setSumD5_22,
     sumE5_22, setSumE5_22,
     sumF5_22, setSumF5_22,
     sumG5_22, setSumG5_22,
     sumH5_22, setSumH5_22,
     sumI5_22, setSumI5_22,

     sumB4_6, setSumB4_6,
     sumC4_6, setSumC4_6,
     sumD4_6, setSumD4_6,
     sumE4_6, setSumE4_6,
     sumF4_6, setSumF4_6,
     sumG4_6, setSumG4_6,
     sumH4_6, setSumH4_6,
     sumI4_6, setSumI4_6,

     sumB5_28, setSumB5_28,
     sumC5_28, setSumC5_28,
     sumD5_28, setSumD5_28,
     sumE5_28, setSumE5_28,
     sumF5_28, setSumF5_28,
     sumG5_28, setSumG5_28,
     sumH5_28, setSumH5_28,
     sumI5_28, setSumI5_28,

     sumB5_14, setSumB5_14,
     sumC5_14, setSumC5_14,
     sumD5_14, setSumD5_14,
     sumE5_14, setSumE5_14,
     sumF5_14, setSumF5_14,
     sumG5_14, setSumG5_14,
     sumH5_14, setSumH5_14,
     sumI5_14, setSumI5_14,

     sumB7_66, setSumB7_66,
     sumC7_66, setSumC7_66,
     sumD7_66, setSumD7_66,
     sumE7_66, setSumE7_66,
     sumF7_66, setSumF7_66,
     sumG7_66, setSumG7_66,
     sumH7_66, setSumH7_66,
     sumI7_66, setSumI7_66,
      
      
      
      
      
    }}>
      {children}
    </AppContext.Provider>
  );
};
