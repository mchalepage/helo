import axios from 'axios' 

const initialState = {
    picLoading: false,
    postLoading: false,
    posts: [],
    user: {}
}

const REQUEST_POSTS = 'REQUEST_POSTS'
const REQUEST_USER = 'REQUEST_USER'

export const requestPosts = () => {
    let posts = axios.get('/api/posts')
    return {
        type: REQUEST_POSTS,
        payload: posts
    }
}

export const requestUser = () => {
    let user = axios.get('/api/user')

    return {
        type: REQUEST_USER,
        payload: user
    }
}

function reducer(state = initialState, action){
    const {type, payload} = action
    switch(action.type){
        case `${REQUEST_USER}_PENDING`:
            return {...state, picLoading: true}
        case `${REQUEST_USER}_FULFILLED`:
            return {...state, picloading: false, user: action.payload.data}
        case `${REQUEST_USER}_REJECTED`:
            return {...state, picLoading: false}
        case `${REQUEST_POSTS}_PENDING `:
            return {...state, postLoading: true}
        case `${REQUEST_POSTS}_FULFILLED`:
            return {...state, postLoading:false, posts: action.payload.data}
        case `${REQUEST_POSTS}_REJECTED`:
            return {...state, postLoading: false}
        default :
            return {...state}
    }
}
export default reducer