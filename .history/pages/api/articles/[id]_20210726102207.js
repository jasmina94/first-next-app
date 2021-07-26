import { articles } from "../../../data";

export default function handler ({query: {id}}, res)  {
    const filtered = articles.filter(x => x.id === id);
    res.status(200).json(articles);
}