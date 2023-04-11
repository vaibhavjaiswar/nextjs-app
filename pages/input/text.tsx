import { useFormik } from 'formik';
import { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import { BiHide, BiShow } from 'react-icons/bi';
import Layout from '../../components/layouts/Layout';
import { formValuesType } from '../../types';
import { validationFunction } from '../../utils/formValidation';

const Text: NextPage = () => {

  const [showPassword, setShowPassword] = useState(false)

  const initialValues: formValuesType = { name: '', email: '', password: '' }

  const formik = useFormik({
    initialValues: initialValues,
    validate: validationFunction,
    onSubmit: (values, { setSubmitting }) => {
      console.log(JSON.stringify(values, null, 2))
      setTimeout(() => setSubmitting(false), 2000)
    },
  })

  return (
    <Layout>
      <Head>
        <title>Text Input | UI Components</title>
      </Head>
      <section className='px-16 py-6 bg-slate-50 text-slate-900 min-h-[82vh]'>
        <h2 className='mb-4 text-3xl'>Text Input</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum similique error numquam ut tempore dolores provident earum eveniet alias, totam atque pariatur assumenda, neque illum velit quos est suscipit nisi.</p>
        <div className='mx-auto my-4 px-6 py-3 max-w-lg bg-slate-300 rounded shadow-lg'>
          <h3 className='text-2xl'>Leak Your Data Form</h3>
          <form onSubmit={formik.handleSubmit}>
            <div className='my-2'>
              <label htmlFor='name' className='block py-2 font-semibold'>Name</label>
              <input className='px-2 py-1 w-full bg-white rounded' id='name' type='text' placeholder='Enter your name...' {...formik.getFieldProps('name')} />
              {formik.touched.name && formik.errors.name && <div className='text-red-600 font-semibold'>{formik.errors.name}</div>}
            </div>
            <div className='my-2'>
              <label htmlFor='email' className='block py-2 font-semibold'>Email</label>
              <input className='px-2 py-1 w-full bg-white rounded' id='email' type='email' placeholder='Enter your email...' {...formik.getFieldProps('email')} />
              {formik.touched.email && formik.errors.email && <div className='text-red-600 font-semibold'>{formik.errors.email}</div>}
            </div>
            <div className='my-2'>
              <label htmlFor='password' className='block py-2 font-semibold'>Password</label>
              <div className='flex items-center'>
                <input className='px-2 py-1 w-full bg-white rounded' id='password' type={showPassword ? 'text' : 'password'} placeholder='Enter password...' {...formik.getFieldProps('password')} />
                <div className='ml-2 p-1 text-2xl rounded cursor-pointer hover:bg-slate-100' onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <BiHide /> : <BiShow />}
                </div>
              </div>
              {formik.touched.password && formik.errors.password && <div className='text-red-600 font-semibold'>{formik.errors.password}</div>}
            </div>
            <div>
              <button className='my-2 mr-4 btn' type='submit' disabled={formik.isSubmitting}>Submit</button>
              <button className='my-2 btn-outline' type='reset' disabled={formik.isSubmitting} onClick={formik.handleReset}>Reset</button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  )
}

export default Text
