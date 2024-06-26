import {useState, useEffect} from 'react'
import useAxios from "../utils/useAxios"
import jwtDecode from 'jwt-decode'
import { Link } from 'react-router-dom'
function Dashboard() {

    const [res, setRes] = useState("")
    const api = useAxios();
    const token = localStorage.getItem("authTokens")

    if (token){
      const decode = jwtDecode(token)
      var user_id = decode.user_id
      var username = decode.username
      var full_name = decode.full_name
      var image = decode.image

    }

    useEffect(() => {
      const fetchData = async () => {
        try{
          const response = await api.get("/test/")
          setRes(response.data.response)
        } catch (error) {
          console.log(error);
          setRes("Something went wrong")
        }
      }
      fetchData()
    }, [])

    
    useEffect(() => {
      const fetchPostData = async () => {
        try{
          const response = await api.post("/test/")
          setRes(response.data.response)
        } catch (error) {
          console.log(error);
          setRes("Something went wrong")
        }
      }
      fetchPostData()
    }, [])


  return (
    <div>
      <>
  <div className="container-fluid" style={{ paddingTop: "100px" }}>
    <div className="row">
      <nav className="col-md-2 d-none d-md-block bg-light sidebar mt-4">
        <div className="sidebar-sticky">
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                <span data-feather="home" />
                Dashboard <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
            <Link class="nav-link" to="/opstmt"><b>Opstmt</b></Link>            
            </li>
            <li className="nav-item">
            <Link class="nav-link" to="/assetLiab"><b>Asset&Liab</b></Link>            
            </li>
            <li className="nav-item">
            <Link class="nav-link" to="/ocaocl"><b>Oca&Ocl</b></Link>            
            </li>
            <li className="nav-item">
            <Link class="nav-link" to="/ratio"><b>Ratios</b></Link>            
            </li>
            <li className="nav-item">
            <Link class="nav-link" to="/wc"><b>Wc Tl Assmt</b></Link>            
            </li>
            <li className="nav-item">
            <Link class="nav-link" to="/ff"><b>FF</b></Link>            
            </li>
            <li className="nav-item">
            <Link class="nav-link" to="/kfi"><b>KFI</b></Link>            
            </li>
          </ul>
        </div>
      </nav>
      
      <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
          <h1 className="h2">My Dashboard</h1>
          <span>Hello {username}!</span>
          <div className="btn-toolbar mb-2 mb-md-0">
            <div className="btn-group mr-2">
              <button className="btn btn-sm btn-outline-secondary">
                Share
              </button>
              <button className="btn btn-sm btn-outline-secondary">
                Export
              </button>
            </div>
            <button className="btn btn-sm btn-outline-secondary dropdown-toggle">
              <span data-feather="calendar" />
              This week
            </button>
          </div>
        </div>
        <div className='alert alert-success'>
          <strong>{res}</strong>
        </div>
        <h2>Section title</h2>
        {/* <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Header</th>
                <th>Header</th>
                <th>Header</th>
                <th>Header</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1,001</td>
                <td>Lorem</td>
                <td>ipsum</td>
                <td>dolor</td>
                <td>sit</td>
              </tr>
              <tr>
                <td>1,002</td>
                <td>amet</td>
                <td>consectetur</td>
                <td>adipiscing</td>
                <td>elit</td>
              </tr>
              <tr>
                <td>1,003</td>
                <td>Integer</td>
                <td>nec</td>
                <td>odio</td>
                <td>Praesent</td>
              </tr>
              <tr>
                <td>1,003</td>
                <td>libero</td>
                <td>Sed</td>
                <td>cursus</td>
                <td>ante</td>
              </tr>
              <tr>
                <td>1,004</td>
                <td>dapibus</td>
                <td>diam</td>
                <td>Sed</td>
                <td>nisi</td>
              </tr>
              <tr>
                <td>1,005</td>
                <td>Nulla</td>
                <td>quis</td>
                <td>sem</td>
                <td>at</td>
              </tr>
              <tr>
                <td>1,006</td>
                <td>nibh</td>
                <td>elementum</td>
                <td>imperdiet</td>
                <td>Duis</td>
              </tr>
              <tr>
                <td>1,007</td>
                <td>sagittis</td>
                <td>ipsum</td>
                <td>Praesent</td>
                <td>mauris</td>
              </tr>
              <tr>
                <td>1,008</td>
                <td>Fusce</td>
                <td>nec</td>
                <td>tellus</td>
                <td>sed</td>
              </tr>
              <tr>
                <td>1,009</td>
                <td>augue</td>
                <td>semper</td>
                <td>porta</td>
                <td>Mauris</td>
              </tr>
              <tr>
                <td>1,010</td>
                <td>massa</td>
                <td>Vestibulum</td>
                <td>lacinia</td>
                <td>arcu</td>
              </tr>
              <tr>
                <td>1,011</td>
                <td>eget</td>
                <td>nulla</td>
                <td>Class</td>
                <td>aptent</td>
              </tr>
              <tr>
                <td>1,012</td>
                <td>taciti</td>
                <td>sociosqu</td>
                <td>ad</td>
                <td>litora</td>
              </tr>
              <tr>
                <td>1,013</td>
                <td>torquent</td>
                <td>per</td>
                <td>conubia</td>
                <td>nostra</td>
              </tr>
              <tr>
                <td>1,014</td>
                <td>per</td>
                <td>inceptos</td>
                <td>himenaeos</td>
                <td>Curabitur</td>
              </tr>
              <tr>
                <td>1,015</td>
                <td>sodales</td>
                <td>ligula</td>
                <td>in</td>
                <td>libero</td>
              </tr>
            </tbody>
          </table>
        </div> */}
      </main>
    </div>
  </div>
  {/* Bootstrap core JavaScript
    ================================================== */}
  {/* Placed at the end of the document so the pages load faster */}
  {/* Icons */}
  {/* Graphs */}
</>

    </div>
  )
}

export default Dashboard