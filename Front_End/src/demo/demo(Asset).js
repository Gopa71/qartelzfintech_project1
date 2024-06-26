// import React, { useContext, useEffect, useState } from 'react';
// import { AppContext } from '../AppContext';

// function Opstmt() {
//   const { inputValues, setInputValues, tot15 } = useContext(AppContext);

//   const [sumB2, setSumB2] = useState(0);
//   const [sumC2, setSumC2] = useState(0);
//   const [sumD2, setSumD2] = useState(0);
//   const [sumE2, setSumE2] = useState(0);
//   const [sumF2, setSumF2] = useState(0);
//   const [sumG2, setSumG2] = useState(0);
//   const [sumH2, setSumH2] = useState(0);
//   const [sumI2, setSumI2] = useState(0);

//   const [sumB19, setSumB19] = useState(0);
//   const [sumC19, setSumC19] = useState(0);
//   const [sumD19, setSumD19] = useState(0);
//   const [sumE19, setSumE19] = useState(0);
//   const [sumF19, setSumF19] = useState(0);
//   const [sumG19, setSumG19] = useState(0);
//   const [sumH19, setSumH19] = useState(0);
//   const [sumI19, setSumI19] = useState(0);

  
//   const [sumB21, setSumB21] = useState(0);
//   const [sumC21, setSumC21] = useState(0);
//   const [sumD21, setSumD21] = useState(0);
//   const [sumE21, setSumE21] = useState(0);
//   const [sumF21, setSumF21] = useState(0);
//   const [sumG21, setSumG21] = useState(0);
//   const [sumH21, setSumH21] = useState(0);
//   const [sumI21, setSumI21] = useState(0);

//   // const [prefix, setPrefix] = useState("");
//   // const [tot2020, setTot2020] = useState({});
//   // const [Cost19, setCost19] = useState({});





// //------------------------------------------------------ CODE FOR 7 - 13 ---------------------------------------------

//   const uploadData = async (cell_id, cell_value) => {
//     try {
//       const user_id = localStorage.getItem("user_id");
//       const res = await fetch("http://127.0.0.1:8000/api/save_assets/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({ cell_id, cell_value, user_id })
//       });
//       console.log('Response:', res);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   const calculateTotal = (fields) => {
//     return fields.reduce((total, field) => total + parseFloat(inputValues[field] || 0), 0);
  
  
//   };

//   const updateTotals = () => {
//     setSumB2(calculateTotal(["B1_23", "B1_24", "B1_25", "B2_10", "B2_11"]) + parseFloat(tot15.B3_15 || 0));
//     setSumC2(calculateTotal(["C1_23", "C1_24", "C1_25", "C2_10", "C2_11"]) + parseFloat(tot15.C3_15 || 0));
//     setSumD2(calculateTotal(["D1_23", "D1_24", "D1_25", "D2_10", "D2_11"]) + parseFloat(tot15.D3_15 || 0));
//     setSumE2(calculateTotal(["E1_23", "E1_24", "E1_25", "E2_10", "E2_11"]) + parseFloat(tot15.E3_15 || 0));
//     setSumF2(calculateTotal(["F1_23", "F1_24", "F1_25", "F2_10", "F2_11"]) + parseFloat(tot15.F3_15 || 0));
//     setSumG2(calculateTotal(["G1_23", "G1_24", "G1_25", "G2_10", "G2_11"]) + parseFloat(tot15.G3_15 || 0));
//     setSumH2(calculateTotal(["H1_23", "H1_24", "H1_25", "H2_10", "H2_11"]) + parseFloat(tot15.H3_15 || 0));
//     setSumI2(calculateTotal(["I1_23", "I1_24", "I1_25", "I2_10", "I2_11"]) + parseFloat(tot15.I3_15 || 0));
//   };

//   useEffect(() => {
//     updateTotals();
//   }, [inputValues, tot15]);

//   useEffect(() => {
//     const uploadTotals = async () => {
//       await uploadData("B2_13", sumB2.toString());
//       await uploadData("C2_13", sumC2.toString());
//       await uploadData("D2_13", sumD2.toString());
//       await uploadData("E2_13", sumE2.toString());
//       await uploadData("F2_13", sumF2.toString());
//       await uploadData("G2_13", sumG2.toString());
//       await uploadData("H2_13", sumH2.toString());
//       await uploadData("I2_13", sumI2.toString());
//     };
//     if (sumB2 || sumC2 || sumD2 || sumE2 || sumF2 || sumG2 || sumH2 || sumI2) {
//       uploadTotals();
//     }
//   }, [sumB2, sumC2, sumD2, sumE2, sumF2, sumG2, sumH2, sumI2]);



//   useEffect(() => {
//     const updateYearData = async (yearKey, inputKey) => {
//       await uploadData(yearKey, inputValues[inputKey]);
//     };

//     const years = [
//       ["B2_7", "B1_25"], ["B2_8", "B1_24"], ["B2_9", "B1_23"],
//       ["C2_7", "C1_25"], ["C2_8", "C1_24"], ["C2_9", "C1_23"],
//       ["D2_7", "D1_25"], ["D2_8", "D1_24"], ["D2_9", "D1_23"],
//       ["E2_7", "E1_25"], ["E2_8", "E1_24"], ["E2_9", "E1_23"],
//       ["F2_7", "F1_25"], ["F2_8", "F1_24"], ["F2_9", "F1_23"],
//       ["G2_7", "G1_25"], ["G2_8", "G1_24"], ["G2_9", "G1_23"]
//     ];

//     years.forEach(([yearKey, inputKey]) => {
//       if (inputValues[inputKey]) {
//         updateYearData(yearKey, inputKey);
//       }
//     });
//   }, [inputValues]);




// //-------------------------------------------------- MAIN CODE FUNCTION ------------------------------------------------


//   const changeData = async (e) => {
//     try {
//       const { name, value } = e.target;
//       setInputValues(prev => ({ ...prev, [name]: value }));

//       // if (name.includes("_14") || name.includes("_15") || name.includes("_16") || name.includes("_17") || name.includes("_18") || name.includes("_19") || name.includes("_20") || name.includes("_21") || name.includes("_23") || name.includes("_24") || name.includes("_25") || name.includes("_29") || name.includes("_30") || name.includes("_33") || name.includes("_34") || name.includes("_36") || name.includes("_40")) {
//       //   setPrefix(name.split("_")[0]);
//       // }

//       if (value !== "") {
//         await uploadData(name, value);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };





//   const uploadSum19 = () => {
//     const newSumB19 = calculateTotal(["B2_14", "B2_15", "B2_16", "B2_17", "B2_18"]);
//     const newSumC19 = calculateTotal(["C2_14", "C2_15", "C2_16", "C2_17", "C2_18"]);
//     const newSumD19 = calculateTotal(["D2_14", "D2_15", "D2_16", "D2_17", "D2_18"]);
//     const newSumE19 = calculateTotal(["E2_14", "E2_15", "E2_16", "E2_17", "E2_18"]);
//     const newSumF19 = calculateTotal(["F2_14", "F2_15", "F2_16", "F2_17", "F2_18"]);
//     const newSumG19 = calculateTotal(["G2_14", "G2_15", "G2_16", "G2_17", "G2_18"]);
//     const newSumH19 = calculateTotal(["H2_14", "H2_15", "H2_16", "H2_17", "H2_18"]);
//     const newSumI19 = calculateTotal(["I2_14", "I2_15", "I2_16", "I2_17", "I2_18"]);

//     setSumB19(newSumB19);
//     setSumC19(newSumC19);
//     setSumD19(newSumD19);
//     setSumE19(newSumE19);
//     setSumF19(newSumF19);
//     setSumG19(newSumG19);
//     setSumH19(newSumH19);
//     setSumI19(newSumI19);
//   };

//   useEffect(() => {
//     uploadSum19();
//   }, [inputValues]);

//   useEffect(() => {
//     const uploadDataSum19 = async () => {
//       await uploadData("B2_19", sumB19.toString());
//       await uploadData("C2_19", sumC19.toString());
//       await uploadData("D2_19", sumD19.toString());
//       await uploadData("E2_19", sumE19.toString());
//       await uploadData("F2_19", sumF19.toString());
//       await uploadData("G2_19", sumG19.toString());
//       await uploadData("H2_19", sumH19.toString());
//       await uploadData("I2_19", sumI19.toString());
//     };

//     if (sumB19 || sumC19 || sumD19 || sumE19 || sumF19 || sumG19 || sumH19 || sumI19) {
//       uploadDataSum19();
//     }
//   }, [sumB19, sumC19, sumD19, sumE19, sumF19, sumG19, sumH19, sumI19]);

//   const uploadSum21 = () => {
//     const newSumB21 = calculateTotal(["B2_19", "B2_20"]);
//     const newSumC21 = calculateTotal(["C2_19", "C2_20"]);
//     const newSumD21 = calculateTotal(["D2_19", "D2_20"]);
//     const newSumE21 = calculateTotal(["E2_19", "E2_20"]);
//     const newSumF21 = calculateTotal(["F2_19", "F2_20"]);
//     const newSumG21 = calculateTotal(["G2_19", "G2_20"]);
//     const newSumH21 = calculateTotal(["H2_19", "H2_20"]);
//     const newSumI21 = calculateTotal(["I2_19", "I2_20"]);

//     setSumB21(newSumB21);
//     setSumC21(newSumC21);
//     setSumD21(newSumD21);
//     setSumE21(newSumE21);
//     setSumF21(newSumF21);
//     setSumG21(newSumG21);
//     setSumH21(newSumH21);
//     setSumI21(newSumI21);
//   };

//   useEffect(() => {
//     uploadSum21();
//   }, [sumB19, sumC19, sumD19, sumE19, sumF19, sumG19, sumH19, sumI19]);

//   useEffect(() => {
//     const uploadDataSum21 = async () => {
//       await uploadData("B2_21", sumB21.toString());
//       await uploadData("C2_21", sumC21.toString());
//       await uploadData("D2_21", sumD21.toString());
//       await uploadData("E2_21", sumE21.toString());
//       await uploadData("F2_21", sumF21.toString());
//       await uploadData("G2_21", sumG21.toString());
//       await uploadData("H2_21", sumH21.toString());
//       await uploadData("I2_21", sumI21.toString());
//     };

//     if (sumB21 || sumC21 || sumD21 || sumE21 || sumF21 || sumG21 || sumH21 || sumI21) {
//       uploadDataSum21();
//     }
//   }, [sumB21, sumC21, sumD21, sumE21, sumF21, sumG21, sumH21, sumI21]);








//   // const uploadSum19 = async (data) => {
//   //   try {
//   //     const { name, namePrefix } = data;
//   //     const user_id = localStorage.getItem("user_id");

//   //     let sum19 = 
//   //       parseFloat(inputValues[namePrefix + "_14"] || 0) +
//   //       parseFloat(inputValues[namePrefix + "_15"] || 0) +
//   //       parseFloat(inputValues[namePrefix + "_16"] || 0) +
//   //       parseFloat(inputValues[namePrefix + "_17"] || 0) +
//   //       parseFloat(inputValues[namePrefix + "_18"] || 0);
      

//   //     console.log(`>>>>>>${sum19}`);

//   //     if (sum19 !== 0) {
//   //       const res = await fetch("http://127.0.0.1:8000/api/save_opstmt/", {
//   //         method: "POST",
//   //         headers: {
//   //           "Content-Type": "application/json"
//   //         },
//   //         body: JSON.stringify({ cell_id: name, cell_value: sum19, user_id: user_id })
//   //       });
//   //       console.log('Response:', res); // Log the response data
//   //     }

//   //   } catch (error) {
//   //     console.error('Error:', error); // Log any errors that occur during the request
//   //   }
//   // };


//   // useEffect(() => {
//   //   console.log(Cost19);
//   //   const total19 = 
//   //     // parseFloat(lessB)+

//   //     parseFloat(inputValues[prefix + "_14"] || 0) +
//   //     parseFloat(inputValues[prefix + "_15"] || 0) +
//   //     parseFloat(inputValues[prefix + "_16"] || 0) +
//   //     parseFloat(inputValues[prefix + "_17"] || 0) +
//   //     parseFloat(inputValues[prefix + "_18"] || 0);
     
    
//   //   setCost19(total19);
//   //   setCost19({
//   //     ...Cost19,
//   //     [[prefix + "_19"]]: total19.toString()
//   //   });
//   //   uploadSum19({ name: prefix + "_19", namePrefix: prefix });
//   // }, [prefix, inputValues]);

 






































 

//   return (
// <div style={{ marginTop: 25 }}>
//       <div className="container-fluid border d-flex justify-content-center div_1">
//         <h2 className="navbar-brand">Astral India Ltd</h2>
//       </div>

//       <div className="container-fluid border mt-3">
//         <div className="row">
//           <div className="col-lg-4 border-end d-flex justify-content-center">
//             <h5>Analysis Of Balance Sheet</h5>
//           </div>
//           <div className="col-lg-8 border-start d-flex justify-content-center">
//             <h5>For the year ended/ending (Rs. in Lacs)</h5>
//           </div>
//         </div>
//       </div>

//       <div className="container-fluid border mt-3">
//         <div className="row">
//           <div className="col-lg-4 border-end d-flex justify-content-center">
//             <h6 className="navbar-brand">PARTICULARS</h6>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <h6 className="navbar-brand">2020</h6>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <h6 className="navbar-brand">2021</h6>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <h6 className="navbar-brand">2022</h6>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <h6 className="navbar-brand">2023</h6>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <h6 className="navbar-brand">2024</h6>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <h6 className="navbar-brand">2025</h6>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <h6 className="navbar-brand">2026</h6>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <h6 className="navbar-brand">2027</h6>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-lg-4 border-end d-flex justify-content-center">
//             <h6 className="navbar-brand"></h6>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <h6 >Audited</h6>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <h6 >Audited</h6>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <h6>Audited</h6>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <h6>Audited</h6>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <h6>Audited</h6>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <h6 >Projected</h6>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <h6 >Projected</h6>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <h6 >Projected</h6>
//           </div>
//         </div>
//       </div>

//     <div className="container-fluid border mt-3">
//         <div className="row" style={{backgroundColor:"rgb(224, 231, 231)"}}>
//           <div className="col-lg-4 border-end d-flex justify-content-center">
//             <h5 style={{color:"red"}}>CURRENT ASSETS</h5>
//           </div>
//         </div>
//     </div>
    
//     <div className="container-fluid border mt-3 div_main4">
//       <div className="row" >
//         <div className="col-lg-4 border-end d-flex justify-content-center" style={{backgroundColor: "rgb(169, 255, 251)"}}>
//           <h6><b>Raw Materials</b></h6>
//         </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input 
//                 style={{backgroundColor: "rgb(169, 255, 251)"}}
//                 type="text" 
//                 className="form-control" 
//                 aria-label="First name" 
//                 name="B2_7"
//                 value={inputValues.B1_25}
//                 onChange={changeData}  
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text"
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(169, 255, 251)"}}
//                 aria-label="First name" 
//                 name="C2_7"  
//                 value={inputValues.C1_25}
//                 onChange={changeData}
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input 
//                 style={{backgroundColor: "rgb(169, 255, 251)"}}
//                 type="text" 
//                 className="form-control" 
//                aria-label="First name" 
//                 name="D2_7"  
//                 value={inputValues.D1_25}
//                 onChange={changeData}
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(169, 255, 251)"}}
//                 aria-label="First name" 
//                 name="E2_7"  
//                 value={inputValues.E1_25}
//                 onChange={changeData} 
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(169, 255, 251)"}}
//                 aria-label="First name" 
//                 name="F2_7" 
//                 value={inputValues.F1_25}
//                 onChange={changeData}

//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(169, 255, 251)"}}
//                 aria-label="First name" 
//                 name="G2_7"  
//                 value={inputValues.G1_25}
//                 onChange={changeData} 
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(169, 255, 251)"}}
//                 aria-label="First name" 
//                 name="H2_7"  
//                 value={inputValues.H1_25}
//                 onChange={changeData} 
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(169, 255, 251)"}}
//                 aria-label="First name" 
//                 name="I2_7"  
//                 value={inputValues.I1_25}
//                 onChange={changeData} 
//                 />
//               </div>
//             </div>
//           </div>
//       </div>
//   </div>
//   <div className="container-fluid border mt-3 div_main4">
//       <div className="row" >
//         <div className="col-lg-4 border-end d-flex justify-content-center" style={{backgroundColor: "rgb(169, 255, 251)"}}>
//           <h6 ><b>Stock in Process</b></h6>
//         </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input 
//                 style={{backgroundColor: "rgb(169, 255, 251)"}}
//                 type="text" 
//                 className="form-control" 
//                 aria-label="First name" 
//                 name="B2_8"
//                 value={inputValues.B1_24}
//                 onChange={changeData}  
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text"
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(169, 255, 251)"}}
//                 aria-label="First name" 
//                 name="C2_8"  
//                 value={inputValues.C1_24}
//                 onChange={changeData}
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input 
//                 style={{backgroundColor: "rgb(169, 255, 251)"}}
//                 type="text" 
//                 className="form-control" 
//                aria-label="First name" 
//                 name="D2_8"  
//                 value={inputValues.D1_24}
//                 onChange={changeData}
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(169, 255, 251)"}}
//                 aria-label="First name" 
//                 name="E2_8"  
//                 value={inputValues.E1_24}
//                 onChange={changeData} 
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(169, 255, 251)"}}
//                 aria-label="First name" 
//                 name="F2_8" 
//                 value={inputValues.F1_24}
//                 onChange={changeData}

//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(169, 255, 251)"}}
//                 aria-label="First name" 
//                 name="G2_8"  
//                 value={inputValues.G1_24}
//                 onChange={changeData} 
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(169, 255, 251)"}}
//                 aria-label="First name" 
//                 name="H2_8"  
//                 value={inputValues.H1_24}
//                 onChange={changeData} 
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(169, 255, 251)"}}
//                 aria-label="First name" 
//                 name="I2_8"  
//                 value={inputValues.I1_24}
//                 onChange={changeData} 
//                 />
//               </div>
//             </div>
//           </div>
//       </div>
//   </div>
  

// <div className="container-fluid border mt-3 div_main4">
//       <div className="row" >
//         <div className="col-lg-4 border-end d-flex justify-content-center" style={{backgroundColor: "rgb(169, 255, 251)"}}>
//           <h6><b>Finishing Goods</b></h6>
//         </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input 
//                 style={{backgroundColor: "rgb(169, 255, 251)"}}
//                 type="text" 
//                 className="form-control" 
//                 aria-label="First name" 
//                 name="B2_9"
//                 value={inputValues.B1_23}
//                 onChange={changeData}  
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text"
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(169, 255, 251)"}}
//                 aria-label="First name" 
//                 name="C2_9"  
//                 value={inputValues.C1_23}
//                 onChange={changeData}
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input 
//                 style={{backgroundColor: "rgb(169, 255, 251)"}}
//                 type="text" 
//                 className="form-control" 
//                aria-label="First name" 
//                 name="D2_9"  
//                 value={inputValues.D1_23}
//                 onChange={changeData}
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(169, 255, 251)"}}
//                 aria-label="First name" 
//                 name="E2_9"  
//                 value={inputValues.E1_23}
//                 onChange={changeData} 
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(169, 255, 251)"}}
//                 aria-label="First name" 
//                 name="F2_9" 
//                 value={inputValues.F1_23}
//                 onChange={changeData}

//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(169, 255, 251)"}}
//                 aria-label="First name" 
//                 name="G2_9"  
//                 value={inputValues.G1_23}
//                 onChange={changeData} 
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(169, 255, 251)"}}
//                 aria-label="First name" 
//                 name="H2_9"  
//                 value={inputValues.H1_23}
//                 onChange={changeData} 
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(169, 255, 251)"}}
//                 aria-label="First name" 
//                 name="I2_9"  
//                 value={inputValues.I1_23}
//                 onChange={changeData} 
//                 />
//               </div>
//             </div>
//           </div>
//       </div>
//     </div>

