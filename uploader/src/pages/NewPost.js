import '../styles/styles.css'
import {useState} from 'react'

const NewPost = () => {
    //state vars
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [body, setBody] = useState('')
    const [images, setImages] = useState([])
    //change handlers
    const handleTitleChange = (e) => setTitle(e.target.value)
    const handleAuthorChange = (e) => setAuthor(e.target.value)
    const handleBodyChange = (e) => setBody(e.target.value)
    const handleImagesChange = (e) => setImages(e.target.files)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = JSON.stringify({
            title: title,
            author: author,
            body: body
        })
        try {
            console.log(data)
            const response = await fetch('/api/posts', {
                method: 'POST',
                //specifying that we're sending json data
                headers: {
                    'Content-Type': 'application/json'
                },
                body: data
            })
            console.log("testing")
            //convert response to json
            const responseJson = await response.json()
            const id = responseJson._id
            console.log(id)
            //create associated folder in public/images
            await fetch('/public/images', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                //use the ID that we just got from the response
                body: JSON.stringify({id: id})
            })
            //upload images
            const formData = new FormData()
            Array.from(images).forEach((image) => (formData.append('images', image)))
            await fetch(`/public/images/${id}`, {
                method: 'POST',
                body: formData
            })
        }
        catch(err) {
            console.log(err.message)
        }
    }
    return (
        <div className="content">
            <form onSubmit={handleSubmit}>
                <label>
                    Title: <input
                        type='text'
                        placeholder='Title'
                        value={title}
                        onChange={handleTitleChange}
                    />
                </label>
                <br/>
                <label>
                    Author: <input
                        type='text'
                        placeholder='Author'
                        value={author}
                        onChange={handleAuthorChange}
                    />
                </label>
                <br/>
                <textarea
                    placeholder='Body'
                    value={body}
                    onChange={handleBodyChange}
                />
                <br/>
                <label>
                    Images: <input
                        type='file'
                        multiple
                        onChange={handleImagesChange}
                    />
                </label>
                <button type='submit'>Submit</button>
                <button type='reset'>reset</button>
            </form>
        </div>
    )
}
export default NewPost