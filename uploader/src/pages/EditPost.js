import {useEffect, useState} from 'react'

import '../styles/styles.css'
const EditPost = () => {
    //state vars
    const [id, setId] = useState('')
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [body, setBody] = useState('')
    //form change handlers
    const handleIdChange = (e) => setId(e.target.value)
    const handleTitleChange = (e) => setTitle(e.target.value)
    const handleAuthorChange = (e) => setAuthor(e.target.value)
    const handleBodyChange = (e) => setBody(e.target.value)
    //ID submit handler
    const handleIDSubmit = async (e) => {
        e.preventDefault()
        try {
            //fetch the specified post
            const response = await fetch(`api/posts/${id}`)
            //convert to json
            const json = await response.json()
            //populate form
            setTitle(json.title)
            setAuthor(json.author)
            setBody(json.body)
        }
        catch(err) {
            console.log(err.message)
        }
    }
    //edit submit handler
    const handleEditSubmit = async () => {
        try {
            //construct the JSON for the patch
            const data = JSON.stringify ({
                title: title,
                author: author,
                body: body
            })
            await fetch(`api/posts/${id}`, {
                method: 'PATCH',
                //specifying that we're sending json data
                headers: {
                    'Content-Type': 'application/json'
                },
                body: data
            })
        }
        catch(err) {
            console.log(err.message)
        }
    }
    return (
        <div className='content'>
            <form onSubmit={handleIDSubmit}>
                <label>
                    ID of the post you want to edit: <input
                        type='text'
                        placeholder='id goes here'
                        value={id}
                        onChange={handleIdChange}
                    />
                </label>
                <br/>
                <button type='reset'>Reset</button>
                <button type='submit'>Submit</button>
            </form>
            <br/>
            <form onSubmit={handleEditSubmit}>
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
                <button type='submit'>Submit</button>
                <button type='reset'>reset</button>
            </form>
        </div>
    )
}
export default EditPost