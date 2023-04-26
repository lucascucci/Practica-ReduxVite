import { DARKMODE,LIGHTMODE } from "../Types";

const initialState = true;

export default function flashReducer (state=initialState,action){
    switch(action.type){
        case DARKMODE:
            return state = true;
        case LIGHTMODE:
            return state = false;
        default: return state;
    }
}