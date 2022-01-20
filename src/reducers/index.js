import { combineReducers } from "redux";

import maidReducer from './maidReducer';
import waifuReducer from './waifuReducer';

export default combineReducers({
    maid: maidReducer,
    waifu: waifuReducer
});