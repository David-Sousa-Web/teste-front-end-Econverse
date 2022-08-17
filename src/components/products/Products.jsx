import React from 'react'
import './ProductsStyle.scss'
import data from './ProductsData.json'
import Card from './Card.jsx';
import { useRef } from 'react'

export function Products() {
  const carousel = useRef(null)

  const handleLeftClick = (e) =>{
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth
  }
  const handleRightClick = (e) =>{
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth
  }

  return (
    <section className='product-container'>

      <div className='products-container-top'>
        <h1 className='products-title'>Meu cachorro...</h1>

        <div className='products-top'>
          <img src='../assets/productsimg/arrowLeftYellow.svg' alt=''/>
          <button className='btn-products-y'>é agitado</button>
          <button className='btn-products'>morde</button>
          <button className='btn-products'>late muito</button>
          <button className='btn-products'>é ansioso</button>
          <button className='btn-products'>é estressado</button>
          <img src='../assets/productsimg/arrowRightYellow.svg' alt=''/>
        </div>
      </div>

      <div id='product-carousel' className='products-content' ref={carousel}>
        {data.products.map((post) =>{
          return <Card productName={post.productName} descriptionShort={post.descriptionShort} photo={post.photo} price={post.price}/>
        })}
      </div>

      <img className='products-arrow-left' src='./assets/arrowLeft.svg' alt='' onClick={handleLeftClick}/>
      <img className='products-arrow-right' src='./assets/arrowRight.svg' alt='' onClick={handleRightClick}/>

      <div className='products-bottom'>
        <span className='products-bottom-text'>Ver todos</span>
        <img className='products-bottom-circle' src="./assets/productsimg/circles.svg" alt="" />
      </div>
        
    </section>
  )
}
