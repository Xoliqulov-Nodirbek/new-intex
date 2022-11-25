import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";

const Footer = () => {
  const lang = useSelector(state => state.data.lang)
  const languages = useSelector(state => state.data.localization)
  return (
    <footer id="contact" className="w-full bg-gray-bg_main mt-11">
      <div className="max-w-container w-full mx-auto pt-14 px-5 ">
        <div className="sm:grid sm:grid-cols-2 sm:gap-y-10 tablet:flex tablet:justify-between pb-4 ">
          <div className="max-w-281 w-full">
            <Link href={"/"}>
              <Image
                src={`/Assets/Images/FooterSvg/FooterLogo.svg`}
                width={164}
                height={16}
                alt="site_logo"
              />
            </Link>
            <p className="mt-7 text-base text-gray-foot hidden mini_phone:block">
             {languages[lang].footer.text}
            </p>
            <div className=" max-w-237 px-1 mt-7 flex justify-between ">
              <Link href="https://www.facebook.com/" target="blank">
                <Image
                  src={`/Assets/Images/FooterSvg/facebook.svg`}
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
                  src={`/Assets/Images/FooterSvg/Linkedin.svg`}
                  className="w-9 h-9 hover:scale-105 transition-all"
                  width={36}
                  height={36}
                  alt="linkedin"
                />
              </Link>
              <Link href="https://www.instagram.com/" target="blank">
                <Image
                  src={`/Assets/Images/FooterSvg/Instagram.svg`}
                  className="w-9 h-9 hover:scale-105 transition-all"
                  width={36}
                  height={36}
                  alt="instagram"
                />
              </Link>
              <Link href="https://twitter.com/" target="blank">
                <Image
                  src={`/Assets/Images/FooterSvg/Twitter.svg`}
                  className="w-9 h-9 hover:scale-105 transition-all"
                  width={36}
                  height={36}
                  alt="twitter"
                />
              </Link>
            </div>
          </div>
          <div className=" mt-6 sm:mt-0 hidden mini_phone:block">
            <p className="text-black-black_dark font-bold text-lg">
              {languages[lang].footer.linkList.linkListName}
            </p>
            <ul className="text-sm text-gray-foot mt-4 tablet:mt-6 h-207 tablet:h-237 flex flex-col justify-between">
              <li>
                <Link className="cursor-pointer" href="#">
                {languages[lang].footer.linkList.linkItem1}

                </Link>
              </li>
              <li>
                <Link className="cursor-pointer" href="#">
                {languages[lang].footer.linkList.linkItem2}
                </Link>
              </li>
              <li>
                <Link className="cursor-pointer" href="#">
                {languages[lang].footer.linkList.linkItem3}
                </Link>
              </li>
              <li>
                <Link className="cursor-pointer" href="#">
                {languages[lang].footer.linkList.linkItem4}
                </Link>
              </li>
              <li>
                <Link className="cursor-pointer" href="#">
                {languages[lang].footer.linkList.linkItem5}
                </Link>
              </li>
              <li>
                <Link className="cursor-pointer" href="#">
                {languages[lang].footer.linkList.linkItem6}
                </Link>
              </li>
              <li>
                <Link className="cursor-pointer" href="#">
                {languages[lang].footer.linkList.linkItem7}
                </Link>
              </li>
            </ul>
          </div>
          <div className="max-w-237 mt-6 sm:mt-0 hidden mini_phone:block">
            <p className="text-black-black_dark font-bold text-lg">
            {languages[lang].footer.centerHelp.help}
            </p>
            <ul className="text-sm text-gray-foot mt-4 tablet:mt-6 h-83 tablet:h-93 flex flex-col justify-between">
              <li>
                <Link href="#">{languages[lang].footer.centerHelp.delivery}</Link>
              </li>
              <li>
                <Link href="#">{languages[lang].footer.centerHelp.questions}</Link>
              </li>
              <li>
                <Link href="#">{languages[lang].footer.centerHelp.secret}</Link>
              </li>
            </ul>
          </div>
          <div className=" mt-6 sm:mt-0">
            <p className="text-black-black_dark font-bold text-lg">{languages[lang].footer.adress.addressName}</p>
            <div className=" h-135 tablet:h-153 mt-4 tablet:mt-6 flex flex-col justify-between ">
              <div className=" flex max-w-290">
                <Image
                  src={`/Assets/Images/FooterSvg/Location.svg`}
                  className="w-5 h-6"
                  width={18}
                  height={23}
                  alt="Location"
                />
                <address className="pl-1 text-sm  text-gray-foot not-italic">
                {languages[lang].footer.adress.street}
                </address>
              </div>
              <div className="flex">
                <Image
                  src={`/Assets/Images/FooterSvg/Phone.svg`}
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
                  src={`/Assets/Images/FooterSvg/Message.svg`}
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
              <div className="flex">
                <Image
                  src={`/Assets/Images/FooterSvg/Clock.svg`}
                  className="w-5 h-5"
                  width={18}
                  height={19}
                  alt="Clock"
                />
                <p className="text-sm pl-1 text-gray-foot">
                  <time>10:00</time> - <time>22:00</time> {languages[lang].footer.adress.workingTime}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
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
