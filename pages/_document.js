import Document, { Html, Head, Main, NextScript } from 'next/document'
import Footer from './components/Footer'
import Navbar from './components/Navbar';

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter&family=Lato&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Navbar />
                    <Main />
                    <NextScript />
                </body>
                <footer className="">
                    <Footer />
                </footer>
            </Html>
        )
    }
}

export default MyDocument