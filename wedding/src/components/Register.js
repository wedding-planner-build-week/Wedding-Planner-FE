import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
//import Loader from 'react-loader-spinner';
//actions 
import { register } from '../actions';
//css
import '../css/Register.css';
import { CSSTransition } from 'react-transition-group';

class Register extends React.Component {
    state={
        user: {
        username: '',
        password: '',
        location: '',
        email: '',
        },
        appearRegister: true
    }

    handleChanges = (e) => {
        e.preventDefault();
        this.setState({
            ...this.state,
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.register(this.state)
        .then(() => {
            this.props.history.push("/home");
        })
    }

    render() {
        return (
            <CSSTransition
                in={this.state.appearRegister}
                appear={true}
                timeout={500}
                classNames="fade"
            >
            <div className="register">
                <h1 className="register-text">Register</h1>
                <hr />
                <form onSubmit={this.handleSubmit} className="form">
                    <input
                        onChange={this.handleChanges}
                        placeholder="username"
                        name="username"
                        value={this.state.username}
                        className="input"
                        required
                    >
                    </input>
                    <input
                        onChange={this.handleChanges}
                        placeholder="password"
                        name="password"
                        value={this.state.password}
                        className="input"
                        required
                    >
                    </input>
                    <input
                        onChange={this.handleChanges}
                        placeholder="location"
                        name="location"
                        value={this.state.location}
                        className="input"
                        required
                    >
                    </input>
                    <input
                        onChange={this.handleChanges}
                        placeholder="email"
                        name="email"
                        value={this.state.email}
                        className="input"
                        required
                    >
                    </input>
                    <button className="register-button">Register</button>
                    <p>Already have an account?</p>
                    <NavLink className="login-link" to="/userpanel">*Login</NavLink>
                </form>
            </div>
            </CSSTransition>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state,
    }
}


export default Register;