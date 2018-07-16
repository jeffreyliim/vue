export const verifyUsername = (username) => {
    return dispatch => {
        if (!username) {
            return dispatch({
                type: 'INVALID_LOGIN_USERNAME',
                username: {msg: 'Username is empty', inputClass: 'form-group has-error'}

            })
        }

        return dispatch({
            type: 'VALID_LOGIN_USERNAME',
            username: {msg: null, inputClass: 'form-group has-success', success: true,},

        })

    }
};

export const verifyPassword = (password) => {
    return dispatch => {
        if (!password) {
            return dispatch({
                type: 'INVALID_LOGIN_PASSWORD',
                password: {msg: 'Password is empty', inputClass: 'form-group has-error'},
            })
        }

        return dispatch({
            type: 'VALID_LOGIN_PASSWORD',
            password: {msg: null, inputClass: 'form-group has-success', success: true,}
        })

    }
};

export const loginStatus = (status) => {
    return dispatch => {
        if (status) {
            return dispatch({
                type: 'LOG_IN_STATUS',
                isLoggedIn: status
            });
        }

        return dispatch({
            type: 'LOG_IN_STATUS',
            isLoggedIn: false
        })
    }
};

