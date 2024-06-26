import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import { AuthProvider } from './context/AuthContext';

import Homepage from './pages/home/Homepage';
import Registerpage from './views/Registerpage';
import Loginpage from './views/Loginpage';
import Dashboard from './views/Dashboard';
import Navbar from './views/Navbar';

import Opstmt from './pages/opstmt/Opstmt';
import Assets from './pages/AssetLiab';
import OcaOcl from './pages/OcaOcl';
import Ratios from './pages/Ratios';
import WcTlAssmt from './pages/WcTlAssmt';
import Ff from './pages/Ff';
import Kfi from './pages/Kfi';

import { AppProvider } from './AppContext';

function App() {
  return (
    <Router>
      <AuthProvider>
        {/* <Navbar /> */}
        <AppProvider>
          <Routes>
            <Route path="/dashboard" element={<PrivateRoute component={Dashboard} exact />} />
          
            <Route path="" element={<Loginpage />} />
            <Route path="/register" element={<Registerpage />} exact />
            <Route path="/home" element={<Homepage />} exact />
            <Route path="/opstmt" element={<Opstmt />} exact />
            <Route path="/asset" element={<Assets />} exact />
            <Route path="/ocaocl" element={<OcaOcl />} exact />
            <Route path="/ratios" element={<Ratios />} exact />
            <Route path="/wctlassmt" element={<WcTlAssmt />} exact />
            <Route path="/ff" element={<Ff />} exact />
            <Route path="/kfi" element={<Kfi />} exact />
          </Routes>
        </AppProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
