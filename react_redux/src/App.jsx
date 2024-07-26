import CakeContainer from "./components/CakeContainer"
import { Provider } from 'react-redux'
import { store } from "./redux/store"
import IcecreamContainer from "./components/IcecreamContainer"
import HookCakeCointainer from "./components/HookCakeContainer"
import NewCakeContainer from "./components/NewCakeContainer"
import ItemContainer from "./components/ItemContainer"
import UserContainer from "./components/UserContainer"

function App() {

  return (
    <>
    <Provider store={store}>
      <UserContainer/>
      {/* <ItemContainer cake/>
      <ItemContainer/>
      <HookCakeCointainer/>
      <CakeContainer/>
      <IcecreamContainer/>
      <NewCakeContainer/> */}
    </Provider>
    </>
  )
}

export default App
