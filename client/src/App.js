import {BrowserRouter,Routes,Route} from 'react-router-dom'
//pages
import Home from "./pages/Home"
import Resume from "./pages/Resume"
import Programming from "./pages/Programming"
import Engineering from "./pages/Engineering"
import Gamedev from "./pages/Gamedev"
import Post from "./pages/Post"
import ScrollToTop from './components/ScrollToTop'
//components
import Navbar from "./components/Navbar"

//styles
import "./styles/styles.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop/>
        <div><Navbar/></div>
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={<Home/>}
            />
            <Route
              path = "/resume"
              element={<Resume/>}
            />
            <Route
              path = "/programming"
              element={<Programming/>}
            />
            <Route
              path = "/engineering"
              element={<Engineering/>}
            />
            <Route
              path = "/gamedev"
              element={<Gamedev/>}
            />
            <Route
              path = "/post/:id"
              element={<Post/>}
            />
          </Routes>
        </div>
        <footer>Copyright Owen Ziegler 2024. All rights reserved.</footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
