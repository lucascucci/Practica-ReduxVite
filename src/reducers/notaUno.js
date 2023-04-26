// ACTION NECESITA LOS NOMBRES DE TYPES PARA ENTENDER COMO SE LLAMARA LA ACCION A EJECUTAR
// ACTION = FUNCTION

import { NOTA_DOS, NOTA_UNO, RESET } from "../Types";

const initialState = '';

export default function notaUno(state = initialState, action){

    switch(action.type){
        case NOTA_UNO:
            return state = 'Aprobado'
        case NOTA_DOS:
            return state = 'Desaprobado'
        case RESET:
            return initialState;
        default:
            return state;
    }
}