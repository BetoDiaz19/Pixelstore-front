import {
  FaInstagram,
  FaDiscord,
  FaGithub,
  FaFacebook
} from "react-icons/fa";

import "./Footer.css";

function Footer() {

  return (
    <footer className="footer">

      <div className="footer-content">

        <h2>PixelStore</h2>

        <p>
          Tu universo gamer en un solo lugar.
        </p>

        <div className="footer-icons">

          <a href="#">
            <FaInstagram />
          </a>

          <a href="#">
            <FaFacebook />
          </a>

          <a href="#">
            <FaDiscord />
          </a>

          <a href="#">
            <FaGithub />
          </a>

        </div>

        <div className="footer-divider"></div>

        <span>
          © 2026 PixelStore - Todos los derechos reservados
        </span>

      </div>

    </footer>
  );
}

export default Footer;