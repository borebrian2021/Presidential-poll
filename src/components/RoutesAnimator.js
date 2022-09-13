import react from 'react'
import AddCandidate from './AddCandidate';
import Auth from './Auth';
import { AnimatePresence  }  from 'framer-motion'
import LogIn from './LogIn'
import {
    BrowserRouter as Router,  Routes,  Route,useLocation
  }from "react-router-dom";
function RoutesAnimator(){
    const location=useLocation();
    const [url,setUrl]= useState("");

    return(
        <AnimatePresence>
        <Routes location={location} key={location.key}>
        <Route exact  path='/add' element={<AddCandidate />}>
        </Route> 
        <Route exact  path='/LogIn' element={<Auth/>}>
        </Route> 

        
        </Routes>
        </AnimatePresence>
      
    )
}

export default RoutesAnimator