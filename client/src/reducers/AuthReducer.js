const AUTH_USER_ACTION = "AUTH_USER_ACTION";

const initialState = {
    isAuth: false,
}


const AuthReducer = (state = initialState, action) =>{
    switch (action.type) {
        case AUTH_USER_ACTION:
            console.log("action",action);
            return {
                ...state,
                isAuth: action?.payload.isAuth 
            }
        default :
            return state
    }
}

export const authentication = (payload) => ({ type: AUTH_USER_ACTION, payload });

export default AuthReducer;