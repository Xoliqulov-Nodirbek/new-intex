import Image from "next/image";
import React from "react";
import facebook from "../../public/Assets/Images/FooterSvg/facebook.svg";
import FooterLogo from "../../public/Assets/Images/FooterSvg/FooterLogo.svg";
import Linkedin from "../../public/Assets/Images/FooterSvg/Linkedin.svg";
import Instagram from "../../public/Assets/Images/FooterSvg/Instagram.svg";
import Twitter from "../../public/Assets/Images/FooterSvg/Twitter.svg";
import Location from "../../public/Assets/Images/FooterSvg/Location.svg";
import Phone from "../../public/Assets/Images/FooterSvg/Phone.svg";
import Message from "../../public/Assets/Images/FooterSvg/Message.svg";
import Clock from "../../public/Assets/Images/FooterSvg/Clock.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-bg_main mt-8 sm:mt-20">
      <div className="max-w-container w-full mx-auto pt-14 px-5 ">
        <div className="sm:grid sm:grid-cols-2 sm:gap-y-10 tablet:flex tablet:justify-between pb-4 ">
          <div className="max-w-281 w-full">
            <Link href={'/'}>
              <Image
                src={FooterLogo}
                className="w-40 h-4"
                width={164}
                height={16}
                alt="site_logo"
              />
            </Link>
            <p className="mt-7 text-base text-gray-foot">
              Бассейны от intex - доступная по цене, качественная, надежная и
              экологически чистая продукция, которая предназначена для приятного
              отдыха всей семьи
            </p>
            <div className=" max-w-237 px-1 mt-7 flex justify-between ">
              <Link href="https://www.facebook.com/" target="blank">
                <Image
                  src={facebook}
                  className="w-9 h-9 hover:scale-105 transition-all"
                  width={36}
                  height={36}
                  alt="facebook"
                />
              </Link>
              <Link
                href="https://www.linkedin.com/in/ibrokhim-ismoilov-876280221/"
                target="blank"
              >
                <Image
                  src={Linkedin}
                  className="w-9 h-9 hover:scale-105 transition-all"
                  width={36}
                  height={36}
                  alt="linkedin"
                />
              </Link>
              <Link href="https://www.instagram.com/" target="blank">
                <Image
                  src={Instagram}
                  className="w-9 h-9 hover:scale-105 transition-all"
                  width={36}
                  height={36}
                  alt="instagram"
                />
              </Link>
              <Link href="https://twitter.com/" target="blank">
                <Image
                  src={Twitter}
                  className="w-9 h-9 hover:scale-105 transition-all"
                  width={36}
                  height={36}
                  alt="twitter"
                />
              </Link>
            </div>
          </div>

          <div className=" mt-6 sm:mt-0">
            <p className="text-black-black_dark font-bold text-lg">
              Полезные ссылки
            </p>
            <ul className="text-sm text-gray-foot mt-4 tablet:mt-6 h-207 tablet:h-237 flex flex-col justify-between">
              <li>
                <Link className="cursor-pointer" href="#">
                  О Продукт
                </Link>
              </li>
              <li>
                <Link className="cursor-pointer" href="#">
                  Почему мы?
                </Link>
              </li>
              <li>
                <Link className="cursor-pointer" href="#">
                  Контакты
                </Link>
              </li>
              <li>
                <Link className="cursor-pointer" href="#">
                  Категории
                </Link>
              </li>
              <li>
                <Link className="cursor-pointer" href="#">
                  Популярное
                </Link>
              </li>
              <li>
                <Link className="cursor-pointer" href="#">
                  Новинки
                </Link>
              </li>
              <li>
                <Link className="cursor-pointer" href="#">
                  На скидке
                </Link>
              </li>
            </ul>
          </div>
          <div className="max-w-237 mt-6 sm:mt-0">
            <p className="text-black-black_dark font-bold text-lg">
              Центр помощи
            </p>
            <ul className=" text-sm text-gray-foot mt-4 tablet:mt-6 h-83 tablet:h-93 flex flex-col justify-between">
              <li>
                <Link href="#">Доставка и оплата</Link>
              </li>
              <li>
                <Link href="#">Часто задаваемые вопросы</Link>
              </li>
              <li>
                <Link href="#">Политика конфиденциальности</Link>
              </li>
            </ul>
          </div>

          <div className=" mt-6 sm:mt-0">
            <p className="text-black-black_dark font-bold text-lg">Адрес</p>
            <div className=" h-135 tablet:h-153 mt-4 tablet:mt-6 flex flex-col justify-between ">
              <div className=" flex max-w-290">
                <Image
                  src={Location}
                  className="w-5 h-6"
                  width={18}
                  height={23}
                  alt="Location"
                />
                <address className="pl-1 text-sm  text-gray-foot not-italic">
                  Улица Пахлавона Махмуда, Яшнабадский район, город Ташкент
                </address>
              </div>
              <div className="flex">
                <Image
                  src={Phone}
                  className="w-5 h-5"
                  width={18}
                  height={19}
                  alt="Phone"
                />
                <a
                  href="tel:+998901288182"
                  className="text-sm pl-1 text-gray-foot"
                >
                  +998 (90) 128 81 82
                </a>
              </div>
              <div className="flex">
                <Image
                  src={Message}
                  className="w-5 h-5"
                  width={18}
                  height={19}
                  alt="Message"
                />
                <a
                  href="mailto:Intex@gmail.com"
                  className="text-sm pl-1 text-gray-foot"
                >
                  Intex@gmail.com
                </a>
              </div>
              <di className="flex">
                <Image
                  src={Clock}
                  className="w-5 h-5"
                  width={18}
                  height={19}
                  alt="Clock"
                />
                <p className="text-sm pl-1 text-gray-foot">
                  <time>10:00</time> - <time>22:00</time> Без выходных
                </p>
              </di>
            </div>
          </div>
        </div>
        <div >
          <hr className="w-full bg-gray-200 h-0.5" />
          <p className="text-gray-foot pt-4 pb-10 sm:py-7">
            INTEX-MARKET © 2022, Разработано в Support Solutions Все права
            защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
