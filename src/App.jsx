import React, { useState, useEffect } from "react";
import "./App.css";

// Importar componentes
import Header from "./assets/Components/Header.jsx";
import Carousel from "./assets/Components/Carousel.jsx";
import Main from "./assets/Components/Main.jsx";
import Section from "./assets/Components/Section.jsx";
import Footer from "./assets/Components/Footer.jsx";
import Catalogo from "./assets/Components/Catalogo.jsx";
import Texto from "./assets/Components/Texto.jsx";
import Calidad from "./assets/Components/Calidad.jsx";
import Suscribete from "./assets/Components/Suscribete.jsx";
import Whatsapp from "./assets/Components/Whatsapp.jsx";
import Carrito from "./assets/Components/Carrito.jsx";

function App() {
  // useState para almacenar el precio total
  const [precioTotal, setPrecioTotal] = useState(0);

  // useState para los productos seleccionados en el carrito
  const [productosSeleccionados, setProductosSeleccionados] = useState([]);

  // useState para mostrar el Componente Carrito
  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  // useState para almacenar el total de productos en el carrito
  const [totalCarrito, setTotalCarrito] = useState(0);

  // useState para almacenar el contenido agregado al carrito
  const [carrito, setCarrito] = useState({});

  // Maanejador de click para agregar producto al carrito
  // Se usa en el componente Catalogo
  const handleClick = (nombre) => {
    setCarrito((prevCarrito) => {
      const nuevoCarrito = { ...prevCarrito };

      if (nuevoCarrito[nombre]) {
        nuevoCarrito[nombre]++;
      } else {
        nuevoCarrito[nombre] = 1;
      }

      return nuevoCarrito;
    });
  };

  // Manejador de click para quitar productos del carrito
  // Se usa en el componente Catalogo
  const handleClick2 = (nombre) => {
    setCarrito((prevCarrito) => {
      const nuevoCarrito = { ...prevCarrito };

      if (nuevoCarrito[nombre] && nuevoCarrito[nombre] > 0) {
        nuevoCarrito[nombre]--;
      }
      return nuevoCarrito;
    });
  };

  // Efecto para actualizar el total en el carrito
  // ### Con ayuda de IA pude hacer y entender este useEfect:
  // Se convierte el objeto carrito en un array de 2 datos : un dato es el producto ingresado y el otro dato la  cantidad de esos productos por ejeplo :
  // sumaTotal = [[producto1, 2] [producto2 , 4]  [producto5 , 1]...] luego con reduce se suman todas las cantidades , se usaun acumulador acc que empieza seteado en 0 (el ultimo 0 antes del parentesis indica a que valor se setea el acumulador), entonces ese acumuladorseva sumando a si mismo a la nueva cantidad del nuevo producto . cada vez que [carrito] cambie de estado se ejecutara todo lo anterior
  // intente exlicarlo con mis palabras , es asi como logre entenderlo
  useEffect(() => {
    const sumaTotal = Object.values(carrito).reduce(
      (acc, cantidad) => acc + cantidad,
      0
    );
    setTotalCarrito(sumaTotal);
  }, [carrito]);

  // Función para mostrar y ocultar el componente Carrito , tambien reseteamos la sumatotal de los productos y elprecio total a pagar
  // Se usa desde el componente Carrito

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

  // Función para calcular el precio total

  //  ###### ACA FUI ASISTIDO SOBRE COMO PODER CREAR UNA FUNCION QUE ITERE SOBRE LOS ELEMETOS DEL ARRAY Y VAYA ACUMULANDO EL PRECIO, LA EXPLICACION DE CHATGPT:

  //productosSeleccionados.reduce: El método reduce se utiliza para iterar sobre los elementos del array productosSeleccionados y acumular un resultado. En este caso, acc (acumulador) es la variable que acumula el resultado, y producto representa cada elemento del array.

  // (acc, producto) => acc + producto.precio * producto.cantidad: Esta es la función de reducción que se ejecuta en cada elemento del array. Toma el acumulador (acc) y le suma el producto del precio y la cantidad del producto actual. En otras palabras, multiplica el precio de cada producto por la cantidad y lo agrega al acumulador.

  // 0: Este es el valor inicial del acumulador (acc). En este caso, comienza en 0.

  // setPrecioTotal(total): Después de calcular el precio total, se actualiza el estado precioTotal utilizando la función setPrecioTotal. Esto es útil si necesitas realizar acciones adicionales basadas en el precio total en otros lugares de tu componente.

  // return total: Finalmente, la función devuelve el valor total calculado. Esto puede ser útil si deseas utilizar el resultado en otros lugares de tu código.

  // En resumen, la función calcularPrecioTotal toma la lista de productos seleccionados, multiplica el precio de cada producto por su cantidad, suma estos valores y actualiza el estado precioTotal con el resultado. Luego, devuelve el precio total calculado.

  const calcularPrecioTotal = () => {
    const total = productosSeleccionados.reduce(
      (acc, producto) => acc + producto.precio * producto.cantidad,
      0
    );
    setPrecioTotal(total);
    return total;
  };

  // useEffect para resetear la suma total que se ve en el header, luego de cerrar el carrito
  useEffect(() => {
    if (!mostrarCarrito) {
      resetearLaSumaTotal();
    }
  }, [mostrarCarrito]);

  // Función para resetear la suma total y el contenido del carrito

  const resetearLaSumaTotal = () => {
    setPrecioTotal(0);
    setTotalCarrito(0);
    setCarrito({});
    setProductosSeleccionados([]);
  };

  return (
    <>
      <Header
        sumaTotal={totalCarrito}
        fnMostrarCarrito={mostrarResumenCarrito}
      />
      <Carousel />
      <Main />
      <Catalogo
        productoSumado={carrito}
        fnHandleClick={handleClick}
        fnHandleClick2={handleClick2}
        setProductosSeleccionados={setProductosSeleccionados}
        productosSeleccionados={productosSeleccionados}
      />
      <Texto />
      <Calidad />
      <Section />
      <Suscribete />
      {mostrarCarrito && (
        <Carrito
          onClose={() => setMostrarCarrito(false)}
          precioTotal={precioTotal}
          productoSumado={carrito}
          fnMostrarCarrito={mostrarResumenCarrito}
          sumaTotal={totalCarrito}
        />
      )}
      <Whatsapp />
      <Footer />
    </>
  );
}

export default App;
