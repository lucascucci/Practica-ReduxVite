
import './App.css'
import store from './store'
import { Provider } from 'react-redux'
import Home from './components/Home'
import Frases from './components/FrasesReducer'
import Notauno from './components/NotaunoReducer'
import FlashMode from './components/FlashMode'

function App() {
  
  return (
    <div>
      <Provider store={store}>
      <Home/>
      <Notauno/>
      <br>
      </br>
      <hr />
      <Frases/>
      <br>
      </br>
      <hr />
      <FlashMode/>
      </Provider>
    </div>
  )
}

export default App;
