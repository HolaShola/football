import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import CreateAccountPage from './CreateAccountPage';
import EditorPage from './EditorPage';

const App = () => (
    <div>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/account" component={CreateAccountPage} />
        <Route path="/editor" component={EditorPage} />
    </div>
);

export default App;
