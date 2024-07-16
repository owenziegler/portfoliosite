import PostPreview from "../components/PostPreview"
import "../styles/styles.css"
const Home = () => {
    return (
        <div className="content">
            <h2>Home</h2>
            <p>Welcome to my website.</p>
            <br/>
            <PostPreview
                post={{title:"Example Title",
                author:"Owen Ziegler",
                date:"20020413",
                text:"The North Wind and the Sun were disputing which was the stronger, when a traveler came along wrapped in a warm cloak. They agreed that the one who first succeeded in making the traveler take his cloak off should be considered stronger than the other. Then the North Wind blew as hard as he could, but the more he blew the more closely did the traveler fold his cloak around him; and at last the North Wind gave up the attempt. Then the Sun shined out warmly, and immediately the traveler took off his cloak. And so the North Wind was obliged to confess that the Sun was the stronger of the two."}}
            />
        </div>
    )
}
export default Home