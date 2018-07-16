const initialState = {
    username: {msg: null, inputClass: 'form-group', success: null},
    password: {msg: null, inputClass: 'form-group', success: null},
    isLoggedIn: null
};

export const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOG_IN_STATUS':
            return {
                ...state, isLoggedIn: action.isLoggedIn
            };
            break;
        case 'INVALID_LOGIN_USERNAME':
            return {
                ...state,
                username: {msg: action.username.msg, inputClass: action.username.inputClass}
            };
            break;
        case 'VALID_LOGIN_USERNAME':
            return {
                ...state,
                username: {
                    msg: action.username.msg,
                    inputClass: action.username.inputClass,
                    success: action.username.success
                }
            };
            break;
        case 'INVALID_LOGIN_PASSWORD':
            return {
                ...state,
                password: {msg: action.password.msg, inputClass: action.password.inputClass}
            };
            break;
        case 'VALID_LOGIN_PASSWORD':
            return {
                ...state,
                password: {
                    msg: action.password.msg,
                    inputClass: action.password.inputClass,
                    success: action.password.success
                }
            };
            break;
    }
    return state
};