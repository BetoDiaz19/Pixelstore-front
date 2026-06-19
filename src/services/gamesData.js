import cyberpunk from "../assets/images/games/cyberpunk.jpg";
import gta6 from "../assets/images/games/gta6.jpg";
import eldenring from "../assets/images/games/eldenring.avif";
import spiderman2 from "../assets/images/games/spiderman2.avif";
import forza from "../assets/images/games/forza.avif";
import wukong from "../assets/images/games/wukong.webp";

const gamesData = [
  {
    id: 1,
    title: "Cyberpunk 2077",
    category: "RPG",
    price: 999,
    image: cyberpunk,
    description: "Sumérgete en el submundo de Night City, una megápolis obsesionada con el poder, el glamur y las modificaciones corporales en este RPG de mundo abierto."
  },
  {
    id: 2,
    title: "GTA VI",
    category: "Acción",
    price: 1499,
    image: gta6,
    description: "Explora Vice City en una nueva generación de mundo abierto con gráficos impresionantes y una historia llena de acción."
  },
  {
    id: 3,
    title: "Elden Ring",
    category: "RPG",
    price: 1199,
    image: eldenring,
    description: "Álzate, Sinluz, y déjate guiar por la gracia para esgrimir el poder del Círculo de Elden y convertirte en el señor de las Tierras Intermedias."
  },
  {
    id: 4,
    title: "Spider-Man 2",
    category: "Acción",
    price: 1299,
    image: spiderman2,
    description: "Balancéate, salta y utiliza las nuevas alas de telaraña para recorrer la Nueva York de Marvel como Peter Parker y Miles Morales frente a villanos icónicos."
  },
  {
    id: 5,
    title: "Forza Horizon",
    category: "Carreras",
    price: 899,
    image: forza,
    description: "Lidera expediciones asombrosas a través de los vibrantes paisajes en constante evolución del mundo abierto de México a bordo de los mejores autos del mundo."
  },
  {
    id: 6,
    title: "Black Myth Wukong",
    category: "Acción",
    price: 1399,
    image: wukong,
    description: "Explora un reino de fantasía oscura basado en la mitología china, controlando al Destinado en un viaje repleto de desafíos y enemigos formidables."
  }
];

export default gamesData;