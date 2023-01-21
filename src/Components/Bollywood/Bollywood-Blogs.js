import BollywoodBlogsPart1 from "./BollywoodBlogsPart1";
import BollywoodBlogsPart1Part1 from "./BollywoodBlogsPart1Part1";
import BollywoodBlogsPart1Part2 from "./BollywoodBlogsPart1Part2";
import BollywoodBlogsPart1Part3 from "./BollywoodBlogsPart1Part3";
import arrowRight from "../../Images/New/arrow (1).svg"
import BollywoodPic2 from "../../Images/Bollywood/naganath-chiluveru-Uzl-KYPAH44-unsplash.jpg"
function BollywoodBlogs() {
    return (
        <section id="all-bollywood">
            <div id="left-section">
                <h1 className="title">Bollywood</h1>
                <div>
                    <BollywoodBlogsPart1 />
                </div>
            </div>
            <div id="right-section">
                <div id="container">
                    <div className="title">Top Post</div>
                    <img className="img"src={BollywoodPic2} alt="404_Error"/>
                    <div className="Head">Catch waves with an adventure guide</div>
                    <div className="one1">1</div>
                    <div className="Traval">Traval/August 21 2017</div>
                </div>
                <BollywoodBlogsPart1Part1 />
                <BollywoodBlogsPart1Part2 />
                <BollywoodBlogsPart1Part3 />
                <div id="box">
                <img className="img"src={BollywoodPic2}alt="404_Error"/>
                    <div className="innerBox">
                        <div className="title">Catch waves with adventure guide</div>
                        <div className="travel">Travel<span className="span">/ August 21 2017</span></div>
                    </div>
                    <div className="one">5</div>
                </div> 
                <div id="Empty-container">
                    <div className="Ads">Advertistement</div>
                </div>
            </div>
            <div className="loadmore bollywood">LOAD MORE<img src={arrowRight} alt={"404_Error"} style={{marginLeft:"10px"}}/></div>
        </section>
    )
}
export default BollywoodBlogs;