import '../styles/globals.css'
import Head from 'next/head'
import { usePanelbear } from '@panelbear/panelbear-nextjs';

function MyApp({ Component, pageProps }) {
  usePanelbear('7gYP029r3oW', {
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

export default MyApp
