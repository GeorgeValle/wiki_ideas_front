
import { useParams } from "react-router-dom";
import './Articles.css';
import Article from '../components/Article.jsx';

const Articles = () =>{
    const {id} = useParams();
    return (
        <>
        {!id
        ?<p>Not Article</p>
        :<Article></Article>
        }
        </>
    )

}

export default Articles;