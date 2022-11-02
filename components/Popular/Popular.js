import ArrowBtn from "../ComponetntModuls/arrowBtn/arrowBtn";
import ProductCard from "../ProductCard/ProductCard";
import { useSelector } from "react-redux";
import { useState } from "react";

function Popular({title}) {
  let products = useSelector((state) => state.data);
  let lastNum = products.length + 1;
  const [startNum, setStartNum] = useState(0);

  let [limit, setLimit] = useState(5);

  const makePagination = (start, limit) => {
    return (products = products.slice(start, limit));
  };

  const handleClick = (evt) => {
    if (limit < lastNum) {
      setStartNum(startNum + 1);
      setLimit(limit + 1);

      return;
    }
    setStartNum(startNum + 0);
    setLimit(limit + 0);
  };

  const handleLeftBtnClick = (evt) => {
    setStartNum(startNum - 1);
    setLimit(limit - 1);

    if (startNum == 0 && limit == 5) {
      setStartNum(0);
      setLimit(5);
    }
  };

  return (
    <section className="popular">
      <div className="max-w-container mx-auto px-4 gap-x-10">
        <div className="popular__top flex items-center justify-between mb-popularBottom  md:mb-10">
          <h2 className="font-bold text-lg md:text-32 leading-36">
            {title}
          </h2>
          <div className="popular__top-left flex">
            <ArrowBtn handleLeftBtnClick={handleLeftBtnClick}></ArrowBtn>
            <ArrowBtn right="right" handleClick={handleClick}></ArrowBtn>
          </div>
        </div>
      </div>
      <div className="products__list flex max-w-container mx-auto px-4 gap-x-5">
        {makePagination(startNum, limit).length
          ? makePagination().map((el) => {
              return (
                <ProductCard
                  key={el.id}
                  status={el.status}
                  name={el.name}
                  price={el.price}
                  sale={el.sale_price}
                />
              );
            })
          : products.map((el) => {
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
    </section>
  );
}
export default Popular;
