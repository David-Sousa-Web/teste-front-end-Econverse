import React, { useState } from 'react'

export default function Card(props) {
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }

  if (modal) {
    document.body.classList.add("active-modal")
  } else {
    document.body.classList.remove("active-modal")
  }

  return (
    <div className='card-container'>

      <div className='box' onClick={toggleModal}>
        <div className='products-assets'>
          <img src="./assets/productsimg/promotion.svg" alt="" />
          <img src="./assets/productsimg/heartsm.svg" alt="" />
        </div>

        <img className='img' src={props.photo} alt="" onClick={toggleModal}/>
        <span className='text-product'>{props.productName}</span>

        <span className='text-price-old'>De R$ 96,69</span>
        <span className='text-price-now'>Por R$ 90,69</span>

        <div className='subscriber-content'>
          <span className='text-subscriber-one'>R$ 85,69</span>
          <span className='text-subscriber-two'>Para assinantes</span>
        </div>

        <button className='products-button' onClick={toggleModal}>Adicionar</button>

      </div>

      {/* Popup box */}
      {modal &&(
        <div className='modal'>
          <div onClick={toggleModal} className='overlay'></div>

          <div className='modal-content'>
            <img className='modal-img' src={props.photo} alt="" />

            <div className='modal-items'>

              <h1 className='title-items'>{props.productName}</h1>
              <p className='price-items'>{props.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
              <span className='description-items'>{props.descriptionShort}</span>
              <p className='details-items'>Veja mais detalhes do produto</p>

            </div>
            <img className='close-modal' src="./assets/productsimg/close.svg" alt="" onClick={toggleModal}/>
          </div>

          
        </div>
      )}

    </div>
  )
}
