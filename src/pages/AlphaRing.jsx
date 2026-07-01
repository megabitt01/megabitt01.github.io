import Generic from "./Generic"
import NeonButton from "../components/NeonButton";

function AlphaRing() {
    return (
        <>
            <Generic
                updated = "06/25/2026"
                logoImage = "/images/logo_alpharing.png"
                logoText = "Logo of the Alpha Ring Halo mod"
                mascotImage = "/images/john_flipped.png"
            >
                <h2>Party like it's 2008!</h2>
                <p>
                    AlphaRing is an open source mod project for Halo the Master Chief Collection that
                    implements as highly requested feature: the ability to play with up to 4 friends on one screen.  Originally developed by <a href="https://github.com/WinterSquire">WinterSquire</a>,
                    I have become the maintainer of this project.  <a href="https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbS0wb0xUalp1MFNrSmJicWtHTHFjM1dRUG5oZ3xBQ3Jtc0ttSDhlMnc1TmlyVzBRcVlCbEhBUUduX21vRzdDOFlaUFEyY1FUMHkxT2ktVEpVN0dsT2lXSmpIZk5wS3prNkRwREtSYjcyVkhKYVJMR1JJVnpuaTNKY3B0Q0h3ZVI3dGFXZXJhZWhEUkctWEwtdE9DTQ&q=https%3A%2F%2Fdiscord.gg%2FpxwuWUYGP&v=M26Mzan8SNM">Join our Discord</a> to stay updated!
                </p>
                <img src="/images/splitscreen.png" />
                <img src="/images/splitscreen2.png" />
                <h4>Features</h4>
                <ul>
                    <li>Splitscreen (all games)</li>
                    <li>Controller-Friendly Menu *NEW*</li>
                    <li>Camera Tool (H3)</li>
                    <li>Object Browser (H3)</li>
                </ul>
                <h4>Installation</h4>
                <p>
                    Make sure you have the latest Microsoft Visual C++ Redistributable installed.
                    <br />
                    <br />
                    Download the latest stable build from the Releases page.
                    <br />
                    <br />
                    Place the DLL into the "Halo The Master Chief Collection\mcc\binaries\win64" directory and launch the game with EAC off.
                    <br />
                    <br />
                    For Running on Steam Deck/Linux, add the following command in the Steam Game Launch Options:
                    <br />
                    <code>WINEDLLOVERRIDES="WTSAPI32=n,b" %command%</code>
                </p>

                <h4>Configure the game:</h4>
                <p>

                    Right-click MCC → Properties → Compatibility
                    <br />
                    <br />
                    Enable "Force the use of a specific Steam Play compatibility tool"
                    <br />
                    <br />
                    Select any Proton version (Proton 9.0, Experimental, or Proton GE all work)
                    <br />
                    <br />
                    Set launch options: Add the following to Steam Launch Options:
                    <br />
                    <code>WINEDLLOVERRIDES="WTSAPI32=n,b" %command%</code>
                    <br />
                </p>
                <h4>Controller Setup (Important for non-Xbox controllers)</h4>
                <p>
                    For 8BitDo and other third-party controllers, enable Steam Input for the controller
                    <br />
                    <br />
                    Go to Steam → Settings → Controller → Enable "Xbox Configuration Support"
                    <br />
                    <br />
                    This allows Steam to translate your controller inputs to XInput, which MCC and AlphaRing expect
                    <br />
                    <br />
                    Without this, some buttons (like A or stick clicks) may not be detected
                </p>

                <h4>Usage</h4>
                <p>
                    Toggle menu: F4 or Left Thumbstick + Start

                    To navigate using Controller use the Right Stick to move the mouse and RB to click.
                </p>

                <h4>Development</h4>
                <p>
                    The story of this project is entirely community driven.  I didn't set out to become the maintainer of this project.  
                    Like many of my mod projects, I forked the repository to add a feature that I personally wanted.  In early 2026, I added a save/load profile
                    feature because I was tired of having to set up my settings each time I played Halo with Alpha Ring.  
                    Soon, my fork was forked by a user named <a href="https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqa3BJWWNFeEl2UnhBWWZyUEtpbkZfcW9FRWlPUXxBQ3Jtc0tsNmlLYzRRWnM4YWNtcjFiWVNYY0hOSkFQRVdHczVKTmlQUmRjNzdVQjduQk5yZUE4WWJJRnJKMGhza0RjLU9NUS13SmFQNzBDQTF0c3dSOW9oNTNrV25PTnlITWp6T2Z0RGJybTUtLW1HN1djaDMxWQ&q=https%3A%2F%2Fgithub.com%2Fkirklandsig&v=M26Mzan8SNM">kirklandsig</a> who
                    added several new fixes.
                    <br/>
                    <br/>
                    Many users in the old Discord server reached out to kirklandsig and I for assistance in setting this mod up.  So, I 
                    decided to create a <a href="https://www.youtube.com/watch?v=IRZPdAJFkc8&t=2s">YouTube tutorial</a> on getting started.
                    The response to this video was so positive that I decided to continue developing the mod.  Due to an influx of scammers
                    swarming the old Discord server, I created a new one.  On May 6th, the old Discord server disappeared, leaving my new Discord
                    server as the only way for users to stay up-to-date on the mods development.
                    <br/>
                    <br/>
                    The development process has been an adventure for me and the community.  I taught myself C++ in order to mess around in the original fork
                    and then expanded my knowledge even further in order to create a controller-friendly UI from scratch.  I have enjoyed working on
                    new features of this and seeing how this mod has brought a community together.  I am very grateful to have the kind support and feedback
                    that I have received.
                    <br/>
                    <br/>
                    Happy slaying, Spartans!
                </p>
                <NeonButton color={0} text="Download" icon={2} link="https://github.com/thejackbitt/AlphaRing/releases/download/1.3.0/WTSAPI32.dll" />
                <NeonButton color={1} text="Repository" icon={1} link="https://github.com/thejackbitt/AlphaRing/tree/master-chief" target="_blank" />
            </Generic>
        </>
    )
}

export default AlphaRing;