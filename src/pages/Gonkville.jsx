import Generic from "./Generic"
import NeonButton from "../components/NeonButton";

function Gonkville() {
    return (
        <>
            <Generic
                updated = "06/29/2026"
                logoImage = "/images/logo_gonkville.png"
                logoText = "Logo of the Alpha Ring Halo mod"
                logoType = {1}
                bkgImage = "/images/synthwave_castle.png"
                frgImage = "/images/synthwave_trees.png"
                mascotImage = "/images/gusAndDale.png"
                mascotOffset={125}
            >
                <h2>A fantasy book series for kids!</h2>
                <p>
                    Everyone knows about those big-nosed gnomes that you see sitting around Midwestern
                    houses at Christmastime.  But what do they do the rest of the year?
                    <br/>
                    <br/> 
                    Gonkville is a kids' book series about gnomes in the medieval age.  Join Gus and his
                    pals as they go on all sorts of Viking adventures.  From fighting elves to helping out
                    on the farm.
                </p>
                <img src="/images/gus1.png" />
                <img src="/images/gus2.png" />
                <h4>Background</h4>
                <p>
                    As a kid, I was fascinated by Vikings and J.R.R Tolkien's <i>The Hobbit</i>.  That interest
                    has followed me into adulthood and inspired much of the fiction I write (including my graphic
                    novel series <a href="/midguardians">The Midguardians</a>).  I was also fascinated by Disney
                    cartoons, Nintendo games and Marvel comics.  The stories I grew up with were aspirational and
                    fun and filled with wonder.
                    <br/>
                    <br/>
                    The stories our children are growing up with are not.
                    <br/>
                    <br/>
                    As of the late 2010s, marketers have taken over the industry and turned storytelling into a business
                    problem.  They determined that children do not need quality whether it be writing, gameplay or animation.
                    In this fast paced world of iPads, YouTube Kids and Roblox, children are bombarded with slop.  
                    <br/>
                    <br/> 
                    Gonkville is my small attempt to fight against that.  
                    <br/>
                    <br/>
                    I have taken the things that I found wondrous from my childhood and turned them into a book series, 
                    the beginnnings of a video game and someday, an animated series of cartoons.  Taking on the industry
                    is not something I can do on my own.  But I do hope that other creators like myself will do the same.
                    Children deserve stories that inspire them to work hard, aim high and enjoy the world that God has created.
                    <br/>
                    <br/>
                    Gonkville is my small attempt to faciliate that.
                    <br/>
                    <br/>
                </p>
                <h4>More Information</h4>
                <p>
                    I hope you enjoy my book series if you choose to check it out!  Click the buttons below for more information
                    on the story of Gonkville.  Stay tuned for updates on my video game.
                </p>
                <NeonButton color={0} text="Website" icon={1} link="https://gonkville.com/" target="_blank" />
                <NeonButton color={1} text="Amazon" icon={1} link="https://www.amazon.com/dp/B0DFB9N6XW?binding=paperback&ref=dbs_dp_rwt_sb_pc_tpbk" target="_blank" />
            </Generic>
        </>
    )
}

export default Gonkville;