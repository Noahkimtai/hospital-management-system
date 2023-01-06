import React from 'react'
import "./topbar.css"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';

const Topbar = () => {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topLeft">
            <Link to="/" className="logoLink">
                <span className="logo">                    
                    <img src={require("../../img/HealthCareLogo.png")} />
                </span>
            </Link>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                    <NotificationsNoneIcon className='icon'/>
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <LanguageIcon className='icon'/>
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <SettingsIcon className='icon'/>
                </div>
                <img src="https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg?w=2000" alt="" className="topAvator" />
            </div>
        </div>
    </div>
  )
}

export default Topbar