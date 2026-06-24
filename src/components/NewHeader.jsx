import { useState } from "react";
import SkeuoImage from "./SkeuoImage";

export default function Header() {
    const [ cursor, setCursor ] = useState(false);
    return(
        <>
        <div className="new-header-bar">
            <div className="new-header-content">
                <img src="https://avatars.githubusercontent.com/u/71474581?v=4" className="new-header-image" />
                <div className="new-header-text">
                    <h2 style={{fontSize: '2em'}}>
                        thejackbitt{cursor ? "█" : ""}
                    </h2>
                </div>
            </div>
        </div>
        <div className="new-header-dropdown d1">
            <div className="new-header-links">
                <p className="section-header"><b>Social Media</b></p>
                <p className="new-header-link">LinkedIn</p>
                <p className="section-header"><b>Documents</b></p>
                <p className="new-header-link">Resume</p>
            </div>
        </div> 
        <div className="new-header-dropdown d2">
            <div className="new-header-links">
                <p className="section-header"><b>Halo: The Master Chief Collection</b></p>
                <p className="new-header-link">AlphaRing</p>
                <p className="section-header"><b>Minecraft</b></p>
                <p className="new-header-link">Middle Zealand Tweaks</p>
            </div>
        </div>
        <div className="new-header-dropdown d3">
            <div className="new-header-links">
                <p className="section-header"><b>Books/Games</b></p>
                <p className="new-header-link">Gonkville</p>
                <p className="new-header-link">The Midguardians</p>
                <p className="section-header"><b>YouTube</b></p>
                <p className="new-header-link">Off the Grid</p>
            </div>
        </div>
        </>
    )
}