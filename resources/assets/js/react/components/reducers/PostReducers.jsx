const initialState = {
    payload: [],
    success: null,
    error: null
};
const PostReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_POSTS':
            return {...state, success: action.success, payload: action.payload};
            break;
        case 'FAIL_GET_POSTS':
            return {...state, success: action.success, error: action.error};
            break;
        case 'ADD_POST':
            return {...state, success: action.success, payload: action.payload};
            break;
        case 'FAIL_ADD_POST':
            return {...state, success: action.success, error: action.error};
            break;
        case 'UPDATE_POST':
            // return Object.assign({}, state, {success: action.success, payload: action.payload});
            return {...state, success: action.success, payload: action.payload};
            break;
        case 'FAIL_UPDATE_POST':
            // return Object.assign({}, state, {success: action.success, error: action.error});
            return {...state, success: action.success, error: action.error};
            break;
        case 'DELETE_POST':
            return {...state, success: action.success, payload: action.payload};
            break;
        case 'FAIL_DELETE_POST':
            return {...state, success: action.success, error: action.error};
            break;
        case 'CHANGE_POST':
            return {...state, payload: {post_content: action.payload.post_content}};
            // return Object.assign({}, state, {data: {post_content: action.payload.post_content}});
            break;
        case 'CHANGE_COUNTRY':
            return {...state, payload: {country: action.payload.country}};
            // return Object.assign({}, state, {data: {country: action.payload.country}});
            break;
        case 'CHANGE_COUNTRY_ERROR':
            throw new Error('COUNTRY CANNOT BE CHANGED');
            break;
    }
    return state;
};

export {
    PostReducers
};

//functions always use export {}, for consts just export default