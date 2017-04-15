import { EventEmitter } from "events";

class ChatStore extends EventEmitter {
  constructor () {
    super();
    this.chats = [
      {
        id: 1,
        username: "Jinouk",
        text: "Hey there!"
      },
      {
        id: 2,
        username: "Jinwoo",
        text: "Yo"
      }
    ];
  }

  createChat(bundle) {
    this.chats.push({
      id: bundle.id,
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
window.chatStore = chatStore;
export default chatStore;