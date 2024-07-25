import CakeContainer from "./components/CakeContainer"
import { Provider } from 'react-redux'
import { store } from "./redux/store"
import IcecreamContainer from "./components/IcecreamContainer"
import HookCakeCointainer from "./components/HookCakeContainer"

function App() {

  return (
    <>
    <Provider store={store}>
      <HookCakeCointainer/>
      <CakeContainer/>
      <IcecreamContainer/>
    </Provider>
    </>
  )
}

export default App
