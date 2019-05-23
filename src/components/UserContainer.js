import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import UserCard from './UserCard';
export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    // fill me in with an HTTP Request to `https://lambda-wedding-planner.herokuapp.com/api/posts/all`
    const myPromise = axios.get('https://lambda-wedding-planner.herokuapp.com/api/posts/all');
    myPromise
      .then(response => {
        this.setState({ posts: response.data });
      })
      .catch(err => {
        console.log(err);
      });
    this.setState({ posts: [] });
  }

  render() {
    return (
      <div className="room-list">
        {this.state.posts.map(movie => (
          <MovieDetails key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }
}

function MovieDetails({ post }) {
  return (
    <Link to={`/users/${post.id}`}>
      <UserCard post={post} />
    </Link>
  );
}
