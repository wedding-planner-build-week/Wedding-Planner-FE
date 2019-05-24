import React from 'react';
import { connect } from 'react-redux';
import './App.css';
//components 
import Navbar from './components/Navbar.js';
import User from './components/User';
import SingleUser from './pages/SingleUser';
import Home from './pages/Home';
import Login from './components/Login';
import Register from './components/Register';
import PrivateRoute from './components/PrivateRoute';
import {getPosts} from './actions';
import { withRouter } from "react-router";



//routing 
import { Switch, Route } from 'react-router-dom';
import UserPanel from './pages/UserPanel';

const App = (props) => {
    //props.getPosts();
    return (
      <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users" render={() => <User getPosts = {props.getPosts}/>} />
        <Route exact path="/users/:id" component={SingleUser} />
        <Route exact path="/login" component={ Login } />
        <Route exact path="/register" component={ Register } />
        <PrivateRoute exact path="/userpanel" component={ UserPanel } />
      </Switch>
      </>
    );

}

 const mapStateToProps = (state) => {
   return {
     posts: state.posts,
   }

 }

export default withRouter(connect(null, {getPosts})(App));