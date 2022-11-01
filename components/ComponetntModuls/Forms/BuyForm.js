import React, { useState } from 'react'
import { useFormik } from 'formik'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

const initialValues = {
  name: '',
  email: '',
}

const onSubmit = (values) => {
  console.log(values)
}

const validate = (values) => {
  let errors = {}

  if (!values.name) {
    errors.name = 'Username is required, at least 3 characters'
  }

  if (!values.phone) {
    errors.email = 'Required'
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
    <div className=" w-full h-264 sm:h-312 rounded-xl p-4 sm:p-8 mt-6 sm:mt-0  bg-white">
      <form onSubmit={formik.handleSubmit} className=" flex flex-col">
        <label className="text-base relative flex flex-col">
          Имя
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Введите ваше имя"
            className={
              formik.errors.name
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
        <label className="">
          Номер телефона
          <PhoneInput
            placeholder="Enter phone number"
            international
            id="phone"
            name="phone"
            defaultCountry="UZ"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            className="  h-48 text-base rounded-lg p-2 sm:p-4 outline-none border border-gray-input_radius mb-3 sm:mb-6"
            maxLength="17"
          />
        </label>
        <button
          className="w-full h-48 bg-blue-base rounded-xl text-white "
          type="submit"
        >
          Отправить
        </button>
      </form>
    </div>
  )
}

export default BuyForm
