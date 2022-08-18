import React from 'react'
import './ContactStyle.scss'

export function Contact() {
  return (
    <section className='contact-container'>
      <div className='contact-content'>

        <img className='contact-img' src="./assets/contactimg/dogcontact.svg" alt="" />
        
        <form className='contact-box'>

          <h1 className='contact-title'>Se inscreva para receber novidades e promoções</h1>
          
          <input className='contact-name' type="text" placeholder='Digite seu nome'/>
          <input className='contact-email' type="text" placeholder='Digite seu e-mail'/>

          <img className='contact-name-icon' src="./assets/contactimg/iconuser.svg" alt="" />
          <img className='contact-email-icon' src="./assets/contactimg/iconemail.svg" alt="" />


          <button className='contact-button'>Enviar</button>
        </form> 
      </div>
    </section>
  )
}
