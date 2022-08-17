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

      <div className=''>
        
      </div>

    </section>
  )
}
