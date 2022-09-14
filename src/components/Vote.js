import React,{useEffect, useState} from "react";
// const BASE_URL = "https://pollslive.herokuapp.com"
const BASE_URL = "http://localhost:9292"


function Vote() {
    const [polls, setPolls] = useState([])
    const [vote,setVotes]=useState([])

  //LETS LOAD ALL CANDIDATES
  useEffect(() => {
    fetch(BASE_URL + '/get_all_candidates')
        .then((data) => data.json())
        .then((data1) => {
            console.log(data1)
            setPolls(data1);
        })
},[vote])

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
            alert(`Success!, You have registered ${data.message} candidate_name`)
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
            alert(`Success!, You have registered ${data.message} candidate_name`)
            // setHide(!hide)

        })

}
    return (
        
        <div className="home">
           {
                polls.map((item, index) => {

                    let totalVotesCount = 160
                    let gauge = 10
                    let final = gauge / totalVotesCount * 100
                    console.log(final)

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