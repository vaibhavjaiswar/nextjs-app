import { NextPage } from "next"
import Head from "next/head"
import Accordion from "../../components/Accordion"
import Layout from "../../components/layouts/Layout"

const AccordionPage: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Accordion | UI Components</title>
      </Head>
      <section className='px-16 py-6 bg-slate-50 text-slate-900 min-h-[82vh]'>
        <h2 className='mb-4 text-3xl'>Accordion</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum similique error numquam ut tempore dolores provident earum eveniet alias, totam atque pariatur assumenda, neque illum velit quos est suscipit nisi.</p>
        <div className='my-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          <div>
            <Accordion>
              <Accordion.Title>Click here</Accordion.Title>
              <Accordion.Content>
                <p>Nothing much here!</p>
                <p>You can open/close this by clicking accordion header.</p>
              </Accordion.Content>
            </Accordion>
          </div>
          <div>
            <Accordion>
              <Accordion.Title>How does it works?</Accordion.Title>
              <Accordion.Content>
                <p>Height of this accordion content (div element) is set to 0px. When user clicks the accordion title, this element's height is set to required height.</p>
              </Accordion.Content>
            </Accordion>
          </div>
          <div>
            <Accordion>
              <Accordion.Title>Lorem Ipsum</Accordion.Title>
              <Accordion.Content>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure magni dolor, esse quae quasi possimus atque vero tenetur praesentium excepturi dolores corporis aperiam officiis. Minus mollitia aut earum dignissimos ducimus!</p>
              </Accordion.Content>
            </Accordion>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default AccordionPage
