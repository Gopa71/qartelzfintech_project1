import {useContext} from 'react'
import React from "react";
import { useRef } from "react";
import jwt_decode from "jwt-decode"
import AuthContext from '../../context/AuthContext'
// import "font-awesome/css/font-awesome.min.css";
import img from "../../assets/images/qartelz-logo.png";
import { NavLink } from "react-router-dom";

import "./Navbarr.css";

const Navbarr = () => {
  const menuRef = useRef();

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  const {user, logoutUser} = useContext(AuthContext)
  const token = localStorage.getItem("authTokens")

  if (token){
    const decoded = jwt_decode(token) 
    var user_id = decoded.user_id
  }
  return (
    <div >
      <div className="  flex   mx-6 md:mx-28">
        <div className="flex  items-center  ">
            <div>
          <img className="h-20  " src={img} />
          </div>

          <div className="nav__menu " >  
           
          </div>

          <div className="nav__menu " >  
            <nav className=" text-l lg-text-xl " ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list gap-1 ">
              {token === null && 
                 <>
                   <li className="nav-item">
                     <NavLink className="nav-link" to="/login"><b>Login</b></NavLink>
                   </li>
                   <li className="nav-item">
                     <NavLink className="nav-link" to="/register"><b>Register</b></NavLink>
                   </li>
                 </>
                 }
                 {token !== null && 
                   <>
                <li>
                  <NavLink className="nav__item " to="/home">
                    Home
                  </NavLink>
                </li>

                <li>
                  <NavLink className="nav__item " to="/opstmt">
                    Opstmt
                  </NavLink>
                </li>

                <li>
                  <NavLink className="nav__item text-sm" to="/asset">
                    Asset & Liab
                  </NavLink>
                </li>

                <li>
                  <NavLink className="nav__item text-sm" to="/ocaocl">
                    OCA & OCL
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav__item text-sm" to="/ratios">
                    Ratios
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav__item text-sm" to="/wctlassmt">
                    WC TL ASSMT
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav__item text-sm" to="/ff">
                    FF
                  </NavLink>
                </li>

                <li>
                  <NavLink className="nav__item text-sm" to="/kfi">
                    KFI
                  </NavLink>
                </li>
                </>
                 }
              </ul>
            </nav>
          </div>
        </div>

        <div className="hidden sm:flex  items-center justify-center gap-3">
          <a href="/Contact">
            <button className=" rounded-full ml-3  text-red-800 border border-solid border-red-800 w-28 p-1">
              Contact us
            </button>
          </a>

          <a href="/">
            <button className="text-white  rounded-full border border-solid bg-red-800 w-28 p-1">
              Logout
            </button>
          </a>
        </div>
        <div
          className="flex sm:hidden  items-center justify-center text-xl"
          onClick={menuToggle}
        >
          <i class="fa fa-bars" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
};

export default Navbarr;
