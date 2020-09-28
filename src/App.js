// import depedencies
import React, { useEffect } from 'react';
import './App.css';

// import redux components
import {Provider} from "react-redux";
import store from "./store";
// import chat component
import Chat from "./components/chat/Chat";

// imprort actions
import {createSession} from "./actions/watson";

// import axios 
import axios from "axios";

if (localStorage.session) {
  delete axios.defaults.headers.common["session_id"];
  axios.defaults.headers.common["session_id"] = localStorage.session;
} else {
  delete axios.defaults.headers.common["session_id"];
}

 
// connect application to redux
const App = () => {
  useEffect(() => {
    // Check if there session
    if (!localStorage.session) {
      // Create
      store.dispatch(createSession());
    }
  });
  return (
    <Provider store={store}>
    <div className="Container">
     {/* insert chat component */}
     <Chat />
    </div>
    </Provider>
  );
}

export default App;
