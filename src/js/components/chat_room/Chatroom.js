import React from "react";

import Chat from "./Chat";
import ChatStore from "../../stores/ChatStore";
import ChatAction from "../../actions/ChatAction"

export default class Chatroom extends React.Component {
  constructor() {
    super();
    this.state = {
      chats: ChatStore.getAll(),
    }
    this.myChat = "asdfasdf"; 

    // Functions binding
    this.updateChatroom = this.updateChatroom.bind(this);
    this.setMyChat = this.setMyChat.bind(this);
  }

  // Mounting 
  componentWillMount() {
    ChatStore.on("change", this.updateChatroom);
  }

  // Unmouting
  componentWillUnMount() {

  }

  // 
  addMyChatToChatRoom() {

  }

  // 
  setMyChat(e) {
    this.myChat = e.target.value;
    console.log(this.myChat);
  }

  // 
  updateChatroom() {
    this.setState({ chats: ChatStore.getAll() });
  }

  addMyChatToChatRoom() {
    ChatAction.registerChat({
      username: "Jinouk",
      text: "myChat"
    });
  }

  render() {

    const { chats } = this.state;
    const ChatComponents = chats.map((chat,index) => {
      return <Chat key={ index } { ...chat }/>;//React.createElement("Chat", { key: chat.id }, { ...chat });
      
    });
    console.log(this.props);
    const { username } = this.props.location.state;

    return (
      <div className="chat-room">
        <div > Welcome to Chatroom! { username }</div>
        <div>{ ChatComponents }</div>
        <input type="text" onChange={ this.setMyChat }/>
        <div className="btn btn-warning" onClick={ this.addMyChatToChatRoom }>Send</div>
      </div>
    );
  }
}