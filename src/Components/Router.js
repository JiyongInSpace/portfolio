import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Main from '../Screens/Main';
import Header from './Header';


export default ({messageRepository}) => (
    <Router>
        <Header />
        <Main messageRepository={messageRepository}/>
    </Router>
);


