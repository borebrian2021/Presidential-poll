import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { GoogleLogin } from "react-google-login";
import {gapi} from 'gapi-script'

const BASE_URL = "http://localhost:9292"
const CLIENT_ID ="374139265365-ff4v6vsc5j3mr5l4jdpk3q87lcv424ft.apps.googleusercontent.com"


const responseGoogle = response => {
    console.log(response.wt.Ad);
  };
 function Auth() {


    const [polls, setPolls] = useState([])
    const [hide, setHide] = useState(false)


    useEffect(() => {
function start(){
    gapi.client.init({
        clientId: CLIENT_ID,
        scope:""
    })
};
gapi.load('client:auth2',start);
    },[])




    useEffect(() => {
        fetch(BASE_URL + '/get_all_candidates')
            .then((data) => data.json())
            .then((data1) => {
                setPolls(data1)
                console.log(polls)
            })
    }, [hide])

    //UPVOTE 
    function upVote(id){
alert(id)
fetch(BASE_URL + "/vote", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
        candidate_id: id
    }),
  })
   
}



      




    return (
        
        <div className="home">
            <div className="appTitle">
                <h6 class="next_to_buttons">Saff Log in</h6>
                <button class="optionButtons optionButtons_yellow">Back to polls</button>

            </div>
            <div className="pollsResults">
                <form class="register">
                    <div className="row">
                    <div className="col-lg-3 col-md-3 col-12 ">
                    <div className="row">

                        <div className="col-lg-12 col-md-12 col-12 ">
                            <input class="form-control m-1" required placeholder="Enter  name"></input>
                        </div>
                        <div className="col-lg12 col-md-12 col-12 ">
                            <input class="form-control m-1"  required placeholder="Enter party name"></input>
                        </div>                       
                        <div className="col-lg-12 col-md-12 col-12  ">
                            <button class="optionButtons mt-2" type="submit">Submit</button>
                        </div>
                        </div>

                        </div>

                    </div>


                </form>


            </div>
            <div className="appTitle">
              <h6 class="next_to_buttons">Member Login</h6>
              <button class="optionButtons optionButtons_yellow">Back to polls</button>

          </div>
          <div className="pollsResults">
              <form class="register">
                  <div className="row">
                  <div className="col-lg-3 col-md-3 col-12 ">
                  <div className="row">

                      <div className="col-lg-12 col-md-12 col-12 ">
                          <input class="form-control m-1" required placeholder="Enter  name"></input>
                      </div>
                      <div className="col-lg12 col-md-12 col-12 ">
                          <input class="form-control m-1"  required placeholder="Enter party name"></input>
                      </div>                       
                      <div className="col-lg-12 col-md-12 col-12">
                      <GoogleLogin
        clientId={CLIENT_ID}
        buttonText="Login Using Google"
        cookiePolicy="single_host_origin"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        isSignedIn={true}
      />
                          <button class="optionButtons mt-2" type="submit">Submit</button>
                      </div>
                      </div>

                      </div>

                  </div>


              </form>


          </div>
        </div>
         
    )
}
export default Auth