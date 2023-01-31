import Head from 'next/head'

import Header from '../components/header'
import Footer from '../components/footer'

export default function Home() {
  return (
    <>
      <Head>
        {/* Information */}
        <title>Ingnum Networks</title>

        {/* Settings */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />
      <main>
        <br /><br /><br />
      </main>
      <Footer />
    </>
  )
}
