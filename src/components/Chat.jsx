import React from "react";
import add from "../images/person-fill-add.svg"
import more from "../images/three-dots.svg"
import Messages from "../components/Messages"
import MessageInput from "./MessageInput";
const Chat = () => {

    return (
        <div className="chat">
            <div className="chatInfo">
                <div className="getUsername">username</div>
                <div className="chatIcons">
                    <img src={add} alt="add new contact" width="45px" />
                    <img src={more} alt="more details" width="40px"/>
                </div>
            </div>
            <Messages/>
            <MessageInput />
        </div>
    );
};
export default Chat