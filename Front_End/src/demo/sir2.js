// Opstmt.js
import React, { useEffect, useState } from 'react';
import axios from 'axios'


function Opstmt({inputValues, setInputValues}) {
  
    




    let [tot2020,setTot2020]=useState({});
    let [prefix, setPrefix] = useState("");

    const uploadSum = async (data) => {
      try {
          const { name, namePrefix } = data;
          const user_id = localStorage.getItem("user_id");

        let sum = parseFloat(inputValues[namePrefix + "_7"] || 0) + parseFloat(inputValues[namePrefix + "_8"] || 0) + parseFloat(inputValues[namePrefix + "_9"] || 0);
        console.log(`>>>>>>${sum}`);
         if(sum!=""){
          // setTot2020(tot2020+=parseInt(value))
          const res = await fetch("http://127.0.0.1:8000/api/save_opstmt/", {
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify( {
              cell_id:name, cell_value:sum,user_id:user_id
          })
        })
        console.log('Response:', res); // Log the response data
         }
          
      } catch (error) {

          console.error('Error:', error); // Log any errors that occur during the request
      }
  };



    
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


          if(name.includes("_7") || name.includes("_8") || name.includes("_9")) {
            setPrefix(name.split("_")[0]);
          }

          
         if(value!=""){
          // setTot2020(tot2020+=parseInt(value))
          const res = await fetch("http://127.0.0.1:8000/api/save_opstmt/", {
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


 useEffect(()=>{
  console.log(tot2020);
    const total = parseFloat(inputValues[prefix + "_7"] || 0) + parseFloat(inputValues[prefix + "_8"] || 0) + parseFloat(inputValues[prefix + "_9"] || 0);
    setTot2020(total);
    setTot2020({
      ...tot2020,
      [[prefix + "_10"]]: total.toString()
    });
    uploadSum({ name: prefix + "_10", namePrefix: prefix});
 },[prefix, inputValues])
 

  return (
<div style={{ marginTop: 25 }}>
  
      <div className="container-fluid border d-flex justify-content-center div_1">
        <h2 className="navbar-brand">Astral India Ltd</h2>
      </div>

      <div className="container-fluid border mt-3">
        <div className="row">
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h5>Operating Statement</h5>
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
            <h5 >NET SALES</h5>
          </div>
        </div>
    </div>
    <div className="container-fluid border mt-3">
      <div className="row">
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h6>Sales/ Receipts- Domestic
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
                        name="B1_7"
                        value={inputValues.B1_7}
                        onChange={changeData}
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
                        name="C1_7"
                        value={inputValues.C1_7}
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
                name="D1_7"  
                value={inputValues.D1_7}
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
                name="E1_7"  
                value={inputValues.E1_7}
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
                name="F1_7"  
                value={inputValues.F1_7}
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
                name="G1_7" 
                value={inputValues.G1_7}
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
                name="H1_7"  
                value={inputValues.H1_7}
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
                name="I1_7"  
                value={inputValues.I1_7}
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
            <h6>Sales Exports
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="B1_8"  
                value={inputValues.B1_8}
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
                name="C1_8"
                value={inputValues.C1_8}
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
                name="D1_8"  
                value={inputValues.D1_8}
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
                name="E1_8"  
                value={inputValues.E1_8}
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
                name="F1_8" 
                value={inputValues.F1_8}
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
                name="G1_8"  
                value={inputValues.G1_8}
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
                name="H1_8"  
                value={inputValues.H1_8}
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
                name="I1_8"  
                value={inputValues.I1_8}
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
            <h6>Others
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="B1_9"
                value={inputValues.B1_9}
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
                name="C1_9"  
                value={inputValues.C1_9}
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
                name="D1_9"  
                value={inputValues.D1_9}
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
                name="E1_9"  
                value={inputValues.E1_9}
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
                name="F1_9" 
                value={inputValues.F1_9}
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
                name="G1_9"  
                value={inputValues.G1_9}
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
                name="H1_9"  
                value={inputValues.H1_9}
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
                name="I1_9"  
                value={inputValues.I1_9}
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
          <h5><b>TOTAL SALES</b></h5>
        </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                style={{backgroundColor: "rgb(169, 255, 251)",fontWeight: "bold"}}
                type="text" 
                className="form-control" 
                aria-label="First name" 
                name="B1_10"
                value={tot2020.B1_10}
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
                style={{backgroundColor: "rgb(169, 255, 251)",fontWeight: "bold"}}
                aria-label="First name" 
                name="C1_10"  
                value={tot2020.C1_10}
                onChange={changeData}
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                style={{backgroundColor: "rgb(169, 255, 251)",fontWeight: "bold"}}
                type="text" 
                className="form-control" 
               aria-label="First name" 
                name="D1_10"  
                value={tot2020.D1_10}
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
                style={{backgroundColor: "rgb(169, 255, 251)",fontWeight: "bold"}}
                aria-label="First name" 
                name="E1_10"  
                value={tot2020.E1_10}
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
               style={{backgroundColor: "rgb(169, 255, 251)",fontWeight: "bold"}}
                aria-label="First name" 
                name="F1_10" 
                value={tot2020.F1_10}
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
                style={{backgroundColor: "rgb(169, 255, 251)",fontWeight: "bold"}}
                aria-label="First name" 
                name="G1_10"  
                value={tot2020.G1_10}
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
                style={{backgroundColor: "rgb(169, 255, 251)",fontWeight: "bold"}}
                aria-label="First name" 
                name="H1_10"  
                value={tot2020.H1_10}
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
                style={{backgroundColor: "rgb(169, 255, 251)",fontWeight: "bold"}}
                aria-label="First name" 
                name="I1_10"  
                value={tot2020.I1_10}
                onChange={changeData} 
                />
              </div>
            </div>
          </div>
      </div>
    </div>


    {/*------------------------------------- COST OF SALES--------------------------------------------------- */}

    <div className="container-fluid border mt-3">
        <div className="row" style={{backgroundColor:"rgb(224, 231, 231)"}}>
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h5 >COST OF SALES</h5>
          </div>
        </div>
        <div className="row border-end border-top">
           <div className="col-lg-4  d-flex justify-content-center" >
           <h6 style={{color:"red"}}>Add Opening Stock</h6>
          </div>
        </div>

    </div>
    <div className="container-fluid border mt-3">
      <div className="row">
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h6>Finishing Goods
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
                        name="B1_13"
                        value={inputValues.B1_13}
                        onChange={changeData}
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
                        name="C1_13"
                        value={inputValues.C1_13}
                        onChange={changeData}
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
                name="D1_13"  
                value={inputValues.D1_13}
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
                name="E1_13"  
                value={inputValues.E1_13}
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
                name="F1_13"  
                value={inputValues.F1_13}
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
                name="G1_13" 
                value={inputValues.G1_13}
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
                name="H1_13"  
                value={inputValues.H1_13}
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
                name="I1_13"  
                value={inputValues.I1_13}
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
            <h6>Work in Process
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="B1_14"  
                value={inputValues.B1_14}
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
                name="C1_14"
                value={inputValues.C1_14}
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
                name="D1_14"  
                value={inputValues.D1_14}
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
                name="E1_14"  
                value={inputValues.E1_14}
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
                name="F1_14" 
                value={inputValues.F1_14}
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
                name="G1_14"  
                value={inputValues.G1_14}
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
                name="H1_14"  
                value={inputValues.H1_14}
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
                name="I1_14"  
                value={inputValues.I1_14}
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
            <h6>Raw Material
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs."
                aria-label="First name" 
                name="B1_15"
                value={inputValues.B1_15}
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
                name="C1_15"  
                value={inputValues.C1_15}
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
                name="D1_15"  
                value={inputValues.D1_15}
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
                name="E1_15"  
                value={inputValues.E1_15}
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
                name="F1_15" 
                value={inputValues.F1_15}
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
                name="G1_15"  
                value={inputValues.G1_15}
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
                name="H1_15"  
                value={inputValues.H1_15}
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
                name="I1_15"  
                value={inputValues.I1_15}
                onChange={changeData} 
                />
              </div>
            </div>
          </div>
      </div>
    </div>
    
    <div className="row" style={{backgroundColor: "rgb(239, 147, 221)",marginTop: 10}}>
           <div className="col-lg-4 border-end border-top d-flex justify-content-center" >
           <h6>PURCHASE / RM</h6>
          </div>
          
    </div>

    <div className="container-fluid border mt-3">
      <div className="row">
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h6>Power & Fuel
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
                        name="B1_17"
                        value={inputValues.B1_17}
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
                        name="C1_17"
                        value={inputValues.C1_17}
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
                name="D1_17"  
                value={inputValues.D1_17}
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
                name="E1_17"  
                value={inputValues.E1_17}
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
                name="F1_17"  
                value={inputValues.F1_17}
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
                name="G1_17" 
                value={inputValues.G1_17}
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
                name="H1_17"  
                value={inputValues.H1_17}
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
                name="I1_17"  
                value={inputValues.I1_17}
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
            <h6>Direct labour
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="B1_18"  
                value={inputValues.B1_18}
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
                name="C1_18"
                value={inputValues.C1_18}
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
                name="D1_18"  
                value={inputValues.D1_18}
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
                name="E1_18"  
                value={inputValues.E1_18}
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
                name="F1_18" 
                value={inputValues.F1_18}
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
                name="G1_18"  
                value={inputValues.G1_18}
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
                name="H1_18"  
                value={inputValues.H1_18}
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
                name="I1_18"  
                value={inputValues.I1_18}
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
            <h6>Repairs and Maintenence
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs."
                aria-label="First name" 
                name="B1_19"
                value={inputValues.B1_19}
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
                name="C1_19"  
                value={inputValues.C1_19}
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
                name="D1_19"  
                value={inputValues.D1_19}
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
                name="E1_19"  
                value={inputValues.E1_19}
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
                name="F1_19" 
                value={inputValues.F1_19}
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
                name="G1_19"  
                value={inputValues.G1_19}
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
                name="H1_19"  
                value={inputValues.H1_19}
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
                name="I1_19"  
                value={inputValues.I1_19}
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
            <h6>MFG / Direct Expenses
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs."
                aria-label="First name" 
                name="B1_20"
                value={inputValues.B1_20}
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
                name="C1_20"  
                value={inputValues.C1_20}
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
                name="D1_20"  
                value={inputValues.D1_20}
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
                name="E1_20"  
                value={inputValues.E1_20}
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
                name="F1_20" 
                value={inputValues.F1_20}
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
                name="G1_20"  
                value={inputValues.G1_20}
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
                name="H1_20"  
                value={inputValues.H1_20}
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
                name="I1_20"  
                value={inputValues.I1_20}
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
            <h6>Depreciation
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs."
                aria-label="First name" 
                name="B1_21"
                value={inputValues.B1_21}
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
                name="C1_21"  
                value={inputValues.C1_21}
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
                name="D1_21"  
                value={inputValues.D1_21}
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
                name="E1_21"  
                value={inputValues.E1_21}
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
                name="F1_21" 
                value={inputValues.F1_21}
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
                name="G1_21"  
                value={inputValues.G1_21}
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
                name="H1_21"  
                value={inputValues.H1_21}
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
                name="I1_21"  
                value={inputValues.I1_21}
                onChange={changeData} 
                />
              </div>
            </div>
          </div>
      </div>
    </div>


  {/* ------------------------------- LESS : CLOSING STOCK ----------------------------------------------- */}


    <div className="container-fluid border mt-3">
        <div className="row" style={{backgroundColor:"rgb(224, 231, 231)"}}>
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h5 style={{color:"red"}}>LESS : Closing Stock</h5>
          </div>
        </div>
    </div>
    <div className="container-fluid border mt-3">
      <div className="row">
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h6>Finishing Goods
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
                        name="B1_23"
                        value={inputValues.B1_23}
                        onChange={changeData}
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
                        name="C1_23"
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
                type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="D1_23"  
                value={inputValues.D1_23}
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
                name="E1_23"  
                value={inputValues.E1_23}
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
                name="F1_23"  
                value={inputValues.F1_23}
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
                name="G1_23" 
                value={inputValues.G1_23}
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
                name="H1_23"  
                value={inputValues.H1_23}
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
                name="I1_23"  
                value={inputValues.I1_23}
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
            <h6>Work-in-Process
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="B1_24"  
                value={inputValues.B1_24}
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
                name="C1_24"
                value={inputValues.C1_24}
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
                name="D1_24"  
                value={inputValues.D1_24}
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
                name="E1_24"  
                value={inputValues.E1_24}
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
                name="F1_24" 
                value={inputValues.F1_24}
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
                name="G1_24"  
                value={inputValues.G1_24}
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
                name="H1_24"  
                value={inputValues.H1_24}
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
                name="I1_24"  
                value={inputValues.I1_24}
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
            <h6>Raw Material
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="B1_25"
                value={inputValues.B1_25}
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
                name="C1_25"  
                value={inputValues.C1_25}
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
                name="D1_25"  
                value={inputValues.D1_25}
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
                name="E1_25"  
                value={inputValues.E1_25}
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
                name="F1_25" 
                value={inputValues.F1_25}
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
                name="G1_25"  
                value={inputValues.G1_25}
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
                name="H1_25"  
                value={inputValues.H1_25}
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
                name="I1_25"  
                value={inputValues.I1_25}
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
          <h5><b>COST OF SALES</b></h5>
        </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                style={{backgroundColor: "rgb(159, 252, 204)"}}
                type="text" 
                className="form-control" 
                aria-label="First name" 
                name="B1_26"
                value={inputValues.B1_26}
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
                name="C1_26"  
                value={inputValues.C1_26}
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
                name="D1_26"  
                value={inputValues.D1_26}
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
                name="E1_26"  
                value={inputValues.E1_26}
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
                name="F1_26" 
                value={inputValues.F1_26}
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
                name="G1_26"  
                value={inputValues.G1_26}
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
                name="H1_26"  
                value={inputValues.H1_26}
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
                name="I1_26"  
                value={inputValues.I1_26}
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
          <h5><b>COST OF PRODUCTION</b></h5>
        </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                type="text" 
                className="form-control" 
                aria-label="First name" 
                name="B1_27"
                value={inputValues.B1_27}
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
                name="C1_27"  
                value={inputValues.C1_27}
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
                name="D1_27"  
                value={inputValues.D1_27}
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
                name="E1_27"  
                value={inputValues.E1_27}
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
                name="F1_27" 
                value={inputValues.F1_27}
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
                name="G1_27"  
                value={inputValues.G1_27}
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
                name="H1_27"  
                value={inputValues.H1_27}
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
                name="I1_27"  
                value={inputValues.I1_27}
                onChange={changeData} 
                />
              </div>
            </div>
          </div>
      </div>
    </div>
    <div className="container-fluid border mt-3 div_main4">
      <div className="row" >
        <div className="col-lg-4 border-end d-flex justify-content-center"style={{backgroundColor: "rgb(159, 252, 204)"}}>
          <h5><b>GROSS PROFIT(+)/LOSS(-)</b></h5>
        </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                style={{backgroundColor: "rgb(159, 252, 204)"}}
                type="text" 
                className="form-control" 
                aria-label="First name" 
                name="B1_28"
                value={inputValues.B1_28}
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
                name="C1_28"  
                value={inputValues.C1_28}
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
                name="D1_28"  
                value={inputValues.D1_28}
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
                name="E1_28"  
                value={inputValues.E1_28}
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
                name="F1_28" 
                value={inputValues.F1_28}
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
                name="G1_28"  
                value={inputValues.G1_28}
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
                name="H1_28"  
                value={inputValues.H1_28}
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
                name="I1_28"  
                value={inputValues.I1_28}
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
            <h6>Selling & Adm Expenses
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="B1_29"  
                value={inputValues.B1_29}
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
                name="C1_29"
                value={inputValues.C1_29}
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
                name="D1_29"  
                value={inputValues.D1_29}
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
                name="E1_29"  
                value={inputValues.E1_29}
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
                name="F1_29" 
                value={inputValues.F1_29}
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
                name="G1_29"  
                value={inputValues.G1_29}
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
                name="H1_29"  
                value={inputValues.H1_29}
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
                name="I1_29"  
                value={inputValues.I1_29}
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
            <h6>Interest & Fin Charges
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="B1_30"
                value={inputValues.B1_30}
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
                name="C1_30"  
                value={inputValues.C1_30}
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
                name="D1_30"  
                value={inputValues.D1_30}
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
                name="E1_30"  
                value={inputValues.E1_30}
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
                name="F1_30" 
                value={inputValues.F1_30}
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
                name="G1_30"  
                value={inputValues.G1_30}
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
                name="H1_30"  
                value={inputValues.H1_30}
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
                name="I1_30"  
                value={inputValues.I1_30}
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
        <div className="col-lg-4 border-end d-flex justify-content-center"style={{backgroundColor: "rgb(159, 252, 204)"}}>
          <h5><b>OPERATING PROFIT/LOSS</b></h5>
        </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                style={{backgroundColor: "rgb(159, 252, 204)"}}
                type="text" 
                className="form-control" 
                aria-label="First name" 
                name="B1_31"
                value={inputValues.B1_31}
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
                name="C1_31"  
                value={inputValues.C1_31}
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
                name="D1_31"  
                value={inputValues.D1_31}
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
                name="E1_31"  
                value={inputValues.E1_31}
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
                name="F1_31" 
                value={inputValues.F1_31}
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
                name="G1_31"  
                value={inputValues.G1_31}
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
                name="H1_31"  
                value={inputValues.H1_31}
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
                name="I1_31"  
                value={inputValues.I1_31}
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
            <h5 >OTHER INCOME / EXPENCE</h5>
          </div>
        </div>
    </div>
    <div className="container-fluid border mt-3">
      <div className="row">
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h6>Add Other income
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="B1_33"  
                value={inputValues.B1_33}
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
                name="C1_33"
                value={inputValues.C1_33}
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
                name="D1_33"  
                value={inputValues.D1_33}
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
                name="E1_33"  
                value={inputValues.E1_33}
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
                name="F1_33" 
                value={inputValues.F1_33}
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
                name="G1_33"  
                value={inputValues.G1_33}
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
                name="H1_33"  
                value={inputValues.H1_33}
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
                name="I1_33"  
                value={inputValues.I1_33}
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
            <h6>Less Other Expenses
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="B1_34"
                value={inputValues.B1_34}
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
                name="C1_34"  
                value={inputValues.C1_34}
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
                name="D1_34"  
                value={inputValues.D1_34}
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
                name="E1_34"  
                value={inputValues.E1_34}
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
                name="F1_34" 
                value={inputValues.F1_34}
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
                name="G1_34"  
                value={inputValues.G1_34}
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
                name="H1_34"  
                value={inputValues.H1_34}
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
                name="I1_34"  
                value={inputValues.I1_34}
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
          <h5><b>PROFIT BEFORE TAX</b></h5>
        </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                style={{backgroundColor: "rgb(238, 193, 255)"}}
                type="text" 
                className="form-control" 
                aria-label="First name" 
                name="B1_35"
                value={inputValues.B1_35}
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
                name="C1_35"  
                value={inputValues.C1_35}
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
                name="D1_35"  
                value={inputValues.D1_35}
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
                name="E1_35"  
                value={inputValues.E1_35}
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
                name="F1_35" 
                value={inputValues.F1_35}
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
                name="G1_35"  
                value={inputValues.G1_35}
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
                name="H1_35"  
                value={inputValues.H1_35}
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
                name="I1_35"  
                value={inputValues.I1_35}
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
            <h6>Provision for Taxes
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="B1_36"
                value={inputValues.B1_36}
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
                name="C1_36"  
                value={inputValues.C1_36}
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
                name="D1_36"  
                value={inputValues.D1_36}
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
                name="E1_36"  
                value={inputValues.E1_36}
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
                name="F1_36" 
                value={inputValues.F1_36}
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
                name="G1_36"  
                value={inputValues.G1_36}
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
                name="H1_36"  
                value={inputValues.H1_36}
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
                name="I1_36"  
                value={inputValues.I1_36}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          
      </div>
    </div>


    {/*-------------------------------------- LINE ( 37 - 39 ) -------------------------------------------------*/}


    <div className="container-fluid border mt-3 div_main4">
      <div className="row" >
        <div className="col-lg-4 border-end d-flex justify-content-center"style={{backgroundColor: "rgb(246, 230, 178)"}}>
          <h5><b>Net Profit after Tax / Loss</b></h5>
        </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                style={{backgroundColor: "rgb(246, 230, 178)"}}
                type="text" 
                className="form-control" 
                aria-label="First name" 
                name="B1_37"
                value={inputValues.B1_37}
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
                style={{backgroundColor: "rgb(246, 230, 178)"}}
                aria-label="First name" 
                name="C1_37"  
                value={inputValues.C1_37}
                onChange={changeData}
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                style={{backgroundColor: "rgb(246, 230, 178)"}}
                type="text" 
                className="form-control" 
               aria-label="First name" 
                name="D1_37"  
                value={inputValues.D1_37}
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
                style={{backgroundColor: "rgb(246, 230, 178)"}}
                aria-label="First name" 
                name="E1_37"  
                value={inputValues.E1_37}
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
                style={{backgroundColor: "rgb(246, 230, 178)"}}
                aria-label="First name" 
                name="F1_37" 
                value={inputValues.F1_37}
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
                style={{backgroundColor: "rgb(246, 230, 178)"}}
                aria-label="First name" 
                name="G1_37"  
                value={inputValues.G1_37}
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
                style={{backgroundColor: "rgb(246, 230, 178)"}}
                aria-label="First name" 
                name="H1_37"  
                value={inputValues.H1_37}
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
                style={{backgroundColor: "rgb(246, 230, 178)"}}
                aria-label="First name" 
                name="I1_37"  
                value={inputValues.I1_37}
                onChange={changeData} 
                />
              </div>
            </div>
          </div>
      </div>
    </div>

    <div className="container-fluid border mt-3 div_main4">
      <div className="row" >
        <div className="col-lg-4 border-end d-flex justify-content-center"style={{backgroundColor: "rgb(238, 193, 255)"}}>
          <h5><b>P B D I T</b></h5>
        </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                style={{backgroundColor: "rgb(238, 193, 255)"}}
                type="text" 
                className="form-control" 
                aria-label="First name" 
                name="B1_38"
                value={inputValues.B1_38}
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
                name="C1_38"  
                value={inputValues.C1_38}
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
                name="D1_38"  
                value={inputValues.D1_38}
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
                name="E1_38"  
                value={inputValues.E1_38}
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
                name="F1_38" 
                value={inputValues.F1_38}
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
                name="G1_38"  
                value={inputValues.G1_38}
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
                name="H1_38"  
                value={inputValues.H1_38}
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
                name="I1_38"  
                value={inputValues.I1_38}
                onChange={changeData} 
                />
              </div>
            </div>
          </div>
      </div>
    </div>

    <div className="container-fluid border mt-3 div_main4">
      <div className="row" >
        <div className="col-lg-4 border-end d-flex justify-content-center"style={{backgroundColor: "rgb(188, 245, 185)"}}>
          <h5><b>Cash Accruals</b></h5>
        </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                style={{backgroundColor: "rgb(188, 245, 185)"}}
                type="text" 
                className="form-control" 
                aria-label="First name" 
                name="B1_39"
                value={inputValues.B1_39}
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
                style={{backgroundColor: "rgb(188, 245, 185)"}}
                aria-label="First name" 
                name="C1_39"  
                value={inputValues.C1_39}
                onChange={changeData}
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                style={{backgroundColor: "rgb(188, 245, 185)"}}
                type="text" 
                className="form-control" 
               aria-label="First name" 
                name="D1_39"  
                value={inputValues.D1_39}
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
                style={{backgroundColor: "rgb(188, 245, 185)"}}
                aria-label="First name" 
                name="E1_39"  
                value={inputValues.E1_39}
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
                style={{backgroundColor: "rgb(188, 245, 185)"}}
                aria-label="First name" 
                name="F1_39" 
                value={inputValues.F1_39}
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
                style={{backgroundColor: "rgb(188, 245, 185)"}}
                aria-label="First name" 
                name="G1_39"  
                value={inputValues.G1_39}
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
                style={{backgroundColor: "rgb(188, 245, 185)"}}
                aria-label="First name" 
                name="H1_39"  
                value={inputValues.H1_39}
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
                style={{backgroundColor: "rgb(188, 245, 185)"}}
                aria-label="First name" 
                name="I1_39"  
                value={inputValues.I1_39}
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
            <h6>Dividend / Drawings
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="B1_40"
                value={inputValues.B1_40}
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
                name="C1_40"  
                value={inputValues.C1_40}
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
                name="D1_40"  
                value={inputValues.D1_40}
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
                name="E1_40"  
                value={inputValues.E1_40}
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
                name="F1_40" 
                value={inputValues.F1_40}
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
                name="G1_40"  
                value={inputValues.G1_40}
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
                name="H1_40"  
                value={inputValues.H1_40}
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
                name="I1_40"  
                value={inputValues.I1_40}
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
          <h5><b>Retained Profit</b></h5>
        </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                style={{backgroundColor: "rgb(238, 193, 255)"}}
                type="text" 
                className="form-control" 
                aria-label="First name" 
                name="B1_41"
                value={inputValues.B1_41}
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
                name="C1_41"  
                value={inputValues.C1_41}
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
                name="D1_41"  
                value={inputValues.D1_41}
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
                name="E1_41"  
                value={inputValues.E1_41}
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
                name="F1_41" 
                value={inputValues.F1_41}
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
                name="G1_40"  
                value={inputValues.G1_40}
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
                name="H1_40"  
                value={inputValues.H1_40}
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
                name="I1_40"  
                value={inputValues.I1_40}
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
          <h5><b>Net Cash Accrual</b></h5>
        </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                style={{backgroundColor: "rgb(247, 197, 237)"}}
                type="text" 
                className="form-control" 
                aria-label="First name" 
                name="B1_38"
                value={inputValues.B1_38}
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
                name="C1_38"  
                value={inputValues.C1_38}
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
                name="D1_38"  
                value={inputValues.D1_38}
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
                name="E1_38"  
                value={inputValues.E1_38}
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
                name="F1_38" 
                value={inputValues.F1_38}
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
                name="G1_38"  
                value={inputValues.G1_38}
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
                name="H1_38"  
                value={inputValues.H1_38}
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
                name="I1_38"  
                value={inputValues.I1_38}
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
