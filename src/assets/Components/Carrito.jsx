import React, { useState, useEffect } from "react";

function Carrito({ precioTotal, productoSumado, fnMostrarCarrito, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [direccion, setDireccion] = useState("");
  const [tarjeta, setTarjeta] = useState("");

  // Codigo extraido desde la web para cerrar el Carrito usando la tecla Escape

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    // Agrega el event listener cuando el componente se monta
    window.addEventListener("keydown", handleKeyDown);

    // Limpia el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  // Manejador del Submit / form
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // condicionales para verificar que los campos se completen correctamente

    if (precioTotal == 0) {
      alert("No hay un valor para pagar! $ = 0");
    } else {
      if (!nombre || !correo || !direccion || !tarjeta) {
        alert("Todos los campos son obligatorios");
        return;
      }

      if (tarjeta.length !== 16) {
        alert("El número de tarjeta debe tener 16 dígitos");
        return;
      }

      setSubmitted(true);
      setNombre("");
      setCorreo("");
      setDireccion("");
      setTarjeta("");
      fnMostrarCarrito();
      alert("GRACIAS POR SU COMPRA! VUELVA PRONTO!");
    }
  };

  // Manejadores de los inputs

  const handleNombre = (e) => {
    setNombre(e.target.value);
  };
  const handleCorreo = (e) => {
    setCorreo(e.target.value);
  };
  const handleDireccion = (e) => {
    setDireccion(e.target.value);
  };
  const handleTarjeta = (e) => {
    let inputValue = e.target.value;
    if (inputValue.length <= 16) {
      setTarjeta(inputValue);
    }
  };
  return (
    <>
      <div className="contenedor-form-carrito">
        <div className="divh1">
          <h1 className="h1-carrito">REVISAR Y COMPLETAR</h1>
        </div>
        <form onSubmit={handleSubmit} action="">
          <div className="carrito" id="id-carrito">
            <div id="id-agregados" className="agregados">
              <p className="label-form">
                Productos agregados:
                <br />
                {Object.entries(productoSumado)
                  .filter(([producto, cantidad]) => cantidad > 0)
                  .map(([producto, cantidad]) => (
                    <span key={producto} className="span-producto-form">
                      {producto} ({cantidad}) <br />{" "}
                    </span>
                  ))}
                <br /> PRECIO TOTAL: ${precioTotal}
              </p>
            </div>
            <div className="division">
              <label className="label-form" htmlFor="input-nombre">
                Nombre
              </label>
              <input
                className="input-form"
                type="text"
                onChange={handleNombre}
                value={nombre}
                name="nombre"
                id="input-nombre"
              />
              <label className="label-form" htmlFor="input-correo">
                Correo
              </label>
              <input
                className="input-form"
                type="email"
                onChange={handleCorreo}
                value={correo}
                name="correo"
                id="input-correo"
              />
              <label className="label-form" htmlFor="input-direccion">
                Direccion
              </label>
              <input
                className="input-form"
                type="text"
                onChange={handleDireccion}
                value={direccion}
                name="direccion"
                id="input-direccion"
              />
              <label className="label-form" htmlFor="detalle-de-entrega">
                Detalles para el envío:
              </label>
              <textarea
                name="detalle de entrega"
                id="detalle-de-entrega"
                placeholder="Detalles del domicilio.."
                maxLength={200}
              ></textarea>
              <label className="label-form" htmlFor="input-tarjeta">
                Numero de tarjeta
              </label>
              <input
                className="input-form"
                title="Debe tener 16 dígitos"
                type="number"
                onChange={handleTarjeta}
                value={tarjeta}
                name="tarjeta"
                id="input-tarjeta"
              />
            </div>
          </div>
          <div>
            {" "}
            <button className="boton-submit" type="submit">
              Aceptar
            </button>
          </div>
        </form>
      </div>

      {submitted && (
        <div className="resumen-compra">
          <p>Nombre: {nombre}</p>
          <p>Correo: {correo}</p>
          <p>Direccion:{direccion}</p>
          <p>
            Tarjeta: <span className="span-ok">OK</span>
          </p>
        </div>
      )}
    </>
  );
}

export default Carrito;
