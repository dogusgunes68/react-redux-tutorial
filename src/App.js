//import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
//import HooksCakeContainer from "./components/HooksCakeContainer";
//import IceCreamContainer from "./components/IceCreamContainer";
//import NewCakeContainer from "./components/NewCakeContainer";
//import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1 className="center">React Redux</h1>
        {/*
          <HooksCakeContainer></HooksCakeContainer>
        <CakeContainer></CakeContainer>
        <IceCreamContainer></IceCreamContainer>
        <NewCakeContainer></NewCakeContainer>
        <ItemContainer cake></ItemContainer>
        <ItemContainer></ItemContainer>
          */}
        <div className="center">
          <UserContainer></UserContainer>
        </div>
      </div>
    </Provider>
  );
}

export default App;
