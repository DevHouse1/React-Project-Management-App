// in normal case action creator will return an actin Object
// but using thunk we can return a function where we can do an ajax call
// the function take the store's dispatch method and getState getter to get 
//the state inside the returned method

export  const createProject = (project) => {
    return (dispatch, getState) => {
        dispatch({type : 'CREATE_PROJECT' , project});
    }
}