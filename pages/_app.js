import '../styles/globals.css'
import Footer from '../components/Footer'
import {SessionProvider} from 'next-auth/react'
import Router from 'next/router';

function MyApp({ Component, pageProps }) {

  return <SessionProvider session={pageProps.session}>
    <Component {...pageProps}/>
    {Router.pathname !== "/" ? <Footer /> : <></>}
  </SessionProvider> 
}

export default MyApp
