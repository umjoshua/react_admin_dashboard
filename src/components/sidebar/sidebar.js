import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import WindowIcon from '@mui/icons-material/Window';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ChatIcon from '@mui/icons-material/Chat';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import './sidebar.css';


function SideBarItem({ icon, text, Link }) {
    return (
        <li className='item' id={window.location.pathname === Link ? "active" : ""} onClick={() => {
            window.location.pathname = Link;
        }}>
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
                    <SideBarItem icon={<HomeIcon />} text="Dashboard" Link="/" />
                    <SideBarItem icon={<WindowIcon />} text="Trucks" Link="/trucks" />
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