import Generic from "./Generic"
import NeonButton from "../components/NeonButton";

function MiddleZealand() {
    return (
        <>
            <Generic
                updated="06/28/2026"
                logoImage="/images/logo_middlezealand.png"
                logoText="Logo of the Alpha Ring Halo mod"
                bkgImage="/images/synthwave_minecraft_mountains.png"
                frgImage="/images/synthwave_minecraft_foreground.png"
                mascotImage="/images/minecraft.png"
                mascotOffset={125}
            >
                <h2>A bridge for LOTR and Battlegear 2!</h2>
                <p>
                    Middle Zealand Tweaks is a mod I designed for a modpack entitled Middle Zealand that my brother made.  
                    It adds in faction-specific shields that are compatible with the LOTR mod in addition to a new
                    killstreak system.
                </p>
                <img src="/images/sword_and_shield.png" />
                <img src="/images/killstreak.png" />
                <h4>Features</h4>
                <ul>
                    <li>38 Unique Shields</li>
                    <li>5 Unique "Killstreak" Swords</li>
                    <li>Killstreak System</li>
                </ul>
                <img src="/images/mz_shields.png"/>
                <p>From Gondor to Far Harad, every faction gets a unique shield.  This mod adds in 38 shields, all of which
                    are craftable via their respective faction crafting tables.
                </p>
                <img src="/images/mz_weapons.png"/>
                <p>The 5 Swords: (from left) Bardsbane, Braveheart, The Crucible, The Master Sword, Warhammer 40K.</p>
                <h4>Installation</h4>
                <p>
                    This mod requries the latest version of Forge for Minecraft 1.7.10.  <a href="https://files.minecraftforge.net/net/minecraftforge/forge/index_1.7.10.html">Forge is avaiable for download here.</a>
                    <br />
                    <br />
                    It also requires the following mods to be installed in your <code>/mods</code> directory:
                    <ul>
                        <li><a href="https://www.curseforge.com/minecraft/mc-mods/the-lord-of-the-rings-mod-legacy">The Lord of the Rings Mod: Legacy <i>by Mevans</i></a></li>
                        <li><a href="https://www.curseforge.com/minecraft/mc-mods/mb-battlegear-2">Mine & Blade: Battlegear 2 <i>by amedwards</i></a></li>
                    </ul>
                </p>

                <h4>Development</h4>
                <p>
                    My brother, who is an avid fan of the LOTR books, wanted to build an immersive Minecraft modpack experience for him and 
                    his friends.  As a recent bootcamp graduate in 2024, I wanted to learn a new language.  So, I taught myself the basics of Java
                    and got to work.  I used Eclipse for development but I did not enjoy working with it and have used VS Code for more recent projects.
                    <br/>
                    <br/>
                    The request was simple: add the 38 shields from the LOTR mod into the game as usable Battlegear 2 shields.  
                </p>
                <NeonButton color={0} text="Download" icon={2} link="https://github.com/thejackbitt/middle-zealand-tweaks/releases/download/1.1/middle-zealand-tweaks-1.0.jar" />
                <NeonButton color={1} text="Repository" icon={1} link="https://github.com/thejackbitt/middle-zealand-tweaks" target="_blank" />
            </Generic>
        </>
    )
}

export default MiddleZealand;