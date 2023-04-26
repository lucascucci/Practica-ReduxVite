

import { darkMode, lightMode } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import '../css/flashMode.css'


const FlashMode = () => {
    const mode = useSelector((state) => state.mode)

    const dispatch = useDispatch();
    
    return(
        <>
            {
                mode === true ? 
                <div className="lightMode">
                    <button onClick={() => dispatch(lightMode())}>LightMode</button>
                    <div className="lightMode">
                        <h4>Bienvenidos a la página donde solo podran cambiar el modo</h4>
                        <p>Hola</p>
                    </div>
                </div>
                :
                <div className="darkMode">
                    <button onClick={() => dispatch(darkMode())}>DarkMode</button>
                    <div className="darkMode">
                        <h4>Bienvenidos a la página donde solo podran cambiar el modo</h4>
                        <p>Chau</p>
                    </div>
                </div>
            }
        </>
        
    )
}

export default FlashMode;