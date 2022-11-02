import React from "react";
import Image from "next/image";

function AboutUs() {
  return (
    <section className="my-10 lg:my-40">
      <div className="max-w-[1220px] mx-auto px-4">
        <h2 className="text-black text-lg sm:text-3xl font-bold mb-10">
          Почему нужно выбрать нас?
        </h2>
        <div className="flex-col flex items-center flex-wrap lg:flex-row lg:justify-between">
          <div className="mb-6 sm:mb-0">
            <Image
              className="w-full object-cover sm:w-96 h-56 mb-4"
              src={"/Assets/Images/HeaderAndHeroImg/about-man.png"}
              width={380}
              height={220}
              alt="About_Man_Img"
            />
            <strong className="text-base sm:text-lg font-bold mb-2.5">
              Опыт
            </strong>
            <p className="text-sm  sm:text-base text-black-black_thin">
              Профессионализм наших сотрудников
            </p>
          </div>
          <div className="ml-1 mb-6 sm:mb-0">
            <Image
              className="w-full object-cover sm:w-96 h-56 mb-4"
              src={"/Assets/Images/HeaderAndHeroImg/about-car.png"}
              width={380}
              height={220}
              alt="About Man Img"
            />
            <strong className="text-base sm:text-lg font-bold mb-2.5">
              Доставка
            </strong>
            <p className="text-sm sm:text-base text-black-black_thin">
              Бесплатная доставка по городу
            </p>
          </div>
          <div className="ml-1 mb-6 sm:mb-0">
            <Image
              className="w-full object-cover sm:w-96 h-56 mb-4"
              src={"/Assets/Images/HeaderAndHeroImg/about-pool.png"}
              width={380}
              height={220}
              alt="About Man Img"
            />
            <strong className="text-base sm:text-lg font-bold mb-2.5">
              Качество
            </strong>
            <p className="text-sm sm:text-base text-black-black_thin">
              Прочные, качественные бассейны
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
