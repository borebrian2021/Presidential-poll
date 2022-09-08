import React, { useState ,useEffect} from "react";
const BASE_URL = "http://localhost:9292"
//STATES


const FunctionMessage = ({ response, hide }) => {
    if (hide) {
        return (
            <div className="pollsResults message"  >
                <small>{response}</small>
            </div>
        )
    }
    else {
        return (
            <div>

            </div>
        )


    }
}



function AddCandidate() {
    let [candidateName, setCandidateName] = useState("");
    const [partyName, setPartyName] = useState("");
    const [profileImage, setProfileImage] = useState("");
    const [partyLogo, setPartyLogo] = useState("")
    const [hide, setHide] = useState(false)
    const [response, setResponse] = useState("")
    const [polls ,setPolls]=useState([])

    //RENDERING TO DOM
    const renderPolls =(data)=>{
        data.map((item)=>{
            alert(item.candidate_name)
        })
    }


    //LETS LOAD ALL CANDIDATES
    useEffect(() => {
        fetch(BASE_URL +'/get_all_candidates')
            .then((data) => data.json())
            .then((data1) => {
                setPolls(data1);
                console.log(polls)
            })
    }, [])

    //STOPT FORM FROM REFRESH
    const handleSubmit = (event) => {
        event.preventDefault()
        alert(candidateName)
        fetch(BASE_URL + "/addParty", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(
                {
                    partyName: partyName,
                    candidateName: candidateName,
                    partyLogo: partyLogo,
                    profileImage: profileImage
                }
            )
        }).then((feedback) => feedback.json())
            .then((data) => {
                // alert(data.partyName)
                // console.log(data)
                setResponse(`Success!, You have registered ${data.candidate_name} candidate_name`)
                setHide(!hide)
                resetInputs()

            })

    }
    //RESET INPUTS
    const resetInputs = () => {
        setCandidateName("")
        setProfileImage("")
        setPartyName("")
        setPartyLogo("")
    }

    //HANDLING INPUT CHANGES
    const handleCandidate = (event) => {
        setCandidateName(event.target.value)
    }
    const handlePartyName = (event) => {
        setPartyName(event.target.value)
    }
    const handleProfileImage = (event) => {
        setProfileImage(event.target.value)
    }
    const handlePartyLogo = (event) => {
        setPartyLogo(event.target.value)
    }

    return (
        <div className="home">
            <div className="appTitle">
                <h6 class="next_to_buttons">Register New Candidate</h6>
                <button class="optionButtons optionButtons_yellow">Back to polls</button>
            </div>
            <div className="pollsResults">
                <form class="register" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-lg-4 col-md-3 col-6 ">
                            <input value={candidateName} onChange={handleCandidate} class="form-control m-1" required placeholder="Enter candidate name"></input>
                        </div>
                        <div className="col-lg-4 col-md-3 col-6 ">
                            <input class="form-control m-1" value={partyName} onChange={handlePartyName} required placeholder="Enter party name"></input>
                        </div>
                        <div className="col-lg-4 col-md-3 col-6 ">
                            <input class="form-control m-1" value={profileImage} required onChange={handleProfileImage} placeholder="Enter image url"></input>
                        </div>
                        <div className="col-lg-4 col-md-3 col-6 ">
                            <input class="form-control m-1" required value={partyLogo} onChange={handlePartyLogo} placeholder="Enter party logo url"></input>
                        </div>
                        <div className="col-lg-4 col-md-3 col-6  ">
                            <button class="optionButtons mt-2" type="submit">Submit</button>

                        </div>
                    </div>


                </form>


            </div>

            <FunctionMessage response={response} hide={hide} />
            <div className="appTitle">
                <h6 class="next_to_buttons">Registered Candidates</h6>

            </div>
            {
                polls.map((item,index)=>{

                    let totalVotesCount=100
                    let gauge=10
                    let final=gauge/totalVotesCount*100
                    console.log(final)


                    return(
                        <div className="pollsResults">


                        <table>
                            <tr>
                                <td rowspan="3">
                                    <img src={item.profile_image} className="poll_image" alt="6Lue1a.jpg" border="0" />
        
                                </td>
                                <td>
                                    <h5 class="yellow">{item.candidate_name}</h5>
                                    <div class="level_parent">
                                        <div class="level_child" style={{width:final+"px"}}></div>
                                    </div>
                                    <button class="votes">{item.votes.count}</button>
        
                                    <button class="optionButtons">Delete</button>
        
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
export default AddCandidate