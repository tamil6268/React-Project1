// import React, { useState } from 'react';

function Nav() {
    // const [food, setFood] = useState(true);
    return (
        <div id="mainTitle-BoxShadow">
            <div id="Nav">
                <div id="HomeBtn" onClick={() => {
                    const page = document.getElementById('main-Page')
                    const Bollywood = document.getElementById('Bollywood')
                    const Technology = document.getElementById('Technology')
                    const Hollywood = document.getElementById('Hollywood')
                    const Fitness = document.getElementById('Fitness')
                    const Food = document.getElementById('Food')
                    // const Nav = document.getElementById('Nav')
                    page.style.display = "flex"
                    Bollywood.style.display = "none"
                    Technology.style.display = "none"
                    Hollywood.style.display = "none"
                    Fitness.style.display = "none"
                    Food.style.display = "none"
                    // Nav.style.display = "none"
                }} className="NavChild">Home</div>
                <div onClick={() => {
                    const page = document.getElementById('main-Page')
                    const Bollywood = document.getElementById('Bollywood')
                    const Technology = document.getElementById('Technology')
                    const Hollywood = document.getElementById('Hollywood')
                    const Fitness = document.getElementById('Fitness')
                    const Food = document.getElementById('Food')
                    // const Nav = document.getElementById('Nav')
                    page.style.display = "none"
                    Bollywood.style.display = "flex"
                    Technology.style.display = "none"
                    Hollywood.style.display = "none"
                    Fitness.style.display = "none"
                    Food.style.display = "none"
                    // Nav.style.display = "none"
                    // console.log(Bollywood)
                }} className="NavChild">Bollywood</div>
                <div onClick={() => {
                    const page = document.getElementById('main-Page')
                    const Bollywood = document.getElementById('Bollywood')
                    const Technology = document.getElementById('Technology')
                    const Hollywood = document.getElementById('Hollywood')
                    const Fitness = document.getElementById('Fitness')
                    const Food = document.getElementById('Food')
                    // const Nav = document.getElementById('Nav')
                    page.style.display = "none"
                    Bollywood.style.display = "none"
                    Technology.style.display = "flex"
                    Hollywood.style.display = "none"
                    Fitness.style.display = "none"
                    Food.style.display = "none"
                    // Nav.style.display = "none"
                    // console.log(Technology)
                }} className="NavChild">Technology</div>
                <div onClick={() => {
                    const page = document.getElementById('main-Page')
                    const Bollywood = document.getElementById('Bollywood')
                    const Technology = document.getElementById('Technology')
                    const Hollywood = document.getElementById('Hollywood')
                    const Fitness = document.getElementById('Fitness')
                    const Food = document.getElementById('Food')
                    // const Nav = document.getElementById('Nav')
                    // const focus=document.querySelectorAll('.NavChild')
                    page.style.display = "none"
                    Bollywood.style.display = "none"
                    Technology.style.display = "none"
                    Hollywood.style.display = "flex"
                    Fitness.style.display = "none"
                    Food.style.display = "none"
                    // Nav.style.display = "none"
                    // focus.style.border="1px solid gray"
                    // focus.style.backgroundColor="lightgreen"
                    // console.log(Hollywood)
                }} className="NavChild">Hollywood</div>
                <div onClick={() => {
                    const page = document.getElementById('main-Page')
                    const Bollywood = document.getElementById('Bollywood')
                    const Technology = document.getElementById('Technology')
                    const Hollywood = document.getElementById('Hollywood')
                    const Fitness = document.getElementById('Fitness')
                    const Food = document.getElementById('Food')
                    // const Nav = document.getElementById('Nav')
                    page.style.display = "none"
                    Bollywood.style.display = "none"
                    Technology.style.display = "none"
                    Hollywood.style.display = "none"
                    Fitness.style.display = "flex"
                    Food.style.display = "none"
                    // Nav.style.display = "none"
                    // console.log(Hollywood)
                }} className="NavChild">Fitness</div>
                <div onClick={() => {
                    const page = document.getElementById('main-Page')
                    const Bollywood = document.getElementById('Bollywood')
                    const Technology = document.getElementById('Technology')
                    const Hollywood = document.getElementById('Hollywood')
                    const Fitness = document.getElementById('Fitness')
                    const Food = document.getElementById('Food')
                    // const Nav = document.getElementById('Nav')
                    page.style.display = "none"
                    Bollywood.style.display = "none"
                    Technology.style.display = "none"
                    Hollywood.style.display = "none"
                    Fitness.style.display = "none"
                    Food.style.display = "flex"
                    // Nav.style.display = "none"
                    // console.log(Food)
                }} className="NavChild">Food</div>
            </div>
        </div>
    )
}
export default Nav;