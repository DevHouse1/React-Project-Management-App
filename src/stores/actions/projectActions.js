// in normal case action creator will return an actin Object
// but using thunk we can return a function where we can do an ajax call
// the function take the store's dispatch method and getState getter to get 
//the state inside the returned method

export const createProject = (project) => {
    return (dispatch, getState, { getFirestore, getFirebase }) => {

        const firestore = getFirestore();
        const uid = getState().firebase.auth.uid;
        const profile = getState().firebase.profile
        firestore.collection('projects').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: uid,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project });
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err });
        });

    }
}