import PostPreview from "../components/PostPreview"
import "../styles/styles.css"
const Home = () => {
    return (
        <div className="content">
            <h2>Home</h2>
            <p>Welcome to my website.</p>
            <br/>
            <PostPreview/>
            <PostPreview/>
        </div>
    )
}
export default Home