import { FETCH_START, FETCH_FAIL, FETCH_SUCCESS } from "../actions/maidActions";

const initialState = {
    maid:{
        url: '', 
        source: '',
        like: 0
    },
    isFetching: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_START:
            return{
                ...state,
                maid: {},
                isFetching: true
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                maid: action.payload
            };
        case FETCH_FAIL:
            return{
                ...state,
                maid:{},
                isFetching:false,
                error: action.payload
            };
        default:
            return state;
    }
}

export default reducer;