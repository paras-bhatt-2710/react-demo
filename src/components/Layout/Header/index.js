import React from 'react'
import logo from '../../../assets/images/logo.png'
import userAvatar from '../../../assets/images/user-avatar.svg'
import { TbBell } from 'react-icons/tb'
import { BsChevronDown } from 'react-icons/bs'

function MainHeader() {
  return (
    <header className='main-header'>
      <div className='logo-wrapper'>
          <img src={logo} alt="" />
      </div>
      <div className='user-profile'>
        <div className='user-notifications'>
            <a href="javascript:void(0)"><TbBell size={24} className="mx-3" /></a>
        </div>
        <div className='user-name'>
            <img src={userAvatar} alt="" className='mx-2' />
            <span className='user-text'>Hello, Cameron</span>
            <BsChevronDown size={14} className='ms-2' />
        </div>
      </div>
    </header>
  )
}

export default MainHeader