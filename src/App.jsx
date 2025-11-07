import Navbar from '../src/components/Navbar'
import ProtectedRoute from './components/ProtectedRoute'
import Footer from './components/Footer'
import FooterBg from './components/Footer-bg'
import Home from '../src/pages/Home'
import About from '../src/pages/About'
import Explore from '../src/pages/Explore'
import NewsLetter from '../src/pages/NewsLetter'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Partners from '../src/pages/Partners'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Explore' element={<Explore />}/>
        <Route path='/Partners' element={<Partners />}/>  
        <Route path='/NewsLetter' element={<NewsLetter />}/>
        <Route path='/Login' element={<Login />}/>
        <Route path='/Dashboard' element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
      </Routes>
      <Footer/>
      <FooterBg/>
      

    </>
  )
}

export default App
