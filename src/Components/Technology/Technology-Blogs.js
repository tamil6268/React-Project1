import TechnologyBlogsPart1 from "./TechnologyBlogsPart1";
import TechnologyBlogsPart1Part1 from "./TechnologyBlogsPart1Part1";
import TechnologyBlogsPart1Part2 from "./TechnologyBlogsPart1Part2";
import TechnologyBlogsPart1Part3 from "./TechnologyBlogsPart1Part3";
import arrowRight from "../../Images/New/arrow (1).svg"
import TechnologyPic2 from "../../Images/Technology/possessed-photography-g29arbbvPjo-unsplash.jpg"
function TechnologyBlogs() {
    return (
        <section id="all-bollywood">
            <div id="left-section">
                <h1 className="title">Technology</h1>
                <div>
                    <TechnologyBlogsPart1 />
                </div>
            </div>
            <div id="right-section">
                <div id="container">
                    <div className="title">Top Post</div>
                    <img className="img"src={TechnologyPic2} alt="404_Error"/>
                    <div className="Head">Catch waves with an adventure guide</div>
                    <div className="one1">1</div>
                    <div className="Traval">Traval/August 21 2017</div>
                </div>
               <TechnologyBlogsPart1Part1 />
                <TechnologyBlogsPart1Part2 />
                <TechnologyBlogsPart1Part3 />
                <div id="box">
                    <img className="img"src={TechnologyPic2}alt="404_Error"/>
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
export default TechnologyBlogs;