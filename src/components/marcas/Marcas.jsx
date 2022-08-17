import React from 'react'
import './MarcasStyle.scss'

export function Marcas() {
  return (
    <section className='brands-container'>
      <div className='brands-top'>
        <h1 className='brands-top-title'>Principais marcas</h1>
        <span className='brands-top-span'>Ver todos</span>
      </div>

      <div className='brands-content'>

        <div className='brands-box'>
          <img src="./assets/marcasimg/marca1.svg" alt="" />
        </div>

        <div className='brands-box'>
          <img src="./assets/marcasimg/marca2.svg" alt="" />
        </div>

        <div className='brands-box'>
          <img src="./assets/marcasimg/marca3.svg" alt="" />
        </div>

        <div className='brands-box'>
          <img src="./assets/marcasimg/marca1.svg" alt="" />
        </div>

        <div className='brands-box'>
          <img src="./assets/marcasimg/marca2.svg" alt="" />
        </div>

        <div className='brands-box'>
          <img src="./assets/marcasimg/marca3.svg" alt="" />
        </div>

      </div>

      <img className='brands-left' src="./assets/arrowLeft.svg" alt="" />
      <img className='brands-right' src="./assets/arrowRight.svg" alt="" />

      <div className='brands-additional'>

        <div className='brands-adverts'>
          <div className='brands-adverts-content'>
            <h1 className='adverts-title'>Parceiros</h1>
            <p className='adverts-description'>Lorem ipsum dolor sit amet, consectetur</p>
            <button className='adverts-button'>Confira</button>
          </div>
        </div>

        <div className='brands-subscription'>
          <div className='brands-subs-content'>
            <h1 className='subs-title'>Assinatura Cãoselheiro</h1>
            <p className='subs-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor adipiscing quis non sed.</p>
            <button className='subs-button'>Saiba Mais</button>
          </div>
          <img className='subs-img' src="./assets/marcasimg/cachorro2.svg" alt="" />
        </div>

      </div>

      <img className='circles-img-brands' src="./assets/marcasimg/circlesmarcas.svg" alt="" />
    </section>
  )
}
