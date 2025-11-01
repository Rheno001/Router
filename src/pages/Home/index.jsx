import React from 'react'
import Bull from '../../assets/bull.png'
import Icon from '../../assets/dashicons.png'

function index() {
  return (
    <div>
      <div className='bg-[#000113] h-279 w-360'>
        <div className=' grid justify-items-end mr-50 pt-10 -mb-30 font-bold text-4xl bg-[linear-gradient(90deg,#FF3BFF_0%,#ECBFBF_25.6%,#D94FD5_52.1%,#ECBFBF_74.1%,#5C24FF_100%)] bg-clip-text text-transparent'>The Future is Now. <br />Be Bullish on Web3</div>
        <div>
          <div className=''><img className='w-247 h-201 mt-51 ml-50' src={Bull} alt="" /></div>
          <div className='grid justify-items-end mr-15 -mt-50'>
            <img className='w-12 h-12 mr-4' src={Icon} alt="" />
            <p className='w-28 h-9 -mr-12 tracking-wide font-bold text-2xl bg-[linear-gradient(90deg,#FF3BFF_0%,#ECBFBF_25.6%,#D94FD5_52.1%,#ECBFBF_74.1%)] bg-clip-text text-transparent'>900+</p>
            <p className='text-white -mr-5'>users onboarded</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index