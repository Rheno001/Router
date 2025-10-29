import React from 'react'
import {Link} from 'react-router-dom'

 

function Navbar() {
  return (
    <div>
        <ul className='flex'>
            <li className='text-red-400'><Link to='/'>Testing</Link></li>
            <li className='text-red-400'><Link to='/About'>Second</Link></li>
        </ul>
    </div>
  )
}

export default Navbar