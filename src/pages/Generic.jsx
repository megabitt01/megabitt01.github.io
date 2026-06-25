import { useEffect, useState } from "react";

function Generic({
    children, 
    logoImage, 
    logoText,
    mascotImage = "/images/jack.png",
    frgImage = "/images/synthwave_foreground.png",
    bkgImage = "/images/synthwave_mountains.png",
    mascotOffset = 50,
    frgOffset = -450,
    bkgOffset = -300,
    updated
}) {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setScrollY(window.scrollY);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const parallax1 = bkgOffset + scrollY * 0.1;
    const parallax2 = frgOffset + scrollY * 0.2;
    const parallax3 = mascotOffset + scrollY * 0.4; 
    return (
        <>
            <div className="gen-header-container">
                <img
                    className="bkg"
                    style={{ transform: `translateY(${parallax1}px)` }}
                    src={bkgImage}
                    alt=""
                />
                <img
                    className="frg"
                    style={{ transform: `translateY(${parallax2}px)` }}
                    src={frgImage}
                    alt=""
                />
                <img
                    className="main"
                    style={{ transform: `translateY(${parallax3}px)` }}
                    src={mascotImage}
                    alt=""
                />
                <div className="logo-container">
                <img
                    className="logo"
                    src={logoImage}
                    alt={logoText}
                /> 
                </div>
            </div>
            <div className="gen-content-wrapper">
                <div className="gen-content">
                    <p className="gen-updated"><i>last updated: {updated}</i></p>
                    {children}
                </div>
            </div>
            <br/>
            <br/>
        </>
    );
}

export default Generic;