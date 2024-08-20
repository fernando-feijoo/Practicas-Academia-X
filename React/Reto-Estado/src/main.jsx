import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Tarjeta from "./components/Tarjeta.jsx";
import "./css/global.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="contenedor-tarjetas">
      <Tarjeta
        imgSrc="./src/assets/mando.webp"
        imgAlt="Imagen de producto."
        titulo="Mando DualSense - PS5"
        descripcion="El mando Dualesense está optimizado para el gaming colaborativo o competitivo online, gracias a su micrófono integrado y su capacidad para utilizar auriculares por cable o bluetooht, incluyendo un botón específico de silencio para desactivar el micro fácilmente en cualquier momento."
      />
      <Tarjeta
        imgSrc="./src/assets/mando-scuff.webp"
        imgAlt="Imagen de producto."
        titulo="Scuf Reflex Pro - PS5"
        descripcion="Probamos a fondo el mando Scuf Reflex compatible con PS5 y PC, un modelo que ahora admite unas elevadas opciones de personalización en su diseño, aunque la característica estrella son las palancas traseras que añaden cuatro botones extra, siendo una de las mejores alternativas para quienes buscan un mando Pro de PS5."
      />
      <Tarjeta
        imgSrc="./src/assets/xbox-scuff.jpg"
        imgAlt="Imagen de producto."
        titulo="Scuf Prestige - Xbox One"
        descripcion="El mundo de los mandos competitivos no se detiene. La marca Scuf, conocida por haber modificado mandos como el DualShock para poder ofrecer nuevas experiencias en consolas como Playstation 4, cuenta con una línea premium basada en Prestige, Vantage y e Infinity. En este artículo nos vamos a centrar en el primero, diseñado para Xbox One y que se convierte en una propuesta interesante para los que quieran un mando centrado en experiencias competitivas como puede ser el Elite."
      />
    </div>
  </StrictMode>
);
