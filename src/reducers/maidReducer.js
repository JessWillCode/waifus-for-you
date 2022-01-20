import { FETCH_START, FETCH_FAIL, FETCH_SUCCESS } from "../actions/maidActions";

const initialState = {
    maid:{
        img: 'https://cdn.waifu.im/a29428efa0ba351e.jpeg', 
        source: 'https://reddit.com/jd9hmn/',
        likes: 5
    },
    isFetching: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        
        default:
            return state;
    }
}

export default reducer;