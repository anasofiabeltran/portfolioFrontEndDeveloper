import React from 'react'

function FormContact() {
  return (
    <form className='FormContac' action="https://formspree.io/f/xjvdyopa"
    method="POST">
        <div className='FormContac-container'>
            <h2 className='FormContac-container-tittle'>Contactame</h2>
            <input type="text" className='FormContac-container-input' placeholder='nombre' name="name"/>
            <input type="email" className='FormContac-container-email' placeholder='Email' name="email"/>
            <textarea className='FormContac-container-input--message' placeholder='Mensaje:' name="message"/>
            <input type="submit" value="Enviar" className='FormContac-container-send'/>
        </div>
    </form>
  )
}

export  {FormContact}