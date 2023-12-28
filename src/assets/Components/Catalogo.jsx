import React from "react";
import imgPizarra from "../pizarramagica.png";
import imgTermo from "../termostanley.png";
import imgMessi from "../messiinter.jpg";
import imgDucha from "../duchaparacanilla.png";
import imgZapatos from "../zapatos.jpg";

function Catalogo({
  fnHandleClick,
  fnHandleClick2,
  setProductosSeleccionados,
  productosSeleccionados 
}) {

  // pequeña lista de productos con sus datos 
  const catalogo = [
    { id: 1, nombre: "PIZARRA MAGICA", precio: 7500, imagen: imgPizarra },
    { id: 2, nombre: "MATE Y TERMO STANLEY", precio: 65000, imagen: imgTermo },
    { id: 3, nombre: "CAMISETA MESSI INTER", precio: 18000, imagen: imgMessi },
    { id: 4, nombre: "DUCHA PARA CANILLA", precio: 5400, imagen: imgDucha },
    { id: 5, nombre: "ZAPATOS DE DAMA", precio: 33000, imagen: imgZapatos },
  ];


// Manejador del boton Agregar productos desde el catalogo
// setProductosSeleccionados le aplicamos elprevProductos, lo que hace es tomar el valor de produtosSeleccionados anterior
// creamos la const existente ,mediante .find verificamos si elvalor de productoSeleccionados es estrictamente igual al producto ingresado que se toma desde el onClick handleAgregar(producto) , luego
// verifica si ya existe, actualiza la cantidad con un map y si no existe agrega con cantidad igual a 1
const handleAgregar = (producto) => {
  setProductosSeleccionados((prevProductos) => {
    const existente = prevProductos.find((p) => p.nombre === producto.nombre);

    if (existente) {
      // Si ya existe, actualiza la cantidad
      return prevProductos.map((p) =>
        p.nombre === producto.nombre
          ? { ...p, cantidad: p.cantidad + 1 }
          : p
      );
    } else {
      // Si no existe, agrégalo con cantidad 1
      return [...prevProductos, { ...producto, cantidad: 1 }];
    }
  });

  fnHandleClick(producto.nombre);
};


// Manejador del onClick 

const handleQuitar = (producto) => {
  setProductosSeleccionados((prevProductos) => {
    const existente = prevProductos.find((p) => p.nombre === producto.nombre);

    if (existente && existente.cantidad > 0) {
      // Si existe y la cantidad es mayor que 0, actualiza la cantidad
      return prevProductos.map((p) =>
        p.nombre === producto.nombre
          ? { ...p, cantidad: p.cantidad - 1 }
          : p
      );
    } else {
      // Si no existe o la cantidad es 0, retorna el estado actual
      return prevProductos;
    }
  });

  fnHandleClick2(producto.nombre);
};


  // Calculo del precio total delos productos agregados usando un .reduce para la sumatoria y un acumulador para ir actualizando,iniciando el aumulador en 0 

  const calcularPrecioTotal = () => {
    return productosSeleccionados.reduce(
      (acc, producto) => acc + producto.precio * producto.cantidad,
      0
    );
  };

  return (
    <>
      <h2>CATALOGO</h2>
      <div className="lista-de-productos">

        {/* se hace un mapeo de los productos y se muestran en pantalla */}
        {catalogo.map((producto) => (
          <div key={producto.id} className="producto-en-catalogo">
            <img src={producto.imagen} alt="" />
            <p className="nombre-producto">{producto.nombre}</p>
            <p className="precio">${producto.precio}</p>
            <button  className="boton-catalogo" onClick={() => handleAgregar(producto)}>+</button>
            <button className="boton-catalogo"  onClick={() => handleQuitar(producto)}>-</button>      
          </div>
        ))}
      </div>
    </>
  );
}

export default Catalogo;
