/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */

import React from "react";
import { Provider } from "react-redux";
import Navbar from "./components/Navbar";
import Routes from "./routes/routes";
import store from "./Redux/ConfigureStore";

const App = () => (
  <Provider store={store}>
    <Navbar />
    <Routes />
  </Provider>
);

export default App;
