import React ,{useState} from "react"
import { Link } from "react-router-dom"

function NavBar({changeProfile}){
const [url,setUrl]=useState("https://iili.io/Ph2EEQ.png")
const changeProfile_=(data)=>{
setUrl(data)
}

return(
<div class="navbar">
        {/* <div className="col-6 col-md-6 col-lg-6 col-sm left"><img src="https://iili.io/PXlXnf.png" className="logo"/></div>
        <div className="col-6 col-md-6 col-lg-6 col-sm right"><Link to="">Log</Link></div> */}
<div class="left"><img src="https://iili.io/PXlXnf.png" className="logo"/></div>

<div class="right">
<Link to="/login" class="yellow_links"><img src={url} className="profile"/></Link>
    {/* Log In</Link> */}
    
</div>
</div >

)
}

export default NavBar