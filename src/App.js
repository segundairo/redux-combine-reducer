import React from "react";
import { Provider } from "react-redux";
import Carts from "./components/carts";
import Navbar from "./components/navbar";
import store from "./redux/store";
function App() {
  return (
    <Provider store={store}>
      <section className="main">
        <Navbar />
        <Carts />
      </section>
    </Provider>
  );
}

export default App;
