import React from 'react';
import "./SidebarChats.css";
import { Avatar } from '@material-ui/core';
import "./zayn.png";

function SidebarChats() {
  return (
    <div>
    <div className="sidebarChats">
      <Avatar />
      <div className="sidebarChats_info">
        <h2>React</h2>
        <p>Busy</p>
      </div>
    </div>

    <div className="sidebarChats">
      <Avatar />
      <div className="sidebarChats_info">
        <h2>Angular</h2>
        <p>online</p>
      </div>
    </div>

    <div className="sidebarChats">
      <Avatar src="zayn.png" />
      <div className="sidebarChats_info">
        <h2>Zayn</h2>
        <p>Listening to music</p>
      </div>
    </div>
    
    </div>
  )
}

export default SidebarChats