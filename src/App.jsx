import { Provider } from "react-redux";
import store from "./rtk/store";
import Layout from "./Layout";
import "./App.css";
export default function App() {
  return (
    <div>
      <Provider store={store}>
        <Layout />
      </Provider>
    </div>
  );
}
