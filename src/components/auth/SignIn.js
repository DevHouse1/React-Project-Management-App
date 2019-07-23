import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../stores/actions/authActions'

class SignIn extends Component {

    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);

    }
    render() {
        const {authError } = this.props;
       
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className='none'>
                    <h5 className="grey-text text-darken-3">Sing In</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} ></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">PassWord</label>
                        <input type="password" id="password" onChange={this.handleChange}></input>
                    </div>

                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Login</button>
                    </div>
                    <div className ="red-text">
                       {authError}
                    </div>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (credentials) => { dispatch(signIn(credentials)) }
    }
}

const mapStateToProps = (state) => {
    return {
       authError : state.auth.authError
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);