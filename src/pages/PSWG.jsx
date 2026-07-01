import Generic from "./Generic"
import NeonButton from "../components/NeonButton";

function PSWG() {
    return (
        <>
            <Generic
                updated="06/29/2026"
                logoImage="/images/logo_pswg.png"
                logoText="Logo of the Alpha Ring Halo mod"
                logoType={1}
                bkgImage="/images/space.png"
                frgImage=""
                mascotImage="/images/minecraft2.png"
                mascotOffset={125}
            >
                <h2>Explore the galaxy with the PSWG Mod!</h2>
                <p>
                    <a href="https://www.curseforge.com/minecraft/mc-mods/pswg">Galaxies: Parzi's Star Wars Mod</a> is 
                    by far the best Star Wars mod for Minecraft on the market.  The developer, parzivail, chose to skip
                    version 1.20.1 when updating his mod so I created my own backport in order to use it with exclusively
                    1.20.1 mods.  
                </p>
                <img src="/images/lightsaber.png" />
                <img src="/images/blaster.png" />
                <h4>Features</h4>
                <ul>
                    <li><a href="https://www.curseforge.com/minecraft/mc-mods/pswg/files/all?page=1&pageSize=20&showAlphaFiles=hide">PSWG mod</a> 1.19.4 alpha build ported to 1.20.1</li>
                </ul>
                <h4>Installation</h4>
                <p>
                    This mod requries the latest version of Fabric for Minecraft 1.20.1.  <a href="https://fabricmc.net/2023/05/25/120.html">Fabric is avaiable for download here.</a>
                    <br />
                    <br />
                    It also requires the following mods to be installed in your <code>/mods</code> directory:
                </p>
                    <ul>
                        <li><a href="https://www.curseforge.com/minecraft/mc-mods/fabric-api">Fabric API <i>by modmuss50</i></a></li>
                        <li><a href="https://www.curseforge.com/minecraft/mc-mods/cardinal-components-api">Cardinal Components <i>by UpcraftLP</i></a></li>
                        <li><a href="https://www.curseforge.com/minecraft/mc-mods/cloth-config/files">Cloth Config <i>by shedaniel</i></a></li>
                        <li><a href="https://www.curseforge.com/minecraft/mc-mods/modmenu/files">Mod Menu <i>by Prospector</i></a></li>
                        <li><a href="https://www.curseforge.com/minecraft/mc-mods/trinkets">trinkets <i>by EmilyPloszaj</i></a></li>
                    </ul>
                <h4>Development</h4>
                <p>
                    Much like <a href='/middlezealand'>Middle Zealand Tweaks</a>, this mod project came about because I wanted to play
                    parzivail's Star Wars mod in a modpack with my brother.  We had a modpack filled with mods exclusively made for 
                    Minecraft 1.20.1.  So, I looked at the repository for PSWG and began changing build variables in the Kotlin config
                    to target 1.20.1.  This, of course, resulted in build errors.  I resolved the build errors until it successfully
                    compiled.  Unfortunately, this work was done prior to my Arch Linux conversion and I lost the local repository
                    to a drive format.  The only remnant of my work that remains is the compiled mod itself (which is the main
                    thing that matters, I suppose).
                    <br/>
                    <br/>
                    The repository link below exists purely to provide a way for people looking to play this mod on 1.20.1 to find it
                    on Github.  No code in the repository was written/modified by me since my work was done locally on an old system.
                </p>
                <NeonButton color={0} text="Download" icon={2} link="https://github.com/thejackbitt/GalaxiesParzisStarWarsMod/releases/download/0.0.109%2B1.20.1/pswg-hacked-1.20.1.jar" />
                <NeonButton color={1} text="Repository" icon={1} link="https://github.com/thejackbitt/GalaxiesParzisStarWarsMod" target="_blank" />
            </Generic>
        </>
    )
}

export default PSWG;