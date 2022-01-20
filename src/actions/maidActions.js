import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';

export const getMaid = () => (dispatch) => {
    dispatch(fetchStart());
    axios.get('https://api.waifu.im/sfw/maid/')
    .then(res => {
        dispatch(fetchSuccess(res.data.images[0]));
    })
    .catch(err => {
        dispatch(fetchFail(err));
    })
}

export const fetchStart = () => {
    return({type:FETCH_START});
}

export const fetchSuccess = (maid) => {
    return ({type:FETCH_SUCCESS, payload: maid});
}

export const fetchFail = (errorMessage) => {
    return({type:FETCH_FAIL, payload: errorMessage});
}