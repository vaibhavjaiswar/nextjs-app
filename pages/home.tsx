import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { BiMenu } from 'react-icons/bi'
import Layout from '../components/layouts/Layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <>
        <Head>
          <title>Home | UI Components</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <section className='px-16 py-10 bg-slate-50 text-slate-900 min-h-[82vh]'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 items-center'>
            <div className='text-xl flex flex-col gap-2'>
              <h1 className='mb-4 text-3xl'>Welcome</h1>
              <p>This web app has different UI reusable components.</p>
              <p>All code is done from scratch in NextJS with Typescript & TailwindCSS.</p>
              <p>Access all components from <BiMenu className='inline' /> menu in header section.</p>
            </div>
            <div><Image className='rounded-full max-h-[60vh]' src='/components.png' alt='Components illustration' width={500} height={500} /></div>
          </div>
        </section>
      </>
    </Layout>
  )
}

export default Home
