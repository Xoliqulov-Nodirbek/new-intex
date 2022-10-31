
import ArrowBtn from "../arrowBtn/arrowBtn";
import ProductCard from "../ProductCard/ProductCard";
import { useSelector } from "react-redux";
import { useState } from "react";

function Popular() {
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
      setLimit(5)
    }
  };

  return (
    <section className="popular">
      <div className="max-w-container mx-auto px-5 gap-x-10">
        <div className="popular__top flex items-center justify-between mb-10">
          <h2 className="font-inter font-bold text-32 leading-36">
            Популярные товары
          </h2>
          <div className="popular__top-left flex">
            <ArrowBtn handleLeftBtnClick={handleLeftBtnClick}></ArrowBtn>
            <ArrowBtn right="right" handleClick={handleClick}></ArrowBtn>
          </div>
        </div>
      </div>
      <ul className="products__list flex ml-[11.6%] gap-x-5">
        {makePagination(startNum, limit).length
          ? makePagination().map((el) => {
              return (
                <ProductCard
                  key={el.id}
                  status={el.status}
                  name={el.name}
                  price={el.price}
                  sale={el.sale_price}
                ></ProductCard>
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
                ></ProductCard>
              );
            })}
      </ul>
    </section>
  );
}

export default Popular;

import React from 'react'

function Popular() {
  return (
    <div>
        {/* Nozimjon yozmoqda */}
    </div>
  )
}

export default Popular

