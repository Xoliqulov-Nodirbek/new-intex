import AboutUs from "../AboutUs/AboutUs";
import Hero from "../Hero/Hero";
import BuyAll from "../BuyAll/BuyAll";
import TashkentPools from "../TashkentPools/TashkentPools";
import Popular from "../Popular/Popular";
import Loading from "../Loading/Loading";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { products } from "../../redux/siteDataReducer";

function Main() {
  const productdata = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const lang = useSelector(state => state.data.lang)
  const languages = useSelector(state => state.data.localization)

  useEffect(() => {
    axios
      .get(
        "https://intex-shop-production.up.railway.app/api/products/getAll?page=0&limit=10"
      )
      // .then((data) => dispatch(products(data.data.result)));
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
    </main>
  );
}

export default Main;
