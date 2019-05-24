import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SingleUser from '../pages/SingleUser';


class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.props.getPosts();
    //this.setState({ posts: [] });
  }

  render() {
    return (
      <div className="room-list">
        {this.props.posts.map(post => (
          <UserDetails key={post.id} post={post} />
        ))}
      </div>
    );
  }
}

function UserDetails({ post }) {
  return (
    <Link to={`/users/${post.id}`}>
     <p>{post.couple_name}</p>
    </Link>
  );
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, {})(UserList);
