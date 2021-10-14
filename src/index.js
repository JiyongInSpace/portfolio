import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import '@fortawesome/fontawesome-free/js/all.js';
import firebaseApp from './Services/Firebase';
import MessageRepository from './Services/MessageRepository';

const messageRepository = new MessageRepository(firebaseApp);

ReactDOM.render(
  <React.StrictMode>
    <App messageRepository={messageRepository}/>
  </React.StrictMode>,
  document.getElementById('root')
);
