import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { useSelector } from "react-redux";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import Image from "next/image";
import Button from "../ComponetntModuls/button/Button";
import Baseen from "../../public/Assets/Images/img.png";

const Carousel = ({ mobile, status, name, price, sale, onClick }) => {
  let products = useSelector((state) => state.data.initialState);

  return (
    <section className="bg-white mt-5">
      <div className="max-w-[1190px] mx-auto border py-5 xl:px-0 px-4">
        <h2 className="xl:text-[40px] text-[30px] text-black font-bold text-center">
          About
        </h2>
        <Swiper
          slidesPerView={mobile ? 1 : 4}
          spaceBetween={mobile ? 10 : 30}
          slidesPerGroup={mobile ? 1 : 1}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={false}
          navigation={false}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {products.map((item) => {
            return (
              <SwiperSlide key={item?.id}>
                <div className="card rounded-xl w-resCardWidth md:w-cardWidth shadow-card_shadow relative">
                  <span
                    className={`${
                      item.status === "Новинки"
                        ? "bg-green-new"
                        : item.status === "-17% скидка"
                        ? "bg-red-sale"
                        : item.status === "Pекомендуем"
                        ? "bg-blue-recommend"
                        : item.status === "Популярное"
                        ? "bg-blue-recommend"
                        : "bg-red-xit"
                    } text-sm block z-20  w-111 text-center py-5.5 rounded-r-lg text-white absolute top-4 left-0`}
                  >
                    {item.status}
                  </span>
                  <Image
                    onDragStart={(e) => e.preventDefault()}
                    className="mt-2 mb-1 md:mb-4"
                    src={Baseen}
                    alt="baseen_product_image"
                    width={280}
                    height={220}
                  />
                  <div className="p-2 md:p-4 border-t-gray-borderColor border-t-1">
                    <h3 className="text-sm md:text-lg font-bold leading-5 mb-2 whitespace-nowrap overflow-hidden text-ellipsis">
                      {item.name}
                    </h3>
                    <span className="text-xs md:text-base m-0 mb-2 block leading-22 text-black-black_thin">
                      220х150х60см, 1662л
                    </span>
                    <span className="text-xs text-gray-text_color md:text-sm block line-through">
                      {item.sale}
                    </span>
                    <span className="font-bold text-sm md:text-lg block mb-2.5 text-blue-accent">
                      {item.price}
                    </span>
                    <Button onClick={onClick}>Заказать</Button>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Carousel;
