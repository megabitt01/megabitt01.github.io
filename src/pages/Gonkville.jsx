import Generic from "./Generic"
import NeonButton from "../components/NeonButton";

function Gonkville() {
    return (
        <>
            <Generic
                updated = "06/25/2026"
                logoImage = "/images/logo_gonkville.png"
                logoText = "Logo of the Alpha Ring Halo mod"
                logoType = {1}
                bkgImage = "/images/synthwave_castle.png"
                frgImage = "/images/synthwave_trees.png"
                mascotImage = "/images/gusAndDale.png"
                mascotOffset={125}
            >
                <h2>Party like it's 2008!</h2>
                <p>
                    AlphaRing is an open souce mod project for
                    Halo the Master Chief Collection.
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
                <NeonButton color={0} text="Download" icon={2} link="https://github.com/thejackbitt/AlphaRing/releases/download/1.3.0/WTSAPI32.dll" />
                <NeonButton color={1} text="Repository" icon={1} link="https://github.com/thejackbitt/AlphaRing/tree/master-chief" target="_blank" />
            </Generic>
        </>
    )
}

export default Gonkville;