/*
Programming.js

description:
    this is the page that displays all the programming-related posts.
*/
import {useState, useEffect} from 'react'
import PostPreview from '../components/PostPreview'
const Programming = () => {
    const [posts, setPosts] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch ('/api/posts')
            const json = await response.json()
            if(response.ok) {
                const filteredPosts = json.filter(post => post.category === 'programming')
                setPosts(filteredPosts)
                setLoading(false)
            }
        }
        fetchPosts()
    },[])
    return (
        <div className="content">
            <h2>Programming</h2>
            <p>
                All my programming projects are listed below.
            </p>
            {loading ? <p>loading posts...</p> : posts.map((post) => (<PostPreview key={post._id} post={post}/>))}
        </div>
    )
}
export default Programming