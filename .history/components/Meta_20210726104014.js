import Head from 'next/head';

const Meta = ( {title, keywords, description}) => {
    <Head>
        <meta name='viewport'></meta>
    </Head>
} 

Meta.defaultProps = {
    title: 'WebDev Newz',
    keywords: 'web development, programming',
    description: 'Get latest news in web dev.'
}
export default Meta;