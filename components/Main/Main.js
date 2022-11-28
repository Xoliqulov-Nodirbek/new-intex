import AboutUs from "../AboutUs/AboutUs";
import Hero from "../Hero/Hero";
import BuyAll from "../BuyAll/BuyAll";
import TashkentPools from "../TashkentPools/TashkentPools";
import Popular from "../Popular/Popular";
import { useSelector } from "react-redux";
import Consultation from "../Consultation/Consultation";
import Carousel from "../Carousel/Carousel";
import { useEffect, useState } from "react";

function Main() {
  const lang = useSelector((state) => state.data.lang);
  const languages = useSelector((state) => state.data.localization);

  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    let details = navigator.userAgent;
    let regexp = /android|iphone|kindle|ipad/i;
    let isMobileDevice = regexp.test(details);
    if (isMobileDevice) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, []);

  return (
    <main>
      <Hero />

      <Popular title={languages[lang].popular.heading} />
      <TashkentPools />
      <Popular title={languages[lang].newProduct.heading} />
      <BuyAll />
      <AboutUs />
      <Popular title={"Товары со скидкой"} />
      <Consultation />
      <Carousel mobile={mobile} />
    </main>
  );
}

export default Main;
