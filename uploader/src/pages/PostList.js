import {useState, useEffect} from 'react'
import '../styles/styles.css'

const PostList = () => {
    const [posts, setPosts] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('api/posts')
            const json = await response.json()
            if(response.ok) {
                setPosts(json)
                setLoading(false)
            }
        }
        fetchPosts()
    },[])
    return (
        <div className='content'>
            <p>post list below</p>
            {
                loading ?
                <p>Loading post list...</p>
                :
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Date Posted</th>
                                <th>ID</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                posts &&
                                posts.map((post) => (
                                    <tr key={post._id}>
                                        <td>{post.title}</td>
                                        <td>{new Date(post.createdAt).toLocaleString()}</td>
                                        <td>{post._id}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            }
        </div>
    )
}

export default PostList