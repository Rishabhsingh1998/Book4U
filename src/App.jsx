
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Blog from './Components/Blog'
import Novels from './Components/Novels'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Horrors  from './Components/Horrors'
import Login from './Components/Login'
import Signin from './Components/Signin'
import Cart from './Components/Cart'

function App() {

  return (
    <>
      <BrowserRouter>

        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/Blog' element={<Blog />} />
          <Route path='/Novels' element={<Novels />} />
          <Route path='/Horrors' element={<Horrors/>} />
          <Route path='/Login' element={<Login/>} />
          <Route path='/Signin'  element={<Signin />}/>
          <Route path='/Cart' element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
