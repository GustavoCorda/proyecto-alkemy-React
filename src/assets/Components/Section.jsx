import React from 'react'

function Section() {
  return (
   <>
   
   <section >
        <div><p><span className="letra-grande">ULTIMAS OPINIONES:</span></p></div>
        <div className="personas">
          <div className="persona">
            <img src="./src/assets/persona 1.png" alt=""/>
            <p><span className="nombre-cliente">Francisca Afric</span></p>
            <p className="texto-persona">"Hice un pedido y llego a los 3 días luego de realizado el pago, muy buena atención, muy amable."</p>
            <p className="estrellas"><i className="las la-star"></i><i className="las la-star"></i><i className="las la-star"></i><i className="las la-star"></i><i className="las la-star"></i></p>

          </div>
          <div className="persona">
            <img src="./src/assets/persona 2.png" alt=""/>
             <p><span className="nombre-cliente">Jose Bustos</span></p>
            <p className="texto-persona">"Le regalé a mi esposa un reloj pulsera por nuestro aniversario de casados, le encantó, la entrega fue como se pactó y el producto de excelente calidad."</p>
            <p className="estrellas"><i className="las la-star"></i><i className="las la-star"></i><i className="las la-star"></i><i className="las la-star"></i><i className="las la-star"></i></p>
          </div>
          <div className="persona">
            <img className="img-3" src="./src/assets/persona 3.png" alt=""/>
            <p><span className="nombre-cliente">Sasha Gutierrez</span></p>
            <p className="texto-persona">"Súper recomendable. El pedido llegó en tiempo y forma.Le dejo 5 estrellas."</p>
            <p className="estrellas"><i className="las la-star"></i><i className="las la-star"></i><i className="las la-star"></i><i className="las la-star"></i><i className="las la-star"></i></p>
          </div>
        </div>
      
        <div className="div2"><p><span className="letra-grande2">LEER TODAS...</span></p></div>
    </section>
    
    </>
  )
}

export default Section