import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from "react-router-dom";

import Layout from "./pages/Layout";
import Chatroom from "./pages/Chatroom";


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
//<Route path="/chatroom/:username" component={Chatroom}/>