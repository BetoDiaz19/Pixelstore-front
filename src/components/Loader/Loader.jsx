import { FaGamepad } from "react-icons/fa";
import "./Loader.css";

function Loader() {

  return (
    <div className="loader-container">

      <FaGamepad className="loader-icon" />

      <h1>PixelStore</h1>

      <p>Cargando...</p>

    </div>
  );
}

export default Loader;