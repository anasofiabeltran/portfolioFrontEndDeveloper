import React from 'react'

import './ButtonCss.css'

function Button({text,srcImage,url}) {
  return (
    <button className='Button' >
        <a href={url}>
            <figure>
            <img src={srcImage} />
            <figcaption>
                {text}
            </figcaption>
            </figure>
        </a>
    </button>
  )
}

export  {Button}