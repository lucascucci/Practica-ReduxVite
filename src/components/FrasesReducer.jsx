import { fraseUno, fraseDos, fraseTres } from "../actions";
import { useDispatch, useSelector } from "react-redux";


const Frases = () => {

    const fragmento = useSelector((state) => state.fragmento);

    const dispatch = useDispatch();

    return (
        <>
            
            <div>
                <button onClick={() => dispatch(fraseUno())}> Frase 1  </button>
                <button onClick={() => dispatch(fraseDos())}> Frase 2 </button>
                <button onClick={() => dispatch(fraseTres())}>Frase 3 </button>
            </div>
            <div>
                {fragmento}
            </div>
        </>
    )



}

export default Frases;
