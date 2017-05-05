import { EventEmitter } from 'events';
import ChatDispatcher from '../dispatcher/ChatDispatcher';
import ChatConstant from '../constants/ChatConstant'

class ChatStore extends EventEmitter {
  constructor () {
    super();
    this.chats = [];
  }

  registerChat(bundle) {
    this.chats.push({
      username: bundle.username,
      text: bundle.text
    });

    this.emit("change");
  }

  getAll() {
    return this.chats;
  }
}

const chatStore = new ChatStore;

ChatDispatcher.register(function(payload){
  switch(payload.chatAction){
    case ChatConstant.REGISTER_CHAT: 
      chatStore.registerChat(payload.data);
      break;
    default:
      break;
  }
});


window.chatStore = chatStore;
export default chatStore;