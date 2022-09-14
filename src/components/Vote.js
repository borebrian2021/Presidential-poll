import React,{useEffect, useState} from "react";
const BASE_URL = "https://pollslive.herokuapp.com"
function Vote() {
    const [polls, setPolls] = useState([])

  //LETS LOAD ALL CANDIDATES
  useEffect(() => {
    fetch(BASE_URL + '/get_all_candidates')
        .then((data) => data.json())
        .then((data1) => {
            setPolls(data1);
            console.log(polls)
        })
},[])


    return (
        
        <div className="home">
           {
                polls.map((item, index) => {

                    let totalVotesCount = 160
                    let gauge = 10
                    let final = gauge / totalVotesCount * 100
                    console.log(final)


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
                                        <button class="votes">{item.votes.count}</button>

                                        {/* <button class="optionButtons" onClick={() => { delete_candidate(item.id) }} >Delete</button> */}

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