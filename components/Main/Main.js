import AboutUs from "../AboutUs/AboutUs";
import Hero from "../Hero/Hero";
import BuyAll from "../BuyAll/BuyAll";
import TashkentPools from "../TashkentPools/TashkentPools";
import Popular from "../Popular/Popular";
import Noviy from "../Noviy/Noviy";
import Skidka from "../Skidka/Skidka";
import Consultation from "../Consultation/Consultation";

function Main() {
  return (
    <main>
      <Hero />
      <Popular />
      <TashkentPools />
      <Noviy />
      <BuyAll />
      <AboutUs />
      <Skidka />
      <Consultation />
    </main>
  );
}

export default Main;
