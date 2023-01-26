import React from 'react'

import './CardCss.css'
import folder from '../../Assets/Icons/programacion-web-2.png'

function Card({children}) {
  return (
    <div className='Card'>
        <img className='Card-folder-img' src={folder}/>
        {children}
    </div>
  )
}

export  {Card}