const initstate = {
    projects: [
        {id : 1 , title : 'start a company' , content : 'still waiting for projects ideas '},
        {id : 1 , title : 'create an app' , content : 'still waiting for apps ideas '},
        {id : 1 , title : 'have a nice car' , content : 'still waiting for cars ideas '}
    ]
};

const projectReducer = (state = initstate, action) => {
    return state;
}

export default projectReducer;