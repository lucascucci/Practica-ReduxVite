// ACTION NECESITA LOS NOMBRES DE TYPES PARA ENTENDER COMO SE LLAMARA LA ACCION A EJECUTAR
// ACTION = FUNCTION
import { FRASE_UNO, FRASE_DOS, FRASE_TRES } from "../Types";

const initialState = '';

export default function frasesCelebres(state = initialState, action) {

    switch (action.type) {
        case FRASE_UNO:
            return state = 'Veni, vidi, vici (Julio Cesar)'
        case FRASE_DOS:
            return state = 'No hay caminos para la paz; la paz es el camino (Mahatma Gandhi)'
        case FRASE_TRES:
            return state = 'Haz el amor y no la guerra (John Lennon)'
        default:
            return state;
    }

};



