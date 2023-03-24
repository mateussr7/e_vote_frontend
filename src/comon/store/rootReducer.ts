import { combineReducers } from "redux";
import userReducer from "./user/reducer";
import messageReducer from "./message/reducer";
import electionReducer from "./election/reducer";
import positionReducer from "./position/reducer";
import candidateReducer from "./candidate/reducer";

const rootReducer = combineReducers({
    userReducer,
    messageReducer,
    electionReducer,
    positionReducer,
    candidateReducer,
});

export default rootReducer;