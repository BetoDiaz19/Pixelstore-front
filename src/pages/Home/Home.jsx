import Hero from "../../components/Hero/Hero";
import FeaturedGames from "../../components/FeaturedGames/FeaturedGames";
import Categories from "../../components/Categories/Categories";
import SpecialOffers from "../../components/SpecialOffers/SpecialOffers";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <div className="page-animation">
    <>
      <Hero />
      <FeaturedGames />
      <Categories />
      <SpecialOffers />
      <Footer />
    </>
     </div>
  );
}

export default Home;