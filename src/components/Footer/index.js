import React from 'react'

import linkedin from '../../Assets/Icons/linkedin.png'
import github_logo from '../../Assets/Icons/signo-de-github.png'

import './FooterCss.css'

function Footer() {
  return (
    <footer className='Footer'>
      <section className='Footer-content'>
        <article>
          <button>
            <a>
              <figure>
                <img  src={linkedin}/>
              </figure>
            </a>
          </button>
          <button>
            <a>
              <figure>
                <img  src={github_logo}/>
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