import {combineReducers} from "redux";
import notaUno from "./notaUno";
import frasesCelebres from "./frasesCelebres";
import flashReducer from "./flashReducer";


const rootReducer = combineReducers({

    evaluacion: notaUno,
    fragmento: frasesCelebres,
    mode : flashReducer

})

export default rootReducer;