import React from 'react'
import './BlogsStyle.scss'

export function Blogs() {
  return (
    <section className='blogs-container'>
      <h1 className='blogs-title'>Confira o nosso Blog</h1>

      <div className='blogs-content'>
        <div className='blogs-box'>
          <img className='blogs-img' src="./assets/blogsimg/blogimg1.svg" alt="" />
          <h1 className='blogs-title-box'>Lorem ipsum dolor sit amet consectetur.</h1>
          <span className='blogs-description'>Lorem ipsum dolor sit amet, consectetur elit adipiscing dignissim posuere vitae.</span>
          <button className='blogs-button'>Ler artigo</button>
        </div>

        <div className='blogs-box'>
          <img className='blogs-img' src="./assets/blogsimg/blogimg2.svg" alt="" />
          <h1 className='blogs-title-box'>Lorem ipsum dolor sit amet consectetur.</h1>
          <span className='blogs-description'>Lorem ipsum dolor sit amet, consectetur elit adipiscing dignissim posuere vitae.</span>
          <button className='blogs-button'>Ler artigo</button>
        </div>

        <div className='blogs-box'>
          <img className='blogs-img' src="./assets/blogsimg/blogimg3.svg" alt="" />
          <h1 className='blogs-title-box'>Lorem ipsum dolor sit amet consectetur.</h1>
          <span className='blogs-description'>Lorem ipsum dolor sit amet, consectetur elit adipiscing dignissim posuere vitae.</span>
          <button className='blogs-button'>Ler artigo</button>
        </div>

        <div className='blogs-box'>
          <img className='blogs-img' src="./assets/blogsimg/blogimg4.svg" alt="" />
          <h1 className='blogs-title-box'>Lorem ipsum dolor sit amet consectetur.</h1>
          <span className='blogs-description'>Lorem ipsum dolor sit amet, consectetur elit adipiscing dignissim posuere vitae.</span>
          <button className='blogs-button'>Ler artigo</button>
        </div>
      </div>
      
      <img className='blogs-left' src="./assets/arrowLeft.svg" alt="" />
      <img className='blogs-right' src="./assets/arrowRight.svg" alt="" />

      <img className='blogs-circle' src="./assets/marcasimg/circlesmarcas.svg" alt="" />

      <div className='blogs-top-insta'>
        <h1 className='blogs-top-title-insta'>Instagram</h1>
        <span className='blogs-top-insta-follow'>+Seguir</span>
      </div>

      <div className='blogs-box-insta'>
        <img src="./assets/insta/instaimg1.svg" alt="" />
        <img src="./assets/insta/instaimg2.svg" alt="" />
        <img src="./assets/insta/instaimg3.svg" alt="" />
        <img src="./assets/insta/instaimg1.svg" alt="" />
        <img src="./assets/insta/instaimg2.svg" alt="" />
        <img className='insta-img' src="./assets/insta/instaimg3.svg" alt="" />
      </div>
    </section>
  )
}
