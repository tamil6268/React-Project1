import Body3Part1 from "./Body3-Part1";
import Body3Part2 from "./Body3-Part2";
import Body3Part3 from "./Body3-Part3";
import arrowDown from "../Images/New/arrow.svg"
function Body3() {
   return (
      <>
         <section id="latest-article">
            <div className="leftSide">
               <div className="title">Latest Articles</div>
            </div>
            <Body3Part1 />
            <Body3Part2 />
            <Body3Part2 />
            <Body3Part2 />
            <div className="rightSide">
               <div className="div">Advertistement</div>
            </div>
            <div id="main">
               <Body3Part3 />
            </div>
            <div className="loadmore1">LOAD MORE<img src={arrowDown} alt={"404_Error"} style={{marginLeft:"10px"}}/></div>
            <div className="bigImg">
               <div id="title">Title of vertical gallery</div>
               <div className="travel">Travel <span className="span"> / August 21 2017</span></div>
            </div>
         </section>
      </>
   )
}
export default Body3;