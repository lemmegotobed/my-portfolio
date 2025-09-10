import './App.css'; 
import cardImage from './assets/card.png';
import heroImage from "./assets/port2.png";

import "@fontsource/luckiest-guy";      
import "@fontsource/rubik-dirt";       
import "@fontsource/mali/700.css";      
import "@fontsource/itim/400.css";      

import { useEffect, useState } from "react";

export default function App() {
  const [active, setActive] = useState("home"); // สถานะ active 
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id); 
          }
        });
      },
      { threshold: 0.6 } 
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect(); 
  }, []);

  return (
    <div className="App">
      <header className="header">
        <nav className="nav-container">
          <ul className="nav-links">
            <li>
              <a href="#home" className={active === "home" ? "active" : ""}>
                <i className="fas fa-home"></i> Home
              </a>
            </li>

            <li>
              <a href="#about" className={active === "about" ? "active" : ""}>
                <i className="fas fa-user"></i> About
              </a>
            </li>

            <li>
              <a href="#skills" className={active === "skills" ? "active" : ""}>
                <i className="fas fa-code"></i> Skills
              </a>
            </li>

            <li>
              <a href="#projects" className={active === "projects" ? "active" : ""}>
                <i className="fas fa-folder"></i> Projects
              </a>
            </li>

            <li>
              <a href="#experience" className={active === "experience" ? "active" : ""}>
                <i className="fas fa-briefcase"></i> Experience
              </a>
            </li>
          </ul>
        </nav>
      </header>


      <section id="home" className="hero hero-center">
        <div className="floating-ball" style={{ top: '10%', left: '8%' }}></div>
        <div className="floating-ball" style={{ top: '70%', left: '85%' }}></div>

        <img src={heroImage} alt="Portfolio" className="hero-img" />
      </section>


      <section id="about" className="about">
        <div className="about-section">
          <h2 className="about-title">WHO I AM ?</h2>
          <p className="about-intro">
           I'm a fourth-year Data Science and Software Innovation student with interests in UX/UI design and software development. Skilled in both design and development, I'm seeking an internship as a UX/UI Designer, Frontend Developer, Web Developer, or other related roles to gain real-world experience and further improve my skills</p>
        </div>
        
        <div className="about-layout">
          <div className="about-photo">
            <img src={cardImage} alt="Profile" className="slide-in-left" />
          </div>


          <div className="about-right">

            <div className="about-grid">
              <div className="about-card">
                <span className="about-icon"><i className="fas fa-user" /></span>
                <div>
                  <div className="about-label">Name</div>
                  <div className="about-value">Onanong Kammungkun 
                    <span style={{ fontWeight: 200, color: "#696a6c", fontSize: "12px" }}> (earn)</span>
                  </div>
                </div>
              </div>

              <div className="about-card">
                <span className="about-icon"><i className="fas fa-birthday-cake" /></span>
                <div>
                  <div className="about-label">Birthday</div>
                  <div className="about-value">19 May 2003
                    <span style={{ fontWeight: 200, color: "#696a6c" , fontSize: "12px" }}> (22y)</span>
                  </div>
                  
                </div>
              </div>

              <div className="about-card">
                <span className="about-icon"><i className="fas fa-graduation-cap" /></span>
                <div>
                  <div className="about-label">University</div>
                  <div className="about-value">Ubonratchathani University</div>
                </div>
              </div>

              <div className="about-card">
                <span className="about-icon"><i className="fas fa-briefcase" /></span>
                <div>
                  <div className="about-label">Education</div>
                  <div className="about-value">
                    Data Science and Software Innovation
                    <span style={{ fontWeight: 200, color: "#696a6c" , fontSize: "12px" }}> (GPA 3.18)</span>
                  </div>
                </div>
              </div>

              <div className="about-card">
                <span className="about-icon"><i className="fas fa-map-marker-alt" /></span>
                <div>
                  <div className="about-label">Address</div>
                  <div className="about-value">Ubonratchathani, Thailand</div>
                </div>
              </div>


              <div className="about-card">
                <span className="about-icon"><i className="fas fa-envelope" /></span>
                <div>
                  <div className="about-label">Email</div>
                  <div className="about-value">Onanong.k03@gmail.com</div>
                </div>
              </div>

              <div className="about-card">
                <span className="about-icon"><i className="fas fa-phone" /></span>
                <div>
                  <div className="about-label">Phone</div>
                  <div className="about-value">0813282142</div>
                </div>
              </div>

              <div className="about-card">
                <span className="about-icon"><i className="fab fa-line" /></span>
                <div>
                  <div className="about-label">Line ID</div>
                  <div className="about-value">eingearn19</div>
                </div>
              </div>

            </div>
            <a className="resume" href="/files/onanong_resume.pdf" download="Onanong_Resume.pdf">
                <i className="fas fa-download" /> Download My Resume
            </a>
          </div>
        </div>
      </section>



      <section id="skills" className="sf">
        <h2 className="tt-title">Skills &amp; Technologies</h2>

        <input id="sf-hard"   type="radio" name="sf-cat" defaultChecked className="sf-ctrl" />
        <input id="sf-soft"   type="radio" name="sf-cat" className="sf-ctrl" />
        <input id="sf-tools"  type="radio" name="sf-cat" className="sf-ctrl" />

        <div className="sf-pills" role="tablist" aria-label="Skill groups">
          <label className="sf-pill" htmlFor="sf-hard"><i className="fas fa-code" /> Hard Skills</label>
          <label className="sf-pill" htmlFor="sf-soft"><i className="fas fa-user-friends" /> Soft Skills</label>
          <label className="sf-pill" htmlFor="sf-tools"><i className="fas fa-wrench" /> Tools</label>
        </div>

        <div className="sf-grid">
          <div className="sf-panel" data-cat="hard">
            <div className="soft-skills-grid">
              <div className="skill-card">
                <div className="icon-circle">
                  <i className="fas fa-paint-brush" />
                </div>
                <p>UI/UX Design</p>
                <p className='soft-subtitle' style={{ color: '#78889cff', fontWeight: '200'}}>
                  Wireframing, Prototyping, UX Research, Persona & Usability Testing
                </p>
              </div>

              <div className="skill-card">
                <div className="icon-circle">
                  <i className="fas fa-laptop-code" />
                </div>
 
                <p>Programming & Web Development</p>
                <p className='soft-subtitle' style={{ color: '#78889cff', fontWeight: '200'}}>
                  Python, HTML, CSS, JavaScript, Tailwind CSS, Django, React, Flutter, Responsive Web Design
                </p>
              </div>

              <div className="skill-card">
                <div className="icon-circle">
                  <i className="fas fa-database" /> 
                </div>
                <p>Database & APIs</p>
                <p className='soft-subtitle' style={{ color: '#78889cff', fontWeight: '200'}}>
                  MySQL, NoSQL, PostgreSQL, RESTful APIs, WebSockets
                </p>
              </div>
              
              <div className="skill-card">
                <div className="icon-circle">
                  <i class="fa-solid fa-screwdriver-wrench"></i>
                </div>
                <p>Other Technical Skills</p>
                <p className='soft-subtitle' style={{ color: '#78889cff', fontWeight: '200'}}>
                  CI/CD, Deployment, Firebase Hosting, GitHub, Docker
                </p>
              </div>

            </div>
          </div>

          <div className="sf-panel" data-cat="soft">
            <div className="skills-grid">
              <div className="skill-card">
                <div className="icon-circle">
                  <i className="fas fa-lightbulb" />
                </div>
                 <p>Creative Problem Solving</p>
              </div>

              <div className="skill-card">
                <div className="icon-circle">
                  <i className="fas fa-users" /> 
                </div>
                <p>Team Collaboration</p>
              </div>

              <div className="skill-card">
                <div className="icon-circle">
                  <i className="fas fa-comments" />
                </div>
                 <p>Communication</p>
              </div>

              <div className="skill-card">
                <div className="icon-circle">
                  <i className="fas fa-clock" /> 
                </div>
                <p>Time Management</p>
              </div>

              <div className="skill-card">
                <div className="icon-circle">
                  <i className="fas fa-search" />
                </div>
                <p>Attention to Detail</p>
              </div>

              <div className="skill-card">
                <div className="icon-circle">
                  <i className="fas fa-chart-line" />
                </div>
                <p>Analytical Thinking</p>
              </div>

            </div>
          </div>

          <div className="sf-panel" data-cat="tools">
            <div className="tt-grid">
                <article className="tt-card">
                  <header className="tt-card-head">
                    <h3 className="tt-head-title">Design & Collaboration</h3>
                  </header>

                  <ul className="tt-list">
                    <li className="tt-item">
                      <div className="tt-item-main tt-item-with-icon">
                        <div className="tt-icon">
                          <img src={require('./assets/figma.png')} />
                        </div>
                        <div>
                          <div className="tt-item-name">Figma</div>
                          <div className="tt-item-desc">UI/UX Design & Prototyping</div>
                        </div>
                      </div>
                      <span className="tt-badge tt-badge--advanced">Advanced</span>
                    </li>

                    <li className="tt-item">
                      <div className="tt-item-main tt-item-with-icon">
                        <div className="tt-icon">
                          <img src={require('./assets/2.png')} />
                        </div>
                        <div>
                          <div className="tt-item-name">Canva</div>
                          <div className="tt-item-desc">Graphic Design</div>
                        </div>
                      </div>
                      <span className="tt-badge tt-badge--advanced">Advanced</span>
                    </li>

                    <li className="tt-item">
                      <div className="tt-item-main tt-item-with-icon">
                        <div className="tt-icon">
                          <img src={require('./assets/4.png')} />
                        </div>
                        <div>
                          <div className="tt-item-name">Miro</div>
                          <div className="tt-item-desc">Collaborative Whiteboarding</div>
                        </div>
                      </div>
                      <span className="tt-badge tt-badge--intermediate">Intermediate</span>
                    </li>

                    <li className="tt-item">
                      <div className="tt-item-main tt-item-with-icon">
                        <div className="tt-icon">
                          <img src={require('./assets/3.png')} />
                        </div>
                        <div>
                          <div className="tt-item-name">Notion</div>
                          <div className="tt-item-desc">Project Management &amp; Docs</div>
                        </div>
                      </div>
                      <span className="tt-badge tt-badge--intermediate">Intermediate</span>
                    </li>
                  </ul>
                </article>

                <article className="tt-card">
                  <header className="tt-card-head">
                    <h3 className="tt-head-title">Development Tools</h3>
                  </header>

                  <ul className="tt-list">
                    <li className="tt-item">
                      <div className="tt-item-main tt-item-with-icon">
                        <div className="tt-icon">
                          <img src={require('./assets/vs.png')} alt="VS Code" />
                        </div>
                        <div>
                          <div className="tt-item-name">Visual Studio Code</div>
                          <div className="tt-item-desc">Primary Code Editor</div>
                        </div>
                      </div>
                      <span className="tt-badge tt-badge--advanced">Advanced</span>
                    </li>

                    <li className="tt-item">
                      <div className="tt-item-main tt-item-with-icon">
                        <div className="tt-icon">
                          <img src={require('./assets/github.png')} alt="GitHub" />
                        </div>
                        <div>
                          <div className="tt-item-name">GitHub</div>
                          <div className="tt-item-desc">Version Control &amp; Collaboration</div>
                        </div>
                      </div>
                      <span className="tt-badge tt-badge--advanced">Advanced</span>
                    </li>

                    <li className="tt-item">
                      <div className="tt-item-main tt-item-with-icon">
                        <div className="tt-icon">
                          <img src={require('./assets/firebase.png')} alt="Firebase" />
                        </div>
                        <div>
                          <div className="tt-item-name">Firebase</div>
                          <div className="tt-item-desc">Hosting & Backend Platform</div>
                        </div>
                      </div>
                      <span className="tt-badge tt-badge--intermediate">Intermediate</span>
                    </li>

                    <li className="tt-item">
                      <div className="tt-item-main tt-item-with-icon">
                        <div className="tt-icon">
                          <img src={require('./assets/flutter.png')} alt="Flutter" />
                        </div>
                        <div>
                          <div className="tt-item-name">Flutter</div>
                          <div className="tt-item-desc">Cross-Platform Mobile Development</div>
                        </div>
                      </div>
                      <span className="tt-badge tt-badge--intermediate">Intermediate</span>
                    </li>

                    <li className="tt-item">
                      <div className="tt-item-main tt-item-with-icon">
                        <div className="tt-icon">
                          <img src={require('./assets/docker.png')} alt="Docker" />
                        </div>
                        <div>
                          <div className="tt-item-name">Docker</div>
                          <div className="tt-item-desc">Containerization Platform</div>
                        </div>
                      </div>
                      <span className="tt-badge tt-badge--begin">Beginner</span>
                    </li>


                  </ul>
                </article>

                <article className="tt-card">
                  <header className="tt-card-head">
                    {/* <span className="tt-head-icon"><i class="fa-solid fa-laptop-code"></i></span> */}
                    <h3 className="tt-head-title">Web Technologies</h3>
                  </header>
                
                  <ul className="tt-list">

                    <li className="tt-item">
                      <div className="tt-item-main tt-item-with-icon">
                        <div className="tt-icon">
                          <img src={require('./assets/django.png')} alt="Django" />
                        </div>
                        <div>
                          <div className="tt-item-name">Django</div>
                          <div className="tt-item-desc">Backend Framework</div>
                        </div>
                      </div>
                      <span className="tt-badge tt-badge--advanced">Advanced</span>
                    </li>

                    <li className="tt-item">
                      <div className="tt-item-main tt-item-with-icon">
                        <div className="tt-icon">
                          <img src={require('./assets/html.png')} alt="HTML" />
                        </div>
                        <div>
                          <div className="tt-item-name">HTML</div>
                          <div className="tt-item-desc">Markup Language for Web Pages</div>
                        </div>
                      </div>
                      <span className="tt-badge tt-badge--advanced">Advanced</span>
                    </li>

                    <li className="tt-item">
                      <div className="tt-item-main tt-item-with-icon">
                        <div className="tt-icon">
                          <img src={require('./assets/css.png')} alt="CSS" />
                        </div>
                        <div>
                          <div className="tt-item-name">CSS</div>
                          <div className="tt-item-desc">Styling for Web Pages</div>
                        </div>
                      </div>
                      <span className="tt-badge tt-badge--advanced">Advanced</span>
                    </li>

                    <li className="tt-item">
                      <div className="tt-item-main tt-item-with-icon">
                        <div className="tt-icon">
                          <img src={require('./assets/react.png')} alt="React" />
                        </div>
                        <div>
                          <div className="tt-item-name">React</div>
                          <div className="tt-item-desc">Frontend Framework</div>
                        </div>
                      </div>
                      <span className="tt-badge tt-badge--intermediate">Intermediate</span>
                    </li>

                    <li className="tt-item">
                      <div className="tt-item-main tt-item-with-icon">
                        <div className="tt-icon">
                          <img src={require('./assets/tailwind.png')} alt="Tailwind CSS" />
                        </div>
                        <div>
                          <div className="tt-item-name">Tailwind CSS</div>
                          <div className="tt-item-desc">Utility-First CSS Framework</div>
                        </div>
                      </div>
                      <span className="tt-badge tt-badge--intermediate">Intermediate</span>
                    </li>

                    <li className="tt-item">
                      <div className="tt-item-main tt-item-with-icon">
                        <div className="tt-icon">
                          <img src={require('./assets/restapi.png')} alt="RESTful APIs" />
                        </div>
                        <div>
                          <div className="tt-item-name">RESTful APIs</div>
                          <div className="tt-item-desc">API Development</div>
                        </div>
                      </div>
                      <span className="tt-badge tt-badge--begin">Beginner</span>
                    </li>

                    <li className="tt-item">
                      <div className="tt-item-main tt-item-with-icon">
                        <div className="tt-icon">
                          <img src={require('./assets/websockets.png')} alt="WebSockets" />
                        </div>
                        <div>
                          <div className="tt-item-name">WebSockets</div>
                          <div className="tt-item-desc">Real-time Communication</div>
                        </div>
                      </div>
                      <span className="tt-badge tt-badge--begin">Beginner</span>
                    </li>

              
                    <li className="tt-item">
                      <div className="tt-item-main tt-item-with-icon">
                        <div className="tt-icon">
                          <img src={require('./assets/wordpress.png')} alt="WordPress" />
                        </div>
                        <div>
                          <div className="tt-item-name">WordPress</div>
                          <div className="tt-item-desc">CMS Development &amp; Customization</div>
                        </div>
                      </div>
                      <span className="tt-badge tt-badge--begin">Beginner</span>
                    </li>

                  </ul>
                </article>

                <article className="tt-card">
                  <header className="tt-card-head">
                    {/* <span className="tt-head-icon"><i class="fa-solid fa-database"></i></span> */}
                    <h3 className="tt-head-title">Database</h3>
                  </header>

                  <ul className="tt-list">

                    <li className="tt-item">
                      <div className="tt-item-main tt-item-with-icon">
                        <div className="tt-icon">
                          <img src={require('./assets/mysql.png')} alt="MySQL" />
                        </div>
                        <div>
                          <div className="tt-item-name">MySQL</div>
                          <div className="tt-item-desc">Relational Database Management</div>
                        </div>
                      </div>
                      <span className="tt-badge tt-badge--advanced">Advanced</span>
                    </li>

                    <li className="tt-item">
                      <div className="tt-item-main tt-item-with-icon">
                        <div className="tt-icon">
                          <img src={require('./assets/postgresql.jpg')} alt="PostgreSQL" />
                        </div>
                        <div>
                          <div className="tt-item-name">PostgreSQL</div>
                          <div className="tt-item-desc">Advanced Relational Database</div>
                        </div>
                      </div>
                      <span className="tt-badge tt-badge--intermediate">Intermediate</span>
                    </li>

                    <li className="tt-item">
                      <div className="tt-item-main tt-item-with-icon">
                        <div className="tt-icon">
                          <img src={require('./assets/mongodb.png')} alt="MongoDB" />
                        </div>
                        <div>
                          <div className="tt-item-name">MongoDB</div>
                          <div className="tt-item-desc">NoSQL Document Database</div>
                        </div>
                      </div>
                      <span className="tt-badge tt-badge--intermediate">Intermediate</span>
                    </li>
                  </ul>
                </article>
              </div>
          </div>

        </div>
      </section>


        <section id="projects" className="projects-section">
        <h2 className="pf-title">Projects</h2>
        <p className="about-intro"  style={{ fontWeight: 100,marginTop: "-10px"}}>
          Sample projects I designed and developed, showcasing my UX/UI and programming skills
        </p>
        
        <div className="card-grid">
          <article className="project-card">
            <div className="media slideshow">
              <img src="/images/vup/6.png" alt="Project 1" />
              <img src="/images/vup/3.png" alt="Project 2" />
              <img src="/images/vup/4.png" alt="Project 3" />
              <img src="/images/vup/5.png" alt="Project 4" />

              <span className="badge badge-left">Web Application</span>
              <span className="badge badge-right">2024</span>
            </div>
            <div className="content">
              <h3>VUP!</h3>
              <p>
                Senior Project - A community web app to find activity partners and join real-life events.
                Create or join activities, chat real-time with others, and manage schedules with an integrated calendar and other features
              </p>
              <div className="tags">
                <span className="chip">Django</span>
                {/* <span className="chip">Python</span> */}
                <span className="chip">HTML/CSS</span>
                <span className="chip">JavaScript</span>
                <span className="chip">WebSockets</span>
                <span className="chip">RESTful APIs</span>
                <span className="chip">MySQL</span>
              </div>
              <div className="project-actions">
              <a href="https://github.com/lemmegotobed/VUP_Project" target="_blank" rel="noopener noreferrer" className="btn-code">
                <i className="fab fa-github"></i> Code
              </a>
              <a href="https://drive.google.com/file/d/1CYbZKAZas6-C9I4Hmu-3OEDpvF5e4n_q/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn-demo">
                <i className="fas fa-external-link-alt"></i> Demo
              </a>
            </div>
           
            </div>
          </article>

          <article className="project-card">
            <div className="media slideshow">
              <img src="/images/fishtank/fishtank.png" alt="Project 1" />
              <img src="/images/fishtank/3.png"  alt="Project 2" />
              <img src="/images/fishtank/4.png"  alt="Project 3" />
              <img src="/images/fishtank/5.png"  alt="Project 3" />

              <span className="badge badge-left">Web Application</span>
              <span className="badge badge-right">2024</span>
            </div>
      
          <div className="content">
            <h3>FishTank</h3>
            <p>
              A virtual "fish tank" Web application to showcase different fish species, 
              displaying details in an interactive way as if you had your own digital aquarium
            </p>
            <div className="tags">
                <span className="chip">Django</span>
                <span className="chip">HTML/CSS</span>
                <span className="chip">JavaScript</span>
                <span className="chip">SQlite3</span>
            </div>
            <div className="project-actions">
              <a href="https://github.com/Pa2k/fishtank-finally" target="_blank" rel="noopener noreferrer" className="btn-code">
                <i className="fab fa-github"></i> Code
              </a>
              <a href="https://drive.google.com/file/d/1u9REnurvcWuffB6KKnwct4hSE_SzNLP-/view" target="_blank" rel="noopener noreferrer" className="btn-demo">
                <i className="fas fa-external-link-alt"></i> Demo
              </a>
            </div>
          </div>
          </article>

          <article className="project-card" >
            <div className="media">
              <img src="/images/p.png" alt="Project 2" />
              <span className="badge badge-left">Website</span>
              <span className="badge badge-right">2025</span>
            </div>
            <div className="content">
              <h3>My Portfolio</h3>
              <p>
                A personal portfolio website built with React to showcase projects, 
                experiences, and skills, deployed on Firebase for fast and reliable deployment/hosting
              </p>
              <div className="tags">
                <span className="chip">React</span>
                <span className="chip">JavaScript</span>
                <span className="chip">HTML/CSS</span>
                <span className="chip">Firebase</span>
              </div>
              <div className="project-actions">
              <a href="https://github.com/lemmegotobed/my-portfolio" target="_blank" rel="noopener noreferrer" className="btn-code">
                <i className="fab fa-github"></i> Code
              </a>
              <a href="https://onanong-en19.web.app/" target="_blank" rel="noopener noreferrer" className="btn-demo">
                <i className="fas fa-external-link-alt"></i> Demo
              </a>
            </div>
            </div>
          </article>

         <article className="project-card">
         <div className="media slideshow">
              <img src="/images/icecard/1.png" alt="Project 1" />
              <img src="/images/icecard/2.png"  alt="Project 2" />
              <img src="/images/icecard/3.png"  alt="Project 3" />
              <img src="/images/icecard/4.png"  alt="Project 4" />

              <span className="badge badge-left">Flutter App</span>
              <span className="badge badge-right">2025</span>
            </div>
          <div className="content">
            <h3>IceBreakerCard</h3>
            <p>
            A Flutter app that randomly generates fun and thoughtful questions to spark conversations and help people get to know each other better. Ideal for playing with friends or as a group activity
            </p>  
            <div className="tags">
              <span className="chip">Flutter</span>
              <span className="chip">Random</span>
              <span className="chip">GetStorage</span>
              <span className="chip">Share Plus</span>
              <span className="chip">Animation</span>

            </div>
            <div className="project-actions">
              <a href="https://github.com/lemmegotobed/IceBreakerCard" target="_blank" rel="noopener noreferrer" className="btn-code">
                <i className="fab fa-github"></i> Code
              </a>
              <a href="https://drive.google.com/file/d/1DcUG8zbEuyvZMX69_Zn3AH931QTfkR2n/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn-demo">
                <i className="fas fa-external-link-alt"></i> Demo
              </a>
            </div>
          </div>
        </article>

        </div>
      </section>


      <section id="experience" className="experience">
        <h2 className="about-title">Experience & Activities</h2>

        <div className="timeline">

          <div className="timeline-item">
            <div className="timeline-dot blue"></div>
              <article className="xp-card">
                <header className="xp-head">
                  <span className="xp-badge xp-badge--blue">
                    <i className="fa-solid fa-briefcase"></i> Internship
                  </span>
                  <span className="xp-date">
                    <i className="fa-regular fa-calendar"></i> July  - May 2025
                  </span>
                </header>

                <h3 className="xp-role">UX/UI Design Intern</h3>
                <a className="xp-company">Mukdahan Technology College</a>

                <p className="xp-desc">
                  
                    <li>Designed a website for the college to display key information and promote its activities</li>
                    <li>Developed wireframes, prototypes, and visual designs with a focus on user-friendly navigation</li>
                    <li>Collaborated with the marketing team to ensure the design met the college's branding and communication goals</li>

                </p>

                <div className="xp-tags">
                  <span className="xp-chip">Figma</span>
                  <span className="xp-chip">UI/UX</span>
                  <span className="xp-chip">Team Collaboration</span>
                </div>
              </article>
              </div>

          <div className="timeline-item">
            <div className="timeline-dot blue"></div>
              <article className="xp-card">
                <header className="xp-head">
                  <span className="xp-badge xp-badge--blue">
                   <i className="fa-solid fa-chalkboard-user"></i> Teaching Assistant
                  </span>
                  <span className="xp-date">
                    <i className="fa-regular fa-calendar"></i> June – October 2025
                  </span>
                </header>

                <h3 className="xp-role">Teaching Assistant – Database Systems</h3>
                <a className="xp-company">Ubon Ratchathani University</a>

                <p className="xp-desc">
                   <li>Assisted students in understanding core database concepts including MongoDB, SQL, and indexing</li>
                   <li>Provided guidance during lab sessions and supported hands-on exercises</li>
                   <li>Evaluated assignments and provided constructive feedback to enhance learning</li>
                   <li>Collaborated with lecturers to prepare and deliver course materials effectively</li>
                </p>

                <div className="xp-tags">
                <span className="xp-chip">MongoDB</span>
                <span className="xp-chip">NoSQL</span>
                <span className="xp-chip">Database Systems</span>
                <span className="xp-chip">Mentoring</span>
                </div>
              </article>
              </div>
        </div>

        <div class="activity-grid">
          <article class="activity-card">
            <div class="media">
              <img src="/images/CertSecondRound_อรอนงค์_018.jpg" alt="NSC 2025" />
              <span class="activity-label label-left">Competition</span>
              <span class="activity-label label-right">2025</span>
            </div>
            <div class="content">
              <h3>The 27th National Software Contest (NSC 2025)</h3>
              <p>
                Led the development of the VUP! project for the 27th National Software Contest, advancing to the second round and securing a development grant. Managed all stages of the project, from design and development to testing, receiving commendations for innovation and functionality
                </p>
            </div>
          </article>

      
          <article class="activity-card">
            <div class="media">
              <img src="/images/brother-hood.jpg" alt="Business Brotherhood 2025" />
              <span class="activity-label label-left">Competition</span>
              <span class="activity-label label-right">2025</span>
            </div>
            <div class="content">
              <h3>Business Brotherhood 2025</h3>
              <p>
                Participated with the project <em>Healmind</em>, a mental health app. 
                Served as <strong>UX/UI Designer & Frontend Developer</strong>, responsible for designing user flows, interfaces, prototyping, and implementing the frontend. 
              </p>
              
            </div>
          </article>

          <article class="activity-card">
            <div class="media">
              <img src="/images/sci-tech.jpg" alt="Sci-Tech" />
              <span class="activity-label label-left">Competition / Showcase</span>
              <span class="activity-label label-right">2025</span>
            </div>
            <div class="content">
             <h3>Sci-Tech Symposium 2025</h3>
              <p>
                Presented the project <em>"VUP!"</em> as a poster and demonstrated it to judges and attendees. 
                Received recognition with a <em>Good Presentation</em> award for project quality and presentation skills.
              </p>

            </div>
          </article>

          <article class="activity-card">
            <div class="media">
              <img src="/images/hackathon.jpg" alt="UBU Hackathon 2024" />
              <span class="activity-label label-left">Hackathon</span>
              <span class="activity-label label-right">2025</span>
            </div>
            <div class="content">
              <h3>UBU Hackathon 2024</h3>
              <p>
                Participated in a 2-day hackathon workshop where I learned team collaboration, rapid prototyping, and coding practices. 
                Competed by building a working project and presenting it to a panel of judges
              </p>
            </div>
          </article>


          <article class="activity-card">
          <div class="media">
            <img src="/images/Information_literacy.png" alt="Information Literacy Training" />
            <span class="activity-label label-left">Training</span>
            <span class="activity-label label-right">2025</span>
          </div>
          <div class="content">
            <h3>Information Literacy Training</h3>
            <p>
              Participated in a training program on information literacy, developing skills to
              effectively search, evaluate, and apply information for academic and professional use.
            </p>
          </div>
        </article>

        <article class="activity-card">
            <div class="media">
              <img src="/images/staff.jpg" alt="Volunteer Activities" />
              <span class="activity-label label-left">Volunteer</span>
              <span class="activity-label label-right">2024</span>
            </div>
            <div class="content">
              <h3>School Outreach – Tech & Games</h3>
              <p>
                Participated in a volunteer program at Pathum Witthayakorn School, providing students 
                with basic technology knowledge and organizing recreational games to enhance 
                communication and teamwork skills
              </p>
            </div>
          </article>
        </div>
        
      </section>
  
      <footer>
        <p>&copy; 2025 Onanong Portfolio. Built with ReactJS, JavaScript & Custom CSS.</p>
      </footer>
    </div>
  );
}


