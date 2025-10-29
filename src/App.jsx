import Navbar from '../src/components/Navbar'
import Home from '../src/pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>

    </>
  )
}

export default App
