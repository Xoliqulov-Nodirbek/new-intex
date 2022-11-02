import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import Card from "../components/Card/Card";

const Naduvniy = () => {
  let products = useSelector((state) => state.data);

  return (
    <section className="mt-6 md:mt-32">
      <div className="max-w-container w-full mx-auto px-5">
        <div className="">
          <p className="flex items-center text-base text-black-black_thin">
            <Link href={`/`} className="text-blue-accent">
              Главная
            </Link>
            <Image
              className="mx-1"
              src={"/Assets/Images/NaduvniyImg/down.svg"}
              width={24}
              height={24}
              alt="Arrow_down"
            />
            Аксессуары для бассейна
          </p>
          <h2 className=" font-bold text-3xl text-black-black_dark mt-6 mb-5">
            Аксессуары для бассейна
          </h2>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 lg:gap-5">
            {products.map((el) => {
              return (
                <Card
                  key={el.id}
                  status={el.status}
                  name={el.name}
                  price={el.price}
                  sale={el.sale_price}
                />
              );
            })}
          </div>
          <div className="w-fit mx-auto mt-8 md:mt-5 mb-20 md:mb-3 bg-blue-btn_bg px-34 md:px-10 py-11 md:py-4 rounded-xl">
            <Link className="font-medium text-base text-blue-base" href={``}>
              Показать еще
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Naduvniy;
