export const getPosts = () => {
    return (dispatch) => {
        return axios.get('/api/posts').then(response => {
            dispatch({type: 'GET_POSTS', success: true, payload: response.data.data})
        }).catch(error => {
            dispatch({type: 'FAIL_GET_POSTS', success: false, error: error.response.data})
        })
    }
};

export const addPost = (data) => {
    return (dispatch) => {
        return axios.post('/api/posts', data).then(response => {
            dispatch({type: 'ADD_POST', success: true, payload: response.data.data})
        }).catch(error => {
            dispatch({type: 'FAIL_ADD_POST', success: false, error: error.response.data})
        })
    }
};

export const updatePost = (postID, data) => {
    return (dispatch) => {
        //does the update and show the resource updated
        axios.put(`/api/posts/${postID}`, data).then(response => {
            // showing all posts in the payload instead of the update resource
            axios.get('/api/posts').then(response => {
                dispatch({type: 'UPDATE_POST', success: true, payload: response.data.data})
            });
        }).catch(error => {
            dispatch({type: 'FAIL_UPDATE_POSTS', success: false, error: error.response.data})
        });
    }
};

export const deletePost = (postID) => {
    return (dispatch) => {
        axios.delete(`/api/posts/${postID}`).then(response => {
            axios.get(`/api/posts`).then(response => {
                dispatch({type: 'DELETE_POST', success: true, payload: response.data.data})
            })
        }).catch(error => {
            dispatch({type: 'FAIL_DELETE_POST', success: false, error: error.response.data})
        })
    }
};

export const getCountry = () => {
    return {
        type: 'CHANGE_COUNTRY',
        payload: {
            country: 'singapore'
        },

    }
};