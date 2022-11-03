import Home from "./components/Home"
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import AuthorQuotes from "./components/AuthorQuotes"

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/author/:author" element={<AuthorQuotes/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
