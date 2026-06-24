export default function NeonButton({color = 0, text, link = undefined}) {
    return (
        <>
        <button class={`neon-btn ${color == 0 ? "neon-btn-pink" : "neon-btn-blue"}`}>{text}</button>
        </>
    )
}