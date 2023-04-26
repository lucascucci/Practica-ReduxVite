
import { notaDos, notaUno, reset } from "../actions";
import { useDispatch, useSelector } from "react-redux";

const NotaUnoReducer = ()=> {
    const evaluacion = useSelector((state) => state.evaluacion)

    const dispatch = useDispatch();

    return(
        <>
        <div>
            <button onClick={() => dispatch(notaUno())}> Ver nota 1 </button>
            <button onClick={() => dispatch(notaDos())}> Ver nota 2 </button>
            <button onClick={() => dispatch(reset())}> Reset </button>
        </div>
        <div>
            {evaluacion}
        </div>
        </>
    )
}

export default NotaUnoReducer;

