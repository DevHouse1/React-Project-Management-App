const initstate = {
    authError: null
};

const authReducer = (state = initstate, action) => {
    if (action.type === 'LOGIN_SUCCESS') {
        return { ...state, authError: null }
    }

    if (action.type === 'LOGIN_FAILED') {
        return { ...state, authError: 'login failed Ooops!' }
    }

    if (action.type === 'SIGNOUT_SUCCESS') {
        console.log('signOut successed');
        return state;
    }

    if (action.type === 'SIGNUP_SUCCESS') {
        console.log('signUp successed');
        return {...state , authError : null};
    }

    if (action.type === 'SIGNUP_ERROR') {
        console.log('signUp successed');
        return {...state , authError : action.err.message};
    }
    
    return state;
}

export default authReducer;