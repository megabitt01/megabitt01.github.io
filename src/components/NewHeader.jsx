import { useState } from "react";
import SkeuoImage from "./SkeuoImage";
import '98.css';

const getAllD = () =>
    document.querySelectorAll(".new-header-dropdown");

function handleOver(e, n) {
    getAllD().forEach((ref) => {
        ref.classList.remove("dropped");
    });

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

function handleClick(e) {
    const burger = document.getElementById("burger");
    const bun = document.getElementById("bun");
    if (burger.classList.contains("open")) {
        bun.classList.remove("bun-open");
        burger.classList.remove("open");
        return
    }
    bun.classList.add("bun-open");
    burger.classList.add("open");
    return
}


export default function Header() {
    const [openSections, setOpenSections] = useState({
        about: true,
        modding: false,
        projects: false,
    });

    function toggleSection(section) {
        setOpenSections(prev => ({
            ...prev,
            [section]: !prev[section],
        }));
    }

    return (
        <>
            <div onMouseLeave={(event) => handleLeave(event)}>
                <div className="new-header-bar">
                    <div className="new-header-content">
                        <div className="new-header-home">
                            <img src="https://avatars.githubusercontent.com/u/71474581?v=4" className="new-header-image" />
                            <div className="new-header-text">
                                <h2 style={{ fontSize: '2em' }}>
                                    <a href="/">megabitt</a>
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
                        <div onClick={(event) => handleClick(event)} id="burger">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
                <div id="bun" className="window">
                    <div className="window-body bun-container">

                        <div className="new-header-links">
                            <h4
                                onClick={() => toggleSection("about")}
                                style={{ cursor: "pointer" }}
                            >
                                <b>About Me {openSections.about ? " - " : " + "}</b>
                            </h4>

                            <div className="divider">
                                ##########################################
                            </div>
                            <div className="links-block" style={{ height: `${openSections.about ? "150px" : "0px"}` }}>


                                <div
                                    className={`links-container ${openSections.about ? "links-open" : ""
                                        }`}
                                >
                                    <p className="section-header"><b>Social Media</b></p>
                                    <p className="new-header-link">
                                        <a href="https://www.linkedin.com/in/jack-bittner/" target="_blank">
                                            LinkedIn
                                        </a>
                                    </p>

                                    <p className="section-header"><b>Documents</b></p>
                                    <p className="new-header-link">
                                        <a href="/resume">Resume & More</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="new-header-links">
                            <h4
                                onClick={() => toggleSection("modding")}
                                style={{ cursor: "pointer" }}
                            >
                                <b>Modding {openSections.modding ? " - " : " + "}</b>
                            </h4>

                            <div className="divider">
                                ##########################################
                            </div>
                            <div className="links-block" style={{ height: `${openSections.modding ? "200px" : "0px"}` }}>


                                <div
                                    className={`links-container ${openSections.modding ? "links-open" : ""
                                        }`}
                                >
                                    <p className="section-header"><b>Halo: The Master Chief Collection</b></p>
                                    <p className="new-header-link"><a href="/alpharing">AlphaRing</a></p>
                                    <p className="section-header"><b>Minecraft</b></p>
                                    <p className="new-header-link"><a href="/middlezealand">Middle Zealand Tweaks</a></p>
                                    <p className="new-header-link"><a href="/pswg">Parzi's Star Wars Mod (1.20.1 Build)</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="new-header-links">
                            <h4
                                onClick={() => toggleSection("projects")}
                                style={{ cursor: "pointer" }}
                            >
                                <b>Projects {openSections.projects ? " - " : " + "}</b>
                            </h4>

                            <div className="divider">
                                ##########################################
                            </div>
                            <div className="links-block" style={{ height: `${openSections.projects ? "200px" : "0px"}` }}>


                                <div
                                    className={`links-container ${openSections.projects ? "links-open" : ""
                                        }`}
                                >
                                    <p className="section-header"><b>Books/Games</b></p>
                                    <p className="new-header-link"><a href="/gonkville">Gonkville</a></p>
                                    <p className="new-header-link"><a href="/midguardians">The Midguardians</a></p>
                                    <p className="section-header"><b>YouTube</b></p>
                                    <p className="new-header-link"><a href="/offthegrid">Off the Grid</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="d1" className="new-header-dropdown">
                    <div className="new-header-links">
                        <p className="section-header"><b>Social Media</b></p>
                        <p className="new-header-link"><a href="https://www.linkedin.com/in/jack-bittner/" target="_blank">LinkedIn</a></p>
                        <p className="section-header"><b>Documents</b></p>
                        <p className="new-header-link"><a href="/resume">Resume & More</a></p>
                    </div>
                </div>
                <div id="d2" className="new-header-dropdown">
                    <div className="new-header-links">
                        <p className="section-header"><b>Halo: The Master Chief Collection</b></p>
                        <p className="new-header-link"><a href="/alpharing">AlphaRing</a></p>
                        <p className="section-header"><b>Minecraft</b></p>
                        <p className="new-header-link"><a href="/middlezealand">Middle Zealand Tweaks</a></p>
                        <p className="new-header-link"><a href="/pswg">Parzi's Star Wars Mod (1.20.1 Build)</a></p>
                    </div>
                </div>
                <div id="d3" className="new-header-dropdown">
                    <div className="new-header-links">
                        <p className="section-header"><b>Books/Games</b></p>
                        <p className="new-header-link"><a href="/gonkville">Gonkville</a></p>
                        <p className="new-header-link"><a href="/midguardians">The Midguardians</a></p>
                        <p className="section-header"><b>YouTube</b></p>
                        <p className="new-header-link"><a href="/offthegrid">Off the Grid</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}