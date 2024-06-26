import React from "react";
import img from "../../assets/images/fin.png";
import "./footer.css";


const Footer = () => {
  return (
    <footer className=" mt-24 footer1 otherfon7 py-4  ">
      <div className=" mx-auto flex justify-between items-center">
      <div className="relative flex items-center mt-10">
  <div className="shadoww ml-10"></div>
  <img src={img} alt="Logo" className="relative h-24 " />
</div>


        <nav className="text-gray-800 ">
        
          <a href="#" className="mr-4 no-underline  font-bold">
            Home
          </a>
         
          <a href="#" className="mr-4 no-underline font-bold">
            Opstmt
          </a>
          <a href="#" className="mr-4 no-underline font-bold">
            Asset & Liab
          </a>
          <a href="#" className="mr-4 no-underline font-bold">
            OCA & OCL
          </a>
          <a href="#" className="mr-4 no-underline font-bold">
            Ratios
          </a>
          <a href="#" className="mr-4 no-underline font-bold">
            WC TL ASSMT
          </a>
          <a href="#" className="mr-4 no-underline  font-bold">
            FF
          </a>
          <a href="#"  className="mr-4 no-underline font-bold">KFI</a>
        </nav>
        <p className="text-gray-800 mr-10">
          &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
