import { useRouter } from "next/router";
import { server } from '../../../config';
import Meta from "../../../components/Meta";
import Link from "next/link";

const article = ({ article }) => {
    // const router = useRouter();
    // const {id} = router.query;

    return (
        <>
            <Meta title={article.title} />
            <h1>{article.title}</h1>
            <p>{article.body}</p>
            <br />
            <Link href='/'>Go back</Link>
        </>
    )
}

export const getStaticProps = async (context) => {
    const res = await fetch(
        `${server}/api/articles/${context.params.id}`
    );
    const article = await res.json();

    return {
        props: {
            article
        }
    }
}

// export const getStaticProps = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
//     const article = await res.json();

//     return {
//         props: {
//             article
//         }
//     }
// }

// Generisanje svih putanja na osnovu podataka koje smo povukli staticki
export const getStaticPaths = async () => {
    //const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const res = await fetch(`${server}/api/articles`);
    const articles = await res.json();
    const ids = articles.map((article) => article.id);
    const paths = ids.map((id) => ({ params: { id: id.toString() } }));

    return {
        paths,
        fallback: false  //404 
    }

    // return {
    //     paths: {params: {id: '1', id: '2'...}}
    // }
}

export default article;