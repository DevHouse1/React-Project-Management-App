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

    if(action.type === 'SIGNOUT_SUCCESS')
    {
        console.log('signOut successed');
        return state;
    }
    return state;
}

export default authReducer;