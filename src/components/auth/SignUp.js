import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {signUp} from '../../stores/actions/authActions';

class SignUp extends Component {

    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: '', 
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state);
    }
    render() {
        const { auth , authError } = this.props;
        
        if (auth.uid)
            return <Redirect to='/' />
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className='none'>
                    <h5 className="grey-text text-darken-3">Sing Up</h5>
                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" onChange={this.handleChange} ></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" onChange={this.handleChange} ></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} ></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">PassWord</label>
                        <input type="password" id="password" onChange={this.handleChange}></input>
                    </div>

                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
                    </div>
                    <div className ='container red-text' >
                        {authError}
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError : state.auth.authError
    }
}

const mapDispatchToprops = (dispatch) => {
    return {
        signUp : (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToprops)(SignUp);