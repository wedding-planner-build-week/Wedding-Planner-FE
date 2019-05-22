import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import '../css/Homepage.css';

import { updateData, deleteAccount, updatePassword } from '../actions';

class Homepage extends React.Component {
  state={
      id: '',
      couple_name: '',
      wedding_theme: '',
      item_photo: '',
      wedding_date: '',
      wedding_location: '',
      wedding_photographer: '',
  }

  handleChanges = (e) => {
      e.preventDefault();
      this.setState({
          [e.target.name] : e.target.value
      })
  }

  analyzeData = (e) => {
      e.preventDefault();
      //action to call api
      let couple_name = {couple_name: this.state.couple_name}
      this.props.updateData(couple_name)
      let wedding_theme = {wedding_theme: this.state.wedding_theme}
      this.props.updateData(wedding_theme)
      let item_photo = {item_photo: this.state.item_photo}
      this.props.updateData(item_photo)
      let wedding_date = {wedding_date: this.state.wedding_date}
      this.props.updateData(wedding_date)
      let wedding_location = {wedding_location: this.state.wedding_location}
      this.props.updateData(wedding_location)
      let wedding_photographer = {wedding_photographer: this.state.wedding_photographer}
      this.props.updateData(wedding_photographer)
      .then(this.props.history.push('/'))
  }

  updatePassword = (e) => {
      e.preventDefault();
      let password = {password: this.state.password}
      this.props.updatePassword(password)
      .then(this.props.history.push('/login'));
  }

  deleteAccount = (e) => {
      e.preventDefault();
      //action to call api
      this.props.deleteAccount()
      .then(() => {
          this.removeStorage();
          this.props.history.push('/register');
      })
  }

  removeStorage = () => {
      localStorage.clear();
  }

  logOut = (e) => {
      e.preventDefault();
      this.removeStorage();
      this.props.history.push('/');
  }

  render() {
      return (
          <div className="homepage-form">
              <h1 className="homepage-text">Add a new post</h1>
              <form onSubmit={this.analyzeData}>
                  <hr />
                  <input
                      onChange={this.handleChanges}
                      placeholder="Enter your Couple's Name"
                      name="couple_name"
                      value={this.state.couple_name}
                      className="title-input"
                      required
                  >
                  </input>
                  <input
                      onChange={this.handleChanges}
                      name="wedding_theme"
                      placeholder='wedding_theme'
                      value={this.state.wedding_theme}
                      className="text-area"
                      required
                  >
                  </input>
                  <input
                      onChange={this.handleChanges}
                      name="item_photo"
                      placeholder='item_photo'
                      value={this.state.item_photo}
                      className="text-area"
                      required
                  >
                  </input>
                  <input
                      onChange={this.handleChanges}
                      name="wedding_date"
                      placeholder='wedding_date'
                      value={this.state.wedding_date}
                      className="text-area"
                      required
                  >
                  </input>
                  <input
                      onChange={this.handleChanges}
                      name="wedding_location"
                      placeholder='wedding_location'
                      value={this.state.wedding_location}
                      className="text-area"
                      required
                  >
                  </input>
                  <input
                      onChange={this.handleChanges}
                      name="wedding_photographer"
                      placeholder='wedding_photographer'
                      value={this.state.wedding_photographer}
                      className="text-area"
                      required
                  >
                  </input>
                  <button className="send-button">Create new Post</button>
              </form>
              <form onSubmit={this.updatePassword}>
                  <input 
                      onChange={this.handleChanges}
                      placeholder="Enter your new password..."
                      name="password"
                      value={this.state.password}
                      className="title-input"
                      required
                  >
                  </input>
                  <button onClick={this.updatePassword} className="update-button">Update Password</button>
              </form>
              <button onClick={this.deleteAccount} className="delete-button">Delete Account</button>
              <div>
                  <NavLink onClick={this.logOut} className="logout-link" to="/">*Logout</NavLink>
              </div>
          </div>
      )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
      ...state,
      data: state.data
  }
}

export default connect(mapStateToProps, { updateData, deleteAccount, updatePassword })(Homepage);