// import logo from './logo.svg';
import './App.css';
import React, { useState,useEffect} from 'react';
import { GoogleLogin } from "react-google-login";
import { gapi } from 'gapi-script'
import {
  BrowserRouter as Router,  Routes,  Route,useLocation
}from "react-router-dom";
import NavBar from './components/NavBar'
import RoutesAnimator from './components/RoutesAnimator';


const BASE_URL = "http://localhost:9292"
const CLIENT_ID = "374139265365-ff4v6vsc5j3mr5l4jdpk3q87lcv424ft.apps.googleusercontent.com"
var auth2;



function App() {
  const [googleID,setGoogleID]=useState("")
  // const initNavigation = useNavigate();

//NAVIGATE TO LOGIN PAGE


function getGoogleID(id){
  setGoogleID(id)
  //Get account details
fetch(BASE_URL + "/account_details", {
  method: "POST",
  headers: {
      "Content-Type": "application/json",
  },
  body: JSON.stringify({
      googleId : id,
  }),
}).then(
  (data)=>data.json()
).then((data1)=>{
console.log(data1)

})
  // alert("app"+id)
}




  return (
              <Router >
                <NavBar googleId={googleID}/>
              <RoutesAnimator getGoogleID={getGoogleID}/>
              </Router>
      

  );
}

export default App;
