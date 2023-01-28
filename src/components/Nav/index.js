import React from 'react'

import './NavCss.css'

function Nav() {
  return (
    <nav className='Nav'>
      <button> <a href='#AboutMe'>ABOUT ME</a> </button>
      <button>  <a href='#Portafolio'> PORTAFOLIO</a></button>
      <button> <a href='#Contact'> CONTACT</a></button>
    </nav>
  )
}

export  {Nav}