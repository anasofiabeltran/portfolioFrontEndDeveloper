import React from 'react'

import linkedin from '../../Assets/Icons/linkedin.png'
import github_logo from '../../Assets/Icons/signo-de-github.png'
import platzi from '../../Assets/Icons/platzi.png'

import './FooterCss.css'

function Footer() {
  return (
    <footer className='Footer'>
      <section className='Footer-content'>
        <article>
          <button>
            <a href='https://www.linkedin.com/in/ana-sofia-beltran-63743321a/'>
              <figure>
                <img  src={linkedin}/>
              </figure>
            </a>
          </button>
          <button>
            <a href="https://github.com/anasofiabeltran">
              <figure>
                <img  src={github_logo}/>
              </figure>
            </a>
          </button>
          <button>
            <a href="https://platzi.com/p/anasobeltran1/">
              <figure>
                <img  src={platzi}/>
              </figure>
            </a>
          </button>
          
          
        </article>
        <br />
        <p>Basado en el portafolio <a href='https://joaotulio.vercel.app/'> https://joaotulio.vercel.app/</a></p>
      </section>
        
    </footer>
  )
}

export  {Footer}