//     <div className="container-fluid border mt-3">
//       <div className="row">
//           <div className="col-lg-4 border-end d-flex justify-content-center">
//             <h6>Consumable Spares
//              </h6>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//               <input
//                         type="number"
//                         className="form-control"
//                         placeholder="Rs."
//                         aria-label="First name"
//                         name="B2_10"
//                         value={inputValues.B2_10}
//                         onChange={changeData}
//                     />
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//               <input
                        
//                         type="number"
//                         className="form-control"
//                         placeholder="Rs."
//                         aria-label="First name"
//                         name="C2_10"
//                         value={inputValues.C2_10}
//                         onChange={changeData}
//                     />
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input 
//                 type="number" 
//                 className="form-control" 
//                  placeholder="Rs."
//                 aria-label="First name" 
//                 name="D2_10"  
//                 value={inputValues.D2_10}
//                 onChange={changeData}  
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                  placeholder="Rs."
//                 aria-label="First name" 
//                 name="E2_10"  
//                 value={inputValues.E2_10}
//                 onChange={changeData}  
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                  placeholder="Rs."
//                 aria-label="First name" 
//                 name="F2_10"  
//                 value={inputValues.F2_10}
//                 onChange={changeData} 
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                  placeholder="Rs."
//                 aria-label="First name" 
//                 name="G2_10" 
//                 value={inputValues.G2_10}
//                 onChange={changeData} />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                  placeholder="Rs."
//                 aria-label="First name" 
//                 name="H2_10"  
//                 value={inputValues.H2_10}
//                 onChange={changeData} 
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                  placeholder="Rs."
//                 aria-label="First name" 
//                 name="I2_10"  
//                 value={inputValues.I2_10}
//                 onChange={changeData} 
//                 />

//               </div>
//             </div>
//           </div>
//           {/* Add similar input fields for other years here */}
//       </div>
//     </div>
//     <div className="container-fluid border mt-3">
//       <div className="row">
//           <div className="col-lg-4 border-end d-flex justify-content-center">
//             <h6 style={{color:"blue"}}>Trade Debtors Less 6 Months
//              </h6>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs." 
//                 aria-label="First name" 
//                 name="B2_11"  
//                 value={inputValues.B2_11}
//                 onChange={changeData}
//                 />
                

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                placeholder="Rs."
//                 aria-label="First name" 
//                 name="C2_11"
//                 value={inputValues.C2_11}
//                 onChange={changeData}  />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number"
//                 className="form-control" 
//                 placeholder="Rs."
//                 aria-label="First name" 
//                 name="D2_11"  
//                 value={inputValues.D2_11}
//                 onChange={changeData} 
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number"
//                 className="form-control" 
//                 placeholder="Rs."
//                 aria-label="First name" 
//                 name="E2_11"  
//                 value={inputValues.E2_11}
//                 onChange={changeData}  
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number"
//                 className="form-control" 
//                 placeholder="Rs."
//                 aria-label="First name" 
//                 name="F2_11" 
//                 value={inputValues.F2_11}
//                 onChange={changeData} 
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                placeholder="Rs."
//                 aria-label="First name" 
//                 name="G2_11"  
//                 value={inputValues.G2_11}
//                 onChange={changeData} 
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                placeholder="Rs."
//                 aria-label="First name" 
//                 name="H2_11"  
//                 value={inputValues.H2_11}
//                 onChange={changeData} 
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number"
//                 className="form-control" 
//                 placeholder="Rs."
//                 aria-label="First name" 
//                 name="I2_11"  
//                 value={inputValues.I2_11}
//                 onChange={changeData} 
//                 />

//               </div>
//             </div>
//           </div>
//           {/* Add similar input fields for other years here */}
//       </div>
//     </div>
//     <div className="container-fluid border mt-3 div_main4">
//       <div className="row" >
//         <div className="col-lg-4 border-end d-flex justify-content-center"style={{backgroundColor: "rgb(159, 252, 204)"}}>
//           <h5>Other Current Assets</h5>
//         </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input 
//                 style={{backgroundColor: "rgb(159, 252, 204)"}}
//                 type="text" 
//                 className="form-control" 
//                 aria-label="First name" 
//                 name="B2_12"
//                 value={tot15.B3_15}
//                 onChange={changeData}  
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text"
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(159, 252, 204)"}}
//                 aria-label="First name" 
//                 name="C2_12"  
//                 value={tot15.C3_15}
//                 onChange={changeData}
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input 
//                 style={{backgroundColor: "rgb(159, 252, 204)"}}
//                 type="text" 
//                 className="form-control" 
//                aria-label="First name" 
//                 name="D2_12"  
//                 value={tot15.D3_15}
//                 onChange={changeData}
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(159, 252, 204)"}}
//                 aria-label="First name" 
//                 name="E2_12"  
//                 value={tot15.E3_15}
//                 onChange={changeData} 
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(159, 252, 204)"}}
//                 aria-label="First name" 
//                 name="F2_12" 
//                 value={tot15.F3_15}
//                 onChange={changeData}

//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(159, 252, 204)"}}
//                 aria-label="First name" 
//                 name="G2_12"  
//                 value={tot15.G3_15}
//                 onChange={changeData} 
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(159, 252, 204)"}}
//                 aria-label="First name" 
//                 name="H2_12"  
//                 value={tot15.H3_15}
//                 onChange={changeData} 
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(159, 252, 204)"}}
//                 aria-label="First name" 
//                 name="I2_12"  
//                 value={tot15.I3_15}
//                 onChange={changeData} 
//                 />
//               </div>
//             </div>
//           </div>
//       </div>
//     </div>
//     <div className="container-fluid border mt-3 div_main4">
//       <div className="row" >
//         <div className="col-lg-4 border-end d-flex justify-content-center" style={{backgroundColor: "rgb(169, 255, 251)"}}>
//           <h5 style={{color:"red"}}>TOTAL CURRENT ASSETS</h5>
//         </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input 
//                 style={{backgroundColor: "rgb(169, 255, 251)",fontWeight:"bold"}}
//                 type="text" 
//                 className="form-control" 
//                 aria-label="First name" 
//                 name="B2_13"
//                 value={sumB2}
//                 onChange={changeData}  
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text"
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(169, 255, 251)",fontWeight:"bold"}}
//                 aria-label="First name" 
//                 name="C2_13"  
//                 value={sumC2}
//                 onChange={changeData}
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input 
//                 style={{backgroundColor: "rgb(169, 255, 251)",fontWeight:"bold"}}
//                 type="text" 
//                 className="form-control" 
//                aria-label="First name" 
//                 name="D2_13"  
//                 value={sumD2}
//                 onChange={changeData}
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(169, 255, 251)",fontWeight:"bold"}}
//                 aria-label="First name" 
//                 name="E2_13"  
//                 value={sumE2}
//                 onChange={changeData} 
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(169, 255, 251)",fontWeight:"bold"}}
//                 aria-label="First name" 
//                 name="F2_13" 
//                 value={sumF2}
//                 onChange={changeData}

//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(169, 255, 251)",fontWeight:"bold"}}
//                 aria-label="First name" 
//                 name="G2_13"  
//                 value={sumG2}
//                 onChange={changeData} 
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(169, 255, 251)",fontWeight:"bold"}}
//                 aria-label="First name" 
//                 name="H2_13"  
//                 value={sumH2}
//                 onChange={changeData} 
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(169, 255, 251)",fontWeight:"bold"}}
//                 aria-label="First name" 
//                 name="I2_13"  
//                 value={sumI2}
//                 onChange={changeData} 
//                 />
//               </div>
//             </div>
//           </div>
//       </div>
//     </div>
  
//     <div className="container-fluid border mt-3">
//       <div className="row">
//           <div className="col-lg-4 border-end d-flex justify-content-center">
//             <h6>FIXED ASSETS
//              </h6>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//               <input
//                         type="number"
//                         className="form-control"
//                         placeholder="Rs."
//                         aria-label="First name"
//                         name="B2_14"
//                         value={inputValues.B2_14}
//                         onChange={changeData}
//                     />
    
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//               <input
                        
//                         type="number"
//                          placeholder="Rs."
//                         className="form-control"
//                         aria-label="First name"
//                         name="C2_14"
//                         value={inputValues.C2_14}
//                         onChange={changeData}
//                     />
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input 
//                 type="number" 
//                 className="form-control" 
//                 placeholder="Rs."
//                 aria-label="First name" 
//                 name="D2_14"  
//                 value={inputValues.D2_14}
//                 onChange={changeData}  
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                   placeholder="Rs."
//                 aria-label="First name" 
//                 name="E2_14"  
//                 value={inputValues.E2_14}
//                 onChange={changeData}  
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                   placeholder="Rs."
//                 aria-label="First name" 
//                 name="F2_14"  
//                 value={inputValues.F2_14}
//                 onChange={changeData} 
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                   placeholder="Rs."
//                 aria-label="First name" 
//                 name="G2_14" 
//                 value={inputValues.G2_14}
//                 onChange={changeData} />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                   placeholder="Rs."
//                 aria-label="First name" 
//                 name="H2_14"  
//                 value={inputValues.H2_14}
//                 onChange={changeData} 
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                   placeholder="Rs."
//                 aria-label="First name" 
//                 name="I2_14"  
//                 value={inputValues.I2_14}
//                 onChange={changeData} 
//                 />

//               </div>
//             </div>
//           </div>
//           {/* Add similar input fields for other years here */}
//       </div>
//     </div>
//     <div className="container-fluid border mt-3">
//       <div className="row">
//           <div className="col-lg-4 border-end d-flex justify-content-center">
//             <h6>Land & Building
//              </h6>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs." 
//                 aria-label="First name" 
//                 name="B2_15"  
//                 value={inputValues.B2_15}
//                 onChange={changeData}
//                 />
                

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs."
//                 aria-label="First name" 
//                 name="C2_15"
//                 value={inputValues.C2_15}
//                 onChange={changeData}  />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number"
//                 className="form-control" 
//                  placeholder="Rs."
//                 aria-label="First name" 
//                 name="D2_15"  
//                 value={inputValues.D2_15}
//                 onChange={changeData} 
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number"
//                 className="form-control" 
//                  placeholder="Rs."
//                 aria-label="First name" 
//                 name="E2_15"  
//                 value={inputValues.E2_15}
//                 onChange={changeData}  
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number"
//                 className="form-control" 
//                  placeholder="Rs."
//                 aria-label="First name" 
//                 name="F2_15" 
//                 value={inputValues.F2_15}
//                 onChange={changeData} 
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs."
//                 aria-label="First name" 
//                 name="G2_15"  
//                 value={inputValues.G2_15}
//                 onChange={changeData} 
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs."
//                 aria-label="First name" 
//                 name="H2_15"  
//                 value={inputValues.H2_15}
//                 onChange={changeData} 
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number"
//                 className="form-control" 
//                  placeholder="Rs."
//                 aria-label="First name" 
//                 name="I2_15"  
//                 value={inputValues.I2_15}
//                 onChange={changeData} 
//                 />

//               </div>
//             </div>
//           </div>
//           {/* Add similar input fields for other years here */}
//       </div>
//     </div>
//     <div className="container-fluid border mt-3">
//       <div className="row">
//           <div className="col-lg-4 border-end d-flex justify-content-center">
//             <h6>Plant & Machinery
//              </h6>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs."
//                 aria-label="First name" 
//                 name="B2_16"
//                 value={inputValues.B2_16}
//                 onChange={changeData}  
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number"
//                 className="form-control" 
//                  placeholder="Rs."
//                 aria-label="First name" 
//                 name="C2_16"  
//                 value={inputValues.C2_16}
//                 onChange={changeData}
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                aria-label="First name" 
//                placeholder="Rs."
//                 name="D2_16"  
//                 value={inputValues.D2_16}
//                 onChange={changeData}
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs."
//                 aria-label="First name" 
//                 name="E2_16"  
//                 value={inputValues.E2_16}
//                 onChange={changeData} 
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs."
//                 aria-label="First name" 
//                 name="F2_16" 
//                 value={inputValues.F2_16}
//                 onChange={changeData}

//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs."
//                 aria-label="First name" 
//                 name="G2_16"  
//                 value={inputValues.G2_16}
//                 onChange={changeData} 
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs."
//                 aria-label="First name" 
//                 name="H2_16"  
//                 value={inputValues.H2_16}
//                 onChange={changeData} 
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs."
//                 aria-label="First name" 
//                 name="I2_16"  
//                 value={inputValues.I2_16}
//                 onChange={changeData} 
//                 />
//               </div>
//             </div>
//           </div>
//       </div>
//     </div>
//     <div className="container-fluid border mt-3">
//       <div className="row">
//           <div className="col-lg-4 border-end d-flex justify-content-center">
//             <h6>Furniture / Fixtures / Sundries
//              </h6>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs."
//                 aria-label="First name" 
//                 name="B2_17"
//                 value={inputValues.B2_17}
//                 onChange={changeData}  
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number"
//                 className="form-control" 
//                  placeholder="Rs."
//                 aria-label="First name" 
//                 name="C2_17"  
//                 value={inputValues.C2_17}
//                 onChange={changeData}
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                aria-label="First name" 
//                placeholder="Rs."
//                 name="D2_17"  
//                 value={inputValues.D2_17}
//                 onChange={changeData}
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs."
//                 aria-label="First name" 
//                 name="E2_17"  
//                 value={inputValues.E2_17}
//                 onChange={changeData} 
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs."
//                 aria-label="First name" 
//                 name="F2_17" 
//                 value={inputValues.F2_17}
//                 onChange={changeData}

//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs."
//                 aria-label="First name" 
//                 name="G2_17"  
//                 value={inputValues.G2_17}
//                 onChange={changeData} 
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs."
//                 aria-label="First name" 
//                 name="H2_17"  
//                 value={inputValues.H2_17}
//                 onChange={changeData} 
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs."
//                 aria-label="First name" 
//                 name="I2_17"  
//                 value={inputValues.I2_17}
//                 onChange={changeData} 
//                 />
//               </div>
//             </div>
//           </div>
//       </div>
//     </div>
//     <div className="container-fluid border mt-3">
//       <div className="row">
//           <div className="col-lg-4 border-end d-flex justify-content-center">
//             <h6>Capital Work in Progress
//              </h6>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs."
//                 aria-label="First name" 
//                 name="B2_18"
//                 value={inputValues.B2_18}
//                 onChange={changeData}  
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number"
//                 className="form-control" 
//                  placeholder="Rs."
//                 aria-label="First name" 
//                 name="C2_18"  
//                 value={inputValues.C2_18}
//                 onChange={changeData}
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                aria-label="First name" 
//                placeholder="Rs."
//                 name="D2_18"  
//                 value={inputValues.D2_18}
//                 onChange={changeData}
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs."
//                 aria-label="First name" 
//                 name="E2_18"  
//                 value={inputValues.E2_18}
//                 onChange={changeData} 
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs."
//                 aria-label="First name" 
//                 name="F2_18" 
//                 value={inputValues.F2_18}
//                 onChange={changeData}

//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs."
//                 aria-label="First name" 
//                 name="G2_18"  
//                 value={inputValues.G2_18}
//                 onChange={changeData} 
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs."
//                 aria-label="First name" 
//                 name="H2_18"  
//                 value={inputValues.H2_18}
//                 onChange={changeData} 
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs."
//                 aria-label="First name" 
//                 name="I2_18"  
//                 value={inputValues.I2_18}
//                 onChange={changeData} 
//                 />
//               </div>
//             </div>
//           </div>
//       </div>
//     </div>
//     <div className="container-fluid border mt-3 div_main4">
//       <div className="row" >
//         <div className="col-lg-4 border-end d-flex justify-content-center" style={{backgroundColor: "rgb(169, 255, 251)"}}>
//           <h5 style={{color:"red"}}>GROSS BLOCK</h5>
//         </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input 
//                 style={{backgroundColor: "rgb(169, 255, 251)",fontWeight:"bold"}}
//                 type="text" 
//                 className="form-control" 
//                 aria-label="First name" 
//                 name="B2_19"
//                 value={sumB19}
//                 onChange={changeData}  
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text"
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(169, 255, 251)",fontWeight:"bold"}}
//                 aria-label="First name" 
//                 name="C2_19"  
//                 value={sumC19}
//                 onChange={changeData}
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input 
//                 style={{backgroundColor: "rgb(169, 255, 251)",fontWeight:"bold"}}
//                 type="text" 
//                 className="form-control" 
//                aria-label="First name" 
//                 name="D2_19"  
//                 value={sumD19}
//                 onChange={changeData}
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(169, 255, 251)",fontWeight:"bold"}}
//                 aria-label="First name" 
//                 name="E2_19"  
//                 value={sumE19}
//                 onChange={changeData} 
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(169, 255, 251)",fontWeight:"bold"}}
//                 aria-label="First name" 
//                 name="F2_19" 
//                 value={sumF19}
//                 onChange={changeData}

//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(169, 255, 251)",fontWeight:"bold"}}
//                 aria-label="First name" 
//                 name="G2_19"  
//                 value={sumG19}
//                 onChange={changeData} 
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(169, 255, 251)",fontWeight:"bold"}}
//                 aria-label="First name" 
//                 name="H2_19"  
//                 value={sumH19}
//                 onChange={changeData} 
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(169, 255, 251)",fontWeight:"bold"}}
//                 aria-label="First name" 
//                 name="I2_19"  
//                 value={sumI19}
//                 onChange={changeData} 
//                 />
//               </div>
//             </div>
//           </div>
//       </div>
//     </div>

//     <div className="container-fluid border mt-3">
//       <div className="row">
//           <div className="col-lg-4 border-end d-flex justify-content-center">
//             <h6>Less Depreciation
//              </h6>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//               <input
//                         type="number"
//                         className="form-control"
//                         placeholder="Rs."
//                         aria-label="First name"
//                         name="B2_20"
//                         value={inputValues.B2_20}
//                         onChange={changeData}
//                     />
//                     {/* <!--//AAAAAAAA --> */}
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//               <input
//                         type="number"
//                         className="form-control"
//                         placeholder="Rs."
//                         aria-label="First name"
//                         name="C2_20"
//                         value={inputValues.C2_20}
//                         onChange={changeData}
//                     />
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input 
//                 type="number" 
//                 className="form-control" 
//                 placeholder="Rs." 
//                 aria-label="First name" 
//                 name="D2_20"  
//                 value={inputValues.D2_20}
//                 onChange={changeData}  
//                 />
//                 {/* <!--//AAAAAAAA --> */}
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs." 
//                 aria-label="First name" 
//                 name="E2_20"  
//                 value={inputValues.E2_20}
//                 onChange={changeData}  
//                 />
//                 {/* <!--//AAAAAAAA --> */}
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs." 
//                 aria-label="First name" 
//                 name="F2_20"  
//                 value={inputValues.F2_20}
//                 onChange={changeData} 
//                 />
//                 {/* <!--//AAAAAAAA --> */}
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs." 
//                 aria-label="First name" 
//                 name="G2_20" 
//                 value={inputValues.G2_20}
//                 onChange={changeData} />
//                 {/* <!--//AAAAAAAA --> */}
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs." 
//                 aria-label="First name" 
//                 name="H2_20"  
//                 value={inputValues.H2_20}
//                 onChange={changeData} 
//                 />
//                 {/* <!--//AAAAAAAA --> */}
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs." 
//                 aria-label="First name" 
//                 name="I2_20"  
//                 value={inputValues.I2_20}
//                 onChange={changeData} 
//                 />
//                 {/* <!--//AAAAAAAA --> */}
//               </div>
//             </div>
//           </div>
//           {/* Add similar input fields for other years here */}
//       </div>
//     </div>
//     <div className="container-fluid border mt-3 div_main4">
//       <div className="row" >
//         <div className="col-lg-4 border-end d-flex justify-content-center" style={{backgroundColor: "rgb(169, 255, 251)"}}>
//           <h5 style={{color:"red"}}>NET FIXED ASSETS</h5>
//         </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input 
//                 style={{backgroundColor: "rgb(169, 255, 251)",fontWeight:"bold"}}
//                 type="text" 
//                 className="form-control"
//                 aria-label="First name" 
//                 name="B2_21"
//                 value={sumB21}
//                 onChange={changeData}  
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text"
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(169, 255, 251)",fontWeight:"bold"}}
//                 aria-label="First name" 
//                 name="C2_21"  
//                 value={sumC21}
//                 onChange={changeData}
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input 
//                 style={{backgroundColor: "rgb(169, 255, 251)",fontWeight:"bold"}}
//                 type="text" 
//                 className="form-control" 
//                aria-label="First name" 
//                 name="D2_21"  
//                 value={sumD21}
//                 onChange={changeData}
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(169, 255, 251)",fontWeight:"bold"}}
//                 aria-label="First name" 
//                 name="E2_21"  
//                 value={sumE21}
//                 onChange={changeData} 
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(169, 255, 251)",fontWeight:"bold"}}
//                 aria-label="First name" 
//                 name="F2_21" 
//                 value={sumF21}
//                 onChange={changeData}

