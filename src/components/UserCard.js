import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";
import PropTypes from "prop-types";
import { memo } from "react";

const UserContainer = memo(({ room }) => {
  const { couple_name, id, item_photo } = room;
  // console.log(name);
  return (
    <article className="room">
      <div className="img-container">
        <img src={item_photo[0] || defaultImg} alt="single profile" />
        <Link to={`/users/${id}`} className="btn-primary room-link">
          features
        </Link>
      </div>
      <p className="room-info">{couple_name}</p>
    </article>
  );
});

UserContainer.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired
  })
};
export default UserContainer;
