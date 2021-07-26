import Layout from '../components/Layout';
import '../styles/globals.css'

//Wrapper about all Page components
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
 <Component {...pageProps} />
    </Layout>
   
  )
}

export default MyApp
