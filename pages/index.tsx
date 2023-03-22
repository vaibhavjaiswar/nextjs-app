import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import IndexLayout from '../components/layouts/IndexLayout'

const Index: NextPage = () => {

  const router = useRouter()
  
  return (
    <IndexLayout>
      <>
        <Head>
          <title>UI Components</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <section className='px-16 py-4 bg-slate-50 text-slate-900 w-2/3 max-w-xl min-h-[60vh] rounded-lg shadow-xl flex justify-center items-center'>
          <div className='flex flex-col items-center'>
            <h1 className='my-3 text-4xl text-center'>UI Components</h1>
            <p className='my-3 text-center'>This web application is for learning purpose and coding practice. Click on button below to see all components.</p>
            <button className='my-3 px-3 py-2 bg-slate-900 text-slate-50 rounded hover:bg-slate-800 focus:ring' onClick={() => router.push('/home')}>Go to Home</button>
          </div>
        </section>
      </>
    </IndexLayout>
  )
}

export default Index
