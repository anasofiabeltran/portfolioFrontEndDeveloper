import React from 'react'

import CV from '../../Assets/Doc/AnaSofiaBeltranCV.pdf'

import './NavCss.css'

function Nav() {
  return (
    <nav className='Nav'>
      <button> <a href='#AboutMe'>ABOUT ME</a> </button>
      <button>  <a href='#Portafolio'> PORTAFOLIO</a></button>
      <button> <a href='#Contact'> CONTACT</a></button>
      <button> <a href={CV} download> CURRICULUM</a></button>
    </nav>
  )
}

export  {Nav}