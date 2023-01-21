import HollywoodBlogsPart1 from "./HollywoodBlogsPart1";
import HollywoodBlogsPart1Part1 from "./HollywoodBlogsPart1Part1";
import HollywoodBlogsPart1Part2 from "./HollywoodBlogsPart1Part2";
import HollywoodBlogsPart1Part3 from "./HollywoodBlogsPart1Part3";
import arrowRight from "../../Images/New/arrow (1).svg"
import HollywoodPic2 from "../../Images/Hollywood/gabe-VJ5i5ARz6jc-unsplash.jpg"
function HollywoodBlogs() {
    return (
        <section id="all-bollywood">
            <div id="left-section">
                <h1 className="title">Hollywood</h1>
                <div>
                    <HollywoodBlogsPart1 />
                </div>
            </div>
            <div id="right-section">
                <div id="container">
                    <div className="title">Top Post</div>
                    <img className="img" src={HollywoodPic2} alt="404_Error" />
                    <div className="Head">Catch waves with an adventure guide</div>
                    <div className="one1">1</div>
                    <div className="Traval">Traval/August 21 2017</div>
                </div>
                <HollywoodBlogsPart1Part1 />
                <HollywoodBlogsPart1Part2 />
                <HollywoodBlogsPart1Part3 />
                <div id="box">
                    <img className="img" src={HollywoodPic2}style={{width:"230px"}}alt="404_Error" />
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
            <div className="loadmore bollywood">LOAD MORE<img src={arrowRight} alt={"404_Error"} style={{ marginLeft: "10px" }} /></div>
        </section>
    )
}
export default HollywoodBlogs;