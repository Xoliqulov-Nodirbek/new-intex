import Image from "next/image";
import React, { useEffect, useState } from "react";
import Button from "../ComponetntModuls/button/Button";
import { Modal } from "../ComponetntModuls/Modal/Modal";
import Baseen from "../../public/Assets/Images/img.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast, Toaster } from "react-hot-toast";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

function Card({ status, name, price, sale }) {
  const [showModal, setShowModal] = useState(false);
  const [numberProduct, setNumberProduct] = useState(1);

  useEffect(() => {
    AOS.init();
  }, []);

  let token = "5463520222:AAFQgcQ7hyUTAYV3ad0YaGTQ_lGIbRZyyxg";
  let chatId = "636476536";

  const initialValues = {
    name: "",
    number: "",
    address: "",
  };

  const onSubmit = (values, { resetForm }) => {
    toast.success("Successfully sent!");
    let fullText = `\u{2705} Name: ${values.name}%0A\u{2705} Phone Number: \u{FF0B}998${values.number} %0A\u{2705} Address: ${values.address}`;

    axios
      .post(
        `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${fullText}`
      )
      .then(function (response) {})
      .catch(function (error) {
        toast.error("Internal error");
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

  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="card rounded-xl max-w-cardWidth shadow-card_shadow relative border mt-5"
      >
        <Toaster position="bottom-right" reverseOrder={false} />
        <span
          className={`${
            status === "Новинки"
              ? "bg-green-new"
              : status === "-17% скидка"
              ? "bg-red-sale"
              : status === "Pекомендуем"
              ? "bg-blue-recommend"
              : status === "Популярное"
              ? "bg-blue-recommend"
              : "bg-red-xit"
          } text-sm block z-20 w-111 text-center py-5.5 rounded-r-lg text-white absolute top-4 left-0`}
        >
          {status}
        </span>
        <Image
          className="mt-2 mb-3"
          src={Baseen}
          alt="baseen_product_image"
          width={280}
          height={220}
        />
        <div className="p-2 md:p-4">
          <h3 className="text-sm md:text-lg font-bold leading-5 mb-2">
            {name}
          </h3>
          <span className="text-xs md:text-base m-0 mb-2 block leading-22 text-black-black_thin">
            220х150х60см, 1662л
          </span>
          <span
            className={`text-xs md:text-sm block line-through ${
              status === "Новинки" ? "h-5" : null
            } ${status === "Pекомендуем" ? "h-5" : null}`}
          >
            {status === "Новинки" || status === "Pекомендуем" ? null : sale}
          </span>
          <span className="font-bold text-sm md:text-lg text-blue-accent block mb-2.5">
            {price}
          </span>
          <Button
            onClick={() => {
              setShowModal(true);
            }}
          >
            Заказать
          </Button>
        </div>
      </div>

      {/* --- Modal --- */}

      <Modal
        isVisible={showModal}
        onClose={() => {
          setShowModal(false);
        }}
      >
        {/* ----- Modal_1 ----- */}
        <div className="max-w-[410px] px-0 md:px-6">
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
            <div className="border-1 rounded-lg w-fit">
              <Image
                src={`/Assets/Images/ModalImg/bas_img.jpg`}
                width={100}
                height={90}
                alt="werty"
              />
            </div>
            <div className="ml-2">
              <div className="flex items-start justify-between">
                <div className="w-[70%]">
                  <h3 className="block font-bold text-sm">
                    Каркасный прямоугольный бассейн 260х160х65см, 2282л
                  </h3>
                  <p className="block font-medium mt-1 text-sm text-black-black_thin">
                    260х160х65см, 2282л
                  </p>
                </div>
                <button type="button">
                  <Image
                    className="w-6 h-6"
                    src={`/Assets/Images/ModalImg/closeWihite.svg`}
                    width={24}
                    height={24}
                    alt="close_image"
                  />
                </button>
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
                  1 290 000 сум
                </p>
              </div>
            </div>
          </div>
          <span className="block w-full h-0.5 bg-gray-line_color mt-3"></span>
          <div>
            <p className="text-base text-black-text_color mt-3">
              Общая сумма:
              <span className="font-bold text-base pl-3">
                {numberProduct * 1290000}
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
                    : "h-48 text-base rounded-lg p-2 md:p-4 outline-none border border-gray-input_radius mb-3 md:mb-4 mt-1"
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
                    : "flex items-center pl-4 h-48 text-base rounded-lg p-1 outline-none border border-gray-input_radius mb-4 sm:mb-6 mt-1"
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
                  placeholder="(90) 123 45 67"
                  className=" outline-none w-full sm:ml-4 h-full p-2 "
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
                    ? "h-48 text-base rounded-lg p-2 sm:p-4 outline-none border border-red-600 mb-3 sm:mb-4 mt-1"
                    : "h-48 text-base rounded-lg p-2 sm:p-4 outline-none border border-gray-input_radius mb-3 sm:mb-4 mt-1"
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

        {/* ----- Modal_2 ----- */}
        {/* <div>
          <div className="flex justify-between items-start">
            <p></p>
            <Image
              className="object-cover -mr-6"
              src={`/Assets/Images/ModalImg/success.svg`}
              width={64}
              height={64}
              alt="Success_image"
            />
            <button onClick={() => setShowModal(false)} className="rounded-md">
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
        </div> */}
      </Modal>
    </>
  );
}

export default Card;
