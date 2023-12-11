import React from "react";
import Contactslist from "../../components/ContactsList";
import SearchBar from "../../components/SearchBar";
import Settings from "../../components/Settings";
import ProfileView from "../../components/ProfileView";
import Chat from "../../components/Chat";
import SideBar from "../../components/SideBar"
import "./ChatPage.css"

const ChatPage = () => {
 return (
     <>
      <div className="chat-page">
       <div className="container-chat">
        <SideBar />
        <Chat />
       </div>
      </div>

     </>

 );
};

export default ChatPage;