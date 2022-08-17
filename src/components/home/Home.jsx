import React from 'react'
import './HomeStyle.scss'

export function Home() {
  return (
    <main className='main-container'>
      <img className='main-image' src='../assets/Homeimg/homeimg.svg' alt=''/>

      <div className='main-content'>
        <span className='text-main'>As melhores guias para os melhores passeios.</span>
        <button className='button-main'>confira</button>
      </div>

      <img className='arrow-left' src='../assets/Homeimg/arrowleft.svg' alt=''/>
      <img className='arrow-right' src='../assets/Homeimg/arrowright.svg' alt=''/>

      <div className='elipse-content'>
        <img className='elipse-one' src='../assets/Homeimg/elipse.svg' alt=''/>
        <img className='elipse-two' src='../assets/Homeimg/elipse.svg' alt=''/>
        <img className='elipse-three' src='../assets/Homeimg/elipse.svg' alt=''/>
      </div>

      <img className='arrow-down' src='../assets/Homeimg/arrowdown.svg' alt=''/>

    </main>
  )
}
