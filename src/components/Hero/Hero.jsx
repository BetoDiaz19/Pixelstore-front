import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Hero.css";
import heroImage from "../../assets/images/hero/hero-banner.jpg";

function Hero() {

  const navigate = useNavigate();

  return (

    <section
      className="hero"
      style={{
        backgroundImage: `url(${heroImage})`
      }}
    >

      <div className="hero-overlay"></div>

      <div className="hero-content">

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          PLAY THE FUTURE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Descubre los videojuegos más populares
          del momento en PixelStore.
        </motion.p>

        <motion.button
          className="hero-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/games")}
        >
          Explorar Catálogo
        </motion.button>

      </div>

    </section>

  );

}

export default Hero;