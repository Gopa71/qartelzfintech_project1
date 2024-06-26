import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../AppContext";
import jwtDecode from "jwt-decode";
import Navbarr from "../views/navbarr/Navbarr";
import "../styles.css";
import Footer from "../views/Footer/footer";


function Assets() {
  
  const {
    inputValues,
    setInputValues,
    tot15,
    tot23,
    tot31,
    tot37,
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

    sumB43,
    setSumB43,
    sumC43,
    setSumC43,
    sumD43,
    setSumD43,
    sumE43,
    setSumE43,
    sumF43,
    setSumF43,
    sumG43,
    setSumG43,
    sumH43,
    setSumH43,
    sumI43,
    setSumI43,
  } = useContext(AppContext);

  const [sumB12, setSumB12] = useState(0);
  const [sumC12, setSumC12] = useState(0);
  const [sumD12, setSumD12] = useState(0);
  const [sumE12, setSumE12] = useState(0);
  const [sumF12, setSumF12] = useState(0);
  const [sumG12, setSumG12] = useState(0);
  const [sumH12, setSumH12] = useState(0);
  const [sumI12, setSumI12] = useState(0);

  const [sumB24, setSumB24] = useState(0);
  const [sumC24, setSumC24] = useState(0);
  const [sumD24, setSumD24] = useState(0);
  const [sumE24, setSumE24] = useState(0);
  const [sumF24, setSumF24] = useState(0);
  const [sumG24, setSumG24] = useState(0);
  const [sumH24, setSumH24] = useState(0);
  const [sumI24, setSumI24] = useState(0);

  // const [prefix, setPrefix] = useState("");
  // const [tot2020, setTot2020] = useState({});
  // const [Cost19, setCost19] = useState({});

  const token = localStorage.getItem("authTokens");

  if (token) {
    const decode = jwtDecode(token);
    var user_id = decode.user_id;
    var username = decode.username;
    var full_name = decode.full_name;
    var image = decode.image;
  }

  const uploadData = async (cell_id, cell_value) => {
    try {
      const user_id = localStorage.getItem("user_id");
      const res = await fetch("http://127.0.0.1:8000/api/save_assets/", {
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

  //-------------------------------------------------- SAVE FOR 12 TO DATABASE ---------------------------------------------

  const update12 = () => {
    setSumB12(calculateTotal([0]) + parseFloat(tot15.B3_15 || 0));
    setSumC12(calculateTotal([0]) + parseFloat(tot15.C3_15 || 0));
    setSumD12(calculateTotal([0]) + parseFloat(tot15.D3_15 || 0));
    setSumE12(calculateTotal([0]) + parseFloat(tot15.E3_15 || 0));
    setSumF12(calculateTotal([0]) + parseFloat(tot15.F3_15 || 0));
    setSumG12(calculateTotal([0]) + parseFloat(tot15.G3_15 || 0));
    setSumH12(calculateTotal([0]) + parseFloat(tot15.H3_15 || 0));
    setSumI12(calculateTotal([0]) + parseFloat(tot15.I3_15 || 0));
  };

  useEffect(() => {
    update12();
  }, [inputValues, tot15]);

  useEffect(() => {
    const upload12 = async () => {
      await uploadData("B2_12", sumB12.toString());
      await uploadData("C2_12", sumC12.toString());
      await uploadData("D2_12", sumD12.toString());
      await uploadData("E2_12", sumE12.toString());
      await uploadData("F2_12", sumF12.toString());
      await uploadData("G2_12", sumG12.toString());
      await uploadData("H2_12", sumH12.toString());
      await uploadData("I2_12", sumI12.toString());
    };
    if (
      sumB12 ||
      sumC12 ||
      sumD12 ||
      sumE12 ||
      sumF12 ||
      sumG12 ||
      sumH12 ||
      sumI12
    ) {
      upload12();
    }
  }, [sumB12, sumC12, sumD12, sumE12, sumF12, sumG12, sumH12, sumI12]);

  //------------------------------------------------------ CODE FOR 7 - 13 ---------------------------------------------

  const updateTotals = () => {
    setSumB2(
      calculateTotal(["B1_23", "B1_24", "B1_25", "B2_10", "B2_11"]) +
        parseFloat(tot15.B3_15 || 0)
    );
    setSumC2(
      calculateTotal(["C1_23", "C1_24", "C1_25", "C2_10", "C2_11"]) +
        parseFloat(tot15.C3_15 || 0)
    );
    setSumD2(
      calculateTotal(["D1_23", "D1_24", "D1_25", "D2_10", "D2_11"]) +
        parseFloat(tot15.D3_15 || 0)
    );
    setSumE2(
      calculateTotal(["E1_23", "E1_24", "E1_25", "E2_10", "E2_11"]) +
        parseFloat(tot15.E3_15 || 0)
    );
    setSumF2(
      calculateTotal(["F1_23", "F1_24", "F1_25", "F2_10", "F2_11"]) +
        parseFloat(tot15.F3_15 || 0)
    );
    setSumG2(
      calculateTotal(["G1_23", "G1_24", "G1_25", "G2_10", "G2_11"]) +
        parseFloat(tot15.G3_15 || 0)
    );
    setSumH2(
      calculateTotal(["H1_23", "H1_24", "H1_25", "H2_10", "H2_11"]) +
        parseFloat(tot15.H3_15 || 0)
    );
    setSumI2(
      calculateTotal(["I1_23", "I1_24", "I1_25", "I2_10", "I2_11"]) +
        parseFloat(tot15.I3_15 || 0)
    );
  };

  useEffect(() => {
    updateTotals();
  }, [inputValues, tot15]);

  useEffect(() => {
    const uploadTotals = async () => {
      await uploadData("B2_13", sumB2.toString());
      await uploadData("C2_13", sumC2.toString());
      await uploadData("D2_13", sumD2.toString());
      await uploadData("E2_13", sumE2.toString());
      await uploadData("F2_13", sumF2.toString());
      await uploadData("G2_13", sumG2.toString());
      await uploadData("H2_13", sumH2.toString());
      await uploadData("I2_13", sumI2.toString());
    };
    if (sumB2 || sumC2 || sumD2 || sumE2 || sumF2 || sumG2 || sumH2 || sumI2) {
      uploadTotals();
    }
  }, [sumB2, sumC2, sumD2, sumE2, sumF2, sumG2, sumH2, sumI2]);

  useEffect(() => {
    const updateYearData = async (yearKey, inputKey) => {
      await uploadData(yearKey, inputValues[inputKey]);
    };

    const years = [
      ["B2_7", "B1_25"],
      ["B2_8", "B1_24"],
      ["B2_9", "B1_23"],
      ["C2_7", "C1_25"],
      ["C2_8", "C1_24"],
      ["C2_9", "C1_23"],
      ["D2_7", "D1_25"],
      ["D2_8", "D1_24"],
      ["D2_9", "D1_23"],
      ["E2_7", "E1_25"],
      ["E2_8", "E1_24"],
      ["E2_9", "E1_23"],
      ["F2_7", "F1_25"],
      ["F2_8", "F1_24"],
      ["F2_9", "F1_23"],
      ["G2_7", "G1_25"],
      ["G2_8", "G1_24"],
      ["G2_9", "G1_23"],
    ];

    years.forEach(([yearKey, inputKey]) => {
      if (inputValues[inputKey]) {
        updateYearData(yearKey, inputKey);
      }
    });
  }, [inputValues]);

  //-------------------------------------------------- MAIN CODE FUNCTION ------------------------------------------------

  const changeData = async (e) => {
    try {
      const { name, value } = e.target;
      setInputValues((prev) => ({ ...prev, [name]: value }));

      // if (name.includes("_14") || name.includes("_15") || name.includes("_16") || name.includes("_17") || name.includes("_18") || name.includes("_19") || name.includes("_20") || name.includes("_21") || name.includes("_23") || name.includes("_24") || name.includes("_25") || name.includes("_29") || name.includes("_30") || name.includes("_33") || name.includes("_34") || name.includes("_36") || name.includes("_40")) {
      //   setPrefix(name.split("_")[0]);
      // }

      if (value !== "") {
        await uploadData(name, value);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  //------------------------------------------------- TOTAL OF 19 -------------------------------------------------------

  const uploadSum19 = () => {
    setSumB19(calculateTotal(["B2_14", "B2_15", "B2_16", "B2_17", "B2_18"]));
    setSumC19(calculateTotal(["C2_14", "C2_15", "C2_16", "C2_17", "C2_18"]));
    setSumD19(calculateTotal(["D2_14", "D2_15", "D2_16", "D2_17", "D2_18"]));
    setSumE19(calculateTotal(["E2_14", "E2_15", "E2_16", "E2_17", "E2_18"]));
    setSumF19(calculateTotal(["F2_14", "F2_15", "F2_16", "F2_17", "F2_18"]));
    setSumG19(calculateTotal(["G2_14", "G2_15", "G2_16", "G2_17", "G2_18"]));
    setSumH19(calculateTotal(["H2_14", "H2_15", "H2_16", "H2_17", "H2_18"]));
    setSumI19(calculateTotal(["I2_14", "I2_15", "I2_16", "I2_17", "I2_18"]));
  };

  useEffect(() => {
    uploadSum19();
  }, [inputValues]);

  useEffect(() => {
    const uploadSum19 = async () => {
      await uploadData("B2_19", sumB19.toString());
      await uploadData("C2_19", sumC19.toString());
      await uploadData("D2_19", sumD19.toString());
      await uploadData("E2_19", sumE19.toString());
      await uploadData("F2_19", sumF19.toString());
      await uploadData("G2_19", sumG19.toString());
      await uploadData("H2_19", sumH19.toString());
      await uploadData("I2_19", sumI19.toString());
    };
    if (
      sumB19 ||
      sumC19 ||
      sumD19 ||
      sumE19 ||
      sumF19 ||
      sumG19 ||
      sumH19 ||
      sumI19
    ) {
      uploadSum19();
    }
  }, [sumB19, sumC19, sumD19, sumE19, sumF19, sumG19, sumH19, sumI19]);

  //------------------------------------------------- TOTAL OF 21 -------------------------------------------------------

  const uploadSum21 = () => {
    setSumB21(parseFloat(sumB19 || 0) - calculateTotal(["B2_20"]));
    setSumC21(parseFloat(sumC19 || 0) - calculateTotal(["C2_20"]));
    setSumD21(parseFloat(sumD19 || 0) - calculateTotal(["D2_20"]));
    setSumE21(parseFloat(sumE19 || 0) - calculateTotal(["E2_20"]));
    setSumF21(parseFloat(sumF19 || 0) - calculateTotal(["F2_20"]));
    setSumG21(parseFloat(sumG19 || 0) - calculateTotal(["G2_20"]));
    setSumH21(parseFloat(sumH19 || 0) - calculateTotal(["H2_20"]));
    setSumI21(parseFloat(sumI19 || 0) - calculateTotal(["I2_20"]));
  };

  useEffect(() => {
    uploadSum21();
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
    const uploadSum21 = async () => {
      await uploadData("B2_21", sumB21.toString());
      await uploadData("C2_21", sumC21.toString());
      await uploadData("D2_21", sumD21.toString());
      await uploadData("E2_21", sumE21.toString());
      await uploadData("F2_21", sumF21.toString());
      await uploadData("G2_21", sumG21.toString());
      await uploadData("H2_21", sumH21.toString());
      await uploadData("I2_21", sumI21.toString());
    };
    if (
      sumB21 ||
      sumC21 ||
      sumD21 ||
      sumE21 ||
      sumF21 ||
      sumG21 ||
      sumH21 ||
      sumI21
    ) {
      uploadSum21();
    }
  }, [sumB21, sumC21, sumD21, sumE21, sumF21, sumG21, sumH21, sumI21]);

  //-------------------------------------------------- SAVE FOR 24 TO DATABASE ---------------------------------------------

  const update24 = () => {
    setSumB24(calculateTotal([0]) + parseFloat(tot23.B3_23 || 0));
    setSumC24(calculateTotal([0]) + parseFloat(tot23.C3_23 || 0));
    setSumD24(calculateTotal([0]) + parseFloat(tot23.D3_23 || 0));
    setSumE24(calculateTotal([0]) + parseFloat(tot23.E3_23 || 0));
    setSumF24(calculateTotal([0]) + parseFloat(tot23.F3_23 || 0));
    setSumG24(calculateTotal([0]) + parseFloat(tot23.G3_23 || 0));
    setSumH24(calculateTotal([0]) + parseFloat(tot23.H3_23 || 0));
    setSumI24(calculateTotal([0]) + parseFloat(tot23.I3_23 || 0));
  };

  useEffect(() => {
    update24();
  }, [inputValues, tot23]);

  useEffect(() => {
    const upload24 = async () => {
      await uploadData("B2_24", sumB24.toString());
      await uploadData("C2_24", sumC24.toString());
      await uploadData("D2_24", sumD24.toString());
      await uploadData("E2_24", sumE24.toString());
      await uploadData("F2_24", sumF24.toString());
      await uploadData("G2_24", sumG24.toString());
      await uploadData("H2_24", sumH24.toString());
      await uploadData("I2_24", sumI24.toString());
    };
    if (
      sumB24 ||
      sumC24 ||
      sumD24 ||
      sumE24 ||
      sumF24 ||
      sumG24 ||
      sumH24 ||
      sumI24
    ) {
      upload24();
    }
  }, [sumB24, sumC24, sumD24, sumE24, sumF24, sumG24, sumH24, sumI24]);

  //------------------------------------------TOTAL & SAVE FOR 25 TO DATABASE ---------------------------------------------

  const update25 = () => {
    setSumB25(calculateTotal(["B2_23"]) + parseFloat(tot23.B3_23 || 0));
    setSumC25(calculateTotal(["C2_23"]) + parseFloat(tot23.C3_23 || 0));
    setSumD25(calculateTotal(["D2_23"]) + parseFloat(tot23.D3_23 || 0));
    setSumE25(calculateTotal(["E2_23"]) + parseFloat(tot23.E3_23 || 0));
    setSumF25(calculateTotal(["F2_23"]) + parseFloat(tot23.F3_23 || 0));
    setSumG25(calculateTotal(["G2_23"]) + parseFloat(tot23.G3_23 || 0));
    setSumH25(calculateTotal(["H2_23"]) + parseFloat(tot23.H3_23 || 0));
    setSumI25(calculateTotal(["I2_23"]) + parseFloat(tot23.I3_23 || 0));
  };

  useEffect(() => {
    update25();
  }, [inputValues, tot23]);

  useEffect(() => {
    const upload25 = async () => {
      await uploadData("B2_25", sumB25.toString());
      await uploadData("C2_25", sumC25.toString());
      await uploadData("D2_25", sumD25.toString());
      await uploadData("E2_25", sumE25.toString());
      await uploadData("F2_25", sumF25.toString());
      await uploadData("G2_25", sumG25.toString());
      await uploadData("H2_25", sumH25.toString());
      await uploadData("I2_25", sumI25.toString());
    };
    if (
      sumB25 ||
      sumC25 ||
      sumD25 ||
      sumE25 ||
      sumF25 ||
      sumG25 ||
      sumH25 ||
      sumI25
    ) {
      upload25();
    }
  }, [sumB25, sumC25, sumD25, sumE25, sumF25, sumG25, sumH25, sumI25]);

  //------------------------------------------------- TOTAL OF 30 -------------------------------------------------------

  const uploadSum30 = () => {
    setSumB30(calculateTotal(["B2_27", "B2_28", "B2_29"]));
    setSumC30(calculateTotal(["C2_27", "C2_28", "C2_29"]));
    setSumD30(calculateTotal(["D2_27", "D2_28", "D2_29"]));
    setSumE30(calculateTotal(["E2_27", "E2_28", "E2_29"]));
    setSumF30(calculateTotal(["F2_27", "F2_28", "F2_29"]));
    setSumG30(calculateTotal(["G2_27", "G2_28", "G2_29"]));
    setSumH30(calculateTotal(["H2_27", "H2_28", "H2_29"]));
    setSumI30(calculateTotal(["I2_27", "I2_28", "I2_29"]));
  };

  useEffect(() => {
    uploadSum30();
  }, [inputValues]);

  useEffect(() => {
    const uploadSum30 = async () => {
      await uploadData("B2_30", sumB30.toString());
      await uploadData("C2_30", sumC30.toString());
      await uploadData("D2_30", sumD30.toString());
      await uploadData("E2_30", sumE30.toString());
      await uploadData("F2_30", sumF30.toString());
      await uploadData("G2_30", sumG30.toString());
      await uploadData("H2_30", sumH30.toString());
      await uploadData("I2_30", sumI30.toString());
    };
    if (
      sumB30 ||
      sumC30 ||
      sumD30 ||
      sumE30 ||
      sumF30 ||
      sumG30 ||
      sumH30 ||
      sumI30
    ) {
      uploadSum30();
    }
  }, [sumB30, sumC30, sumD30, sumE30, sumF30, sumG30, sumH30, sumI30]);

  // /------------------------------------------------- TOTAL OF 31 ------------------------------------------------------

  const uploadSum31 = () => {
    setSumB31(
      parseFloat(sumB2 || 0) +
        parseFloat(sumB21 || 0) +
        parseFloat(sumB25 || 0) +
        parseFloat(sumB30 || 0)
    );
    setSumC31(
      parseFloat(sumC2 || 0) +
        parseFloat(sumC21 || 0) +
        parseFloat(sumC25 || 0) +
        parseFloat(sumC30 || 0)
    );
    setSumD31(
      parseFloat(sumD2 || 0) +
        parseFloat(sumD21 || 0) +
        parseFloat(sumD25 || 0) +
        parseFloat(sumD30 || 0)
    );
    setSumE31(
      parseFloat(sumE2 || 0) +
        parseFloat(sumE21 || 0) +
        parseFloat(sumE25 || 0) +
        parseFloat(sumE30 || 0)
    );
    setSumF31(
      parseFloat(sumF2 || 0) +
        parseFloat(sumF21 || 0) +
        parseFloat(sumF25 || 0) +
        parseFloat(sumF30 || 0)
    );
    setSumG31(
      parseFloat(sumG2 || 0) +
        parseFloat(sumG21 || 0) +
        parseFloat(sumG25 || 0) +
        parseFloat(sumG30 || 0)
    );
    setSumH31(
      parseFloat(sumH2 || 0) +
        parseFloat(sumH21 || 0) +
        parseFloat(sumH25 || 0) +
        parseFloat(sumH30 || 0)
    );
    setSumI31(
      parseFloat(sumI2 || 0) +
        parseFloat(sumI21 || 0) +
        parseFloat(sumI25 || 0) +
        parseFloat(sumI30 || 0)
    );
  };

  useEffect(() => {
    uploadSum31();
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
    sumB21,
    sumC21,
    sumD21,
    sumE21,
    sumF21,
    sumG21,
    sumH21,
    sumI21,
    sumB25,
    sumC25,
    sumD25,
    sumE25,
    sumF25,
    sumG25,
    sumH25,
    sumI25,
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
    const uploadSum31 = async () => {
      await uploadData("B2_31", sumB31.toString());
      await uploadData("C2_31", sumC31.toString());
      await uploadData("D2_31", sumD31.toString());
      await uploadData("E2_31", sumE31.toString());
      await uploadData("F2_31", sumF31.toString());
      await uploadData("G2_31", sumG31.toString());
      await uploadData("H2_31", sumH31.toString());
      await uploadData("I2_31", sumI31.toString());
    };
    if (
      sumB31 ||
      sumC31 ||
      sumD31 ||
      sumE31 ||
      sumF31 ||
      sumG31 ||
      sumH31 ||
      sumI31
    ) {
      uploadSum31();
    }
  }, [sumB31, sumC31, sumD31, sumE31, sumF31, sumG31, sumH31, sumI31]);

  //----------------------------------------TOTAL AND SAVE FOR 37 TO DATABASE ---------------------------------------------

  const update37 = () => {
    setSumB37(parseFloat(tot31.B3_31 || 0));
    setSumC37(parseFloat(tot31.C3_31 || 0));
    setSumD37(parseFloat(tot31.D3_31 || 0));
    setSumE37(parseFloat(tot31.E3_31 || 0));
    setSumF37(parseFloat(tot31.F3_31 || 0));
    setSumG37(parseFloat(tot31.G3_31 || 0));
    setSumH37(parseFloat(tot31.H3_31 || 0));
    setSumI37(parseFloat(tot31.I3_31 || 0));
  };

  useEffect(() => {
    update37();
  }, [inputValues, tot31]);

  useEffect(() => {
    const upload37 = async () => {
      await uploadData("B2_37", sumB37.toString());
      await uploadData("C2_37", sumC37.toString());
      await uploadData("D2_37", sumD37.toString());
      await uploadData("E2_37", sumE37.toString());
      await uploadData("F2_37", sumF37.toString());
      await uploadData("G2_37", sumG37.toString());
      await uploadData("H2_37", sumH37.toString());
      await uploadData("I2_37", sumI37.toString());
    };
    if (
      sumB37 ||
      sumC37 ||
      sumD37 ||
      sumE37 ||
      sumF37 ||
      sumG37 ||
      sumH37 ||
      sumI37
    ) {
      upload37();
    }
  }, [sumB37, sumC37, sumD37, sumE37, sumF37, sumG37, sumH37, sumI37]);

  //------------------------------------------TOTAL & SAVE FOR 38 TO DATABASE ---------------------------------------------

  const update38 = () => {
    setSumB38(
      calculateTotal(["B2_34", "B2_35", "B2_36"]) + parseFloat(tot31.B3_31 || 0)
    );
    setSumC38(
      calculateTotal(["C2_34", "C2_35", "C2_36"]) + parseFloat(tot31.C3_31 || 0)
    );
    setSumD38(
      calculateTotal(["D2_34", "D2_35", "D2_36"]) + parseFloat(tot31.D3_31 || 0)
    );
    setSumE38(
      calculateTotal(["E2_34", "E2_35", "E2_36"]) + parseFloat(tot31.E3_31 || 0)
    );
    setSumF38(
      calculateTotal(["F2_34", "F2_35", "F2_36"]) + parseFloat(tot31.F3_31 || 0)
    );
    setSumG38(
      calculateTotal(["G2_34", "G2_35", "G2_36"]) + parseFloat(tot31.G3_31 || 0)
    );
    setSumH38(
      calculateTotal(["H2_34", "H2_35", "H2_36"]) + parseFloat(tot31.H3_31 || 0)
    );
    setSumI38(
      calculateTotal(["I2_34", "I2_35", "I2_36"]) + parseFloat(tot31.I3_31 || 0)
    );
  };

  useEffect(() => {
    update38();
  }, [inputValues, tot31]);

  useEffect(() => {
    const upload38 = async () => {
      await uploadData("B2_38", sumB38.toString());
      await uploadData("C2_38", sumC38.toString());
      await uploadData("D2_38", sumD38.toString());
      await uploadData("E2_38", sumE38.toString());
      await uploadData("F2_38", sumF38.toString());
      await uploadData("G2_38", sumG38.toString());
      await uploadData("H2_38", sumH38.toString());
      await uploadData("I2_38", sumI38.toString());
    };
    if (
      sumB38 ||
      sumC38 ||
      sumD38 ||
      sumE38 ||
      sumF38 ||
      sumG38 ||
      sumH38 ||
      sumI38
    ) {
      upload38();
    }
  }, [sumB38, sumC38, sumD38, sumE38, sumF38, sumG38, sumH38, sumI38]);

  //----------------------------------------TOTAL AND SAVE FOR 43 TO DATABASE ---------------------------------------------

  const update43 = () => {
    setSumB43(parseFloat(tot37.B3_37 || 0));
    setSumC43(parseFloat(tot37.C3_37 || 0));
    setSumD43(parseFloat(tot37.D3_37 || 0));
    setSumE43(parseFloat(tot37.E3_37 || 0));
    setSumF43(parseFloat(tot37.F3_37 || 0));
    setSumG43(parseFloat(tot37.G3_37 || 0));
    setSumH43(parseFloat(tot37.H3_37 || 0));
    setSumI43(parseFloat(tot37.I3_37 || 0));
  };

  useEffect(() => {
    update43();
  }, [inputValues, tot37]);

  useEffect(() => {
    const upload43 = async () => {
      await uploadData("B2_43", sumB43.toString());
      await uploadData("C2_43", sumC43.toString());
      await uploadData("D2_43", sumD43.toString());
      await uploadData("E2_43", sumE43.toString());
      await uploadData("F2_43", sumF43.toString());
      await uploadData("G2_43", sumG43.toString());
      await uploadData("H2_43", sumH43.toString());
      await uploadData("I2_43", sumI43.toString());
    };
    if (
      sumB43 ||
      sumC43 ||
      sumD43 ||
      sumE43 ||
      sumF43 ||
      sumG43 ||
      sumH43 ||
      sumI43
    ) {
      upload43();
    }
  }, [sumB43, sumC43, sumD43, sumE43, sumF43, sumG43, sumH43, sumI43]);

  //------------------------------------------TOTAL & SAVE FOR 44 TO DATABASE ---------------------------------------------

  const update44 = () => {
    setSumB44(
      calculateTotal(["B2_40", "B2_41", "B2_42"]) + parseFloat(tot37.B3_38 || 0)
    );
    setSumC44(
      calculateTotal(["C2_40", "C2_41", "C2_42"]) + parseFloat(tot37.C3_38 || 0)
    );
    setSumD44(
      calculateTotal(["D2_40", "D2_41", "D2_42"]) + parseFloat(tot37.D3_38 || 0)
    );
    setSumE44(
      calculateTotal(["E2_40", "E2_41", "E2_42"]) + parseFloat(tot37.E3_38 || 0)
    );
    setSumF44(
      calculateTotal(["F2_40", "F2_41", "F2_42"]) + parseFloat(tot37.F3_38 || 0)
    );
    setSumG44(
      calculateTotal(["G2_40", "G2_41", "G2_42"]) + parseFloat(tot37.G3_38 || 0)
    );
    setSumH44(
      calculateTotal(["H2_40", "H2_41", "H2_42"]) + parseFloat(tot37.H3_38 || 0)
    );
    setSumI44(
      calculateTotal(["I2_40", "I2_41", "I2_42"]) + parseFloat(tot37.I3_38 || 0)
    );
  };

  useEffect(() => {
    update44();
  }, [inputValues, tot31]);

  useEffect(() => {
    const upload44 = async () => {
      await uploadData("B2_44", sumB44.toString());
      await uploadData("C2_44", sumC44.toString());
      await uploadData("D2_44", sumD44.toString());
      await uploadData("E2_44", sumE44.toString());
      await uploadData("F2_44", sumF44.toString());
      await uploadData("G2_44", sumG44.toString());
      await uploadData("H2_44", sumH44.toString());
      await uploadData("I2_44", sumI44.toString());
    };
    if (
      sumB44 ||
      sumC44 ||
      sumD44 ||
      sumE44 ||
      sumF44 ||
      sumG44 ||
      sumH44 ||
      sumI44
    ) {
      upload44();
    }
  }, [sumB44, sumC44, sumD44, sumE44, sumF44, sumG44, sumH44, sumI44]);

  // /------------------------------------------------- TOTAL OF 45 ------------------------------------------------------

  const uploadSum45 = () => {
    setSumB45(parseFloat(sumB38 || 0) + parseFloat(sumB44 || 0));
    setSumC45(parseFloat(sumC38 || 0) + parseFloat(sumC44 || 0));
    setSumD45(parseFloat(sumD38 || 0) + parseFloat(sumD44 || 0));
    setSumE45(parseFloat(sumE38 || 0) + parseFloat(sumE44 || 0));
    setSumF45(parseFloat(sumF38 || 0) + parseFloat(sumF44 || 0));
    setSumG45(parseFloat(sumG38 || 0) + parseFloat(sumG44 || 0));
    setSumH45(parseFloat(sumH38 || 0) + parseFloat(sumH44 || 0));
    setSumI45(parseFloat(sumI38 || 0) + parseFloat(sumI44 || 0));
  };

  useEffect(() => {
    uploadSum45();
  }, [
    inputValues,
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
  ]);

  useEffect(() => {
    const uploadSum45 = async () => {
      await uploadData("B2_45", sumB45.toString());
      await uploadData("C2_45", sumC45.toString());
      await uploadData("D2_45", sumD45.toString());
      await uploadData("E2_45", sumE45.toString());
      await uploadData("F2_45", sumF45.toString());
      await uploadData("G2_45", sumG45.toString());
      await uploadData("H2_45", sumH45.toString());
      await uploadData("I2_45", sumI45.toString());
    };
    if (
      sumB45 ||
      sumC45 ||
      sumD45 ||
      sumE45 ||
      sumF45 ||
      sumG45 ||
      sumH45 ||
      sumI45
    ) {
      uploadSum45();
    }
  }, [sumB45, sumC45, sumD45, sumE45, sumF45, sumG45, sumH45, sumI45]);

  //------------------------------------------------- TOTAL OF 50 -------------------------------------------------------

  const uploadSum50 = () => {
    setSumB50(calculateTotal(["B2_47", "B2_48", "B2_49"]));
    setSumC50(calculateTotal(["C2_47", "C2_48", "C2_49"]));
    setSumD50(calculateTotal(["D2_47", "D2_48", "D2_49"]));
    setSumE50(calculateTotal(["E2_47", "E2_48", "E2_49"]));
    setSumF50(calculateTotal(["F2_47", "F2_48", "F2_49"]));
    setSumG50(calculateTotal(["G2_47", "G2_48", "G2_49"]));
    setSumH50(calculateTotal(["H2_47", "H2_48", "H2_49"]));
    setSumI50(calculateTotal(["I2_47", "I2_48", "I2_49"]));
  };

  useEffect(() => {
    uploadSum50();
  }, [inputValues]);

  useEffect(() => {
    const uploadSum50 = async () => {
      await uploadData("B2_50", sumB50.toString());
      await uploadData("C2_50", sumC50.toString());
      await uploadData("D2_50", sumD50.toString());
      await uploadData("E2_50", sumE50.toString());
      await uploadData("F2_50", sumF50.toString());
      await uploadData("G2_50", sumG50.toString());
      await uploadData("H2_50", sumH50.toString());
      await uploadData("I2_50", sumI50.toString());
    };
    if (
      sumB50 ||
      sumC50 ||
      sumD50 ||
      sumE50 ||
      sumF50 ||
      sumG50 ||
      sumH50 ||
      sumI50
    ) {
      uploadSum50();
    }
  }, [sumB50, sumC50, sumD50, sumE50, sumF50, sumG50, sumH50, sumI50]);

  // /------------------------------------------------- TOTAL OF 51 ------------------------------------------------------

  const uploadSum51 = () => {
    setSumB51(
      parseFloat(sumB38 || 0) +
        parseFloat(sumB44 || 0) +
        parseFloat(sumB50 || 0)
    );
    setSumC51(
      parseFloat(sumC38 || 0) +
        parseFloat(sumC44 || 0) +
        parseFloat(sumC50 || 0)
    );
    setSumD51(
      parseFloat(sumD38 || 0) +
        parseFloat(sumD44 || 0) +
        parseFloat(sumD50 || 0)
    );
    setSumE51(
      parseFloat(sumE38 || 0) +
        parseFloat(sumE44 || 0) +
        parseFloat(sumE50 || 0)
    );
    setSumF51(
      parseFloat(sumF38 || 0) +
        parseFloat(sumF44 || 0) +
        parseFloat(sumF50 || 0)
    );
    setSumG51(
      parseFloat(sumG38 || 0) +
        parseFloat(sumG44 || 0) +
        parseFloat(sumG50 || 0)
    );
    setSumH51(
      parseFloat(sumH38 || 0) +
        parseFloat(sumH44 || 0) +
        parseFloat(sumH50 || 0)
    );
    setSumI51(
      parseFloat(sumI38 || 0) +
        parseFloat(sumI44 || 0) +
        parseFloat(sumI50 || 0)
    );
  };

  useEffect(() => {
    uploadSum51();
  }, [
    inputValues,
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
    sumB50,
    sumC50,
    sumD50,
    sumE50,
    sumF50,
    sumG50,
    sumH50,
    sumI50,
  ]);

  useEffect(() => {
    const uploadSum51 = async () => {
      await uploadData("B2_51", sumB51.toString());
      await uploadData("C2_51", sumC51.toString());
      await uploadData("D2_51", sumD51.toString());
      await uploadData("E2_51", sumE51.toString());
      await uploadData("F2_51", sumF51.toString());
      await uploadData("G2_51", sumG51.toString());
      await uploadData("H2_51", sumH51.toString());
      await uploadData("I2_51", sumI51.toString());
    };
    if (
      sumB51 ||
      sumC51 ||
      sumD51 ||
      sumE51 ||
      sumF51 ||
      sumG51 ||
      sumH51 ||
      sumI51
    ) {
      uploadSum51();
    }
  }, [sumB51, sumC51, sumD51, sumE51, sumF51, sumG51, sumH51, sumI51]);

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
    <>
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
            <h2 className="p-2 font-bold text-xl">
              {username}
             
            </h2>
          </div>

          <div className="container-fluid border-1 border-black mt-3">
            <div className="row">
              <div className="col-lg-4 border-end border-black  d-flex justify-content-center p-1 text-bold text-xl">
                <h5>Analysis Of Balance Sheet</h5>
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
                <div className="col-lg-4 border-end border-black  d-flex justify-content-center">
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
                <div className="col-lg-4 border-end border-black  d-flex justify-content-center">
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

          <div className="container-fluid border-1 border-black mt-3">
            <div
              className="row"
              style={{ backgroundColor: "rgb(224, 231, 231)" }}
            >
              <div className="col-lg-4 border-end border-black  d-flex justify-content-center">
                <h5 style={{ color: "red" }}>CURRENT ASSETS</h5>
              </div>
            </div>
          </div>

          <div className="container-fluid border-1 border-black mt-3 div_main4">
            <div className="row">
              <div
                className="col-lg-4 border-end border-black  d-flex justify-content-center"
                style={{ backgroundColor: "rgb(169, 255, 251)" }}
              >
                <h6>
                  <b>Raw Materials</b>
                </h6>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      style={{ backgroundColor: "rgb(169, 255, 251)" }}
                      type="text"
                      className="form-control"
                      aria-label="First name"
                      name="B2_7"
                      value={inputValues.B1_25}
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
                      style={{ backgroundColor: "rgb(169, 255, 251)" }}
                      aria-label="First name"
                      name="C2_7"
                      value={inputValues.C1_25}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      style={{ backgroundColor: "rgb(169, 255, 251)" }}
                      type="text"
                      className="form-control"
                      aria-label="First name"
                      name="D2_7"
                      value={inputValues.D1_25}
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
                      style={{ backgroundColor: "rgb(169, 255, 251)" }}
                      aria-label="First name"
                      name="E2_7"
                      value={inputValues.E1_25}
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
                      style={{ backgroundColor: "rgb(169, 255, 251)" }}
                      aria-label="First name"
                      name="F2_7"
                      value={inputValues.F1_25}
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
                      style={{ backgroundColor: "rgb(169, 255, 251)" }}
                      aria-label="First name"
                      name="G2_7"
                      value={inputValues.G1_25}
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
                      style={{ backgroundColor: "rgb(169, 255, 251)" }}
                      aria-label="First name"
                      name="H2_7"
                      value={inputValues.H1_25}
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
                      style={{ backgroundColor: "rgb(169, 255, 251)" }}
                      aria-label="First name"
                      name="I2_7"
                      value={inputValues.I1_25}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid border-1 border-black mt-3 div_main4">
            <div className="row">
              <div
                className="col-lg-4 border-end border-black  d-flex justify-content-center"
                style={{ backgroundColor: "rgb(169, 255, 251)" }}
              >
                <h6>
                  <b>Stock in Process</b>
                </h6>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      style={{ backgroundColor: "rgb(169, 255, 251)" }}
                      type="text"
                      className="form-control"
                      aria-label="First name"
                      name="B2_8"
                      value={inputValues.B1_24}
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
                      style={{ backgroundColor: "rgb(169, 255, 251)" }}
                      aria-label="First name"
                      name="C2_8"
                      value={inputValues.C1_24}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      style={{ backgroundColor: "rgb(169, 255, 251)" }}
                      type="text"
                      className="form-control"
                      aria-label="First name"
                      name="D2_8"
                      value={inputValues.D1_24}
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
                      style={{ backgroundColor: "rgb(169, 255, 251)" }}
                      aria-label="First name"
                      name="E2_8"
                      value={inputValues.E1_24}
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
                      style={{ backgroundColor: "rgb(169, 255, 251)" }}
                      aria-label="First name"
                      name="F2_8"
                      value={inputValues.F1_24}
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
                      style={{ backgroundColor: "rgb(169, 255, 251)" }}
                      aria-label="First name"
                      name="G2_8"
                      value={inputValues.G1_24}
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
                      style={{ backgroundColor: "rgb(169, 255, 251)" }}
                      aria-label="First name"
                      name="H2_8"
                      value={inputValues.H1_24}
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
                      style={{ backgroundColor: "rgb(169, 255, 251)" }}
                      aria-label="First name"
                      name="I2_8"
                      value={inputValues.I1_24}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid border-1 border-black mt-3 div_main4">
            <div className="row">
              <div
                className="col-lg-4 border-end border-black  d-flex justify-content-center"
                style={{ backgroundColor: "rgb(169, 255, 251)" }}
              >
                <h6>
                  <b>Finishing Goods</b>
                </h6>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      style={{ backgroundColor: "rgb(169, 255, 251)" }}
                      type="text"
                      className="form-control"
                      aria-label="First name"
                      name="B2_9"
                      value={inputValues.B1_23}
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
                      style={{ backgroundColor: "rgb(169, 255, 251)" }}
                      aria-label="First name"
                      name="C2_9"
                      value={inputValues.C1_23}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      style={{ backgroundColor: "rgb(169, 255, 251)" }}
                      type="text"
                      className="form-control"
                      aria-label="First name"
                      name="D2_9"
                      value={inputValues.D1_23}
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
                      style={{ backgroundColor: "rgb(169, 255, 251)" }}
                      aria-label="First name"
                      name="E2_9"
                      value={inputValues.E1_23}
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
                      style={{ backgroundColor: "rgb(169, 255, 251)" }}
                      aria-label="First name"
                      name="F2_9"
                      value={inputValues.F1_23}
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
                      style={{ backgroundColor: "rgb(169, 255, 251)" }}
                      aria-label="First name"
                      name="G2_9"
                      value={inputValues.G1_23}
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
                      style={{ backgroundColor: "rgb(169, 255, 251)" }}
                      aria-label="First name"
                      name="H2_9"
                      value={inputValues.H1_23}
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
                      style={{ backgroundColor: "rgb(169, 255, 251)" }}
                      aria-label="First name"
                      name="I2_9"
                      value={inputValues.I1_23}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid border-1 border-black mt-3">
            <div className="row">
              <div className="col-lg-4 border-end border-black  d-flex justify-content-center">
                <h6>Consumable Spares</h6>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="B2_10"
                      value={inputValues.B2_10}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="C2_10"
                      value={inputValues.C2_10}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="D2_10"
                      value={inputValues.D2_10}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="E2_10"
                      value={inputValues.E2_10}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="F2_10"
                      value={inputValues.F2_10}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="G2_10"
                      value={inputValues.G2_10}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="H2_10"
                      value={inputValues.H2_10}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="I2_10"
                      value={inputValues.I2_10}
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
              <div className="col-lg-4 border-end border-black  d-flex justify-content-center">
                <h6 style={{ color: "blue" }}>Trade Debtors Less 6 Months</h6>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="B2_11"
                      value={inputValues.B2_11}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="C2_11"
                      value={inputValues.C2_11}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="D2_11"
                      value={inputValues.D2_11}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="E2_11"
                      value={inputValues.E2_11}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="F2_11"
                      value={inputValues.F2_11}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="G2_11"
                      value={inputValues.G2_11}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="H2_11"
                      value={inputValues.H2_11}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="I2_11"
                      value={inputValues.I2_11}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
              {/* Add similar input fields for other years here */}
            </div>
          </div>
          <div className="container-fluid border-1 border-black mt-3 div_main4">
            <div className="row">
              <div
                className="col-lg-4 border-end border-black  d-flex justify-content-center"
                style={{ backgroundColor: "rgb(159, 252, 204)" }}
              >
                <h5>Other Current Assets</h5>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      style={{ backgroundColor: "rgb(159, 252, 204)" }}
                      type="text"
                      className="form-control"
                      aria-label="First name"
                      name="B2_12"
                      value={tot15.B3_15}
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
                      style={{ backgroundColor: "rgb(159, 252, 204)" }}
                      aria-label="First name"
                      name="C2_12"
                      value={tot15.C3_15}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      style={{ backgroundColor: "rgb(159, 252, 204)" }}
                      type="text"
                      className="form-control"
                      aria-label="First name"
                      name="D2_12"
                      value={tot15.D3_15}
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
                      style={{ backgroundColor: "rgb(159, 252, 204)" }}
                      aria-label="First name"
                      name="E2_12"
                      value={tot15.E3_15}
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
                      style={{ backgroundColor: "rgb(159, 252, 204)" }}
                      aria-label="First name"
                      name="F2_12"
                      value={tot15.F3_15}
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
                      style={{ backgroundColor: "rgb(159, 252, 204)" }}
                      aria-label="First name"
                      name="G2_12"
                      value={tot15.G3_15}
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
                      style={{ backgroundColor: "rgb(159, 252, 204)" }}
                      aria-label="First name"
                      name="H2_12"
                      value={tot15.H3_15}
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
                      style={{ backgroundColor: "rgb(159, 252, 204)" }}
                      aria-label="First name"
                      name="I2_12"
                      value={tot15.I3_15}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid border-1 border-black mt-3 div_main4">
            <div className="row">
              <div
                className="col-lg-4 border-end border-black  d-flex justify-content-center"
                style={{ backgroundColor: "rgb(169, 255, 251)" }}
              >
                <h5 style={{ color: "red" }}>TOTAL CURRENT ASSETS</h5>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      style={{
                        backgroundColor: "rgb(169, 255, 251)",
                        fontWeight: "bold",
                      }}
                      type="text"
                      className="form-control"
                      aria-label="First name"
                      name="B2_13"
                      value={sumB2}
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
                      style={{
                        backgroundColor: "rgb(169, 255, 251)",
                        fontWeight: "bold",
                      }}
                      aria-label="First name"
                      name="C2_13"
                      value={sumC2}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      style={{
                        backgroundColor: "rgb(169, 255, 251)",
                        fontWeight: "bold",
                      }}
                      type="text"
                      className="form-control"
                      aria-label="First name"
                      name="D2_13"
                      value={sumD2}
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
                      style={{
                        backgroundColor: "rgb(169, 255, 251)",
                        fontWeight: "bold",
                      }}
                      aria-label="First name"
                      name="E2_13"
                      value={sumE2}
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
                      style={{
                        backgroundColor: "rgb(169, 255, 251)",
                        fontWeight: "bold",
                      }}
                      aria-label="First name"
                      name="F2_13"
                      value={sumF2}
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
                      style={{
                        backgroundColor: "rgb(169, 255, 251)",
                        fontWeight: "bold",
                      }}
                      aria-label="First name"
                      name="G2_13"
                      value={sumG2}
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
                      style={{
                        backgroundColor: "rgb(169, 255, 251)",
                        fontWeight: "bold",
                      }}
                      aria-label="First name"
                      name="H2_13"
                      value={sumH2}
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
                      style={{
                        backgroundColor: "rgb(169, 255, 251)",
                        fontWeight: "bold",
                      }}
                      aria-label="First name"
                      name="I2_13"
                      value={sumI2}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid border-1 border-black mt-3">
            <div className="row">
              <div className="col-lg-4 border-end border-black  d-flex justify-content-center">
                <h6>FIXED ASSETS</h6>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="B2_14"
                      value={inputValues.B2_14}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      placeholder="Rs."
                      className="form-control"
                      aria-label="First name"
                      name="C2_14"
                      value={inputValues.C2_14}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="D2_14"
                      value={inputValues.D2_14}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="E2_14"
                      value={inputValues.E2_14}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="F2_14"
                      value={inputValues.F2_14}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="G2_14"
                      value={inputValues.G2_14}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="H2_14"
                      value={inputValues.H2_14}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="I2_14"
                      value={inputValues.I2_14}
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
              <div className="col-lg-4 border-end border-black  d-flex justify-content-center">
                <h6>Land & Building</h6>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="B2_15"
                      value={inputValues.B2_15}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="C2_15"
                      value={inputValues.C2_15}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="D2_15"
                      value={inputValues.D2_15}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="E2_15"
                      value={inputValues.E2_15}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="F2_15"
                      value={inputValues.F2_15}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="G2_15"
                      value={inputValues.G2_15}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="H2_15"
                      value={inputValues.H2_15}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="I2_15"
                      value={inputValues.I2_15}
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
              <div className="col-lg-4 border-end border-black  d-flex justify-content-center">
                <h6>Plant & Machinery</h6>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="B2_16"
                      value={inputValues.B2_16}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="C2_16"
                      value={inputValues.C2_16}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      aria-label="First name"
                      placeholder="Rs."
                      name="D2_16"
                      value={inputValues.D2_16}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="E2_16"
                      value={inputValues.E2_16}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="F2_16"
                      value={inputValues.F2_16}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="G2_16"
                      value={inputValues.G2_16}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="H2_16"
                      value={inputValues.H2_16}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="I2_16"
                      value={inputValues.I2_16}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid border-1 border-black mt-3">
            <div className="row">
              <div className="col-lg-4 border-end border-black  d-flex justify-content-center">
                <h6>Furniture / Fixtures / Sundries</h6>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="B2_17"
                      value={inputValues.B2_17}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="C2_17"
                      value={inputValues.C2_17}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      aria-label="First name"
                      placeholder="Rs."
                      name="D2_17"
                      value={inputValues.D2_17}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="E2_17"
                      value={inputValues.E2_17}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="F2_17"
                      value={inputValues.F2_17}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="G2_17"
                      value={inputValues.G2_17}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="H2_17"
                      value={inputValues.H2_17}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="I2_17"
                      value={inputValues.I2_17}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid border-1 border-black mt-3">
            <div className="row">
              <div className="col-lg-4 border-end border-black  d-flex justify-content-center">
                <h6>Capital Work in Progress</h6>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="B2_18"
                      value={inputValues.B2_18}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="C2_18"
                      value={inputValues.C2_18}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      aria-label="First name"
                      placeholder="Rs."
                      name="D2_18"
                      value={inputValues.D2_18}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="E2_18"
                      value={inputValues.E2_18}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="F2_18"
                      value={inputValues.F2_18}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="G2_18"
                      value={inputValues.G2_18}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="H2_18"
                      value={inputValues.H2_18}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="I2_18"
                      value={inputValues.I2_18}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid border-1 border-black mt-3 div_main4">
            <div className="row">
              <div
                className="col-lg-4 border-end border-black  d-flex justify-content-center"
                style={{ backgroundColor: "rgb(169, 255, 251)" }}
              >
                <h5 style={{ color: "red" }}>GROSS BLOCK</h5>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      style={{
                        backgroundColor: "rgb(169, 255, 251)",
                        fontWeight: "bold",
                      }}
                      type="text"
                      className="form-control"
                      aria-label="First name"
                      name="B2_19"
                      value={sumB19}
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
                      style={{
                        backgroundColor: "rgb(169, 255, 251)",
                        fontWeight: "bold",
                      }}
                      aria-label="First name"
                      name="C2_19"
                      value={sumC19}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      style={{
                        backgroundColor: "rgb(169, 255, 251)",
                        fontWeight: "bold",
                      }}
                      type="text"
                      className="form-control"
                      aria-label="First name"
                      name="D2_19"
                      value={sumD19}
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
                      style={{
                        backgroundColor: "rgb(169, 255, 251)",
                        fontWeight: "bold",
                      }}
                      aria-label="First name"
                      name="E2_19"
                      value={sumE19}
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
                      style={{
                        backgroundColor: "rgb(169, 255, 251)",
                        fontWeight: "bold",
                      }}
                      aria-label="First name"
                      name="F2_19"
                      value={sumF19}
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
                      style={{
                        backgroundColor: "rgb(169, 255, 251)",
                        fontWeight: "bold",
                      }}
                      aria-label="First name"
                      name="G2_19"
                      value={sumG19}
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
                      style={{
                        backgroundColor: "rgb(169, 255, 251)",
                        fontWeight: "bold",
                      }}
                      aria-label="First name"
                      name="H2_19"
                      value={sumH19}
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
                      style={{
                        backgroundColor: "rgb(169, 255, 251)",
                        fontWeight: "bold",
                      }}
                      aria-label="First name"
                      name="I2_19"
                      value={sumI19}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid border-1 border-black mt-3">
            <div className="row">
              <div className="col-lg-4 border-end border-black  d-flex justify-content-center">
                <h6>Less Depreciation</h6>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="B2_20"
                      value={inputValues.B2_20}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="C2_20"
                      value={inputValues.C2_20}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="D2_20"
                      value={inputValues.D2_20}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="E2_20"
                      value={inputValues.E2_20}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="F2_20"
                      value={inputValues.F2_20}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="G2_20"
                      value={inputValues.G2_20}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="H2_20"
                      value={inputValues.H2_20}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="I2_20"
                      value={inputValues.I2_20}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              {/* Add similar input fields for other years here */}
            </div>
          </div>
          <div className="container-fluid border-1 border-black mt-3 div_main4">
            <div className="row">
              <div
                className="col-lg-4 border-end border-black  d-flex justify-content-center"
                style={{ backgroundColor: "rgb(169, 255, 251)" }}
              >
                <h5 style={{ color: "red" }}>NET FIXED ASSETS</h5>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      style={{
                        backgroundColor: "rgb(169, 255, 251)",
                        fontWeight: "bold",
                      }}
                      type="text"
                      className="form-control"
                      aria-label="First name"
                      name="B2_21"
                      value={sumB21}
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
                      style={{
                        backgroundColor: "rgb(169, 255, 251)",
                        fontWeight: "bold",
                      }}
                      aria-label="First name"
                      name="C2_21"
                      value={sumC21}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      style={{
                        backgroundColor: "rgb(169, 255, 251)",
                        fontWeight: "bold",
                      }}
                      type="text"
                      className="form-control"
                      aria-label="First name"
                      name="D2_21"
                      value={sumD21}
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
                      style={{
                        backgroundColor: "rgb(169, 255, 251)",
                        fontWeight: "bold",
                      }}
                      aria-label="First name"
                      name="E2_21"
                      value={sumE21}
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
                      style={{
                        backgroundColor: "rgb(169, 255, 251)",
                        fontWeight: "bold",
                      }}
                      aria-label="First name"
                      name="F2_21"
                      value={sumF21}
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
                      style={{
                        backgroundColor: "rgb(169, 255, 251)",
                        fontWeight: "bold",
                      }}
                      aria-label="First name"
                      name="G2_21"
                      value={sumG21}
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
                      style={{
                        backgroundColor: "rgb(169, 255, 251)",
                        fontWeight: "bold",
                      }}
                      aria-label="First name"
                      name="H2_21"
                      value={sumH21}
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
                      style={{
                        backgroundColor: "rgb(169, 255, 251)",
                        fontWeight: "bold",
                      }}
                      aria-label="First name"
                      name="I2_21"
                      value={sumI21}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ------------------------------- NON CURRENT ASSETS ----------------------------------------------- */}

          <div className="container-fluid border-1 border-black mt-3">
            <div
              className="row"
              style={{ backgroundColor: "rgb(224, 231, 231)" }}
            >
              <div className="col-lg-4 border-end border-black  d-flex justify-content-center">
                <h5>NON CURRENT ASSETS</h5>
              </div>
            </div>
          </div>
          <div className="container-fluid border-1 border-black mt-3">
            <div className="row">
              <div className="col-lg-4 border-end border-black  d-flex justify-content-center">
                <h6>Investment / Loan to Associate</h6>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="B2_23"
                      value={inputValues.B2_23}
                      onChange={changeData}
                    />

                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="C2_23"
                      value={inputValues.C2_23}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="D2_23"
                      value={inputValues.D2_23}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="E2_23"
                      value={inputValues.E2_23}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="F2_23"
                      value={inputValues.F2_23}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="G2_23"
                      value={inputValues.G2_23}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="H2_23"
                      value={inputValues.H2_23}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="I2_23"
                      value={inputValues.I2_23}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              {/* Add similar input fields for other years here */}
            </div>
          </div>
          <div className="container-fluid border-1 border-black mt-3 div_main4">
            <div className="row">
              <div
                className="col-lg-4 border-end border-black  d-flex justify-content-center"
                style={{ backgroundColor: "rgb(159, 252, 204)" }}
              >
                <h5>Other Non Current Assets</h5>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      style={{ backgroundColor: "rgb(159, 252, 204)" }}
                      type="text"
                      className="form-control"
                      aria-label="First name"
                      name="B2_24"
                      value={tot23.B3_23}
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
                      style={{ backgroundColor: "rgb(159, 252, 204)" }}
                      aria-label="First name"
                      name="C2_24"
                      value={tot23.C3_23}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      style={{ backgroundColor: "rgb(159, 252, 204)" }}
                      type="text"
                      className="form-control"
                      aria-label="First name"
                      name="D2_24"
                      value={tot23.D3_23}
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
                      style={{ backgroundColor: "rgb(159, 252, 204)" }}
                      aria-label="First name"
                      name="E2_24"
                      value={tot23.E3_23}
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
                      style={{ backgroundColor: "rgb(159, 252, 204)" }}
                      aria-label="First name"
                      name="F2_24"
                      value={tot23.F3_23}
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
                      style={{ backgroundColor: "rgb(159, 252, 204)" }}
                      aria-label="First name"
                      name="G2_24"
                      value={tot23.G3_23}
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
                      style={{ backgroundColor: "rgb(159, 252, 204)" }}
                      aria-label="First name"
                      name="H2_24"
                      value={tot23.H3_23}
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
                      style={{ backgroundColor: "rgb(159, 252, 204)" }}
                      aria-label="First name"
                      name="I2_24"
                      value={tot23.I3_23}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid border-1 border-black mt-3 div_main4">
            <div className="row">
              <div
                className="col-lg-4 border-end border-black  d-flex justify-content-center"
                style={{ backgroundColor: "rgb(169, 255, 251)" }}
              >
                <h5 style={{ color: "red" }}>TOTAL NCA</h5>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      style={{
                        backgroundColor: "rgb(169, 255, 251)",
                        fontWeight: "bold",
                      }}
                      type="text"
                      className="form-control"
                      aria-label="First name"
                      name="B2_25"
                      value={sumB25}
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
                      style={{
                        backgroundColor: "rgb(169, 255, 251)",
                        fontWeight: "bold",
                      }}
                      aria-label="First name"
                      name="C2_25"
                      value={sumC25}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      style={{
                        backgroundColor: "rgb(169, 255, 251)",
                        fontWeight: "bold",
                      }}
                      type="text"
                      className="form-control"
                      aria-label="First name"
                      name="D2_25"
                      value={sumD25}
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
                      style={{
                        backgroundColor: "rgb(169, 255, 251)",
                        fontWeight: "bold",
                      }}
                      aria-label="First name"
                      name="E2_25"
                      value={sumE25}
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
                      style={{
                        backgroundColor: "rgb(169, 255, 251)",
                        fontWeight: "bold",
                      }}
                      aria-label="First name"
                      name="F2_25"
                      value={sumF25}
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
                      style={{
                        backgroundColor: "rgb(169, 255, 251)",
                        fontWeight: "bold",
                      }}
                      aria-label="First name"
                      name="G2_25"
                      value={sumG25}
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
                      style={{
                        backgroundColor: "rgb(169, 255, 251)",
                        fontWeight: "bold",
                      }}
                      aria-label="First name"
                      name="H2_25"
                      value={sumH25}
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
                      style={{
                        backgroundColor: "rgb(169, 255, 251)",
                        fontWeight: "bold",
                      }}
                      aria-label="First name"
                      name="I2_25"
                      value={sumI25}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ---------------------------------------NON CURRENT ASSETS ------------------------------------------*/}

          <div className="container-fluid border-1 border-black mt-3">
            <div
              className="row"
              style={{ backgroundColor: "rgb(224, 231, 231)" }}
            >
              <div className="col-lg-4 border-end border-black  d-flex justify-content-center">
                <h5>INTANGIBLE ASSETS</h5>
              </div>
            </div>
          </div>

          <div className="container-fluid border-1 border-black mt-3">
            <div className="row">
              <div className="col-lg-4 border-end border-black  d-flex justify-content-center">
                <h6>Expenses not written off</h6>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="B2_27"
                      value={inputValues.B2_27}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="C2_27"
                      value={inputValues.C2_27}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="D2_27"
                      value={inputValues.D2_27}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="E2_27"
                      value={inputValues.E2_27}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="F2_27"
                      value={inputValues.F2_27}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="G2_27"
                      value={inputValues.G2_27}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="H2_27"
                      value={inputValues.H2_27}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="I2_27"
                      value={inputValues.I2_27}
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
              <div className="col-lg-4 border-end border-black  d-flex justify-content-center">
                <h6>Profit & Loss a/c</h6>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="B2_28"
                      value={inputValues.B2_28}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="C2_28"
                      value={inputValues.C2_28}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="D2_28"
                      value={inputValues.D2_28}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="E2_28"
                      value={inputValues.E2_28}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="F2_28"
                      value={inputValues.F2_28}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="G2_28"
                      value={inputValues.G2_28}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="H2_28"
                      value={inputValues.H2_28}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="I2_28"
                      value={inputValues.I2_28}
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
              <div className="col-lg-4 border-end border-black  d-flex justify-content-center">
                <h6>Defered Revenue expenditure</h6>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="B2_29"
                      value={inputValues.B2_29}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="C2_29"
                      value={inputValues.C2_29}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="D2_29"
                      value={inputValues.D2_29}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="E2_29"
                      value={inputValues.E2_29}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="F2_29"
                      value={inputValues.F2_29}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="G2_29"
                      value={inputValues.G2_29}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="H2_29"
                      value={inputValues.H2_29}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="I2_29"
                      value={inputValues.I2_29}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              {/* Add similar input fields for other years here */}
            </div>
          </div>

          <div className="container-fluid border-1 border-black mt-3 div_main4">
            <div className="row">
              <div
                className="col-lg-4 border-end border-black  d-flex justify-content-center"
                style={{ backgroundColor: "rgb(189, 254, 243)" }}
              >
                <h5 style={{ color: "red" }}> TOTAL IA</h5>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      style={{
                        backgroundColor: "rgb(189, 254, 243)",
                        fontWeight: "bold",
                      }}
                      type="text"
                      className="form-control"
                      aria-label="First name"
                      name="B2_30"
                      value={sumB30}
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
                      style={{
                        backgroundColor: "rgb(189, 254, 243)",
                        fontWeight: "bold",
                      }}
                      aria-label="First name"
                      name="C2_30"
                      value={sumC30}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      style={{
                        backgroundColor: "rgb(189, 254, 243)",
                        fontWeight: "bold",
                      }}
                      type="text"
                      className="form-control"
                      aria-label="First name"
                      name="D2_30"
                      value={sumD30}
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
                      style={{
                        backgroundColor: "rgb(189, 254, 243)",
                        fontWeight: "bold",
                      }}
                      aria-label="First name"
                      name="E2_30"
                      value={sumE30}
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
                      style={{
                        backgroundColor: "rgb(189, 254, 243)",
                        fontWeight: "bold",
                      }}
                      aria-label="First name"
                      name="F2_30"
                      value={sumF30}
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
                      style={{
                        backgroundColor: "rgb(189, 254, 243)",
                        fontWeight: "bold",
                      }}
                      aria-label="First name"
                      name="G2_30"
                      value={sumG30}
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
                      style={{
                        backgroundColor: "rgb(189, 254, 243)",
                        fontWeight: "bold",
                      }}
                      aria-label="First name"
                      name="H2_30"
                      value={sumH30}
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
                      style={{
                        backgroundColor: "rgb(189, 254, 243)",
                        fontWeight: "bold",
                      }}
                      aria-label="First name"
                      name="I2_30"
                      value={sumI30}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid border-1 border-black mt-3 div_main4">
            <div className="row">
              <div
                className="col-lg-4 border-end border-black  d-flex justify-content-center"
                style={{ backgroundColor: "rgb(189, 254, 243)" }}
              >
                <h5 style={{ color: "red" }}>
                  <b>TOTAL ASSETS</b>
                </h5>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      style={{
                        backgroundColor: "rgb(189, 254, 243)",
                        fontWeight: "bold",
                      }}
                      type="text"
                      className="form-control"
                      aria-label="First name"
                      name="B2_31"
                      value={sumB31}
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
                      style={{
                        backgroundColor: "rgb(189, 254, 243)",
                        fontWeight: "bold",
                      }}
                      aria-label="First name"
                      name="C2_31"
                      value={sumC31}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      style={{
                        backgroundColor: "rgb(189, 254, 243)",
                        fontWeight: "bold",
                      }}
                      type="text"
                      className="form-control"
                      aria-label="First name"
                      name="D2_30"
                      value={sumD31}
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
                      style={{
                        backgroundColor: "rgb(189, 254, 243)",
                        fontWeight: "bold",
                      }}
                      aria-label="First name"
                      name="E2_31"
                      value={sumE31}
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
                      style={{
                        backgroundColor: "rgb(189, 254, 243)",
                        fontWeight: "bold",
                      }}
                      aria-label="First name"
                      name="F2_31"
                      value={sumF31}
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
                      style={{
                        backgroundColor: "rgb(189, 254, 243)",
                        fontWeight: "bold",
                      }}
                      aria-label="First name"
                      name="G2_31"
                      value={sumG31}
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
                      style={{
                        backgroundColor: "rgb(189, 254, 243)",
                        fontWeight: "bold",
                      }}
                      aria-label="First name"
                      name="H2_31"
                      value={sumH31}
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
                      style={{
                        backgroundColor: "rgb(189, 254, 243)",
                        fontWeight: "bold",
                      }}
                      aria-label="First name"
                      name="I2_31"
                      value={sumI31}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*---------------------------------------- INTANGIBLE ASSETS -------------------------------------*/}

          <div className="container-fluid border-1 border-black mt-3">
            <div
              className="row"
              style={{ backgroundColor: "rgb(224, 231, 231)" }}
            >
              <div className="col-lg-4 border-end border-black  d-flex justify-content-center">
                <h5>
                  <b>LIABILITIES</b>
                </h5>
              </div>
            </div>
          </div>
          <div className="container-fluid border-1 border-black mt-3">
            <div
              className="row"
              style={{ backgroundColor: "rgb(224, 231, 231)" }}
            >
              <div className="col-lg-4 border-end border-black  d-flex justify-content-center">
                <h6 style={{ color: "blue" }}>CURRENT LIABILITIES</h6>
              </div>
            </div>
          </div>

          <div className="container-fluid border-1 border-black mt-3">
            <div className="row">
              <div className="col-lg-4 border-end border-black  d-flex justify-content-center">
                <h6>WC Borrowings From IOB</h6>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="B2_34"
                      value={inputValues.B2_34}
                      onChange={changeData}
                    />

                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="C2_34"
                      value={inputValues.C2_34}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="D2_34"
                      value={inputValues.D2_34}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="E2_34"
                      value={inputValues.E2_34}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="F2_34"
                      value={inputValues.F2_34}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="G2_34"
                      value={inputValues.G2_34}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="H2_34"
                      value={inputValues.H2_34}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="I2_34"
                      value={inputValues.I2_34}
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
              <div className="col-lg-4 border-end border-black  d-flex justify-content-center">
                <h6>WC From Banks/Institution</h6>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="B2_35"
                      value={inputValues.B2_35}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="C2_35"
                      value={inputValues.C2_35}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="D2_35"
                      value={inputValues.D2_35}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="E2_35"
                      value={inputValues.E2_35}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="F2_35"
                      value={inputValues.F2_35}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="G2_35"
                      value={inputValues.G2_35}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="H2_35"
                      value={inputValues.H2_35}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="I2_35"
                      value={inputValues.I2_35}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid border-1 border-black mt-3">
            <div className="row">
              <div className="col-lg-4 border-end border-black  d-flex justify-content-center">
                <h6>Sundry Creditors-Trade</h6>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="B2_36"
                      value={inputValues.B2_36}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="C2_36"
                      value={inputValues.C2_36}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="D2_36"
                      value={inputValues.D2_36}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="E2_36"
                      value={inputValues.E2_36}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="F2_36"
                      value={inputValues.F2_36}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="G2_36"
                      value={inputValues.G2_36}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="H2_36"
                      value={inputValues.H2_36}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="I2_36"
                      value={inputValues.I2_36}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              {/* Add similar input fields for other years here */}
            </div>
          </div>
          <div className="container-fluid border-1 border-black mt-3 div_main4">
            <div className="row">
              <div
                className="col-lg-4 border-end border-black  d-flex justify-content-center"
                style={{ backgroundColor: "rgb(159, 252, 204)" }}
              >
                <h5>Other Current Liabilities</h5>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      style={{ backgroundColor: "rgb(159, 252, 204)" }}
                      type="text"
                      className="form-control"
                      aria-label="First name"
                      name="B2_37"
                      value={sumB37}
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
                      style={{ backgroundColor: "rgb(159, 252, 204)" }}
                      aria-label="First name"
                      name="C2_37"
                      value={sumC37}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      style={{ backgroundColor: "rgb(159, 252, 204)" }}
                      type="text"
                      className="form-control"
                      aria-label="First name"
                      name="D2_37"
                      value={sumD37}
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
                      style={{ backgroundColor: "rgb(159, 252, 204)" }}
                      aria-label="First name"
                      name="E2_37"
                      value={sumE37}
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
                      style={{ backgroundColor: "rgb(159, 252, 204)" }}
                      aria-label="First name"
                      name="F2_37"
                      value={sumF37}
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
                      style={{ backgroundColor: "rgb(159, 252, 204)" }}
                      aria-label="First name"
                      name="G2_37"
                      value={sumG37}
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
                      style={{ backgroundColor: "rgb(159, 252, 204)" }}
                      aria-label="First name"
                      name="H2_37"
                      value={sumH37}
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
                      style={{ backgroundColor: "rgb(159, 252, 204)" }}
                      aria-label="First name"
                      name="I2_37"
                      value={sumI37}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid border-1 border-black mt-3 div_main4">
            <div className="row">
              <div
                className="col-lg-4 border-end border-black  d-flex justify-content-center"
                style={{ backgroundColor: "rgb(189, 254, 243)" }}
              >
                <h5>
                  <b>TOTAL CURRENT LIABILITIES</b>
                </h5>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      style={{
                        backgroundColor: "rgb(189, 254, 243)",
                        fontWeight: "bold",
                      }}
                      type="text"
                      className="form-control"
                      aria-label="First name"
                      name="B2_38"
                      value={sumB38}
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
                      style={{
                        backgroundColor: "rgb(189, 254, 243)",
                        fontWeight: "bold",
                      }}
                      aria-label="First name"
                      name="C2_38"
                      value={sumC38}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      style={{
                        backgroundColor: "rgb(189, 254, 243)",
                        fontWeight: "bold",
                      }}
                      type="text"
                      className="form-control"
                      aria-label="First name"
                      name="D2_38"
                      value={sumD38}
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
                      style={{
                        backgroundColor: "rgb(189, 254, 243)",
                        fontWeight: "bold",
                      }}
                      aria-label="First name"
                      name="E2_38"
                      value={sumE38}
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
                      style={{
                        backgroundColor: "rgb(189, 254, 243)",
                        fontWeight: "bold",
                      }}
                      aria-label="First name"
                      name="F2_38"
                      value={sumF38}
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
                      style={{
                        backgroundColor: "rgb(189, 254, 243)",
                        fontWeight: "bold",
                      }}
                      aria-label="First name"
                      name="G2_38"
                      value={sumG38}
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
                      style={{
                        backgroundColor: "rgb(189, 254, 243)",
                        fontWeight: "bold",
                      }}
                      aria-label="First name"
                      name="H2_38"
                      value={sumH38}
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
                      style={{
                        backgroundColor: "rgb(189, 254, 243)",
                        fontWeight: "bold",
                      }}
                      aria-label="First name"
                      name="I2_38"
                      value={sumI38}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ------------------------------- OTHER INCOME / EXPENCE----------------------------------------------- */}

          <div className="container-fluid border-1 border-black mt-3">
            <div
              className="row"
              style={{ backgroundColor: "rgb(224, 231, 231)" }}
            >
              <div className="col-lg-4 border-end border-black  d-flex justify-content-center">
                <h5 style={{ color: "blue" }}>DEFFERRED LIABILITIES</h5>
              </div>
            </div>
          </div>
          <div className="container-fluid border-1 border-black mt-3">
            <div className="row">
              <div className="col-lg-4 border-end border-black  d-flex justify-content-center">
                <h6>TERM LOAN IOB</h6>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="B2_40"
                      value={inputValues.B2_40}
                      onChange={changeData}
                    />

                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="C2_40"
                      value={inputValues.C2_40}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="D2_40"
                      value={inputValues.D2_40}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="E2_40"
                      value={inputValues.E2_40}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="F2_40"
                      value={inputValues.F2_40}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="G2_40"
                      value={inputValues.G2_40}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="H2_40"
                      value={inputValues.H2_40}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="I2_40"
                      value={inputValues.I2_40}
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
              <div className="col-lg-4 border-end border-black  d-flex justify-content-center">
                <h6>Term Loan Other Banks</h6>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="B2_41"
                      value={inputValues.B2_41}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="C2_41"
                      value={inputValues.C2_41}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="D2_41"
                      value={inputValues.D2_41}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="E2_41"
                      value={inputValues.E2_41}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="F2_41"
                      value={inputValues.F2_41}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="G2_41"
                      value={inputValues.G2_41}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="H2_41"
                      value={inputValues.H2_41}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="I2_41"
                      value={inputValues.I2_41}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid border-1 border-black mt-3">
            <div className="row">
              <div className="col-lg-4 border-end border-black  d-flex justify-content-center">
                <h6>Term Loan Institution</h6>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="B2_42"
                      value={inputValues.B2_42}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="C2_42"
                      value={inputValues.C2_42}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="D2_42"
                      value={inputValues.D2_42}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="E2_42"
                      value={inputValues.E2_42}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="F2_42"
                      value={inputValues.F2_42}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="G2_42"
                      value={inputValues.G2_42}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="H2_42"
                      value={inputValues.H2_42}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="I2_42"
                      value={inputValues.I2_42}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              {/* Add similar input fields for other years here */}
            </div>
          </div>

          {/*-------------------------------------- LINE ( 37 - 39 ) -------------------------------------------------*/}

          <div className="container-fluid border-1 border-black mt-3 div_main4">
            <div className="row">
              <div
                className="col-lg-4 border-end border-black  d-flex justify-content-center"
                style={{ backgroundColor: "rgb(188, 245, 185" }}
              >
                <h5>Other Long Term-Liabilities</h5>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      style={{ backgroundColor: "rgb(188, 245, 185" }}
                      type="text"
                      className="form-control"
                      aria-label="First name"
                      name="B2_43"
                      value={sumB43}
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
                      style={{ backgroundColor: "rgb(188, 245, 185" }}
                      aria-label="First name"
                      name="C2_43"
                      value={sumC43}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      style={{ backgroundColor: "rgb(188, 245, 185" }}
                      type="text"
                      className="form-control"
                      aria-label="First name"
                      name="D2_43"
                      value={sumD43}
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
                      style={{ backgroundColor: "rgb(188, 245, 185" }}
                      aria-label="First name"
                      name="E2_43"
                      value={sumE43}
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
                      style={{ backgroundColor: "rgb(188, 245, 185" }}
                      aria-label="First name"
                      name="F2_43"
                      value={sumF43}
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
                      style={{ backgroundColor: "rgb(188, 245, 185" }}
                      aria-label="First name"
                      name="G2_43"
                      value={sumG43}
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
                      style={{ backgroundColor: "rgb(188, 245, 185" }}
                      aria-label="First name"
                      name="H2_43"
                      value={sumH43}
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
                      style={{ backgroundColor: "rgb(188, 245, 185" }}
                      aria-label="First name"
                      name="I2_43"
                      value={sumI43}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid border-1 border-black mt-3 div_main4">
            <div className="row">
              <div
                className="col-lg-4 border-end border-black  d-flex justify-content-center"
                style={{ backgroundColor: "rgb(189, 254, 243)" }}
              >
                <h5>LONG TERM LIABILITIES</h5>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      style={{
                        backgroundColor: "rgb(189, 254, 243)",
                        fontWeight: "bold",
                      }}
                      type="text"
                      className="form-control"
                      aria-label="First name"
                      name="B2_44"
                      value={sumB44}
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
                      style={{
                        backgroundColor: "rgb(189, 254, 243)",
                        fontWeight: "bold",
                      }}
                      aria-label="First name"
                      name="C2_44"
                      value={sumC44}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      style={{
                        backgroundColor: "rgb(189, 254, 243)",
                        fontWeight: "bold",
                      }}
                      type="text"
                      className="form-control"
                      aria-label="First name"
                      name="D2_44"
                      value={sumD44}
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
                      style={{
                        backgroundColor: "rgb(189, 254, 243)",
                        fontWeight: "bold",
                      }}
                      aria-label="First name"
                      name="E2_44"
                      value={sumE44}
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
                      style={{
                        backgroundColor: "rgb(189, 254, 243)",
                        fontWeight: "bold",
                      }}
                      aria-label="First name"
                      name="F2_44"
                      value={sumF44}
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
                      style={{
                        backgroundColor: "rgb(189, 254, 243)",
                        fontWeight: "bold",
                      }}
                      aria-label="First name"
                      name="G2_44"
                      value={sumG44}
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
                      style={{
                        backgroundColor: "rgb(189, 254, 243)",
                        fontWeight: "bold",
                      }}
                      aria-label="First name"
                      name="H2_44"
                      value={sumH44}
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
                      style={{
                        backgroundColor: "rgb(189, 254, 243)",
                        fontWeight: "bold",
                      }}
                      aria-label="First name"
                      name="I2_44"
                      value={sumI44}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid border-1 border-black mt-3 div_main4">
            <div className="row">
              <div
                className="col-lg-4 border-end border-black  d-flex justify-content-center"
                style={{ backgroundColor: "rgb(189, 254, 243)" }}
              >
                <h5>TOTAL OUTSIDE LIABILITIES</h5>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      style={{
                        backgroundColor: "rgb(189, 254, 243)",
                        fontWeight: "bold",
                      }}
                      type="text"
                      className="form-control"
                      aria-label="First name"
                      name="B2_45"
                      value={sumB45}
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
                      style={{
                        backgroundColor: "rgb(189, 254, 243)",
                        fontWeight: "bold",
                      }}
                      aria-label="First name"
                      name="C2_45"
                      value={sumC45}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      style={{
                        backgroundColor: "rgb(189, 254, 243)",
                        fontWeight: "bold",
                      }}
                      type="text"
                      className="form-control"
                      aria-label="First name"
                      name="D2_45"
                      value={sumD45}
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
                      style={{
                        backgroundColor: "rgb(189, 254, 243)",
                        fontWeight: "bold",
                      }}
                      aria-label="First name"
                      name="E2_45"
                      value={sumE45}
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
                      style={{
                        backgroundColor: "rgb(189, 254, 243)",
                        fontWeight: "bold",
                      }}
                      aria-label="First name"
                      name="F2_45"
                      value={sumF45}
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
                      style={{
                        backgroundColor: "rgb(189, 254, 243)",
                        fontWeight: "bold",
                      }}
                      aria-label="First name"
                      name="G2_45"
                      value={sumG45}
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
                      style={{
                        backgroundColor: "rgb(189, 254, 243)",
                        fontWeight: "bold",
                      }}
                      aria-label="First name"
                      name="H2_45"
                      value={sumH45}
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
                      style={{
                        backgroundColor: "rgb(189, 254, 243)",
                        fontWeight: "bold",
                      }}
                      aria-label="First name"
                      name="I2_45"
                      value={sumI45}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*---------------------------------------- INTANGIBLE ASSETS -------------------------------------*/}

          <div className="container-fluid border-1 border-black mt-3">
            <div
              className="row"
              style={{ backgroundColor: "rgb(224, 231, 231)" }}
            >
              <div className="col-lg-4 border-end border-black  d-flex justify-content-center">
                <h5 style={{ color: "blue" }}>CAPITAL & SURPLUS</h5>
              </div>
            </div>
          </div>
          <div className="container-fluid border-1 border-black mt-3">
            <div className="row">
              <div className="col-lg-4 border-end border-black  d-flex justify-content-center">
                <h6>Paid Up Capital</h6>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="B2_47"
                      value={inputValues.B2_47}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="C2_47"
                      value={inputValues.C2_47}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="D2_47"
                      value={inputValues.D2_47}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="E2_47"
                      value={inputValues.E2_47}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="F2_47"
                      value={inputValues.F2_47}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="G2_47"
                      value={inputValues.G2_47}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="H2_47"
                      value={inputValues.H2_47}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="I2_47"
                      value={inputValues.I2_47}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid border-1 border-black mt-3">
            <div className="row">
              <div className="col-lg-4 border-end border-black  d-flex justify-content-center">
                <h6>Reserves and Surplus</h6>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="B2_48"
                      value={inputValues.B2_48}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="C2_48"
                      value={inputValues.C2_48}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="D2_48"
                      value={inputValues.D2_48}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="E2_48"
                      value={inputValues.E2_48}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="F2_48"
                      value={inputValues.F2_48}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="G2_48"
                      value={inputValues.G2_48}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="H2_48"
                      value={inputValues.H2_48}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="I2_48"
                      value={inputValues.I2_48}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid border-1 border-black mt-3">
            <div className="row">
              <div className="col-lg-4 border-end border-black  d-flex justify-content-center">
                <h6>Profit & Loss a/c</h6>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="B2_49"
                      value={inputValues.B2_49}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="C2_49"
                      value={inputValues.C2_49}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="D2_49"
                      value={inputValues.D2_49}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="E2_49"
                      value={inputValues.E2_49}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="F2_49"
                      value={inputValues.F2_49}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="G2_49"
                      value={inputValues.G2_49}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="H2_49"
                      value={inputValues.H2_49}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                      aria-label="First name"
                      name="I2_49"
                      value={inputValues.I2_49}
                      onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid border-1 border-black mt-3 div_main4">
            <div className="row">
              <div
                className="col-lg-4 border-end border-black  d-flex justify-content-center"
                style={{ backgroundColor: "rgb(238, 193, 255)" }}
              >
                <h5>NET WORTH</h5>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      style={{
                        backgroundColor: "rgb(238, 193, 255)",
                        fontWeight: "bold",
                      }}
                      type="text"
                      className="form-control"
                      aria-label="First name"
                      name="B2_50"
                      value={sumB50}
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
                      style={{
                        backgroundColor: "rgb(238, 193, 255)",
                        fontWeight: "bold",
                      }}
                      aria-label="First name"
                      name="C2_50"
                      value={sumC50}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      style={{
                        backgroundColor: "rgb(238, 193, 255)",
                        fontWeight: "bold",
                      }}
                      type="text"
                      className="form-control"
                      aria-label="First name"
                      name="D2_50"
                      value={sumD50}
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
                      style={{
                        backgroundColor: "rgb(238, 193, 255)",
                        fontWeight: "bold",
                      }}
                      aria-label="First name"
                      name="E2_50"
                      value={sumE50}
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
                      style={{
                        backgroundColor: "rgb(238, 193, 255)",
                        fontWeight: "bold",
                      }}
                      aria-label="First name"
                      name="F2_50"
                      value={sumF50}
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
                      style={{
                        backgroundColor: "rgb(238, 193, 255)",
                        fontWeight: "bold",
                      }}
                      aria-label="First name"
                      name="G2_50"
                      value={sumG50}
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
                      style={{
                        backgroundColor: "rgb(238, 193, 255)",
                        fontWeight: "bold",
                      }}
                      aria-label="First name"
                      name="H2_50"
                      value={sumH50}
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
                      style={{
                        backgroundColor: "rgb(238, 193, 255)",
                        fontWeight: "bold",
                      }}
                      aria-label="First name"
                      name="I2_50"
                      value={sumI50}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid border-1 border-black mt-3 div_main4">
            <div className="row">
              <div
                className="col-lg-4 border-end border-black  d-flex justify-content-center"
                style={{ backgroundColor: "rgb(247, 197, 237)" }}
              >
                <h5>
                  <b>TOTAL LIABILITIES</b>
                </h5>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      style={{
                        backgroundColor: "rgb(247, 197, 237)",
                        fontWeight: "bold",
                      }}
                      type="text"
                      className="form-control"
                      aria-label="First name"
                      name="B2_51"
                      value={sumB51}
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
                      style={{
                        backgroundColor: "rgb(247, 197, 237)",
                        fontWeight: "bold",
                      }}
                      aria-label="First name"
                      name="C2_51"
                      value={sumC51}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-1 border-start d-flex justify-content-center">
                <div className="row g-3">
                  <div className="col">
                    <input
                      style={{
                        backgroundColor: "rgb(247, 197, 237)",
                        fontWeight: "bold",
                      }}
                      type="text"
                      className="form-control"
                      aria-label="First name"
                      name="D2_51"
                      value={sumD51}
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
                      style={{
                        backgroundColor: "rgb(247, 197, 237)",
                        fontWeight: "bold",
                      }}
                      aria-label="First name"
                      name="E2_51"
                      value={sumE51}
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
                      style={{
                        backgroundColor: "rgb(247, 197, 237)",
                        fontWeight: "bold",
                      }}
                      aria-label="First name"
                      name="F2_51"
                      value={sumF51}
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
                      style={{
                        backgroundColor: "rgb(247, 197, 237)",
                        fontWeight: "bold",
                      }}
                      aria-label="First name"
                      name="G2_51"
                      value={sumG51}
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
                      style={{
                        backgroundColor: "rgb(247, 197, 237)",
                        fontWeight: "bold",
                      }}
                      aria-label="First name"
                      name="H2_51"
                      value={sumH51}
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
                      style={{
                        backgroundColor: "rgb(247, 197, 237)",
                        fontWeight: "bold",
                      }}
                      aria-label="First name"
                      name="I2_51"
                      value={sumI51}
                      onChange={changeData}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Assets;
