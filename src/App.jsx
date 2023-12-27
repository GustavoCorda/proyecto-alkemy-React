import { useState,useEffect } from 'react'
import './App.css'
import Header from './assets/Components/Header.jsx'
import Carousel from './assets/Components/Carousel.jsx'
import Main from './assets/Components/Main.jsx'
import Section from './assets/Components/Section.jsx'
import Footer from './assets/Components/Footer.jsx'
import Catalogo from './assets/Components/Catalogo.jsx'
import Texto from './assets/Components/Texto.jsx'
import Calidad from './assets/Components/Calidad.jsx'
import Suscribete from './assets/Components/Suscribete.jsx'
import Whatsapp from './assets/Components/Whatsapp.jsx'
import Carrito from './assets/Components/Carrito.jsx'


function App() {

  

  const [precioTotal, setPrecioTotal] = useState(0);

  const [productosSeleccionados, setProductosSeleccionados] = useState([]);

  const calcularPrecioTotal = () => {
    const total = productosSeleccionados.reduce(
      (acc, producto) => acc + producto.precio * producto.cantidad,
      0
    );
    setPrecioTotal(total);
    return total;
  };

  const [mostrarCarrito,setMostrarCarrito] = useState(false);

  const [totalCarrito, setTotalCarrito] = useState(0)

  function agregarCarrito(){
    setTotalCarrito(totalCarrito + 1);
  }
  function descontarCarrito(){
    if (totalCarrito === 0){
      setTotalCarrito(0);
    } else {
    setTotalCarrito(totalCarrito - 1);
  }
  }
  

  const [carrito, setCarrito] = useState({});
  const handleClick = (nombre) => {
    setCarrito((prevCarrito) => {
      const nuevoCarrito = { ...prevCarrito };

      if (nuevoCarrito[nombre]) {
        nuevoCarrito[nombre]++;
      } else {
        nuevoCarrito[nombre] = 1;
      }
      console.log(nuevoCarrito)
      return nuevoCarrito;
    });
  };

  const handleClick2 = (nombre) => {
    setCarrito((prevCarrito) => {
      const nuevoCarrito = { ...prevCarrito };

      if (nuevoCarrito[nombre] && nuevoCarrito[nombre] > 0) {
        nuevoCarrito[nombre]--;
      }
      console.log(nuevoCarrito)
      return nuevoCarrito;
    });
  };

  useEffect(() => {
    const sumaTotal = Object.values(carrito).reduce((acc, cantidad) => acc + cantidad, 0);
    setTotalCarrito(sumaTotal);
    
  }, [carrito]);

  function mostrarResumenCarrito() {
    setMostrarCarrito((prevMostrarCarrito) => {
      const nuevoMostrarCarrito = !prevMostrarCarrito;
  
      if (!nuevoMostrarCarrito) {
        resetearLaSumaTotal();
      } else {
        setPrecioTotal(calcularPrecioTotal());
      }
  
      return nuevoMostrarCarrito;
    });
  }
  

  const resetearLaSumaTotal = () => {
    setPrecioTotal(0);
    setTotalCarrito(0);
    setCarrito({});
    setProductosSeleccionados([]);
  };
  
  useEffect(() => {
    if (!mostrarCarrito) {
      resetearLaSumaTotal();
    }
  }, [mostrarCarrito]);
  

  return (
    <>
    
    <Header sumaTotal={totalCarrito} fnMostrarCarrito = {mostrarResumenCarrito}/>
    <Carousel />
    <Main fnAgregarCarrito={agregarCarrito} fnDescontarCarrito={descontarCarrito} />
    <Catalogo   productoSumado={carrito}
        fnHandleClick={handleClick}
        fnHandleClick2={handleClick2}
        fnAgregarCarrito={agregarCarrito}
        fnDescontarCarrito={descontarCarrito}
        totalCarrito={totalCarrito}
        productosSeleccionados={productosSeleccionados}
        setProductosSeleccionados={setProductosSeleccionados}
        calcularPrecioTotal={calcularPrecioTotal}
        precioTotal={precioTotal}/>
    <Texto />
    <Calidad />
    <Section />
    <Suscribete />
    {mostrarCarrito && <Carrito onClose={() => setMostrarCarrito(false)} precioTotal={precioTotal} productoSumado= {carrito} fnMostrarCarrito = {mostrarResumenCarrito} sumaTotal={totalCarrito} gastoTotal={precioTotal} 
    />}
    <Whatsapp />
    <Footer />


    </>
  )
}

export default App
