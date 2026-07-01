import { useState, useEffect, useRef } from 'react';
import FileExplorer from './FileExplorer';
import { PDFViewer } from '@embedpdf/react-pdf-viewer';
import '98.css';

function Resume() {
  const getMaxWidth = window.matchMedia("(max-width: 768px)").matches ? window.innerWidth : 1100;
  const [isMoving, setIsMoving] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [active, setActive] = useState(1);
  const [tasks, setTasks] = useState(
    [
      {
        "id": "doc1",
        "title": "Resume.pdf",
        "position": [0, 100],
        "size": [getMaxWidth, 720],
        "state": 0,
      }
    ]);
  const [clones, setClones] = useState([]);

  // states are as follows
  // 0: open, normal
  // 1: minimized
  // 2: fullscreen

  const dragOffset = useRef({ x: 0, y: 0 });
  const resizeOffset = useRef({
    direction: '',
    startX: 0,
    startY: 0,
    startWidth: 0,
    startHeight: 0,
    startLeft: 0,
    startTop: 0,
  });
  const maxim = 'calc(100vh - 115px)'
  const maximInner = 'calc(100vh - 145px)'

  function handleResizeDown(event, index, direction) {
    document.getElementById('desktop').classList.add("no-select");

    setActive(index + 1);
    setIsResizing(true);

    resizeOffset.current = {
      direction,
      startX: event.clientX,
      startY: event.clientY,
      startWidth: tasks[index].size[0],
      startHeight: tasks[index].size[1],
      startLeft: tasks[index].position[0],
      startTop: tasks[index].position[1],
    };
  }

  function handleSelect(event) {
    event.stopPropagation();
    handleUnselect(event);
    event.target.closest('.resume-icon').classList.add('selected')
  }

  function handleUnselect(event) {
    event.stopPropagation();
    const icons = document.getElementsByClassName('selected')
    for (let i = 0; i < icons.length; i++) {
      icons[i].classList.remove('selected');
    }
  }

  function handleFocus(event, index) {
    setActive(index);

    if (tasks[index - 1].state != 1) {
      return
    }

    setClones([{
      id: `${tasks[index - 1].id}Clone`,
      top: '90vh',
      left: '10vw',
      width: 100,
      height: 50
    }])

    setTimeout(() => {
      setClones([{
        id: `${tasks[index - 1].id}Clone`,
        top: `${tasks[index - 1].position[1]}px`,
        left: `${tasks[index - 1].position[0]}px`,
        width: tasks[index - 1].size[0],
        height: tasks[index - 1].size[1]
      }])
    }, 1);

    setTimeout(() => {
      setClones([])
      setTasks(prev =>
        prev.map((task, i) =>
          i === index - 1
            ? {
              ...task,
              state: 0,
            }
            : task
        )
      );
    }, 250);

  }

  function handleDefocus(event, index) {
    setActive(0);
  }

  function handleMaximize(event, index) {
    if (tasks[index].state === 0) {
      setTasks(prev =>
        prev.map((task, i) =>
          i === active - 1
            ? {
              ...task,
              state: 2,
            }
            : task
        )
      );
      return
    }
    setTasks(prev =>
      prev.map((task, i) =>
        i === active - 1
          ? {
            ...task,
            state: 0,
          }
          : task
      )
    );
  }

  function handleMinimize(event, index) {
    setClones([{
      id: `${tasks[index].id}Clone`,
      top: `${tasks[index].position[1]}px`,
      left: `${tasks[index].position[0]}px`,
      width: tasks[index].size[0],
      height: tasks[index].size[1]
    }]);

    setTimeout(() => {
      setClones([{
        id: `${tasks[index].id}Clone`,
        top: '90vh',
        left: '10vw',
        width: 100,
        height: 50
      }])
    }, 1);

    setTimeout(() => {
      setClones([])
      setTasks(prev =>
        prev.map((task, i) =>
          i === index
            ? {
              ...task,
              state: 1,
            }
            : task
        )
      );

      handleDefocus(event, 0);
    }, 250);

  }

  function handleClose(event, index) {
    event.stopPropagation();

    setClones([{
      id: `${tasks[index].id}Clone`,
      top: `${tasks[index].position[1]}px`,
      left: `${tasks[index].position[0]}px`,
      width: tasks[index].size[0],
      height: tasks[index].size[1]
    }]);

    setTimeout(() => {
      setClones([{
        id: `${tasks[index].id}Clone`,
        top: '50vh',
        left: '50vw',
        width: 0,
        height: 0
      }])
    }, 1);

    setTimeout(() => {
      setClones([])
    }, 250);

    setTasks(prev =>
      prev.filter((_, i) => i !== index)
    );
  }

  function handleMouseDown(event, index) {
    document.getElementById('desktop').classList.add("no-select");
    setActive(index + 1);
    setIsMoving(true);

    dragOffset.current = {
      x: event.clientX - tasks[index].position[0],
      y: event.clientY - tasks[index].position[1],
    };
  }

  function handleMouseUp() {
    document.getElementById('desktop').classList.remove("no-select");
    setIsMoving(false);
    setIsResizing(false);
  }

  function handleMouseMove(event) {

    if (isMoving) {
      const task = tasks[active - 1];

      let left = event.clientX - dragOffset.current.x;
      let top = event.clientY - dragOffset.current.y;

      const maxLeft = window.innerWidth - task.size[0] - 2;
      const maxTop = window.innerHeight - task.size[1] - 38;

      left = Math.max(0, Math.min(left, maxLeft));
      top = Math.max(80, Math.min(top, maxTop));

      setTasks(prev =>
        prev.map((task, i) =>
          i === active - 1
            ? {
              ...task,
              position: [left, top],
            }
            : task
        )
      );
    }

    if (isResizing) {
      const r = resizeOffset.current;

      let width = r.startWidth;
      let height = r.startHeight;
      let left = r.startLeft;
      let top = r.startTop;

      const dx = event.clientX - r.startX;
      const dy = event.clientY - r.startY;

      if (r.direction.includes("e"))
        width = r.startWidth + dx;

      if (r.direction.includes("s"))
        height = r.startHeight + dy;

      if (r.direction.includes("w")) {
        width = r.startWidth - dx;
        left = r.startLeft + dx;
      }

      if (r.direction.includes("n")) {
        height = r.startHeight - dy;
        top = r.startTop + dy;
      }

      width = Math.max(width, 300);
      height = Math.max(height, 200);

      setTasks(prev =>
        prev.map((task, i) =>
          i === active - 1
            ? {
              ...task,
              position: [left, top],
              size: [width, height],
            }
            : task
        )
      );
    }
  }

function handleOpen(event, type) {
    setTasks(prev => {
        if (prev.some(task => task.id === type.id))
            return prev;

        return [...prev, type];
    });

    setActive(prev => prev + 1);
}

  const lastTapRef = useRef(0);

  function handleClick(event, type) {
    const now = Date.now();
    const DOUBLE_TAP_DELAY = 300;

    if (now - lastTapRef.current < DOUBLE_TAP_DELAY) {
      handleOpen(event, type)

      lastTapRef.current = 0;
      return;
    }

    lastTapRef.current = now;

    handleSelect(event);
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isMoving, isResizing]);

  return (

    <div id="desktop" className="resume-desktop" onClick={(event) => handleUnselect(event)} style={{ backgroundImage: 'url(/images/cloud95.webp)' }}>
      {/* 
        resume document 
      */}

      {clones.length > 0 && clones.map((clone, index) => (
        // <Clone top={clone.top} left={clone.left} width={clone.width} height={clone.height} />
        <div className="window" key={clone.id} style={{
          position: 'absolute',
          top: `${clone.top}`,
          left: `${clone.left}`,
          width: `${clone.width}px`,
          height: `${clone.height}px`,
          backgroundColor: 'transparent',
          transition: 'all 0.2s linear',
          zIndex: 100
        }}>
          <div
            className="title-bar" style={{ height: '15px' }}
          >
          </div>
        </div>
      ))}

      {tasks.length > 0 && tasks.map((task, index) => (
        <div
          key={task.id}
          className={`window resume-window ${active - 1 === index ? "active" : ""}`}
          style={{
            display: `${task.state == 1 ? 'none' : 'block'}`,
            position: 'absolute',
            left: `${task.state == 2 ? '0px' : task.position[0] + 'px'}`,
            top: `${task.state == 2 ? '80px' : task.position[1] + 'px'}`,
            width: `${task.state == 2 ? '100vw' : task.size[0] + 'px'}`,
            height: `${task.state == 2 ? maxim : task.size[1] + 'px'}`
          }}
        >
          {[
            "n",
            "s",
            "e",
            "w",
            "ne",
            "nw",
            "se",
            "sw",
          ].map(dir => (
            <div
              key={dir}
              className={`resize-handle ${dir}`}
              onMouseDown={(e) => handleResizeDown(e, index, dir)}
            />
          ))}
          <div
            className="title-bar"
            onMouseDown={(event) => handleMouseDown(event, index)}
          >
            <div style={{ userSelect: 'none' }} className="title-bar-text">
              {task.title}
            </div>

            <div className="title-bar-controls">
              <button onMouseDown={(event) => handleMinimize(event, index)} aria-label="Minimize"></button>
              <button onMouseDown={(event) => handleMaximize(event, index)} aria-label="Maximize"></button>
              <button onMouseDown={(event) => handleClose(event, index)} aria-label="Close" />
            </div>
          </div>

          <div className="resume-wrapper" onClick={(event) => handleFocus(event, index + 1)}>
            {task.id == 'doc1' && (
              <PDFViewer
                config={{ src: '/files/resume.pdf' }}
                style={{
                  width: `${task.state == 2 ? '100vw' : task.size[0] + 'px'}`,
                  height: `${task.state == 2 ? maximInner : 'calc(' + task.size[1] + 'px - 25px)'}`
                }}
                onReady={() => {
                  const container = document.querySelector("embedpdf-container");

                  if (!container?.shadowRoot) return;

                  const style = document.createElement("style");
                  style.textContent = `
                  * {
                    -webkit-font-smoothing: none !important;
                    font-family: "Pixelated MS Sans Serif", Arial !important;
                    font-synthesis: none !important;
                    text-rendering: optimizeLegibility !important;
                  }
                `;

                  container.shadowRoot.appendChild(style);
                }}
              />
            )}
            {task.id == 'bio' && (
              <div className="txt-wrapper" onClick={(event) => handleFocus(event, index + 1)}>
                <p>
                  Hello!  My name is Jack Bittner.  I created this website.
                  <br />
                  <br />
                  I am a remote software engineer living on a hobby farm in Wisconsin.  I'm always writing whether it is code or stories.
                  When I'm not tending to my chickens, you'll find me in my office, coffee mug in hand, developing apps for
                  Northwestern Mutual, typing away at a video game project or writing my latest piece of fiction.
                  <br />
                  <br />
                  Thank you for visiting my website!  I hope you'll enjoy your stay.

                </p>
              </div>
            )}
            {task.id == 'linux' && (
              <div className="txt-wrapper" onClick={(event) => handleFocus(event, index + 1)}>
                <p>
                  Linux Blog #001
                  <br/>
                  <br/>
                  06/30/26
                  <br/>

                  I am an avid Linux user.  In 2025, I ditched Windows 10 before the EOL update and switched to Arch.
                  The process was arduous, but I pushed through.  I am happier with this setup than I ever have been with Windows (even XP).  
                  I run an Intel i9 with an NVIDIA 4080 Super so an extremely performant PC paired with the bloat-free OS that is Arch makes for
                  a near immediate experience.  I cannot overstate how much I enjoy Linux for gaming, writing code, rendering images in Blender and
                  even simple things like browsing the web or checking email.  The peace of mind that I get from knowing that my actions are not
                  being tracked and sold to advertisers is great too.  I am a big fan of data privacy and open source software.  That is why I started
                  my YouTube series "Off the Grid" although it largely became a devlog for my AlphaRing mod.  
                  <br/>
                  <br/>
                  Linux is what computing should be: simple, efficient and written in C.
                </p>
              </div>
            )}
            {task.id === "folder1" && (
              <div className="file-explorer">
                <FileExplorer openCb={handleOpen} getMaxWidth={getMaxWidth} />
              </div>
            )}
          </div>
        </div>
      ))}

      {/* 
        desktop icons
      */}
      <div className="resume-icons-container">
        <div
          onClick={(event) => handleClick(event, {
            "id": "folder1",
            "title": "My Computer",
            "position": [0, 100],
            "size": [getMaxWidth, 720],
            "minimized": false
          })}
          className="resume-icon">
          <div className="icon-wrapper">
            <img src="/images/icon_mycomputer.png" />
          </div>
          <span style={{ width: '80px' }}>My Computer</span>
        </div>
        <div
          onClick={(event) => handleClick(event, {
            "id": "doc1",
            "title": "Resume.pdf",
            "position": [0, 100],
            "size": [getMaxWidth, 720],
            "minimized": false
          })}
          className="resume-icon">
          <div className="icon-wrapper">
            <img src="/images/icon_doc.png" />
          </div>
          <span>Resume.pdf</span>
        </div>
        <div
          onClick={(event) => handleClick(event, {
            "id": "bio",
            "title": "AboutMe.txt",
            "position": [0, 100],
            "size": [getMaxWidth, 720],
            "minimized": false
          })}
          className="resume-icon">
          <div className="icon-wrapper">
            <img src="/images/icon_text.png" />
          </div>
          <span>AboutMe.txt</span>
        </div>
      </div>

      {/* 
        taskbar
      */}
      <div className="window taskbar">
        <div className="window-body">
          {tasks.length > 0 && tasks.map((task, index) => (
            active === (index + 1) ? (
              <div className="field-border-disabled taskbar-item" key={index}>
                <p><b>{task.title}</b></p>
              </div>
            ) : (
              <div onMouseDown={(event) => handleFocus(event, index + 1)} className="window taskbar-item" key={index}>
                <p><b>{task.title}</b></p>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
}

export default Resume;