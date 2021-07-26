import { articles } from "../../../data";


export default function handler ({query: {id}}, res)  {
    res.status(200).json(articles);
}