import {BrowserRouter,Routes,Route} from 'react-router-dom'
//pages
import Home from "./pages/Home"
import Resume from "./pages/Resume"
import Programming from "./pages/Programming"
import Engineering from "./pages/Engineering"
import Gamedev from "./pages/Gamedev"
import Post from "./pages/Post"
//components
import Navbar from "./components/Navbar"
//styles
import "./styles/styles.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
                  path = "/post/*"
                  element={<Post/>}
                />
              </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
