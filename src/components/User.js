import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
//import SingleUser from '../pages/SingleUser';
import UserList from './UserList';
import { Link } from "react-router-dom";

const User = (props) => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="our profiles">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <UserList getPosts={props.getPosts}/>
    </>
  );
};

export default User;