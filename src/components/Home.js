import React from "react";

function Home() {

    return (
        <div className="home">
            <div className="appTitle">
                <h6 class="next_to_buttons">Kenya Presidential Poll Results</h6> 
<button class="optionButtons optionButtons_yellow">Add candidate</button>

            </div>
            <div className="pollsResults">


                <table>
                    <tr>
                        <td rowspan="3">
                            <img src="https://iili.io/6Lue1a.jpg" className="poll_image" alt="6Lue1a.jpg" border="0" />

                        </td>
                        <td>
<h5 class="yellow">William Samoei Ruto</h5>
<div class="level_parent">
    <div class="level_child"></div>
</div>
<button class="votes">67</button>

<button class="optionButtons">Upvote</button>
                        </td>

                    </tr>
                    



                </table>
            </div>
            <div className="pollsResults">


<table>
    <tr>
        <td rowspan="3">
            <img src="https://iili.io/6L84Uu.jpg" className="poll_image" alt="6Lue1a.jpg" border="0" />

        </td>
        <td>
<h5 class="yellow">Raila Odinga</h5>
<div class="level_parent">
<div class="level_child"></div>
</div>
<button class="votes">67</button>

<button class="optionButtons">Upvote</button>
        </td>

    </tr>
    



</table>
</div>
        </div>

    )
}
export default Home