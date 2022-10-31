import Image from 'next/image'
import React from 'react'
import BuyForm from '../ComponetntModuls/CallBtn/Forms/BuyForm'

const BuyAll = () => {
  return (
    <div className="w-full">
      <div className="max-w-container w-full mx-auto my-auto sm:px-5 rounded-sectionRadius">
        <div className="w-full md:h-520 my-10 md:my-20 flex flex-col md:flex-row items-center justify-between px-5 md:px-0 bg-gray-bg_main py-10 md:pl-10  ">
          <div>
            <h2 className="text-lg sm:text-3xl md:text-32 font-bold leading-9">
              Купить оптом
            </h2>
            <p className="max-w-403 text-sm md:text-base text-gray-foot leading-5 mt-4 pb-6 sm:pb-8 ">
              Если вы хотите купить товары по оптовой цене, вы должны заказать
              не менее 20 товаров.
            </p>
            <div className="block md:hidden max-w-362 w-full ">
              
              <Image
                src={'/Assets/Images/KarkasHero1.png'}
                alt="Picture of the Karkas"
                width={335}
                height={202}
                priority="true"
                layout="responsive"
              />
            </div>
            <BuyForm />
          </div>
          <div className="hidden md:block ml-4 lg:ml-0">
            <Image
              src={'/Assets/Images/KarkasHero.png'}
              alt="Picture of the Karkas"
              width={628}
              height={380}
              priority="true"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BuyAll
