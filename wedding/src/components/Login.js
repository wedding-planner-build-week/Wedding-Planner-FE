import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
//actions  
import { login } from '../actions';
//css
import '../css/Login.css';
import { CSSTransition } from 'react-transition-group';

class Login extends React.Component {
    state={
        user: {
        username: '',
        password: '',
        },
        appearLogin: true
    }

    handleChanges = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        this.setState({
            ...this.state,
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault(this.state);
        this.props.login(this.state)
        .then(() => {
            this.props.history.push('/login');
        })
    }
    render() {
        console.log("Working");
        return (

            <CSSTransition
                in={this.state.appearLogin}
                appear={true}
                timeout={500}
                classNames="fade"
            >
                <div className="login">
                    <h1 className="login-text">Login</h1>
                    <hr/>
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
                        <button className="login-button">Login</button>
                        <p>Don't have an account?</p>
                        <NavLink className="register-link" to="/register">*Register</NavLink>
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
export default Login;