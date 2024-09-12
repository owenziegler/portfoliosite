/*
Gamedev.js

description:
    this is the page that displays all the gamedev-related posts.
*/
import {useState, useEffect} from 'react'
import PostPreview from '../components/PostPreview'
import { getApiUrl } from '../utils'
const Gamedev = () => {
    const apiUrl = getApiUrl()
    const [posts, setPosts] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch (`${apiUrl}/api/posts`)
            const json = await response.json()
            if(response.ok) {
                const filteredPosts = json.filter(post => post.category === 'gamedev')
                setPosts(filteredPosts)
                setLoading(false)
            }
        }
        fetchPosts()
    },[])
    return (
        <div className="content">
            <h2>Game Development</h2>
            <p>The game development portion of this website is under construction. Please check back soon!</p>
            {/*
            <p>
                All my game development projects are listed below.
            </p>
            {loading ? <p>Loading posts...</p> : posts.map((post) => (<PostPreview key={post._id} post={post}/>))}
            */}
        </div>
    )
}
export default Gamedev