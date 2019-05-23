import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
//import Loader from 'react-loader-spinner';
//actions 
import { updateData } from '../actions';
//css
import '../css/Register.css';
import { CSSTransition } from 'react-transition-group';

class UserPanel extends React.Component {
    state={
        user:{
        id: '',
        couple_name: '',
        wedding_theme: '',
        wedding_date: '',
        wedding_location: '',
        wedding_photographer: '',
        user_id: '',
        },
        appearRegister: true
    }

    handleChanges = (e) => {
        e.preventDefault();
        this.setState({
            ...this.state,
            user : {
                ...this.state.user,
            [e.target.name] : e.target.value
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.updateData(this.state.user)
        .then(() => {
            this.props.history.push("/users");
        })
    }

    render() {
        console.log(this.state);
        return (
            <CSSTransition
                in={this.state.appearRegister}
                appear={true}
                timeout={500}
                classNames="fade"
            >
            <div className="register">
                <h1 className="register-text">Create Post Here</h1>
                <hr />
                <form onSubmit={this.handleSubmit} className="form">
                    <input
                        onChange={this.handleChanges}
                        placeholder="Couple Name"
                        name="couple_name"
                        value={this.state.user.couple_name}
                        className="input"
                        required
                    >
                    </input>
                    <input
                        onChange={this.handleChanges}
                        placeholder="Wedding Theme"
                        name="wedding_theme"
                        value={this.state.user.wedding_theme}
                        className="input"
                        required
                    >
                    </input>
                    <input
                        onChange={this.handleChanges}
                        placeholder="Wedding Date"
                        name="wedding_date"
                        value={this.state.user.wedding_date}
                        className="input"
                        required
                    >
                    </input>
                    <input
                        onChange={this.handleChanges}
                        placeholder="Wedding Location"
                        name="wedding_location"
                        value={this.state.user.wedding_location}
                        className="input"
                        required
                    >
                    </input>
                    <input
                        onChange={this.handleChanges}
                        placeholder="Wedding Photographer"
                        name="wedding_photographer"
                        value={this.state.user.wedding_photographer}
                        className="input"
                        required
                    >
                    </input>
                    <button className="register-button">Submit</button>
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


export default connect(mapStateToProps, { updateData })(UserPanel);