import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import WindowIcon from '@mui/icons-material/Window';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ChatIcon from '@mui/icons-material/Chat';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import './sidebar.css';
import { Link } from "react-router-dom";


function SideBarItem({ icon, text }) {
    return (
        <li className='item'>
            <span className="icon">{icon}</span>
            <span className="text">{text}</span>
        </li >
    )
}
function Sidebar() {

    return (
        <div className="sidebar">
            <div className="sidebar_main">
                <ul>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <SideBarItem icon={<HomeIcon />} text="Dashboard" />
                    </Link>
                    <Link to='trucks' style={{ textDecoration: 'none' }}>
                        <SideBarItem icon={<WindowIcon />} text="Trucks" />
                    </Link>
                    <SideBarItem icon={<ContentCopyIcon />} text="Supplies" />
                </ul>
                <span class="title">HELP</span>
                <ul>
                    <SideBarItem icon={<ChatIcon />} text="Terms" />
                    <SideBarItem icon={<ModeCommentIcon />} text="Support" />
                    <SideBarItem icon={<HelpOutlineIcon />} text="FAQ" />
                </ul>
                <span class="title">SETTINGS</span>
                <ul>
                    <SideBarItem icon={<UpgradeIcon />} text="Upgrade" />
                </ul>

            </div>
        </div>
    );
}

export default Sidebar