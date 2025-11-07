import Navbar from '../src/components/Navbar'
import ProtectedRoute from './components/ProtectedRoute'
import Footer from './components/Footer'
import Home from '../src/pages/Home'
import About from '../src/pages/About'
import Explore from '../src/pages/Explore'
import NewsLetter from '../src/pages/NewsLetter'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Explore' element={<Explore />}/>
        <Route path='/NewsLetter' element={<NewsLetter />}/>
        <Route path='/Login' element={<Login />}/>
        <Route path='/Dashboard' element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
      </Routes>
      <Footer/>

    </>
  )
}

export default App
