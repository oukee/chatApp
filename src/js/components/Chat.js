import React from "react";

export default class Chat extends React.Component {
  render() {
    const { username, text } = this.props;

    return(
      <div>
        <div> {username} </div>
        <div> {text} </div>
      </div>);
  }
}