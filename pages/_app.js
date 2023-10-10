import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (<><h1>HEADER</h1><Component {...pageProps} /></>)
}

export default MyApp
