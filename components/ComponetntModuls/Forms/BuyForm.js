import React, { useState } from 'react'
import { useFormik } from 'formik'
import 'react-phone-number-input/style.css'
import Image from 'next/image'


const initialValues = {
  name: '',
  number: '',
}

const onSubmit = values => {
  console.log(values)
  alert(values)
}

const validate = values => {
  let errors = {}

  if (!values.name) {
    errors.name = 'Username is required, at least 3 characters'
  }

  if (!values.number) {
    errors.number = 'Required phone number'
  }

  return errors
}

const BuyForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  })
  const [value, setValue] = useState()
  return (
    <div className=" w-full h-264 sm:h-312 rounded-xl p-4 sm:p-7 mt-6 sm:mt-0  bg-white">
      <form onSubmit={formik.handleSubmit} className=" flex flex-col">
        <label className="text-base relative flex flex-col">
          Имя
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Введите ваше имя"
            className={
              formik.touched.name && formik.errors.name
              ? '  h-48 text-base rounded-lg p-2 sm:p-4 outline-none border border-red-600 mb-3 sm:mb-6'
              : '  h-48 text-base rounded-lg p-2 sm:p-4 outline-none border border-gray-input_radius mb-3 sm:mb-6'
            }
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            minLength="3"
            maxLength="25"
            />
          {formik.touched.name && formik.errors.name ? (
            <span className="text-red-600 text-xs absolute -bottom-1 sm:bottom-1 left-2">
              {formik.errors.name}
            </span>
          ) : null}
          </label>
        <label className="relative flex flex-col">
          Номер телефона

          {/* <Image
                src={'/Assets/Images/BuyAll/Flag.svg'}
                className="w-40 h-4"
                width={164}
                height={16}
                alt="site_logo"
              /> */}
          <input
            type="tel"
            name="number"
            id="number"
            placeholder="(90) 123 45 67"
            className={
              formik.touched.number && formik.errors.number
                ? '  h-48 text-base rounded-lg p-2 sm:p-4 outline-none border border-red-600 mb-4 sm:mb-6'
                : '  h-48 text-base rounded-lg p-2 sm:p-4 outline-none border border-gray-input_radius mb-4 sm:mb-6'
            }
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.number}
          />
          {formik.touched.number && formik.errors.number ? (
            <span className="text-red-600 text-xs absolute bottom-0 sm:bottom-2  left-2">
              {formik.errors.number}
            </span>
          ) : null}
          </label>
        <button
          className="w-full h-48 bg-blue-base rounded-xl text-white  "
          type="submit"
          >
          Отправить
        </button>
      </form>
    </div>
  )
}

export default BuyForm
