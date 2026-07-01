import NewHeader from '../components/NewHeader'
import { h1frames } from '../assets/text.js'
import { useEffect, useState, useRef } from 'react'
import '../App.css'
import { CamContext, CamContext2 } from '../context/contexts'
import ThreeDee from '../components/ThreeDee';
import ThreeDee2 from '../components/ThreeDee2.jsx';
import "98.css";
import NeonButton from '../components/NeonButton.jsx'

function Home() {
    const [camState, setCamState] = useState(0);
      const [camState2, setCamState2] = useState(0);
      const [viewState, setViewState] = useState(0);
      const [coordState, setCoordState] = useState([0, 0, 950]);
      const [greetIndex, setGreetIndex] = useState(0);
    
      // milliseconds
      const frameRateRef = useRef(500);
      const greetIndexRef = useRef(0);
    
      const startRef = useRef(null);
      const lastFrameRef = useRef(0);
    
      const interp = false;
    
      function advanceFrame() {
        setGreetIndex(prev => (prev + 1) % h1frames.length);
      }
    
      useEffect(() => {
        greetIndexRef.current = greetIndex;
      }, [greetIndex]);
    
      useEffect(() => {
        setCamState(coordState[0]);
        setViewState(coordState[1]);
      }, [coordState]);
    
      useEffect(() => {
        let animationId;
    
        function animate(timestamp) {
          if (startRef.current === null) {
            startRef.current = timestamp;
            lastFrameRef.current = timestamp;
          }
    
          const elapsed = timestamp - startRef.current;
          const x = elapsed * 0.5;
    
          frameRateRef.current =
            (greetIndexRef.current >= 7 && greetIndexRef.current <= 19) ||
              (greetIndexRef.current >= 22 && greetIndexRef.current <= 32) ||
              (greetIndexRef.current >= 38 && greetIndexRef.current <= 47) ||
              (greetIndexRef.current >= 52 && greetIndexRef.current <= 56) ||
              (greetIndexRef.current >= 66 && greetIndexRef.current <= 70) ||
              (greetIndexRef.current >= 75 && greetIndexRef.current <= 84) ||
              (greetIndexRef.current >= 93 && greetIndexRef.current <= 102) ||
              (greetIndexRef.current >= 105 && greetIndexRef.current <= 116)
              ? 50
              : 400;
    
          if (timestamp - lastFrameRef.current >= frameRateRef.current) {
            advanceFrame();
            lastFrameRef.current = timestamp;
          }
    
          // if (x >= 975) {
          if (x >= 1890) {
            startRef.current = timestamp;
          }
    
          setCoordState([x, 0, 0]);
    
          animationId = requestAnimationFrame(animate);
        }
    
        animationId = requestAnimationFrame(animate);
    
        return () => cancelAnimationFrame(animationId);
      }, []);
    return (
        <>
              <div className="threedee-container" style={{paddingTop: '50px'}}>
        <CamContext.Provider value={{ camState, setCamState }}>
          <div className="twodee-overlay">
            <div className="twodee-greeter">
              <div className="twodee-header">
                <h1>{h1frames[greetIndex]}</h1>
              </div>
              <div className="twodee-text">
                <p><b>Hi, I'm <span className="highlight">Jack Bittner</span></b>
                  <br/>
                  Contract SWE @ Northwestern Mutual
                  <br/>
                  <span className="small">
                  Typescript/React, C/C++, AWS + Docker + Kubernetes
                  </span>
                  </p>
              </div>
            </div>
            <div className="twodee-fog"></div>
          </div>

          <ThreeDee interp={interp} />
        </CamContext.Provider>
      </div>

      <div className="window about-me">
        <div className="title-bar">
          <div className="title-bar-text">
            About Me
          </div>

          <div className="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close" />
          </div>
        </div>
        <div className="window-body">

          <CamContext2.Provider value={{ camState2, setCamState2 }}>
            <div className="about-me-overlay twodee-overlay">
              <div className="twodee-leftblock">
                <div className="twodee-text">
                  <p className="highlight large"><b>Work Experience</b></p>
                  <ul>
                    <li className="highlight"><b>Contract Software Engineer</b>
                      <br/>
                      Northwestern Mutual - Remote
                      <br/>
                      July 2024 - Present
                      <ul>
                        <li>
                          Designed and implemented a self-service application enabling publishers to create recipient-specific, Northwestern Mutual–branded email communications while enforcing legal and compliance standards programmatically.
                        </li>
                        <li>
                          Delivered new database microservice endpoints pertaining to internal databases that eliminated repetitive development tasks, reducing friction and accelerating feature delivery across dependent teams.
                        </li>
                        <li>
                          Maintain and develop distributed microservices pertaining to the Alerts and Notifications platform.</li>
                        <li>
                          Partner with internal teams and external publishers to onboard new applications, distribute batched emails and ensure compliance with legal.
                        </li>
                        <li>
                          Contribute to platform stability and developer efficiency through targeted API enhancements and workflow improvements.
                        </li>
                      </ul>
                    </li>

                  </ul>
                </div>
              </div>
              <div className="twodee-rightblock">
                <div className="twodee-text">
                  <ul>
                    <li className="highlight"><b>Digital Marketing Specialist</b>
                      <br/>
                      Bare Home - Columbus, MN
                      <br/>
                      January 2023 - October 2023
                      <ul>
                        <li>
                          Developed a new Shopify website for ecommerce using Javascript and Liquid.
                        </li>
                        <li>
                          Created and managed digital advertisement campaigns through Google Ads.
                        </li>
                        <li>Improved analytics tracking through website enhancements.
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <p className="highlight large"><b>Education</b></p>
                  <ul>
                    <li className="highlight"><b>Bachelors of Science - BS, Marketing</b>
                      <br/>
                      University of Northwestern — St. Paul, MN
                      <br/>
                      August 2018 – December 2022
                    </li>
                    <li className="highlight"><b>Software Engineering Program</b>
                      <br/>
                      University of Minnesota Boot Camps - Blaine, MN
                      <br/>
                      November 2023 - March 2024
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <ThreeDee2 interp={interp} />
          </CamContext2.Provider>
        </div>
      </div>
      <div className="neon-wrapper">
      <div className="neon-container">
          <div id="neon-1b" style={{
            position: 'absolute', 
            left: '20%'
          }}>
            <div className="neon-line-blue vert"></div>
          </div>
          <div id="neon-2b" style={{
            position: 'absolute', 
            top: '60%'
          }}>
            <div className="neon-line-blue horz"></div>
          </div>
          <div id="neon-1a" style={{
            position: 'absolute', 
            top: '75%'
          }}>
            <div className="neon-line-pink horz"></div>
          </div>
          <div id="neon-2a" style={{
            position: 'absolute', 
            left: '25%'
          }}>
            <div className="neon-line-pink vert"></div>
          </div>
          <div id="neon-3" style={{
            position: 'absolute', 
            top: '15%'
          }}>
            <div className="neon-line-pink horz"></div>
          </div>
          <div id="neon-4a" style={{
            position: 'absolute', 
            left: '75%'
          }}>
            <div className="neon-line-pink vert"></div>
          </div>
          <div id="neon-5a" style={{
            position: 'absolute', 
            bottom: '8%'
          }}>
            <div className="neon-line-pink horz"></div>
          </div>
          <div id="neon-6a" style={{
            position: 'absolute', 
            bottom: '8%'
          }}>
            <div className="neon-line-pink horz"></div>
          </div>
          <div id="neon-4b" style={{
            position: 'absolute', 
            right: '20%'
          }}>
            <div className="neon-line-blue vert"></div>
          </div>
          <div id="neon-5b" style={{
            position: 'absolute', 
            top: '80%'
          }}>
            <div className="neon-line-blue horz"></div>
          </div>
          <div id="neon-6b" style={{
            position: 'absolute', 
            right: '5%'
          }}>
            <div className="neon-line-blue vert"></div>
          </div>
          <div id="neon-7b" style={{
            position: 'absolute', 
            top: '40%'
          }}>
            <div className="neon-line-blue horz"></div>
          </div>
      <div className="neon-overlay">
        <div className="neon-menu">
          <ul>
            <li>
              <p className="neon-menu-item">
                Video Game Mods
                <br/>
                <span className="small">
                  In my spare time, I have undertaken a few hobby modding projects that involve 
                  writing in Java or C++ and using build tools like Gradle and Clang/Ninja.
                  </span>
              </p>
              <NeonButton color={0} text="Halo MCC" icon={1} link="/alpharing"/>
              <NeonButton color={1} text="Minecraft" icon={1} link="/middlezealand"/>
            </li>
            <li>
              <p className="neon-menu-item-alt">Catacomb Studios Azure App
              <br/>
              <span className="small">
                I created an ASP.NET web app with account management and basic SMTP functionality. 
                The page had a simple client data encryption backend. The application was originally 
                deployed via Azure.
              </span>
              </p>
              <NeonButton color={1} text="Repository" icon={1} link="https://github.com/megabitt01/catacomb-studios"/>
            </li>
            <li>
              <p className="neon-menu-item">Other Projects
              <br/>
              <span className="small">
                When I'm not engineering software, I write and draw.  Check out my additional projects!
              </span>
              </p>
              <NeonButton color={0} text="Gonkville" icon={1} link="/gonkville"/>
              <NeonButton color={1} text="Midguardians" icon={1} link="/midguardians"/>
            </li>
          </ul>
        </div>
      </div>
      </div>
      </div>
        </>
    )
}

export default Home;