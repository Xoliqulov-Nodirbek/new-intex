import axios from "axios";
import React, { useEffect, useState } from "react";
import { Modal } from "../ComponetntModuls/Modal/Modal";
import Button from "../ComponetntModuls/button/Button";
import Baseen from "../../public/Assets/Images/img.png";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-hot-toast";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import Image from "next/image";

const env = process.env.NEXT_PUBLIC_TOKEN;

const Sale_nov = ({ mobile }) => {
  const [tovar, setTovar] = useState([]);
  const [find, setFind] = useState({});
  const [loader, setLoader] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [numberProduct, setNumberProduct] = useState(1);
  const [modalContent, setModalContent] = useState(false);

  const lang = useSelector((state) => state.data.lang);

  useEffect(() => {
    axios
      .get(`${env}products/getByStatus?status_id=2&page=0&limit=20`)
      .then((res) => {
        setTovar(res?.data?.result);
        setLoader(false);
      });
  }, []);

  let token = "5463520222:AAFQgcQ7hyUTAYV3ad0YaGTQ_lGIbRZyyxg";
  let chatId = "636476536";

  const initialValues = {
    name: "",
    number: "",
    address: "",
  };

  const onSubmit = (values, { resetForm }) => {
    let fullText = `\u{2705} Name: ${values.name}%0A\u{2705} Phone Number: \u{FF0B}998${values.number} %0A\u{2705} Address: ${values.address}`;

    // --- Sent Message for Telegram
    axios
      .post(
        `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${fullText}`
      )
      .then(function () {
        console.log("Submitted");
      })
      .catch(function () {
        toast.error("Internal error");
      });

    // --- Create Order
    axios
      .post(`${env}orders/create`, {
        order: {
          name: values.name,
          phone: String(`+998${values.number}`),
          address: values.address,
          location: {
            x: 49.9,
            y: 62.2,
          },
          order_number: "0",
          status_id: 3,
        },
        bascet: [
          {
            count: numberProduct,
            product_id: find.id,
          },
        ],
      })
      .then((res) => {
        if (res?.status === 201) {
          setModalContent(true);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setNumberProduct(1);
        setTimeout(() => {
          setShowModal(false);
          setModalContent(false);
        }, 4000);
      });

    values.name = "";
    resetForm({ values: "" });
  };

  const phoneRegExp = /^[0-9]{9}$/;
  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Username is required, at least 3 characters")
      .min(3, "Minimal 3 characters")
      .max(20, "Maximum 20 characters"),
    number: Yup.string("Must be only number")
      .matches(phoneRegExp, {
        message: "Phone number is not valid.",
        excludeEmptyString: true,
      })
      .required("Required phone number"),
    address: Yup.string()
      .required("Address is required")
      .min(3, "Minimal 3 characters"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const spinner = (
    <svg
      className="inline mr-2 w-h-16 h-16 text-gray-200 animate-spin dark:text-gray-300 fill-blue-600"
      viewBox="0 0 100 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
        fill="currentColor"
      />
      <path
        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
        fill="currentFill"
      />
    </svg>
  );

  const ProductOrder = (id) => {
    setShowModal(true);
    const fintProduct = tovar.find((e) => e.id === id);
    setFind(fintProduct);
  };

  return (
    <section
      id="skidka"
      className="max-w-[1210px] mx-auto bg-white pl-[16px] md:pl-0"
    >
      <h2 className="font-bold text-xl md:text-32 leading-36 pl-0 md:pl-3">
        {" "}
        {lang === "ru"
          ? "Товары со скидкой"
          : lang === "en"
          ? "Items on sale"
          : "Chegirma tovarlar"}
      </h2>
      <div className="mt-7">
        <Swiper
          slidesPerView={mobile ? 2 : 4}
          spaceBetween={mobile ? 150 : 30}
          slidesPerGroup={mobile ? 1 : 1}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={false}
          navigation={false}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          style={{
            paddingBottom: "30px",
            paddingLeft: "15px",
            paddingRight: "20px",
          }}
        >
          {loader ? (
            <div className="w-full h-[80px] md:h-[200px] flex items-center justify-center">
              {spinner}
            </div>
          ) : (
            tovar.map((item) => {
              return (
                <SwiperSlide key={item?.id}>
                  <div className="card rounded-xl w-resCardWidth md:w-cardWidth shadow-card_shadow relative border border-lineColor mx-auto">
                    <span
                      className={`${"bg-red-sale"} text-sm block z-20  w-111 text-center py-5.5 rounded-r-lg text-white absolute top-4 left-0`}
                    >
                      {item.status_ru === "Обичный"
                        ? ""
                        : lang === "ru"
                        ? item.status_ru
                        : lang === "en"
                        ? item.status_en
                        : item.status_uz}
                    </span>
                    <Image
                      onDragStart={(e) => e.preventDefault()}
                      className="mt-2 mb-1 md:mb-4"
                      src={Baseen}
                      alt="baseen_product_image"
                      width={280}
                      height={220}
                    />
                    <div className="p-2 md:p-4 border-t-lineColor border-t-1">
                      <h3 className="text-sm md:text-lg font-bold leading-5 mb-2 whitespace-nowrap overflow-hidden text-ellipsis">
                        {lang === "ru"
                          ? item.name_ru
                          : lang === "en"
                          ? item.name_en
                          : item.name_uz}
                      </h3>
                      <span className="text-xs md:text-base m-0 mb-2 block leading-22 text-black-black_thin">
                        {lang === "ru"
                          ? "220х150х60см, 1662л"
                          : lang === "en"
                          ? "220х150х60 sm, 1662l"
                          : "220х150х60sm, 1662l"}
                      </span>
                      <span className="text-xs text-gray-text_color md:text-sm block line-through">
                        {item.discount_price}{" "}
                        {lang === "ru"
                          ? " сум"
                          : lang === "en"
                          ? "soum"
                          : "sum"}
                      </span>
                      <span className="font-bold text-sm md:text-lg block mb-2.5 text-blue-accent">
                        {item.price}{" "}
                        {lang === "ru"
                          ? " сум"
                          : lang === "en"
                          ? "soum"
                          : "sum"}
                      </span>
                      <Button onClick={() => ProductOrder(item.id)}>
                        {lang === "ru"
                          ? "Заказать"
                          : lang === "en"
                          ? "Order"
                          : "Buyurtma berish"}
                      </Button>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })
          )}
        </Swiper>
      </div>

      {/* ----- Modal ----- */}

      <Modal
        isVisible={showModal}
        onClose={() => {
          setShowModal(false);
        }}
      >
        {modalContent ? (
          <div>
            <div className="flex justify-between items-start">
              <p></p>
              <Image
                className="object-cover -mr-6"
                src={`/Assets/Images/ModalImg/success.svg`}
                width={64}
                height={64}
                alt="Success_image"
              />
              <button
                onClick={() => setShowModal(false)}
                className="rounded-md"
              >
                <Image
                  src={`/Assets/Images/ModalImg/close.svg`}
                  width={25}
                  height={25}
                  alt={"close_image"}
                />
              </button>
            </div>
            <div className="text-center max-w-362">
              <h1 className="font-bold text-2xl text-black-black_thin mt-2">
                Поздравляем
              </h1>
              <p className="text-sm text-black-black_thin my-2 mx-8">
                Поздравляем, ваш заказ принят. Мы свяжемся с вами в ближайшее
                время
              </p>
            </div>
            <button
              className="w-full font-medium text-lg text-white bg-blue-base rounded-xl py-2 px-8 mt-2"
              onClick={() => {
                setShowModal(false);
              }}
            >
              Ok
            </button>
          </div>
        ) : (
          <div className="max-w-[710px] px-0">
            <div className="mb-3">
              <div className="flex justify-between items-start mb-4">
                <p></p>
                <h2 className="font-bold text-2xl text-black-black_thin text-center">
                  Ваш заказ
                </h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="rounded-md"
                >
                  <Image
                    src={`/Assets/Images/ModalImg/close.svg`}
                    width={25}
                    height={25}
                    alt={"close_image"}
                  />
                </button>
              </div>
              <span className="block w-full h-0.5 bg-gray-line_color"></span>
            </div>
            <div className="flex items-start justify-between">
              <div className="border-1 rounded-lg w-[25%]">
                <Image
                  src={Baseen}
                  width={100}
                  height={90}
                  alt="Product_image"
                />
              </div>
              <div className="w-[70%]">
                <div className="flex items-start justify-between">
                  <div className="w-[100%]">
                    <h3 className="block font-bold text-sm">{find.name_ru}</h3>
                    <p className="block font-medium mt-1 text-sm text-black-black_thin">
                      260х160х65см, 2282л
                    </p>
                  </div>
                  {/* <button type="button">
                  <Image
                    className="w-6 h-6"
                    src={`/Assets/Images/ModalImg/closeWihite.svg`}
                    width={24}
                    height={24}
                    alt="close_image"
                  />
                </button> */}
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex">
                    <button
                      className="flex items-center justify-center text-2xl w-7 h-7 border-1 rounded-l-[6px] bg-gray-line_color"
                      type="button"
                      onClick={() =>
                        numberProduct == 1
                          ? setNumberProduct(numberProduct)
                          : setNumberProduct(numberProduct - 1)
                      }
                    >
                      -
                    </button>
                    <p className="bg-gray-span_bg text-center w-7 h-7 border-t-1 border-b-1">
                      {numberProduct}
                    </p>
                    <button
                      className="flex items-center justify-center text-xl w-7 h-7 border-1 rounded-r-[6px] bg-gray-line_color"
                      type="button"
                      onClick={() => setNumberProduct(numberProduct + 1)}
                    >
                      +
                    </button>
                  </div>
                  <p className="font-bold text-sm text-blue-accent">
                    {find.price} сум
                  </p>
                </div>
              </div>
            </div>
            <span className="block w-full h-0.5 bg-gray-line_color mt-3"></span>
            <div>
              <p className="text-base text-black-text_color mt-3">
                Общая сумма:
                <span className="font-bold text-base pl-3">
                  {numberProduct * find.price} сум
                </span>
              </p>
            </div>
            <span className="block w-full h-0.5 bg-gray-line_color mt-3"></span>
            <form
              onSubmit={(e) => {
                formik.handleSubmit(e);
                formik.values = initialValues;
              }}
              className="flex flex-col mt-5"
              autoComplete="off"
            >
              <label className="font-medium text-black-black_dark text-base relative flex flex-col">
                Имя
                <input
                  type="text"
                  name="name"
                  id="name"
                  aria-label="Введите ваше имя"
                  placeholder="Введите ваше имя"
                  className={
                    formik.touched.name && formik.errors.name
                      ? "h-48 text-base rounded-lg p-2 md:p-4 outline-none border border-red-600 mb-3 md:mb-4 mt-1"
                      : "h-48 text-base rounded-lg p-2 md:p-4 outline-none border border-gray-input_radius mb-4 md:mb-4 mt-1"
                  }
                  minLength="3"
                  maxLength="25"
                  {...formik.getFieldProps("name")}
                />
                {formik.touched.name && formik.errors.name ? (
                  <span className="text-red-600 text-xs absolute -bottom-1 sm:bottom-0 left-2">
                    {formik.errors.name}
                  </span>
                ) : null}
              </label>
              <label className="font-medium text-black-black_dark relative flex flex-col">
                Номер телефона
                <div
                  className={
                    formik.touched.number && formik.errors.number
                      ? "flex items-center pl-4 h-48 text-base rounded-lg p-1 outline-none border border-red-600 mb-4 sm:mb-4 mt-1"
                      : "flex items-center pl-4 h-48 text-base rounded-lg p-1 outline-none border border-gray-input_radius mb-4 sm:mb-4 mt-1"
                  }
                >
                  <Image
                    src={"/Assets/Images/BuyAll/Flag.svg"}
                    className="w-6 h-4"
                    width={22}
                    height={15}
                    alt="site_logo"
                  />
                  <span className="text-base text-black ml-1">+998</span>
                  <input
                    type="number"
                    name="number"
                    id="number"
                    aria-label="phone_number"
                    placeholder="901234567"
                    className="outline-none w-full sm:ml-4 h-full p-2 text-base"
                    {...formik.getFieldProps("number")}
                  />
                  {formik.touched.number && formik.errors.number ? (
                    <span className="text-red-600 text-xs absolute bottom-0 left-2">
                      {formik.errors.number}
                    </span>
                  ) : null}
                </div>
              </label>

              <label className="font-medium text-black-black_dark text-base relative flex flex-col">
                Адрес
                <input
                  type="text"
                  name="address"
                  id="address"
                  aria-label="Введите ваш адрес"
                  placeholder="Введите ваш адрес"
                  className={
                    formik.touched.address && formik.errors.address
                      ? "h-48 text-base rounded-lg p-2 sm:p-4 outline-none border border-red-600 mb-4 sm:mb-4 mt-1"
                      : "h-48 text-base rounded-lg p-2 sm:p-4 outline-none border border-gray-input_radius mb-5 sm:mb-4 mt-1"
                  }
                  minLength="3"
                  maxLength="35"
                  {...formik.getFieldProps("address")}
                />
                {formik.touched.address && formik.errors.address ? (
                  <span className="text-red-600 text-xs absolute bottom-0 left-2">
                    {formik.errors.address}
                  </span>
                ) : null}
              </label>
              <div className="mt-3">
                <button
                  className="w-full bg-blue-base rounded-xl text-white py-3"
                  type="submit"
                >
                  Заказать
                </button>
              </div>
            </form>
          </div>
        )}

        {/* ----- Modal_2 ----- */}
      </Modal>
    </section>
  );
};

export default Sale_nov;
