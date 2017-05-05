import { Dispatcher } from 'flux';

var ChatDispatcher = new Dispatcher();

ChatDispatcher.handleViewAction = function(payload) {
  this.dispatch({
    chatAction: payload.actionType,
    data: payload.data
  });
}

module.exports = ChatDispatcher;

