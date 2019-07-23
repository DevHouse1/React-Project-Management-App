import React, { Component } from 'react';
import { createProject } from '../../stores/actions/projectActions';
import { connect } from 'react-redux';


class CreateProject extends Component {

    state = {
        title: '',
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createProject(this.state);
        this.props.history.push('/');
    }
    render() {
        const { auth } = this.props;
        if (!auth.uid)
            this.props.history.push('/signin');
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className='none'>
                    <h5 className="grey-text text-darken-3">New Project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Project Title</label>
                        <input type="text" id="title" onChange={this.handleChange} ></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Content</label>
                        <textarea className="materialize-textarea" id="content" onChange={this.handleChange}></textarea>
                    </div>

                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create Project</button>
                    </div>
                </form>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}
const mapDispatchToprops = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}
// null here hold the place of mapStateToProps
export default connect(mapStateToProps, mapDispatchToprops)(CreateProject);