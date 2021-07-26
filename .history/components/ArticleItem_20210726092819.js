import Link from "next/link";
import articleStyles from '../styles/Article.module.css'

const ArticleItem = ({article}) => {
    return (
        <Link htef="/article/[id]" as="{`/article/${article.id}`">
            <a className={articleStyles.card}></a>
        </Link>
    )
 }

export default ArticleItem;