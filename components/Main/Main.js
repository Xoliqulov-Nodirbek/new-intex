import AboutUs from "../AboutUs/AboutUs";
import Hero from "../Hero/Hero";
import NewProduct from "../NewProduct/NewProduct";
import BuyAll from "../BuyAll/BuyAll";
import TashkentPools from "../TashkentPools/TashkentPools";
import Popular from "../Popular/Popular";

function Main() {
  return (
    <main>
      <Hero />
      <Popular />
      <TashkentPools />
      <NewProduct />
      <BuyAll />
      <AboutUs />
    </main>
  );
}

export default Main;
