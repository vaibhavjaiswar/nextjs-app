import Head from "next/head";
import Layout from "../components/layouts/Layout";

function About() {
  return (
    <Layout>
      <div>
        <Head>
          <title>About | UI Components</title>
        </Head>
        <section className='px-16 py-6 bg-slate-50 text-slate-900 min-h-[82vh]'>
          <h1 className='mb-4 text-3xl'>About Next App</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vero qui cum quam nam iusto alias autem dolorum libero, deserunt nesciunt odio eligendi vitae dolore, illo atque sunt assumenda repudiandae.</p>
        </section>
      </div>
    </Layout>
  )
}

export default About
