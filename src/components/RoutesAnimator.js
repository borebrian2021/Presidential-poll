import react ,{useState} from 'react'
import AddCandidate from './AddCandidate';
import Auth from './Auth';
import { AnimatePresence  }  from 'framer-motion'
import LogIn from './LogIn'
import Vote from './Vote'

import {
    BrowserRouter as Router,  Routes,  Route,useLocation
  }from "react-router-dom";
function RoutesAnimator({getGoogleID}){
    const location=useLocation();
    const [url,setUrl]= useState("");
    const [googleID,setGoogleID]= useState("");

   

    return(
        <AnimatePresence >
        <Routes location={location} key={location.key}>
        <Route exact  path='/' element={<Vote />}>
        </Route> 
        <Route exact  path='/add' element={<AddCandidate />}>
        </Route> 
        <Route exact  path='/login' element={<Auth getGoogleID={getGoogleID} />}>
        </Route> 
     
        </Routes>
        </AnimatePresence>
      
    )
}

export default RoutesAnimator