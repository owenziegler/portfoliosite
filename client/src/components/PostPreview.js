import {Link} from 'react-router-dom'
import {StringShortener,DateParser} from "../utils.js"
import '../styles/postPreview.css'

const PostPreview = ({post}) => {
    return (
        <div className='preview-box'>
            <h2><Link to={"/post/"+post.id} state={{post:post}}>{post.title}</Link></h2>
            <h3>Posted {DateParser(post.date)} by {post.author}</h3>
            <p>{StringShortener(post.body)}</p>
        </div>
    )
}
export default PostPreview