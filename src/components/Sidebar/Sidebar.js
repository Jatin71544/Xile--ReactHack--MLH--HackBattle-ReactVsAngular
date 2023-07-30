import React from "react";
import "./Sidebar.css";
import SidebarChats from "./SidebarChats";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { Avatar, IconButton } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat"; 
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { SearchOutlined } from "@material-ui/icons";
import "./moonguy.jpg"

/* import FilterListIcon from '@material-ui/icons/FilterList';
import SearchIcon from '@material-ui/icons/Search';
import MicNoneIcon from '@material-ui/icons/MicNone';
import AddIcon from '@material-ui/icons/Add';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
*/

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
         <Avatar src="https://unsplash.com/photos/e5eDHbmHprg" />
       <div className="sidebar_headerRight">
         <IconButton> 
           <DonutLargeIcon />
         </IconButton>
         <IconButton>
           <ChatIcon />
         </IconButton>
         <IconButton>
          <MoreVertIcon />
         </IconButton>
        </div>
      </div>

      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
          <SearchOutlined />
          <input placeholder="Search or start a new chat" type="text" />
        </div>
      </div>

      <div className="sidebar_chats">
        <SidebarChats />
        <SidebarChats />
        <SidebarChats />
      </div>
    </div>
  );
}

export default Sidebar;