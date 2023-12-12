import React from 'react'
import attach from '../images/paperclip.svg'
import emojis from '../images/emoji-smile.svg'
import img from '../images/images.svg'

const MessageInput = () => {

    return(
        <div className="message-input">
            <img className="emoji-button" src={emojis} alt="emoji button"/>
            <input type="text" placeholder="Message"/>
            <div className="send">
                <img src={attach} alt="attaching button"/>
                <input type="file" style={{display: "none"}} id="file"/>
                <label htmlFor="file">
                    <img src={img} alt=""/>
                </label>
                <button>Send</button>
            </div>
        </div>
    )
}

export default MessageInput;