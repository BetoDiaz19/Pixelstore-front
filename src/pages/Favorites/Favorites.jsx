import useFavorites from "../../hooks/useFavorites";
import GameCard from "../../components/GameCard/GameCard";

function Favorites() {

  const { favorites } = useFavorites();

  return (
    <div className="favorites-page">

      <h1>❤️ Mis Favoritos</h1>

      {
        favorites.length === 0
          ? (
            <p>
              No tienes favoritos todavía.
            </p>
          )
          : (
            <div className="games-grid">

              {
                favorites.map(game => (

                  <GameCard
                    key={game.id}
                    id={game.id}
                    title={game.title}
                    image={game.image}
                    price={game.price}
                    category={game.category}
                  />

                ))
              }

            </div>
          )
      }

    </div>
  );
}

export default Favorites;