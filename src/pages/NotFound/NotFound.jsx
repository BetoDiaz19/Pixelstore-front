import { Link } from "react-router-dom";

import "./NotFound.css";

function NotFound() {

  return (

    <div className="notfound">

      <h1>404</h1>

      <h2>🎮 Game Over</h2>

      <p>
        La página que buscas no existe.
      </p>

      <Link
        to="/"
        className="home-btn"
      >
        Volver al Inicio
      </Link>

    </div>

  );
}

export default NotFound;