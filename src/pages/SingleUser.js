import React from 'react';

const SingleUser = props => {
  const { couple_name, wedding_theme, item_photo, wedding_date, wedding_location, wedding_photographer } = props.profile;
  return (
    <div className="featured-rooms">
      <h2>{couple_name}</h2>
      <div className="featured-rooms">
        Wedding Theme: <em>{wedding_theme}</em>
      </div>
      <div className="featured-rooms">
        Photo: <strong>{item_photo}</strong>
      </div>
      <div className="featured-rooms">
        Wedding Date: <em>{wedding_date}</em>
      </div>
      <div className="featured-rooms">
        Wedding Location: <em>{wedding_location}</em>
      </div>
      <div className="featured-rooms">
        Wedding Photographer: <em>{wedding_photographer}</em>
      </div>
    </div>
  );
};

export default SingleUser;
