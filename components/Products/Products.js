import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import Card from "../Card/Card";
import { setCategoryId } from "../../redux/siteDataReducer";
import { useEffect } from "react";
import axios from "axios";
import { Spinner } from "../Spinner/Spinner";

const env = process.env.NEXT_PUBLIC_TOKEN;

export default function Products({ data }) {
  const [loader, setLoader] = useState(false);
  const search = useSelector((state) => state.data.search);
  const lang = useSelector((state) => state.data.lang);
  const languages = useSelector((state) => state.data.localization);
  const categoryId = useSelector((state) => state.data.categoryId);
  const dispatch = useDispatch();
  const [heading, setHeading] = useState({});

  // --- Get Products
  useEffect(() => {
    setLoader(true);
    axios
      .get(`${env}categories/categories`)
      .then((res) => setHeading(res?.data.find((el) => el.id == categoryId)))
      .catch((err) => console.error(err))
      .finally(() => setLoader(false));
  }, [categoryId]);

  // --- Search
  function searchProduct(inputValue, data) {
    let regex = new RegExp(inputValue, "gi");
    const filterInput = data.filter((product) =>
      product[`name_${lang}`].match(regex)
    );

    return filterInput;
  }

  return (
    <section className="mt-7 md:mt-32">
      <div className="max-w-container w-full mx-auto px-5">
        <div className="">
          <p className="flex items-center text-base text-black-black_thin">
            <Link
              href={`/`}
              className="text-blue-accent"
              onClick={() => dispatch(setCategoryId(0))}
            >
              {languages[lang].naduvniy.route}
            </Link>
            <Image
              className="mx-1"
              src={"/Assets/Images/NaduvniyImg/down.svg"}
              width={24}
              height={24}
              alt="Arrow_down"
            />
            {lang === "ru"
              ? heading.category_ru
              : lang === "uz"
              ? heading.category_uz
              : heading.category_en}
          </p>
          <h2 className="font-bold text-xl md:text-3xl text-black-black_dark mt-5 md:mt-6 mb-5">
            {lang === "ru"
              ? heading.category_ru
              : lang === "uz"
              ? heading.category_uz
              : heading.category_en}
          </h2>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 lg:gap-5">
            {loader ? (
              <div className="w-16 h-20 md:w-[1185px] md:h-[200px] flex items-center justify-center">
                <Spinner />
              </div>
            ) : search.length > 0 ? (
              searchProduct(search, data).map((el) => {
                return (
                  <Card
                    key={el?.id}
                    id={el?.id}
                    data={data}
                    image={el?.image}
                    attributes={el?.attributes}
                    sub_attributes={el?.sub_attributes}
                    status_ru={el?.status_ru}
                    status_en={el?.status_en}
                    status_uz={el?.status_uz}
                    name_ru={el?.name_ru}
                    name_en={el?.name_en}
                    name_uz={el?.name_uz}
                    price={el?.price}
                    sale={el?.discount_price}
                  />
                );
              })
            ) : (
              data.map((el) => {
                return (
                  <Card
                    key={el?.id}
                    id={el?.id}
                    data={data}
                    image={el?.image}
                    attributes={el?.attributes}
                    sub_attributes={el?.sub_attributes}
                    status_ru={el?.status_ru}
                    status_en={el?.status_en}
                    status_uz={el?.status_uz}
                    name_ru={el?.name_ru}
                    name_en={el?.name_en}
                    name_uz={el?.name_uz}
                    price={el?.price}
                    sale={el?.discount_price}
                  />
                );
              })
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
