import React from "react";
import Contactslist from "../../components/Contacts/ContactsList";
import SearchBar from "../../components/SearchBar/SearchBar";
import Settings from "../../components/Settings/Settings";
import ProfileView from "../../components/ProfileView/ProfileView";
import Chat from "../../components/Chat";
import SideBar from "../../components/SideBar/SideBar"
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