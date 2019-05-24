import React, {Component} from 'react';
import { connect } from 'react-redux';
import {getPost} from '../actions';
import Img from 'react-image';

class SingleUser extends Component {
  componentDidMount() {
    this.props.getPost(this.props.match.params.id);
  }
    render() {
    const { couple_name, wedding_theme, item_photo, wedding_date, wedding_location, wedding_photographer } = this.props.post;
    return (
    <div className="featured-rooms">
      <h2>{couple_name}</h2>
      <div className="featured-rooms">
        Wedding Theme: <em>{wedding_theme}</em>
      </div>
      <div className="featured-rooms">
      <Img src={item_photo} />
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
  }
}


const mapStateToProps = (state) => {
  return {
    post: state.post
  }
}

export default connect(mapStateToProps, {getPost})(SingleUser);