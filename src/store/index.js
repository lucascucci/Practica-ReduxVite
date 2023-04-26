// este index.js en la carpeta store, va a ser el encargado de almacenar TODO nuestro estado global.
import { createStore} from "redux";

import rootReducer from "../reducers";

const store = createStore (rootReducer);

export default store;
