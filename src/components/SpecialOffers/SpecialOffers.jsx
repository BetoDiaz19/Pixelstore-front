import cyberpunk from "../../assets/images/games/cyberpunk.jpg";
import gta6 from "../../assets/images/games/gta6.jpg";
import spiderman2 from "../../assets/images/games/spiderman2.avif";

import "./SpecialOffers.css";

function SpecialOffers() {

  const offers = [
    {
      title: "Cyberpunk 2077",
      image: cyberpunk,
      discount: "30%"
    },
    {
      title: "GTA VI",
      image: gta6,
      discount: "20%"
    },
    {
      title: "Spider-Man 2",
      image: spiderman2,
      discount: "15%"
    }
  ];

  return (
    <section className="offers">

      <div className="section-title">
      <h2> Ofertas Especiales</h2>
      </div>

      <div className="offers-grid">

        {offers.map((offer, index) => (
          <div
            key={index}
            className="offer-card"
          >
            <img
              src={offer.image}
              alt={offer.title}
            />

            <div className="offer-info">
              <h3>{offer.title}</h3>

              <span>
                -{offer.discount}
              </span>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default SpecialOffers;