// in normal case action creator will return an actin Object
// but using thunk we can return a function where we can do an ajax call
// the function take the store's dispatch method and getState getter to get 
//the state inside the returned method

export const createProject = (project) => {
    return (dispatch, getState, { getFirestore, getFirebase }) => {
        // add ajax call to the firbase server using the last two parameters
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'jhon',
            authorLastName: 'Kamster',
            createdAt : new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project });
        }).catch((err) => {
            dispatch({type: 'CREATE_PROJECT_ERROR', err});
        });
       
    }
}