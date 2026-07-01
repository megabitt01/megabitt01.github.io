function Icon({type}) {
    return (
        <>
            <div className="sidebar-wrapper">
                {type === "folder" && (
                    <img src='/images/icons/folder.png' alt="folder icon" />
                )}
                {type === "drive" && (
                    <img src='/images/icons/drive.png' alt="drive icon" />
                )}
                {type === "doc" && (
                    <img src='/images/icons/doc.png' alt="doc icon" />
                )}
            </div>
        </>
    )
}

export default Icon;