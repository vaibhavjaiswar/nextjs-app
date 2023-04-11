import { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import Date from '../../components/Date';
import Layout from '../../components/layouts/Layout';

const DatePage: NextPage = () => {

  const [date, setDate] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e)
    setDate(e.target.value)
  }
  
  return (
    <Layout>
      <Head>
        <title>Date | UI Components</title>
      </Head>
      <section className='px-16 py-6 bg-slate-50 text-slate-900 min-h-[82vh]'>
        <h2 className='mb-4 text-3xl'>Date Input</h2>
        <div>
          <label htmlFor='date'>Browser Native Date Input : </label>
          <input type='date' id='date' value={date} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="date-component">Date Component : </label>
          <Date />
        </div>
      </section>
    </Layout>
  )
}

export default DatePage
