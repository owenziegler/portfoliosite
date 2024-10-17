/*
Home.js

description:
    this is the page that introduces the user to the website, and holds links to my resume and other relevant items and profiles.
*/
import PostPreview from "../components/PostPreview"
import "../styles/styles.css"
import {useEffect, useState} from 'react'
import { getApiUrl } from "../utils"
const Home = () => {
    const apiUrl = getApiUrl()
    const [posts, setPosts] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`${apiUrl}/api/posts`)
            const json = await response.json()
            if(response.ok) {
                //if in a non-production environment, hidden dev posts are displayed
                const allowedCategories = (process.env.NODE_ENV === 'production') ? ['home'] : ['home','dev']
                //filter posts down to allowed categories
                const filteredPosts = json.filter(post => allowedCategories.includes(post.category))
                setPosts(filteredPosts)
                setLoading(false)
            }
        }
        fetchPosts()
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