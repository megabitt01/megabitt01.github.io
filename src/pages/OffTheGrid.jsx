import Generic from "./Generic"
import NeonButton from "../components/NeonButton";

function OffTheGrid() {
    return (
        <>
            <Generic
                updated = "07/01/2026"
                logoImage = "/images/logo_offthegrid.png"
                logoText = "Logo of the Alpha Ring Halo mod"
                bkgImage = "/images/synthwave_room.png"
                frgImage = ""
                mascotImage = "/images/jack.png"
                mascotOffset={140}
            >
                <h2>Open Source Software for the win!</h2>
                <p>
                    Originally created as a means of showcasing my journey from Windows + Adobe to Linux + 
                    KDE, <a href="https://www.youtube.com/@the_jack_bitt/">Off the Grid</a> has become my devlog series 
                    on my open source Halo mod <a href="/alpharing">AlphaRing</a>.  Subscribe for videos about 
                    how open source software can improve your life!
                </p>
                <img src="/images/desktop.png" />
                <h4>Background</h4>
                <p>
                    In 2025, Microsoft ended security updates for Windows 10.  Up until Windows 11's release, I had been
                    an ardent defender of Microsoft.  Windows XP was my favorite OS and Windows 10 was a close second.
                    As the reality of Windows 11's disappointing experience set in, I became disillusioned and planned 
                    to jump ship at the end of support for Windows 10.
                    <br/>
                    <br/>
                    At the same time, I had become disllusioned with Adobe.  In college and beyond I was an avid user of
                    Premiere, After Effects, Photoshop and Illustrator.  But when I got married, changed careers and began 
                    looking for ways to save on my monthly budget, I determined cutting out Adobe would be a great way to 
                    save $60/mo.
                    <br/>
                    <br/>
                    And thus began my exciting journey into Linux and open source software.  While I will go over my
                    full journey in a future video, I will say my investigation led me to an amazing operating system
                    (Arch Linux) and a host of amazing creative programs written by a talented community of open source software
                    engineers.  Switching my family to Linux and KDE programs has made my life better (and more fun).  I
                    would invite all of my viewers to consider this as well.
                </p>
                <h4>More Information</h4>
                <p>
                    If this type of content interests you, subscribe to my YouTube channel!  I post tech related
                    videos on a semi-frequent basis.
                </p>
                <NeonButton color={1} text="YouTube" icon={1} link="https://www.youtube.com/@the_jack_bitt" target="_blank"/>
            </Generic>
        </>
    )
}

export default OffTheGrid;