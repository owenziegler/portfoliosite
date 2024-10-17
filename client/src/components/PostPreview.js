/*
PostPreview.js

description:
PostPreview takes a post object and displays a preview of the post with a link to its page.
*/
import {Link} from 'react-router-dom'
import {stringShortener,dateParser} from "../utils.js"
import '../styles/postPreview.css'
const PostPreview = ({post}) => {
    return (
        <div className='preview-box'>
            <h2><Link to={"/post/"+post._id}>{post.title}</Link></h2>
            <h3>
                Posted {dateParser(post.createdAt)} by {post.author}
                {
                    (post.createdAt != post.updatedAt) ?
                    <div>Last updated {dateParser(post.updatedAt)}</div> : null
                }
            </h3>
            <p>{stringShortener(post.body)}</p>
        </div>
    )
}
export default PostPreview