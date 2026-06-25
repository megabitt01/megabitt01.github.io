import { useState } from "react";
import SkeuoImage from "./SkeuoImage";

const getAllD = () =>
    document.querySelectorAll(".new-header-dropdown");

function handleOver(e, n) {
    getAllD().forEach((ref) => {
        ref.classList.remove("dropped");
    });

    console.log(n)
    const ref = document.getElementById(`d${n}`);

    if (ref) {
        ref.classList.add("dropped");
    }
}

function handleLeave(e) {
    e.stopPropagation();
    getAllD().forEach((ref) => {
        ref.classList.remove("dropped");
    });
}

export default function Header() {

    return(
        <>
        <div onMouseLeave={(event) => handleLeave(event)}>
        <div className="new-header-bar">
            <div className="new-header-content">
                <div className="new-header-home">
                <img src="https://avatars.githubusercontent.com/u/71474581?v=4" className="new-header-image" />
                <div className="new-header-text">
                    <h2 style={{fontSize: '2em'}}>
                        thejackbitt
                    </h2>
                </div>
                </div>
                <div className="new-header-navbar">
                    <div className="navbar-container">
                        <p onMouseOver={(event) => handleOver(event, 1)} className="navbar-option">About Me</p>
                        <p onMouseOver={(event) => handleOver(event, 2)} className="navbar-option">Modding</p>
                        <p onMouseOver={(event) => handleOver(event, 3)} className="navbar-option">Projects</p>
                    </div>
                </div>
            </div>
        </div>
        <div id="d1" className="new-header-dropdown">
            <div className="new-header-links">
                <p className="section-header"><b>Social Media</b></p>
                <p className="new-header-link">LinkedIn</p>
                <p className="section-header"><b>Documents</b></p>
                <p className="new-header-link">Resume</p>
            </div>
        </div> 
        <div id="d2" className="new-header-dropdown">
            <div className="new-header-links">
                <p className="section-header"><b>Halo: The Master Chief Collection</b></p>
                <p className="new-header-link">AlphaRing</p>
                <p className="section-header"><b>Minecraft</b></p>
                <p className="new-header-link">Middle Zealand Tweaks</p>
            </div>
        </div>
        <div id="d3" className="new-header-dropdown">
            <div className="new-header-links">
                <p className="section-header"><b>Books/Games</b></p>
                <p className="new-header-link">Gonkville</p>
                <p className="new-header-link">The Midguardians</p>
                <p className="section-header"><b>YouTube</b></p>
                <p className="new-header-link">Off the Grid</p>
            </div>
        </div>
        </div>
        </>
    )
}