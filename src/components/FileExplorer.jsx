import { useState, useRef } from 'react';
import Icon from './Icon'
import { element } from 'three/tsl';


function FileExplorer({openCb, getMaxWidth}) {
    function openParent(event) {
        const details = event.currentTarget.closest("details");
        if (details) {
            details.open = true;
        }
    }

    function handleSelect(event) {
        event.stopPropagation();
        handleUnselect(event)
        event.target.closest('.tree-item')?.classList.add('selected')
        event.target.closest('.fe-item')?.classList.add('selected')
    }

    function handleUnselect(event) {
        event.stopPropagation();
        const icons = document.getElementsByClassName('selected')
        for (let i = 0; i < icons.length; i++) {
            icons[i].classList.remove('selected');
        }
    }

    const lastTapRef = useRef(0);

    function handleClick(event, type, cb) {
        const now = Date.now();
        const DOUBLE_TAP_DELAY = 300;

        if (now - lastTapRef.current < DOUBLE_TAP_DELAY) {
            cb(event, type)

            lastTapRef.current = 0;
            return;
        }

        lastTapRef.current = now;

        handleSelect(event);
    }
    const fileTree = [
        {
            id: 'desktop',
            icon: 'icon_folder',
            title: 'DESKTOP',
            contents: [
                {
                    id: 'resume',
                    icon: 'icon_doc',
                    title: 'Resume.pdf',
                    cb: openCb,
                    type: {
                        "id": "doc1",
                        "title": "Resume.pdf",
                        "position": [0, 100],
                        "size": [getMaxWidth, 720],
                        "minimized": false
                    }
                },
                {
                    id: 'aboutMe',
                    icon: 'icon_text',
                    title: 'AboutMe.txt',
                    cb: openCb,
                    type: {
                        "id": "bio",
                        "title": "AboutMe.txt",
                        "position": [0, 100],
                        "size": [getMaxWidth, 720],
                        "minimized": false
                    }
                }
            ]
        },
        {
            id: 'documents',
            icon: 'icon_folder',
            title: 'DOCUMENTS',
            contents: [
                {
                    id: 'favWebsites',
                    icon: 'icon_text',
                    title: 'Linux.txt',
                    cb: openCb,
                    type: {
                        "id": "linux",
                        "title": "Linux.txt",
                        "position": [0, 100],
                        "size": [getMaxWidth, 720],
                        "minimized": false
                    }
                }
            ]
        },
        {
            id: 'pictures',
            icon: 'icon_folder',
            title: 'PICTURES',
            contents: [
            ]
        },
        {
            id: 'music',
            icon: 'icon_folder',
            title: 'MUSIC',
            contents: [

            ]
        },
    ];

    function renderTree(nodes, isChild = false) {
        return nodes.map((node) => {
            const hasChildren = node.contents && node.contents.length > 0;

            if (hasChildren) {
                return (
                    <li key={`tree_${node.id}`}>
                        <details>
                            <summary
                                className={`tree-list ${isChild ? 'tree-child' : ''}`}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setItems(node.contents);
                                }}
                            >
                                <Icon type="folder" /> {node.title}
                            </summary>

                            <ul>
                                {renderTree(node.contents, true)}
                            </ul>
                        </details>
                    </li>
                );
            }

            return (
                <li
                    key={node.id}
                    className="tree-item"
                    onClick={(e) => {
                        e.stopPropagation();
                        handleClick(e, node.type, node.cb)
                        // setItems([]);
                    }}
                >
                    <Icon type={node.icon === "icon_folder" ? "folder" : "doc"} /> {node.title}
                </li>
            );
        });
    }

    const [items, setItems] = useState([
    ]);

    return (
        <>
            <div style={{ position: 'absolute', display: 'flex', width: 'calc(100% - 8px)', minHeight: 'calc(100% - 30px)' }}>
                <div className="field-border file-tree" style={{ flex: '1', padding: '8px', minWidth: '180px' }}>
                    <ul className="tree-view">
                        <details open>
                            <summary className="tree-list"><Icon type="drive" />C:\</summary>
                            <ul>
                                {renderTree(fileTree)}
                            </ul>
                        </details>
                    </ul>
                </div>
                <div className="field-border" style={{ flex: 3, padding: '2px', maxHeight: '100%', overflow: 'scroll' }}>
                    <div className="window" style={{ marginBottom: '8px', display: 'flex', overflow: 'hidden' }}>
                        <button style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '5px 0px' }}><img style={{ width: '25px' }} src='/images/icons/back_arrow.png' />Back</button>
                        <button style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '5px 0px' }}><img style={{ width: '25px' }} src='/images/icons/forward_arrow.png' />Forward</button>
                        <div className="field-row" style={{ paddingLeft: '8px' }}>
                            {/* <label for="text17"><p>Search</p></label> */}
                            {/* <input id="text17" type="text" bind:value={nextAddress}/> */}
                        </div>
                    </div>
                    <div style={{ padding: '0px 12px', display: 'flex' }}>
                        {items.length > 0 && items.map((item, index) => (
                            <div key={`fe_${item.id}`} className="fe-item" onClick={(e) => handleClick(e, item.type, item.cb)}>
                                <img src={`/images/${item.icon}.png`} />
                                <p>{item.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default FileExplorer;