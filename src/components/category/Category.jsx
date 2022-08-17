import React from 'react'
import './CategoryStyle.scss'

export function Category() {
  return (
    <section className='category-container'>
      <h1 className='category-title'>Categorias</h1>

      <div className='category-content'> 
        <div className='category-items'>
          <img className='category-img' src='../assets/categoryimg/dogOne.svg' alt=''/>
          <span className='category-text'>Brinquedos</span>
        </div>

        <div className='category-items'>
          <img className='category-img' src='../assets/categoryimg/dogTwo.svg' alt=''/>
          <span className='category-text'>Petiscos</span>
        </div>

        <div className='category-items'>
          <img className='category-img' src='../assets/categoryimg/dogTree.svg' alt=''/>
          <span className='category-text'>Guias</span>
        </div>

        <div className='category-items'>

          <img className='category-img' src='../assets/categoryimg/dogFour.svg' alt=''/>
          <span className='category-text'>Higiene</span>
        </div>
      </div>
      
      <img className='category-arrow-left' src='../assets/arrowLeft.svg' alt=''/>
      <img className='category-arrow-right' src='../assets/arrowRight.svg' alt=''/>

    </section>
  )
}
