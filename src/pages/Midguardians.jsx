import Generic from "./Generic"
import NeonButton from "../components/NeonButton";

function Midguardians() {
    return (
        <>
            <Generic
                updated = "07/01/2026"
                logoImage = "/images/logo_midguardians.png"
                logoText = "Logo of the Alpha Ring Halo mod"
                logoType = {1}
                bkgImage="/images/synthwave_cityscape.png"
                frgImage=""
                mascotImage = "/images/haakon.png"
                mascotOffset={125}
            >
                <h2>Only the tip of the iceberg...</h2>
                <p>
                    The Midguardians is a graphic novel series set in an alternate
                    (or maybe, not so alternate) universe where ancient aliens run every aspect of society. 
                    Join a troubled teen named Alex as she uncovers the secrets of a new world she didn't 
                    know existed.
                </p>
                <img src="/images/midguardians2.png" />
                <img src="/images/midguardians1.png" />
                <h4>Background</h4>
                <p>
                    This project draws inspiration from conspiracy theories, Norse mythology and his 
                    experience growing up in Minneapolis. I created the series as a love-letter to 
                    90s nostalgia and the comic books I grew up reading.  Coming up with the design
                    for the characters has been an ongoing process and, since I am currently devoting
                    my attention to Gonkville, it still is.  If you want to see my concept art, here's
                    a <a href="https://themidguardians.com/conceptart">secret link</a>.
                    <br/>
                    <br/>
                    My art is a mixture of Blender and Krita.  When characters are seeing the world
                    without special lenses, everything is black, whtie and very, very dark gray.  
                    When this is the case, I draw characters using 3D character models in Blender as
                    a reference.  When seeing the truth, characters look colorful and are rendered with
                    classic comic book effects.  For this, I take those same character models and render
                    them with custom shaders in Blender.
                    <br/>
                    <br/>
                    I have written an extensive storyline with lore and backstory.  I'd share more on
                    here but that would ruin the mystery.  Instead, you'll have to wait for the 
                    completion of Issue #1.
                </p>
                <h4>More Information</h4>
                <p>
                    I hope you'll enjoy this fusion of punk art and urban legends when Issue #1 is released.  Stay tuned!
                </p>
                <NeonButton color={0} text="Preview" icon={1} link="https://themidguardians.com/gallery" target="_blank" />
                <NeonButton color={1} text="Website" icon={1} link="https://themidguardians.com/" target="_blank" />
            </Generic>
        </>
    )
}

export default Midguardians;