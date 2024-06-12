import {BrowserRouter,Routes,Route} from 'react-router-dom'
//pages
import Home from "./pages/Home"
import Resume from "./pages/Resume"
import Programming from "./pages/Programming"
import Engineering from "./pages/Engineering"
import Gamedev from "./pages/Gamedev"
//components
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className="pages">
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
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
