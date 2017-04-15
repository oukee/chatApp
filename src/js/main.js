import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import Layout from "./components/Layout";
import Chatroom from "./components/Chatroom";


ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Layout}/>
      <Route path="/chatroom" component={Chatroom}/>
    </div>
  </Router>,
  document.getElementById('app'));

//ReactDOM.render(<App />, document.getElementById('app'));
//ReactDOM.render(element, document.getElementById('app2'));