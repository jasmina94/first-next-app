import Head from 'next/head'
import Image from 'next/image'

export default function Home({articles}) {
  return (
    <div>
      <Head>
        <title>WebDev Newz</title>
        <meta name='keywords'/>
      </Head>
      
      {articles.map((article) => (
        <h3>{article.title}</h3>
      ))}
    </div>
  )
}


export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);
  const articles = await res.json();
  return {
    props: {
      articles
    }
  }
}