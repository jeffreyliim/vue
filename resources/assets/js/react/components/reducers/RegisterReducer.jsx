const initialState = {
    name: {msg: null, inputClass: 'form-group'},
    username: {msg: null, inputClass: 'form-group'},
    password: {msg: null, inputClass: 'form-group'},
    password_confirmation: {msg: null, inputClass: 'form-group'},
    success: null
};
const RegisterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INVALID_REGISTER_NAME':
            return {
                ...state,
                name: {msg: action.name.msg, inputClass: action.name.inputClass}
            };
            break;

        case 'VALID_REGISTER_NAME':
            return {
                ...state,
                name: {
                    data: action.name.data,
                    msg: action.name.msg,
                    inputClass: action.name.inputClass,
                    success: action.name.success
                }
            };
            break;
        case 'INVALID_REGISTER_USERNAME':
            return {
                ...state,
                username: {msg: action.username.msg, inputClass: action.username.inputClass}
            };
            break;

        case 'VALID_REGISTER_USERNAME':
            return {
                ...state,
                username: {
                    data: action.username.data,
                    msg: action.username.msg,
                    inputClass: action.username.inputClass,
                    success: action.username.success
                }
            };
            break;
        case 'INVALID_REGISTER_PASSWORD':
            return {
                ...state,
                password: {msg: action.password.msg, inputClass: action.password.inputClass}
            };
            break;
        case 'VALID_REGISTER_PASSWORD':
            return {
                ...state,
                password: {
                    data: action.password.data,
                    msg: action.password.msg,
                    inputClass: action.password.inputClass,
                    success: action.password.success
                }
            };
            break;
        case 'INVALID_REGISTER_PASSWORD_CONFIRMATION':
            return {
                ...state,
                password_confirmation: {
                    msg: action.password_confirmation.msg,
                    inputClass: action.password_confirmation.inputClass
                }
            };
            break;
        case 'VALID_REGISTER_PASSWORD_CONFIRMATION':
            return {
                ...state,
                password_confirmation: {
                    data: action.password_confirmation.data,
                    msg: action.password_confirmation.msg,
                    inputClass: action.password_confirmation.inputClass,
                    success: action.password_confirmation.success
                }
            };
            break;
        case 'REGISTER_SUCCESS':
            return initialState;
            break;

    }
    return state;
};

export {
    RegisterReducer
};

//functions always use export {}, for consts just export default