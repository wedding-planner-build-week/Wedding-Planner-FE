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
      <section className="featured-rooms">
      <div className="featured-rooms-center">
        {this.props.posts.map(post => (
          <UserDetails key={post.id} post={post} />
        ))}
      </div>
      </section>
    );
  }
}

function UserDetails({ post }) {
  return (
    <button className="btn-primary">
    <Link to={`/users/${post.id}`}>
     <div className="user-detail">{post.couple_name}</div>
    </Link>
    </button>
  );
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, {})(UserList);
