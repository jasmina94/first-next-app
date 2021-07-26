import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>WebDev Newz</title>
        <meta name='keywords'/>
      </Head>
      <h1>Welcome to Next!</h1>
    </div>
  )
}


export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const articles = await res.json()
}