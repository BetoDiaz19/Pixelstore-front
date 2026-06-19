import {
  FaGamepad,
  FaShieldAlt,
  FaBolt
} from "react-icons/fa";

import "./About.css";

function About() {

  return (
    <div className="page-animation">
    <div className="about-page">

      <section className="about-hero">

        <h1>PixelStore</h1>

        <p>
          Tu universo gamer en un solo lugar.
        </p>

      </section>

      <section className="about-features">

        <div className="feature-card">
          <FaGamepad />
          <h3>+500 Juegos</h3>
          <p>
            Catálogo actualizado constantemente.
          </p>
        </div>

        <div className="feature-card">
          <FaShieldAlt />
          <h3>Compras Seguras</h3>
          <p>
            Protección y seguridad para cada compra.
          </p>
        </div>

        <div className="feature-card">
          <FaBolt />
          <h3>Entrega Inmediata</h3>
          <p>
            Obtén tus juegos al instante.
          </p>
        </div>

      </section>

      <section className="about-content">

        <div className="about-block">

          <h2>Nuestra Misión</h2>

          <p>
            Llevar los mejores videojuegos a todos los jugadores mediante una plataforma moderna, rápida y segura.
          </p>

        </div>

        <div className="about-block">

          <h2>Nuestra Visión</h2>

          <p>
            Convertirnos en la tienda digital favorita de la comunidad gamer ofreciendo innovación y calidad.
          </p>

        </div>

      </section>

    </div>

    </div>
  );
}

export default About;