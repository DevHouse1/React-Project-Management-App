import React from 'react';
//import {moment} from 'moment'

const ProjectSummary = ({project}) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return (
        <div className="card transparent z-depth-1 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title"> {project.title} </span>
                <p>{project.content} </p>
                <p className="grey-text"> created at : {project.createdAt.toDate().toLocaleDateString('en-US', options)}</p>
            </div>
        </div>
    );

}

export default ProjectSummary;