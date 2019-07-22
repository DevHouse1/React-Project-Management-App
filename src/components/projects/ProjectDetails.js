import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const ProjectDetails = (props) => {

    const  {project} = props;
    if(project)
    {
        return(<div className="container section project-details">
        <div className="card transparent z-depth-1">
            <div className="card-content">
                <span className="card-title"> {project.title}</span>
                <p>{project.content}</p>
            </div>
            <div className="card-action  transparent grey-text" >
                <p> Posted by a student : {project.authorFirstName +" "+project.authorLastName}</p>
                <p> created at : ...</p>
            </div>
        </div>
    </div>);
    }else{
        return (
        <div className ="container center">
            <p>loading project detail ...</p>
        </div>
    );
    }
    

}

const mapStateToProps = (state, previousProps) => {
    const { id } = previousProps.match.params;
    const projects =state.firestore.data.projects
    const project  = projects && projects[id]
    return {
        project
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' }
    ]))(ProjectDetails);