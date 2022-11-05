import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function TashkentPools() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <section className="mt-8 mb-10 md:my-40 px-0 md:px-5">
      <div className="max-w-[1180px] w-full bg-gray-bg_main mx-auto px-4 md:rounded-sectionRadius">
        <div className="md:px-8 pt-10">
          <h2 className="font-bold text-lg lg:text-3xl text-black-black_dark">
            Бассейны от INTEX в Ташкенте
          </h2>
          <p className="font-normal text-sm lg:text-base leading-5 text-black-black_thin mt-4">
            Бассейны от intex отличаются обширным перечнем преимуществ, из
            которых можно выделить самые важные:
          </p>
          {/* --- Desctop --- */}
          <div className="hidden sm:block">
            <div className="lg:flex lg:justify-between lg:items-center mt-4 lg:mt-16 lg:px-28 space-y-3 lg:space-y-0">
              <div className="flex items-center bg-white py-2 px-3 rounded-sectionRadius w-fit">
                <Image
                  className="mr-2 w-6 h-6"
                  src={"/Assets/Images/TashkentPoolsImg/check.svg"}
                  width={24}
                  height={24}
                  alt="Check-image"
                />
                <p className="text-sm lg:text-base">Красивые и ярки цвета</p>
              </div>
              <div className="flex items-center bg-white py-2 px-3 rounded-sectionRadius w-fit lg:-translate-y-9">
                <Image
                  className="mr-2 w-6 h-6"
                  src={"/Assets/Images/TashkentPoolsImg/check.svg"}
                  width={24}
                  height={24}
                  alt="Check-image"
                />
                <p className="text-sm lg:text-base">Прочность</p>
              </div>
              <div className="flex items-center bg-white py-2 px-3 rounded-sectionRadius w-fit">
                <Image
                  className="mr-2 w-6 h-6"
                  src={"/Assets/Images/TashkentPoolsImg/check.svg"}
                  width={24}
                  height={24}
                  alt="Check-image"
                />
                <p className="text-sm lg:text-base">Простота установки</p>
              </div>
            </div>
            <div className="lg:flex justify-between items-center mt-3 lg:mt-7 lg:px-8">
              <div className="flex items-center bg-white py-2 px-3 mb-3 lg:mb-8 rounded-sectionRadius w-fit">
                <Image
                  className="mr-2 w-6 h-6"
                  src={"/Assets/Images/TashkentPoolsImg/check.svg"}
                  width={24}
                  height={24}
                  alt="Check-image"
                />
                <p className="text-sm lg:text-base">Высокое качество</p>
              </div>
              <div className="hidden lg:block">
                <Image
                  className="w-tashkentPoolsImg"
                  src={"/Assets/Images/TashkentPoolsImg/PoolBass.png"}
                  width={390}
                  height={230}
                  alt="Check-image"
                />
              </div>
              <div className="flex items-center bg-white py-2 px-3 rounded-sectionRadius w-fit">
                <Image
                  className="mr-2 w-6 h-6"
                  src={"/Assets/Images/TashkentPoolsImg/check.svg"}
                  width={20}
                  height={20}
                  alt="Check-image"
                />
                <p className="text-sm lg:text-base">Стильный дизайн</p>
              </div>
            </div>
          </div>
          {/* --- Mobile --- */}
          <div className="block sm:hidden">
            <div className="lg:flex lg:justify-between lg:items-center mt-4 lg:mt-16 lg:px-28 space-y-3 lg:space-y-0">
              <div
                data-aos="fade-right"
                data-aos-offset="100"
                data-aos-easing="ease-in-sine"
                className="flex items-center bg-white py-2 px-3 rounded-sectionRadius w-fit"
              >
                <Image
                  className="mr-2 w-6 h-6"
                  src={"/Assets/Images/TashkentPoolsImg/check.svg"}
                  width={24}
                  height={24}
                  alt="Check-image"
                />
                <p className="text-sm lg:text-base">Красивые и ярки цвета</p>
              </div>
              <div
                className="flex items-center bg-white py-2 px-3 rounded-sectionRadius w-fit lg:-translate-y-9"
                data-aos="fade-right"
                data-aos-offset="100"
                data-aos-delay="300"
                data-aos-easing="ease-in-sine"
              >
                <Image
                  className="mr-2 w-6 h-6"
                  src={"/Assets/Images/TashkentPoolsImg/check.svg"}
                  width={24}
                  height={24}
                  alt="Check-image"
                />
                <p className="text-sm lg:text-base">Прочность</p>
              </div>
              <div
                data-aos="fade-right"
                data-aos-offset="100"
                data-aos-delay="600"
                data-aos-easing="ease-in-sine"
                className="flex items-center bg-white py-2 px-3 rounded-sectionRadius w-fit"
              >
                <Image
                  className="mr-2 w-6 h-6"
                  src={"/Assets/Images/TashkentPoolsImg/check.svg"}
                  width={24}
                  height={24}
                  alt="Check-image"
                />
                <p className="text-sm lg:text-base">Простота установки</p>
              </div>
            </div>
            <div className="lg:flex justify-between items-center mt-3 lg:mt-7 lg:px-8">
              <div
                data-aos="fade-right"
                data-aos-offset="100"
                data-aos-delay="900"
                data-aos-easing="ease-in-sine"
                className="flex items-center bg-white py-2 px-3 mb-3 lg:mb-8 rounded-sectionRadius w-fit"
              >
                <Image
                  className="mr-2 w-6 h-6"
                  src={"/Assets/Images/TashkentPoolsImg/check.svg"}
                  width={24}
                  height={24}
                  alt="Check-image"
                />
                <p className="text-sm lg:text-base">Высокое качество</p>
              </div>
              <div className="hidden lg:block">
                <Image
                  className="w-tashkentPoolsImg"
                  src={"/Assets/Images/TashkentPoolsImg/PoolBass.png"}
                  width={390}
                  height={230}
                  alt="Check-image"
                />
              </div>
              <div
                data-aos="fade-right"
                data-aos-offset="100"
                data-aos-delay="1200"
                data-aos-easing="ease-in-sine"
                className="flex items-center bg-white py-2 px-3 rounded-sectionRadius w-fit"
              >
                <Image
                  className="mr-2 w-6 h-6"
                  src={"/Assets/Images/TashkentPoolsImg/check.svg"}
                  width={20}
                  height={20}
                  alt="Check-image"
                />
                <p className="text-sm lg:text-base">Стильный дизайн</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center lg:hidden ">
            <Image
              className="w-tashkentPoolsImg mt-7"
              src={"/Assets/Images/TashkentPoolsImg/PoolBassMobile.png"}
              width={390}
              height={230}
              alt="Check-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TashkentPools;
