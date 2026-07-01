import { useEffect, useState } from 'react'
import ThreeDee from './components/ThreeDee'
import Header from './components/Header'
import Content from './components/Content'
import Menu from './components/Menu'
import Button from './components/Button'
import Page from './components/Page'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { CamContext } from './context/contexts'
import './App.css'

function App() {
  let [camState, setCamState] = useState(0);
  let [viewState, setViewState] = useState(0);
  let [pageState, setPageState] = useState(0);
  let [coordState, setCoordState] = useState([[0, 0, 950]]);

  function changePage(index) {
    if (index > coordState.length - 1 || index < 0) {
      return;
    }
    setPageState(index);
  }

  useEffect(() => {
    setCamState(coordState[pageState][0]);
    setViewState(coordState[pageState][1]);
  }, [pageState]);

  useEffect(() => {
    const pages = document.getElementsByClassName('page-container');
    const arr = [[0, 0, 950]];
    let z = 0;
    if (pages !== undefined) {
      for (let i = 0; i < pages.length; i++) {
        z += 1000;
        arr.push([z, (-1 * pages[i].getBoundingClientRect().top) + 70, pages[i].scrollHeight]);
      };
    }
    setCoordState(arr);
  }, [])

  return (
    <>
<CamContext.Provider value={{ camState, setCamState }}>
        <Header />
        <div className="app-wrapper">
          <div className="content-wrapper">
            <div className="content-container" style={{ height: `${coordState[pageState][2]}px` }}>
              <div className="spacer"></div>
              <div className="absolute-viewer-container" style={{ height: `${coordState[pageState][2]}px` }}>
                <div className="absolute-viewer" style={{ top: `${viewState}px` }}>
                  <Content>
                    <h2>Hi 👋</h2>
                    <p>I'm Jack Bittner.  I'm a software engineer.  And I like to write code.  Specifically, I use</p>
                    <code>C, C++, C#, JavaScript, TypeScript and Java</code>
                    <p style={{ marginTop: "16px", marginBottom: "0px" }}>Select one of the menu options below to learn more about me.</p>
                  </Content>
                  <Menu>
                    <h3 className="skeuo-text">
                      menu v1.0
                    </h3>
                    <div className="button-container">
                      <Button click={() => changePage(1)}>About</Button>
                      <Button click={() => changePage(2)}>Work History</Button>
                      <Button click={() => changePage(3)}>Personal Projects</Button>
                    </div>
                  </Menu>
                  <div className="spacer-footer" />
                  <Page changePage={changePage} pageState={pageState} coordState={coordState}>
                    <Content>
                      <h2>About Me 🐧</h2>
                      <p>
                        I am an artist at heart.  When I'm not coding, I'm usually working on illustrated books.
                        Digital art is where my love for tech intersects with drawing.  Lately, I've been using
                        Blender and Krita for that.  A fun fact about me is that I do all my creative work on Linux.
                        I've installed Arch Linux on all of my devices at home and I am a firm believer that you can
                        use any operating system for art with enough imagination.  In addition to using open source
                        software, I'm also a contributer to various open source projects.  More on that in the
                        "Personal Projects" section.
                      </p>
                      <h2>Professional Summary 📄</h2>
                      <p>
                        Efficiency-driven Software Engineer with a proven track record of designing And
                        maintaining cloud-based services.  Enterprise-level expertise with a background in
                        ecommerce and finance including Fortune 100 companies.  Experienced across multiple
                        programming languages, frameworks and technologies with an emphasis on Javascript/Typescript
                        and .NET-based services.
                      </p>
                      <h2>Education 🏫</h2>
                      <ul>
                        <li>
                          <div className="resume-container">
                            <h3 className="resume-header">University of Minnesota Boot Camps</h3>
                            <p className="resume-header-secondary">December 2023 - March 2024</p>
                          </div>
                          <div className="resume-container">
                            <p>Software Development Certification</p>
                            <p className="resume-secondary"><i>4.0 GPA</i></p>
                          </div>
                        </li>
                        <li>
                          <div className="resume-container">
                            <h3 className="resume-header">University of Northwestern, St. Paul</h3>
                            <p className="resume-header-secondary">August 2018 - December 2022</p>
                          </div>
                          <div className="resume-container">
                            <p>B.S Marketing</p>
                            <p className="resume-secondary"><i>3.5 GPA</i></p>
                          </div>
                        </li>
                      </ul>
                    </Content>
                  </Page>
                  <Page changePage={changePage} pageState={pageState} coordState={coordState}>
                    <Content>
                      <h2>Work History 💼</h2>
                      <ul>
                        <li>
                          <div className="resume-container">
                            <h3 className="resume-header">Northwestern Mutual</h3>
                            <p className="resume-header-secondary">July 2024 - Present</p>
                          </div>
                          <div className="resume-container">
                            <p>Contract Software Engineer</p>
                            <p className="resume-secondary"><i>Remote</i></p>
                          </div>
                        </li>
                        <li>
                          <div className="resume-container">
                            <h3 className="resume-header">Bare Home</h3>
                            <p className="resume-header-secondary">January 2023 - October 2023</p>
                          </div>
                          <div className="resume-container">
                            <p>Digital Marketing Specialist</p>
                            <p className="resume-secondary"><i>Columbus, MN</i></p>
                          </div>
                        </li>
                      </ul>
                      <h2>Selected Contributions</h2>
                      <ul>
                        <li>
                          <div className="resume-container">
                            <h3 className="resume-header">Email Template Wizard</h3>
                            <code className="resume-header-secondary">JS, React</code>
                          </div>
                          <div className="resume-container">
                            <p>When I first joined Northwestern Mutual, email templates had to be manually written by 
                              engineers in order to meet compliance and brand guidelines.  In my spare time, I began
                              working on a prototype for an app that could generate an email that met all required
                              guidelines (specific to the recipient) with copy from a Word document.  The app initially
                              used SvelteKit but once it was approved for deployment, I re-wrote it in React for easier
                              integration with the developer platform.  One year later, the app was deployed and is
                              currently being tested.
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="resume-container">
                            <h3 className="resume-header">API Enhancements</h3>
                            <code className="resume-header-secondary">JS/TS, Express</code>
                          </div>
                          <div className="resume-container">
                            <p>In addition to my usual duties at Northwestern Mutual, I made multiple improvements to 
                              existing REST APIs from adding simple endpoints to re-writing one entire
                              microservice in Typescript.  The majority of these modifications were made in order to
                              reduce repetitive work on the development side and automate/simplify support-related
                              responsibilities.
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="resume-container">
                            <h3 className="resume-header"><a href="https://www.barehome.com" target="_blank">barehome.com</a></h3>
                            <code className="resume-header-secondary">JS, Liquid</code>
                          </div>
                          <div className="resume-container">
                            <p>While the website has changed since I left Bare Home, I made significant improvements 
                              to the site in the year that I worked there.  I added a brand page, product page enhancements
                              and a winback flow that used a "Sleep Quiz" to recommend products to customers based on their
                              sleep preferences.  My tech stack was limited since the site used Shopify but I was able to
                              do everything in Liquid (a templating framework similar to PHP) and Javascript.  
                            </p>
                          </div>
                        </li>
                      </ul>
                    </Content>
                  </Page>
                  <Page changePage={changePage} pageState={pageState} coordState={coordState}>
                    <Content>
                      <h2>Personal Projects</h2>
                      <ul>
                        <li>
                          <div className="resume-container">
                            <h3 className="resume-header"><a href="https://gonkville.com" target="_blank">gonkville.com</a></h3>
                            <code className="resume-header-secondary">JS, SvelteKit</code>
                          </div>
                          <div className="resume-container">
                            <p>In 2024, I created a children's book series entitled Gonkville.  I wanted to grow my platform and branch out into doing animations and games but for that I needed a website.  At work, I had been experimenting with SvelteKit and decided it was the ideal framework for what I needed.  The result was a pleasant-looking website reminiscent of the late 00s.</p>
                          </div>
                        </li>
                        <li>
                          <div className="resume-container">
                            <h3 className="resume-header"><a href="https://github.com/thejackbitt/AlphaRing/tree/master-chief" target="_blank">AlphaRing Halo Mod Fork</a></h3>
                            <code className="resume-header-secondary">C++</code>
                          </div>
                          <div className="resume-container">
                            <p>AlphaRing is an open source mod project for <i>Halo: The Master Chief Collection</i> that introduces local multiplayer splitscreen.  I identified an area of improvement (saving user settings locally) and created my own fork of this project.  My change adds a JSON interpreter that saves user settings to disk whenever changes are made and loads them upon startup.</p>
                          </div>
                        </li>
                        <li>
                          <div className="resume-container">
                            <h3 className="resume-header"><a href="https://github.com/thejackbitt/catacomb-studios" target="_blank">Catacomb Studios Web App</a></h3>
                            <code className="resume-header-secondary">C#, Angular</code>
                          </div>
                          <div className="resume-container">
                            <p>When I originally launched my Gonkville book series, I was intending to publish them under the name "Catacomb Studios" but that plan was later abandoned.  However, before my plan changed, I managed to create an ASP.NET web app with account management and basic SMTP functionality.  The page had a simple navigation system and a backend that interface with an account database, encrypt client data and send account-related emails.  The application was hosted via Azure but I have since taken it down.</p>
                          </div>
                        </li>
                        <li>
                          <div className="resume-container">
                            <h3 className="resume-header"><a href="https://github.com/thejackbitt/middle-zealand-tweaks" target="_blank">Middle Zealand Tweaks</a></h3>
                            <code className="resume-header-secondary">Java</code>
                          </div>
                          <div className="resume-container">
                            <p><i>Middle Zealand Tweaks</i> is a mod I created for Minecraft.  It acts as a bridge for two mods (The Lord of the Rings and Battlegear 2) as well as adding custom weapons and a "killstreak" system that rewards players for defeating orcs.  While Battlegear 2 is open source, I had to decompile the Lord of the Rings mod to reference it in my code.  Due to distribution guidelines, I am not able to share the modpack that combines all the mods but players can use this mod in conjunction with the two mods mentioned to get the full effect.</p>
                          </div>
                        </li>
                      </ul>
                    </Content>
                  </Page>
                </div>
              </div>
            </div>
          </div>
          <div className="3d-container">
            <ThreeDee />
          </div>
        </div>
      </CamContext.Provider>
    </>
  )
}

export default App
