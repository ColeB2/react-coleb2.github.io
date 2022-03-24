import React from "react";
import imageMe from '../images/avatar.png'


export default function Info() {
    return (
        <div className="info-di">
            <div></div>
            <img src={imageMe} alt="Cartoon Picture of Me" className="photo"/>
            <h1 className="name-text center">Cole B</h1>
            <h4 className="title-text center">Software Developer</h4>
            <a className="portfolio-link center">Checkout my portfolio</a>
            <div className="button-container center">
                <button className="btn">Email</button>
                <button className="btn">LinkedIn</button>
            </div>
        </div>
    )
}