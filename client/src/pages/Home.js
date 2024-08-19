import PostPreview from "../components/PostPreview"
import "../styles/styles.css"
import {useEffect, useState} from 'react'

const images = ["img0","img1","img2"]
const Home = () => {
    const [posts, setPosts] = useState(null)
    const [images, setImages] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch("/api/posts")
            const json = await response.json()
            if(response.ok) {
                setPosts(json)
                setLoading(false)
            }
        }
        fetchPosts()
    },[])
    useEffect(() => {
        const fetchImages = async () => {
            const response = await fetch("/public/images/001")
            const json = await response.json()
            if(response.ok) {
                setImages(json)
            }
        }
        fetchImages()
    },[])
    return (
        <div className="content">
            <h2>Home</h2>
            <p>Welcome to my website.</p>
            <br/>
            {loading ? <p>Loading posts...</p> : posts.map((post) => (<PostPreview key={post._id} post={post}/>))}
        </div>
    )
}
export default Home