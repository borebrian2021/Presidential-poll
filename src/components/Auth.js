import React, { useEffect, useState } from "react";
// import ReactDOM from "react-dom";
import { GoogleLogin } from "react-google-login";
import { gapi } from 'gapi-script'
// import headers from "./helpers/headers/headers";

const BASE_URL = "http://localhost:9292"
const CLIENT_ID = "374139265365-ff4v6vsc5j3mr5l4jdpk3q87lcv424ft.apps.googleusercontent.com"

const responseGoogle = response => {
    console.log(response)

    fetch(BASE_URL + "/sign_up_sign_in", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: response.profileObj.name,
            email: response.profileObj.email,
            role: 1,
            googleId: response.profileObj.googleId,
            img_url: response.profileObj.imageUrl
        }),
    })
}

function Auth() {
    const [polls, setPolls] = useState([])
    // const [hide, setHide] = useState(false)


    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: CLIENT_ID,
                scope: ""
            })
        };
        gapi.load('client:auth2', start);
    }, [])




    useEffect(() => {
        fetch(BASE_URL + '/get_all_candidates')
            .then((data) => data.json())
            .then((data1) => {
                setPolls(data1)
                console.log(polls)
            })
    })

    //UPVOTE 
    // function upVote(id) {
    //     alert(id)
    //     fetch(BASE_URL + "/vote", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //             candidate_id: id
    //         }),
    //     })

    // }








    return (

        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-md-4 col-sm-4 col-lg-4">

                </div>
                <div className="col-12 col-md-4 col-sm-4 col-lg-4">
                    <div className="login_card">
                        <div className="login_title">
                            <p>Admin/Member Login</p>
                        </div>
                        <div className="login_bodddy">
                        <GoogleLogin
                      className="google_btn"
        clientId={CLIENT_ID}
        buttonText="Login Using Google"
        cookiePolicy="single_host_origin"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        isSignedIn={true}
      />
                        </div>
                    </div>
                </div>    <div className="col-12 col-md-4 col-sm-4 col-lg-4">

                </div>
            </div>
        </div>

    )
}
export default Auth