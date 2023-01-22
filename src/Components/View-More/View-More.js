import ProfilePic from "../../Images/New/Mask Group 15.png";
import ReactLogo from "../../Images/New/img-8.jpg";
import CodeLogo from "../../Images/New/Screenshot 2020-08-10 at 4.31.07 PM@2x.png";
import ClapLogo from "../../Images/New/rythm.svg";
import ViewMorePart1 from "./View-More-Part1";
function ViewMore() {
    return (
        <div id="overFlow">
            <div id="ViewTitle">
                <div id="ViewContent">
                    <span id="the">The</span>
                    <span id="siren">Siren</span>
                </div>
                <div>
                    <button id="btn" onClick={()=>{
                        const additionalPage=document.getElementById('View-title')
                        additionalPage.style.display="none"
                        const totalPage=document.getElementById('totalPage')
                        totalPage.style.display="flex"
                        totalPage.style.flexDirection="column"

                    }}>Get Started</button>
                </div>
            </div>
            <div>
                <div id="View-Box">
                    <div id="Front"></div>
                    <div id="Center">
                        <div id="ways">5 Ways to animate a React app.</div>
                        <div id="Box-Profile">
                            <div id="Profile">
                                <div>
                                    <img src={ProfilePic} alt="404_Error" />
                                </div>
                                <div id="Name">
                                    <div>Dmitry Nozhenko</div>
                                    <div>Jan 28, 2019 · 10 min read</div>
                                </div>
                            </div>
                            <div id="Icons">
                                <div>F</div>
                                <div>T</div>
                                <div>I</div>
                                <div>Y</div>
                            </div>
                        </div>
                        <div id="View-React-Logo">
                            <img src={ReactLogo} width={500} height={250} alt="404_Error" />
                        </div>
                        <div id="View-Para">
                            Animation in ReactJs app is a popular topic and there are many ways to create different types of animations.Many developers create animation exclusively using css and adding classes to HTML tags. This is a great way and you should use it. If you want to create complex animations you can pay attention to GreenSock. GreenSock is the most powerful animation platform. There are also a lot of libraries, components for creating animation in React.
                        </div>
                        <div id="View-Para1">Let’s talk about them.</div>
                        <div id="code">
                            <img src={CodeLogo} width={450} alt="404_Error" />
                        </div>
                        <div id="View-Btn">
                            <button>React</button>
                            <button>JavaScript</button>
                            <button>Animation</button>
                        </div>
                        <div id="View-views">
                            <img src={ClapLogo} alt="404_Error" />
                            <span>9.3K claps</span>
                        </div>
                        <div id="Profile1">
                            <div>
                                <img src={ProfilePic} alt="404_Error" />
                            </div>
                            <div id="Name">
                                <div>WRITTEN BY</div>
                                <div style={{ fontWeight: "bold" }}>Dmitry Nozhenko</div>
                                <div>Jan 28, 2019 · 10 min read</div>
                            </div>
                        </div>
                    </div>
                    <div id="End"></div>
                </div>
            </div>
            <div id="MoreReads">
                <div id="MoreReed-Title">More From The Siren</div>
                <div id="Content-Loader">
                    <ViewMorePart1 />
                    <ViewMorePart1 />
                    <ViewMorePart1 />
                </div>
            </div>
        </div>
    )
}
export default ViewMore;