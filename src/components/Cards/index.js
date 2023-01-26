import React from 'react'

import './CardsCss.css'

function Cards({children}) {
  return (
    <section className='Cards'>
      
        {children}

    </section>
  )
}

export  {Cards}