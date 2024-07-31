import "../styles/styles.css"
import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {DateParser} from "../utils.js"
const Post = () => {
    const {id} = useParams()
    console.log(id)
    const [post, setPost] = useState(null)
    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch("/api/posts/"+id)
            const json = await response.json()
            if(response.ok) {
                setPost(json)
            }
        }
        fetchPosts()
    },[])
    return (
        post ? (
            <div className="content">
                <h2>{post.title}</h2>
                <h3>Posted by {post.author}</h3>
                <p>{post.body}</p>
            </div>
        ) :
        (
            <div className="content">
                <p>no post found</p>
            </div>
        )
    )
}

export default Post