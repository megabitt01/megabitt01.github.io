import { useState, useEffect, useRef } from 'react';
import { PDFViewer } from '@embedpdf/react-pdf-viewer';
import '98.css';

function Resume() {
  const [isMoving, setIsMoving] = useState(false);
  const [position, setPosition] = useState({
    left: 0,
    top: 100,
  });
  const [active, setActive] = useState(1);
  const [tasks, setTasks] = useState(
    [
      {
        "id": "doc1",
        "title": "Resume.pdf",
        "position": [0, 100],
        "size": [1000, 720]
      }
    ]);

  const dragOffset = useRef({ x: 0, y: 0 });

  function handleMouseDown(event) {
    setIsMoving(true);

    dragOffset.current = {
      x: event.clientX - position.left,
      y: event.clientY - position.top,
    };
  }

  function handleMouseUp() {
    setIsMoving(false);
  }

  function handleMouseMove(event) {
    if (isMoving) {
      setPosition({
        left: event.clientX - dragOffset.current.x,
        top: event.clientY - dragOffset.current.y,
      });
    }
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
      <div
        className="window resume-window"
        style={{
          position: 'absolute',
          left: `${position.left}px`,
          top: `${position.top}px`,
        }}
      >
        <div
          className="title-bar"
          onMouseDown={(event) => handleMouseDown(event)}
        >
          <div style={{ userSelect: 'none' }} className="title-bar-text">
            Resume.pdf
          </div>

          <div className="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close" />
          </div>
        </div>

        <div className="resume-wrapper">
          <PDFViewer
            config={{ src: '/files/resume.pdf' }}
            style={{ height: '700px' }}
            onReady={(registry) => {
              console.log('PDF viewer ready!', registry);
            }}
          />
        </div>
      </div>
      {/* 
        taskbar
      */}
      <div className="window taskbar">
        <div className="window-body">
            {tasks.map((task, index) => (
              active === (index + 1) ? (
                <div className="field-border-disabled taskbar-item" key={index}>
                  <p><b>{task.title}</b></p>
                </div>
              ) : (
                <div className="window taskbar-item" key={index}>
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