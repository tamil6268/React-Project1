import Body4Part1 from "./Body4-Part1";
import Body4Part2 from "./Body4-Part2";
import Body4Part3 from "./Body4-Part3";
import arrowRight from "../Images/New/arrow (1).svg"
function Body4() {
    return (
        <div id="parent">
            <div id="title">Latest Stories</div>
            <div id="flex">
                <Body4Part1 />
                <Body4Part2 />
                <Body4Part3 />
            </div>
            <div className="loadmore" onClick={()=>{
                const totalPage=document.getElementById('totalPage')
                totalPage.style.display="none"
                const additionalPage=document.getElementById('View-title')
                additionalPage.style.display="flex"
            }}>VIEW MORE<img src={arrowRight} alt={"404_Error"} style={{marginLeft:"10px"}}/></div>
        </div>
    )
}
export default Body4;