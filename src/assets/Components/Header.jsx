import React from "react";

function Header({ sumaTotal, fnMostrarCarrito }) {
  return (
    <>

    {/* Nav con clase sticky */}
      <div className="sticky">
        <nav className="nav1 navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <img src="./src/assets/logo shopcart.png" alt="" />
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    INICIO
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="#">
                    CATALOGO
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">
                    INDUMENTARIA
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">
                    CALZADO
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">
                    GAFAS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">
                    ELECTRONICA
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">
                    HOGAR
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">
                    METODOS DE PAGO
                  </a>
                </li>
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Buscar"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Buscar
                </button>
              </form>

              {/* la imagen del carrito,contiene el onclcik que llama al componente Carrito */}
              <div className="contenedor-carrito">
                <img
                  onClick={fnMostrarCarrito}
                  className="carrito"
                  src="../src/assets/carrito.png"
                  alt=""
                />
                {/* este span se actualiza mediante sumaTotal mostrando el total de los productos agregados al carrito, y se visualiza a la derecha del carrito */}
                <span id="span-total-carrito" className="total-carrito">
                  {sumaTotal}
                </span>
              </div>
            </div>
          </div>
        </nav>

        <div className="barra-de-noticias ">
          <a href="">
            <img
              className="logo-insta"
              src="./src/assets/logo insta.png"
              alt="logo instagram"
            />
          </a>{" "}
          <a href="">
            <img
              className="logo-face"
              src="./src/assets/logo face.png"
              alt="logo facebook"
            />
          </a>
          <div className="container mt-5 div-noticias">
            <div
              id="newsCarousel"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner carousel-noticias">
                <div className="carousel-item active">
                  <p>ESTA SEMANA DESCUBRI NUEVOS PRODUCTOS</p>
                </div>
                <div className="carousel-item">
                  <p>SEGUINOS EN NUESTRAS REDES</p>
                </div>
                <div className="carousel-item">
                  <p>¿CUANTO FALTA?NI MUCHO NI POCO.. SE ACERCA NAVIDAD</p>
                </div>
                <div className="carousel-item">
                  <p>DISTINTAS OPCIONES PARA ESTE VERANO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
}

export default Header;
