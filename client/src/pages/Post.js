import "../styles/styles.css"
import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {DateParser} from "../utils.js"
const Post = () => {
    const {id} = useParams()
    console.log(id)
    const [post, setPost] = useState(null)
    const [images, setImages] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const postResponse = await fetch(`/api/posts/${id}`)
                const postJson = await postResponse.json()
                setPost(postJson)
                const imagesResponse = await fetch(`/public/images/${id}`)
                const imagesJson = await imagesResponse.json()
                setImages(imagesJson)
            }
            catch(error) {
                
            }
            finally {
                setLoading(false)
            }
        }
        fetchData()
    },[id])
    return (
        post ? (
            <div className="content">
                <h2>{post.title}</h2>
                <h2>{post._id}</h2>
                <h3>Posted {DateParser(post.createdAt)} by {post.author}</h3>
                <p>{post.body}</p>
                <h3>Images gallery</h3>
                {
                    images &&
                    images.map((image) => (<img key={image} src={`${process.env.REACT_APP_API_URL}/public/images/${id}/${image}`} alt={image}/>))
                }
            </div>
        ) :
        (
            <div className="content">
                <p>Loading post...</p>
            </div>
        )
    )
}

export default Post