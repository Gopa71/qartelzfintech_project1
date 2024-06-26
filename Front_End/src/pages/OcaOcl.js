// Opstmt.js
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import "../styles.css";
import Footer from "../views/Footer/footer";
import jwtDecode from 'jwt-decode'


import { AppContext } from "../AppContext";
import Navbarr from "../views/navbarr/Navbarr";

function Ocl() {
  const token = localStorage.getItem("authTokens")

  if (token){
    const decode = jwtDecode(token)
    var username = decode.username
    

  }
  const {
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
  } = useContext(AppContext);

  const [prefix, setPrefix] = useState("");
  // const [tot15, setTot15] = useState({});
  // const [tot23, setTot23] = useState({});
  // const [tot31, setTot31] = useState({});
  // const [tot37, setTot37] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user_id = localStorage.getItem("user_id");
        const response = await axios.get(
          `http://127.0.0.1:8000/api/save_oca/?user_id=${user_id}`
        );
        const data = response.data; // Assuming response.data is an object with keys matching inputValues keys
        setInputValues(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call fetchData when component mounts
  }, []); // Empty dependency array ensures it runs only once when component mounts

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
      if (
        name.includes("_7") ||
        name.includes("_8") ||
        name.includes("_9") ||
        name.includes("_10") ||
        name.includes("_11") ||
        name.includes("_12") ||
        name.includes("_13") ||
        name.includes("_14") ||
        name.includes("_17") ||
        name.includes("_18") ||
        name.includes("_19") ||
        name.includes("_20") ||
        name.includes("_21") ||
        name.includes("_22") ||
        name.includes("_25") ||
        name.includes("_26") ||
        name.includes("_27") ||
        name.includes("_28") ||
        name.includes("_29") ||
        name.includes("_30") ||
        name.includes("_33") ||
        name.includes("_34") ||
        name.includes("_35") ||
        name.includes("_36")
      ) {
        setPrefix(name.split("_")[0]);
      }

      if (value != "") {
        const res = await fetch("http://127.0.0.1:8000/api/save_oca/", {
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

  // ------------------------------------ TOTAL OTHER CURRENT ASSETS (START1 ) ---------------------------------------------

  const uploadSum = async (data) => {
    try {
      const { name, namePrefix } = data;
      const user_id = localStorage.getItem("user_id");

      let sum =
        parseFloat(inputValues[namePrefix + "_7"] || 0) +
        parseFloat(inputValues[namePrefix + "_8"] || 0) +
        parseFloat(inputValues[namePrefix + "_9"] || 0) +
        parseFloat(inputValues[namePrefix + "_10"] || 0) +
        parseFloat(inputValues[namePrefix + "_11"] || 0) +
        parseFloat(inputValues[namePrefix + "_12"] || 0) +
        parseFloat(inputValues[namePrefix + "_13"] || 0) +
        parseFloat(inputValues[namePrefix + "_14"] || 0);

      console.log(`>>>>>>${sum}`);

      if (sum !== 0) {
        const res = await fetch("http://127.0.0.1:8000/api/save_oca/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            cell_id: name,
            cell_value: sum,
            user_id: user_id,
          }),
        });
        console.log("Response:", res); // Log the response data
      }
    } catch (error) {
      console.error("Error:", error); // Log any errors that occur during the request
    }
  };

  useEffect(() => {
    console.log(tot15);
    const total =
      parseFloat(inputValues[prefix + "_7"] || 0) +
      parseFloat(inputValues[prefix + "_8"] || 0) +
      parseFloat(inputValues[prefix + "_9"] || 0) +
      parseFloat(inputValues[prefix + "_10"] || 0) +
      parseFloat(inputValues[prefix + "_11"] || 0) +
      parseFloat(inputValues[prefix + "_12"] || 0) +
      parseFloat(inputValues[prefix + "_13"] || 0) +
      parseFloat(inputValues[prefix + "_14"] || 0);
    setTot15(total);
    setTot15({
      ...tot15,
      [[prefix + "_15"]]: total.toString(),
    });
    uploadSum({ name: prefix + "_15", namePrefix: prefix });
  }, [prefix, inputValues]);

  // ------------------------------------ TOTAL OTHER CURRENT ASSETS ( END1 ) ---------------------------------------------

  // ------------------------------------ TOTAL NON CURRENT ASSETS (START2 ) ---------------------------------------------

  const uploadSum2 = async (data) => {
    try {
      const { name, namePrefix } = data;
      const user_id = localStorage.getItem("user_id");

      let sum2 =
        parseFloat(inputValues[namePrefix + "_17"] || 0) +
        parseFloat(inputValues[namePrefix + "_18"] || 0) +
        parseFloat(inputValues[namePrefix + "_19"] || 0) +
        parseFloat(inputValues[namePrefix + "_20"] || 0) +
        parseFloat(inputValues[namePrefix + "_21"] || 0) +
        parseFloat(inputValues[namePrefix + "_22"] || 0);

      if (sum2 !== 0) {
        const res = await fetch("http://127.0.0.1:8000/api/save_oca/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            cell_id: name,
            cell_value: sum2,
            user_id: user_id,
          }),
        });
        console.log("Response:", res); // Log the response data
      }
    } catch (error) {
      console.error("Error:", error); // Log any errors that occur during the request
    }
  };

  useEffect(() => {
    console.log(tot23);
    const total23 =
      parseFloat(inputValues[prefix + "_17"] || 0) +
      parseFloat(inputValues[prefix + "_18"] || 0) +
      parseFloat(inputValues[prefix + "_19"] || 0) +
      parseFloat(inputValues[prefix + "_20"] || 0) +
      parseFloat(inputValues[prefix + "_21"] || 0) +
      parseFloat(inputValues[prefix + "_22"] || 0);
    setTot23(total23);
    setTot23({
      ...tot23,
      [[prefix + "_23"]]: total23.toString(),
    });
    uploadSum2({ name: prefix + "_23", namePrefix: prefix });
  }, [prefix, inputValues]);

  // ------------------------------------ TOTAL NON CURRENT ASSETS ( END2 ) ---------------------------------------------

  // ------------------------------- TOTAL OTHER CURRENT LIABILITIES (START3 ) ---------------------------------------------

  const uploadSum3 = async (data) => {
    try {
      const { name, namePrefix } = data;
      const user_id = localStorage.getItem("user_id");

      let sum3 =
        parseFloat(inputValues[namePrefix + "_25"] || 0) +
        parseFloat(inputValues[namePrefix + "_26"] || 0) +
        parseFloat(inputValues[namePrefix + "_27"] || 0) +
        parseFloat(inputValues[namePrefix + "_28"] || 0) +
        parseFloat(inputValues[namePrefix + "_29"] || 0) +
        parseFloat(inputValues[namePrefix + "_30"] || 0);

      if (sum3 !== 0) {
        const res = await fetch("http://127.0.0.1:8000/api/save_oca/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            cell_id: name,
            cell_value: sum3,
            user_id: user_id,
          }),
        });
        console.log("Response:", res); // Log the response data
      }
    } catch (error) {
      console.error("Error:", error); // Log any errors that occur during the request
    }
  };

  useEffect(() => {
    console.log(tot31);
    const total31 =
      parseFloat(inputValues[prefix + "_25"] || 0) +
      parseFloat(inputValues[prefix + "_26"] || 0) +
      parseFloat(inputValues[prefix + "_27"] || 0) +
      parseFloat(inputValues[prefix + "_28"] || 0) +
      parseFloat(inputValues[prefix + "_29"] || 0) +
      parseFloat(inputValues[prefix + "_30"] || 0);
    setTot31(total31);
    setTot31({
      ...tot31,
      [[prefix + "_31"]]: total31.toString(),
    });
    uploadSum3({ name: prefix + "_31", namePrefix: prefix });
  }, [prefix, inputValues]);

  // -------------------------------- TOTAL OTHER CURRENT LIABILITIES ( END3 ) ---------------------------------------------

  // ------------------------------- TOTAL OTHER TERM LIABILITIES (START4 ) ---------------------------------------------

  const uploadSum4 = async (data) => {
    try {
      const { name, namePrefix } = data;
      const user_id = localStorage.getItem("user_id");

      let sum4 =
        parseFloat(inputValues[namePrefix + "_33"] || 0) +
        parseFloat(inputValues[namePrefix + "_34"] || 0) +
        parseFloat(inputValues[namePrefix + "_35"] || 0) +
        parseFloat(inputValues[namePrefix + "_36"] || 0);

      if (sum4 !== 0) {
        const res = await fetch("http://127.0.0.1:8000/api/save_oca/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            cell_id: name,
            cell_value: sum4,
            user_id: user_id,
          }),
        });
        console.log("Response:", res); // Log the response data
      }
    } catch (error) {
      console.error("Error:", error); // Log any errors that occur during the request
    }
  };

  useEffect(() => {
    console.log(tot37);
    const total37 =
      parseFloat(inputValues[prefix + "_33"] || 0) +
      parseFloat(inputValues[prefix + "_34"] || 0) +
      parseFloat(inputValues[prefix + "_35"] || 0) +
      parseFloat(inputValues[prefix + "_36"] || 0);
    setTot37(total37);
    setTot37({
      ...tot37,
      [[prefix + "_37"]]: total37.toString(),
    });
    uploadSum4({ name: prefix + "_37", namePrefix: prefix });
  }, [prefix, inputValues]);

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

  // -------------------------------- TOTAL OTHER TERM LIABILITIES ( END4 ) ---------------------------------------------

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
            <div className="col-lg-4 border-end border-black  d-flex justify-content-center">
              <h5>DETAILS OF OCA, NCA, OCL, OTL</h5>
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
              <h5>OTHER CURRENT ASSETS</h5>
            </div>
          </div>
        </div>

        <div className="container-fluid border-1 border-black mt-3">
          <div className="row">
            <div className="col-lg-4 border-end border-black  d-flex justify-content-center">
              <h6>Cash & Bank balance</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Rs."
                    aria-label="First name"
                    name="B3_7"
                    value={inputValues.B3_7}
                    onChange={changeData}
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
                    name="C3_7"
                    value={inputValues.C3_7}
                    onChange={changeData}
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
                    name="D3_7"
                    value={inputValues.D3_7}
                    onChange={changeData}
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
                    name="E3_7"
                    value={inputValues.E3_7}
                    onChange={changeData}
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
                    name="F3_7"
                    value={inputValues.F3_7}
                    onChange={changeData}
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
                    name="G3_7"
                    value={inputValues.G3_7}
                    onChange={changeData}
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
                    name="H3_7"
                    value={inputValues.H3_7}
                    onChange={changeData}
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
                    name="I3_7"
                    value={inputValues.I3_7}
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
              <h6>Fixed deposits with Bank</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Rs."
                    aria-label="First name"
                    name="B3_8"
                    value={inputValues.B3_8}
                    onChange={changeData}
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
                    name="C3_8"
                    value={inputValues.C3_8}
                    onChange={changeData}
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
                    name="D3_8"
                    value={inputValues.D3_8}
                    onChange={changeData}
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
                    name="E3_8"
                    value={inputValues.E3_8}
                    onChange={changeData}
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
                    name="F3_8"
                    value={inputValues.F3_8}
                    onChange={changeData}
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
                    name="G3_8"
                    value={inputValues.G3_8}
                    onChange={changeData}
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
                    name="H3_8"
                    value={inputValues.H3_8}
                    onChange={changeData}
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
                    name="I3_8"
                    value={inputValues.I3_8}
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
              <h6>Advance Income Tax/Sales Tax</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Rs."
                    aria-label="First name"
                    name="B3_9"
                    value={inputValues.B3_9}
                    onChange={changeData}
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
                    name="C3_9"
                    value={inputValues.C3_9}
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
                    name="D3_9"
                    value={inputValues.D3_9}
                    onChange={changeData}
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
                    name="E3_9"
                    value={inputValues.E3_9}
                    onChange={changeData}
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
                    name="F3_9"
                    value={inputValues.F3_9}
                    onChange={changeData}
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
                    name="G3_9"
                    value={inputValues.G3_9}
                    onChange={changeData}
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
                    name="H3_9"
                    value={inputValues.H3_9}
                    onChange={changeData}
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
                    name="I3_9"
                    value={inputValues.I3_9}
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
              <h6>Advance to staff/Directors</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Rs."
                    aria-label="First name"
                    name="B3_10"
                    value={inputValues.B3_10}
                    onChange={changeData}
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
                    name="C3_10"
                    value={inputValues.C3_10}
                    onChange={changeData}
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
                    name="D3_10"
                    value={inputValues.D3_10}
                    onChange={changeData}
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
                    name="E3_10"
                    value={inputValues.E3_10}
                    onChange={changeData}
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
                    name="F3_10"
                    value={inputValues.F3_10}
                    onChange={changeData}
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
                    name="G3_10"
                    value={inputValues.G3_10}
                    onChange={changeData}
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
                    name="H3_10"
                    value={inputValues.H3_10}
                    onChange={changeData}
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
                    name="I3_10"
                    value={inputValues.I3_10}
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
              <h6>Advance to Suppliers</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Rs."
                    aria-label="First name"
                    name="B3_11"
                    value={inputValues.B3_11}
                    onChange={changeData}
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
                    name="C3_11"
                    value={inputValues.C3_11}
                    onChange={changeData}
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
                    name="D3_11"
                    value={inputValues.D3_11}
                    onChange={changeData}
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
                    name="E3_11"
                    value={inputValues.E3_11}
                    onChange={changeData}
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
                    name="F3_11"
                    value={inputValues.F3_11}
                    onChange={changeData}
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
                    name="G3_11"
                    value={inputValues.G3_11}
                    onChange={changeData}
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
                    name="H3_11"
                    value={inputValues.H3_11}
                    onChange={changeData}
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
                    name="I3_11"
                    value={inputValues.I3_11}
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
              <h6>Excise / Customs / Tuf</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Rs."
                    aria-label="First name"
                    name="B3_12"
                    value={inputValues.B3_12}
                    onChange={changeData}
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
                    name="C3_12"
                    value={inputValues.C3_12}
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
                    name="D3_12"
                    value={inputValues.D3_12}
                    onChange={changeData}
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
                    name="E3_12"
                    value={inputValues.E3_12}
                    onChange={changeData}
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
                    name="F3_12"
                    value={inputValues.F3_12}
                    onChange={changeData}
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
                    name="G3_12"
                    value={inputValues.G3_12}
                    onChange={changeData}
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
                    name="H3_12"
                    value={inputValues.H3_12}
                    onChange={changeData}
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
                    name="I3_12"
                    value={inputValues.I3_12}
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
              <h6>Loans and advances</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Rs."
                    aria-label="First name"
                    name="B3_13"
                    value={inputValues.B3_13}
                    onChange={changeData}
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
                    name="C3_13"
                    value={inputValues.C3_13}
                    onChange={changeData}
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
                    name="D3_13"
                    value={inputValues.D3_13}
                    onChange={changeData}
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
                    name="E3_13"
                    value={inputValues.E3_13}
                    onChange={changeData}
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
                    name="F3_13"
                    value={inputValues.F3_13}
                    onChange={changeData}
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
                    name="G3_13"
                    value={inputValues.G3_13}
                    onChange={changeData}
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
                    name="H3_13"
                    value={inputValues.H3_13}
                    onChange={changeData}
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
                    name="I3_13"
                    value={inputValues.I3_13}
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
              <h6>Others</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Rs."
                    aria-label="First name"
                    name="B3_14"
                    value={inputValues.B3_14}
                    onChange={changeData}
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
                    name="C3_14"
                    value={inputValues.C3_14}
                    onChange={changeData}
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
                    name="D3_14"
                    value={inputValues.D3_14}
                    onChange={changeData}
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
                    name="E3_14"
                    value={inputValues.E3_14}
                    onChange={changeData}
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
                    name="F3_14"
                    value={inputValues.F3_14}
                    onChange={changeData}
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
                    name="G3_14"
                    value={inputValues.G3_14}
                    onChange={changeData}
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
                    name="H3_14"
                    value={inputValues.H3_14}
                    onChange={changeData}
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
                    name="I3_14"
                    value={inputValues.I3_14}
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
              <h5>
                <b>TOTAL OTHER CURRENT ASSETS</b>
              </h5>
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
                    name="B3_15"
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
                    style={{
                      backgroundColor: "rgb(169, 255, 251)",
                      fontWeight: "bold",
                    }}
                    aria-label="First name"
                    name="C3_15"
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
                    style={{
                      backgroundColor: "rgb(169, 255, 251)",
                      fontWeight: "bold",
                    }}
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="D3_15"
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
                    style={{
                      backgroundColor: "rgb(169, 255, 251)",
                      fontWeight: "bold",
                    }}
                    aria-label="First name"
                    name="E3_15"
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
                    style={{
                      backgroundColor: "rgb(169, 255, 251)",
                      fontWeight: "bold",
                    }}
                    aria-label="First name"
                    name="F3_15"
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
                    style={{
                      backgroundColor: "rgb(169, 255, 251)",
                      fontWeight: "bold",
                    }}
                    aria-label="First name"
                    name="G3_15"
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
                    style={{
                      backgroundColor: "rgb(169, 255, 251)",
                      fontWeight: "bold",
                    }}
                    aria-label="First name"
                    name="H3_15"
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
                    style={{
                      backgroundColor: "rgb(169, 255, 251)",
                      fontWeight: "bold",
                    }}
                    aria-label="First name"
                    name="I3_15"
                    value={tot15.I3_15}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*------------------------------------- COST OF SALES--------------------------------------------------- */}

        <div className="container-fluid border-1 border-black mt-3">
          <div
            className="row"
            style={{ backgroundColor: "rgb(224, 231, 231)" }}
          >
            <div className="col-lg-4 border-end border-black  d-flex justify-content-center">
              <h5>OTHER NON CURRENT ASSETS</h5>
            </div>
          </div>
        </div>
        <div className="container-fluid border-1 border-black mt-3">
          <div className="row">
            <div className="col-lg-4 border-end border-black  d-flex justify-content-center">
              <h6>Security deposits EB etc</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Rs."
                    aria-label="First name"
                    name="B3_17"
                    value={inputValues.B3_17}
                    onChange={changeData}
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
                    name="C3_17"
                    value={inputValues.C3_17}
                    onChange={changeData}
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
                    name="D3_17"
                    value={inputValues.D3_17}
                    onChange={changeData}
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
                    name="E3_17"
                    value={inputValues.E3_17}
                    onChange={changeData}
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
                    name="F3_17"
                    value={inputValues.F3_17}
                    onChange={changeData}
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
                    name="G3_17"
                    value={inputValues.G3_17}
                    onChange={changeData}
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
                    name="H3_17"
                    value={inputValues.H3_17}
                    onChange={changeData}
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
                    name="I3_17"
                    value={inputValues.I3_17}
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
              <h6>Loan and advances</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Rs."
                    aria-label="First name"
                    name="B3_18"
                    value={inputValues.B3_18}
                    onChange={changeData}
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
                    name="C3_18"
                    value={inputValues.C3_18}
                    onChange={changeData}
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
                    name="D3_18"
                    value={inputValues.D3_18}
                    onChange={changeData}
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
                    name="E3_18"
                    value={inputValues.E3_18}
                    onChange={changeData}
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
                    name="F3_18"
                    value={inputValues.F3_18}
                    onChange={changeData}
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
                    name="G3_18"
                    value={inputValues.G3_18}
                    onChange={changeData}
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
                    name="H3_18"
                    value={inputValues.H3_18}
                    onChange={changeData}
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
                    name="I3_18"
                    value={inputValues.I3_18}
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
              <h6>Sundry Debtors greater 6months</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Rs."
                    aria-label="First name"
                    name="B3_19"
                    value={inputValues.B3_19}
                    onChange={changeData}
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
                    name="C3_19"
                    value={inputValues.C3_19}
                    onChange={changeData}
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
                    name="D3_19"
                    value={inputValues.D3_19}
                    onChange={changeData}
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
                    name="E3_19"
                    value={inputValues.E3_19}
                    onChange={changeData}
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
                    name="F3_19"
                    value={inputValues.F3_19}
                    onChange={changeData}
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
                    name="G3_19"
                    value={inputValues.G3_19}
                    onChange={changeData}
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
                    name="H3_19"
                    value={inputValues.H3_19}
                    onChange={changeData}
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
                    name="I3_19"
                    value={inputValues.I3_19}
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
              <h6>Investment</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Rs."
                    aria-label="First name"
                    name="B3_20"
                    value={inputValues.B3_20}
                    onChange={changeData}
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
                    name="C3_20"
                    value={inputValues.C3_20}
                    onChange={changeData}
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
                    name="D3_20"
                    value={inputValues.D3_20}
                    onChange={changeData}
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
                    name="E3_20"
                    value={inputValues.E3_20}
                    onChange={changeData}
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
                    name="F3_20"
                    value={inputValues.F3_20}
                    onChange={changeData}
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
                    name="G3_20"
                    value={inputValues.G3_20}
                    onChange={changeData}
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
                    name="H3_20"
                    value={inputValues.H3_20}
                    onChange={changeData}
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
                    name="I3_20"
                    value={inputValues.I3_20}
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
              <h6>Interest accured on loans</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Rs."
                    aria-label="First name"
                    name="B3_21"
                    value={inputValues.B3_21}
                    onChange={changeData}
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
                    name="C3_21"
                    value={inputValues.C3_21}
                    onChange={changeData}
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
                    name="D3_21"
                    value={inputValues.D3_21}
                    onChange={changeData}
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
                    name="E3_21"
                    value={inputValues.E3_21}
                    onChange={changeData}
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
                    name="F3_21"
                    value={inputValues.F3_21}
                    onChange={changeData}
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
                    name="G3_21"
                    value={inputValues.G3_21}
                    onChange={changeData}
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
                    name="H3_21"
                    value={inputValues.H3_21}
                    onChange={changeData}
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
                    name="I3_21"
                    value={inputValues.I3_21}
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
              <h6>Others</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Rs."
                    aria-label="First name"
                    name="B3_22"
                    value={inputValues.B3_22}
                    onChange={changeData}
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
                    name="C3_22"
                    value={inputValues.C3_22}
                    onChange={changeData}
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
                    name="D3_22"
                    value={inputValues.D3_22}
                    onChange={changeData}
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
                    name="E3_22"
                    value={inputValues.E3_22}
                    onChange={changeData}
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
                    name="F3_22"
                    value={inputValues.F3_22}
                    onChange={changeData}
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
                    name="G3_22"
                    value={inputValues.G3_22}
                    onChange={changeData}
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
                    name="H3_22"
                    value={inputValues.H3_22}
                    onChange={changeData}
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
                    name="I3_22"
                    value={inputValues.I3_22}
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
              <h5>
                <b>TOTAL NON CURRENT ASSETS</b>
              </h5>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    style={{
                      backgroundColor: "rgb(159, 252, 204)",
                      fontWeight: "bold",
                    }}
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B3_23"
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
                    style={{
                      backgroundColor: "rgb(159, 252, 204)",
                      fontWeight: "bold",
                    }}
                    aria-label="First name"
                    name="C3_23"
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
                    style={{
                      backgroundColor: "rgb(159, 252, 204)",
                      fontWeight: "bold",
                    }}
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="D3_23"
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
                    style={{
                      backgroundColor: "rgb(159, 252, 204)",
                      fontWeight: "bold",
                    }}
                    aria-label="First name"
                    name="E3_23"
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
                    style={{
                      backgroundColor: "rgb(159, 252, 204)",
                      fontWeight: "bold",
                    }}
                    aria-label="First name"
                    name="F3_23"
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
                    style={{
                      backgroundColor: "rgb(159, 252, 204)",
                      fontWeight: "bold",
                    }}
                    aria-label="First name"
                    name="G3_23"
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
                    style={{
                      backgroundColor: "rgb(159, 252, 204)",
                      fontWeight: "bold",
                    }}
                    aria-label="First name"
                    name="H3_23"
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
                    style={{
                      backgroundColor: "rgb(159, 252, 204)",
                      fontWeight: "bold",
                    }}
                    aria-label="First name"
                    name="I3_23"
                    value={tot23.I3_23}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*---------------------------------------- OTHER CURRENT LIABILITIES -------------------------------------*/}

        <div className="container-fluid border-1 border-black mt-3">
          <div
            className="row"
            style={{ backgroundColor: "rgb(224, 231, 231)" }}
          >
            <div className="col-lg-4 border-end border-black  d-flex justify-content-center">
              <h5>OTHER CURRENT LIABILITIES</h5>
            </div>
          </div>
        </div>

        <div className="container-fluid border-1 border-black mt-3">
          <div className="row">
            <div className="col-lg-4 border-end border-black  d-flex justify-content-center">
              <h6>TL INST due in 1 year IOB</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Rs."
                    aria-label="First name"
                    name="B3_25"
                    value={inputValues.B3_25}
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
                    name="C3_25"
                    value={inputValues.C3_25}
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
                    name="D3_25"
                    value={inputValues.D3_25}
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
                    name="E3_25"
                    value={inputValues.E3_25}
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
                    name="F3_25"
                    value={inputValues.F3_25}
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
                    name="G3_25"
                    value={inputValues.G3_25}
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
                    name="H3_25"
                    value={inputValues.H3_25}
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
                    name="I3_25"
                    value={inputValues.I3_25}
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
              <h6>TL INST due in 1 year Bank / Inst</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Rs."
                    aria-label="First name"
                    name="B3_26"
                    value={inputValues.B3_26}
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
                    name="C3_26"
                    value={inputValues.C3_26}
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
                    name="D3_26"
                    value={inputValues.D3_26}
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
                    name="E3_26"
                    value={inputValues.E3_26}
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
                    name="F3_26"
                    value={inputValues.F3_26}
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
                    name="G3_26"
                    value={inputValues.G3_26}
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
                    name="H3_26"
                    value={inputValues.H3_26}
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
                    name="I3_26"
                    value={inputValues.I3_26}
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
              <h6>Sundry Creditors Expenses</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Rs."
                    aria-label="First name"
                    name="B3_27"
                    value={inputValues.B3_27}
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
                    name="C3_27"
                    value={inputValues.C3_27}
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
                    name="D3_27"
                    value={inputValues.D3_27}
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
                    name="E3_27"
                    value={inputValues.E3_27}
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
                    name="F3_27"
                    value={inputValues.F3_27}
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
                    name="G3_27"
                    value={inputValues.G3_27}
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
                    name="H3_27"
                    value={inputValues.H3_27}
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
                    name="I3_27"
                    value={inputValues.I3_27}
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
              <h6>Expences Payable</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Rs."
                    aria-label="First name"
                    name="B3_28"
                    value={inputValues.B3_28}
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
                    name="C3_28"
                    value={inputValues.C3_28}
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
                    name="D3_28"
                    value={inputValues.D3_28}
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
                    name="E3_28"
                    value={inputValues.E3_28}
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
                    name="F3_28"
                    value={inputValues.F3_28}
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
                    name="G3_28"
                    value={inputValues.G3_28}
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
                    name="H3_28"
                    value={inputValues.H3_28}
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
                    name="I3_28"
                    value={inputValues.I3_28}
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
              <h6>Provision for Tax etc</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Rs."
                    aria-label="First name"
                    name="B3_29"
                    value={inputValues.B3_29}
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
                    name="C3_29"
                    value={inputValues.C3_29}
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
                    name="D3_29"
                    value={inputValues.D3_29}
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
                    name="E3_29"
                    value={inputValues.E3_29}
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
                    name="F3_29"
                    value={inputValues.F3_29}
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
                    name="G3_29"
                    value={inputValues.G3_29}
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
                    name="H3_29"
                    value={inputValues.H3_29}
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
                    name="I3_29"
                    value={inputValues.I3_29}
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
              <h6>Others</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Rs."
                    aria-label="First name"
                    name="B3_30"
                    value={inputValues.B3_30}
                    onChange={changeData}
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
                    name="C3_30"
                    value={inputValues.C3_30}
                    onChange={changeData}
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
                    name="D3_30"
                    value={inputValues.D3_30}
                    onChange={changeData}
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
                    name="E3_30"
                    value={inputValues.E3_30}
                    onChange={changeData}
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
                    name="F3_30"
                    value={inputValues.F3_30}
                    onChange={changeData}
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
                    name="G3_30"
                    value={inputValues.G3_30}
                    onChange={changeData}
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
                    name="H3_30"
                    value={inputValues.H3_30}
                    onChange={changeData}
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
                    name="I3_30"
                    value={inputValues.I3_30}
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
              <h5>
                <b>TOTAL OTHER CURRENT LIABILITIES</b>
              </h5>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    style={{
                      backgroundColor: "rgb(159, 252, 204)",
                      fontWeight: "bold",
                    }}
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B3_31"
                    value={tot31.B3_31}
                    onChange={changeData}
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
                      backgroundColor: "rgb(159, 252, 204)",
                      fontWeight: "bold",
                    }}
                    aria-label="First name"
                    name="C3_31"
                    value={tot31.C3_31}
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
                      backgroundColor: "rgb(159, 252, 204)",
                      fontWeight: "bold",
                    }}
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="D3_31"
                    value={tot31.D3_31}
                    onChange={changeData}
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
                      backgroundColor: "rgb(159, 252, 204)",
                      fontWeight: "bold",
                    }}
                    aria-label="First name"
                    name="E3_31"
                    value={tot31.E3_31}
                    onChange={changeData}
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
                      backgroundColor: "rgb(159, 252, 204)",
                      fontWeight: "bold",
                    }}
                    aria-label="First name"
                    name="F3_31"
                    value={tot31.F3_31}
                    onChange={changeData}
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
                      backgroundColor: "rgb(159, 252, 204)",
                      fontWeight: "bold",
                    }}
                    aria-label="First name"
                    name="G3_31"
                    value={tot31.G3_31}
                    onChange={changeData}
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
                      backgroundColor: "rgb(159, 252, 204)",
                      fontWeight: "bold",
                    }}
                    aria-label="First name"
                    name="H3_31"
                    value={tot31.H3_31}
                    onChange={changeData}
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
                      backgroundColor: "rgb(159, 252, 204)",
                      fontWeight: "bold",
                    }}
                    aria-label="First name"
                    name="I3_31"
                    value={tot31.I3_31}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*---------------------------------------- OTHER TERM LIABILITIES -------------------------------------*/}

        <div className="container-fluid border-1 border-black mt-3">
          <div className="row">
            <div className="col-lg-4 border-end border-black  d-flex justify-content-center">
              <h5>Other Term Liabilities</h5>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Rs."
                    aria-label="First name"
                    name="B3_32"
                    value={inputValues.B3_32}
                    onChange={changeData}
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
                    name="C3_32"
                    value={inputValues.C3_32}
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
                    name="D3_32"
                    value={inputValues.D3_32}
                    onChange={changeData}
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
                    name="E3_32"
                    value={inputValues.E3_32}
                    onChange={changeData}
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
                    name="F3_32"
                    value={inputValues.F3_32}
                    onChange={changeData}
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
                    name="G3_32"
                    value={inputValues.G3_32}
                    onChange={changeData}
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
                    name="H3_32"
                    value={inputValues.H3_32}
                    onChange={changeData}
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
                    name="I3_32"
                    value={inputValues.I3_32}
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
              <h6>Unsecured Loan Promotors</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Rs."
                    aria-label="First name"
                    name="B3_33"
                    value={inputValues.B3_33}
                    onChange={changeData}
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
                    name="C3_33"
                    value={inputValues.C3_33}
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
                    name="D3_33"
                    value={inputValues.D3_33}
                    onChange={changeData}
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
                    name="E3_33"
                    value={inputValues.E3_33}
                    onChange={changeData}
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
                    name="F3_33"
                    value={inputValues.F3_33}
                    onChange={changeData}
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
                    name="G3_33"
                    value={inputValues.G3_33}
                    onChange={changeData}
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
                    name="H3_33"
                    value={inputValues.H3_33}
                    onChange={changeData}
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
                    name="I3_33"
                    value={inputValues.I3_33}
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
              <h6>Defered Tax</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Rs."
                    aria-label="First name"
                    name="B3_34"
                    value={inputValues.B3_34}
                    onChange={changeData}
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
                    name="C3_34"
                    value={inputValues.C3_34}
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
                    name="D3_34"
                    value={inputValues.D3_34}
                    onChange={changeData}
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
                    name="E3_34"
                    value={inputValues.E3_34}
                    onChange={changeData}
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
                    name="F3_34"
                    value={inputValues.F3_34}
                    onChange={changeData}
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
                    name="G3_34"
                    value={inputValues.G3_34}
                    onChange={changeData}
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
                    name="H3_34"
                    value={inputValues.H3_34}
                    onChange={changeData}
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
                    name="I3_34"
                    value={inputValues.I3_34}
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
              <h6>Security Deposite</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Rs."
                    aria-label="First name"
                    name="B3_35"
                    value={inputValues.B3_35}
                    onChange={changeData}
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
                    name="C3_35"
                    value={inputValues.C3_35}
                    onChange={changeData}
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
                    name="D3_35"
                    value={inputValues.D3_35}
                    onChange={changeData}
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
                    name="E3_35"
                    value={inputValues.E3_35}
                    onChange={changeData}
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
                    name="F3_35"
                    value={inputValues.F3_35}
                    onChange={changeData}
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
                    name="G3_35"
                    value={inputValues.G3_35}
                    onChange={changeData}
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
                    name="H3_35"
                    value={inputValues.H3_35}
                    onChange={changeData}
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
                    name="I3_35"
                    value={inputValues.I3_35}
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
              <h6>Reveluation Reserve</h6>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Rs."
                    aria-label="First name"
                    name="B3_36"
                    value={inputValues.B3_36}
                    onChange={changeData}
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
                    name="C3_36"
                    value={inputValues.C3_36}
                    onChange={changeData}
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
                    name="D3_36"
                    value={inputValues.D3_36}
                    onChange={changeData}
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
                    name="E3_36"
                    value={inputValues.E3_36}
                    onChange={changeData}
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
                    name="F3_36"
                    value={inputValues.F3_36}
                    onChange={changeData}
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
                    name="G3_36"
                    value={inputValues.G3_36}
                    onChange={changeData}
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
                    name="H3_36"
                    value={inputValues.H3_36}
                    onChange={changeData}
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
                    name="I3_36"
                    value={inputValues.I3_36}
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
              <h5>
                <b>TOTAL OTHER TERM LIABILITIES</b>
              </h5>
            </div>
            <div className="col-lg-1 border-start d-flex justify-content-center">
              <div className="row g-3">
                <div className="col">
                  <input
                    style={{
                      backgroundColor: "rgb(159, 252, 204)",
                      fontWeight: "bold",
                    }}
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="B3_37"
                    value={tot37.B3_37}
                    onChange={changeData}
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
                      backgroundColor: "rgb(159, 252, 204)",
                      fontWeight: "bold",
                    }}
                    aria-label="First name"
                    name="C3_37"
                    value={tot37.C3_37}
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
                      backgroundColor: "rgb(159, 252, 204)",
                      fontWeight: "bold",
                    }}
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    name="D3_37"
                    value={tot37.D3_37}
                    onChange={changeData}
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
                      backgroundColor: "rgb(159, 252, 204)",
                      fontWeight: "bold",
                    }}
                    aria-label="First name"
                    name="E3_37"
                    value={tot37.E3_37}
                    onChange={changeData}
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
                      backgroundColor: "rgb(159, 252, 204)",
                      fontWeight: "bold",
                    }}
                    aria-label="First name"
                    name="F3_37"
                    value={tot37.F3_37}
                    onChange={changeData}
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
                      backgroundColor: "rgb(159, 252, 204)",
                      fontWeight: "bold",
                    }}
                    aria-label="First name"
                    name="G3_37"
                    value={tot37.G3_37}
                    onChange={changeData}
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
                      backgroundColor: "rgb(159, 252, 204)",
                      fontWeight: "bold",
                    }}
                    aria-label="First name"
                    name="H3_37"
                    value={tot37.H3_37}
                    onChange={changeData}
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
                      backgroundColor: "rgb(159, 252, 204)",
                      fontWeight: "bold",
                    }}
                    aria-label="First name"
                    name="I3_37"
                    value={tot37.I3_37}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Ocl;
