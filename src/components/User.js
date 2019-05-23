import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import SingleUser from '../pages/SingleUser';
import { Link } from "react-router-dom";

const User = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="our profiles">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <SingleUser/>
    </>
  );
};

export default User;