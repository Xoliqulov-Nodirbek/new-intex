import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import Button from "../components/button/Button";
import ProductCard from "../components/ProductCard/ProductCard";

const Naduvniy = () => {
  let products = useSelector((state) => state.data);
  console.log(products);
  return (
    <section className="mt-40">
      <div className="max-w-container w-full mx-auto px-5">
        <div className="">
          <p className="flex items-center text-base text-black-black_thin">
            <Link href={`/`} class="text-blue-textColor">
              Главная
            </Link>
            <Image
              className="w-6 h-6 mx-1"
              src={"/Assets/Images/NaduvniyImg/down.svg"}
              width={20}
              height={20}
              alt="Arrow_down"
            />
            Надувные бассейны
          </p>
          <h2 className=" font-bold text-3xl text-black-black_dark mt-6 mb-5">
            Надувные бассейны
          </h2>
          <ul className="flex flex-wrap justify-between">
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
          </ul>
          <div className="flex justify-center mt-8">
            <Button className="bg-[#E0E7FF] text-[#4338CA] py-4 px-10">
              Показать еще
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Naduvniy;
