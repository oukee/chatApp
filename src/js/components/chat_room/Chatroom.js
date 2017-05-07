import React from "react";

import Chat from "./Chat";
import ChatStore from "../../stores/ChatStore";
import ChatAction from "../../actions/ChatAction"

export default class Chatroom extends React.Component {
  constructor() {
    super();


    this.state = {
      chats: ChatStore.getAll(),
      myChat: ""
    }

    // Functions binding
    this.addMyChatToChatRoom = this.addMyChatToChatRoom.bind(this);
    this.updateChatroom = this.updateChatroom.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // Mounting 
  componentWillMount() {
    ChatStore.addRegisterChatListener(this.updateChatroom);
  }

  // Unmouting
  componentWillUnMount() {
    ChatStore.removeRegisterChatListener(this.updateChatroom);
  }

  handleChange(e) {
    this.setState({ myChat: e.target.value });
  }

  // 
  updateChatroom() {
    this.setState({ chats: ChatStore.getAll() });
  }

  addMyChatToChatRoom(username) {

    let myChat = this.state.myChat;

    ChatAction.registerChat({
      username: username,
      text: myChat
    });
  } 

  render() {

    const { chats } = this.state;
    const ChatComponents = chats.map((chat,index) => {
      return <Chat key={ index } { ...chat }/>;//React.createElement("Chat", { key: chat.id }, { ...chat });
      
    });
    const { username } = this.props.location.state;

    return (
      <div className="chat-room">
        <div > Welcome to Chatroom! { username }</div>
        <div>{ ChatComponents }</div>
        <input type="text" value={ this.state.myChat } onChange = { this.handleChange } />
        <div className="btn btn-warning" onClick={ () => this.addMyChatToChatRoom(username) }>Send</div>
      </div>
    );
  }
}