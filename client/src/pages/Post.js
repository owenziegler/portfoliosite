import "../styles/styles.css"
import {useLocation} from 'react-router-dom'
import {DateParser} from "../utils.js"
const Post = () => {
    const location = useLocation()
    const {post} = location.state || {}
    return (
        <div className="content">
            <h2>{post.title}</h2>
            <h3>Posted {DateParser(post.date)} by {post.author}</h3>
            <p>{post.body}</p>
        </div>
    )
}

export default Post