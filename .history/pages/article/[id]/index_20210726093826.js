import { useRouter } from "next/dist/client/router";

const article = ()  => {
    const router = useRouter();
    const {id} = router.query;
    
    return <div>This is an article</div>
}
export default article;