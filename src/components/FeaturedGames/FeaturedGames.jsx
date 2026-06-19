import GameCard from "../GameCard/GameCard";

import cyberpunk from "../../assets/images/games/cyberpunk.jpg";
import gta6 from "../../assets/images/games/gta6.jpg";
import eldenring from "../../assets/images/games/eldenring.avif";
import spiderman2 from "../../assets/images/games/spiderman2.avif";

import "./FeaturedGames.css";

function FeaturedGames() {
  const games = [
    {
      id: 7,
      title: "Cyberpunk 2077",
      image: cyberpunk,
      price: 999,
      category: "RPG"
    },
    {
      id: 8,
      title: "GTA VI",
      image: gta6,
      price: 1499,
      category: "Acción"
    },
    {
      id: 9,
      title: "Elden Ring",
      image: eldenring,
      price: 1199,
      category: "RPG"
    },
    {
      id: 10,
      title: "Spider-Man 2",
      image: spiderman2,
      price: 1299,
      category: "Acción"
    }
  ];
  
  return (
    <section className="featured">

      <div className="section-title">
      <h2>Juegos Destacados</h2>
      </div>

      <div className="games-grid">

        {games.map((game) => (
          <GameCard
            key={game.id}
            id={game.id}
            title={game.title}
            image={game.image}
            price={game.price}
            category={game.category}
          />
        ))}

      </div>

    </section>
  );
}

export default FeaturedGames;