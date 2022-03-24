import React from "react";
import imageBriefcase from '../images/briefcase-fill.svg'
import imageGithub from '../images/github.svg'


export default function Icons() {
    return (
        <ul id="icons">
            <li className="iconss">
                <a href="https://coleb.pythonanywhere.com/portfolio">
                    <img src={imageBriefcase} alt="Icon of a briefcase" className="icon"/>
                </a>
            </li>
            <li>
                <a href="https://github.com/ColeB2">
                    <img src={imageGithub} alt="Icon of a briefcase" className="icon icon2"/>
                </a>
            </li>
        </ul>  
    )
}

