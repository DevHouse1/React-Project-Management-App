import React from 'react';

const ProjectDetails = (props) => {
    const {id} = props.match.params;
    return (
        <div className="container section project-details"> 
        <div className ="card transparent z-depth-1">
            <div className ="card-content">
                <span className ="card-title"> Project Title - {id}</span>
                <p>this projet was originaly started by 3 students with pation to web technonlogies,
                    the project consist of way of reading youtube screen text (code in our case) and use the 
                    OCR algorithme to convert the image to a consumable text ...
                </p>
            </div>
            <div className ="card-action  transparent grey-text" >
                <p> Posted by a student</p>
                <p> 3rd august, 2 am :)</p>
            </div>
        </div>
        </div>
    );

}

export default ProjectDetails;