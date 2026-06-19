import "./GameCard.css";
import { FaStar, FaHeart, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import useFavorites from "../../hooks/useFavorites";
import { toast } from "react-toastify";

function GameCard({
  id,
  title,
  image,
  price,
  category
}) {

  const {
    addFavorite,
    removeFavorite,
    isFavorite
  } = useFavorites();

  const favorite = isFavorite(id);

  const toggleFavorite = (e) => {

    e.preventDefault();
    e.stopPropagation();

    const game = {
      id,
      title,
      image,
      price,
      category
    };

    if (favorite) {

      removeFavorite(id);

      toast.info(
        "Eliminado de favoritos ❤️"
      );

    } else {

      addFavorite(game);

      toast.success(
        "Agregado a favoritos ❤️"
      );

    }

  };

  return (

    <Link
      to={`/games/${id}`}
      className="game-link"
    >

      <div className="game-card">

        <button
          className="favorite-btn"
          onClick={toggleFavorite}
        >
          {
            favorite
              ? <FaHeart />
              : <FaRegHeart />
          }
        </button>

        <img
          src={image}
          alt={title}
          className="game-image"
        />

        <div className="rating">
          <FaStar />
          <span>4.9</span>
        </div>

        <div className="game-info">

          <h3>{title}</h3>

          <p>{category}</p>

          <p>${price}</p>

          <button>
            Comprar
          </button>

        </div>

      </div>

    </Link>

  );
}

GameCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired
};

export default GameCard;