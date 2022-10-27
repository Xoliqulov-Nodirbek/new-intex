import Image from 'next/image'
import React from 'react'
import facebook from '../../public/Assets/Images/FooterSvg/facebook.svg'
import FooterLogo from '../../public/Assets/Images/FooterSvg/FooterLogo.svg'
import Linkedin from '../../public/Assets/Images/FooterSvg/Linkedin.svg'
import Instagram from '../../public/Assets/Images/FooterSvg/Instagram.svg'
import Twitter from '../../public/Assets/Images/FooterSvg/Twitter.svg'
import Location from '../../public/Assets/Images/FooterSvg/Location.svg'
import Phone from '../../public/Assets/Images/FooterSvg/Phone.svg'
import Message from '../../public/Assets/Images/FooterSvg/Message.svg'
import Clock from '../../public/Assets/Images/FooterSvg/Clock.svg'

const Footer = () => {
  return (
    <footer className="w-full bg-gray-bg_main ">
      <div className="max-w-container w-full mx-auto pt-14">
        <div className="flex justify-between ">
          <div className="max-w-281 w-full">
            <div>
              <Image
                src={FooterLogo}
                className="w-40 h-4"
                width={164}
                height={16}
                alt="site_logo"
              />
            </div>
            <p className="mt-7 text-base text-gray-foot">
              Бассейны от intex - доступная по цене, качественная, надежная и
              экологически чистая продукция, которая предназначена для приятного
              отдыха всей семьи
            </p>
            <div className=" max-w-237 px-1 mt-7 flex justify-between ">
              <Image
                src={facebook}
                className="w-9 h-9"
                width={36}
                height={36}
                alt="facebook"
              />
              <Image
                src={Linkedin}
                className="w-9 h-9"
                width={36}
                height={36}
                alt="linkedin"
              />
              <Image
                src={Instagram}
                className="w-9 h-9"
                width={36}
                height={36}
                alt="instagram"
              />
              <Image
                src={Twitter}
                className="w-9 h-9"
                width={36}
                height={36}
                alt="twitter"
              />
            </div>
          </div>
          <div>
            <p className="text-black-black_dark font-bold text-lg">
              Полезные ссылки
            </p>
            <ul className="text-sm text-gray-foot mt-6 h-237 flex flex-col justify-between">
              <li className='cursor-pointer hover:text-black-black_dark ' >О Продукт</li>
              <li className='cursor-pointer hover:text-black-black_dark ' >Почему мы?</li>
              <li className='cursor-pointer hover:text-black-black_dark ' >Контакты</li>
              <li className='cursor-pointer hover:text-black-black_dark ' >Категории</li>
              <li className='cursor-pointer hover:text-black-black_dark ' >Популярное</li>
              <li className='cursor-pointer hover:text-black-black_dark ' >Новинки</li>
              <li className='cursor-pointer hover:text-black-black_dark ' >На скидке</li>
            </ul>
          </div>
          <div>
            <p className="text-black-black_dark font-bold text-lg">
              Центр помощи
            </p>
            <ul className="text-sm text-gray-foot mt-6 h-93 flex flex-col justify-between">
              <li>Доставка и оплата</li>
              <li>Часто задаваемые вопросы</li>
              <li>Политика конфиденциальности</li>
            </ul>
          </div>
          <div>
            <p className="text-black-black_dark font-bold text-lg">Адрес</p>
            <div className="max-h-153 h-full mt-6 flex flex-col justify-between ">
              <div className=" flex max-w-290">
                <Image
                  src={Location}
                  className="w-5 h-6"
                  width={18}
                  height={23}
                  alt="Location"
                />
                <p className="pl-1 text-sm  text-gray-foot">
                  Улица Пахлавона Махмуда, Яшнабадский район, город Ташкент
                </p>
              </div>
              <div className="flex">
                <Image
                  src={Phone}
                  className="w-5 h-5"
                  width={18}
                  height={19}
                  alt="Phone"
                />
                <p className="text-sm pl-1 text-gray-foot">
                  +998 (90) 128 81 82
                </p>
              </div>
              <div className="flex">
                <Image
                  src={Message}
                  className="w-5 h-5"
                  width={18}
                  height={19}
                  alt="Message"
                />
                <p className="text-sm pl-1 text-gray-foot">Intex@gmail.com</p>
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
                  10:00 - 22:00 Без выходных
                </p>
              </di>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <hr className="w-full bg-gray-200 h-0.5" />
          <p className='text-gray-foot py-7' >
            INTEX-MARKET © 2022, Разработано в Support Solutions Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
