import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
const home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="wedding planner"
          subtitle="plan your wedding perfectly"
        >
          <Link to="/users" className="btn-primary">
            our profiles
          </Link>
        </Banner>
      </Hero>
      <Services />
    </>
  );
};

export default home;
