import FoodBlogsPart1 from "../Food/Food-Blogs-Part1";
import FoodBlogsPart2 from "../Food/Food-Blogs-Part2";
import FoodBlogsPart3 from "../Food/Food-Blogs-Part3";
import FoodBlogsPart4 from "../Food/Food-Blogs-Part4";
import arrowRight from "../../Images/New/arrow (1).svg"
import FoodPic1 from "../../Images/Food/joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg";
import FoodPic2 from "../../Images/Food/anh-nguyen-kcA-c3f_3FE-unsplash.jpg";
function FoodBlogs(){
    return (
        <section id="all-bollywood">
            <div id="left-section">
                <h1 className="title">Food</h1>
                <div>
                    <FoodBlogsPart1 />
                </div>
            </div>
            <div id="right-section">
                <div id="container">
                    <div className="title">Top Post</div>
                    <img className="img"src={FoodPic1} alt="404_Error"/>
                    <div className="Head">Catch waves with an adventure guide</div>
                    <div className="one1">1</div>
                    <div className="Traval">Traval/August 21 2017</div>
                </div>
                <FoodBlogsPart2 />
                <FoodBlogsPart3 />
                <FoodBlogsPart4 />
                <div id="box">
                <img className="img"src={FoodPic2} alt="404_Error"/>
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
export default FoodBlogs;