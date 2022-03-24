import React from "react";
import imageMe from '../images/avatar.png'

export default function Header() {
    return (
        <div className="info-di">
            <div></div>
            <h1>Hello, I'm <b>Cole</b>.</h1>
            <img src={imageMe} alt="Cartoon Picture of Me" className="photo"/>
        </div>
    )
}