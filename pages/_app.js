import '../styles/globals.css'
import Head from 'next/head'
import { usePanelbear } from '@panelbear/panelbear-nextjs';

function MyApp({ Component, pageProps, panelbearid }) {
  usePanelbear(panelbearid, {
    debug: false
  })

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/faviconio.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

MyApp.getInitialProps = async () => {
  return { panelbearid: process.env.PANELBEAR_ID }
}

export default MyApp