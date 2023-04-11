import { NextPage } from "next"
import Head from "next/head"
import Layout from "../../components/layouts/Layout"
import Tabs from "../../components/Tabs"

const TabPage: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Tab | UI Components</title>
      </Head>
      <section className='px-16 py-6 bg-slate-50 text-slate-900 min-h-[82vh]'>
        <h2 className='mb-4 text-3xl'>Tab</h2>
        <div>
          <Tabs.Group>
            <Tabs.Tab>
              <Tabs.Label>Lorem ipsum</Tabs.Label>
              <Tabs.Content>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sunt adipisci tempore quod eligendi aspernatur laboriosam. Voluptatum odio placeat facilis repellendus incidunt ipsum, laudantium aspernatur nam explicabo sequi, quod dolore!</p>
              </Tabs.Content>
            </Tabs.Tab>
            <Tabs.Tab>
              <Tabs.Label>Voluptatibus exercitationem fugit illum ipsam tempore quaerat accusantium</Tabs.Label>
              <Tabs.Content>
                <p>Voluptatibus exercitationem, fugit illum ipsam tempore quaerat accusantium. Autem quas facilis reiciendis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, aspernatur ex! Ex libero maxime quam quaerat. Doloribus, sed.</p>
              </Tabs.Content>
            </Tabs.Tab>
            <Tabs.Tab>
              <Tabs.Label>Modi Ji</Tabs.Label>
              <Tabs.Content>
                <p>Modi, aspernatur porro rem consequuntur minima sed. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, eligendi nostrum! Itaque atque eligendi sequi ipsa dolor quos veniam ex, voluptatum id accusantium?</p>
              </Tabs.Content>
            </Tabs.Tab>
          </Tabs.Group>
        </div>
      </section>
    </Layout>
  )
}

export default TabPage
