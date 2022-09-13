// import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
// import './font-awesome/css/font-awesome.css'
// import 'bootstrap/dist/css/bootstrap.css'\
// import Footer from './Components/Footer'
// import LogIn from './Components/LogIn'
import NavBar from './components/NavBar'
import RoutesAnimator from './components/RoutesAnimator';

import {
  BrowserRouter as Router,  Routes,  Route,useLocation
}from "react-router-dom";
// import {motion} from 'framer-motion'
function App() {

  const [img_url,setImgUrl]=useState("")
  return (
              <Router >
                <NavBar img_url={img_url}/>
              <RoutesAnimator/>
              </Router>
      

  );
}

export default App;
