import FitnessBlogsPart1 from "./FitnessBlogsPart1";
import FitnessBlogsPart1Part1 from "./FitnessBlogsPart1Part1";
import FitnessBlogsPart1Part2 from "./FitnessBlogsPart1Part2";
import FitnessBlogsPart1Part3 from "./FitnessBlogsPart1Part3";
import arrowRight from "../../Images/New/arrow (1).svg"
import FitnessPic2 from "../../Images/Fitness/carl-barcelo-nqUHQkuVj3c-unsplash.jpg";
function FitnessBlogs() {
    return (
        <section id="all-bollywood">
            <div id="left-section">
                <h1 className="title">Fitness</h1>
                <div>
                <FitnessBlogsPart1 />
                </div>
            </div>
            <div id="right-section">
                <div id="container">
                    <div className="title">Top Post</div>
                    <img className="img"src={FitnessPic2}style={{width:"320px"}}alt="404_Error"/>
                    <div className="Head">Catch waves with an adventure guide</div>
                    <div className="one1">1</div>
                    <div className="Traval">Traval/August 21 2017</div>
                </div>
                <FitnessBlogsPart1Part1 />
                <FitnessBlogsPart1Part2 />
                <FitnessBlogsPart1Part3 />
                <div id="box">
                <img className="img"src={FitnessPic2}alt="404_Error"/>
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
export default FitnessBlogs;