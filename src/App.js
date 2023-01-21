import './App.css';
import Topic from './Components/Topic';
import Nav from './Components/Nav';
import HomeBody from './Components/Home-Body';

//Bollywood imports:
import BollywoodBlogs from "./Components/Bollywood/Bollywood-Blogs"

//Technology imports:
import TechnologyBlogs from "./Components/Technology/Technology-Blogs"

//Fitness imports:
import FitnessBlogs from "./Components/Fitness/Fitness-Blogs"

//Food imports:
import FoodBlogs from "./Components/Food/Food-Blogs"

//Hollywood imports:
import HollywoodBlogs from "./Components/Hollywood/Hollywood-Blogs"

//View-More
import ViewMore from "./Components/View-More/View-More"

function App() {
  return (
    <div className="App">
      <header id="totalPage"className="App-header">
        <div id="common">
          <Topic />
          <div id="common-nav">
            <Nav />
          </div>
        </div>
        <div id="main-Page">
          <HomeBody />
        </div>
        <div id="root-Sub-Page">
          <div id="Bollywood">
            <BollywoodBlogs />
          </div>
          <div id="Technology">
            <TechnologyBlogs />
          </div>
          <div id="Hollywood">
            <HollywoodBlogs />
          </div>
          <div id="Fitness">
            <FitnessBlogs />
          </div>
          <div id="Food">
            <FoodBlogs />
          </div> 
        </div>
      </header>
    
      <div id="View-title">
          <ViewMore />
        </div>
    </div>
  );
}

export default App;