//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(169, 255, 251)",fontWeight:"bold"}}
//                 aria-label="First name" 
//                 name="G2_21"  
//                 value={sumG21}
//                 onChange={changeData} 
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(169, 255, 251)",fontWeight:"bold"}}
//                 aria-label="First name" 
//                 name="H2_21"  
//                 value={sumH21}
//                 onChange={changeData} 
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(169, 255, 251)",fontWeight:"bold"}}
//                 aria-label="First name" 
//                 name="I2_21"  
//                 value={sumI21}
//                 onChange={changeData} 
//                 />
//               </div>
//             </div>
//           </div>
//       </div>
//     </div>

//     {/* ------------------------------- NON CURRENT ASSETS ----------------------------------------------- */}
   
//     <div className="container-fluid border mt-3">
//         <div className="row" style={{backgroundColor:"rgb(224, 231, 231)"}}>
//           <div className="col-lg-4 border-end d-flex justify-content-center">
//             <h5 >NON CURRENT ASSETS</h5>
//           </div>
//         </div>
//     </div>
//     <div className="container-fluid border mt-3">
//       <div className="row">
//           <div className="col-lg-4 border-end d-flex justify-content-center">
//             <h6>Investment / Loan to Associate
//              </h6>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs." 
//                 aria-label="First name" 
//                 name="B2_23"  
//                 value={inputValues.B2_23}
//                 onChange={changeData}
//                 />
                
//                 {/* <!--//AAAAAAAA --> */}
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs." 
//                 aria-label="First name" 
//                 name="C2_23"
//                 value={inputValues.C2_23}
//                 onChange={changeData}  />
//                 {/* <!--//AAAAAAAA --> */}
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs." 
//                 aria-label="First name" 
//                 name="D2_23"  
//                 value={inputValues.D2_23}
//                 onChange={changeData} 
//                 />
//                 {/* <!--//AAAAAAAA --> */}
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs." 
//                 aria-label="First name" 
//                 name="E2_23"  
//                 value={inputValues.E2_23}
//                 onChange={changeData}  
//                 />
//                 {/* <!--//AAAAAAAA --> */}
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs." 
//                 aria-label="First name" 
//                 name="F2_23" 
//                 value={inputValues.F2_23}
//                 onChange={changeData} 
//                 />
//                 {/* <!--//AAAAAAAA --> */}
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs." 
//                 aria-label="First name" 
//                 name="G2_23"  
//                 value={inputValues.G2_23}
//                 onChange={changeData} 
//                 />
//                 {/* <!--//AAAAAAAA --> */}
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs." 
//                 aria-label="First name" 
//                 name="H2_23"  
//                 value={inputValues.H2_23}
//                 onChange={changeData} 
//                 />
//                 {/* <!--//AAAAAAAA --> */}
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs." 
//                 aria-label="First name" 
//                 name="I2_23"  
//                 value={inputValues.I2_23}
//                 onChange={changeData} 
//                 />
//                 {/* <!--//AAAAAAAA --> */}
//               </div>
//             </div>
//           </div>
//           {/* Add similar input fields for other years here */}
//       </div>
//     </div>
//     <div className="container-fluid border mt-3 div_main4">
//       <div className="row" >
//         <div className="col-lg-4 border-end d-flex justify-content-center"style={{backgroundColor: "rgb(159, 252, 204)"}}>
//           <h5>Other Non Current Assets</h5>
//         </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input 
//                 style={{backgroundColor: "rgb(159, 252, 204)"}}
//                 type="text" 
//                 className="form-control" 
//                 aria-label="First name" 
//                 name="B2_24"
//                 value={inputValues.B2_24}
//                 onChange={changeData}  
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text"
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(159, 252, 204)"}}
//                 aria-label="First name" 
//                 name="C2_24"  
//                 value={inputValues.C2_24}
//                 onChange={changeData}
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input 
//                 style={{backgroundColor: "rgb(159, 252, 204)"}}
//                 type="text" 
//                 className="form-control" 
//                aria-label="First name" 
//                 name="D2_24"  
//                 value={inputValues.D2_24}
//                 onChange={changeData}
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(159, 252, 204)"}}
//                 aria-label="First name" 
//                 name="E2_24"  
//                 value={inputValues.E2_24}
//                 onChange={changeData} 
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(159, 252, 204)"}}
//                 aria-label="First name" 
//                 name="F2_24" 
//                 value={inputValues.F2_24}
//                 onChange={changeData}

//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(159, 252, 204)"}}
//                 aria-label="First name" 
//                 name="G2_24"  
//                 value={inputValues.G2_24}
//                 onChange={changeData} 
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(159, 252, 204)"}}
//                 aria-label="First name" 
//                 name="H2_24"  
//                 value={inputValues.H2_24}
//                 onChange={changeData} 
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(159, 252, 204)"}}
//                 aria-label="First name" 
//                 name="I2_24"  
//                 value={inputValues.I2_24}
//                 onChange={changeData} 
//                 />
//               </div>
//             </div>
//           </div>
//       </div>
//     </div>

    
//     <div className="container-fluid border mt-3 div_main4">
//       <div className="row" >
//         <div className="col-lg-4 border-end d-flex justify-content-center" style={{backgroundColor: "rgb(169, 255, 251)"}}>
//           <h5 style={{color:"red"}}>TOTAL NCA</h5>
//         </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input 
//                 style={{backgroundColor: "rgb(169, 255, 251)"}}
//                 type="text" 
//                 className="form-control" 
//                 aria-label="First name" 
//                 name="B2_25"
//                 value={inputValues.B2_25}
//                 onChange={changeData}  
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text"
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(169, 255, 251)"}}
//                 aria-label="First name" 
//                 name="C2_25"  
//                 value={inputValues.C2_25}
//                 onChange={changeData}
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input 
//                 style={{backgroundColor: "rgb(169, 255, 251)"}}
//                 type="text" 
//                 className="form-control" 
//                aria-label="First name" 
//                 name="D2_25"  
//                 value={inputValues.D2_25}
//                 onChange={changeData}
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(169, 255, 251)"}}
//                 aria-label="First name" 
//                 name="E2_25"  
//                 value={inputValues.E2_25}
//                 onChange={changeData} 
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(169, 255, 251)"}}
//                 aria-label="First name" 
//                 name="F2_25" 
//                 value={inputValues.F2_25}
//                 onChange={changeData}

//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(169, 255, 251)"}}
//                 aria-label="First name" 
//                 name="G2_25"  
//                 value={inputValues.G2_25}
//                 onChange={changeData} 
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(169, 255, 251)"}}
//                 aria-label="First name" 
//                 name="H2_25"  
//                 value={inputValues.H2_25}
//                 onChange={changeData} 
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(169, 255, 251)"}}
//                 aria-label="First name" 
//                 name="I2_25"  
//                 value={inputValues.I2_25}
//                 onChange={changeData} 
//                 />
//               </div>
//             </div>
//           </div>
//       </div>
//     </div>


//     {/* ---------------------------------------NON CURRENT ASSETS ------------------------------------------*/}


//     <div className="container-fluid border mt-3">
//         <div className="row" style={{backgroundColor:"rgb(224, 231, 231)"}}>
//           <div className="col-lg-4 border-end d-flex justify-content-center">
//             <h5 >INTANGIBLE ASSETS</h5>
//           </div>
//         </div>
//     </div>
    
// <div className="container-fluid border mt-3">
// <div className="row">
//     <div className="col-lg-4 border-end d-flex justify-content-center">
//       <h6>Expenses not written off
//        </h6>
//     </div>
//     <div className="col-lg-1 border-start d-flex justify-content-center">
//       <div className="row g-3">
//         <div className="col">
//           <input type="number" 
//           className="form-control" 
//           placeholder="Rs." 
//           aria-label="First name" 
//           name="B2_27"
//           value={inputValues.B2_27}
//           onChange={changeData}  
//           />
//           {/* <!--//AAAAAAAA --> */}
//         </div>
//       </div>
//     </div>
//     <div className="col-lg-1 border-start d-flex justify-content-center">
//       <div className="row g-3">
//         <div className="col">
//           <input type="number" 
//           className="form-control" 
//           placeholder="Rs." 
//           aria-label="First name" 
//           name="C2_27"  
//           value={inputValues.C2_27}
//           onChange={changeData}
//           />
//           {/* <!--//AAAAAAAA --> */}
//         </div>
//       </div>
//     </div>
//     <div className="col-lg-1 border-start d-flex justify-content-center">
//       <div className="row g-3">
//         <div className="col">
//           <input type="number" 
//           className="form-control" 
//           placeholder="Rs." aria-label="First name" 
//           name="D2_27"  
//           value={inputValues.D2_27}
//           onChange={changeData}
//           />
//           {/* <!--//AAAAAAAA --> */}
//         </div>
//       </div>
//     </div>
//     <div className="col-lg-1 border-start d-flex justify-content-center">
//       <div className="row g-3">
//         <div className="col">
//           <input type="number" 
//           className="form-control" 
//           placeholder="Rs." 
//           aria-label="First name" 
//           name="E2_27"  
//           value={inputValues.E2_27}
//           onChange={changeData} 
//           />
//           {/* <!--//AAAAAAAA --> */}
//         </div>
//       </div>
//     </div>
//     <div className="col-lg-1 border-start d-flex justify-content-center">
//       <div className="row g-3">
//         <div className="col">
//           <input type="number" 
//           className="form-control" 
//           placeholder="Rs." 
//           aria-label="First name" 
//           name="F2_27" 
//           value={inputValues.F2_27}
//           onChange={changeData}

//           />
//           {/* <!--//AAAAAAAA --> */}
//         </div>
//       </div>
//     </div>
//     <div className="col-lg-1 border-start d-flex justify-content-center">
//       <div className="row g-3">
//         <div className="col">
//           <input type="number" 
//           className="form-control" 
//           placeholder="Rs." 
//           aria-label="First name" 
//           name="G2_27"  
//           value={inputValues.G2_27}
//           onChange={changeData} 
//           />
//           {/* <!--//AAAAAAAA --> */}
//         </div>
//       </div>
//     </div>
//     <div className="col-lg-1 border-start d-flex justify-content-center">
//       <div className="row g-3">
//         <div className="col">
//           <input type="number" 
//           className="form-control" 
//           placeholder="Rs." 
//           aria-label="First name" 
//           name="H2_27"  
//           value={inputValues.H2_27}
//           onChange={changeData} 
//           />
//           {/* <!--//AAAAAAAA --> */}
//         </div>
//       </div>
//     </div>
//     <div className="col-lg-1 border-start d-flex justify-content-center">
//       <div className="row g-3">
//         <div className="col">
//           <input type="number" 
//           className="form-control" 
//           placeholder="Rs." 
//           aria-label="First name" 
//           name="I2_27"  
//           value={inputValues.I2_27}
//           onChange={changeData} 
//           />
//           {/* <!--//AAAAAAAA --> */}
//         </div>
//       </div>
//     </div>
//     {/* Add similar input fields for other years here */}
// </div>
// </div>

// <div className="container-fluid border mt-3">
// <div className="row">
//     <div className="col-lg-4 border-end d-flex justify-content-center">
//       <h6>Profit & Loss a/c
//        </h6>
//     </div>
//     <div className="col-lg-1 border-start d-flex justify-content-center">
//       <div className="row g-3">
//         <div className="col">
//           <input type="number" 
//           className="form-control" 
//           placeholder="Rs." 
//           aria-label="First name" 
//           name="B2_28"
//           value={inputValues.B2_28}
//           onChange={changeData}  
//           />
//           {/* <!--//AAAAAAAA --> */}
//         </div>
//       </div>
//     </div>
//     <div className="col-lg-1 border-start d-flex justify-content-center">
//       <div className="row g-3">
//         <div className="col">
//           <input type="number" 
//           className="form-control" 
//           placeholder="Rs." 
//           aria-label="First name" 
//           name="C2_28"  
//           value={inputValues.C2_28}
//           onChange={changeData}
//           />
//           {/* <!--//AAAAAAAA --> */}
//         </div>
//       </div>
//     </div>
//     <div className="col-lg-1 border-start d-flex justify-content-center">
//       <div className="row g-3">
//         <div className="col">
//           <input type="number" 
//           className="form-control" 
//           placeholder="Rs." aria-label="First name" 
//           name="D2_28"  
//           value={inputValues.D2_28}
//           onChange={changeData}
//           />
//           {/* <!--//AAAAAAAA --> */}
//         </div>
//       </div>
//     </div>
//     <div className="col-lg-1 border-start d-flex justify-content-center">
//       <div className="row g-3">
//         <div className="col">
//           <input type="number" 
//           className="form-control" 
//           placeholder="Rs." 
//           aria-label="First name" 
//           name="E2_28"  
//           value={inputValues.E2_28}
//           onChange={changeData} 
//           />
//           {/* <!--//AAAAAAAA --> */}
//         </div>
//       </div>
//     </div>
//     <div className="col-lg-1 border-start d-flex justify-content-center">
//       <div className="row g-3">
//         <div className="col">
//           <input type="number" 
//           className="form-control" 
//           placeholder="Rs." 
//           aria-label="First name" 
//           name="F2_28" 
//           value={inputValues.F2_28}
//           onChange={changeData}

//           />
//           {/* <!--//AAAAAAAA --> */}
//         </div>
//       </div>
//     </div>
//     <div className="col-lg-1 border-start d-flex justify-content-center">
//       <div className="row g-3">
//         <div className="col">
//           <input type="number" 
//           className="form-control" 
//           placeholder="Rs." 
//           aria-label="First name" 
//           name="G2_28"  
//           value={inputValues.G2_28}
//           onChange={changeData} 
//           />
//           {/* <!--//AAAAAAAA --> */}
//         </div>
//       </div>
//     </div>
//     <div className="col-lg-1 border-start d-flex justify-content-center">
//       <div className="row g-3">
//         <div className="col">
//           <input type="number" 
//           className="form-control" 
//           placeholder="Rs." 
//           aria-label="First name" 
//           name="H2_28"  
//           value={inputValues.H2_28}
//           onChange={changeData} 
//           />
//           {/* <!--//AAAAAAAA --> */}
//         </div>
//       </div>
//     </div>
//     <div className="col-lg-1 border-start d-flex justify-content-center">
//       <div className="row g-3">
//         <div className="col">
//           <input type="number" 
//           className="form-control" 
//           placeholder="Rs." 
//           aria-label="First name" 
//           name="I2_28"  
//           value={inputValues.I2_28}
//           onChange={changeData} 
//           />
//           {/* <!--//AAAAAAAA --> */}
//         </div>
//       </div>
//     </div>
//     {/* Add similar input fields for other years here */}
// </div>
// </div>

// <div className="container-fluid border mt-3">
// <div className="row">
//     <div className="col-lg-4 border-end d-flex justify-content-center">
//       <h6>Defered Revenue expenditure
//        </h6>
//     </div>
//     <div className="col-lg-1 border-start d-flex justify-content-center">
//       <div className="row g-3">
//         <div className="col">
//           <input type="number" 
//           className="form-control" 
//           placeholder="Rs." 
//           aria-label="First name" 
//           name="B2_29"
//           value={inputValues.B2_29}
//           onChange={changeData}  
//           />
//           {/* <!--//AAAAAAAA --> */}
//         </div>
//       </div>
//     </div>
//     <div className="col-lg-1 border-start d-flex justify-content-center">
//       <div className="row g-3">
//         <div className="col">
//           <input type="number" 
//           className="form-control" 
//           placeholder="Rs." 
//           aria-label="First name" 
//           name="C2_29"  
//           value={inputValues.C2_29}
//           onChange={changeData}
//           />
//           {/* <!--//AAAAAAAA --> */}
//         </div>
//       </div>
//     </div>
//     <div className="col-lg-1 border-start d-flex justify-content-center">
//       <div className="row g-3">
//         <div className="col">
//           <input type="number" 
//           className="form-control" 
//           placeholder="Rs." aria-label="First name" 
//           name="D2_29"  
//           value={inputValues.D2_29}
//           onChange={changeData}
//           />
//           {/* <!--//AAAAAAAA --> */}
//         </div>
//       </div>
//     </div>
//     <div className="col-lg-1 border-start d-flex justify-content-center">
//       <div className="row g-3">
//         <div className="col">
//           <input type="number" 
//           className="form-control" 
//           placeholder="Rs." 
//           aria-label="First name" 
//           name="E2_29"  
//           value={inputValues.E2_29}
//           onChange={changeData} 
//           />
//           {/* <!--//AAAAAAAA --> */}
//         </div>
//       </div>
//     </div>
//     <div className="col-lg-1 border-start d-flex justify-content-center">
//       <div className="row g-3">
//         <div className="col">
//           <input type="number" 
//           className="form-control" 
//           placeholder="Rs." 
//           aria-label="First name" 
//           name="F2_29" 
//           value={inputValues.F2_29}
//           onChange={changeData}

//           />
//           {/* <!--//AAAAAAAA --> */}
//         </div>
//       </div>
//     </div>
//     <div className="col-lg-1 border-start d-flex justify-content-center">
//       <div className="row g-3">
//         <div className="col">
//           <input type="number" 
//           className="form-control" 
//           placeholder="Rs." 
//           aria-label="First name" 
//           name="G2_29"  
//           value={inputValues.G2_29}
//           onChange={changeData} 
//           />
//           {/* <!--//AAAAAAAA --> */}
//         </div>
//       </div>
//     </div>
//     <div className="col-lg-1 border-start d-flex justify-content-center">
//       <div className="row g-3">
//         <div className="col">
//           <input type="number" 
//           className="form-control" 
//           placeholder="Rs." 
//           aria-label="First name" 
//           name="H2_29"  
//           value={inputValues.H2_29}
//           onChange={changeData} 
//           />
//           {/* <!--//AAAAAAAA --> */}
//         </div>
//       </div>
//     </div>
//     <div className="col-lg-1 border-start d-flex justify-content-center">
//       <div className="row g-3">
//         <div className="col">
//           <input type="number" 
//           className="form-control" 
//           placeholder="Rs." 
//           aria-label="First name" 
//           name="I2_29"  
//           value={inputValues.I2_29}
//           onChange={changeData} 
//           />
//           {/* <!--//AAAAAAAA --> */}
//         </div>
//       </div>
//     </div>
//     {/* Add similar input fields for other years here */}
// </div>
// </div>

//  <div className="container-fluid border mt-3 div_main4">
//       <div className="row" >
//         <div className="col-lg-4 border-end d-flex justify-content-center"style={{backgroundColor: "rgb(189, 254, 243)"}}>
//           <h5 style={{color:"red"}}> TOTAL IA</h5>
//         </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input 
//                style={{backgroundColor: "rgb(189, 254, 243)"}}
//                 type="text" 
//                 className="form-control" 
//                 aria-label="First name" 
//                 name="B2_30"
//                 value={inputValues.B2_30}
//                 onChange={changeData}  
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text"
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(189, 254, 243)"}}
//                 aria-label="First name" 
//                 name="C2_30"  
//                 value={inputValues.C2_30}
//                 onChange={changeData}
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input 
//                 style={{backgroundColor: "rgb(189, 254, 243)"}}
//                 type="text" 
//                 className="form-control" 
//                aria-label="First name" 
//                 name="D2_30"  
//                 value={inputValues.D2_30}
//                 onChange={changeData}
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(189, 254, 243)"}}
//                 aria-label="First name" 
//                 name="E2_30"  
//                 value={inputValues.E2_30}
//                 onChange={changeData} 
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(189, 254, 243)"}}
//                 aria-label="First name" 
//                 name="F2_30" 
//                 value={inputValues.F2_30}
//                 onChange={changeData}

