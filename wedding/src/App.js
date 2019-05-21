import React from 'react';
import './App.css';
//components 
import Navbar from './components/Navbar.js';
import Users from './components/User';
import SingleUser from './pages/SingleUser';
import Home from './pages/Home';
import Login from './components/Login';
import Register from './components/Register';
import PrivateRoute from './components/PrivateRoute';
import { withRouter } from "react-router";



//routing 
import { Switch, Route } from 'react-router-dom';
import UserPanel from './pages/UserPanel';

const App = () => {
  
    return (
      <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/users/:id" component={SingleUser} />
        <Route exact path="/login" component={ Login } />
        <Route exact path="/register" component={ Register } />
        <PrivateRoute exact path="/userpanel" component={ UserPanel } />
      </Switch>
      </>
    );

}

export default withRouter(App);