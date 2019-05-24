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
    <div className="single-room">
      <div className="single-room-images">
      <Img src={item_photo} />
      </div>
      <div className="single-room-info">
      <h2>{couple_name}</h2>
      <h3>Wedding Theme: <em>{wedding_theme}</em></h3>
      <h4>Wedding Date: <em>{wedding_date}</em></h4>
      <h5>Wedding Location: <em>{wedding_location}</em></h5>
      <h6>Wedding Photographer: <em>{wedding_photographer}</em></h6>
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