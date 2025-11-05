import React from 'react'
import {Link} from 'react-router-dom'

 

function Navbar() {
  return (
    <div>
        <ul className='flex'>
            <li className='text-red-400'><Link to='/'>Home</Link></li>
            <li className='text-red-400'><Link to='/About'>About</Link></li>
            <li className='text-red-400'><Link to='/Explore'>Explore</Link></li>
            <li className='text-red-400'><Link to='/NewsLetter'>NewsLetter</Link></li>
        </ul>
    </div>
  )
}

export default Navbar