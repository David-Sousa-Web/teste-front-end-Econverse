import React from 'react'
import './HeaderStyle.scss'

export function Header() {
  return (
    <header>
      <div className='top-container'>
        <div className='top-content'>
          <img src="../assets/headerIcons/shield.svg" alt=''/>
          <span>Compra</span>
          <span className='top-decoration'>
            100% segura
          </span>
        </div>

        <div className='top-content'>
          <img src="../assets/headerIcons/caminhao.svg" alt=''/>
          <span className='top-decoration'>Frete grátis</span>
          <span>acima de R$ 200</span>
        </div>

        <div className='top-content'>
          <img src="../assets/headerIcons/card.svg" alt=''/>
          <span className='top-decoration'>Parcele</span>
          <span>suas compras</span>
        </div>
      </div>

      <div className='main-container'>
        <img src='../assets/headerIcons/logo.svg' alt=''/>

        <div className='search'>
          <input type={Text} placeholder="O que você está buscando?"/>
          <img src="../assets/headerIcons/search.svg" alt=''/>
        </div>

        <div className='options-container'>
          <img src='../assets/headerIcons/box.svg' alt=''/>
          <img src='../assets/headerIcons/heart.svg' alt=''/>
          <img src='../assets/headerIcons/icon.svg' alt=''/>
          <img src='../assets/headerIcons/cart.svg' alt=''/>
        </div>
      </div>

      <div className='bottom-container'>
        <span>Brincar</span>
        <span>Morder</span>
        <span>Comer</span>
        <span>Passear</span>
        <span>Casa e Conforto</span>
        <span>Educação</span>
        <span className='bottom-decoration'>Ofertas</span>
        <span className='span-crown'><img src='../assets/headerIcons/crown.svg' alt=''/>Coleção de outono</span>
      </div>
    </header>
  )
}
