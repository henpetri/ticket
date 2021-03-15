import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './Home';
import Logged from './Logged';
import LoggedChat from './Logged/chat';
import Admin from './Admin';
import AdminChat from './Admin/chat';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/logged" exact component={Logged} />
            <Route path="/logged/chat" component={LoggedChat} />
            <Route path="/admin" exact component={Admin} />
            <Route path="/admin/chat" component={AdminChat} />
        </BrowserRouter>
    )
}

export default Routes;