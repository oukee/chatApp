import React from "react";

import Chat from "../components/Chat";
import ChatStore from "../stores/ChatStore";

export default class Chatroom extends React.Component {
  constructor() {
    super();
    this.state = {
      chats: ChatStore.getAll(),
      myChat: ""
    }

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

  addMyChatToChatRoom() {

  }

  // 
  setMyChat(e) {
    this.setState({
      myChat: e.target.value
    });
  }

  // 
  updateChatroom() {
    this.setState({ chats: ChatStore.getAll() });
  }

  render() {

    const { chats } = this.state;

    const ChatComponents = chats.map((chat) => {
      return <Chat key={chat.id} {...chat}/>
    });
    console.log(this.props);
    const { username } = this.props.location.state;

    return (
      <div>
        <div> Welcome to Chatroom! { username }</div>
        <div>{ ChatComponents }</div>
        <input type="text" onChange={ this.setMyChat }/>
        <div className="btn btn-warning" onClick={ this.addMyChatToChatRoom }>Send</div>
      </div>
    );
  }
}