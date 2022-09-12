import react from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

function Footer(){
    const initNavigation=useNavigate()
    function goToLogin(){
        initNavigation('/Login')
    }
    
    function goToHome(){
        initNavigation('/')
    }
    
    function goToAbout(){
        initNavigation('/About')
    }
    
    function goToSignup(){
        initNavigation('/Signup')
    }
return(
<motion.div  initial={{ x: 1500 }} animate={{ x: 0 }} transition={{ duration: 0.8, delay: 1.8, stiffness: 200, type: "spring" }} class="footer  py-3">
<div class="row">

<div class="col-md-4  col-sm-4 col-md-4 col-lg-4">
<ul class="d_none">
        <li><h6>Categories</h6></li>
        <li> <small class="text-white">Whisky</small></li>
        <li><small>Vodka</small></li>
        <li><small>Gin </small></li>
        <li><small>Brandy </small></li>
        <li><small>Rum </small></li>
        <li><small>Tequila </small></li>
    </ul>
</div>
<div class="col-md-4 col-sm-4 col-md-4 col-lg-4">
<ul class="d_none">
        <li><h6>Navigate</h6></li>
        <li><small onClick={goToHome} class="text-white links">Home</small></li>
        <li>  <small class="text-white links">About</small></li>
        <li>  <small class="text-white links">Signup</small></li>
        <li>  <small class="text-white links">Login</small></li>



     

    </ul>
</div>
<div class="col-md-4 col-sm-4 col-md-4 col-lg-4">
    <ul class="d_none">
        <li><h6>Developer</h6></li>
        <li><img class="media" src="https://i.postimg.cc/d1GfdjCK/github-2.png"/><small>Project Source Code</small> </li>
        <li> <img class="media" src="https://i.postimg.cc/s2k8vNvc/icons8-email-sign-50.png"/> <small>Developer email</small></li>
        <li> <img class="media" src="https://i.postimg.cc/W4tRgKyt/icons8-globe-50.png"/><small> Developer Portfolio</small></li>
    </ul>
<small className='text-white p-3'></small>
</div>
</div>
<div className="row">
    <div class="col-12 col-lg-12 col-md-12 col-sm-12 text-center">
<small className='text-white'>© 2020 Copyright Carrace Drinks</small>

    </div>
</div>
</motion.div>)
}

export default Footer