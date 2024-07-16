import '../styles/postPreview.css'

const StringShortener = (str) => {
    const targetLen = 250 //target string length
    if (str.length <= targetLen) return str
    str = str.substring(0,targetLen)
    let i = str.lastIndexOf(' ')
    str = str.substring(0,i)
    str+="..."
    return str
}

const PostPreview = ({post}) => {
    return (
        <div className='preview-box'>
            <h2>{post.title}</h2>
            <h3>Posted {parseInt(post.date.substring(4,6),10).toString()}/{parseInt(post.date.substring(6,8),10).toString()}/{parseInt(post.date.substring(0,4),10).toString()} by {post.author}</h3>
            <p>{StringShortener(post.text)}</p>
        </div>
    )
}
export default PostPreview