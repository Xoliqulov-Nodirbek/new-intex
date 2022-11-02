import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import Card from "../components/Card/Card";

function Chistki_bassen() {
  let products = useSelector((state) => state.data);

  return (
    <section className="mt-20 md:mt-32">
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
            Все чистки бассейна
          </p>
          <h2 className=" font-bold text-3xl text-black-black_dark mt-6 mb-5">
            Все чистки бассейна
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
          <div className="w-fit mx-auto mt-8 md:mt-5 mb-12 bg-blue-btn_bg px-10 py-4 rounded-xl">
            <Link className="text-blue-base" href={``}>
              Показать еще
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Chistki_bassen;
