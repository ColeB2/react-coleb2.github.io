import React from "react";
import Icons from "./components/Icons.js";
import About from "./components/About.js";
import Header from "./components/Header.js";

import './index.css'


export default function App() {
    return (
        <div id="main-container">
            <Header/>
            <Icons />
            <About />
        </div>
    )

}