//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(189, 254, 243)"}}
//                 aria-label="First name" 
//                 name="G2_30"  
//                 value={inputValues.G2_30}
//                 onChange={changeData} 
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(189, 254, 243)"}}
//                 aria-label="First name" 
//                 name="H2_30"  
//                 value={inputValues.H2_30}
//                 onChange={changeData} 
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(189, 254, 243)"}}
//                 aria-label="First name" 
//                 name="I2_30"  
//                 value={inputValues.I2_30}
//                 onChange={changeData} 
//                 />
//               </div>
//             </div>
//           </div>
//       </div>
//     </div>
//     <div className="container-fluid border mt-3 div_main4">
//       <div className="row" >
//         <div className="col-lg-4 border-end d-flex justify-content-center"style={{backgroundColor: "rgb(189, 254, 243)"}}>
//           <h5 style={{color:"red"}}><b>TOTAL ASSETS</b></h5>
//         </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input 
//                style={{backgroundColor: "rgb(189, 254, 243)"}}
//                 type="text" 
//                 className="form-control" 
//                 aria-label="First name" 
//                 name="B2_31"
//                 value={inputValues.B2_31}
//                 onChange={changeData}  
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text"
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(189, 254, 243)"}}
//                 aria-label="First name" 
//                 name="C2_31"  
//                 value={inputValues.C2_31}
//                 onChange={changeData}
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input 
//                 style={{backgroundColor: "rgb(189, 254, 243)"}}
//                 type="text" 
//                 className="form-control" 
//                aria-label="First name" 
//                 name="D2_30"  
//                 value={inputValues.D2_30}
//                 onChange={changeData}
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(189, 254, 243)"}}
//                 aria-label="First name" 
//                 name="E2_31"  
//                 value={inputValues.E2_31}
//                 onChange={changeData} 
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(189, 254, 243)"}}
//                 aria-label="First name" 
//                 name="F2_31" 
//                 value={inputValues.F2_31}
//                 onChange={changeData}

//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(189, 254, 243)"}}
//                 aria-label="First name" 
//                 name="G2_31"  
//                 value={inputValues.G2_31}
//                 onChange={changeData} 
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(189, 254, 243)"}}
//                 aria-label="First name" 
//                 name="H2_31"  
//                 value={inputValues.H2_31}
//                 onChange={changeData} 
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(189, 254, 243)"}}
//                 aria-label="First name" 
//                 name="I2_31"  
//                 value={inputValues.I2_31}
//                 onChange={changeData} 
//                 />
//               </div>
//             </div>
//           </div>
//       </div>
//     </div>

//     {/*---------------------------------------- INTANGIBLE ASSETS -------------------------------------*/}

//     <div className="container-fluid border mt-3">
//         <div className="row" style={{backgroundColor:"rgb(224, 231, 231)"}}>
//           <div className="col-lg-4 border-end d-flex justify-content-center">
//             <h5 ><b>LIABILITIES</b></h5>
//           </div>
//         </div>
//     </div>
//     <div className="container-fluid border mt-3">
//         <div className="row" style={{backgroundColor:"rgb(224, 231, 231)"}}>
//           <div className="col-lg-4 border-end d-flex justify-content-center">
//             <h6 style={{color:"blue"}}>CURRENT LIABILITIES</h6>
//           </div>
//         </div>
//     </div>
    
//     <div className="container-fluid border mt-3">
//       <div className="row">
//           <div className="col-lg-4 border-end d-flex justify-content-center">
//             <h6>WC Borrowings From IOB
//              </h6>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs." 
//                 aria-label="First name" 
//                 name="B2_34"  
//                 value={inputValues.B2_34}
//                 onChange={changeData}
//                 />
                
//                 {/* <!--//AAAAAAAA --> */}
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs." 
//                 aria-label="First name" 
//                 name="C2_34"
//                 value={inputValues.C2_34}
//                 onChange={changeData}  />
//                 {/* <!--//AAAAAAAA --> */}
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs." 
//                 aria-label="First name" 
//                 name="D2_34"  
//                 value={inputValues.D2_34}
//                 onChange={changeData} 
//                 />
//                 {/* <!--//AAAAAAAA --> */}
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs." 
//                 aria-label="First name" 
//                 name="E2_34"  
//                 value={inputValues.E2_34}
//                 onChange={changeData}  
//                 />
//                 {/* <!--//AAAAAAAA --> */}
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs." 
//                 aria-label="First name" 
//                 name="F2_34" 
//                 value={inputValues.F2_34}
//                 onChange={changeData} 
//                 />
//                 {/* <!--//AAAAAAAA --> */}
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs." 
//                 aria-label="First name" 
//                 name="G2_34"  
//                 value={inputValues.G2_34}
//                 onChange={changeData} 
//                 />
//                 {/* <!--//AAAAAAAA --> */}
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs." 
//                 aria-label="First name" 
//                 name="H2_34"  
//                 value={inputValues.H2_34}
//                 onChange={changeData} 
//                 />
//                 {/* <!--//AAAAAAAA --> */}
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs." 
//                 aria-label="First name" 
//                 name="I2_34"  
//                 value={inputValues.I2_34}
//                 onChange={changeData} 
//                 />
//                 {/* <!--//AAAAAAAA --> */}
//               </div>
//             </div>
//           </div>
//           {/* Add similar input fields for other years here */}
//       </div>
//     </div>
//     <div className="container-fluid border mt-3">
//       <div className="row">
//           <div className="col-lg-4 border-end d-flex justify-content-center">
//             <h6>WC From Banks/Institution
//              </h6>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs." 
//                 aria-label="First name" 
//                 name="B2_35"
//                 value={inputValues.B2_35}
//                 onChange={changeData}  
//                 />
//                 {/* <!--//AAAAAAAA --> */}
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs." 
//                 aria-label="First name" 
//                 name="C2_35"  
//                 value={inputValues.C2_35}
//                 onChange={changeData}
//                 />
//                 {/* <!--//AAAAAAAA --> */}
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs." aria-label="First name" 
//                 name="D2_35"  
//                 value={inputValues.D2_35}
//                 onChange={changeData}
//                 />
//                 {/* <!--//AAAAAAAA --> */}
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs." 
//                 aria-label="First name" 
//                 name="E2_35"  
//                 value={inputValues.E2_35}
//                 onChange={changeData} 
//                 />
//                 {/* <!--//AAAAAAAA --> */}
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs." 
//                 aria-label="First name" 
//                 name="F2_35" 
//                 value={inputValues.F2_35}
//                 onChange={changeData}

//                 />
//                 {/* <!--//AAAAAAAA --> */}
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs." 
//                 aria-label="First name" 
//                 name="G2_35"  
//                 value={inputValues.G2_35}
//                 onChange={changeData} 
//                 />
//                 {/* <!--//AAAAAAAA --> */}
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs." 
//                 aria-label="First name" 
//                 name="H2_35"  
//                 value={inputValues.H2_35}
//                 onChange={changeData} 
//                 />
//                 {/* <!--//AAAAAAAA --> */}
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs." 
//                 aria-label="First name" 
//                 name="I2_35"  
//                 value={inputValues.I2_35}
//                 onChange={changeData} 
//                 />
//                 {/* <!--//AAAAAAAA --> */}
//               </div>
//             </div>
//           </div>
//       </div>
//     </div>
    
// <div className="container-fluid border mt-3">
// <div className="row">
//     <div className="col-lg-4 border-end d-flex justify-content-center">
//       <h6>Sundry Creditors-Trade
//        </h6>
//     </div>
//     <div className="col-lg-1 border-start d-flex justify-content-center">
//       <div className="row g-3">
//         <div className="col">
//           <input type="number" 
//           className="form-control" 
//           placeholder="Rs." 
//           aria-label="First name" 
//           name="B2_36"
//           value={inputValues.B2_36}
//           onChange={changeData}  
//           />
//           {/* <!--//AAAAAAAA --> */}
//         </div>
//       </div>
//     </div>
//     <div className="col-lg-1 border-start d-flex justify-content-center">
//       <div className="row g-3">
//         <div className="col">
//           <input type="number" 
//           className="form-control" 
//           placeholder="Rs." 
//           aria-label="First name" 
//           name="C2_36"  
//           value={inputValues.C2_36}
//           onChange={changeData}
//           />
//           {/* <!--//AAAAAAAA --> */}
//         </div>
//       </div>
//     </div>
//     <div className="col-lg-1 border-start d-flex justify-content-center">
//       <div className="row g-3">
//         <div className="col">
//           <input type="number" 
//           className="form-control" 
//           placeholder="Rs." aria-label="First name" 
//           name="D2_36"  
//           value={inputValues.D2_36}
//           onChange={changeData}
//           />
//           {/* <!--//AAAAAAAA --> */}
//         </div>
//       </div>
//     </div>
//     <div className="col-lg-1 border-start d-flex justify-content-center">
//       <div className="row g-3">
//         <div className="col">
//           <input type="number" 
//           className="form-control" 
//           placeholder="Rs." 
//           aria-label="First name" 
//           name="E2_36"  
//           value={inputValues.E2_36}
//           onChange={changeData} 
//           />
//           {/* <!--//AAAAAAAA --> */}
//         </div>
//       </div>
//     </div>
//     <div className="col-lg-1 border-start d-flex justify-content-center">
//       <div className="row g-3">
//         <div className="col">
//           <input type="number" 
//           className="form-control" 
//           placeholder="Rs." 
//           aria-label="First name" 
//           name="F2_36" 
//           value={inputValues.F2_36}
//           onChange={changeData}

//           />
//           {/* <!--//AAAAAAAA --> */}
//         </div>
//       </div>
//     </div>
//     <div className="col-lg-1 border-start d-flex justify-content-center">
//       <div className="row g-3">
//         <div className="col">
//           <input type="number" 
//           className="form-control" 
//           placeholder="Rs." 
//           aria-label="First name" 
//           name="G2_36"  
//           value={inputValues.G2_36}
//           onChange={changeData} 
//           />
//           {/* <!--//AAAAAAAA --> */}
//         </div>
//       </div>
//     </div>
//     <div className="col-lg-1 border-start d-flex justify-content-center">
//       <div className="row g-3">
//         <div className="col">
//           <input type="number" 
//           className="form-control" 
//           placeholder="Rs." 
//           aria-label="First name" 
//           name="H2_36"  
//           value={inputValues.H2_36}
//           onChange={changeData} 
//           />
//           {/* <!--//AAAAAAAA --> */}
//         </div>
//       </div>
//     </div>
//     <div className="col-lg-1 border-start d-flex justify-content-center">
//       <div className="row g-3">
//         <div className="col">
//           <input type="number" 
//           className="form-control" 
//           placeholder="Rs." 
//           aria-label="First name" 
//           name="I2_36"  
//           value={inputValues.I2_36}
//           onChange={changeData} 
//           />
//           {/* <!--//AAAAAAAA --> */}
//         </div>
//       </div>
//     </div>
//     {/* Add similar input fields for other years here */}
// </div>
// </div>
//     <div className="container-fluid border mt-3 div_main4">
//       <div className="row" >
//         <div className="col-lg-4 border-end d-flex justify-content-center"style={{backgroundColor: "rgb(159, 252, 204)"}}>
//           <h5>Other Current Liabilities</h5>
//         </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input 
//                 style={{backgroundColor: "rgb(159, 252, 204)"}}
//                 type="text" 
//                 className="form-control" 
//                 aria-label="First name" 
//                 name="B2_37"
//                 value={inputValues.B2_37}
//                 onChange={changeData}  
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text"
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(159, 252, 204)"}}
//                 aria-label="First name" 
//                 name="C2_37"  
//                 value={inputValues.C2_37}
//                 onChange={changeData}
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input 
//                 style={{backgroundColor: "rgb(159, 252, 204)"}}
//                 type="text" 
//                 className="form-control" 
//                aria-label="First name" 
//                 name="D2_37"  
//                 value={inputValues.D2_37}
//                 onChange={changeData}
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(159, 252, 204)"}}
//                 aria-label="First name" 
//                 name="E2_37"  
//                 value={inputValues.E2_37}
//                 onChange={changeData} 
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(159, 252, 204)"}}
//                 aria-label="First name" 
//                 name="F2_37" 
//                 value={inputValues.F2_37}
//                 onChange={changeData}

//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(159, 252, 204)"}}
//                 aria-label="First name" 
//                 name="G2_37"  
//                 value={inputValues.G2_37}
//                 onChange={changeData} 
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(159, 252, 204)"}}
//                 aria-label="First name" 
//                 name="H2_37"  
//                 value={inputValues.H2_37}
//                 onChange={changeData} 
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(159, 252, 204)"}}
//                 aria-label="First name" 
//                 name="I2_37"  
//                 value={inputValues.I2_37}
//                 onChange={changeData} 
//                 />
//               </div>
//             </div>
//           </div>
//       </div>
//     </div>
//     <div className="container-fluid border mt-3 div_main4">
// <div className="row" >
//   <div className="col-lg-4 border-end d-flex justify-content-center"style={{backgroundColor: "rgb(189, 254, 243)"}}>
//     <h5><b>TOTAL CURRENT LIABILITIES</b></h5>
//   </div>
//     <div className="col-lg-1 border-start d-flex justify-content-center">
//       <div className="row g-3">
//         <div className="col">
//           <input 
//           style={{backgroundColor: "rgb(189, 254, 243)"}}
//           type="text" 
//           className="form-control" 
//           aria-label="First name" 
//           name="B2_38"
//           value={inputValues.B2_38}
//           onChange={changeData}  
//           />

//         </div>
//       </div>
//     </div>
//     <div className="col-lg-1 border-start d-flex justify-content-center">
//       <div className="row g-3">
//         <div className="col">
//           <input type="text"
//           className="form-control" 
//           style={{backgroundColor: "rgb(189, 254, 243)"}}
//           aria-label="First name" 
//           name="C2_38"  
//           value={inputValues.C2_38}
//           onChange={changeData}
//           />

//         </div>
//       </div>
//     </div>
//     <div className="col-lg-1 border-start d-flex justify-content-center">
//       <div className="row g-3">
//         <div className="col">
//           <input 
//           style={{backgroundColor: "rgb(189, 254, 243)"}}
//           type="text" 
//           className="form-control" 
//          aria-label="First name" 
//           name="D2_38"  
//           value={inputValues.D2_38}
//           onChange={changeData}
//           />

//         </div>
//       </div>
//     </div>
//     <div className="col-lg-1 border-start d-flex justify-content-center">
//       <div className="row g-3">
//         <div className="col">
//           <input type="text" 
//           className="form-control" 
//           style={{backgroundColor: "rgb(189, 254, 243)"}}
//           aria-label="First name" 
//           name="E2_38"  
//           value={inputValues.E2_38}
//           onChange={changeData} 
//           />

//         </div>
//       </div>
//     </div>
//     <div className="col-lg-1 border-start d-flex justify-content-center">
//       <div className="row g-3">
//         <div className="col">
//           <input type="text" 
//           className="form-control" 
//           style={{backgroundColor: "rgb(189, 254, 243)"}}
//           aria-label="First name" 
//           name="F2_38" 
//           value={inputValues.F2_38}
//           onChange={changeData}

//           />

//         </div>
//       </div>
//     </div>
//     <div className="col-lg-1 border-start d-flex justify-content-center">
//       <div className="row g-3">
//         <div className="col">
//           <input type="text" 
//           className="form-control" 
//           style={{backgroundColor: "rgb(189, 254, 243)"}}
//           aria-label="First name" 
//           name="G2_38"  
//           value={inputValues.G2_38}
//           onChange={changeData} 
//           />

//         </div>
//       </div>
//     </div>
//     <div className="col-lg-1 border-start d-flex justify-content-center">
//       <div className="row g-3">
//         <div className="col">
//           <input type="text" 
//           className="form-control" 
//           style={{backgroundColor: "rgb(189, 254, 243)"}}
//           aria-label="First name" 
//           name="H2_38"  
//           value={inputValues.H2_38}
//           onChange={changeData} 
//           />
//         </div>
//       </div>
//     </div>
//     <div className="col-lg-1 border-start d-flex justify-content-center">
//       <div className="row g-3">
//         <div className="col">
//           <input type="text" 
//           className="form-control" 
//           style={{backgroundColor: "rgb(189, 254, 243)"}}
//           aria-label="First name" 
//           name="I2_38"  
//           value={inputValues.I2_38}
//           onChange={changeData} 
//           />
//         </div>
//       </div>
//     </div>
// </div>
// </div>

//      {/* ------------------------------- OTHER INCOME / EXPENCE----------------------------------------------- */}


//      <div className="container-fluid border mt-3">
//         <div className="row" style={{backgroundColor:"rgb(224, 231, 231)"}}>
//           <div className="col-lg-4 border-end d-flex justify-content-center">
//             <h5 style={{color:"blue"}}>DEFFERRED LIABILITIES</h5>
//           </div>
//         </div>
//     </div>
//     <div className="container-fluid border mt-3">
//       <div className="row">
//           <div className="col-lg-4 border-end d-flex justify-content-center">
//             <h6>TERM LOAN IOB
//              </h6>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs." 
//                 aria-label="First name" 
//                 name="B2_40"  
//                 value={inputValues.B2_40}
//                 onChange={changeData}
//                 />
                
//                 {/* <!--//AAAAAAAA --> */}
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs." 
//                 aria-label="First name" 
//                 name="C2_40"
//                 value={inputValues.C2_40}
//                 onChange={changeData}  />
//                 {/* <!--//AAAAAAAA --> */}
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs." 
//                 aria-label="First name" 
//                 name="D2_40"  
//                 value={inputValues.D2_40}
//                 onChange={changeData} 
//                 />
//                 {/* <!--//AAAAAAAA --> */}
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs." 
//                 aria-label="First name" 
//                 name="E2_40"  
//                 value={inputValues.E2_40}
//                 onChange={changeData}  
//                 />
//                 {/* <!--//AAAAAAAA --> */}
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs." 
//                 aria-label="First name" 
//                 name="F2_40" 
//                 value={inputValues.F2_40}
//                 onChange={changeData} 
//                 />
//                 {/* <!--//AAAAAAAA --> */}
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs." 
//                 aria-label="First name" 
//                 name="G2_40"  
//                 value={inputValues.G2_40}
//                 onChange={changeData} 
//                 />
//                 {/* <!--//AAAAAAAA --> */}
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs." 
//                 aria-label="First name" 
//                 name="H2_40"  
//                 value={inputValues.H2_40}
//                 onChange={changeData} 
//                 />
//                 {/* <!--//AAAAAAAA --> */}
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs." 
//                 aria-label="First name" 
//                 name="I2_40"  
//                 value={inputValues.I2_40}
//                 onChange={changeData} 
//                 />
//                 {/* <!--//AAAAAAAA --> */}
//               </div>
//             </div>
//           </div>
//           {/* Add similar input fields for other years here */}
//       </div>
//     </div>
//     <div className="container-fluid border mt-3">
//       <div className="row">
//           <div className="col-lg-4 border-end d-flex justify-content-center">
//             <h6>Term Loan Other Banks
//              </h6>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs." 
//                 aria-label="First name" 
//                 name="B2_41"
//                 value={inputValues.B2_41}
//                 onChange={changeData}  
//                 />
//                 {/* <!--//AAAAAAAA --> */}
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs." 
//                 aria-label="First name" 
//                 name="C2_41"  
//                 value={inputValues.C2_41}
//                 onChange={changeData}
//                 />
//                 {/* <!--//AAAAAAAA --> */}
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs." aria-label="First name" 
//                 name="D2_41"  
//                 value={inputValues.D2_41}
//                 onChange={changeData}
//                 />
//                 {/* <!--//AAAAAAAA --> */}
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs." 
//                 aria-label="First name" 
//                 name="E2_41"  
//                 value={inputValues.E2_41}
//                 onChange={changeData} 
//                 />
//                 {/* <!--//AAAAAAAA --> */}
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs." 
//                 aria-label="First name" 
//                 name="F2_41" 
//                 value={inputValues.F2_41}
//                 onChange={changeData}

