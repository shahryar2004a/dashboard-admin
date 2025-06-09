import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

import './Topbar.css'
export default function Topbar() {
  return (
    <div className='topbar'>
      <div className='topbarWrapper'>

        <div className="topLeft">
            <span className='logo'>Shahryar</span>
        </div>

        <div className="topRight">
            <div className="topbarIconContainer">
              <NotificationsIcon/>
              <span className='topIconBadge'>2</span>
            </div>
            <div className="topbarIconContainer">
              <LanguageIcon/>
              <span className='topIconBadge'>2</span>
            </div>
            <div className="topbarIconContainer">
              <SettingsIcon/>
              <span className='topIconBadge'>2</span>
            </div>
            <img className='topAvatar' src="images/profile.jfif" alt="" />

            
        </div>
      </div>
    </div>
  )
}
