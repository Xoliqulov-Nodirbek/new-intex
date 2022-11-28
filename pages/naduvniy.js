import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Card from "../components/Card/Card";

const env = process.env.NEXT_PUBLIC_TOKEN;

const Naduvniy = () => {
  const lang = useSelector((state) => state.data.lang);
  const languages = useSelector((state) => state.data.localization);

  const [naduvnoy, setNaduvnoy] = useState([]);
  const [product, setProduct] = useState([]);
  const [count, setCount] = useState(0);
  // const [limit, setLimit] = useState(8);
  const increment = () => {
    setCount(count + 1);
  };
  console.log(naduvnoy);

  useEffect(() => {
    axios
      .get(`${env}products/getByCategory?category_id=1&page=${count}&limit=4`)
      .then((res) => {
        setNaduvnoy(res?.data?.result);
        setProduct(res?.data?.result);
      });
  }, [count]);

  return (
    <section className="mt-7 md:mt-32">
      <div className="max-w-container w-full mx-auto px-5">
        <div className="">
          <p className="flex items-center text-base text-black-black_thin">
            <Link href={`/`} className="text-blue-accent">
              {languages[lang].naduvniy.route}
            </Link>
            <Image
              className="mx-1"
              src={"/Assets/Images/NaduvniyImg/down.svg"}
              width={24}
              height={24}
              alt="Arrow_down"
            />
            {languages[lang].naduvniy.name}
          </p>
          <h2 className="font-bold text-xl md:text-3xl text-black-black_dark mt-5 md:mt-6 mb-5">
            {languages[lang].naduvniy.name}
          </h2>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 lg:gap-5">
            {product.map((el) => {
              return (
                <Card
                  key={el.id}
                  status={el.status_ru}
                  name={el.name_ru}
                  price={el.price}
                  sale={el.discount_price}
                />
              );
            })}
            {naduvnoy.map((el) => {
              return (
                <Card
                  key={el.id}
                  status={el.status_ru}
                  name={el.name_ru}
                  price={el.price}
                  sale={el.discount_price}
                />
              );
            })}
          </div>
          <div className="w-fit mx-auto mt-8 md:mt-5 mb-20 md:mb-3 bg-blue-btn_bg px-34 md:px-10 py-11 md:py-4 rounded-xl">
            <button
              onClick={increment}
              className="font-medium text-lg text-blue-base"
            >
              {languages[lang].show}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Naduvniy;
