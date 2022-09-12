import react from 'react'
import DrinkBody from './DrinkBody'
import DrinksDetails from './DrinksDetails'
import UploadForm from './UploadForm'

import { AnimatePresence  }  from 'framer-motion'
import LogIn from './LogIn'
import {
    BrowserRouter as Router,  Routes,  Route,useLocation
  }from "react-router-dom";
function RoutesAnimator(){
    const location=useLocation();
    return(
        <AnimatePresence>
        <Routes location={location} key={location.key}>
        <Route exact  path='/' element={<DrinkBody/>}>
        </Route> 
        <Route exact  path='/DrinksDetails' element={<DrinksDetails/>}>
        </Route> 
        <Route exact  path='/LogIn' element={<LogIn/>}>
        </Route> 
        <Route exact  path='/UploadForm' element={<UploadForm/>}>
        </Route> 
        </Routes>
        </AnimatePresence>
      
    )
}

export default RoutesAnimator