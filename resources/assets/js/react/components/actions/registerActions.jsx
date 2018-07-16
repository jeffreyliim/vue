export const verifyName = (name) => {
    return (dispatch) => {
        // if each input empty
        if (!name)
            return dispatch({
                type: 'INVALID_REGISTER_NAME',
                name: {
                    msg: 'Name is Empty',
                    inputClass: 'form-group has-error'
                }
            });
        let nameRegex = /^[a-zA-Z ]+$/i;
        if (name && !name.match(nameRegex))
            return dispatch({
                type: 'INVALID_REGISTER_NAME',
                name: {
                    msg: 'Name is invalid, only letters please',
                    inputClass: 'form-group has-error'
                }
            });
        return dispatch({
            type: 'VALID_REGISTER_NAME',
            name: {
                data: name,
                msg: 'Name is valid',
                inputClass: 'form-group has-success',
                success: true
            }
        });
    }
};

export const verifyUsername = (username) => {
    return (dispatch) => {
        // if each input empty
        if (!username)
            return dispatch({
                type: 'INVALID_REGISTER_USERNAME',
                username: {msg: 'Username Empty', inputClass: 'form-group has-error'}
            });

        let usernameRegexExp = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        //if username doesnt match the regex requirement
        if (username && !username.match(usernameRegexExp)) {
            return dispatch({
                type: 'INVALID_REGISTER_USERNAME',
                username: {msg: 'Username incorrect format', inputClass: 'form-group has-error'}
            })
        }

        return dispatch({
            type: 'VALID_REGISTER_USERNAME',
            username: {data: username, msg: 'Username valid', inputClass: 'form-group has-success', success: true}
        })


    }
};

export const verifyPassword = (password) => {
    return (dispatch) => {
        // if each input empty
        if (!password)
            return dispatch({
                type: 'INVALID_REGISTER_PASSWORD',
                password: {msg: 'Password Empty', inputClass: 'form-group has-error'}
            });

        let passwordRegexExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

        // if password doesnt match regex
        if (password && !password.match(passwordRegexExp)) {
            return dispatch({
                type: 'INVALID_REGISTER_PASSWORD',
                password: {
                    msg: 'Password should contain at least 1 digit, 1 lowercase, 1 uppercase, 8 chars and no special characters e.g !@#$%^&*()',
                    inputClass: 'form-group has-error'
                }
            });
        }

        //if password matches regex
        return dispatch({
            type: 'VALID_REGISTER_PASSWORD',
            password: {
                data: password,
                msg: 'Password is valid and able to use',
                inputClass: 'form-group has-success',
                success: true
            }
        });

    }
};
export const verifyPasswordConfirmation = (password, password_confirmation) => {
    return (dispatch) => {
        // if each input empty
        if (!password_confirmation)
            return dispatch({
                type: 'INVALID_REGISTER_PASSWORD_CONFIRMATION',
                password_confirmation: {
                    msg: 'Password Confirmation Empty',
                    inputClass: 'form-group has-error'
                }
            });

        if (password_confirmation && password != password_confirmation) {
            return dispatch({
                type: 'INVALID_REGISTER_PASSWORD_CONFIRMATION',
                password_confirmation: {
                    msg: 'Password Confirmation doesnt match password',
                    inputClass: 'form-group has-error'
                }
            });
        }


        return dispatch({
            type: 'VALID_REGISTER_PASSWORD_CONFIRMATION',
            password_confirmation: {
                data: password_confirmation,
                msg: 'Password Confirmation matches password',
                inputClass: 'form-group has-success',
                success: true
            }
        });


    }
};


export const resetInputs = () => {
    return {
        type: 'REGISTER_SUCCESS',
    }
};

