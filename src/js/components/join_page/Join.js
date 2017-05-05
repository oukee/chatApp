import React from "react";

import { Link } from 'react-router-dom';

export default class Join extends React.Component {
  constructor() {
    super();
    this.state = {
      username: ""
    };
  }

  handleChange(e) {
    const username = e.target.value;
    this.setState({username});
  }

  render() {
    return(
      <div>
        <img src="/assets/images/corgi.png" />
        <label>Enter Username: </label>
        <input type="text" onChange={this.handleChange.bind(this)}/>
        <button>
          <Link to={{
            pathname: "/chatroom",
            state: { username: this.state.username }}}>
            Enter Chat!
          </Link>
        </button>
      </div> 
    );
  }
}