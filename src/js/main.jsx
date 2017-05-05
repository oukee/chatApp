import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, IndexRoute} from "react-router-dom";

import JoinPage from "./components/join_page/Join";
import Chatroom from "./components/chat_room/Chatroom";


 ReactDOM.render(
   <Router>
     <div>
       <Route exact path="/" component={ JoinPage }/>
       <Route path="/chatroom" component={ Chatroom }/>
     </div>
   </Router>,
   document.getElementById('app')
  );

//ReactDOM.render(<App />, document.getElementById('app'));
//ReactDOM.render(element, document.getElementById('app2'));
//<Route path="/chatroom/:username" component={Chatroom}/>