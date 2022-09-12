import react, { useState,useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
const variants_ = {
    hidden: {
        opacity: 0,
        x: '100vw'
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'spring',
            delay: 0
        }
    },
    exit: {
        x: '100vw',
        transition: { ease: 'easeInOut' }
    }
}
function LogIn() {
    const navigate =useNavigate();
    const [username,setUsername] = useState();
    const [password,setPassword] = useState();
    const [loginDetails,setLoginDetails]=useState([]);
    useEffect(() => {
       fetch('https://carracedrinks.herokuapp.com/users').
       then((data)=>data.json()).
       then((data1)=>{
        setLoginDetails(data1);
       })
    }, []);
    function login(event){
        event.preventDefault()
        if(username==loginDetails[0].username && password==loginDetails[0].password){
            navigate('/UploadForm')
        }
        else{
            alert('Incorrect credentails.')
        }
        console.log(loginDetails.firstName)
    }

    function handleSetUsername(event){
        setUsername(event.target.value)
    }
    function handleSetPassword(event){
        setPassword(event.target.value)
    }
    function gotoForms() {
        navigate('/UploadForm')
    }
    return (
        <motion.div className="loginDetails pt-4 " variants={variants_} initial="hidden" exit="exit"  animate="visible">
            <motion.div initial={{ x: -1500 }} animate={{ x: 0 }} transition={{ duration: 0.3, stiffness: 200, type: "spring" }}>
                <form className="login" onSubmit={login}>
                    <h4 className="text-white">Admin Login</h4>
                    <input value={username} onChange={handleSetUsername} type="text" placeholder="Username"/>
                    <input value={password} onChange={handleSetPassword} type="password" placeholder="Password"/>
                    <motion.Button  className="getStarted" initial={{ x: -1500 }} animate={{ x: 0 }} transition={{ duration: 0.8, delay: 0.5, stiffness: 200, type: "spring" }} type="submit">Log In</motion.Button>
                </form>
            </motion.div>
        </motion.div>
    )
}

export default LogIn