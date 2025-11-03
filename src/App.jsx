import Navbar from '../src/components/Navbar'
import Home from '../src/pages/Home'
import About from '../src/pages/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
      </Routes>

    </>
  )
}

export default App
