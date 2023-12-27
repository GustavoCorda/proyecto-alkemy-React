import React from 'react'

function Main() {
  return (
   <>
   
   <main>
    <h4>LOS MAS VENDIDOS:</h4>
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner ">
          <div className="carousel-item carousel-ventas active">

            
                <div className="ventas-flex">
                     <div className="contenedor-img-venta">  
                        <img src="./src/assets/gafas.png" className="d-block w-100" alt="..."/> 
                        <p>GAFAS DE SOL ORIGINALES</p>
                    </div>

                     <div  className="contenedor-img-venta"> 
                        <img src="./src/assets/zapatos.jpg" className="d-block w-100" alt="..."/>
                        <p>ZAPATOS DE DAMA</p>
                        </div>

                    <div className="contenedor-img-venta"> 
                        <img src="./src/assets/duchaparacanilla.png" className="d-block w-100" alt="..."/> 
                        <p>DUCHA PARA CANILLA</p>
                      </div>
                </div>
                
            </div>

            <div className="carousel-item carousel-ventas">
                <div className="ventas-flex">
                <div className="contenedor-img-venta">  
                   <img src="./src/assets/messiinter.jpg" className="d-block w-100" alt="..."/> 
                   <p>CAMISETA MESSI INTER</p>
               </div>

                <div  className="contenedor-img-venta"> 
                   <img src="./src/assets/termostanley.png" className="d-block w-100" alt="..."/>
                   <p>MATE Y TERMO STANLEY</p>
                   </div>

               <div className="contenedor-img-venta"> 
                   <img src="./src/assets/pizarramagica.png" className="d-block w-100" alt="..."/> 
                   <p>PIZARRA MAGICA</p>
                 </div>
           </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
  </main>
   
   </>
  )
}

export default Main