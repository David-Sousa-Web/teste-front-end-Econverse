import React from 'react'
import './FooterStyle.scss'

export function Footer() {
  return (
    <footer className='footer-container'>
      <div className='footer-main'>
        <h1 className='title-main'>Nos siga nas nossas redes sociais</h1>
        <div className='footer-icons-main'>
          <img src="./assets/Footer/face.svg" alt="" />
          <img src="./assets/Footer/insta.svg" alt="" />
          <img src="./assets/Footer/youtube.svg" alt="" />
        </div>

        <div className='footer-secundary-main'>
          <h1 className='title-main'>Sobre O Cãoselheiro</h1>
          <span className='secundary-text-main'>Seja muito bem-vindo! O Cãoselheiro - a loja - é a loja online 
            de uma empresa que nasceu para contribuir para uma melhor qualidade de vida 
            dos cães e seus familiares humanos. Seus sócios são profissionais de educação canina 
            que trabalham seguindo metodologias positivas de treinamento animal, encorajando e recompensando
            os acertos de nossos amigos em seus processos de adestramento. Aqui você encontrará apenas itens de 
            qualidade comprovada e utilizados pessoalmente por seus idealizadores. Fique à vontade!</span>
        </div>

      </div>

      <div className='footer-instructions'>
        
        <div className='instruction-content'>

          <div className='instruction-content-part1'>
            <h1 className='title-instruction'>Assinatura</h1>
            <h1 className='title-instruction'>Parceiros</h1>
          </div>

          <div className='instruction-content-part1'>
            <h1 className='title-instruction'>Institucional</h1>
            <span className='instruction-text'>Quem somos</span>
            <span className='instruction-text'>Política de privacidade</span>
            <span className='instruction-text'>Política comercial</span>
            <span className='instruction-text'>Política de devolução</span>
            <span className='instruction-text'>Regras de frete</span>
          </div>

          <div className='instruction-content-part1'>
            <h1 className='title-instruction'>Atendimento</h1>
            <span className='instruction-text'>Fale conosco</span>
            <span className='instruction-text'><img src="./assets/Footer/phone.svg" alt="" /> (11) 97212-1314</span>
            <span className='instruction-text'>ocaoselheiro@ocaoselheiro.com.br</span>
            <span className='instruction-text'>Trabalhe conosco</span>
          </div>

        </div>

        <div className='instruction-content-2'>
          <div className='instruction-content-itens-2'>
            <h1 className='title-instruction-2'>Institucional</h1>
            <img className='img-1' src="./assets/Footer/cards.svg" alt="" />
          </div>

          <div className='instruction-content-itens-2'>
            <h1 className='title-instruction-2'>Segurança</h1>
            <img className='img-2' src="./assets/Footer/security.svg" alt="" />
          </div>
        </div>
        
       

        <div className='footer-logos'>
          <span className='logos-text'>
            O Cãoselheiro Comércio LTDA
            CNPJ: 30.324.633/0001-16
            © Todos os direitos reservados. 2021
          </span>
          <img className='econverse' src="./assets/Footer/econverse.svg" alt="" />
        </div>
      </div>
    </footer>
  )
}
