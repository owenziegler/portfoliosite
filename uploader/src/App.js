/*
  uploader program:
  this program is designed for use by the operator(s) of the website to upload, edit, and delete posts.
*/
//packages
import {BrowserRouter, Route, Routes} from 'react-router-dom'
//components
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
//pages
import PostList from './pages/PostList'
import NewPost from './pages/NewPost'
import EditPost from './pages/EditPost'
import DeletePost from './pages/DeletePost.js'
//styles

function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop/>
        <div><Navbar/></div>
        <div className="container">
          <Routes>
            <Route
              path = '/'
              element = {<PostList/>}
            />
            <Route
              path = '/new'
              element = {<NewPost/>}
            />
            <Route
              path = '/edit'
              element = {<EditPost/>}
            />
            <Route
              path = '/delete'
              element = {<DeletePost/>}
            />
          </Routes>
        </div>
        <footer>Copyright 2024 Owen Ziegler. all rights reserved.</footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
