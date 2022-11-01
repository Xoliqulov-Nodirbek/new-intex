import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard/ProductCard";

const Karkasniy = () => {
  let products = useSelector((state) => state.data);
  
  return (
    <section className="mt-40">
      <div className="max-w-container w-full mx-auto px-5">
        <div className="">
          <p className="flex items-center text-base text-black-black_thin">
            <Link href={`/`} class="text-blue-accent">
              Главная
            </Link>
            <Image
              className="w-6 h-6 mx-1"
              src={"/Assets/Images/NaduvniyImg/down.svg"}
              width={20}
              height={20}
              alt="Arrow_down"
            />
            Каркасные бассейны
          </p>
          <h2 className=" font-bold text-3xl text-black-black_dark mt-6 mb-5">
            Каркасные бассейны
          </h2>
          <div className="flex flex-wrap justify-between">
            {products.map((el) => {
              return (
                <ProductCard
                  key={el.id}
                  status={el.status}
                  name={el.name}
                  price={el.price}
                  sale={el.sale_price}
                />
              );
            })}
          </div>
          <div className="w-fit mx-auto mt-8 bg-blue-btn_bg px-5 py-4 rounded-xl">
            <Link className="text-blue-base" href={``}>
              Показать еще
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Karkasniy;
