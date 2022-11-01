import React, { useState } from 'react'
import { FormikConsumer, useFormik } from 'formik'
import 'react-phone-number-input/style.css'
import Image from 'next/image'
import * as Yup from 'yup'
import { toast, Toaster } from 'react-hot-toast'
import axios from 'axios'

let token = '5463520222:AAFQgcQ7hyUTAYV3ad0YaGTQ_lGIbRZyyxg'
let chatId = '636476536'

const initialValues = {
  name: '',
  number: '',
}

const onSubmit = (values) => {
  console.log(values)
  toast.success('Successfully sent!')

  let fullText = `\u{2705} Name: ${values.name}%0A\u{2705} Phone Number: ${values.number}`

  axios
    .post(
      `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${fullText},`,
    )
    .then(function (response) {})
    .catch(function (error) {
      toast.error('Internal error')
    })
  values.name = ''
}

const validationSchema = Yup.object({
  name: Yup.string()
    .required('Username is required, at least 3 characters')
    .min(3, 'Minimal 3 characters')
    .max(15, 'Maximum 10 characters'),
  number: Yup.string('Must be only number')
    .matches(/^[0-9]+$/, {
      message: 'Inccorect format.',
      excludeEmptyString: true,
    })
    .required('Required phone number'),
})

const BuyForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  })
  console.log(formik.values)
  const [value, setValue] = useState()
  return (
    <div className=" w-full h-264 sm:h-312 rounded-xl p-4 sm:p-7 mt-6 sm:mt-0  bg-white">
      <Toaster position="bottom-right" reverseOrder={false} />
      <form
        onSubmit={(e) => {
          formik.handleSubmit(e)
          formik.values = initialValues
        }}
        className=" flex flex-col"
      >
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
            minLength="3"
            maxLength="25"
            {...formik.getFieldProps('name')}
          />
          {formik.touched.name && formik.errors.name ? (
            <span className="text-red-600 text-xs absolute -bottom-1 sm:bottom-1 left-2">
              {formik.errors.name}
            </span>
          ) : null}
        </label>
        <label className="relative flex flex-col">
          Номер телефона
          <div
            className={
              formik.touched.number && formik.errors.number
                ? ' flex items-center pl-4 h-48 text-base rounded-lg p-1 outline-none border  border-red-600 mb-4 sm:mb-6'
                : ' flex items-center pl-4 h-48 text-base rounded-lg  outline-none border  border-gray-input_radius mb-4 sm:mb-6'
            }
          >
            <Image
              src={'/Assets/Images/BuyAll/Flag.svg'}
              className="w-6 h-4"
              width={22}
              height={15}
              alt="site_logo"
            />
            <span className='text-base text-black ml-1' >+998</span>
            <input
              type="number"
              name="number"
              id="number"
              placeholder="(90) 123 45 67"
              className=" outline-none w-full sm:ml-4 h-full p-2 "
              {...formik.getFieldProps('number')}
            />
            {formik.touched.number && formik.errors.number ? (
              <span className="text-red-600 text-xs absolute bottom-0 sm:bottom-2  left-2">
                {formik.errors.number}
              </span>
            ) : null}
          </div>
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
