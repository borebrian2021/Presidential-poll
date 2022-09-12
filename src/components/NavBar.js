// import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

function NavBar() {
    const initNavigation = useNavigate();

    function goToLogin(){
        initNavigation('/Login')
    }
    function goHome(){
        initNavigation('/')
    }
    return (
        <motion.div className="nav-bar"
            transition={{ type: "spring", duration: 0.2, stiffness: 200,delay:1 }}
            initial={{ y: -250 }}
            animate={{
                y: 0
            }}
        >
            <div className="leftSide" onClick={goHome}>
                <motion.img transition={{ duration: 0.8, delay: 1 }} initial={{ opacity: "0" }} animate={{ opacity: 1 }} class="logo" src="./images/carraceLogo.png" />
                <small class="logoText ">Carrace Drinks</small>  </div>
            <div className="rightSide" onClick={goToLogin}>

                {/* <span class="icons_"  onClick={goToLogin}><i class="fa fa-user"></i></span>
                 */}
                <small class="icons_ "  onClick={goToLogin}>Home</small>
                <small class="icons_ "  onClick={goToLogin}>About</small>
                <small class="icons_ "  onClick={goToLogin}>Login</small>
                <small class="icons_ "  onClick={goToLogin}>Signup</small>





                    </div>

        </motion.div>
    )
}



export default NavBar