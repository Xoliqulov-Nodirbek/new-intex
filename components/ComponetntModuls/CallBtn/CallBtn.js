import React from 'react'

function CallBtn({mobileOpen, mobileClose}) {
  return (
    <a className={` mobileFull text-white font-medium text-base lg:text-lg py-3 sm:py-3.5 w-44 bg-blue-base inline-block text-center rounded-xl`} href='tel:+998901288182'>Заказать звонок</a>
  )
}

export default CallBtn