//                 />
//                 {/* <!--//AAAAAAAA --> */}
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs." 
//                 aria-label="First name" 
//                 name="G2_41"  
//                 value={inputValues.G2_41}
//                 onChange={changeData} 
//                 />
//                 {/* <!--//AAAAAAAA --> */}
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs." 
//                 aria-label="First name" 
//                 name="H2_41"  
//                 value={inputValues.H2_41}
//                 onChange={changeData} 
//                 />
//                 {/* <!--//AAAAAAAA --> */}
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs." 
//                 aria-label="First name" 
//                 name="I2_41"  
//                 value={inputValues.I2_41}
//                 onChange={changeData} 
//                 />
//                 {/* <!--//AAAAAAAA --> */}
//               </div>
//             </div>
//           </div>
          
//       </div>
//     </div>
    
// <div className="container-fluid border mt-3">
// <div className="row">
//     <div className="col-lg-4 border-end d-flex justify-content-center">
//       <h6>Term Loan Institution
//        </h6>
//     </div>
//     <div className="col-lg-1 border-start d-flex justify-content-center">
//       <div className="row g-3">
//         <div className="col">
//           <input type="number" 
//           className="form-control" 
//           placeholder="Rs." 
//           aria-label="First name" 
//           name="B2_42"
//           value={inputValues.B2_42}
//           onChange={changeData}  
//           />
//           {/* <!--//AAAAAAAA --> */}
//         </div>
//       </div>
//     </div>
//     <div className="col-lg-1 border-start d-flex justify-content-center">
//       <div className="row g-3">
//         <div className="col">
//           <input type="number" 
//           className="form-control" 
//           placeholder="Rs." 
//           aria-label="First name" 
//           name="C2_42"  
//           value={inputValues.C2_42}
//           onChange={changeData}
//           />
//           {/* <!--//AAAAAAAA --> */}
//         </div>
//       </div>
//     </div>
//     <div className="col-lg-1 border-start d-flex justify-content-center">
//       <div className="row g-3">
//         <div className="col">
//           <input type="number" 
//           className="form-control" 
//           placeholder="Rs." aria-label="First name" 
//           name="D2_42"  
//           value={inputValues.D2_42}
//           onChange={changeData}
//           />
//           {/* <!--//AAAAAAAA --> */}
//         </div>
//       </div>
//     </div>
//     <div className="col-lg-1 border-start d-flex justify-content-center">
//       <div className="row g-3">
//         <div className="col">
//           <input type="number" 
//           className="form-control" 
//           placeholder="Rs." 
//           aria-label="First name" 
//           name="E2_42"  
//           value={inputValues.E2_42}
//           onChange={changeData} 
//           />
//           {/* <!--//AAAAAAAA --> */}
//         </div>
//       </div>
//     </div>
//     <div className="col-lg-1 border-start d-flex justify-content-center">
//       <div className="row g-3">
//         <div className="col">
//           <input type="number" 
//           className="form-control" 
//           placeholder="Rs." 
//           aria-label="First name" 
//           name="F2_42" 
//           value={inputValues.F2_42}
//           onChange={changeData}

//           />
//           {/* <!--//AAAAAAAA --> */}
//         </div>
//       </div>
//     </div>
//     <div className="col-lg-1 border-start d-flex justify-content-center">
//       <div className="row g-3">
//         <div className="col">
//           <input type="number" 
//           className="form-control" 
//           placeholder="Rs." 
//           aria-label="First name" 
//           name="G2_42"  
//           value={inputValues.G2_42}
//           onChange={changeData} 
//           />
//           {/* <!--//AAAAAAAA --> */}
//         </div>
//       </div>
//     </div>
//     <div className="col-lg-1 border-start d-flex justify-content-center">
//       <div className="row g-3">
//         <div className="col">
//           <input type="number" 
//           className="form-control" 
//           placeholder="Rs." 
//           aria-label="First name" 
//           name="H2_42"  
//           value={inputValues.H2_42}
//           onChange={changeData} 
//           />
//           {/* <!--//AAAAAAAA --> */}
//         </div>
//       </div>
//     </div>
//     <div className="col-lg-1 border-start d-flex justify-content-center">
//       <div className="row g-3">
//         <div className="col">
//           <input type="number" 
//           className="form-control" 
//           placeholder="Rs." 
//           aria-label="First name" 
//           name="I2_42"  
//           value={inputValues.I2_42}
//           onChange={changeData} 
//           />
//           {/* <!--//AAAAAAAA --> */}
//         </div>
//       </div>
//     </div>
//     {/* Add similar input fields for other years here */}
// </div>
// </div>


    
//     {/*-------------------------------------- LINE ( 37 - 39 ) -------------------------------------------------*/}


