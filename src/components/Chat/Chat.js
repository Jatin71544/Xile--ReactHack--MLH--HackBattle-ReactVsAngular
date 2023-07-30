import React from "react";
import "./Chat.css";
import { AttachFile, MoreVert, SearchOutlined } from "@material-ui/icons";
import { Avatar, IconButton } from "@material-ui/core";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";

function Chat() {
  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar src="spacestation.jpg" />

       <div className="chat_headerInfo">
          <h3>Haker Battle React vs Angular</h3>
          <p>online</p>
       </div>

       <div className="chat_headerRight">
         <IconButton>
           <SearchOutlined />
         </IconButton>   
         <IconButton>
           <AttachFile />
         </IconButton>
         <IconButton>
           <MoreVert />
         </IconButton>
       </div>
      </div>

       <div className="chat_body">
        <p className="chat_message">
          <span className="chat_name">Angular</span>
          Hello bro, haven't seen you lately..
          <span className="chat_timestamp">
           {new Date().toUTCString()}
          </span>
        </p>

        <p className="chat_message chat_reciever">
          <span className="chat_name">React</span>
          Hello bro, haven't seen you lately..
          <span className="chat_timestamp">
           {new Date().toUTCString()}
          </span>
        </p>

        <p className="chat_message">
          <span className="chat_name">Angular</span>
          Hello bro, haven't seen you lately..
          <span className="chat_timestamp">
           {new Date().toUTCString()}
          </span>
        </p>

        <p className="chat_message">
          <span className="chat_name">Angular</span>
          Hello bro, haven't seen you lately..
          <span className="chat_timestamp">
           {new Date().toUTCString()}
          </span>
        </p>

        <p className="chat_message">
          <span className="chat_name">Angular</span>
          Hello bro, haven't seen you lately..
          <span className="chat_timestamp">
           {new Date().toUTCString()}
          </span>
        </p>

        <p className="chat_message chat_reciever">
          <span className="chat_name">React</span>
          Hello bro, haven't seen you lately..
          <span className="chat_timestamp">
           {new Date().toUTCString()}
          </span>
        </p>

        <p className="chat_message">
          <span className="chat_name">Angular</span>
          Hello bro, haven't seen you lately..
          <span className="chat_timestamp">
           {new Date().toUTCString()}
          </span>
        </p>

        <p className="chat_message chat_reciever">
          <span className="chat_name">React</span>
          Hello bro, haven't seen you lately..
          <span className="chat_timestamp">
           {new Date().toUTCString()}
          </span>
        </p>
       </div>
       <div className="chat_footer">
        <InsertEmoticonIcon />
          <form>
           <input
             placeholder="Type a message"
             type="text" />
           <button
             type="submit">
              Send a message
            </button>
          </form>
          <MicIcon />
       </div>
    </div>
  );
}

export default Chat;