// import React from 'react';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import SearchIcon from '@mui/icons-material/Search';
// import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
// import MailOutlineIcon from '@mui/icons-material/MailOutline';
// import Person2Icon from '@mui/icons-material/Person2';
// import './header.css'

// function Header() {
//   return (
//     <div className='header'>
//         <div className='left'>
//             <ArrowBackIcon className='head_ico'/>
//             <span className='supply'>Supply Chain</span>
//         </div>
//         <div className='right'>
//             <SearchIcon className='head_ico'/>
//             <NotificationsNoneIcon className='head_ico'/>
//             <MailOutlineIcon className='head_ico'/>
//             <Person2Icon className='head_ico'/>
//         </div>
//     </div>
//   )
// }

// export default Header
import * as React from 'react';
import Badge from '@mui/material/Badge';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import './header.css'

function Header() {
  return (
    <div className="header">
      <div className="left_icon">
        <ArrowBackIcon  />
        <span className="supply">Supply Chain</span>
      </div>

      <div className="icons">
        <div className='main_icons'>
          <SearchIcon />
        </div>
        <div className='main_icons'>
          <Badge badgeContent={2} color="secondary">
            <NotificationsActiveIcon />
          </Badge>
        </div>

        <div className='main_icons'>
          <Badge badgeContent={4} color="primary">
            <EmailIcon />
          </Badge>
        </div>
        <div className='main_icons'>
          <PersonIcon />
        </div>
      </div>
    </div>
  );
}

export default Header