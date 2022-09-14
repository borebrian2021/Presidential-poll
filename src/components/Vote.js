import React,{useEffect, useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const BASE_URL = "https://pollslive.herokuapp.com"
// const BASE_URL = "http://localhost:9292"



function Vote() {
const notify = (message) => toast(message);

    const [polls, setPolls] = useState([])
    const [vote,setVotes]=useState([])
    const [count,setCount]=useState([])
    let count2=0


  //LETS LOAD ALL CANDIDATES
  useEffect(() => {
    fetch(BASE_URL + '/get_all_candidates')
        .then((data) => data.json())
        .then((data1) => {
            console.log(data1)
            setPolls(data1);

            setCount(count2)


        })
},

fetch(BASE_URL + '/getSome')
.then((data) => data.json())
.then((data1) => {
    
    setCount(data1.sum)
// alert(data1.sum)

})
,[vote])

useEffect(() => {
    fetch(BASE_URL + '/getSome')
    .then((data) => data.json())
    .then((data1) => {
        
        setCount(data1.sum)
    // alert(data1.sum)
    
    })
},
[vote])


const removeVote = (clientId) => {
    // alert(candidateName)
    fetch(BASE_URL + "/removeVote", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(
            {
                candidateID: clientId
            }
        )
    }).then((feedback) => feedback.json())
        .then((data) => {
            // alert(data.partyName)
            // console.log(data)
            // setResponse()
            setVotes(data)
            notify(`Successfully downvoted!`)
          
            // setHide(!hide)

        })

}



const addVote = (clientId) => {
    // alert(candidateName)
    fetch(BASE_URL + "/addVote", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(
            {
                candidateID: clientId
            }
        )
    }).then((feedback) => feedback.json())
        .then((data) => {
            // alert(data.partyName)
            // console.log(data)
            // setResponse()
            setVotes(data)
            notify(`Successfully upvoted!`)
           })

}
    return (
        
        <div className="home">
    
             <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
theme="dark"
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>


           {
                polls.map((item, index) => {

                    let totalVotesCount = count
                    let gauge = 10
                    let final = item.votes.length / totalVotesCount * 160
                    // console.log(final)
                    // console.log()
                    return (
                        <div className="pollsResults">


                            <table>
                                <tr>
                                    <td rowspan="3">
                                        <img src={item.profile_image} className="poll_image" alt="6Lue1a.jpg" border="0" />

                                    </td>
                                    <td>
                                        <h5 class="yellow">{item.candidate_name}</h5>
                                        <div class="level_parent">
                                            <div class="level_child" style={{ width: final + "px" }}></div>
                                        </div>
                                        <button class="votes">{item.votes.length}</button>

                                        <button class="optionButtons" onClick={() => { addVote(item.id) }} >Upvote</button>
                                        <button class="optionButtons" onClick={() => { removeVote(item.id) }} >Downvote</button>


                                    </td>

                                </tr>




                            </table>
                        </div>
                    )
                })

            }

        </div>


    )
}

export default Vote