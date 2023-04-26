// ACTION NECESITA LOS NOMBRES DE TYPES PARA ENTENDER COMO SE LLAMARA LA ACCION A EJECUTAR
// ACTION = FUNCTION
import { NOTA_UNO, NOTA_DOS, RESET, FRASE_UNO, FRASE_DOS, FRASE_TRES, DARKMODE, LIGHTMODE } from "../Types";


//NOTAS
export const notaDos = () => ({type:NOTA_DOS});
export const notaUno = () =>({type:NOTA_UNO});
export const reset = () => ({type:RESET});


//FRASES
export const fraseUno = () =>({type:FRASE_UNO});
export const fraseDos = () =>({type:FRASE_DOS});
export const fraseTres = () =>({type:FRASE_TRES});


//FLASH
export const darkMode = () => ({type:DARKMODE})
export const lightMode = () => ({type:LIGHTMODE})