import React from "react";

import { Link } from 'react-router-dom';

export default class Join extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>
        <img src="/assets/images/corgi.png" />
        <label>Enter Username: </label>
        <input type="text" />
        <button>
          <Link to="chatroom">Enter Chat!</Link>
        </button>
      </div> 
    );
  }
}