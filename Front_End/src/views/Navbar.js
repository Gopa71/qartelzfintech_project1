import {useContext} from 'react'
import jwt_decode from "jwt-decode"
import AuthContext from '../context/AuthContext'
import { Link } from 'react-router-dom'
import img from '../assets/images/qartelz-logo.png'

function Navbar() {

  const {user, logoutUser} = useContext(AuthContext)
  const token = localStorage.getItem("authTokens")

  if (token){
    const decoded = jwt_decode(token) 
    var user_id = decoded.user_id
  }

  return (
    <div>
     <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img style={{width:"180px", padding:"6px"}} src={img} alt="" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
     
        {token === null && 
        <>
          <li className="nav-item">
            <Link className="nav-link" to="/login"><b>Login</b></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register"><b>Register</b></Link>
          </li>
        </>
        }

        {token !== null && 
        <>
         <li className="nav-item">
            <Link className="nav-link" to="/home"><b>Home</b></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/opstmt"><b>Opstmt</b></Link>            
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/assetLiab"><b>Asset&Liab</b></Link>            
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/ocaocl"><b>Oca&Ocl</b></Link>            
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/ratios"><b>Ratios</b></Link>            
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/wc"><b>Wc Tl Assmt</b></Link>            
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/ff"><b>FF</b></Link>            
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/kfi"><b>KFI</b></Link>            
          </li>
        </>
        }   
      </ul>
    </div>
    {/* Move the Logout and Dashboard links outside the collapse div */}
    <div>
      {token !== null && 
      <>
      
        <a className="nav-link" onClick={logoutUser} style={{cursor:"pointer"}}>Logout</a>
        {/* <a className="nav-link" href="/dashboard">Dashboard</a> */}
      </>
      }
    </div>
  </div>
</nav>



    </div>
  )
}

export default Navbar