import { useState, useEffect, useRef } from 'react';
import { PDFViewer } from '@embedpdf/react-pdf-viewer';
import '98.css';

function Resume() {
  const [isMoving, setIsMoving] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [active, setActive] = useState(1);
  const [tasks, setTasks] = useState(
    [
      {
        "id": "doc1",
        "title": "Resume.pdf",
        "position": [0, 100],
        "size": [1000, 720],
        "state":0,
      }
    ]);

  // states are as follows
  // 0: open, normal
  // 1: minimized
  // 2: fullscreen

  const dragOffset = useRef({ x: 0, y: 0 });

  function handleFocus(event, index) {
    console.log(tasks, index);
    setActive(index);
    setTasks(prev =>
      prev.map((task, i) =>
        i === index-1
          ? {
              ...task,
              state: 0,
            }
          : task
      )
    );
  }
  
  function handleDefocus(event, index) {
    setActive(0);
  }

  function handleMaximize(event, index) {
    if(tasks[index].state === 0) {
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
    handleDefocus(event, 0);
    setTasks(prev =>
      prev.map((task, i) =>
        i === active - 1
          ? {
              ...task,
              state: 1,
            }
          : task
      )
    );
  }

  function handleClose(event, index) {
    event.stopPropagation();
    setTasks(tasks[index]);
  }

  function handleMouseDown(event, index) {
    setIsMoving(true);

    dragOffset.current = {
      x: event.clientX - tasks[index].position[0],
      y: event.clientY - tasks[index].position[1],
    };
  }

  function handleMouseUp() {
    setIsMoving(false);
  }

  function handleMouseMove(event) {
    if (isMoving) {
      // setPosition({
      //   left: event.clientX - dragOffset.current.x,
      //   top: event.clientY - dragOffset.current.y,
      // });
      setTasks(prev =>
        prev.map((task, i) =>
          i === active - 1
            ? {
                ...task,
                position: [
                  event.clientX - dragOffset.current.x,
                  event.clientY - dragOffset.current.y,
                ],
              }
            : task
        )
      );
    }
  }

  function handleOpen(event, type) {
    if(tasks.length > 0) {
      let match = 0;
      tasks.forEach((task) => {
        if (task.id === type.id) {
          match = 1;
        }
      })
      if (match === 0) {
        setTasks([...tasks, type]);
      }
      return
    }
    setTasks([type]);
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isMoving]);

  return (

    <div className="resume-container" style={{ backgroundImage: 'url(/images/cloud95.webp)'}}>
      {/* 
        resume document 
      */}

      {tasks.length > 0 && tasks.map((task, index) => (
      <div
        key={task.id}
        className="window resume-window"
        style={{
          display: `${task.state == 1 ? 'none' : 'block'}`,
          position: 'absolute',
          left: `${task.position[0]}px`,
          top: `${task.position[1]}px`,
        }}
      >
        <div
          className="title-bar"
          onMouseDown={(event) => handleMouseDown(event, index)}
        >
          <div style={{ userSelect: 'none' }} className="title-bar-text">
            Resume.pdf
          </div>

          <div className="title-bar-controls">
            <button onMouseDown={(event) => handleMinimize(event, index)} aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button onMouseDown={(event) => handleClose(event, index)} aria-label="Close" />
          </div>
        </div>

        <div className="resume-wrapper">
          <PDFViewer
            config={{ src: '/files/resume.pdf' }}
            style={{ height: '700px' }}
            onReady={(registry) => {
              // console.log('PDF viewer ready!', registry);
            }}
          />
        </div>
      </div>
      ))}

      {/* 
        desktop icons
      */}
      <div className="resume-icons-container">
        <div onDoubleClick={(event) => handleOpen(event,       {
          "id": "doc1",
          "title": "Resume.pdf",
          "position": [0, 100],
          "size": [1000, 720],
          "minimized": false
      })} className="resume-icon">
          <img src="/images/icon_doc.png"/>
          <span>Resume.pdf</span>
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