import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Signup from './components/Signup'
import Login from './components/Login'
import Home from'./components/Home'

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        <Route path="/home"element={<Home/>}></Route>
        <Route path="/signup"element={<Signup/>}></Route>
        <Route path="/login"element={<Login/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
