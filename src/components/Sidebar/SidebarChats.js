import React from 'react';
import "./SidebarChats.css";
import { Avatar } from '@material-ui/core';

function SidebarChats() {
  return (
    <div className="sidebarChats">
      <Avatar />
      <div className="sidebarChats_info">
        <h2>Room name</h2>
        <p>this is my msg</p>
      </div>
    </div>
  )
}

export default SidebarChats