import ProfilePic from "../../Images/New/Mask Group 15.png";
import Img from "../../Images/124d8506-8a34-40e6-b99a-c6c63ef2fa2c_5.jpg";
function ViewMorePart1() {
    return (
        <div id="View-Container">
            <div id="Inner-Title">Related reads</div>
            <div>
                <img src={Img} width="300" height="180" alt="404_Error" />
            </div>
            <div id="Josh-Title">Joshua Tree Overnight Adventure</div>
            <div id="Josh-Content">Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces.</div>
            <div id="Profile2">
                <div>
                    <img src={ProfilePic} alt="404_Error" />
                </div>
                <div id="Name">
                    <div style={{fontWeight:"bold"}}>Dmitry Nozhenko</div>
                    <div>Aug 10 · 4 min read</div>
                </div>
            </div>
        </div>
    )
}
export default ViewMorePart1;