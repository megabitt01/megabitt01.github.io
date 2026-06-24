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
        </>
    )
}