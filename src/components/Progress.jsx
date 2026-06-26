import { useEffect, useState } from 'react'
import '98.css'

function Progress() {
    const [ width, setWidth ] = useState(0);
    useEffect(() => {
        setWidth(25)
        setTimeout(() => {
            setWidth(35)
        }, 800)
        setTimeout(() => {
            setWidth(85)
        }, 1600)
        setTimeout(() => {
            setWidth(100)
        }, 1800)
    }, [])
    return (
        <>
            <div className="progress-wrapper">
                <div className="window" role="tabpanel">
                    <div className="window-body">
                        <div className="progress-indicator segmented" style={{ width: '90vw' }}>
                            <span className="progress-indicator-bar" style={{ transition: 'all 0.2s linear', width: `${width}%` }} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Progress