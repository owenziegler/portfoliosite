/*
Post.js

description:
    this page is populated by data retrieved from the server. it reads the ID of the post from the current URL, fetches the post as a JSON
    from the server, and then populates the data fields. It also fetches the names of the images associated with the post from the server,
    then calls those images using <img/>.
*/
import "../styles/styles.css"
import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {dateParser,getApiUrl} from "../utils.js"
import Markdown from 'react-markdown'

const Post = () => {
    const apiUrl = getApiUrl()
    const {id} = useParams()
    //console.log(id)
    const [post, setPost] = useState(null)
    const [images, setImages] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const postResponse = await fetch(`${apiUrl}/api/posts/${id}`) //fetch post
                const postJson = await postResponse.json() //convert to json
                setPost(postJson)
                //commmented out until image functionality can be fixed
                /*
                const imagesResponse = await fetch(`${apiUrl}/public/images/${id}`) //fetch image names
                const imagesJson = await imagesResponse.json() //convert to json
                setImages(imagesJson)
                */
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
                <h3>
                    Posted {dateParser(post.createdAt)} by {post.author}
                    {
                        (post.createdAt != post.updatedAt) ?
                        <div>Last updated {dateParser(post.updatedAt)}</div> : null
                    }
                </h3>
                <Markdown>{post.body}</Markdown>
                {/*
                <h3>Images gallery</h3>
                {
                    images &&
                    images.map((image) => (<img key={image} src={`${apiUrl}/public/images/${id}/${image}`} alt={image}/>))
                }
                */}
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