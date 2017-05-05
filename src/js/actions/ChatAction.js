var ChatDispatcher = require('../dispatcher/ChatDispatcher');
var ChatRoomConstants = require('../constants/ChatConstant');

var ChatActions = {
  registerChat: function( data ){
    ChatDispatcher.handleViewAction({
      actionType: ChatRoomConstants.REGISTER_CHAT,
      data: data
    })
  }
}

module.exports = ChatActions;
