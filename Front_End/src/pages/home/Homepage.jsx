import React from 'react'
// import Navbar from "../../components/navbar/Navbar";
import "./Homepage.css";
import firstImage from "../../assets/images/credit.png";
import secondImage from "../../assets/images/creditrep.jpg";
import Visual1 from "../../assets/images/visual1.png";
import Visual2 from "../../assets/images/visual2.png";
import Visual3 from "../../assets/images/visual3.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container } from "reactstrap";
import Navbar from '../../views/Navbar';
import Navbarr from '../../views/navbarr/Navbarr';
import Footer from '../../views/Footer/footer';

function Homepage() {
  return (
    <>
    <Navbarr/>
    <div className='rooot'>
    <div className="flex  justify-center">

    <div className="container  mx-56 p-10  mt-24 bg-white rounded-3xl">
        <div className="text-wrapper ">
        <h1 className="font-bold ">Forensic Analysis of</h1>
        <h1 className="font-bold">Financial Statements and</h1>
        <h1 className="font-bold">Data Visualization</h1>
        </div>
        <div className="paragraph-wrapper">
        <p>
            A comprehensive tool for analyzing Financial Statements and
            Assessing Risk with advanced rating models.
        </p>
        </div>

        <button className="Btn ">Get Started</button>
    </div>
    </div>

    

    <div className=" mt-48  ">
        <div className="gradient-tex">
        <h1 className="raleway font-bold   text-3xl  text-center">
            Data Visualization and Data Analysis with Power BI
        </h1>
        <h1 className="raleway font-bold text-[48px] mt-[-10px] text-center mb-3"></h1>
        </div>

        <h1 className="otherfon1 font-bold text-md text-black  opacity-75 text-center ">
        Discover the powerful solution for seamless data processing,
        </h1>
        <h1 className="otherfon1 font-bold text-md  text-black  opacity-75  mt-[-1px] text-center ">
        insightful visualizations, and robust analytical capabilities,
        </h1>
        <h1 className="otherfon1 font-bold text-md   text-black  opacity-75 mt-[-1px] mb-10 text-center ">
        empowers to make data-driven decisions.
        </h1>
    </div>

    <div className=" px-32 mb-10 rounded-3xl">
        <div className="backgroundvis ">
        <img
            className="h-56 mt-24  rounded-2xl ml-[-30px]"
            src={Visual1}
            alt=""
        />
        <img
            className="h-56 rounded-2xl  mt-[-400px] "
            src={Visual2}
            alt=""
        />
        <img
            className="h-56  mt-24 rounded-2xl  mr-[-30px]"
            src={Visual3}
            alt=""
        />
        </div>
    </div>

    <div>
        <Row className="gap-3">
        <Col className="bg-white rounded-xl ml-40  ">
            <div className="p-10">
            <div className=" font-bold">Credit Analyst for a Bank</div>

            <p>
                As a credit analyst for a bank, you assess the creditworthiness
                of loan applicants by analyzing their financial history and risk
                profile to make lending decisions.
            </p>
            <img className="h-56 mt-4  rounded-2xl" src={firstImage} alt="" />
            </div>
        </Col>

        <Col className="bg-white rounded-xl mr-40 ">
            <div className="p-10">
            <div className=" font-bold">
                Financial Analyst for a Rating Agency
            </div>

            <p>
                As a financial analyst for a rating agency, you are tasked with
                evaluating the client's financial health and creditworthiness to
                determine their credit rating.
            </p>
            <img
                className="h-56 mt-4  rounded-2xl "
                src={secondImage}
                alt=""
            />
            </div>
        </Col>
        </Row>
    </div>

    <div className=" mt-24 mx-auto px-10 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6   ">
        <div className="otherfon p-8 rounded-xl">
            <h1 className=" text-2xl text-white font-bold mb-2 ">
            Cash Flow Valuation Model
            </h1>
            <h2 className="text-slate-200 font-light text-lg leading-5">
            Free Cash Flow Valuation Model estimates the value of an asset
            based on its projected future cash flows, discounted to present
            value.
            </h2>
        </div>
        <div className="otherfon p-8 rounded-xl">
            <h1 className="text-2xl font-bold  text-white">
            Multi Beta Model (CAPM)
            </h1>
            <h2 className="text-slate-200 font-light leading-5 text-lg">
            A Multifactor model (CAPM) assesses asset returns using multiple
            risk factors to better explain and predict performance.
            </h2>
        </div>
        <div className="otherfon p-8 rounded-xl">
            <h1 className="text-2xl font-bold  text-white">
            {" "}
            Valuation of Companies and Shares
            </h1>
            <h2 className="text-slate-200 font-light text-lg leading-5">
            A Scenario simulation evaluates the valuation of companies and
            shares by modeling various potential future outcomes.
            </h2>
        </div>
        </div>
    </div>
    <Footer/>
    </div>
    </>
  )
}

export default Homepage
