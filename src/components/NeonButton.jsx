export default function NeonButton({color = 0, text, link = undefined}) {
    return (
        <>
        <button className={`neon-btn ${color == 0 ? "neon-btn-pink" : "neon-btn-blue"}`}>{text}</button>
        </>
    )
}