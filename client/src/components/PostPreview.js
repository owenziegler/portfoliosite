import {Link} from 'react-router-dom'
import {StringShortener,DateParser} from "../utils.js"
import '../styles/postPreview.css'

const PostPreview = ({post}) => {
    return (
        <div className='preview-box'>
            <h2><Link to={"/post/"+post._id}>{post.title}</Link></h2>
            <h3>Posted {DateParser(post.createdAt)} by {post.author}</h3>
            <p>{StringShortener(post.body)}</p>
        </div>
    )
}
export default PostPreview