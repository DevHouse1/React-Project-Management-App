import React from 'react';

const ProjectSummary = ({project}) => {
    return (
        <div className="card transparent z-depth-1 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title"> {project.title} </span>
                <p>{project.content} </p>
                <p className="grey-text"> 3rd september, 3 am :) </p>
            </div>
        </div>
    );

}

export default ProjectSummary;