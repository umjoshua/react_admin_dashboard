import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Person2Icon from '@mui/icons-material/Person2';
import './header.css'

function Header() {
  return (
    <div className='header'>
        <div className='left'>
            <ArrowBackIcon className='header_icons'/>
            <span className='supply'>Supply Chain</span>
        </div>
        <div className='right'>
            <SearchIcon className='header_icons'/>
            <NotificationsNoneIcon className='header_icons'/>
            <MailOutlineIcon className='header_icons'/>
            <Person2Icon className='header_icons'/>
        </div>
    </div>
  )
}

export default Header
