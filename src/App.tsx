import programming from './assets/programming.png'
import reactLogo from './assets/react.svg'
import terraform from './assets/terraform.svg'
import nodejsLogo from './assets/nodejsIconWhite.svg'
import aws from './assets/aws.svg'
import github from './assets/GitHub_Invertocat_White.svg'
import linkedin from './assets/linkedin.png'
import './App.css'

function App() {

  return (
    <div className='containerPage'>
      <section id="center">
        <div className="hero">
          <img src={programming} className="base" width="170" height="170" alt="" />
        </div>
        <div>
          <h1>Tiago</h1>
          <h2>
            Full-stack developer
          </h2>
        </div>
        <div className='containerTechList'>
          <div className='containerTech'>
            <img src={nodejsLogo} className="iconTeck" alt="nodejs logo" />
            <p className='center-text'>NodeJs</p>
          </div>
          <div className='containerTech'>
            <img src={reactLogo} className="iconTeck" alt="react logo" />
            <p className='center-text'>React</p>
          </div>
          <div className='containerTech'>
            <img src={terraform} className="iconTeck" alt="terraform logo" />
            <p className='center-text'>Terraform</p>
          </div>
          <div className='containerTech'>
            <img src={aws} className="iconTeck" alt="aws logo" />
            <p className='center-text'>AWS</p>
          </div>
        </div>

      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Game</h2>
          <p>Game developed with PhaserJs</p>
          <ul>
            <li>
              <a href="https://tiagoumemura.github.io/game/" target="_blank">
                Play
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect</h2>
          <p>Github and Linkedin</p>
          <ul>
            <li>
              <a href="https://github.com/TiagoUmemura" target="_blank">
                <img src={github} className="iconTeck" alt="github logo" />
                GitHub
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/tiago-kenji-umemura/" target="_blank">
                <img src={linkedin} className="iconTeck" alt="linkedin logo" />
                Linkedin
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default App
