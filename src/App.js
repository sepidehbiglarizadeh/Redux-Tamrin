import { Provider } from "react-redux";
import CakeContainer from "./components/CakeContainer";
import CakeWithPayload from "./components/CakeWithPayload";
import HookCakeContainer from "./components/HookCakeContainer";
import HookIceCreamContainer from "./components/HookIceCreamContainer";
import PostSaga from "./components/PostSaga/PostSaga";
import UserContainer from "./components/UserContainer";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        {/* <CakeContainer />
        <HookCakeContainer/>
        <HookIceCreamContainer/>
        <CakeWithPayload/>
        <UserContainer/> */}
        <PostSaga/>
      </div>
    </Provider>
  );
};

export default App;