//     <div className="container-fluid border mt-3 div_main4">
//       <div className="row" >
//         <div className="col-lg-4 border-end d-flex justify-content-center"style={{backgroundColor: "rgb(188, 245, 185"}}>
//           <h5>Other Long Term-Liabilities</h5>
//         </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input 
//                 style={{backgroundColor: "rgb(188, 245, 185"}}
//                 type="text" 
//                 className="form-control" 
//                 aria-label="First name" 
//                 name="B2_43"
//                 value={inputValues.B2_43}
//                 onChange={changeData}  
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text"
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(188, 245, 185"}}
//                 aria-label="First name" 
//                 name="C2_43"  
//                 value={inputValues.C2_43}
//                 onChange={changeData}
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input 
//                 style={{backgroundColor: "rgb(188, 245, 185"}}
//                 type="text" 
//                 className="form-control" 
//                aria-label="First name" 
//                 name="D2_43"  
//                 value={inputValues.D2_43}
//                 onChange={changeData}
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(188, 245, 185"}}
//                 aria-label="First name" 
//                 name="E2_43"  
//                 value={inputValues.E2_43}
//                 onChange={changeData} 
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(188, 245, 185"}}
//                 aria-label="First name" 
//                 name="F2_43" 
//                 value={inputValues.F2_43}
//                 onChange={changeData}

//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(188, 245, 185"}}
//                 aria-label="First name" 
//                 name="G2_43"  
//                 value={inputValues.G2_43}
//                 onChange={changeData} 
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(188, 245, 185"}}
//                 aria-label="First name" 
//                 name="H2_43"  
//                 value={inputValues.H2_43}
//                 onChange={changeData} 
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(188, 245, 185"}}
//                 aria-label="First name" 
//                 name="I2_43"  
//                 value={inputValues.I2_43}
//                 onChange={changeData} 
//                 />
//               </div>
//             </div>
//           </div>
//       </div>
//     </div>

//     <div className="container-fluid border mt-3 div_main4">
//       <div className="row" >
//         <div className="col-lg-4 border-end d-flex justify-content-center"style={{backgroundColor: "rgb(189, 254, 243)"}}>
//           <h5>LONG TERM LIABILITIES</h5>
//         </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input 
//                 style={{backgroundColor: "rgb(189, 254, 243)"}}
//                 type="text" 
//                 className="form-control" 
//                 aria-label="First name" 
//                 name="B2_44"
//                 value={inputValues.B2_44}
//                 onChange={changeData}  
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text"
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(189, 254, 243)"}}
//                 aria-label="First name" 
//                 name="C2_44"  
//                 value={inputValues.C2_44}
//                 onChange={changeData}
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input 
//                 style={{backgroundColor: "rgb(189, 254, 243)"}}
//                 type="text" 
//                 className="form-control" 
//                aria-label="First name" 
//                 name="D2_44"  
//                 value={inputValues.D2_44}
//                 onChange={changeData}
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(189, 254, 243)"}}
//                 aria-label="First name" 
//                 name="E2_44"  
//                 value={inputValues.E2_44}
//                 onChange={changeData} 
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(189, 254, 243)"}}
//                 aria-label="First name" 
//                 name="F2_44" 
//                 value={inputValues.F2_44}
//                 onChange={changeData}

//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(189, 254, 243)"}}
//                 aria-label="First name" 
//                 name="G2_44"  
//                 value={inputValues.G2_44}
//                 onChange={changeData} 
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(189, 254, 243)"}}
//                 aria-label="First name" 
//                 name="H2_44"  
//                 value={inputValues.H2_44}
//                 onChange={changeData} 
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(189, 254, 243)"}}
//                 aria-label="First name" 
//                 name="I2_44"  
//                 value={inputValues.I2_44}
//                 onChange={changeData} 
//                 />
//               </div>
//             </div>
//           </div>
//       </div>
//     </div>

//     <div className="container-fluid border mt-3 div_main4">
//       <div className="row" >
//         <div className="col-lg-4 border-end d-flex justify-content-center"style={{backgroundColor: "rgb(189, 254, 243)"}}>
//           <h5>TOTAL OUTSIDE LIABILITIES</h5>
//         </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input 
//                 style={{backgroundColor: "rgb(189, 254, 243)"}}
//                 type="text" 
//                 className="form-control" 
//                 aria-label="First name" 
//                 name="B2_45"
//                 value={inputValues.B2_45}
//                 onChange={changeData}  
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text"
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(189, 254, 243)"}}
//                 aria-label="First name" 
//                 name="C2_45"  
//                 value={inputValues.C2_45}
//                 onChange={changeData}
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input 
//                 style={{backgroundColor: "rgb(189, 254, 243)"}}
//                 type="text" 
//                 className="form-control" 
//                aria-label="First name" 
//                 name="D2_45"  
//                 value={inputValues.D2_45}
//                 onChange={changeData}
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                style={{backgroundColor: "rgb(189, 254, 243)"}}
//                 aria-label="First name" 
//                 name="E2_45"  
//                 value={inputValues.E2_45}
//                 onChange={changeData} 
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(189, 254, 243)"}}
//                 aria-label="First name" 
//                 name="F2_45" 
//                 value={inputValues.F2_45}
//                 onChange={changeData}

//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(189, 254, 243)"}}
//                 aria-label="First name" 
//                 name="G2_45"  
//                 value={inputValues.G2_45}
//                 onChange={changeData} 
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(189, 254, 243)"}}
//                 aria-label="First name" 
//                 name="H2_45"  
//                 value={inputValues.H2_45}
//                 onChange={changeData} 
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(189, 254, 243)"}}
//                 aria-label="First name" 
//                 name="I2_45"  
//                 value={inputValues.I2_45}
//                 onChange={changeData} 
//                 />
//               </div>
//             </div>
//           </div>
//       </div>
//     </div>

//     {/*---------------------------------------- INTANGIBLE ASSETS -------------------------------------*/}

// <div className="container-fluid border mt-3">
//         <div className="row" style={{backgroundColor:"rgb(224, 231, 231)"}}>
//           <div className="col-lg-4 border-end d-flex justify-content-center">
//             <h5 style={{color:"blue"}}>CAPITAL & SURPLUS</h5>
//           </div>
//         </div>
//     </div>
//     <div className="container-fluid border mt-3">
//       <div className="row">
//           <div className="col-lg-4 border-end d-flex justify-content-center">
//             <h6>Paid Up Capital
//              </h6>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs." 
//                 aria-label="First name" 
//                 name="B2_47"
//                 value={inputValues.B2_47}
//                 onChange={changeData}  
//                 />
//                 {/* <!--//AAAAAAAA --> */}
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs." 
//                 aria-label="First name" 
//                 name="C2_47"  
//                 value={inputValues.C2_47}
//                 onChange={changeData}
//                 />
//                 {/* <!--//AAAAAAAA --> */}
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs." aria-label="First name" 
//                 name="D2_47"  
//                 value={inputValues.D2_47}
//                 onChange={changeData}
//                 />
//                 {/* <!--//AAAAAAAA --> */}
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs." 
//                 aria-label="First name" 
//                 name="E2_47"  
//                 value={inputValues.E2_47}
//                 onChange={changeData} 
//                 />
//                 {/* <!--//AAAAAAAA --> */}
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs." 
//                 aria-label="First name" 
//                 name="F2_47" 
//                 value={inputValues.F2_47}
//                 onChange={changeData}

//                 />
//                 {/* <!--//AAAAAAAA --> */}
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs." 
//                 aria-label="First name" 
//                 name="G2_47"  
//                 value={inputValues.G2_47}
//                 onChange={changeData} 
//                 />
//                 {/* <!--//AAAAAAAA --> */}
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs." 
//                 aria-label="First name" 
//                 name="H2_47"  
//                 value={inputValues.H2_47}
//                 onChange={changeData} 
//                 />
//                 {/* <!--//AAAAAAAA --> */}
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs." 
//                 aria-label="First name" 
//                 name="I2_47"  
//                 value={inputValues.I2_47}
//                 onChange={changeData} 
//                 />
//                 {/* <!--//AAAAAAAA --> */}
//               </div>
//             </div>
//           </div>  
//       </div>
//     </div>
//     <div className="container-fluid border mt-3">
//       <div className="row">
//           <div className="col-lg-4 border-end d-flex justify-content-center">
//             <h6>Reserves and Surplus
//              </h6>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs." 
//                 aria-label="First name" 
//                 name="B2_48"
//                 value={inputValues.B2_48}
//                 onChange={changeData}  
//                 />
//                 {/* <!--//AAAAAAAA --> */}
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs." 
//                 aria-label="First name" 
//                 name="C2_48"  
//                 value={inputValues.C2_48}
//                 onChange={changeData}
//                 />
//                 {/* <!--//AAAAAAAA --> */}
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs." aria-label="First name" 
//                 name="D2_48"  
//                 value={inputValues.D2_48}
//                 onChange={changeData}
//                 />
//                 {/* <!--//AAAAAAAA --> */}
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs." 
//                 aria-label="First name" 
//                 name="E2_48"  
//                 value={inputValues.E2_48}
//                 onChange={changeData} 
//                 />
//                 {/* <!--//AAAAAAAA --> */}
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs." 
//                 aria-label="First name" 
//                 name="F2_48" 
//                 value={inputValues.F2_48}
//                 onChange={changeData}

//                 />
//                 {/* <!--//AAAAAAAA --> */}
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs." 
//                 aria-label="First name" 
//                 name="G2_48"  
//                 value={inputValues.G2_48}
//                 onChange={changeData} 
//                 />
//                 {/* <!--//AAAAAAAA --> */}
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs." 
//                 aria-label="First name" 
//                 name="H2_48"  
//                 value={inputValues.H2_48}
//                 onChange={changeData} 
//                 />
//                 {/* <!--//AAAAAAAA --> */}
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs." 
//                 aria-label="First name" 
//                 name="I2_48"  
//                 value={inputValues.I2_48}
//                 onChange={changeData} 
//                 />
//                 {/* <!--//AAAAAAAA --> */}
//               </div>
//             </div>
//           </div>  
//       </div>
//     </div>
//     <div className="container-fluid border mt-3">
//       <div className="row">
//           <div className="col-lg-4 border-end d-flex justify-content-center">
//             <h6>Profit & Loss a/c
//              </h6>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs." 
//                 aria-label="First name" 
//                 name="B2_49"
//                 value={inputValues.B2_49}
//                 onChange={changeData}  
//                 />
//                 {/* <!--//AAAAAAAA --> */}
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs." 
//                 aria-label="First name" 
//                 name="C2_49"  
//                 value={inputValues.C2_49}
//                 onChange={changeData}
//                 />
//                 {/* <!--//AAAAAAAA --> */}
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs." aria-label="First name" 
//                 name="D2_49"  
//                 value={inputValues.D2_49}
//                 onChange={changeData}
//                 />
//                 {/* <!--//AAAAAAAA --> */}
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs." 
//                 aria-label="First name" 
//                 name="E2_49"  
//                 value={inputValues.E2_49}
//                 onChange={changeData} 
//                 />
//                 {/* <!--//AAAAAAAA --> */}
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs." 
//                 aria-label="First name" 
//                 name="F2_49" 
//                 value={inputValues.F2_49}
//                 onChange={changeData}

//                 />
//                 {/* <!--//AAAAAAAA --> */}
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs." 
//                 aria-label="First name" 
//                 name="G2_49"  
//                 value={inputValues.G2_49}
//                 onChange={changeData} 
//                 />
//                 {/* <!--//AAAAAAAA --> */}
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs." 
//                 aria-label="First name" 
//                 name="H2_49"  
//                 value={inputValues.H2_49}
//                 onChange={changeData} 
//                 />
//                 {/* <!--//AAAAAAAA --> */}
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="number" 
//                 className="form-control" 
//                 placeholder="Rs." 
//                 aria-label="First name" 
//                 name="I2_49"  
//                 value={inputValues.I2_49}
//                 onChange={changeData} 
//                 />
//                 {/* <!--//AAAAAAAA --> */}
//               </div>
//             </div>
//           </div>  
//       </div>
//     </div>
//     <div className="container-fluid border mt-3 div_main4">
//       <div className="row" >
//         <div className="col-lg-4 border-end d-flex justify-content-center"style={{backgroundColor: "rgb(238, 193, 255)"}}>
//           <h5>NET WORTH</h5>
//         </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input 
//                 style={{backgroundColor: "rgb(238, 193, 255)"}}
//                 type="text" 
//                 className="form-control" 
//                 aria-label="First name" 
//                 name="B2_50"
//                 value={inputValues.B2_50}
//                 onChange={changeData}  
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text"
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(238, 193, 255)"}}
//                 aria-label="First name" 
//                 name="C2_50"  
//                 value={inputValues.C2_50}
//                 onChange={changeData}
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input 
//                 style={{backgroundColor: "rgb(238, 193, 255)"}}
//                 type="text" 
//                 className="form-control" 
//                aria-label="First name" 
//                 name="D2_50"  
//                 value={inputValues.D2_50}
//                 onChange={changeData}
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(238, 193, 255)"}}
//                 aria-label="First name" 
//                 name="E2_50"  
//                 value={inputValues.E2_50}
//                 onChange={changeData} 
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(238, 193, 255)"}}
//                 aria-label="First name" 
//                 name="F2_50" 
//                 value={inputValues.F2_50}
//                 onChange={changeData}

//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(238, 193, 255)"}}
//                 aria-label="First name" 
//                 name="G2_50"  
//                 value={inputValues.G2_50}
//                 onChange={changeData} 
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(238, 193, 255)"}}
//                 aria-label="First name" 
//                 name="H2_50"  
//                 value={inputValues.H2_50}
//                 onChange={changeData} 
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(238, 193, 255)"}}
//                 aria-label="First name" 
//                 name="I2_50"  
//                 value={inputValues.I2_50}
//                 onChange={changeData} 
//                 />
//               </div>
//             </div>
//           </div>
//       </div>
//     </div>
//     <div className="container-fluid border mt-3 div_main4">
//       <div className="row" >
//         <div className="col-lg-4 border-end d-flex justify-content-center"style={{backgroundColor: "rgb(247, 197, 237)"}}>
//           <h5><b>TOTAL LIABILITIES</b></h5>
//         </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input 
//                 style={{backgroundColor: "rgb(247, 197, 237)"}}
//                 type="text" 
//                 className="form-control" 
//                 aria-label="First name" 
//                 name="B2_51"
//                 value={inputValues.B2_51}
//                 onChange={changeData}  
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text"
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(247, 197, 237)"}}
//                 aria-label="First name" 
//                 name="C2_51"  
//                 value={inputValues.C2_51}
//                 onChange={changeData}
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input 
//                 style={{backgroundColor: "rgb(247, 197, 237)"}}
//                 type="text" 
//                 className="form-control" 
//                aria-label="First name" 
//                 name="D2_51"  
//                 value={inputValues.D2_51}
//                 onChange={changeData}
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(247, 197, 237)"}}
//                 aria-label="First name" 
//                 name="E2_51"  
//                 value={inputValues.E2_51}
//                 onChange={changeData} 
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(247, 197, 237)"}}
//                 aria-label="First name" 
//                 name="F2_51" 
//                 value={inputValues.F2_51}
//                 onChange={changeData}

//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(247, 197, 237)"}}
//                 aria-label="First name" 
//                 name="G2_51"  
//                 value={inputValues.G2_51}
//                 onChange={changeData} 
//                 />

//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(247, 197, 237)"}}
//                 aria-label="First name" 
//                 name="H2_51"  
//                 value={inputValues.H2_51}
//                 onChange={changeData} 
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1 border-start d-flex justify-content-center">
//             <div className="row g-3">
//               <div className="col">
//                 <input type="text" 
//                 className="form-control" 
//                 style={{backgroundColor: "rgb(247, 197, 237)"}}
//                 aria-label="First name" 
//                 name="I2_51"  
//                 value={inputValues.I2_51}
//                 onChange={changeData} 
//                 />
//               </div>
//             </div>
//           </div>
//       </div>
//     </div>





// </div>
 

    
//   );
  
// }

// export default Opstmt;

// Opstmt.js
import React, { useContext,useEffect, useState } from 'react';
import axios from 'axios'
import { AppContext } from '../AppContext';


function Opstmt() {

  const { inputValues, setInputValues, tot15 } = useContext(AppContext);
  const [sumB2, setSumB2] = useState(0);
  const [sumC2, setSumC2] = useState(0);
  const [sumD2, setSumD2] = useState(0);
  const [sumE2, setSumE2] = useState(0);
  const [sumF2, setSumF2] = useState(0);
  const [sumG2, setSumG2] = useState(0);
  const [sumH2, setSumH2] = useState(0);
  const [sumI2, setSumI2] = useState(0);

    let [tot2020]=useState();
    let [tot2021]=useState();
    let [tot2022]=useState();
    let [tot2023]=useState();
    let [tot2024]=useState();
    let [tot2025]=useState();
    let [tot2026]=useState();
    let [tot2027]=useState();
    let [tot2028]=useState();
    let [tot2029]=useState();
    let [tot2030]=useState();
    let [tot2031]=useState();
    let [tot2032]=useState();
    let [tot2033]=useState();
    let [tot2034]=useState();
    let [tot2035]=useState();
    let [tot2036]=useState();
    let [tot2037]=useState();
    let [tot2038]=useState();
    let [tot2039]=useState();
    let [tot2040]=useState();
    let [tot2041]=useState();
    let [tot2042]=useState();
    let [tot2043]=useState();

    const [Cost2_13, setCost2_13] = useState({});
    const [prefix, setPrefix] = useState("");
    const [sum2, setSum2] = useState(0);


  // --------------------------------------------------TOTAL OF B2_13------------------------------------------------
    useEffect(() => {
      const total = parseFloat(inputValues.B1_23 || 0) +
                    parseFloat(inputValues.B1_24 || 0) +
                    parseFloat(inputValues.B1_25 || 0) +
                    parseFloat(inputValues.B2_10 || 0) +
                    parseFloat(inputValues.B2_11 || 0) +
                    parseFloat(tot15.B3_15 || 0);
      setSumB2(total);
      setInputValues(prev => ({
        ...prev,
        B2_13: total.toString(),
      }));
      async function upload13() {
        const user_id = localStorage.getItem("user_id");
        const res = await fetch("http://127.0.0.1:8000/api/save_assets/", {
          method: "POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify( {
            cell_id: "B2_13", cell_value: inputValues["B2_13"],user_id:user_id,
            
          })
        })
      }
      upload13();
    }, [inputValues, tot15, setInputValues]);
  
 // --------------------------------------------------TOTAL OF C2_13------------------------------------------------   
 useEffect(() => {
  const totalC = parseFloat(inputValues.C1_23 || 0) +
                parseFloat(inputValues.C1_24 || 0) +
                parseFloat(inputValues.C1_25 || 0) +
                parseFloat(inputValues.C2_10 || 0) +
                parseFloat(inputValues.C2_11 || 0) +
                parseFloat(tot15.C3_15 || 0);
  setSumC2(totalC);
  setInputValues(prev => ({
    ...prev,
    C2_13: totalC.toString(),
  }));
  async function upload13() {
    const user_id = localStorage.getItem("user_id");
    const res = await fetch("http://127.0.0.1:8000/api/save_assets/", {
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify( {
        cell_id: "C2_13", cell_value: inputValues["C2_13"],user_id:user_id,
        
      })
    })
  }
  upload13();
}, [inputValues, tot15, setInputValues]);

// --------------------------------------------------TOTAL OF D2_13------------------------------------------------   
useEffect(() => {
  const totalD = parseFloat(inputValues.D1_23 || 0) +
                parseFloat(inputValues.D1_24 || 0) +
                parseFloat(inputValues.D1_25 || 0) +
                parseFloat(inputValues.D2_10 || 0) +
                parseFloat(inputValues.D2_11 || 0) +
                parseFloat(tot15.D3_15 || 0);
  setSumD2(totalD);
  setInputValues(prev => ({
    ...prev,
    D2_13: totalD.toString(),
  }));
  async function uploadD2_13() {
    const user_id = localStorage.getItem("user_id");
    const res = await fetch("http://127.0.0.1:8000/api/save_assets/", {
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify( {
        cell_id: "D2_13", cell_value: inputValues["D2_13"],user_id:user_id,
        
      })
    })
  }
  uploadD2_13();
}, [inputValues, tot15, setInputValues]);


// --------------------------------------------------TOTAL OF E2_13------------------------------------------------   
useEffect(() => {
  const totalE = parseFloat(inputValues.E1_23 || 0) +
                parseFloat(inputValues.E1_24 || 0) +
                parseFloat(inputValues.E1_25 || 0) +
                parseFloat(inputValues.E2_10 || 0) +
                parseFloat(inputValues.E2_11 || 0) +
                parseFloat(tot15.E3_15 || 0);
  setSumE2(totalE);
  setInputValues(prev => ({
    ...prev,
    E2_13: totalE.toString(),
  }));
  async function uploadE2_13() {
    const user_id = localStorage.getItem("user_id");
    const res = await fetch("http://127.0.0.1:8000/api/save_assets/", {
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify( {
        cell_id: "E2_13", cell_value: inputValues["E2_13"],user_id:user_id,
        
      })
    })
  }
  uploadE2_13();
}, [inputValues, tot15, setInputValues]);

// --------------------------------------------------TOTAL OF F2_13------------------------------------------------   
useEffect(() => {
  const totalF = parseFloat(inputValues.F1_23 || 0) +
                parseFloat(inputValues.F1_24 || 0) +
                parseFloat(inputValues.F1_25 || 0) +
                parseFloat(inputValues.F2_10 || 0) +
                parseFloat(inputValues.F2_11 || 0) +
                parseFloat(tot15.F3_15 || 0);
  setSumF2(totalF);
  setInputValues(prev => ({
    ...prev,
    F2_13: totalF.toString(),
  }));
  async function uploadF2_13() {
    const user_id = localStorage.getItem("user_id");
    const res = await fetch("http://127.0.0.1:8000/api/save_assets/", {
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify( {
        cell_id: "F2_13", cell_value: inputValues["F2_13"],user_id:user_id,
        
      })
    })
  }
  uploadF2_13();
}, [inputValues, tot15, setInputValues]);


// --------------------------------------------------TOTAL OF G2_13------------------------------------------------   
useEffect(() => {
  const totalG = parseFloat(inputValues.G1_23 || 0) +
                parseFloat(inputValues.G1_24 || 0) +
                parseFloat(inputValues.G1_25 || 0) +
                parseFloat(inputValues.G2_10 || 0) +
                parseFloat(inputValues.G2_11 || 0) +
                parseFloat(tot15.G3_15 || 0);
  setSumG2(totalG);
  setInputValues(prev => ({
    ...prev,
    G2_13: totalG.toString(),
  }));
  async function uploadG2_13() {
    const user_id = localStorage.getItem("user_id");
    const res = await fetch("http://127.0.0.1:8000/api/save_assets/", {
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify( {
        cell_id: "G2_13", cell_value: inputValues["G2_13"],user_id:user_id,
        
      })
    })
  }
  uploadG2_13();
}, [inputValues, tot15, setInputValues]);

// --------------------------------------------------TOTAL OF H2_13------------------------------------------------   
useEffect(() => {
  const totalH = parseFloat(inputValues.H1_23 || 0) +
                parseFloat(inputValues.H1_24 || 0) +
                parseFloat(inputValues.H1_25 || 0) +
                parseFloat(inputValues.H2_10 || 0) +
                parseFloat(inputValues.H2_11 || 0) +
                parseFloat(tot15.H3_15 || 0);
  setSumH2(totalH);
  setInputValues(prev => ({
    ...prev,
    H2_13: totalH.toString(),
  }));
  async function uploadH2_13() {
    const user_id = localStorage.getItem("user_id");
    const res = await fetch("http://127.0.0.1:8000/api/save_assets/", {
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify( {
        cell_id: "H2_13", cell_value: inputValues["H2_13"],user_id:user_id,
        
      })
    })
  }
  uploadH2_13();
}, [inputValues, tot15, setInputValues]);


// --------------------------------------------------TOTAL OF I2_13------------------------------------------------   
useEffect(() => {
  const totalI = parseFloat(inputValues.I1_23 || 0) +
                parseFloat(inputValues.I1_24 || 0) +
                parseFloat(inputValues.I1_25 || 0) +
                parseFloat(inputValues.I2_10 || 0) +
                parseFloat(inputValues.I2_11 || 0) +
                parseFloat(tot15.I3_15 || 0);
  setSumI2(totalI);
  setInputValues(prev => ({
    ...prev,
    I2_13: totalI.toString(),
  }));
  async function uploadI2_13() {
    const user_id = localStorage.getItem("user_id");
    const res = await fetch("http://127.0.0.1:8000/api/save_assets/", {
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify( {
        cell_id: "I2_13", cell_value: inputValues["I2_13"],user_id:user_id,
        
      })
    })
  }
  uploadI2_13();
}, [inputValues, tot15, setInputValues]);






// -------------------------------------- Changedata main ----------------------------------------------------------


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

          if (name.includes("_14") || name.includes("_15") || name.includes("_16") || name.includes("_17") || name.includes("_18") || name.includes("_19") || name.includes("_20") || name.includes("_21") || name.includes("_23") || name.includes("_24") || name.includes("_25") || name.includes("_29") || name.includes("_30") || name.includes("_33") || name.includes("_34") || name.includes("_36") || name.includes("_40"))   {
            setPrefix(name.split("_")[0]);
          }
          
         if(value!=""){
          
          const res = await fetch("http://127.0.0.1:8000/api/save_assets/", {
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









  const uploadSum26 = async (data) => {
    try {
      const { name, namePrefix } = data;
      const user_id = localStorage.getItem("user_id");

      let sum26 = (
        parseFloat(inputValues[namePrefix + "_13"] || 0) +
        parseFloat(inputValues[namePrefix + "_14"] || 0) +
        parseFloat(inputValues[namePrefix + "_15"] || 0) +
        parseFloat(inputValues[namePrefix + "_16"] || 0) +
        parseFloat(inputValues[namePrefix + "_17"] || 0) +
        parseFloat(inputValues[namePrefix + "_18"] || 0) +
        parseFloat(inputValues[namePrefix + "_19"] || 0) +
        parseFloat(inputValues[namePrefix + "_20"] || 0) +
        parseFloat(inputValues[namePrefix + "_21"] || 0)) -
        (
          parseFloat(inputValues[namePrefix + "_23"] || 0) +
          parseFloat(inputValues[namePrefix + "_24"] || 0) +
          parseFloat(inputValues[namePrefix + "_25"] || 0)
        );
      

      console.log(`>>>>>>${sum26}`);

      if (sum26 !== 0) {
        const res = await fetch("http://127.0.0.1:8000/api/save_assets/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ cell_id: name, cell_value: sum26, user_id: user_id })
        });
        console.log('Response:', res); // Log the response data
      }

    } catch (error) {
      console.error('Error:', error); // Log any errors that occur during the request
    }
  };




  useEffect(() => {
    console.log(Cost2_13);
    const total26 = (
      // parseFloat(lessB)+
      parseFloat(inputValues[prefix + "_13"] || 0) +
      parseFloat(inputValues[prefix + "_14"] || 0) +
      parseFloat(inputValues[prefix + "_15"] || 0) +
      parseFloat(inputValues[prefix + "_16"] || 0) +
      parseFloat(inputValues[prefix + "_17"] || 0) +
      parseFloat(inputValues[prefix + "_18"] || 0));
    
    setCost2_13(total26);
    setCost2_13({
      ...Cost2_13,
      [[prefix + "_15"]]: total26.toString()
    });
    uploadSum26({ name: prefix + "_15", namePrefix: prefix });
  }, [prefix, inputValues]);



// ---------------------------------------------- Opstmt -----------------------------------------------------------

 useEffect(()=>{
  console.log(tot2020);
  console.log(inputValues);
  
  async function upload() {
    const user_id = localStorage.getItem("user_id");
    const res = await fetch("http://127.0.0.1:8000/api/save_assets/", {
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify( {
        cell_id: "B2_7", cell_value: inputValues["B1_25"],user_id:user_id,
        
      })
    })
  }
  upload();
 },[tot2020])



 useEffect(()=>{
  console.log(tot2021);
  console.log(inputValues);
  async function upload() {
    const user_id = localStorage.getItem("user_id");
    const res = await fetch("http://127.0.0.1:8000/api/save_assets/", {
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify( {
        cell_id: "B2_8", cell_value: inputValues["B1_24"],user_id:user_id,
      })
    })
  }
  upload();
 },[tot2021])


 useEffect(()=>{
  console.log(tot2022);
  console.log(inputValues);
  async function upload() {
    const user_id = localStorage.getItem("user_id");
    const res = await fetch("http://127.0.0.1:8000/api/save_assets/", {
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify( {
        cell_id: "B2_9", cell_value: inputValues["B1_23"],user_id:user_id,
      })
    })
  }
  upload();
 },[tot2022])


 useEffect(()=>{
  console.log(tot2023);
  console.log(inputValues);
  async function upload() {
    const user_id = localStorage.getItem("user_id");
    const res = await fetch("http://127.0.0.1:8000/api/save_assets/", {
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify( {
        cell_id: "C2_7", cell_value: inputValues["C1_25"],user_id:user_id,
      })
    })
  }
  upload();
 },[tot2023])




 useEffect(()=>{
  console.log(tot2024);
  console.log(inputValues);
  async function upload() {
    const user_id = localStorage.getItem("user_id");
    const res = await fetch("http://127.0.0.1:8000/api/save_assets/", {
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify( {
        cell_id: "C2_8", cell_value: inputValues["C1_24"],user_id:user_id,
      })
    })
  }
  upload();
 },[tot2024])




 useEffect(()=>{
  console.log(tot2025);
  console.log(inputValues);
  async function upload() {
    const user_id = localStorage.getItem("user_id");
    const res = await fetch("http://127.0.0.1:8000/api/save_assets/", {
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify( {
        cell_id: "C2_9", cell_value: inputValues["C1_23"],user_id:user_id,
      })
    })
  }
  upload();
 },[tot2025])



 useEffect(()=>{
  console.log(tot2026);
  console.log(inputValues);
  async function upload() {
    const user_id = localStorage.getItem("user_id");
    const res = await fetch("http://127.0.0.1:8000/api/save_assets/", {
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify( {
        cell_id: "D2_7", cell_value: inputValues["D1_25"],user_id:user_id,
      })
    })
  }
  upload();
 },[tot2026])




 useEffect(()=>{
  console.log(tot2027);
  console.log(inputValues);
  async function upload() {
    const user_id = localStorage.getItem("user_id");
    const res = await fetch("http://127.0.0.1:8000/api/save_assets/", {
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify( {
        cell_id: "D2_8", cell_value: inputValues["D1_24"],user_id:user_id,
      })
    })
  }
  upload();
 },[tot2027])



 
 useEffect(()=>{
  console.log(tot2028);
  console.log(inputValues);
  async function upload() {
    const user_id = localStorage.getItem("user_id");
    const res = await fetch("http://127.0.0.1:8000/api/save_assets/", {
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify( {
        cell_id: "D2_9", cell_value: inputValues["D1_23"],user_id:user_id,
      })
    })
  }
  upload();
 },[tot2028])

        

 useEffect(()=>{
  console.log(tot2029);
  console.log(inputValues);
  async function upload() {
    const user_id = localStorage.getItem("user_id");
    const res = await fetch("http://127.0.0.1:8000/api/save_assets/", {
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify( {
       cell_id: "E2_7", cell_value: inputValues["E1_25"],user_id:user_id,
      })
    })
  }
  upload();
 },[tot2029])
    


 useEffect(()=>{
  console.log(tot2030);
  console.log(inputValues);
  async function upload() {
    const user_id = localStorage.getItem("user_id");
    const res = await fetch("http://127.0.0.1:8000/api/save_assets/", {
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify( {
         cell_id: "E2_8", cell_value: inputValues["E1_24"],user_id:user_id,
      })
    })
  }
  upload();
 },[tot2030])




 useEffect(()=>{
  console.log(tot2031);
  console.log(inputValues);
  async function upload() {
    const user_id = localStorage.getItem("user_id");
    const res = await fetch("http://127.0.0.1:8000/api/save_assets/", {
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify( {
        cell_id: "E2_9", cell_value: inputValues["E1_23"],user_id:user_id,
      })
    })
  }
  upload();
 },[tot2031])



 useEffect(()=>{
  console.log(tot2032);
  console.log(inputValues);
  async function upload() {
    const user_id = localStorage.getItem("user_id");
    const res = await fetch("http://127.0.0.1:8000/api/save_assets/", {
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify( {
       cell_id: "F2_7", cell_value: inputValues["F1_25"],user_id:user_id,
      })
    })
  }
  upload();
 },[tot2032])
        


 useEffect(()=>{
  console.log(tot2033);
  console.log(inputValues);
  async function upload() {
    const user_id = localStorage.getItem("user_id");
    const res = await fetch("http://127.0.0.1:8000/api/save_assets/", {
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify( {
      cell_id: "F2_8", cell_value: inputValues["F1_24"],user_id:user_id,
      })
    })
  }
  upload();
 },[tot2033])

        
 
 useEffect(()=>{
  console.log(tot2034);
  console.log(inputValues);
  async function upload() {
    const user_id = localStorage.getItem("user_id");
    const res = await fetch("http://127.0.0.1:8000/api/save_assets/", {
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify( {
      cell_id: "F2_9", cell_value: inputValues["F1_23"],user_id:user_id,
      })
    })
  }
  upload();
 },[tot2034])



 useEffect(()=>{
  console.log(tot2035);
  console.log(inputValues);
  async function upload() {
    const user_id = localStorage.getItem("user_id");
    const res = await fetch("http://127.0.0.1:8000/api/save_assets/", {
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify( {
      cell_id: "G2_7", cell_value: inputValues["G1_25"],user_id:user_id,
      })
    })
  }
  upload();
 },[tot2035])

 

 useEffect(()=>{
  console.log(tot2036);
  console.log(inputValues);
  async function upload() {
    const user_id = localStorage.getItem("user_id");
    const res = await fetch("http://127.0.0.1:8000/api/save_assets/", {
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify( {
     cell_id: "G2_8", cell_value: inputValues["G1_24"],user_id:user_id,
      })
    })
  }
  upload();
 },[tot2036])


 useEffect(()=>{
  console.log(tot2037);
  console.log(inputValues);
  async function upload() {
    const user_id = localStorage.getItem("user_id");
    const res = await fetch("http://127.0.0.1:8000/api/save_assets/", {
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify( {
      cell_id: "G2_9", cell_value: inputValues["G1_23"],user_id:user_id,
      })
    })
  }
  upload();
 },[tot2037])

        
       

 useEffect(()=>{
  console.log(tot2038);
  console.log(inputValues);
  async function upload() {
    const user_id = localStorage.getItem("user_id");
    const res = await fetch("http://127.0.0.1:8000/api/save_assets/", {
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify( {
        cell_id: "H2_7", cell_value: inputValues["H1_25"],user_id:user_id,
      })
    })
  }
  upload();
 },[tot2038])



 useEffect(()=>{
  console.log(tot2039);
  console.log(inputValues);
  async function upload() {
    const user_id = localStorage.getItem("user_id");
    const res = await fetch("http://127.0.0.1:8000/api/save_assets/", {
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify( {
      cell_id: "H2_8", cell_value: inputValues["H1_24"],user_id:user_id,
      })
    })
  }
  upload();
 },[tot2039])
        


 useEffect(()=>{
  console.log(tot2040);
  console.log(inputValues);
  async function upload() {
    const user_id = localStorage.getItem("user_id");
    const res = await fetch("http://127.0.0.1:8000/api/save_assets/", {
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify( {
      cell_id: "H2_9", cell_value: inputValues["H1_23"],user_id:user_id,
      })
    })
  }
  upload();
 },[tot2040])


 useEffect(()=>{
  console.log(tot2041);
  console.log(inputValues);
  async function upload() {
    const user_id = localStorage.getItem("user_id");
    const res = await fetch("http://127.0.0.1:8000/api/save_assets/", {
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify( {
      cell_id: "I2_7", cell_value: inputValues["I1_25"],user_id:user_id,
      })
    })
  }
  upload();
 },[tot2041])

 useEffect(()=>{
  console.log(tot2042);
  console.log(inputValues);
  async function upload() {
    const user_id = localStorage.getItem("user_id");
    const res = await fetch("http://127.0.0.1:8000/api/save_assets/", {
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify( {
      cell_id: "I2_8", cell_value: inputValues["I1_24"],user_id:user_id,
      })
    })
  }
  upload();
 },[tot2042])
        


 useEffect(()=>{
  console.log(tot2043);
  console.log(inputValues);
  async function upload() {
    const user_id = localStorage.getItem("user_id");
    const res = await fetch("http://127.0.0.1:8000/api/save_assets/", {
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify( {
      cell_id: "I2_9", cell_value: inputValues["I1_23"],user_id:user_id,
      })
    })
  }
  upload();
 },[tot2043])


 // ---------------------------------------------- Opstmt (End )-------------------------------------------------------

 // ---------------------------------------------- OCA & OCL  -------------------------------------------------------
      
 useEffect(()=>{
  console.log(inputValues);
  async function upload() {
    const user_id = localStorage.getItem("user_id");
    const res = await fetch("http://127.0.0.1:8000/api/save_assets/", {
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify( {
      cell_id: "B2_12", cell_value: tot15["B3_15"],user_id:user_id,
      })
    })
  }
  upload();
 },[tot2042])



 useEffect(()=>{
  console.log(inputValues);
  async function upload() {
    const user_id = localStorage.getItem("user_id");
    const res = await fetch("http://127.0.0.1:8000/api/save_assets/", {
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify( {
      cell_id: "C2_12", cell_value: tot15["C3_15"],user_id:user_id,
      })
    })
  }
  upload();
 },[tot2042])


 useEffect(()=>{
  console.log(inputValues);
  async function upload() {
    const user_id = localStorage.getItem("user_id");
    const res = await fetch("http://127.0.0.1:8000/api/save_assets/", {
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify( {
      cell_id: "D2_12", cell_value: tot15["D3_15"],user_id:user_id,
      })
    })
  }
  upload();
 },[tot2042])


 useEffect(()=>{
  console.log(inputValues);
  async function upload() {
    const user_id = localStorage.getItem("user_id");
    const res = await fetch("http://127.0.0.1:8000/api/save_assets/", {
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify( {
      cell_id: "E2_12", cell_value: tot15["E3_15"],user_id:user_id,
      })
    })
  }
  upload();
 },[tot2042])


 useEffect(()=>{
  console.log(inputValues);
  async function upload() {
    const user_id = localStorage.getItem("user_id");
    const res = await fetch("http://127.0.0.1:8000/api/save_assets/", {
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify( {
      cell_id: "F2_12", cell_value: tot15["F3_15"],user_id:user_id,
      })
    })
  }
  upload();
 },[tot2042])


 useEffect(()=>{
  console.log(inputValues);
  async function upload() {
    const user_id = localStorage.getItem("user_id");
    const res = await fetch("http://127.0.0.1:8000/api/save_assets/", {
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify( {
      cell_id: "G2_12", cell_value: tot15["G3_15"],user_id:user_id,
      })
    })
  }
  upload();
 },[tot2042])


 useEffect(()=>{
  console.log(inputValues);
  async function upload() {
    const user_id = localStorage.getItem("user_id");
    const res = await fetch("http://127.0.0.1:8000/api/save_assets/", {
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify( {
      cell_id: "H2_12", cell_value: tot15["H3_15"],user_id:user_id,
      })
    })
  }
  upload();
 },[tot2042])

 useEffect(()=>{
  console.log(inputValues);
  async function upload() {
    const user_id = localStorage.getItem("user_id");
    const res = await fetch("http://127.0.0.1:8000/api/save_assets/", {
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify( {
      cell_id: "I2_12", cell_value: tot15["I3_15"],user_id:user_id,
      })
    })
  }
  upload();
 },[tot2042])



 






































 

  return (
<div style={{ marginTop: 25 }}>
      <div className="container-fluid border d-flex justify-content-center div_1">
        <h2 className="navbar-brand">Astral India Ltd</h2>
      </div>

      <div className="container-fluid border mt-3">
        <div className="row">
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h5>Analysis Of Balance Sheet</h5>
          </div>
          <div className="col-lg-8 border-start d-flex justify-content-center">
            <h5>For the year ended/ending (Rs. in Lacs)</h5>
          </div>
        </div>
      </div>

      <div className="container-fluid border mt-3">
        <div className="row">
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h6 className="navbar-brand">PARTICULARS</h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <h6 className="navbar-brand">2020</h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <h6 className="navbar-brand">2021</h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <h6 className="navbar-brand">2022</h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <h6 className="navbar-brand">2023</h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <h6 className="navbar-brand">2024</h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <h6 className="navbar-brand">2025</h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <h6 className="navbar-brand">2026</h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <h6 className="navbar-brand">2027</h6>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 border-end d-flex justify-content-center">
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

    <div className="container-fluid border mt-3">
        <div className="row" style={{backgroundColor:"rgb(224, 231, 231)"}}>
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h5 style={{color:"red"}}>CURRENT ASSETS</h5>
          </div>
        </div>
    </div>
    
    <div className="container-fluid border mt-3 div_main4">
      <div className="row" >
        <div className="col-lg-4 border-end d-flex justify-content-center" style={{backgroundColor: "rgb(169, 255, 251)"}}>
          <h6><b>Raw Materials</b></h6>
        </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
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
                <input type="text"
                className="form-control" 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
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
                style={{backgroundColor: "rgb(169, 255, 251)"}}
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
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
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
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
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
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
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
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
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
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
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
  <div className="container-fluid border mt-3 div_main4">
      <div className="row" >
        <div className="col-lg-4 border-end d-flex justify-content-center" style={{backgroundColor: "rgb(169, 255, 251)"}}>
          <h6 ><b>Stock in Process</b></h6>
        </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
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
                <input type="text"
                className="form-control" 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
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
                style={{backgroundColor: "rgb(169, 255, 251)"}}
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
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
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
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
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
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
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
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
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
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
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
  

<div className="container-fluid border mt-3 div_main4">
      <div className="row" >
        <div className="col-lg-4 border-end d-flex justify-content-center" style={{backgroundColor: "rgb(169, 255, 251)"}}>
          <h6><b>Finishing Goods</b></h6>
        </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
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
                <input type="text"
                className="form-control" 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
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
                style={{backgroundColor: "rgb(169, 255, 251)"}}
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
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
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
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
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
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
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
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
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
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
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

    <div className="container-fluid border mt-3">
      <div className="row">
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h6>Consumable Spares
             </h6>
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
                <input type="number" 
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
                <input type="number" 
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
                <input type="number" 
                className="form-control" 
                 placeholder="Rs."
                aria-label="First name" 
                name="G2_10" 
                value={inputValues.G2_10}
                onChange={changeData} />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
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
                <input type="number" 
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
    <div className="container-fluid border mt-3">
      <div className="row">
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h6 style={{color:"blue"}}>Trade Debtors Less 6 Months
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
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
                <input type="number" 
                className="form-control" 
               placeholder="Rs."
                aria-label="First name" 
                name="C2_11"
                value={inputValues.C2_11}
                onChange={changeData}  />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number"
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
                <input type="number"
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
                <input type="number"
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
                <input type="number" 
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
                <input type="number" 
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
                <input type="number"
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
    <div className="container-fluid border mt-3 div_main4">
      <div className="row" >
        <div className="col-lg-4 border-end d-flex justify-content-center"style={{backgroundColor: "rgb(159, 252, 204)"}}>
          <h5>Other Current Assets</h5>
        </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                style={{backgroundColor: "rgb(159, 252, 204)"}}
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
                <input type="text"
                className="form-control" 
                style={{backgroundColor: "rgb(159, 252, 204)"}}
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
                style={{backgroundColor: "rgb(159, 252, 204)"}}
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
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(159, 252, 204)"}}
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
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(159, 252, 204)"}}
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
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(159, 252, 204)"}}
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
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(159, 252, 204)"}}
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
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(159, 252, 204)"}}
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
    <div className="container-fluid border mt-3 div_main4">
      <div className="row" >
        <div className="col-lg-4 border-end d-flex justify-content-center" style={{backgroundColor: "rgb(169, 255, 251)"}}>
          <h5 style={{color:"red"}}>TOTAL CURRENT ASSETS</h5>
        </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                style={{backgroundColor: "rgb(169, 255, 251)",fontWeight:"bold"}}
                type="text" 
                className="form-control" 
                aria-label="First name" 
                name="B2_13"
                value={inputValues.B2_13}
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
                style={{backgroundColor: "rgb(169, 255, 251)",fontWeight:"bold"}}
                aria-label="First name" 
                name="C2_13"  
                value={inputValues.C2_13}
                onChange={changeData}
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                style={{backgroundColor: "rgb(169, 255, 251)",fontWeight:"bold"}}
                type="text" 
                className="form-control" 
               aria-label="First name" 
                name="D2_13"  
                value={inputValues.D2_13}
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
                style={{backgroundColor: "rgb(169, 255, 251)",fontWeight:"bold"}}
                aria-label="First name" 
                name="E2_13"  
                value={inputValues.E2_13}
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
                style={{backgroundColor: "rgb(169, 255, 251)",fontWeight:"bold"}}
                aria-label="First name" 
                name="F2_13" 
                value={inputValues.F2_13}
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
                style={{backgroundColor: "rgb(169, 255, 251)",fontWeight:"bold"}}
                aria-label="First name" 
                name="G2_13"  
                value={inputValues.G2_13}
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
                style={{backgroundColor: "rgb(169, 255, 251)",fontWeight:"bold"}}
                aria-label="First name" 
                name="H2_13"  
                value={inputValues.H2_13}
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
                style={{backgroundColor: "rgb(169, 255, 251)",fontWeight:"bold"}}
                aria-label="First name" 
                name="I2_13"  
                value={inputValues.I2_13}
                onChange={changeData} 
                />
              </div>
            </div>
          </div>
      </div>
    </div>
  
    <div className="container-fluid border mt-3">
      <div className="row">
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h6>FIXED ASSETS
             </h6>
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
                <input type="number" 
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
                <input type="number" 
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
                <input type="number" 
                className="form-control" 
                  placeholder="Rs."
                aria-label="First name" 
                name="G2_14" 
                value={inputValues.G2_14}
                onChange={changeData} />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
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
                <input type="number" 
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
    <div className="container-fluid border mt-3">
      <div className="row">
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h6>Land & Building
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
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
                <input type="number" 
                className="form-control" 
                placeholder="Rs."
                aria-label="First name" 
                name="C2_15"
                value={inputValues.C2_15}
                onChange={changeData}  />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number"
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
                <input type="number"
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
                <input type="number"
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
                <input type="number" 
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
                <input type="number" 
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
                <input type="number"
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
    <div className="container-fluid border mt-3">
      <div className="row">
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h6>Plant & Machinery
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
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
                <input type="number"
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
                <input type="number" 
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
                <input type="number" 
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
                <input type="number" 
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
                <input type="number" 
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
                <input type="number" 
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
                <input type="number" 
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
    <div className="container-fluid border mt-3">
      <div className="row">
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h6>Furniture / Fixtures / Sundries
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
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
                <input type="number"
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
                <input type="number" 
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
                <input type="number" 
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
                <input type="number" 
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
                <input type="number" 
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
                <input type="number" 
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
                <input type="number" 
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
    <div className="container-fluid border mt-3">
      <div className="row">
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h6>Capital Work in Progress
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
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
                <input type="number"
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
                <input type="number" 
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
                <input type="number" 
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
                <input type="number" 
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
                <input type="number" 
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
                <input type="number" 
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
                <input type="number" 
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
    <div className="container-fluid border mt-3 div_main4">
      <div className="row" >
        <div className="col-lg-4 border-end d-flex justify-content-center" style={{backgroundColor: "rgb(169, 255, 251)"}}>
          <h5 style={{color:"red"}}>GROSS BLOCK</h5>
        </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                type="text" 
                className="form-control" 
                aria-label="First name" 
                name="B2_19"
                value={inputValues.B2_19}
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
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                aria-label="First name" 
                name="C2_19"  
                value={inputValues.C2_19}
                onChange={changeData}
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                type="text" 
                className="form-control" 
               aria-label="First name" 
                name="D2_19"  
                value={inputValues.D2_19}
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
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                aria-label="First name" 
                name="E2_19"  
                value={inputValues.E2_19}
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
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                aria-label="First name" 
                name="F2_19" 
                value={inputValues.F2_19}
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
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                aria-label="First name" 
                name="G2_19"  
                value={inputValues.G2_19}
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
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                aria-label="First name" 
                name="H2_19"  
                value={inputValues.H2_19}
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
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                aria-label="First name" 
                name="I2_19"  
                value={inputValues.I2_19}
                onChange={changeData} 
                />
              </div>
            </div>
          </div>
      </div>
    </div>

    <div className="container-fluid border mt-3">
      <div className="row">
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h6>Less Depreciation
             </h6>
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
                <input type="number" 
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
                <input type="number" 
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
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="G2_20" 
                value={inputValues.G2_20}
                onChange={changeData} />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
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
                <input type="number" 
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
    <div className="container-fluid border mt-3 div_main4">
      <div className="row" >
        <div className="col-lg-4 border-end d-flex justify-content-center" style={{backgroundColor: "rgb(169, 255, 251)"}}>
          <h5 style={{color:"red"}}>NET FIXED ASSETS</h5>
        </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                type="text" 
                className="form-control"
                aria-label="First name" 
                name="B2_21"
                value={inputValues.B2_21}
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
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                aria-label="First name" 
                name="C2_21"  
                value={inputValues.C2_21}
                onChange={changeData}
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                type="text" 
                className="form-control" 
               aria-label="First name" 
                name="D2_21"  
                value={inputValues.D2_21}
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
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                aria-label="First name" 
                name="E2_21"  
                value={inputValues.E2_21}
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
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                aria-label="First name" 
                name="F2_21" 
                value={inputValues.F2_21}
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
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                aria-label="First name" 
                name="G2_21"  
                value={inputValues.G2_21}
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
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                aria-label="First name" 
                name="H2_21"  
                value={inputValues.H2_21}
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
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                aria-label="First name" 
                name="I2_21"  
                value={inputValues.I2_21}
                onChange={changeData} 
                />
              </div>
            </div>
          </div>
      </div>
    </div>

    {/* ------------------------------- NON CURRENT ASSETS ----------------------------------------------- */}
   
    <div className="container-fluid border mt-3">
        <div className="row" style={{backgroundColor:"rgb(224, 231, 231)"}}>
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h5 >NON CURRENT ASSETS</h5>
          </div>
        </div>
    </div>
    <div className="container-fluid border mt-3">
      <div className="row">
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h6>Investment / Loan to Associate
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
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
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="C2_23"
                value={inputValues.C2_23}
                onChange={changeData}  />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
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
                <input type="number" 
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
                <input type="number" 
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
                <input type="number" 
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
                <input type="number" 
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
                <input type="number" 
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
    <div className="container-fluid border mt-3 div_main4">
      <div className="row" >
        <div className="col-lg-4 border-end d-flex justify-content-center"style={{backgroundColor: "rgb(159, 252, 204)"}}>
          <h5>Other Non Current Assets</h5>
        </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                style={{backgroundColor: "rgb(159, 252, 204)"}}
                type="text" 
                className="form-control" 
                aria-label="First name" 
                name="B2_24"
                value={inputValues.B2_24}
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
                style={{backgroundColor: "rgb(159, 252, 204)"}}
                aria-label="First name" 
                name="C2_24"  
                value={inputValues.C2_24}
                onChange={changeData}
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                style={{backgroundColor: "rgb(159, 252, 204)"}}
                type="text" 
                className="form-control" 
               aria-label="First name" 
                name="D2_24"  
                value={inputValues.D2_24}
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
                style={{backgroundColor: "rgb(159, 252, 204)"}}
                aria-label="First name" 
                name="E2_24"  
                value={inputValues.E2_24}
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
                style={{backgroundColor: "rgb(159, 252, 204)"}}
                aria-label="First name" 
                name="F2_24" 
                value={inputValues.F2_24}
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
                style={{backgroundColor: "rgb(159, 252, 204)"}}
                aria-label="First name" 
                name="G2_24"  
                value={inputValues.G2_24}
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
                style={{backgroundColor: "rgb(159, 252, 204)"}}
                aria-label="First name" 
                name="H2_24"  
                value={inputValues.H2_24}
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
                style={{backgroundColor: "rgb(159, 252, 204)"}}
                aria-label="First name" 
                name="I2_24"  
                value={inputValues.I2_24}
                onChange={changeData} 
                />
              </div>
            </div>
          </div>
      </div>
    </div>

    
    <div className="container-fluid border mt-3 div_main4">
      <div className="row" >
        <div className="col-lg-4 border-end d-flex justify-content-center" style={{backgroundColor: "rgb(169, 255, 251)"}}>
          <h5 style={{color:"red"}}>TOTAL NCA</h5>
        </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                type="text" 
                className="form-control" 
                aria-label="First name" 
                name="B2_25"
                value={inputValues.B2_25}
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
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                aria-label="First name" 
                name="C2_25"  
                value={inputValues.C2_25}
                onChange={changeData}
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                type="text" 
                className="form-control" 
               aria-label="First name" 
                name="D2_25"  
                value={inputValues.D2_25}
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
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                aria-label="First name" 
                name="E2_25"  
                value={inputValues.E2_25}
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
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                aria-label="First name" 
                name="F2_25" 
                value={inputValues.F2_25}
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
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                aria-label="First name" 
                name="G2_25"  
                value={inputValues.G2_25}
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
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                aria-label="First name" 
                name="H2_25"  
                value={inputValues.H2_25}
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
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                aria-label="First name" 
                name="I2_25"  
                value={inputValues.I2_25}
                onChange={changeData} 
                />
              </div>
            </div>
          </div>
      </div>
    </div>


    {/* ---------------------------------------NON CURRENT ASSETS ------------------------------------------*/}


    <div className="container-fluid border mt-3">
        <div className="row" style={{backgroundColor:"rgb(224, 231, 231)"}}>
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h5 >INTANGIBLE ASSETS</h5>
          </div>
        </div>
    </div>
    
<div className="container-fluid border mt-3">
<div className="row">
    <div className="col-lg-4 border-end d-flex justify-content-center">
      <h6>Expenses not written off
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="number" 
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
          <input type="number" 
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
          <input type="number" 
          className="form-control" 
          placeholder="Rs." aria-label="First name" 
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
          <input type="number" 
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
          <input type="number" 
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
          <input type="number" 
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
          <input type="number" 
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
          <input type="number" 
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

<div className="container-fluid border mt-3">
<div className="row">
    <div className="col-lg-4 border-end d-flex justify-content-center">
      <h6>Profit & Loss a/c
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="number" 
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
          <input type="number" 
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
          <input type="number" 
          className="form-control" 
          placeholder="Rs." aria-label="First name" 
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
          <input type="number" 
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
          <input type="number" 
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
          <input type="number" 
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
          <input type="number" 
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
          <input type="number" 
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

<div className="container-fluid border mt-3">
<div className="row">
    <div className="col-lg-4 border-end d-flex justify-content-center">
      <h6>Defered Revenue expenditure
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="number" 
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
          <input type="number" 
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
          <input type="number" 
          className="form-control" 
          placeholder="Rs." aria-label="First name" 
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
          <input type="number" 
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
          <input type="number" 
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
          <input type="number" 
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
          <input type="number" 
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
          <input type="number" 
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

 <div className="container-fluid border mt-3 div_main4">
      <div className="row" >
        <div className="col-lg-4 border-end d-flex justify-content-center"style={{backgroundColor: "rgb(189, 254, 243)"}}>
          <h5 style={{color:"red"}}> TOTAL IA</h5>
        </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
               style={{backgroundColor: "rgb(189, 254, 243)"}}
                type="text" 
                className="form-control" 
                aria-label="First name" 
                name="B2_30"
                value={inputValues.B2_30}
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
                style={{backgroundColor: "rgb(189, 254, 243)"}}
                aria-label="First name" 
                name="C2_30"  
                value={inputValues.C2_30}
                onChange={changeData}
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                style={{backgroundColor: "rgb(189, 254, 243)"}}
                type="text" 
                className="form-control" 
               aria-label="First name" 
                name="D2_30"  
                value={inputValues.D2_30}
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
                style={{backgroundColor: "rgb(189, 254, 243)"}}
                aria-label="First name" 
                name="E2_30"  
                value={inputValues.E2_30}
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
                style={{backgroundColor: "rgb(189, 254, 243)"}}
                aria-label="First name" 
                name="F2_30" 
                value={inputValues.F2_30}
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
                style={{backgroundColor: "rgb(189, 254, 243)"}}
                aria-label="First name" 
                name="G2_30"  
                value={inputValues.G2_30}
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
                style={{backgroundColor: "rgb(189, 254, 243)"}}
                aria-label="First name" 
                name="H2_30"  
                value={inputValues.H2_30}
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
                style={{backgroundColor: "rgb(189, 254, 243)"}}
                aria-label="First name" 
                name="I2_30"  
                value={inputValues.I2_30}
                onChange={changeData} 
                />
              </div>
            </div>
          </div>
      </div>
    </div>
    <div className="container-fluid border mt-3 div_main4">
      <div className="row" >
        <div className="col-lg-4 border-end d-flex justify-content-center"style={{backgroundColor: "rgb(189, 254, 243)"}}>
          <h5 style={{color:"red"}}><b>TOTAL ASSETS</b></h5>
        </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
               style={{backgroundColor: "rgb(189, 254, 243)"}}
                type="text" 
                className="form-control" 
                aria-label="First name" 
                name="B2_31"
                value={inputValues.B2_31}
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
                style={{backgroundColor: "rgb(189, 254, 243)"}}
                aria-label="First name" 
                name="C2_31"  
                value={inputValues.C2_31}
                onChange={changeData}
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                style={{backgroundColor: "rgb(189, 254, 243)"}}
                type="text" 
                className="form-control" 
               aria-label="First name" 
                name="D2_30"  
                value={inputValues.D2_30}
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
                style={{backgroundColor: "rgb(189, 254, 243)"}}
                aria-label="First name" 
                name="E2_31"  
                value={inputValues.E2_31}
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
                style={{backgroundColor: "rgb(189, 254, 243)"}}
                aria-label="First name" 
                name="F2_31" 
                value={inputValues.F2_31}
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
                style={{backgroundColor: "rgb(189, 254, 243)"}}
                aria-label="First name" 
                name="G2_31"  
                value={inputValues.G2_31}
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
                style={{backgroundColor: "rgb(189, 254, 243)"}}
                aria-label="First name" 
                name="H2_31"  
                value={inputValues.H2_31}
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
                style={{backgroundColor: "rgb(189, 254, 243)"}}
                aria-label="First name" 
                name="I2_31"  
                value={inputValues.I2_31}
                onChange={changeData} 
                />
              </div>
            </div>
          </div>
      </div>
    </div>

    {/*---------------------------------------- INTANGIBLE ASSETS -------------------------------------*/}

    <div className="container-fluid border mt-3">
        <div className="row" style={{backgroundColor:"rgb(224, 231, 231)"}}>
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h5 ><b>LIABILITIES</b></h5>
          </div>
        </div>
    </div>
    <div className="container-fluid border mt-3">
        <div className="row" style={{backgroundColor:"rgb(224, 231, 231)"}}>
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h6 style={{color:"blue"}}>CURRENT LIABILITIES</h6>
          </div>
        </div>
    </div>
    
    <div className="container-fluid border mt-3">
      <div className="row">
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h6>WC Borrowings From IOB
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
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
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="C2_34"
                value={inputValues.C2_34}
                onChange={changeData}  />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
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
                <input type="number" 
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
                <input type="number" 
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
                <input type="number" 
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
                <input type="number" 
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
                <input type="number" 
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
    <div className="container-fluid border mt-3">
      <div className="row">
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h6>WC From Banks/Institution
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
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
                <input type="number" 
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
                <input type="number" 
                className="form-control" 
                placeholder="Rs." aria-label="First name" 
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
                <input type="number" 
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
                <input type="number" 
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
                <input type="number" 
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
                <input type="number" 
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
                <input type="number" 
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
    
<div className="container-fluid border mt-3">
<div className="row">
    <div className="col-lg-4 border-end d-flex justify-content-center">
      <h6>Sundry Creditors-Trade
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="number" 
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
          <input type="number" 
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
          <input type="number" 
          className="form-control" 
          placeholder="Rs." aria-label="First name" 
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
          <input type="number" 
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
          <input type="number" 
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
          <input type="number" 
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
          <input type="number" 
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
          <input type="number" 
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
    <div className="container-fluid border mt-3 div_main4">
      <div className="row" >
        <div className="col-lg-4 border-end d-flex justify-content-center"style={{backgroundColor: "rgb(159, 252, 204)"}}>
          <h5>Other Current Liabilities</h5>
        </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                style={{backgroundColor: "rgb(159, 252, 204)"}}
                type="text" 
                className="form-control" 
                aria-label="First name" 
                name="B2_37"
                value={inputValues.B2_37}
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
                style={{backgroundColor: "rgb(159, 252, 204)"}}
                aria-label="First name" 
                name="C2_37"  
                value={inputValues.C2_37}
                onChange={changeData}
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                style={{backgroundColor: "rgb(159, 252, 204)"}}
                type="text" 
                className="form-control" 
               aria-label="First name" 
                name="D2_37"  
                value={inputValues.D2_37}
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
                style={{backgroundColor: "rgb(159, 252, 204)"}}
                aria-label="First name" 
                name="E2_37"  
                value={inputValues.E2_37}
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
                style={{backgroundColor: "rgb(159, 252, 204)"}}
                aria-label="First name" 
                name="F2_37" 
                value={inputValues.F2_37}
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
                style={{backgroundColor: "rgb(159, 252, 204)"}}
                aria-label="First name" 
                name="G2_37"  
                value={inputValues.G2_37}
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
                style={{backgroundColor: "rgb(159, 252, 204)"}}
                aria-label="First name" 
                name="H2_37"  
                value={inputValues.H2_37}
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
                style={{backgroundColor: "rgb(159, 252, 204)"}}
                aria-label="First name" 
                name="I2_37"  
                value={inputValues.I2_37}
                onChange={changeData} 
                />
              </div>
            </div>
          </div>
      </div>
    </div>
    <div className="container-fluid border mt-3 div_main4">
<div className="row" >
  <div className="col-lg-4 border-end d-flex justify-content-center"style={{backgroundColor: "rgb(189, 254, 243)"}}>
    <h5><b>TOTAL CURRENT LIABILITIES</b></h5>
  </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input 
          style={{backgroundColor: "rgb(189, 254, 243)"}}
          type="text" 
          className="form-control" 
          aria-label="First name" 
          name="B2_38"
          value={inputValues.B2_38}
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
          style={{backgroundColor: "rgb(189, 254, 243)"}}
          aria-label="First name" 
          name="C2_38"  
          value={inputValues.C2_38}
          onChange={changeData}
          />

        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input 
          style={{backgroundColor: "rgb(189, 254, 243)"}}
          type="text" 
          className="form-control" 
         aria-label="First name" 
          name="D2_38"  
          value={inputValues.D2_38}
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
          style={{backgroundColor: "rgb(189, 254, 243)"}}
          aria-label="First name" 
          name="E2_38"  
          value={inputValues.E2_38}
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
          style={{backgroundColor: "rgb(189, 254, 243)"}}
          aria-label="First name" 
          name="F2_38" 
          value={inputValues.F2_38}
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
          style={{backgroundColor: "rgb(189, 254, 243)"}}
          aria-label="First name" 
          name="G2_38"  
          value={inputValues.G2_38}
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
          style={{backgroundColor: "rgb(189, 254, 243)"}}
          aria-label="First name" 
          name="H2_38"  
          value={inputValues.H2_38}
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
          style={{backgroundColor: "rgb(189, 254, 243)"}}
          aria-label="First name" 
          name="I2_38"  
          value={inputValues.I2_38}
          onChange={changeData} 
          />
        </div>
      </div>
    </div>
</div>
</div>

     {/* ------------------------------- OTHER INCOME / EXPENCE----------------------------------------------- */}


     <div className="container-fluid border mt-3">
        <div className="row" style={{backgroundColor:"rgb(224, 231, 231)"}}>
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h5 style={{color:"blue"}}>DEFFERRED LIABILITIES</h5>
          </div>
        </div>
    </div>
    <div className="container-fluid border mt-3">
      <div className="row">
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h6>TERM LOAN IOB
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
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
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="C2_40"
                value={inputValues.C2_40}
                onChange={changeData}  />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
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
                <input type="number" 
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
                <input type="number" 
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
                <input type="number" 
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
                <input type="number" 
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
                <input type="number" 
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
    <div className="container-fluid border mt-3">
      <div className="row">
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h6>Term Loan Other Banks
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
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
                <input type="number" 
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
                <input type="number" 
                className="form-control" 
                placeholder="Rs." aria-label="First name" 
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
                <input type="number" 
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
                <input type="number" 
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
                <input type="number" 
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
                <input type="number" 
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
                <input type="number" 
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
    
<div className="container-fluid border mt-3">
<div className="row">
    <div className="col-lg-4 border-end d-flex justify-content-center">
      <h6>Term Loan Institution
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="number" 
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
          <input type="number" 
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
          <input type="number" 
          className="form-control" 
          placeholder="Rs." aria-label="First name" 
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
          <input type="number" 
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
          <input type="number" 
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
          <input type="number" 
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
          <input type="number" 
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
          <input type="number" 
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


    <div className="container-fluid border mt-3 div_main4">
      <div className="row" >
        <div className="col-lg-4 border-end d-flex justify-content-center"style={{backgroundColor: "rgb(188, 245, 185"}}>
          <h5>Other Long Term-Liabilities</h5>
        </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                style={{backgroundColor: "rgb(188, 245, 185"}}
                type="text" 
                className="form-control" 
                aria-label="First name" 
                name="B2_43"
                value={inputValues.B2_43}
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
                style={{backgroundColor: "rgb(188, 245, 185"}}
                aria-label="First name" 
                name="C2_43"  
                value={inputValues.C2_43}
                onChange={changeData}
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                style={{backgroundColor: "rgb(188, 245, 185"}}
                type="text" 
                className="form-control" 
               aria-label="First name" 
                name="D2_43"  
                value={inputValues.D2_43}
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
                style={{backgroundColor: "rgb(188, 245, 185"}}
                aria-label="First name" 
                name="E2_43"  
                value={inputValues.E2_43}
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
                style={{backgroundColor: "rgb(188, 245, 185"}}
                aria-label="First name" 
                name="F2_43" 
                value={inputValues.F2_43}
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
                style={{backgroundColor: "rgb(188, 245, 185"}}
                aria-label="First name" 
                name="G2_43"  
                value={inputValues.G2_43}
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
                style={{backgroundColor: "rgb(188, 245, 185"}}
                aria-label="First name" 
                name="H2_43"  
                value={inputValues.H2_43}
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
                style={{backgroundColor: "rgb(188, 245, 185"}}
                aria-label="First name" 
                name="I2_43"  
                value={inputValues.I2_43}
                onChange={changeData} 
                />
              </div>
            </div>
          </div>
      </div>
    </div>

    <div className="container-fluid border mt-3 div_main4">
      <div className="row" >
        <div className="col-lg-4 border-end d-flex justify-content-center"style={{backgroundColor: "rgb(189, 254, 243)"}}>
          <h5>LONG TERM LIABILITIES</h5>
        </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                style={{backgroundColor: "rgb(189, 254, 243)"}}
                type="text" 
                className="form-control" 
                aria-label="First name" 
                name="B2_44"
                value={inputValues.B2_44}
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
                style={{backgroundColor: "rgb(189, 254, 243)"}}
                aria-label="First name" 
                name="C2_44"  
                value={inputValues.C2_44}
                onChange={changeData}
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                style={{backgroundColor: "rgb(189, 254, 243)"}}
                type="text" 
                className="form-control" 
               aria-label="First name" 
                name="D2_44"  
                value={inputValues.D2_44}
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
                style={{backgroundColor: "rgb(189, 254, 243)"}}
                aria-label="First name" 
                name="E2_44"  
                value={inputValues.E2_44}
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
                style={{backgroundColor: "rgb(189, 254, 243)"}}
                aria-label="First name" 
                name="F2_44" 
                value={inputValues.F2_44}
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
                style={{backgroundColor: "rgb(189, 254, 243)"}}
                aria-label="First name" 
                name="G2_44"  
                value={inputValues.G2_44}
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
                style={{backgroundColor: "rgb(189, 254, 243)"}}
                aria-label="First name" 
                name="H2_44"  
                value={inputValues.H2_44}
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
                style={{backgroundColor: "rgb(189, 254, 243)"}}
                aria-label="First name" 
                name="I2_44"  
                value={inputValues.I2_44}
                onChange={changeData} 
                />
              </div>
            </div>
          </div>
      </div>
    </div>

    <div className="container-fluid border mt-3 div_main4">
      <div className="row" >
        <div className="col-lg-4 border-end d-flex justify-content-center"style={{backgroundColor: "rgb(189, 254, 243)"}}>
          <h5>TOTAL OUTSIDE LIABILITIES</h5>
        </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                style={{backgroundColor: "rgb(189, 254, 243)"}}
                type="text" 
                className="form-control" 
                aria-label="First name" 
                name="B2_45"
                value={inputValues.B2_45}
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
                style={{backgroundColor: "rgb(189, 254, 243)"}}
                aria-label="First name" 
                name="C2_45"  
                value={inputValues.C2_45}
                onChange={changeData}
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                style={{backgroundColor: "rgb(189, 254, 243)"}}
                type="text" 
                className="form-control" 
               aria-label="First name" 
                name="D2_45"  
                value={inputValues.D2_45}
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
               style={{backgroundColor: "rgb(189, 254, 243)"}}
                aria-label="First name" 
                name="E2_45"  
                value={inputValues.E2_45}
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
                style={{backgroundColor: "rgb(189, 254, 243)"}}
                aria-label="First name" 
                name="F2_45" 
                value={inputValues.F2_45}
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
                style={{backgroundColor: "rgb(189, 254, 243)"}}
                aria-label="First name" 
                name="G2_45"  
                value={inputValues.G2_45}
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
                style={{backgroundColor: "rgb(189, 254, 243)"}}
                aria-label="First name" 
                name="H2_45"  
                value={inputValues.H2_45}
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
                style={{backgroundColor: "rgb(189, 254, 243)"}}
                aria-label="First name" 
                name="I2_45"  
                value={inputValues.I2_45}
                onChange={changeData} 
                />
              </div>
            </div>
          </div>
      </div>
    </div>

    {/*---------------------------------------- INTANGIBLE ASSETS -------------------------------------*/}

<div className="container-fluid border mt-3">
        <div className="row" style={{backgroundColor:"rgb(224, 231, 231)"}}>
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h5 style={{color:"blue"}}>CAPITAL & SURPLUS</h5>
          </div>
        </div>
    </div>
    <div className="container-fluid border mt-3">
      <div className="row">
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h6>Paid Up Capital
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
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
                <input type="number" 
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
                <input type="number" 
                className="form-control" 
                placeholder="Rs." aria-label="First name" 
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
                <input type="number" 
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
                <input type="number" 
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
                <input type="number" 
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
                <input type="number" 
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
                <input type="number" 
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
    <div className="container-fluid border mt-3">
      <div className="row">
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h6>Reserves and Surplus
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
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
                <input type="number" 
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
                <input type="number" 
                className="form-control" 
                placeholder="Rs." aria-label="First name" 
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
                <input type="number" 
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
                <input type="number" 
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
                <input type="number" 
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
                <input type="number" 
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
                <input type="number" 
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
    <div className="container-fluid border mt-3">
      <div className="row">
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h6>Profit & Loss a/c
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
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
                <input type="number" 
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
                <input type="number" 
                className="form-control" 
                placeholder="Rs." aria-label="First name" 
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
                <input type="number" 
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
                <input type="number" 
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
                <input type="number" 
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
                <input type="number" 
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
                <input type="number" 
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
    <div className="container-fluid border mt-3 div_main4">
      <div className="row" >
        <div className="col-lg-4 border-end d-flex justify-content-center"style={{backgroundColor: "rgb(238, 193, 255)"}}>
          <h5>NET WORTH</h5>
        </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                style={{backgroundColor: "rgb(238, 193, 255)"}}
                type="text" 
                className="form-control" 
                aria-label="First name" 
                name="B2_50"
                value={inputValues.B2_50}
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
                style={{backgroundColor: "rgb(238, 193, 255)"}}
                aria-label="First name" 
                name="C2_50"  
                value={inputValues.C2_50}
                onChange={changeData}
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                style={{backgroundColor: "rgb(238, 193, 255)"}}
                type="text" 
                className="form-control" 
               aria-label="First name" 
                name="D2_50"  
                value={inputValues.D2_50}
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
                style={{backgroundColor: "rgb(238, 193, 255)"}}
                aria-label="First name" 
                name="E2_50"  
                value={inputValues.E2_50}
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
                style={{backgroundColor: "rgb(238, 193, 255)"}}
                aria-label="First name" 
                name="F2_50" 
                value={inputValues.F2_50}
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
                style={{backgroundColor: "rgb(238, 193, 255)"}}
                aria-label="First name" 
                name="G2_50"  
                value={inputValues.G2_50}
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
                style={{backgroundColor: "rgb(238, 193, 255)"}}
                aria-label="First name" 
                name="H2_50"  
                value={inputValues.H2_50}
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
                style={{backgroundColor: "rgb(238, 193, 255)"}}
                aria-label="First name" 
                name="I2_50"  
                value={inputValues.I2_50}
                onChange={changeData} 
                />
              </div>
            </div>
          </div>
      </div>
    </div>
    <div className="container-fluid border mt-3 div_main4">
      <div className="row" >
        <div className="col-lg-4 border-end d-flex justify-content-center"style={{backgroundColor: "rgb(247, 197, 237)"}}>
          <h5><b>TOTAL LIABILITIES</b></h5>
        </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                style={{backgroundColor: "rgb(247, 197, 237)"}}
                type="text" 
                className="form-control" 
                aria-label="First name" 
                name="B2_51"
                value={inputValues.B2_51}
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
                style={{backgroundColor: "rgb(247, 197, 237)"}}
                aria-label="First name" 
                name="C2_51"  
                value={inputValues.C2_51}
                onChange={changeData}
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                style={{backgroundColor: "rgb(247, 197, 237)"}}
                type="text" 
                className="form-control" 
               aria-label="First name" 
                name="D2_51"  
                value={inputValues.D2_51}
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
                style={{backgroundColor: "rgb(247, 197, 237)"}}
                aria-label="First name" 
                name="E2_51"  
                value={inputValues.E2_51}
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
                style={{backgroundColor: "rgb(247, 197, 237)"}}
                aria-label="First name" 
                name="F2_51" 
                value={inputValues.F2_51}
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
                style={{backgroundColor: "rgb(247, 197, 237)"}}
                aria-label="First name" 
                name="G2_51"  
                value={inputValues.G2_51}
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
                style={{backgroundColor: "rgb(247, 197, 237)"}}
                aria-label="First name" 
                name="H2_51"  
                value={inputValues.H2_51}
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
                style={{backgroundColor: "rgb(247, 197, 237)"}}
                aria-label="First name" 
                name="I2_51"  
                value={inputValues.I2_51}
                onChange={changeData} 
                />
              </div>
            </div>
          </div>
      </div>
    </div>





</div>
 

    
  );
  
}

export default Opstmt;

