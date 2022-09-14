import React ,{useState,useEffect} from "react"
import { Link } from "react-router-dom"
const BASE_URL = "http://localhost:9292"

function NavBar({googleId}){
const [url,setUrl]=useState("https://iili.io/Ph2EEQ.png")
const [username,SetUserName]=useState("")

const changeProfile_=(data)=>{
setUrl(data)
}
console.log(googleId)
//Get account details
fetch(BASE_URL + "/account_details", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        googleId : googleId,
    }),
}).then(
    (data)=>data.json()
).then((data1)=>{
    console.log(data1)
    console.log(data1[0].img_url)
    SetUserName(data1[0].name)
    setUrl(data1[0].img_url)

})


return(
<div class="navbar">
        {/* <div className="col-6 col-md-6 col-lg-6 col-sm left"><img src="https://iili.io/PXlXnf.png" className="logo"/></div>
        <div className="col-6 col-md-6 col-lg-6 col-sm right"><Link to="">Log</Link></div> */}
<div class="left"><Link to="/" class="yellow_links"><img src="https://iili.io/PXlXnf.png" className="logo"/>Presidential Polls</Link></div>

<div class="right">
<Link to="/add" class="yellow_links">Add candidates</Link>
<Link to="/login" class="yellow_links"><img src={url} className="profile"/></Link>
<p className="yellow_links margin">{username}</p>
    {/* Log In</Link> */}
    
</div>
</div >

)
}

export default NavBar